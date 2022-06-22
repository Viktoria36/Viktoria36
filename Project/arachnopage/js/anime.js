const btn = document.querySelector('.btn-dance');
const images = document.querySelectorAll('.anime');

btn.onclick = function(){
    let start = Date.now();
    let f = 0;
    let timer = setInterval(() => {
        let time = Date.now() - start;
        if (time >= 10000) {
            clearInterval(timer);
        }
        images[f].style.display = 'none';
        ++f;
        if (f == (images.length - 1)) {
            f = 0;
        }
        images[f].style.display = 'block';
    }, 40);
    
}