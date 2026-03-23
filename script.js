// 1. NAVIGATION STICKY
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. GESTION DES MODALES (PROJETS)
const projectCards = document.querySelectorAll('.project-card');
const closeButtons = document.querySelectorAll('.close-modal');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        const modal = document.getElementById(targetId);
        if (modal) modal.classList.add('active');
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.closest('.modal').classList.remove('active');
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// 3. GESTION DES CAROUSELS (COMPÉTENCES & OUTILS)
function scrollCarousel(type, direction) {
    const track = document.getElementById(type + '-track');
    const scrollAmount = 200; // Distance du défilement en pixels

    if (track) {
        track.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// 4. GESTION DU DROPDOWN DOCUMENTS
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    // Fermer le dropdown si on clique ailleurs
    document.addEventListener('click', () => {
        dropdownContent.classList.remove('show');
    });
}
