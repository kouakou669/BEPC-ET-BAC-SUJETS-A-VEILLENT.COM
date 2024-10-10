function showNotification() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show"; // Ajoute la classe pour afficher la notification
    setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000); // Cache après 3 secondes
}
