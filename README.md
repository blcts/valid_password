# valid_password

Suppose we have a text file that looks like this:
``` 
a 1-5: abcdj
z 2-4: asfalseiruqwo
b 3-6: bhhkkbbjjjb
```
Each line consists of a password requirement and the password itself. The password requirement specifies the character that the password must contain and how many times it must occur. For example, the requirement in the first line means that the character "a" must occur between 1 and 5 times. In the example above, two passwords are valid (1 and 3) because they satisfy their requirements, the 2nd is not, because the character "z" in it should occur 2 to 4 times, but never occurs.
I need to write code that will count the number of valid passwords in such a file.

1. I use the fs.readFile() method to read a file in Node.js 
<img width="441" alt="Screenshot 2022-10-10 at 17 16 18" src="https://user-images.githubusercontent.com/27241911/194887053-ba8a26a9-c889-41d0-980d-545c0dbadbbb.png">

2. Then I replace my data for caregorys (letter, number, string)
<img width="512" alt="Screenshot 2022-10-10 at 17 17 50" src="https://user-images.githubusercontent.com/27241911/194887979-d6157a48-b917-4e2f-b85a-5584abac3a50.png">

3. Then in the for loop I checked is password valid or not and if so, I increased result
<img width="480" alt="Screenshot 2022-10-10 at 17 26 24" src="https://user-images.githubusercontent.com/27241911/194889064-7995a3c9-7a19-4e54-ab95-8e0f6f06dfd9.png">


# There is a results
2 of 3 are right
<img width="1440" alt="Screenshot 2022-10-10 at 17 06 11" src="https://user-images.githubusercontent.com/27241911/194889177-b9345a35-5cad-465d-9526-670765b91fe1.png">

Then I changed first string and delete ``` a ``` and become 1 of 3 are right <img width="1440" alt="Screenshot 2022-10-10 at 17 06 49" src="https://user-images.githubusercontent.com/27241911/194889417-811479c2-7d41-402b-9eae-ae224ddc8683.png">

### To run app - use ``` nmp start ```
