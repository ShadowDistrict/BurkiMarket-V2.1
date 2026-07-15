import { db } from "./firebase.js";

import {
ref,
push,
set,
onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const liste = document.getElementById("listeProduits");

const publier = document.getElementById("publier");

publier.addEventListener("click", () => {

    const nom = document.getElementById("nom").value.trim();
    const prix = Number(document.getElementById("prix").value);
    const categorie = document.getElementById("categorie").value;
    const description = document.getElementById("description").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

    if (!nom || !prix || !whatsapp) {
        alert("Remplis le nom, le prix et WhatsApp.");
        return;
    }

    const commission = 500;
    const prixFinal = prix + commission;

    const nouveauProduit = push(ref(db, "produits"));

    set(nouveauProduit, {
        nom,
        prix,
        prixFinal,
        commission,
        categorie,
        description,
        whatsapp
    });

    alert("Produit publié !");
});

onValue(ref(db, "produits"), (snapshot) => {

    liste.innerHTML = "";

    snapshot.forEach((item) => {

        const p = item.val();

        liste.innerHTML += `
        <div class="produit">

            <div class="contenu">

                <h3>${p.nom}</h3>

                <p><strong>Catégorie :</strong> ${p.categorie}</p>

                <p>${p.description}</p>

                <p><strong>Prix vendeur :</strong> ${p.prix} FCFA</p>

                <p><strong>Prix client :</strong> ${p.prixFinal} FCFA</p>

                <a href="https://wa.me/${p.whatsapp}" target="_blank">
                    <button class="whatsapp">
                        Contacter sur WhatsApp
                    </button>
                </a>

            </div>

        </div>
        `;

    });

});
