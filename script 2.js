document.getElementById("startButton").addEventListener("click", function() {
    // Исчезновение кнопки
    this.style.display = "none";

    // Запуск анимации цветка
    let flower = document.getElementById("flower");
    flower.style.display = "block";
    flower.classList.add("animate");

    // Вибрация сразу после клика
    if (navigator.vibrate) {
        navigator.vibrate([500, 300, 500, 300]); // Два коротких толчка
    }

    // Показываем текст через 4 секунды
    let message = document.getElementById("message");
    setTimeout(() => {
        message.classList.add("animate-text");
    }, 4000);
});