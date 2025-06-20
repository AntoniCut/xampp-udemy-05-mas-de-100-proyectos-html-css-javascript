/*
    -------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-js/  ----------
    ----------  /src/scripts/  ----------------------------------
    ----------  /load-components-layout.js  ---------------------
    -------------------------------------------------------------
*/



//import { actionsNavbar } from "/01-curso-jquery/src/scripts/actions-navbar.js";

export const loadComponentsLayout = async (headerTitle) => {
    
    
    console.log('\n');
    console.warn('-----  load-components-layout.js (vanilla JS) -----');

    const layoutHeader = document.getElementById('layoutHeader');
    const layoutNavbar = document.getElementById('layoutNavbar');
    const layoutFooter = document.getElementById('layoutFooter');

    // Cargar layout-header
    try {
        const headerRes = await fetch('/05-mas-de-100-proyectos-html-css-js/06-proyectos-javascript/src/components-layout/layout-header.html');
        const headerHtml = await headerRes.text();
        layoutHeader.innerHTML = headerHtml;

        const headerTitleEl = layoutHeader.querySelector('.header__title');
        if (headerTitleEl) headerTitleEl.innerHTML = headerTitle;

    } catch (err) {
        console.error('Error cargando layout-header:', err);
    }

    /*
    // Cargar layout-navbar
    try {
        const navbarRes = await fetch('/01-curso-jquery/src/components-layout/layout-navbar.html');
        const navbarHtml = await navbarRes.text();
        layoutNavbar.innerHTML = navbarHtml;

        actionsNavbar();

    } catch (err) {
        console.error('Error cargando layout-navbar:', err);
    }

    */
    // Cargar layout-themes (comentado en jQuery, opcional)
    // try {
    //   const themesRes = await fetch('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/plugins/themes-jquery-ui/themes-jquery-ui.html');
    //   const themesHtml = await themesRes.text();
    //   layoutThemesUI.innerHTML = themesHtml;
    // } catch (err) {
    //   console.error('Error cargando layout-themes:', err);
    // }


    /*
    // Cargar layout-footer
    try {
        const footerRes = await fetch('/01-curso-jquery/src/components-layout/layout-footer.html');
        const footerHtml = await footerRes.text();
        layoutFooter.innerHTML = footerHtml;

    } catch (err) {
        console.error('Error cargando layout-footer:', err);
    }

    */
};


/*
import { actionsNavbar } from "/01-curso-jquery/src/scripts/actions-navbar.js";


export const loadComponentsLayout = (headerTitle) => {


    (function ($) {

        console.log('\n')
        console.warn('-----  load-components-layouts.js  -----');

        const $layoutHeader = $('#layoutHeader');
        const $layoutNavbar = $('#layoutNavbar');
        const $layoutThemesUI = $('#layoutThemesUI');
        const $layoutFooter = $('#layoutFooter');


        $layoutHeader.load(

            '/01-curso-jquery/src/components-layout/layout-header.html',

            function () {

                const $headerTitle = $('.header__title');
                $headerTitle.html(`${headerTitle}`);

            }
        )


        $layoutNavbar.load(

            '/01-curso-jquery/src/components-layout/layout-navbar.html',

            function () {

                actionsNavbar();

            }
        );


        //$layoutThemesUI.load('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/plugins/themes-jquery-ui/themes-jquery-ui.html');

        $layoutFooter.load('/01-curso-jquery/src/components-layout/layout-footer.html');



    })(jQuery);

}


*/