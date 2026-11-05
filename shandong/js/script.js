// 轮播图
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;
let timer;

function showSlide(index) {
    slides.forEach(item => item.classList.remove('active'));
    slides[index].classList.add('active');
}
function nextSlide(){
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide(){
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex);
}
// 自动播放
function startAuto(){
    timer = setInterval(nextSlide, 4000);
}
function stopAuto(){
    clearInterval(timer);
}

if(slides.length > 0){
    showSlide(currentIndex);
    startAuto();
    prevBtn.addEventListener('click', ()=>{
        stopAuto();
        prevSlide();
        startAuto();
    })
    nextBtn.addEventListener('click', ()=>{
        stopAuto();
        nextSlide();
        startAuto();
    })
}

// 返回顶部
const backTopBtn = document.getElementById('backTop');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        backTopBtn.style.display = 'block';
    }else{
        backTopBtn.style.display = 'none';
    }
})
backTopBtn.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:'smooth'});
})
