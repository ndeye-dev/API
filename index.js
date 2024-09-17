
const ulElement = document.getElementById('Liste');

fetch("https://restcountries.com/v3.1/all")
.then(response => {
if (!response.ok) {
    throw new Error('Données inattendues reçues');
}
return response.json();
})
.then(data => {
console.log(data); 

    data.forEach(country => {
        const liElement = document.createElement("li");

        const nomPays = document.createElement("div");
        nomPays.className = 'nom-pays';
        nomPays.innerHTML = country.name.common;
    //     nomPays.textContent = country.continents;

        const drapeau = document.createElement("img");
        drapeau.className = 'drap';
        drapeau.src = country.flags.png;

        liElement.appendChild(nomPays);
        liElement.appendChild(drapeau);

        ulElement.appendChild(liElement);
    });
})
.catch(error => {
console.error('Erreur :', error);
});  

document.getElementById('recherche').addEventListener('input', (e) => {
    e.preventDefault();
     const rechercher = document.getElementById('recherche').value.toLowerCase();
     const objet = ulElement.getElementsByTagName('li');

     for (let i = 0; i < objet.length; i++) {
         const countryName = objet[i].getElementsByClassName('nom-pays')[0].textContent.toLowerCase();
         if (countryName.includes(rechercher)) {
             objet[i].style.display = '';
         } else {
             objet[i].style.display = 'none';
         }
     }
});
