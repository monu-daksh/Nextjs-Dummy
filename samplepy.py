import os

x = 10
y = 0

unused_var = "I am useless"

def divide(a, b):
    return a / b  # No error handling

def process_data(data):
    result = []
    for i in range(len(data)):  # bad practice
        result.append(data[i] * 2)
    return result

def main():
    # Division by zero risk
    print(divide(x, y))

    # Hardcoded password (security issue)
    password = "123456"

    # No input validation
    user_input = input("Enter number: ")
    print(int(user_input) * 2)

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