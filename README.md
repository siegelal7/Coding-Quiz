# Coding-Quiz

Welcome to my beginner JavaScript quiz! Thank you very much for checking this fun quiz out, and I hope you gain some valuable knowledge.
In writing this web app, I had quite a challenge in tieing together everything I've learned so far.

The function that I used to shuffle my array came from this article: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/; I figured rather than reinventing the wheel for that specific function, I'd go with a simple function someone already created. Originally, I had built some logic into my renderQuestions() function that would push the index of each selected questions to an array- then it would test whether that index was present in the the array before populating the question. This way each question was only asked once and it would randomize them using Math.floor(Math.random()\*length of question array). This proved much more difficult than simply shuffling the array with a seperate function before using the array of objects in renderQuestions.
