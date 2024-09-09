let dubaiText = document.getElementById('dubaiText');
let burjkhalifa = document.getElementById('burjkhalifa')
let stars = document.getElementById('stars');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    dubaiText.style.left = value * -2 + 'px';
    burjkhalifa.style.top = value * 1 + 'px';
    stars.style.top = value * 1 + 'px';
})