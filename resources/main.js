//Declaring variables and their functionalities

const colorArray = ["green", "red", "blue", "black", "white", "pink"];

const btn = document.getElementById('btn');

const colorForSpan = document.querySelector('.color');



//Now setting up the event listeners


btn.addEventListener("click", function ()
    {
        //purpose of this func is to randomly access values of the array using loop and then display it as the body's background-color. 
        
        //The random number should be between 0-3 because of indexing in array.

        const randomNumber = getRandomNumber();
        console.log(randomNumber);
        
        document.body.style.backgroundColor = colorArray[randomNumber];

        colorForSpan.textContent = colorArray[randomNumber];
    }
);

function getRandomNumber()
{
    return Math.floor(Math.random()*colorArray.length);
}