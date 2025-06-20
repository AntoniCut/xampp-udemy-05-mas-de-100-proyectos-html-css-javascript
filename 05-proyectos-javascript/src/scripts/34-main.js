//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-34-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 34  ----------  

    En este proyecto haremos un chat.
    -  Primero haremos un efecto de carga desde cero. Ver PDF.
    -  Y luego este chat. Ver PDF.
    -  Debes hacer un circulo de carga y pasados 5 segundos debe mostrarse el chat.
    -  En el chat podrás “enviar mensajes” y mostrarlos en pantalla. Ver PDF.
                                     
*/


window.addEventListener("load", () => {  


    //  -----  Referencias al HTML  -----
    const main = document.querySelector('.layout__main');
    const messages = document.querySelector('.main__messages');
    const form = document.querySelector('.main__form');
    const input = document.querySelector('.form__input');
    const loader = document.querySelector('.layout__loader');

    
    const sendMessage = (e) => {

        e.preventDefault();

        const text = input.value;

        if(text.trim() != "") {

            messages.innerHTML += `
            
               <article class="messages__message">
                    <p class="message__name"> Antonio Cutillas </p>
                    <p class="message__text"> ${text} </p>
                </article>
            `;

            input.value = "";
        }

    }

    setTimeout(() => {

        loader.style.display = 'none';
        main.style.display = 'flex';

    }, 5000);

    form.addEventListener('submit', sendMessage);
       
    
});
