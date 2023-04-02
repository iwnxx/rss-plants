console.log('1. Вёрстка соответствует макету. Ширина экрана 768px (+24)\n2. Вёрстка соответствует макету. Ширина экрана 380px (+24)\n3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется (+15)\n4. На ширине экрана 380рх и меньше реализовано адаптивное меню (+22)\nИтог: 85 баллов');

const menuIcon = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobileMenu');
const menuClose = document.querySelector('.menuClose');
const menuList = document.querySelector('.menuList');
    if(menuIcon) {
    menuIcon.addEventListener('click', function(changeClass){
        mobileMenu.classList.toggle('active');
        
    });
    menuClose.addEventListener('click', function(changeClass){
        mobileMenu.classList.toggle('active');
        
    });
    menuList.addEventListener('click', function(changeClass){
        mobileMenu.classList.toggle('active');
        
    });
}
