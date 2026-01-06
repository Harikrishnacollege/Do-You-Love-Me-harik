function clickYesButton() {
    alert("I love you too ponna 💖🥰");
}

function hoverNoButton() {
    const btn = document.getElementById("no-button");

    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
