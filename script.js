let overskrift = document.querySelector("h1");
console.log(overskrift);

overskrift.textContent = "Velkommen til Medina";

let underoverskrift = document.querySelector("h2");
console.log(underoverskrift);

underoverskrift.textContent = "Her er to spændende artikler om ingenting";

let h3Titel1 = document.querySelector("article:first-child h3");

h3Titel1.textContent = "Pippi er sej";

let h3Titel2 = document.querySelector("article:nth-child(2) h3");

h3Titel2.textContent = "Bla bla bla";

let artikel1 = document.querySelector("article:first-child p");
console.log(artikel1);

artikel1.textContent = "Her står noget klogt, som er meget imponerende";

let artikel2 = document.querySelector("article:nth-child(2) p");
console.log(artikel2);

artikel2.textContent = "Her står også noget klogt, wauw!";

let billede = document.querySelector("img");
console.log(billede);

let article = document.querySelector("article");
console.log(article);
