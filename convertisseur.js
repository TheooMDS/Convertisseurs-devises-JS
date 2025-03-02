const tauxChange = {
    "USD": { "EUR": 0.92, "GBP": 0.79, "JPY": 144.50, "MXN": 17.00, "LBP": 89500, "CAD": 1.35, "USD": 1 },
    "EUR": { "USD": 1.09, "GBP": 0.86, "JPY": 156.80, "MXN": 18.50, "LBP": 97000, "CAD": 1.47, "EUR": 1 },
    "GBP": { "USD": 1.27, "EUR": 1.16, "JPY": 183.20, "MXN": 21.60, "LBP": 113000, "CAD": 1.71, "GBP": 1 },
    "JPY": { "USD": 0.0069, "EUR": 0.0064, "GBP": 0.0055, "MXN": 0.12, "LBP": 630, "CAD": 0.0093, "JPY": 1 },
    "MXN": { "USD": 0.059, "EUR": 0.054, "GBP": 0.046, "JPY": 8.10, "LBP": 5200, "CAD": 0.078, "MXN": 1 },
    "LBP": { "USD": 0.000011, "EUR": 0.000010, "GBP": 0.0000089, "JPY": 0.0016, "MXN": 0.00019, "CAD": 0.000015, "LBP": 1 },
    "CAD": { "USD": 0.74, "EUR": 0.68, "GBP": 0.58, "JPY": 107.80, "MXN": 12.80, "LBP": 66000, "CAD": 1 }
};

window.onload = function() {
    // Récupère le bouton de conversion dans la page
    const bouton = document.getElementById("convertButton");
    if (bouton) {
        bouton.onclick = convertirDevise; // Associe la fonction de conversion au clic
    }
};

function convertirDevise() {
    // Récupère la valeur saisie par l'utilisateur
    const montant = parseFloat(document.getElementById("montant").value);
    const deviseDepart = document.getElementById("deviseDepart").value;
    const deviseArrivee = document.getElementById("deviseArrivee").value;
    const resultat = document.getElementById("montantConverti");

    // Vérifie que la conversion est possible
    if (!tauxChange[deviseDepart] || !tauxChange[deviseDepart][deviseArrivee]) {
        resultat.value = "Erreur de conversion";
        return;
    }

    // Calcule le montant converti
    const montantConverti = montant * tauxChange[deviseDepart][deviseArrivee];
    
    // Affiche le résultat
    resultat.value = montantConverti.toFixed(2);
}