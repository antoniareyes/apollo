'use strict'

const grande    = document.querySelector('.grande');
var i = 0;
var operacion= 0;
var counterVal= 0;

function left (  ) {
    counterVal== (--counterVal);

    if(counterVal<0){
        counterVal = 0;
    }
    
    grande.style.transform = `translateX(${operacion-(25*(counterVal))}%)`;
}

function right(  )  {
    counterVal== (++counterVal)

    if(counterVal>3){
        counterVal = 0;
    }

    grande.style.transform = `translateX(${ operacion - (25*counterVal)}%)`;
}


// external js: flickity.pkgd.js
