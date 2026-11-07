document.addEventListener('DOMContentLoaded',()=>{
const form=document.querySelector('[data-auth]');if(!form)return;
form.addEventListener('submit',e=>{e.preventDefault();let fd=new FormData(form),msg=document.querySelector('#message');try{let u;if(form.dataset.auth==='register'){let p=fd.get('password');if(p!==fd.get('confirm'))throw Error('Passwords do not match.');if(p.length<8)throw Error('Password must be at least 8 characters.');u=GA.register(fd.get('name').trim(),fd.get('email').trim(),p)}else u=GA.login(fd.get('email').trim(),fd.get('password'));location.href='dashboard.html'}catch(err){msg.className='notice error';msg.textContent=err.message}});
});
