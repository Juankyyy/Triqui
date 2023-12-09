const title = document.querySelector("#title");

const body = document.querySelector("body")
const dark = document.querySelector("#darkMode");
let count = 1
dark.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    count++;
    if (count % 2 == 0) {
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z"/></svg>`;
        dark.style.backgroundColor = "#ffff00";
        dark.style.fill = "#000";
    } else {
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z"/></svg>`;
        dark.style.backgroundColor = "#000";
        dark.style.fill = "#fff";
    }
});


const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");

const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");

let ganar = false;
let turno = 0;
let ronda = (posicion) => {
    turno++;
    if (turno % 2 == 0) {
        title.textContent = "Turno de: X";
        posicion.innerHTML != "" ? console.log("Ya hay algo aquí") : posicion.append("o");
    } else {
        title.textContent = "Turno de: O";
        posicion.innerHTML != "" ? console.log("Ya hay algo aquí") : posicion.append("x");
    }
};

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