/* ØVELSE 5 */

document.addEventListener("DOMContentLoaded", start);

function start() {
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

  /* OPGAVE 3 */

  let billede1 = document.querySelector("article:first-child img");
  billede1.setAttribute("src", "https://picsum.photos/id/80/400/300");
  billede1.setAttribute("alt", "grankogler");

  let billede2 = document.querySelector("article:nth-child(2) img");
  billede2.setAttribute("src", "https://picsum.photos/id/90/400/300");
  billede2.setAttribute("alt", "glas på pinde");

  /* OPGAVE 4 */

  const newArticle = document.createElement("article");
  const newImage = document.createElement("img");
  newImage.src = "https://picsum.photos/id/57/400/300";
  newImage.alt = "Street in the city";

  const newHeading = document.createElement("h3");
  newHeading.textContent = "En flot gade i byen";

  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Her er der åbenbart ingen, der gider at gå.";

  const mainElement = document.querySelector("main");

  // Append the new elements to the new article
  newArticle.appendChild(newImage);
  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);

  // Insert the new article after the existing articles
  mainElement.appendChild(newArticle);

  billede1.addEventListener("click", changePicture);

  function changePicture() {
    billede1.setAttribute("src", "https://picsum.photos/400/300");
    billede1.setAttribute("alt", "new_image_alt_text_here");
  }
}
