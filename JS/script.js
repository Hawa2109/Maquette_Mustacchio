// alert("Bonjour !");

//############################# Link de la page courante ##################
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne tous les liens de navigation
  const navLinks = document.querySelectorAll(".nav-link");

  // Récupère le chemin actuel de la page (sans le domaine)
  const currentPath = window.location.pathname;

  // Vérifie si le chemin de chaque lien correspond au chemin actuel
  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath) {
      // Applique une classe pour styliser le lien actif
      link.classList.add("active-link");
    }
  });
});

// On affiche la page gallery_single_post.html quand on clique sur le bouton
document.addEventListener("DOMContentLoaded", function () {
  let divAffichage = document.querySelector(".div-affichage");
  let title = divAffichage.querySelector("h3");
  let button = divAffichage.querySelector(".affichage-button");

  divAffichage.addEventListener("mouseover", function () {
    let highlightColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--highlight-color");

    // on change la couleur du titre
    title.style.color = highlightColor;

    // on change la couleur du bouton
    button.style.backgroundColor = highlightColor;
    button.style.color = "var(--primary-black)";

    // on change la couleur de la bordure
    divAffichage.style.borderRight = `6px solid ${highlightColor}`;
    divAffichage.style.borderBottom = `6px solid ${highlightColor}`;
  });

  divAffichage.addEventListener("mouseout", function () {
    // On récupère la couleur de base du titre
    title.style.color = "";

    // On récupère la couleur de base du bouton
    button.style.backgroundColor = "";
    button.style.color = "";

    // on récupère la couleur de base de la bordure
    divAffichage.style.borderRight = "";
    divAffichage.style.borderBottom = "";
  });
});

// ############################################ ### FORMULAIRE ### ############################################
document.addEventListener("DOMContentLoaded", function () {
  // On récupére notre formulaire
  let form = document.querySelector("form");
  //   On récupère les champs du formulaire
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("tel");
  let messageInput = document.getElementById("textarea");
  let successMessage = document.getElementById("messageValidation");

  //########################### Création d'un conteneur pour accueillir TOUTES les divs d'erreur ######################
  let globalErrorContainer = document.createElement("div");
  // On l'insère juste au-dessus du champ "Name"
  nameInput.parentElement.insertBefore(globalErrorContainer, nameInput);

  // On ajout un ecouteur d'événement sur le formulaire
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // On vide le conteneur d'erreurs à chaque submit
    globalErrorContainer.innerHTML = "";

    let isValid = true;

    // --------------------------------------------------- Vérification du champ Name -------------------------------
    let nameValue = nameInput.value.trim();
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/.test(nameValue)) {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add(
        "text-danger",
        "bg-danger-subtle",
        "text-center",
        "p-2",
        "mt-2"
      );
      errorDiv.textContent =
        "Le nom doit contenir au moins 2 caractères (lettres seulement).";
      globalErrorContainer.appendChild(errorDiv);
      isValid = false;
    }

    // --------------------------------------------- Vérification de l'email ----------------------------
    let emailValue = emailInput.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add(
        "text-danger",
        "bg-danger-subtle",
        "text-center",
        "p-2",
        "mt-2"
      );
      errorDiv.textContent = "Veuillez entrer une adresse e-mail valide.";
      globalErrorContainer.appendChild(errorDiv);
      isValid = false;
    }

    // ---------------------------------- Vérification du numéro de téléphone --------------
    let phoneValue = phoneInput.value.trim();
    //  10 chiffres consécutifs
    if (!/^\d{10}$/.test(phoneValue)) {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add(
        "text-danger",
        "bg-danger-subtle",
        "text-center",
        "p-2",
        "mt-2"
      );
      errorDiv.textContent =
        "Le numéro de téléphone doit contenir exactement 10 chiffres.";
      globalErrorContainer.appendChild(errorDiv);
      isValid = false;
    }

    // ------------------ Vérification du message (textarea) ----------------------
    let messageValue = messageInput.value.trim();
    // On veut minimum 20 caractères et pas que des chiffres
    if (messageValue.length < 15) {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add(
        "text-danger",
        "bg-danger-subtle",
        "text-center",
        "p-2",
        "mt-2"
      );
      errorDiv.textContent =
        "Le message doit faire au moins 15 caractères et ne pas être composé uniquement de chiffres.";
      globalErrorContainer.appendChild(errorDiv);
      isValid = false;
    }

    // #################  Affichage du message de succès ou erreurs ###################
    if (!isValid) {
      // On a déjà inséré les divs d'erreur au-dessus
      successMessage.classList.add("d-none");
    } else {
      // Tout est bon : on cache les erreurs, on affiche le succès
      globalErrorContainer.innerHTML = "";
      successMessage.classList.remove("d-none");
      form.reset();
    }
  });
});
