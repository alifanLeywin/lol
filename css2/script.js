const video = document.getElementById('background-video');
const sections = document.querySelectorAll('.section');
let isScrolling;
let videoStarted = false;



document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const images = document.querySelectorAll('.section-image');

    const observerOptions = {
        root: null,
        threshold: 0.1 // Tampilkan ketika 10% bagian terlihat
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Jika gambar juga ada, tambahkan kelas visible
                const image = entry.target.querySelector('.section-image');
                if (image) {
                    image.classList.add('visible');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});



// Function to check if the user is scrolling
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Play video when scrolled down
    if (scrollY > 100 && !videoStarted) {
        video.play();
        videoStarted = true; // Video mulai diputar
    }

    // Show sections when in view
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });

    // Mengatur posisi video dan elemen parallax saat scroll
    const parallaxSpeed = 0.5; // Ubah nilai ini untuk mengatur kecepatan parallax
    const offset = scrollY * parallaxSpeed;

    video.style.transform = `translateY(${offset}px)`; // Mengatur posisi video berdasarkan scroll

    // Pause video jika scroll berakhir
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        // Video akan terus diputar
        video.play();
    }, 100); // Sesuaikan delay jika perlu

    // Function to check if the user is scrolling
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Show sections when in view
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }

    });
});
});
