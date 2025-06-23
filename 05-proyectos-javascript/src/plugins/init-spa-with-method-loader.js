/*
    -------------------------------------------------------------
    ----------  /05-mas-de-100-proyectos-html-css-js/  ----------
    ----------  /05-proyectos-javascript/  ----------------------
    ----------  /src/plugins/  -----------------------------------
    ----------  /init-spa-with-method-loader.js  ----------------
    -------------------------------------------------------------
*/



export function initSPAWithMethodLoader(layout, options = {}) {

    const settings = {
        routes: [],
        base: '',
        layoutHeader: '#layoutHeader',
        layoutGoHome: '#layoutGoHome',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '',
        urlNavBar: '',
        urlFooter: '',
        urlHome: '',
        titlePage: 'Página sin Título',
        homePath: '/',
        faviconPage: '',
        titleHeader: 'Página sin Título',
        draggable: false,
        ...options
    };

    const $layout = layout;

    const loadHTML = async (url, selector, callback = null) => {
        try {
            const res = await fetch(url);
            const html = await res.text();
            const el = document.querySelector(selector);
            if (el) el.innerHTML = html;
            if (callback) callback();
        } catch (e) {
            console.error(`❌ Error al cargar ${url}:`, e);
        }
    };

    const makeDraggable = (el) => {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;

        el.style.position = 'absolute';
        el.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - el.offsetLeft;
            offsetY = e.clientY - el.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                el.style.left = `${e.clientX - offsetX}px`;
                el.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => isDragging = false);
    };

    const updateFavicon = (favicon) => {
        let link = document.querySelector('link[rel~="icon"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/x-icon';
            document.head.appendChild(link);
        }
        link.href = `${favicon}?t=${Date.now()}`;
    };

    const updateHeader = (title) => {
        const headerTitle = document.querySelector(`${settings.layoutHeader} .header__title`);
        if (headerTitle) {
            headerTitle.textContent = title;
        } else {
            console.warn('⚠️ No se encontró .header__title para actualizar el título');
        }
    };

    const loadStylesheet = (href) => {
        if (!document.querySelector(`link[href*="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${href}?t=${Date.now()}`;
            document.head.appendChild(link);
        }
    };



    const loadScriptsIfExists = async (scriptUrl) => {
        
        try {
            
            // Forzar recarga usando una marca de tiempo
            const urlWithCacheBypass = `${scriptUrl}?v=${Date.now()}`;
            
            await import(urlWithCacheBypass);
            
            console.log(`✅ Módulo importado dinámicamente: ${urlWithCacheBypass}`);

        } catch (e) {
            console.error(`❌ Error al importar el módulo: ${scriptUrl}`, e);
        }

    };


    


    const loadContent = async (route) => {

        const main = document.querySelector(settings.layoutMain);

        if (!main) {
            console.error(`❌ No se encontró el contenedor ${settings.layoutMain}`);
            return;
        }

        try {

            main.innerHTML = '<p>Cargando...</p>';
            const res = await fetch(route.url);
            if (!res.ok) throw new Error(res.statusText);

            const html = await res.text();
            main.innerHTML = html;
            document.title = route.title || settings.titlePage;
            updateFavicon(route.favicon || settings.faviconPage);
            updateHeader(route.headerTitle || settings.titleHeader);
            if (route.styles) loadStylesheet(route.styles);
            if (route.scripts) route.scripts.forEach(loadScriptsIfExists);
            //if (route.scripts) loadScriptsIfExists(route.scripts); // Cargar solo el primer script);

            const newUrl = `${settings.base}${route.path}`;
            if (window.location.pathname !== newUrl) {
                history.pushState({ path: newUrl }, '', newUrl);
            }

        } catch (e) {
            console.error(`❌ Error al cargar ${route.url}:`, e);
            main.innerHTML = '<p>Error 404: No se pudo cargar el contenido.</p>';
        }
    };

    const loadInitialContent = () => {

        if (!settings.routes.length) {
            console.warn('⚠️ No se han definido rutas en settings.routes');
        }

        const path = window.location.pathname.replace(settings.base, '');

        const route = settings.routes.find(r => r.path === path) || {
            url: settings.urlHome,
            title: settings.titlePage,
            path: settings.homePath,
            favicon: settings.faviconPage,
            headerTitle: settings.titleHeader,
            styles: settings.styles,       // No pongas urlHome aquí
            scripts: settings.scripts
        };

        loadContent(route);
        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);

    };



    const setupEventListeners = () => {


        document.addEventListener('click', (e) => {

            const link = e.target.closest('a[data-id]');

            if (link) {

                e.preventDefault();

                const route = settings.routes.find(r => r.id === link.getAttribute('data-id'));

                if (route)
                    loadContent(route);

                const navbarList = document.querySelector('.navbar__list');
                if (navbarList)
                    navbarList.style.display = 'none';
            }

        });

        window.addEventListener('popstate', (e) => {
            const path = e.state?.path?.replace(settings.base, '') || window.location.pathname.replace(settings.base, '');
            const route = settings.routes.find(r => r.path === path);
            if (route) loadContent(route);
            else loadInitialContent();
        });


    };


    const loadInitialComponentsHtml = async () => {

        await loadHTML(settings.urlHeader, settings.layoutHeader, () => {
            updateHeader(settings.titleHeader);
        });

        await loadHTML(settings.urlNavBar, settings.layoutNavbar, () => {
            const navbarList = document.querySelector('.navbar__list');
            if (navbarList) navbarList.style.display = 'none';

            const title = document.querySelector('.navbar__title');
            if (title) {
                title.addEventListener('click', () => {
                    navbarList.style.display = navbarList.style.display === 'none' ? 'block' : 'none';
                });
            }
        });

        await loadHTML(settings.urlFooter, settings.layoutFooter);

        if (settings.draggable) {
            const el = document.querySelector(settings.layoutNavbar);
            if (el) makeDraggable(el);
        }
    };


    const init = async () => {

        console.log('\n');
        console.warn('✅ Plugin SPA cargado correctamente (init-spa-with-method-loader.js)');
        console.log('\n');

        await loadInitialComponentsHtml();
        loadInitialContent();
        setupEventListeners();

    };


    //  -----------------------------------------------
    //  ----------  INICIO de la aplicación  ----------
    //  -----------------------------------------------
    init();

}




