/*
    -------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ----------------------
    ----------  /spa-main.js  -----------------------------------
    -------------------------------------------------------------    
*/


// Importamos el nuevo plugin convertido a JavaScript moderno
import { initSPAWithMethodLoader } from '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/plugins/init-spa-with-method-loader.js';
import { routesProyectosJavascript } from '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/routes/routes-proyectos-javascript.js';


export const spaMain = () => {

    // ---------- Documento cargado ----------
    console.log('\n');
    console.warn('-----  spa-main.js  -----');
    console.log('\n');

    // ---------- Rutas combinadas del proyecto ----------
    const allRoutes = [
        ...routesProyectosJavascript
    ];

    // ---------- Elemento layout ----------
    const $layout = document.querySelector('#layout');

    // ---------- Configuración del plugin ----------
    const configOptions = {
        routes: allRoutes,
        base: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/components-layout/layout-header.html',
        urlNavBar: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/components-layout/layout-navbar.html',
        //urlFooter: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/components-layout/layout-footer.html',
        urlHome: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/pages/home/index.html',
        titlePage: 'Bienvenido al Curso HTML 5 desde cero de Udemy',
        homePath: '/',
        faviconPage: '/05-mas-de-100-proyectos-html-css-js/05-proyectos-javascript/src/favicon/javascript-favicon.ico',
        titleHeader: '50 Proyectos de JavaScript',
        //draggable: true
    };

    // ---------- Invocar el plugin SPA ----------
    initSPAWithMethodLoader($layout, configOptions);

};
