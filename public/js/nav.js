var navLogo = document.getElementById('nav-logo');
var navBar = document.getElementById('nav-bar');


navBar.style.display = 'none';
navLogo.addEventListener('click',function(){
    if(navBar.style.display == 'none'){
        navBar.style.display = 'block'
    }
    else
        navBar.style.display = 'none';
})