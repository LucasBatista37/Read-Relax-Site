searchForm = document.querySelector('.pesquisa-formulario');

document.querySelector('#pesquisa-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{

    if(window.scroll > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{

    if(window.scroll > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}