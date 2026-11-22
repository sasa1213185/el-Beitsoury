function openLB(el){document.getElementById('lbimg').src=el.src;document.getElementById('lb').classList.add('on');}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=((i%3)*90)+'ms';io.observe(el);});
