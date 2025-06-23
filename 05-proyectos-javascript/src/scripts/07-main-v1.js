/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /05-main-v1.js  -------------------------------------------
    -----------------------------------------------------------------------
*/


export const main07V1 = () => {


    console.log('\n');
    console.warn('-----  07-main-v1.js  -----');
    console.log('\n');

    const actualYear = new Date().getFullYear();
    let year = 1990;
    let result = 0;

    do {

        year = parseInt(prompt('¿En que año naciste?', year));

    } while (year < (actualYear - 150) || year > actualYear);

    result = actualYear - year;
    alert('tienes ' + result + ' años');

    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
        <h3> Tienes ${result} años </h3>
    `;

}


main07V1();

