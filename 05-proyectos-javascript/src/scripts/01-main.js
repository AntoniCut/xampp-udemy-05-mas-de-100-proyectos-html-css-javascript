//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-01-js/assets/js/01-main.js  ********** 
//  ************************************************************


/*
    ----------  Enunciado Proyecto 1  ----------  
    -  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML. 
    -  2. Debes crear las variables: nombre, apellido, edad, pais y conocimientos,
          esta ultima debe ser un array.
    -  3. Muestra todos los valores de las variables por la consola.
    -  4. Después cambia el valor de la edad y añade un nuevo elemento al array. 
    -  5. Muestra esos nuevos valores por la consola.
*/

console.warn('-----  Proyecto 1 JS - main.js  -----');
console.log('\n');


//  -----  referencias al HTML  -----
const content = document.querySelector('.content');


//  -----  1. Crea un fichero JavaScript y vinculalo con tu fichero HTML  -----
alert('Proyecto 1 JavaScript - Fichero Vinculado');


//  -----  2. Debes crear las variables: nombre, apellido, edad, pais y conocimientos,
//  -----     esta ultima debe ser un array  -----
let nombre = 'Antonio Francisco';
let apellidos = 'Cutillas Garcia';
let edad = 49;
let pais = 'España';

let conocimientos = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'React',
    'Astro'
];


//  -----  3. Muestra todos los valores de las variables por la consola  -----
console.log(`
    
    Hola, soy ${nombre} ${apellidos} y tengo ${edad} años, soy de ${pais}
    y tengo los siguientes conocimientos: 
    - ${conocimientos[0]}.
    - ${conocimientos[1]}.
    - ${conocimientos[2]}.
    - ${conocimientos[3]}.
    - ${conocimientos[4]}.
    - ${conocimientos[5]}.        
    
`);


//  -----  Mostrar en el HTML  -----
content.innerHTML = `

    <h3> 
        Hola, soy ${nombre} ${apellidos} <br>
        y tengo ${edad} años, soy de ${pais} <br>
         y tengo los siguientes conocimientos: <br>
        - ${conocimientos[0]}. <br>
        - ${conocimientos[1]}. <br>
        - ${conocimientos[2]}. <br>
        - ${conocimientos[3]}. <br>
        - ${conocimientos[4]}. <br>
        - ${conocimientos[5]}. <br>   
    </h3>

`;


//  -----  4. Después cambia el valor de la edad y añade un nuevo elemento al array. 
edad = 50;
conocimientos.push('PHP');


//  -----  5. Muestra esos nuevos valores por la consola.
console.log(`
    
    Hola, ahora mi edad es de ${edad} años,
    y tengo un conocimiento más que es ${conocimientos[conocimientos.length-1]}.
      
`);


//  -----  Mostrar en el HTML  -----
content.innerHTML += `

    <h3> 
        Hola, ahora mi edad es de ${edad} años, <br>
        y tengo un conocimiento más que es ${conocimientos[conocimientos.length-1]}.
    </h3>

`;
