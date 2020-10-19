"""
https://www.practicepython.org/exercise/2014/01/29/01-character-input.html

Create a program that asks the user to enter their name and their age.
Print out a message addressed to them that tells them the year that they will turn 100 years old.
"""
































# solution
"""
import datetime
currentYear = datetime.datetime.now().year

name = input('What is your name?')
age = int(input('What is your age?'))

yearsUntil100 = 100 - age

year100 = currentYear + yearsUntil100

print('You will turn 100 years old in', year100)
"""