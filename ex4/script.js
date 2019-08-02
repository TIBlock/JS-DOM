// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.getElementById("myButton");
// var clicked = document.querySelectorAll(".box");
button.addEventListener('click', function(){
    document.querySelectorAll(".box").forEach(function (item){
        item.style.background="blue";
    });
});


