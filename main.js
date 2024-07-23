
const btn=document.querySelector('button');
btn.addEventListener('click',()=>{
    if(btn.innerHTML=='Tun'){
        btn.innerHTML='Kun';
    }
    else{
        btn.innerHTML='Tun';
    }
    document.body.classList.toggle('tun');

})