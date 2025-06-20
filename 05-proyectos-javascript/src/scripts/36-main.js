//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-36-js/assets/js/28-main.js  ********** 
//  ************************************************************


import { loadComponentsLayout } from "/05-mas-de-100-proyectos-html-css-js/06-proyectos-javascript/src/scripts/load-components-layout.js";


/*
   ----------  Enunciado Proyecto 35  ----------  

    La web se verá así. Ver PDF.
    -  Al darle a botón de añadir nota se creará una nota vacía haciendo una transición, cuando
       escribamos el titulo o el texto, en ambos casos deberá guardarse y aunque refresquemos la
       página deberá permanecer ahí. ver PDF.
    -  Cuando pulsemos sobre el botón de la papelera la nota se borrará haciendo una transición. Ver PDF.
                                     
*/


window.addEventListener("load", () => {


    console.log('\n');
    console.warn('-----  36-main.js -----');
    console.log('\n');

    //  -----  cargar componentes de la layout  -----
    loadComponentsLayout('Proyecto 36 JavaScript');


    //  -----  Referencias al HTML  -----
    const $btn = document.querySelector('.main__btn');
    const $notes = document.querySelector('.main__notes');


    //  -----  pulsar botón crear una nota  -----
    $btn.addEventListener('click', () => createNote("", ""));


    //  -------------------------
    //  -----  crear notas  -----
    //  -------------------------
    const createNote = (title = "", body = "", transition = true) => {

        const $note = document.createElement('article');
        $note.classList.add('notes__note');


        //  -----  Animaciones Transiciones de las notas  -----
        if(transition)
            setTimeout(() => $note.classList.add('note--visible'), 10 )
        else
            $note.classList.add('note--visible-no-transition')


        //  -----  header de la nota  -----
        const $header = document.createElement('header');
        $header.classList.add('note__header');

        //  -----  input del header  -----
        const $input = document.createElement('input');
        $input.type = "text";
        $input.classList.add('header__input');
        $input.value = title;

        //  -----  icono del header  -----
        const $icon = document.createElement('i');
        $icon.classList.add('note__icon', 'fa-solid', 'fa-trash');

        //  -----  añadir hijos al header  -----
        $header.appendChild($input);
        $header.appendChild($icon);

        //  -----  cuerpo de la nota  -----
        const $textarea = document.createElement('textarea');
        $textarea.classList.add('note__body');
        $textarea.name = "body";
        $textarea.value = body;

        //  -----  construir nota  -----
        $note.appendChild($header);
        $note.appendChild($textarea);
        $notes.appendChild($note);

        //  -----  escribir datos  -----
        $input.addEventListener('input', update);
        $textarea.addEventListener('input', update);
        
        //  -----  eliminar nota  -----
        $icon.addEventListener('click', () => {
            
            $note.classList.remove('note--visible-no-transition');
            $note.classList.remove('note--visible');

            setTimeout(() => {

                $note.remove();
                update();
            }, 310);
            
        });
    }

    
    //  --------------------------------------
    //  -----  guardar datos de la nota  -----
    //  --------------------------------------
    const update = () => {

        const arrNotes = [];
        const $notesDom = document.querySelectorAll('.notes__note');

        $notesDom.forEach($noteDom => {

            const $noteInput = $noteDom.querySelector('.header__input');
            const $noteTextarea = $noteDom.querySelector('.note__body');

            const noteInfo = {
                "title": $noteInput.value,
                "body": $noteTextarea.value
            }

            if (noteInfo.title.trim() != "" || noteInfo.body.trim() != "")
                arrNotes.push(noteInfo);
        });

        //  -----  persistir notas  -----
        console.log(arrNotes);

        localStorage.setItem('notes', JSON.stringify(arrNotes));


    }


    //  ---------------------------------------
    //  -----  listar las notas de nuevo  -----
    //  ---------------------------------------
    const getNotes = () => {


        const notesStorage = JSON.parse(localStorage.getItem('notes'));

        if (notesStorage) 
            notesStorage.forEach(note => createNote(note.title, note.body, false));
    }    


    //  -----  al iniciar la aplicación  -----
    getNotes();

});
