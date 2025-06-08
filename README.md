# summer-chores

A person was given a list of chores to accomplish in a specific order. The repository will be completed with three separate JavaScript files. The first file is called callbackVersion.js. In order to create this project the results must be consoled out with node.js. I broke the assignment down into steps because when I added all the code that I had written the result was not correct. I added the first three chores based on the youtube video BroCode Understanding Promises. I consoled these out using node.js and after that was successful I added each and checked that it did work. 

The list that we are given is mowing the yard, weedeating the edges of the house and fence line, trimming the hedges, collecg fallen wood for summer night fires, and watering the garden. We are then given the time that each job will take to complete; which, I added with a setTimeout method. The times given are 2000 milliseconds for mowing, 1500 milliseconds to weedeat the yard, 1000 milliseconds to trim the hedges, 2500 milliseconds to collect wood, and finally 500 milliseconds to water the garden. For each of these we are givent the function names of mowYard, weedEat, trimHedges, collectWood, waterGarden, doSummerChores. 

We are told in the instructions to "think about how random number generation works" thus we know that we are required to add the Math.random method to accomodate for the "If they get too tired, they may fall asleep before completing all their chores." However, we are given that "There's never a chance of the person falling asleep before mowing the yard", so the method is not used for that function. 

After adding the very first else if statement, I consoled the result to make sure that the code continued to work. After making sure that it did, I continued adding the statements to the rest of the code.

After getting the output to work and the statements said "You did this or that" I read the directions again and noticed that there were two arguments for the function which included a name and a callback- not just the callback. I went back and added a name and then added name to each function. This caused an error, which I had to figure out.

Added a file named promiseVersion.js. On this file I changed all the code from callbacks to promises. I also chained the promises to replace the callback hell on the callbackVersion.js page. I used node.js to result or console each chore as I went. I found that I had to do the chain of promises prior to being able to visualize the result. 

Added a file named asyncAwaitVersion.js. On this file, I copied the code from the promiseVersion file since the instructions mentioned promises and pasted it into the asyn file. I then updated the doSummerChores function to use async and await instead of chaining the promises. I attempted to do this without using try and catch but it gave me an error of unhandledPromiseRejection which I found the error and corrected it. As a result I added try and catch. After running the file in node.js and changing some issues the code runs correclty and completes all the chores.



