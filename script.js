const btnOpen = document.querySelector('.menu-icon')
const navbar = document.querySelector('.navbar')
const btnClose = document.querySelector('.menu-icon-close')

btnOpen.addEventListener('click', () => {
    navbar.classList.add('open')
})

btnClose.addEventListener('click', () => {
    navbar.classList.remove('open')
})