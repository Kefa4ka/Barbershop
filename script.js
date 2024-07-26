document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    const confirmationMessage = `Дякуємо, ${name}! Ви успішно записались на ${service} на ${date}. Ми зателефонуємо вам за номером ${phone} для підтвердження.`;
    document.getElementById('confirmation').textContent = confirmationMessage;

    document.getElementById('bookingForm').reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 200);
    });
});
