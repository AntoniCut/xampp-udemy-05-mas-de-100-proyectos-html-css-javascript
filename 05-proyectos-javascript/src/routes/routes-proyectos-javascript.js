/*
    -------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ----------------------
    ----------  /src/routes/  -----------------------------------
    ----------  /routes-proyectos-javascript.js  ----------------
    -------------------------------------------------------------    
*/


const base = '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript';
const faviconUrl = `${base}/src/favicon/javascript-favicon.ico`;
const stylesUrl = `${base}/src/styles`;


//  -----  Array de objetos con los IDs y las rutas correspondientes  -----
export const routesProyectosJavascript = [

    {
        id: 'home',
        url: `${base}/src/pages/home/index.html`,
        title: '50 Proyectos de JavaScript',
        path: '/',
        favicon: faviconUrl,
        headerTitle: 'Bienvenido a la sección de 50 proyectos de JavaScript',
        styles: `${stylesUrl}/main-home.css`,
        scripts: []
    },

    {
        id: 'proyecto01Js',
        url: `${base}/src/pages/01-proyecto-01-js/index.html`,
        title: 'Proyecto 01 - JavaScript',
        path: '/proyecto-01-js/',
        favicon: faviconUrl,
        headerTitle: 'Proyecto 01 - JavaScript',
        styles: `${stylesUrl}/01-proyecto-01-js.css`,
        scripts: [
            `${base}/src/scripts/01-main.js`
        ]
    },

    {
        id: 'proyecto02Js',
        url: `${base}/src/pages/02-proyecto-02-js/index.html`,
        title: 'Proyecto 02 - JavaScript',
        path: '/proyecto-02-js/',
        favicon: faviconUrl,
        headerTitle: 'Proyecto 02 - JavaScript',
        styles: `${stylesUrl}/02-proyecto-02-js.css`,
        scripts: [
            `${base}/src/scripts/02-main.js`
        ]
    },

    {
        id: 'proyecto03Js',
        url: `${base}/src/pages/03-proyecto-03-js/index.html`,
        title: 'Proyecto 03 - JavaScript',
        path: '/proyecto-03-js/',
        favicon: faviconUrl,
        headerTitle: 'Proyecto 03 - JavaScript',
        styles: `${stylesUrl}/03-proyecto-03-js.css`,
        scripts: [
            `${base}/src/scripts/03-main.js`
        ]
    },

    {
        id: 'proyecto04Js',
        url: `${base}/src/pages/04-proyecto-04-js/index.html`,
        title: 'Proyecto 04 - JavaScript',
        path: '/proyecto-04-js/',
        favicon: faviconUrl,
        headerTitle: 'Proyecto 04 - JavaScript',
        styles: `${stylesUrl}/04-proyecto-04-js.css`,
        scripts: [
            `${base}/src/scripts/04-main.js`
        ]
    },

    // Puedes agregar más proyectos aquí siguiendo el mismo formato.

];
