

   const btn__prev = document.querySelector('.slider-buttons .prev');
   const btn__next = document.querySelector('.slider-buttons .next');
   const slides = document.querySelectorAll('.slider-item');

   let k = 0;
    btn__next.onclick = function(){
        slides[k].style.display = 'none';
        k++;
        if(k > 2){
            k = 0;
        }
        slides[k].style.display = 'block';
        
    }
    btn__prev.onclick = function(){
        slides[k].style.display = 'none';
        --k;
        if(k < 0){
            k = 2;
        }
        slides[k].style.display = 'block';
    }
