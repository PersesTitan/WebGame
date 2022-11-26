count = 0;
score = 0;
hp = 10;
items = []

function start() {
    items.forEach(v => clearInterval(v))
    count = 0;
    score = 0;
    hp = 10;
    items = []
    document.getElementById('score').innerText = score;
    document.getElementById('hp').innerText = hp;
    document.getElementById('btn').style.visibility = "false";
    document.getElementById('main').innerText = "";
}

function loop() {
    start();
    const createInterval = setInterval(() => {
        const main = document.getElementById("main");

        const div = document.createElement("div");
        const width = window.innerWidth;
        const itemWidth = Math.floor(width / 100 * 7);

        div.style.width = itemWidth + "px"
        div.style.height = itemWidth + "px"

        div.style.borderRadius = "50%";
        div.style.backgroundColor = "black";
        // 절대 위치 지정
        div.style.position = "absolute"
        // 초기 위치 지정
        div.style.top = window.innerHeight - itemWidth + "px";
        div.style.right = position(width - itemWidth);
        // 아이디 추가
        div.setAttribute('id_value', (count++).toString());

        let speedValue = speed(count + 10)/100;
        const moveInterval = setInterval(() => {
            const value = div.style.top;
            const pos = value.substring(0, value.length - 2);
            if (pos < 0) {
                downHp();
                remove(div.getAttribute('id_value'), moveInterval);
            }
            div.style.top = pos - speedValue + "px";
        }, 1);
        items.push(moveInterval)

        // 클릭하면 점수올라가고 제거
        div.onclick = function() {
            upScore();
            remove(div, moveInterval);
            items.remove(speedValue);
        }
        main.appendChild(div);

        if (hp === 0) {
            remove(div, moveInterval);
            alarm(createInterval);
        }
    }, 1000)
}

function position(width) {
    return Math.floor(random(0, width)) + "px";
}

// min ~ max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function alarm(moveInterval) {
    // 반복 멈추기
    clearInterval(moveInterval);
    alert(score + "점");
    start();
    document.getElementById('btn').style.visibility = "true";
}