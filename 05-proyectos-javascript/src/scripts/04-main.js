/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /04-main.js  ----------------------------------------------
    -----------------------------------------------------------------------
*/



export const main04 = () => {


    console.log('\n');
    console.warn('-----  04-main.js  -----');
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

    
}


main04();