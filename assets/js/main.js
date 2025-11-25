// Small interactions: theme toggle, mobile nav and reveal-on-scroll
document.addEventListener('DOMContentLoaded', function(){
  // set year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  themeToggle && themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn && menuBtn.addEventListener('click', ()=>{
    if(nav.style.display === 'flex'){
      nav.style.display = '';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(255,255,255,0.02)';
      nav.style.padding = '0.6rem';
      nav.style.borderRadius = '10px';
    }
  });

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold: 0.12});
  reveals.forEach(r=>io.observe(r));
});
