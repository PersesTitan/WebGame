function remove(value, interval) {
    const id_value = typeof value === 'string'
        ? document.querySelector(`[id_value="${value}"]`)
        : value;
    document.getElementById("main").removeChild(id_value);
    clearInterval(interval);
}

function downHp() {
    if (hp > 0) hp--;
    document.getElementById('hp').innerText = hp;
}

function upScore() {
    score++;
    document.getElementById('score').innerText = score;
}

function speed(value) {
    return Math.max(10, random(value - 3, value + 3));
}
