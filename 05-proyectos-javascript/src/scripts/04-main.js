/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /04-main.js  ----------------------------------------------
    -----------------------------------------------------------------------
*/


import { loadComponentsLayout } from "/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/scripts/load-components-layout.js";


window.addEventListener('DOMContentLoaded', () => {


    //  -----  cargar componentes de la layout  -----
    loadComponentsLayout('Proyecto 4 JavaScript');

    console.log('\n');
    console.warn('-----  Proyecto 4 JS - main.js  -----');
    console.log('\n');

    const $content = document.querySelector('#content');

    let sueldo = parseInt(prompt('¿Cuanto cobras?', 0));

    switch (true) {

        case sueldo <= 500:
            $content.innerHTML = '<h3> Trabajas a media jornada </h3>';
            break;
        case sueldo <= 1000 && sueldo > 500:
            $content.innerHTML = '<h3> Tienes el salario mínimo </h3>';
            break;
        case sueldo <= 1700 && sueldo > 1000:
            $content.innerHTML = '<h3> Tienes un sueldo bueno </h3>';
            break;
        case sueldo > 1700:
            $content.innerHTML = '<h3> Tienes un sueldo extraordinario </h3>';
            break;
        default:
            $content.innerHTML = '<h3> Eres un estudiante, porque no tienes sueldo </h3>';

    };

});
