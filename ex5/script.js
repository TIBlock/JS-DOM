// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp


var button = document.getElementById("myButton");

// var createBox = document.createElement(boxToAdd);
button.addEventListener('click', function(){
    var createBox = document.createElement("div");
    createBox.classList.add("box")
    document.getElementById("boxContainer").appendChild(createBox);
});


// var createBox = document.createElement("div");
// var boxToAdd = document.querySelector(".box");
// createBox.appendChild("")
// console.log(boxToAdd)
// console.log(createBox)
// var fatBox = document.getElementById("boxContainer").appendChild(createBox);

// console.log(fatBox)