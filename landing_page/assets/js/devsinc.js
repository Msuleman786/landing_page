let dropdown = document.querySelector('.nav-link')
console.log(dropdown);

let parentelement = dropdown.parentElement
let navabar_menu = document.querySelector('.mega_modal')
const body = document.querySelector('body')
let mega_help = document.querySelector('.mega_help')
let help = document.querySelector('.help')
console.log(help);

help.addEventListener('click', function(e) {
    e.preventDefault()
    e.stopPropagation()
    mega_help.classList.toggle('active');
    this.classList.toggle('active')
    console.log('help');
    
})
        dropdown.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        this.classList.toggle('active');
        navabar_menu.classList.toggle('active');

        console.log('This is toggle');
})
body.addEventListener('click', function(){
    navabar_menu.classList.remove('active');
    mega_help.classList.remove('active');
    help.classList.remove('active')
    dropdown.classList.remove('active')
    are.classList.remove('active');
    mega_are.classList.remove('active')
    deliver.classList.remove('active')
    mega_deliver.classList.remove('active')
    join.classList.remove('active')
    mega_join.classList.remove('active')
    mega_global.classList.remove('active')
    
})
navabar_menu.addEventListener('click', function(e){
    e.stopPropagation();
})

let are = document.querySelector('.are')
const mega_are = document.querySelector('.mega_are');
are.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    mega_are.classList.toggle('active');
    this.classList.toggle('active');
})


let deliver = document.querySelector('.deliver');
const mega_deliver = document.querySelector('.mega_deliver');
deliver.addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation()
    mega_deliver.classList.toggle('active');
    this.classList.toggle('active')
})

let join = document.querySelector('.join');
const mega_join = document.querySelector('.mega_join');
join.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    mega_join.classList.toggle('active')
    this.classList.toggle('active')
})

let global = document.querySelector('.global');
const mega_global = document.querySelector('.mega_global');
global.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    mega_global.classList.toggle('active')
    this.classList.toggle('active');
})