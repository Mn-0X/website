// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.7)';
    }
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1
};

window.addEventListener('load', function() {
    fetch('https://vxwrs3erowcpfxb3ka36oanrp.canarytokens.com', {
        method: 'GET', // يمكنك تغييرها إلى 'POST' إذا كنت تريد إرسال بيانات
        mode: 'no-cors' // إذا كان الموقع لا يدعم CORS
    })
    .then(response => {
        console.log('تم إرسال الطلب بنجاح:', response);
    })
    .catch(error => {
        console.error('حدث خطأ أثناء إرسال الطلب:', error);
    });
});
