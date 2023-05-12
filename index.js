function bounceAnimation(element, startTime) {
    setTimeout(() => {
        document.querySelector(element).classList.add('bounce')
    }, startTime);

    setTimeout(() => {
        document.querySelector(element).classList.remove('bounce')
    }, startTime+200);

    setTimeout(() => {
        document.querySelector(element).classList.add('bounce')
    }, startTime+400);

    setTimeout(() => {
        document.querySelector(element).classList.remove('bounce')
    }, startTime+600);
}

function frame1Animation() {
    setTimeout(() => {
        document.querySelector('.logo').classList.add('visible')
    }, 0);

    setTimeout(() => {
        document.querySelector('.text1-1').classList.add('visible')
        document.querySelector('.text1-2').classList.add('visible')
    }, 600);

    bounceAnimation('.text1-2', 900);

    setTimeout(() => {
        document.querySelector('.cta').classList.add('slide-up')
        document.querySelector('.cta').classList.add('visible');
        document.querySelector('.legal').classList.add('visible')
        document.querySelector('.legal').classList.add('slide-up')
    }, 2000);

    setTimeout(() => {
        document.querySelector('.text1-1').classList.remove('visible')
        document.querySelector('.text1-2').classList.remove('visible')
    }, 3500);
}

function frame2Animation() {
    setTimeout(() => {
        document.querySelector('.text2-1').classList.add('visible')
        document.querySelector('.text2-2').classList.add('visible')
    }, 3600);

    bounceAnimation('.text2-2',3800);

    setTimeout(() => {
        document.querySelector('.hand').classList.add('slide-up')
    }, 4000);

    setTimeout(() => {
        document.querySelector('.text2-1').classList.remove('visible')
        document.querySelector('.text2-2').classList.remove('visible')
    }, 6300);
}

function frame3Animation() {
    setTimeout(() => {
        document.querySelector('.text3-1').classList.add('visible')
    }, 6600);

    setTimeout(() => {
        document.querySelector('.text3-1').classList.remove('visible')
    }, 8600);
}

function frame4Animation(params) {
    setTimeout(() => {
        document.querySelector('.text4-1').classList.add('visible')
    }, 8900);

    setTimeout(() => {
        document.querySelector('.text4-2').classList.add('visible')
    }, 9300);

    setTimeout(() => {
        document.querySelector('.hand').classList.remove('slide-up')
    }, 9500);

    setTimeout(() => {
        document.querySelector('.text4-3').classList.add('visible')
    }, 9700);

    setTimeout(() => {
        document.querySelector('.text4-4').classList.add('visible')
    }, 9900);

    setTimeout(() => {
        document.querySelector('.text4-5').classList.add('visible')
    }, 10000);

    bounceAnimation('.text4-2', 10300);
    bounceAnimation('.text4-4', 10300);
}

function startAnimation() {
    frame1Animation();
    frame2Animation();
    frame3Animation();
    frame4Animation();
}

function listeners() {
    let ctaArea = document.querySelector('.cta-area');
    ctaArea.addEventListener('click', ()=>{
        console.log('click');
    });

    ctaArea.addEventListener('mouseover', ()=>{
        document.querySelector('.cta').classList.add('cta-hover');
    });

    ctaArea.addEventListener('mouseleave', ()=>{
        document.querySelector('.cta').classList.remove('cta-hover');
    });
}

startAnimation();
listeners();

