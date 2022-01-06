let ok = document.getElementById("ok");
let password = document.getElementById("password");
let input = document.getElementsByTagName('input');
let launch = document.getElementById("launch");
let checkbox = document.getElementsByClassName("checkbox");
let range = document.getElementsByClassName("range");

//#1 password verification
function activation() {
    if (password.value === "TrustNo1") {
        for (let i = 0; i < input.length; i++) {
            input[i].removeAttribute("disabled");
        }
        password.setAttribute("disabled", "");
        ok.setAttribute("disabled", "");
        launch.setAttribute("disabled", "");
    }
}
ok.addEventListener("click", activation);

//#2.1 testing checkbox
for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].onchange = function(){unlock()};
}

//#2.2 testing range
for(let i = 0; i < range.length; i++) {
    range[i].onchange = function(){unlock()};
}

//#2.3 unlock launch
function unlock() {
    let countCheckbox = 0;
    let countRange = 0;

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true)
            countCheckbox++;
    }
    for (let i = 0; i < range.length; i++) {
        if (range[i].value == 100)
            countRange++;
    }

    if (countCheckbox == checkbox.length && countRange == range.length)
        launch.removeAttribute("disabled");
}

//#3 launch rocket
let rocket = document.querySelector(".rocket");
let x = Number(getComputedStyle(rocket).left.substr(0, getComputedStyle(rocket).left.length - 2));
let y = Number(getComputedStyle(rocket).bottom.substr(0, getComputedStyle(rocket).bottom.length - 2));

function start() {
    rocket.style.left = 300 + x + "px";
    rocket.style.bottom = 300 + y +"px";
}

launch.addEventListener("click", start);
