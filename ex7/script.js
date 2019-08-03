// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


var sect = document.querySelector("#section");
console.log(sect);
var sectHeader = document.querySelector("#section-header");
console.log(sectHeader);
var totalHeight = document.getElementById("section").offsetHeight;
console.log(totalHeight)
sect.style.maxHeight = totalHeight + "px";
var paragraph = document.getElementById("paragraph");



sectHeader.addEventListener('click', function(){
    if (sect.style.maxHeight === 0 + "px") {
        sect.style.maxHeight = totalHeight + "px";
    }else {
        sect.style.maxHeight = 0; 
    }

    
    //sect.classList.toggle("contentHide");
    // paragraph.classList.toggle("contentHide")
    // var paragraph = document.getElementById('paragraph').classList.toggle('content');
    // sect.toggleAttribute("class", "content")
    // sect.toggleAttribute('hidden');


});