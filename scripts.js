let escapeCount = 0;
let yesScale = 1;
let noScale = 1;

function clickYesButton() {
    alert("I love you too layana 💖🥰");
}

function hoverNoButton() {
    const btn = document.getElementById("no-button");
    const yesBtn = document.getElementById("yes-button");
    const container = document.querySelector(".buttons");

    escapeCount++;

    /* 1️⃣ Shake before escape */
    btn.style.animation = "shake 0.25s";
    setTimeout(() => {
        btn.style.animation = "";
    }, 250);

    /* 2️⃣ Calculate safe bounds */
    const maxX = container.clientWidth - btn.offsetWidth;
    const maxY = container.clientHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";

    /* 3️⃣ Shrink NO button */
    noScale = Math.max(0.4, noScale - 0.05);
    btn.style.transform = `scale(${noScale})`;

    /* 4️⃣ Grow YES button */
    yesScale += 0.08;
    yesBtn.style.transform = `scale(${yesScale})`;

    /* 5️⃣ Auto-win after too many tries */
    if (escapeCount >= 8) {
        btn.style.display = "none";
        yesBtn.value = "YES 😍 (Only option)";
    }
}
