const hamburgherMenù = document.querySelector('.hamburger-menu');
console.log(hamburgherMenù.classList);

const iconaDaCliccare = document.querySelector('.header-right > a')
console.log(iconaDaCliccare.classList);

const crocettaDaCliccare = document.querySelector('a.close');
console.log(crocettaDaCliccare.classList);

iconaDaCliccare.addEventListener('click', function(){
    hamburgherMenù.classList.add('active');
});

crocettaDaCliccare.addEventListener('click', function(){
    hamburgherMenù.classList.remove('active');
});