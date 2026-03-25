import os
import pickle
import sqlite3
import subprocess

x = 10
y = 0

unused_var = "I am useless"

# CRITICAL: Hardcoded AWS credentials (Secret Exposure)
AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
DB_PASSWORD = "SuperSecret@1234"

def divide(a, b):
    return a / b  # No error handling

def process_data(data):
    result = []
    for i in range(len(data)):  # bad practice
        result.append(data[i] * 2)
    return result

# CRITICAL: SQL Injection vulnerability
def get_user(username):
    conn = sqlite3.connect("users.db")
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '" + username + "'"  # SQL Injection
    cursor.execute(query)
    return cursor.fetchall()

# CRITICAL: OS Command Injection via shell=True
def ping_host(host):
    result = subprocess.check_output("ping -c 1 " + host, shell=True)  # Command Injection
    return result

# CRITICAL: Unsafe deserialization (arbitrary code execution)
def load_user_data(raw_bytes):
    return pickle.loads(raw_bytes)  # Unsafe deserialization

# HIGH: eval() on unsanitized user input (Remote Code Execution)
def calculate(expression):
    return eval(expression)  # Arbitrary code execution via eval

# HIGH: Path traversal vulnerability
def read_user_file(filename):
    base_dir = "/var/app/files/"
    filepath = base_dir + filename  # No path sanitization → path traversal
    with open(filepath, "r") as f:
        return f.read()

# HIGH: Use of os.system with user input (Command Injection)
def run_report(report_name):
    os.system("generate_report.sh " + report_name)  # Command Injection

def main():
    # Division by zero risk
    print(divide(x, y))

    # Hardcoded password (security issue)
    password = "123456"

    # No input validation
    user_input = input("Enter number: ")
    print(int(user_input) * 2)

    # CRITICAL: eval on user input
    expr = input("Enter expression: ")
    print(calculate(expr))

    # CRITICAL: SQL Injection usage
    uname = input("Enter username: ")
    print(get_user(uname))

    # CRITICAL: Command Injection usage
    host = input("Enter host to ping: ")
    print(ping_host(host))

    # CRITICAL: Unsafe deserialization
    raw = input("Enter serialized data (hex): ")
    print(load_user_data(bytes.fromhex(raw)))

    # Resource leak (file not closed)
    f = open("test.txt", "r")
    content = f.read()
    print(content)

    # Duplicate code
    print("Hello")
    print("Hello")

    # Bad naming
    a = [1, 2, 3]
    b = process_data(a)
    print(b)

if __name__ == "__main__":
    main()