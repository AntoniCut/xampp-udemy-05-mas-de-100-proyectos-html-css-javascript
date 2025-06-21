/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /05-main-v1.js  -------------------------------------------
    -----------------------------------------------------------------------
*/


import { loadComponentsLayout } from "/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/scripts/load-components-layout.js";


window.addEventListener('DOMContentLoaded', () => {


    //  -----  cargar componentes de la layout  -----
    loadComponentsLayout('Proyecto 5 JavaScript - Version 1');


    const tableContainer = document.querySelector('.tables');
    let result = 0;


    //  -----  bucle para sacar el numero de la tabla  -----
    for (let i = 1; i <= 10; i++) {

        //  -----  Plantilla para mostrar encabezado  --------  
        //  -----  y crear caja operaciones de la tabla  -----
        tableContainer.innerHTML += `
    
            <div class='tables__item'>
                <h2 class='tables__title'> Tabla del ${i} </h2>
                <ul class='tables__list tables__list--${i}'> </ul>
            </div>
    `;

        //  -----  bucle para sacar numeros para las operaciones de la tabla  -----
        for (let n = 1; n <= 10; n++) {

            //  -----  calcular resultado de la operación  -----
            result = i * n;

            //  -----  sacar caja donde mostrar operaciones  -----
            const lists = document.querySelector('.tables__list--' + i);

            //  -----  Imprimir todas las operaciones  -----
            lists.innerHTML += `<li class='list__item'>${i} X ${n} = ${result}</li>`;
            //lists.innerHTML += ` <li class='tables__item'> ${i + ' X ' + n + ' = ' + result} </li> `;
        }

        //  -----  Añadir <hr> después de la quinta tabla  -----
        if (i === 5 || i === 10) {
            const separator = document.createElement('div'); // Crear un nuevo <hr> cada vez
            separator.classList.add('separator');
            tableContainer.appendChild(separator);
        }
    }


});
