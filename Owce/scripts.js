
function toHTML(owca) {
    return `
        <tr>
            <td>${owca.name}</td>
            <td>${owca.colors}</td>
            <td>${owca.age}</td>
            <td>${owca.cansweam}</td>
            <td>${owca.ishappy}</td>
            <td>${owca.maxSpeed}</td>
            <td>${owca.numberoflegs}</td>
        </tr> `

}

const tabela = document.querySelector("#owce");
const imie = document.querySelector

function check( owca) {
const wpisaneImie = imie.value.trim()
if(imie.textContent.trim() == "") return true;
return owca.name.startsWith (imie.textContent.trim(wpisaneImie) );

}

function refresh() {
    const przezfiltronie_owce = randomSheeps.filter(owca => owca.name === imie)
    const html_owce = przezfiltronie_owce.map(toHTML)
    tabela.innerHTML=randomSheeps.map(toHTML).join("");
}


refresh();

const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);