/*
export function initSPAWithMethodLoader(layout, options = {}) {
    
    const settings = {
        routes: [],
        base: '',
        layoutHeader: '#layoutHeader',
        layoutGoHome: '#layoutGoHome',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '',
        urlNavBar: '',
        urlFooter: '',
        urlHome: '',
        titlePage: 'Página sin Título',
        homePath: '/',
        faviconPage: '',
        titleHeader: 'Página sin Título',
        draggable: false,
        ...options
    };

    const $layout = layout;

    const loadHTML = async (url, selector, callback = null) => {
        try {
            const res = await fetch(url);
            const html = await res.text();
            const el = document.querySelector(selector);
            if (el) el.innerHTML = html;
            if (callback) callback();
        } catch (e) {
            console.error(`Error al cargar ${url}:`, e);
        }
    };

    const makeDraggable = (el) => {
        let isDragging = false;
        let offsetX = 0, offsetY = 0;

        el.style.position = 'absolute';
        el.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - el.offsetLeft;
            offsetY = e.clientY - el.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                el.style.left = `${e.clientX - offsetX}px`;
                el.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => isDragging = false);
    };

    const updateFavicon = (favicon) => {
        let link = document.querySelector('link[rel~="icon"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/x-icon';
            document.head.appendChild(link);
        }
        link.href = `${favicon}?t=${Date.now()}`;
    };

    const updateHeader = (title) => {
    
        const headerTitle = document.querySelector(`${settings.layoutHeader} .header__title`);
        if (headerTitle) 
            headerTitle.textContent = title;
        else 
        console.warn('⚠️ No se encontró .header__title para actualizar el título');
    
    };


    const loadStylesheet = (href) => {
        if (!document.querySelector(`link[href*="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${href}?t=${Date.now()}`;
            document.head.appendChild(link);
        }
    };

    const loadScriptsIfExists = async (scriptUrl) => {
        try {
            const res = await fetch(scriptUrl, { method: 'HEAD' });
            if (res.ok) {
                const script = document.createElement('script');
                script.src = scriptUrl;
                document.body.appendChild(script);
                console.log(`Cargado: ${scriptUrl}`);
            } else {
                console.warn(`No existe el script: ${scriptUrl}`);
            }
        } catch (e) {
            console.error(`Error cargando script: ${scriptUrl}`, e);
        }
    };

    const loadContent = async (route) => {
        
        const main = document.querySelector(settings.layoutMain);
        try {
            const res = await fetch(route.url);
            if (!res.ok) throw new Error(res.statusText);

            const html = await res.text();
            main.innerHTML = html;
            document.title = route.title;
            updateFavicon(route.favicon);
            updateHeader(route.headerTitle);
            if (route.styles) loadStylesheet(route.styles);
            if (route.scripts) route.scripts.forEach(loadScriptsIfExists);

            const newUrl = `${settings.base}${route.path}`;
            if (window.location.pathname !== newUrl) {
                history.pushState({ path: newUrl }, '', newUrl);
            }
        } catch (e) {
            console.error(`Error al cargar ${route.url}:`, e);
            main.innerHTML = '<p>Error 404: No se pudo cargar el contenido.</p>';
        }
    };

    const loadInitialContent = () => {
        const path = window.location.pathname.replace(settings.base, '');
        const route = settings.routes.find(r => r.path === path) || {
            url: settings.urlHome,
            title: settings.titlePage,
            path: settings.homePath,
            favicon: settings.faviconPage,
            headerTitle: settings.titleHeader,
            styles: settings.urlHome,
            scripts: [settings.urlHome]
        };

        loadContent(route);
        history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
    };

    const setupEventListeners = () => {
        
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-id]');
            if (link) {
                e.preventDefault();
                const route = settings.routes.find(r => r.id === link.getAttribute('data-id'));
                if (route) loadContent(route);

                const navbarList = document.querySelector('.navbar__list');
                if (navbarList) navbarList.style.display = 'none';
            }
        });

        window.addEventListener('popstate', (e) => {
            const path = e.state?.path?.replace(settings.base, '') || window.location.pathname.replace(settings.base, '');
            const route = settings.routes.find(r => r.path === path);
            if (route) loadContent(route);
            else loadInitialContent();
        });
    };

    const loadInitialComponentsHtml = async () => {
        
        await loadHTML(settings.urlHeader, settings.layoutHeader);
        
        await loadHTML(settings.urlNavBar, settings.layoutNavbar, () => {
            const navbarList = document.querySelector('.navbar__list');
            if (navbarList) navbarList.style.display = 'none';

            const title = document.querySelector('.navbar__title');
            if (title) {
                title.addEventListener('click', () => {
                    navbarList.style.display = navbarList.style.display === 'none' ? 'block' : 'none';
                });
            }
        });
        
        await loadHTML(settings.urlFooter, settings.layoutFooter);

        if (settings.draggable) {
            const el = document.querySelector(settings.layoutNavbar);
            if (el) makeDraggable(el);
        }
    };

    const init = async () => {
        console.warn('plugin sin clase - spa-with-method-load-from-jquery.js - cargado correctamente');
        await loadInitialComponentsHtml();
        loadInitialContent();
        setupEventListeners();
    };

    init();
}

*/