function navigate(page) {
    window.location.href = page;
}

const menuBtn = document.getElementById('menu');
const menuLateral = document.getElementById('menu-lateral');
const closeMenuBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuLateral.classList.toggle('menu-ativo');
});

closeMenuBtn.addEventListener('click', () => {
    menuLateral.classList.remove('menu-ativo');
});

document.addEventListener('click', (e) => {
    const target = e.target;
    const menuOpen = menuLateral.classList.contains('menu-ativo');

    if (menuOpen && target !== menuBtn && !menuLateral.contains(target)) {
        menuLateral.classList.remove('menu-ativo');
    }
});