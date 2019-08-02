//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it
var decrementButton = document.getElementById('decrement');
var incrementButton = document.getElementById('increment');
var counter = document.getElementById('counter');

var count = 0; // This variable holds the current value of the counter!

incrementButton.addEventListener('click', function(){
    count = count + 1;
    counter.innerHTML = count;    
});

decrementButton.addEventListener('click', function() {
    count = count - 1;
    counter.innerHTML = count; 
});