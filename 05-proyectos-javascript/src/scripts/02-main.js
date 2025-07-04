/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /02-main.js  ----------------------------------------------
    -----------------------------------------------------------------------
*/


export const main02 = () => {


    console.log('\n');
    console.warn('-----  02-main.js  -----');
    console.log('\n');
    
    //  -----  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML   -----
    alert('Proyecto 2 JavaScript - Fichero Vinculado');


    //  -----  2. Debes crear las variables: marca, velocidad, stock y modelos (array)  -----
    let marca = 'Audi';
    let velocidad = '250 Km/h';
    let stock = 349;

    let modelos = [
        'A3',
        'Q3',
        'A6',
        'Q8',
        'A1',
        'Q2'
    ];


    //  -----  3. Mostrar las variables por la pantalla (con una frase)  -----
    //  -----  4. Mostrar todos los elementos del array (sin hacerlo manualmente) <ul> </ul>  -----

    const $content = document.querySelector('#content');

    $content.innerHTML = `
        
        <h3> Tenemos cohe de la marca... </h3>
        <p> Marca: ${marca} </p>
        <p> Velocidad: ${velocidad} </p>
        <p> Stock: ${stock} </p>
        <h4> Modelos disponibles: </h4>
    
        <ul>
            ${ modelos.map( modelo => `<li> ${modelo} </li>` ).join('') }
        </ul>
    `;

    
}


main02();