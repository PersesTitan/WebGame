count = 0;
score = 0;
hp = 100;

function loop() {
    const moveInterval = setInterval(() => {
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

        const moveInterval = setInterval(() => {
            const value = div.style.top;
            const pos = value.substring(0, value.length - 2);
            if (pos < 0) {
                downHp();
                remove(div.getAttribute('id_value'), moveInterval);
            }
            div.style.top = pos - 1 + "px"
        }, speed());

        // 클릭하면 점수올라가고 제거
        div.onclick = function () {
            upScore();
            remove(div, moveInterval);
        }
        main.appendChild(div);
    });
}

function clear() {
    document.getElementById("main").innerHTML = '';
}

function position(width) {
    return Math.floor(random(0, width)) + "px";
}

// min ~ max
function random(min, max) {
    return Math.random() * (max - min) + min;
}