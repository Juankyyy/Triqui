const title = document.querySelector("#title");

const body = document.querySelector("body")
const tabla = document.querySelector("table");
const dark = document.querySelector("#darkMode");
let count = 1
dark.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    count++;
    if (count % 2 == 0) {
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M13 3h-2v2h2V3zm4 2h2v2h-2V5zm-6 6h2v2h-2v-2zm-8 0h2v2H3v-2zm18 0h-2v2h2v-2zM5 5h2v2H5V5zm14 14h-2v-2h2v2zm-8 2h2v-2h-2v2zm-4-2H5v-2h2v2zM9 7h6v2H9V7zm0 8H7V9h2v6zm0 0v2h6v-2h2V9h-2v6H9z"/></svg>`;
        dark.style.backgroundColor = "#ffff00";
        dark.style.fill = "#000";
        tabla.style.border = "3px solid #fff";
    } else {
        dark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z"/></svg>`;
        dark.style.backgroundColor = "#000";
        dark.style.fill = "#fff";
        tabla.style.border = "3px solid #000";
    }
});

const restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
    reiniciar();
})

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
    if (turno % 2 != 0) {
        title.textContent = "Turno de: O"
        posicion.innerHTML != "" ? turno-- : posicion.append("x");
        turno % 2 == 0 ? title.textContent = "Turno de: X" : "";
    } else {
        title.textContent = "Turno de: X"
        posicion.innerHTML != "" ? turno-- : posicion.append("o");
        turno % 2 != 0 ? title.textContent = "Turno de: O" : "";
    }

    turno == 9 ? title.textContent = "¿EMPATE?" : console.log(turno);
};

mapa = {
    row1: ["", "", ""],
    row2: ["", "", ""],
    row3: ["", "", ""]
}

a1.addEventListener("click", () => {
    ronda(a1);
    turno % 2 == 0 ? mapa.row1[0] = "O" : mapa.row1[0] = "X";
});

a2.addEventListener("click", () => {
    ronda(a2);
    turno % 2 == 0 ? mapa.row1[1] = "O" : mapa.row1[1] = "X";
});

a3.addEventListener("click", () => {
    ronda(a3);
    turno % 2 == 0 ? mapa.row1[2] = "O" : mapa.row1[2] = "X";
});

b1.addEventListener("click", () => {
    ronda(b1);
    turno % 2 == 0 ? mapa.row2[0] = "O" : mapa.row2[0] = "X";
});

b2.addEventListener("click", () => {
    ronda(b2);
    turno % 2 == 0 ? mapa.row2[1] = "O" : mapa.row2[1] = "X";
});

b3.addEventListener("click", () => {
    ronda(b3);
    turno % 2 == 0 ? mapa.row2[2] = "O" : mapa.row2[2] = "X";
});

c1.addEventListener("click", () => {
    ronda(c1);
    turno % 2 == 0 ? mapa.row3[0] = "O" : mapa.row3[0] = "X";
});

c2.addEventListener("click", () => {
    ronda(c2);
    turno % 2 == 0 ? mapa.row3[1] = "O" : mapa.row3[1] = "X";
});

c3.addEventListener("click", () => {
    ronda(c3);
    turno % 2 == 0 ? mapa.row3[2] = "O" : mapa.row3[2] = "X";
});

function reiniciar() {
    turno = 0;
    const casillas = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

    body.style.transition = "all 0.5s";
    body.style.backgroundColor = "#000";
    body.style.color = "#000";
    tabla.style.border = "3px solid #000";
    restart.style.backgroundColor = "#000"
    restart.style.color = "#000";
    
    
    setTimeout(() => {
        body.style.transition = "";
        body.style.backgroundColor = "";
        body.style.color = "";
        tabla.style.border = "3px solid";
        restart.style.backgroundColor = "";
        restart.style.color = "";
        
        title.textContent = "Turno de: X";
        casillas.forEach((element) => {
            element.textContent = "";
        });
    }, 800);
}