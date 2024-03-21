let text= document.getElementById('text');
let bats= document.getElementById('bats');
let grass= document.getElementById('grass');
let tree= document.getElementById('tree');
let house= document.getElementById('house');
let hill= document.getElementById('hill');
let bush= document.getElementById('bush');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 2.5 + 'px';
    hill.style.top = value * -1.5 + 'px';
    tree.style.top = value * -1.5 + 'px';
    tree.style.left = value * 1.5 + 'px';
    grass.style.top = value * -1.5 + 'px';
    bats.style.left = value * 1.5 + 'px';
    house.style.left = value * -1.5 + 'px';
    home.style.top = value * 1 + 'px';
})