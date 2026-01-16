// Modal untuk gambar besar
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const galleryItems = document.querySelectorAll('.gallery-item img');

// Buka modal saat gambar di klik
galleryItems.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        modalImage.alt = img.alt;
    });
});

// Tutup modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal saat klik di luar gambar
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.video-container, .gallery-container, .feature-item');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });
});
