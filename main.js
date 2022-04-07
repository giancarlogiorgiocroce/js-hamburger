const hamburgherMenu = document.querySelector('.hamburger-menu');
console.log(hamburgherMenu.classList);

const iconaDaCliccare = document.querySelector('.header-right > a')
console.log(iconaDaCliccare.classList);

const crocettaDaCliccare = document.querySelector('a.close');
console.log(crocettaDaCliccare.classList);

iconaDaCliccare.addEventListener('click', function(){
    hamburgherMenu.classList.add('active');
});

crocettaDaCliccare.addEventListener('click', function(){
    hamburgherMenu.classList.remove('active');
});