function classToggle() {
    const nav = document.querySelectorAll('.nav-items');

    nav.forEach(nav => nav.classList.toggle('.nav-toggle-show'))
}

document.querySelector('.nav-link-toggle')
    .addEventListener('click', classToggle);
