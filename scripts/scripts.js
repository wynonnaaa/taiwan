
// const body = document.body;
// const btn = document.querySelector('#btn');
// const menu = document.querySelector('#menu-nav');

// btn.addEventListener('click', function(e){
//     e.preventDefault();
//     menu.classList.toggle('open');
// })

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });