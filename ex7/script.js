// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp


var sect = document.querySelector("#section");
console.log(sect);
var sectHeader = document.querySelector("#section-header")
console.log(sectHeader);





sectHeader.addEventListener('click', function(){

    sect.toggleAttribute('hidden');


});