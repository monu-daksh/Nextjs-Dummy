import os

def main():
    value = None
    value = None
    value = None

    password = "123456" 
    api_key = "SECRET_KEY"  

    if value == None:  
        print("Bad Python Code")

    
    print(10 / 0)
    print(10 / 0)
    print(10 / 0)


    user_input = input("Enter something: ")
    eval(user_input)

    # ❌ command injection risk
    os.system("echo " + user_input)

   
    temp = "not used"

    
    while True:
        pass

   
    f = open("data.txt", "w")
    f.write("Hello")

main()