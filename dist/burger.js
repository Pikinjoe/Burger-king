const closeMenu = document.querySelector('.closeMenu');
const menuNav = document.querySelector('.menuNav');
const menuBar = document.querySelector('.menu-bar');
const navLink = document.querySelectorAll('.nav-link');

menuBar.addEventListener('click', () =>{
    menuNav.classList.remove('hidden');
})
closeMenu.addEventListener('click', () =>{
    menuNav.classList.add('hidden')
})
navLink.forEach((link) => {
    link.addEventListener('click', () =>{
        menuNav.classList.add('hidden')
    })
});

const tabButton = document.querySelectorAll('.tabs-wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');

tabButton.forEach(tab =>{
    tab.addEventListener('click', () =>{
        tabButton.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active');

        const tabval = tab.getAttribute('data-tabs');

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval === 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        } else if (tabval === 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        } else if (tabval === 'beverage') {
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        } else {all.forEach(item => {
            item.style.display = 'block'
        })}
    })
    });


    const html = document.querySelector('html');
    const themeBtn = document.getElementById('theme-toggle');

    if (localStorage.getItem('mode') === 'dark') {
        darkMode();
    } else {
        lightMode();
    }

    themeBtn.addEventListener('click', () => {
        if (localStorage.getItem('mode') === 'light') {
            darkMode();
        } else {
            lightMode();
        }
    })

    function darkMode() {
        html.classList.add('dark');
        themeBtn.classList.replace('ri-moon-fill', 'ri-sun-fill');
        localStorage.setItem('mode', 'dark');
    };

    function lightMode() {
        html.classList.remove('dark');
        themeBtn.classList.replace('ri-sun-fill', 'ri-moon-fill');
        localStorage.setItem('mode', 'light');
    };

    function scrollUp() {
        const scrollBtn = document.getElementById('scroll-up');

        if (this.scrollY >= 250) {
            scrollBtn.classList.remove('-bottom-1/2');
            scrollBtn.classList.add('bottom-4');
        } else {
            scrollBtn.classList.add('-bottom-1/2');
            scrollBtn.classList.remove('bottom-4')
        }
    }
    window.addEventListener('scroll', scrollUp);

    function scroolHeader() {
        const header = document.getElementById('header');

        if (this.scrollY >= 50) {
            header.classList.add('border-b', 'border-secondaryColor');
        } else {
            header.classList.remove('border-b', 'border-secondaryColor');
        }
    }
    window.addEventListener('scroll', scroolHeader)