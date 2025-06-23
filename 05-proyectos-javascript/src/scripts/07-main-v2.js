/*
    -----------------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-y-javascript/  ----------
    ----------  /05-proyectos-javascript/  --------------------------------
    ----------  /src/scripts/  --------------------------------------------
    ----------  /05-main-v1.js  -------------------------------------------
    -----------------------------------------------------------------------
*/


export const main07V2 = () => {


    console.log('\n');
    console.warn('-----  07-main-v1.js  -----');
    console.log('\n');


    const fechaActual = new Date();
    let fechaNacimiento;
    let edadAños, edadMeses, edadDias;
    let fechaNac;
    const limiteFecha = new Date(
        fechaActual.getFullYear() - 150,
        fechaActual.getMonth(),
        fechaActual.getDate() - 1
    );


    do {

        //  -----  Solicitar fecha de nacimiento en formato dd/mm/aa  -----
        fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dd/mm/aa:");

        //  -----  Separar día, mes y año  -----
        const [dia, mes, año] = fechaNacimiento.split('/').map(num => parseInt(num));

        //  -----  Convertir la fecha ingresada en un objeto Date  -----
        //const añoCompleto = año < 100 ? 2000 + año : año;  // Asumir años en formato corto
        fechaNac = new Date(año, mes - 1, dia);

        //  -----  Validar que la fecha sea menor a la actual y no exceda el límite de 150 años + 1 día  -----
        if (fechaNac <= fechaActual && fechaNac >= limiteFecha) {

            //  -----  Años  -----
            edadAños = fechaActual.getFullYear() - fechaNac.getFullYear();

            //  -----  Meses  -----
            edadMeses = fechaActual.getMonth() - fechaNac.getMonth();

            //  -----  Días  -----
            edadDias = fechaActual.getDate() - fechaNac.getDate();

            //  -----  Ajustar si el mes o día actual es menor que el de nacimiento  -----
            if (edadDias < 0) {

                edadMeses--;

                //  -----  Días del mes anterior  -----
                edadDias += new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
            }

            if (edadMeses < 0) {
                edadAños--;
                edadMeses += 12;
            }
        }

    } while (fechaNac > fechaActual || fechaNac < limiteFecha || isNaN(edadAños));

    //  -----  Mostrar la edad en años, meses y días  -----
    alert(`Tienes ${edadAños} años, ${edadMeses} meses y ${edadDias} días.`);

    //  -----  Mostrar en el HTML  -----
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `
        <h3> Tienes ${edadAños} años, ${edadMeses} meses y ${edadDias} días. </h3>
    `;

}


main07V2();
