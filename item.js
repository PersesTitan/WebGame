function remove(value, interval) {
    const id_value = typeof value === 'string'
        ? document.querySelector(`[id_value="${value}"]`)
        : value;
    document.getElementById("main").removeChild(id_value);
    clearInterval(interval);
}

function downHp() {
    hp--;
    document.getElementById('hp').innerText = hp;
}

function upScore() {
    score++;
    document.getElementById('score').innerText = score;
}

function speed() {
    return Math.max(2, random(490 - score - 5, 510 - score));
}
