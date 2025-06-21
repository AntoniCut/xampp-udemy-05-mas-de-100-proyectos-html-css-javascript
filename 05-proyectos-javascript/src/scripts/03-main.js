/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /03-main.js  ----------------------------------------------
    -----------------------------------------------------------------------
*/


import { loadComponentsLayout } from "/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/scripts/load-components-layout.js";


window.addEventListener('DOMContentLoaded', () => {

    //  -----  cargar componentes de la layout  -----
    loadComponentsLayout('Proyecto 3 JavaScript');

    console.log('\n');
    console.warn('-----  Proyecto 3 JS - main.js  -----');
    console.log('\n');


    const $content = document.querySelector('#content');

    let velocidadVehiculo = parseInt(prompt('¿ A que velocidad vas?', 50));
    const velocidadMaxima = 60;

    if (velocidadVehiculo > velocidadMaxima) {
        alert('Baje la Velocidad, vas a' + velocidadVehiculo + ' km/h');
        $content.innerHTML = `<h3> Baje la velocidad, vas a ${velocidadVehiculo} km/h </h3>`;
    }

    else {
        alert('Velocidad correcta!!!');
        $content.innerHTML = `<h3> Velocidad correcta!!! </h3>`;
    }

});



