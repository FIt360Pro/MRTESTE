
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const form = document.querySelector('#subscribe-form');
if(form){
  form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if(!email || !email.includes('@')){ alert('Digite um e-mail válido.'); return; }
    alert('Inscrição realizada com sucesso!');
    form.reset();
  });
}
