//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-35-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 35  ----------  

    Maqueta un widget como este. Ver PDF.
    -  El titulo deberá mostrase poco a poco (efecto escritura o tipeo en el teclado) y cuando se
       complete deberá volver a empezar. Ver PDF.
                                     
*/


window.addEventListener("load", () => {  


    //  -----  Referencias al HTML  -----
    const title = document.querySelector('.main__title');
    
    let text = "¡Bienvenido al Curso!";
    let letterStart = 0;
    let letterEnd = 1;

    const write = () => {

        setInterval( () => {

            title.innerText = text.slice(letterStart, letterEnd);
            letterEnd++;

            if(letterEnd > text.length)
                letterEnd = 1;

        }, 150);

    }

    write();
    
});
