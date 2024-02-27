document.addEventListener('DOMContentLoaded', function() {


let choice = document.querySelector("#nemo") 

let bye = function(){
    choice.style.display = 'none'

}

choice.onclick = bye;


setTimeout(() => {
    choice.style.display = 'block'
}, timeout, 2000);

});