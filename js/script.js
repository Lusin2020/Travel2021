

let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header .search_bar');
let loginBtn =document.querySelector('header .icons .fa-user');
let loginBar = document.querySelector('.login_form');
let closeLoginBarBtn = document.querySelector('.login_form #form_close');
let menuBtn = document.querySelector('header #menu-bar');
let navbar = document.querySelector('header .navbar');
let videoBtn = document.querySelectorAll('.home .controls .vid-btn');


window.onscroll = ()=>{
    searchBar.classList.remove('active');
    searchBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    loginBar.classList.remove('active');
};


searchBtn.addEventListener('click', ()=>{
    searchBar.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
});

loginBtn.addEventListener('click', ()=>{
    loginBar.classList.add('active');
});

closeLoginBarBtn.addEventListener('click', ()=>{
    loginBar.classList.remove('active');
});

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
});





// for(let i = 0; i<videoBtn.length; i++){
//     videoBtn[i].addEventListener('click', ()=>{
//         document.querySelector('.home .controls .active').classList.remove('active');
//         videoBtn[i].classList.add('active');

//         let src = videoBtn[i].getAttribute('data-src');
//         document.querySelector('.home .video_container video').src = src;
//     });
// };


videoBtn.forEach ( (btn)=> {                 //forEach@ poxarinum a for ciklin
    btn.addEventListener('click', ()=>{
        document.querySelector('.home .controls .active').classList.remove('active');
        btn.classList.add('active');
        let dataSrc = btn.getAttribute('data-src');
        document.querySelector('.home .video_container video').src = dataSrc;
    });
});
