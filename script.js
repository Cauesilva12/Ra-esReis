let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length; // 4
let active = 0;

next.onclick = function() {
    list[active].classList.remove('active');
    active = (active + 1) % count;
    list[active].classList.add('active');
}

prev.onclick = function() {
    list[active].classList.remove('active');
    active = (active - 1 + count) % count;
    list[active].classList.add('active');
}
