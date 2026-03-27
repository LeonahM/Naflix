import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const profileNameEl = document.getElementById('profile-name');
    const profileAvatarEl = document.getElementById('profile-avatar');

    // Fonte principal: objeto salvo no index (activeProfile)
    const activeProfileRaw = localStorage.getItem('activeProfile');
    if (activeProfileRaw) {
        try {
            const profile = JSON.parse(activeProfileRaw);
            if (profileNameEl && profile?.name) profileNameEl.textContent = profile.name;
            if (profileAvatarEl && profile?.image) profileAvatarEl.src = profile.image;
        } catch (error) {
            console.warn('activeProfile inválido no localStorage.', error);
        }
    }

    // Fallback para chaves antigas
    const legacyName = localStorage.getItem('perfilAtivoNome');
    const legacyImage = localStorage.getItem('perfilAtivoImagem');
    if (profileNameEl && legacyName && profileNameEl.textContent.trim() === 'Seu nome') {
        profileNameEl.textContent = legacyName;
    }
    if (profileAvatarEl && legacyImage && !activeProfileRaw) {
        profileAvatarEl.src = legacyImage;
    }

    // Evita ícone quebrado caso a imagem remota/local falhe
    if (profileAvatarEl) {
        profileAvatarEl.onerror = () => {
            profileAvatarEl.src = '../assets/pulgo.jpeg';
        };
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
