const bar = document.getElementById('open');
const nav = document.getElementById('active');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click',() => {
    nav.classList.add('activity');
    close.style.display = 'block';
    bar.style.display = 'none';
    
    
  })
} 

if (close) {
  close.addEventListener('click',() => {
  nav.classList.remove('activity');
  close.style.display = 'none';
  bar.style.display = 'block';
})
}