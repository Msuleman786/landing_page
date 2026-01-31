let service_section_btn = document.querySelector('.service_section_btn')
let view_more = document.querySelector('.view_more');
let view_less = document.querySelector('.view_less');
let service_icon = document.querySelector('.service_icon');
const service_cards = document.querySelectorAll('.service_card_block')
let service_card_block_4 = document.querySelector('.service_card_block_4')
let servic_card_block_3 = document.querySelector('.servic_card_block_3');
let servic_card_block_2 = document.querySelector('.servic_card_block_2');
service_section_btn.addEventListener('click', function(){
    view_more.classList.toggle('active');
    view_less.classList.toggle('active');
    service_icon.classList.toggle('active');
    service_card_block_4.classList.toggle('active');
    servic_card_block_3.classList.toggle('active');
    servic_card_block_2.classList.toggle('active');
     service_cards.forEach(card => {
        card.classList.toggle('active');
    })
})
let menu_bar = document.querySelector('.menu_bar');
let header_btn = document.querySelector('.header_btn');
let header = document.querySelector('header');

let menu_icon = document.querySelector('.menu_icon');
menu_icon.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    menu_bar.classList.toggle('active');
})

function handleResponsiveMenu(){
    if(window.innerWidth <= 766){
        if(!menu_bar.contains(header_btn)){
            menu_bar.appendChild(header_btn);
        }
    }else{
        if(menu_bar.contains(header_btn)){
            menu_bar.removeChild(header_btn);
            header.insertBefore(header_btn, header.children[2])
            // console.log(header.children.length);
            // header.appendChild(header_btn)
        }
    }
}
handleResponsiveMenu();
window.addEventListener('resize', handleResponsiveMenu)

document.addEventListener('click', function(e){
    if(!e.target.closest('.menu_bar'))
    menu_bar.classList.remove('active');
})

// Mega Modal 
let mega_modal = document.querySelectorAll('.mega_modal')

document.addEventListener('DOMContentLoaded', function(){
    let triggers = document.querySelectorAll('.trigger');
let mega_modal = document.querySelectorAll('.mega_modal')
console.log(triggers);

triggers.forEach(triger => {
    //  console.log(triger);       
    triger.addEventListener('click', function(){
       let trigerValue = triger.getAttribute('data-target');
       console.log('trigger_Value' + trigerValue);
        let target_Modal = document.querySelector(`.mega_modal[data-target='${trigerValue}']`);
        let isAllreadyOpend = target_Modal.classList.contains('active')
        console.log(target_Modal);
        mega_modal.forEach(modal => modal.classList.remove('active'));
        triggers.forEach(t => t.querySelector('.svgg').classList.remove('active'));
        if(!isAllreadyOpend){
            target_Modal.classList.add('active');
            triger.querySelector('.svgg').classList.add('active')
        }
    })


})
    document.addEventListener('click', function(e){
        if(!e.target.closest('.mega_modal') && !e.target.closest('.trigger') && !e.target.closest('.global')){
            mega_modal.forEach(modal => modal.classList.remove('active'));
            triggers.forEach(t => t.querySelector('.svgg').classList.remove('active'));
            global_modal.classList.remove('active');
            globa_svg.classList.remove('active');
            console.log('closest');
            
        }
    })
})

// logic for add mega_modal in menu bar
mega_modal.forEach(modal => {
    if(!menu_bar.contains(modal))
        // menu_bar.insertBefore(modal, menu_bar.children[1]);
        menu_bar.appendChild(modal);

})
// global
let global = document.querySelector('.global');
let global_modal = document.querySelector('.global_modal');
let globa_svg = document.querySelector('.global_svgg');
global.addEventListener('click', function(){
    global_modal.classList.toggle('active');
    globa_svg.classList.toggle('active');
    console.log('clicked');
    
})
//**** slider logic */
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const leadership_slider = document.querySelector('.leader_slider');
const leader_groups = document.querySelectorAll('.leader_group');

const visible_slides = 2;
let index = 0;
let baseOffset = 0;
let currentSlideWidth = 0;

function handleWidth() {
    const width = window.innerWidth;

    //  Decide slide width based on screen
    if (width <= 478) {
        currentSlideWidth = width;
        baseOffset = 0;
    } else {
        currentSlideWidth = Math.min(width / 3, 446);
        baseOffset = currentSlideWidth;
    }

    //  Apply width to slides
    leader_groups.forEach(item => {
        item.style.width = `${currentSlideWidth}px`;
        item.style.flexShrink = '0';
    });

    //  Move slider correctly
    leadership_slider.style.transform =
        `translateX(${baseOffset - index * currentSlideWidth}px)`;
}

// Navigation
const total_slides = leader_groups.length;
const remaining_slide = total_slides - visible_slides;

next.addEventListener('click', () => {
    if (index < remaining_slide) {
        index++;
        handleWidth();
    }
});

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
        handleWidth();
    }
});

// Init
handleWidth();
window.addEventListener('resize', handleWidth);


// **** 
// logic for the Footer Feature on clicking

document.addEventListener('DOMContentLoaded', function(){
    let clicker = document.querySelectorAll('.clicker');
    let pannel = document.querySelectorAll('.pannel');
    clicker.forEach( click  => {
            click.addEventListener('click', function(){
                let click_Value = click.getAttribute('data-target');
                let target_pannel = document.querySelector(`.pannel[data-target='${click_Value}']`);
                let isAllreadyOpend = target_pannel.classList.contains('active');
        
                pannel.forEach(p => p.classList.remove('active'));
                clicker.forEach(c => c.querySelector('.footer_svg').classList.remove('active'));

                if(!isAllreadyOpend){
                    target_pannel.classList.toggle('active');
                    click.querySelector('.footer_svg').classList.toggle('active');
                    console.log(target_pannel);
                    
                }
            })

        document.addEventListener('click', e =>{
        if(!e.target.closest('.pannel') && !e.target.closest('.clicker')){
            clicker.forEach(c => c.querySelector('.footer_svg').classList.remove('active'));
            pannel.forEach(p => p.classList.remove('active'));
            // console.log('outside clicked');
            
        }
    })
    })

})