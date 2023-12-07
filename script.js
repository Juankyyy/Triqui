const a1 = document.querySelector("#a1")
const a2 = document.querySelector("#a2")
const a3 = document.querySelector("#a3")

const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")

const c1 = document.querySelector("#c1")
const c2 = document.querySelector("#c2")
const c3 = document.querySelector("#c3")

let ganar = false;
let turno = 0;
let ronda = (posicion) => {
    turno++;
    if (turno % 2 == 0) {
        posicion.innerHTML != "" ? console.log("Ya hay algo aquí") : posicion.append("o");
    } else {
        posicion.innerHTML != "" ? console.log("Ya hay algo aquí") : posicion.append("x");
    }
}

// while (!ganar) {
a1.addEventListener("click", () => {
    ronda(a1);
});

a2.addEventListener("click", () => {
    ronda(a2);
});

a3.addEventListener("click", () => {
    ronda(a3);
});

b1.addEventListener("click", () => {
    ronda(b1);
});

b2.addEventListener("click", () => {
    ronda(b2);
});

b3.addEventListener("click", () => {
    ronda(b3);
});

c1.addEventListener("click", () => {
    ronda(c1);
});

c2.addEventListener("click", () => {
    ronda(c2);
});

c3.addEventListener("click", () => {
    ronda(c3);
});
// };