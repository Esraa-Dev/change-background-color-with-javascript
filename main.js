
const wrapper = document.querySelector('body');
const myBtn = document.querySelector('button');
wrapper.style.backgroundColor="#00ff84";
let colors =["red","black","blue","green","yellow","purple","orange","white","brown","pink"]
function changeBackground(){
const randomColor=parseInt(Math.random()*colors.length)
wrapper.style.backgroundColor=colors[randomColor];
}

myBtn.addEventListener('click', changeBackground)



