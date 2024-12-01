import BasePage from './base-page';

class Loyalty extends BasePage {
    onReady() {
        let count = app.element(".count-anime")?.dataset?.count || 0;
        (new anime.timeline()).add({
            targets: '.loyality-item',
            opacity: [0, 1],
            translateX: [20, 0],
            delay: function (el, i) {
                return i * 100;
            },
        }).add({
            targets: '.star-anime',
            opacity: [0, 1],
            rotate: [50, 0],
            duration: 4000,
            delay: function (el, i) {
                return i * 100;
            },
        }, '-=1000').add({
            targets: `.count-anime`,
            innerText: [0, count],
            duration: 2000,
            easing: "linear",
            round: true,
            delay: function (el, i) {
                return i * 150;
            },
        }, '-=3700').add({
            targets: '.btn-anime',
            opacity: [0, 1],
            duration: 2000,
            translateX: [20, 0],
            delay: function (el, i) {
                return i * 100;
            },
        }, '-=3200')

        // إضافة حدث الزر لتغيير الوضع
        const toggleButton = document.querySelector('.toggle-dark-mode');
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            this.updateAnimationsForDarkMode();
        });
    }

    updateAnimationsForDarkMode() {
        // تحديث الأنماط بناءً على الوضع الداكن
        const isDarkMode = document.body.classList.contains('dark-mode');
        const targetElements = document.querySelectorAll('.loyality-item, .star-anime, .btn-anime');

        targetElements.forEach(el => {
            if (isDarkMode) {
                el.style.backgroundColor = '#333'; // لون الخلفية للوضع الداكن
                el.style.color = '#fff'; // لون النص للوضع الداكن
            } else {
                el.style.backgroundColor = '#fff'; // لون الخلفية للوضع العادي
                el.style.color = '#000'; // لون النص للوضع العادي
            }
        });
    }
}

Loyalty.initiateWhenReady(['loyalty']);