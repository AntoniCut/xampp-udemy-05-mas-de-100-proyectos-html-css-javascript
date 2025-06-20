//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-32-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 32  ----------  

    -  Debes maquetar un slider como este. Ver PDF.
    -  A darle al botón de siguiente o anterior debes mostrar 
       otra imagen haciendo una transición lateral. Ver PDF.
                                     
*/


window.addEventListener("load", () => {  


    //  -----  Referencias al HTML  -----
    
    const btnPrev = document.querySelector('.main__prev');
    const btnNext = document.querySelector('.main__next');

    const slides = document.querySelectorAll('.slides__item');
    
    let count = 0;   //  Contador de pasos.

    
    btnNext.addEventListener('click', () => {
        
        count++;
        
        if (count > slides.length - 1) 
            count = 0;

        show();
    });


    btnPrev.addEventListener('click', () => {
        
        count--;

        if (count < 0) 
            count = slides.length - 1;

        show();
    });


    const show = () => {

        console.log('\n');
        
        slides.forEach((slide, index) => {

            console.log( (index - count) * 100);

            slide.style.transform = `translateX( ${(index - count) * 100}% )`;
         
        });
    }

    show();

       

});
