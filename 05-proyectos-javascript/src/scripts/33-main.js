//  **********  /04-curso-100-proyectos-html-css-js  *********** 
//  **********  /06-proyectos-javascript/  ********************* 
//  **********  /proyecto-33-js/assets/js/28-main.js  ********** 
//  ************************************************************


/*
   ----------  Enunciado Proyecto 33  ----------  

    -  Maquetaremos una web como esta. Ver PDF.
    -  Debe tener una animación durante 3 segundos al cargar la página, cuando pase ese tiempo
       debe mostrarse esto. Ver PDF.
                                     
*/


window.addEventListener("load", () => {  


    //  -----  Referencias al HTML  -----
    const numberAccount = document.querySelector('.header__number');
    const money = document.querySelector('.header__money');
    const containersIco = document.querySelectorAll('.item__ico');
    const titles = document.querySelectorAll('.item__title');
    const dates = document.querySelectorAll('.item__date');
    const bills = document.querySelectorAll('.item__bill');
    const totals = document.querySelectorAll('.item__total');
    const bgLoads = document.querySelectorAll('.bg-load');
    const bgLoadsText = document.querySelectorAll('.bg-load-text');
           

    const setInfo = () => {
        
        
        numberAccount.innerText = "Q99 3231 43244 43287 09874 0047";
        money.innerText = "5000 €";
        
        containersIco.forEach( ico => ico.innerHTML = `<i class="fa-regular fa-credit-card"> </i>`);
        titles.forEach( title => title.innerText = "Empresa");
        dates.forEach( date => date.innerText = "20/06/2025");
        bills.forEach( bill => bill.innerText = "-400 €");
        totals.forEach( total => total.innerText = "5000 €");
        bgLoads.forEach( bgLoad => bgLoad.classList.remove('bg-load'));
        bgLoadsText.forEach( bgLoadText => bgLoadText.classList.remove('bg-load-text'));
               
    }


    setTimeout( setInfo, 3000);
    
    
});
