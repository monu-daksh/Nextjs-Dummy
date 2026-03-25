import os
import math

GLOBAL_VAR = "I should not be global"
another_global = 999


def do_stuff():
    
    x = 100


    a = 5
    b = 10
    c = a + b
    print(c)


    list = [1, 2, 3]
    for i in range(0, len(list)):
        print(list[i])

    # Hardcoded sensitive data
    password = "admin123"
    api_key = "XYZ-SECRET-KEY"


    if True:
        print("This always runs")


    try:
        value = int("abc")
    except:
        pass


    num = 10
    denom = 0
    try:
        print(num / denom)
    except Exception as e:
        print("error")

    # Infinite loop
    i = 0
    while i < 3:
        print("Looping...")



    print("repeat")
    print("repeat")


    messy_function()


def messy_function():

    x = 1 + 2
    print(x)

    x = 1 + 2
    print(x)


    if x > 3:
        print("Magic number used")


    y = None
    if y == None:
        print("y is None")


if __name__ == "__main__":
    do_stuff()