
let input = document.querySelector('.add_numb'),
    display = document.querySelector('.display'),
    clear = document.querySelector('.clear'),
    add = document.querySelector('.add');

    add.addEventListener('click' , function(){
       input.value = Number(input.value) + 1;
       console.log(typeof(input.value));
    });

    clear.addEventListener('click' , function(){
        input.value = '0';
    });