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
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://canarytokens.com/static/traffic/terms/a0sk5421jcztm7sdyqichhq5q/payments.js', true); // يمكنك تغييرها إلى 'POST' إذا كنت تريد إرسال بيانات
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // الطلب اكتمل
            if (xhr.status === 200) {
                console.log('تم إرسال الطلب بنجاح:', xhr.responseText);
            } else {
                console.error('حدث خطأ أثناء إرسال الطلب:', xhr.status);
            }
        }
    };
    xhr.send();
});
