// alert("Bonjour !");
document.addEventListener("DOMContentLoaded", function () {

//############################# Link de la page courante ##################

  // Sélectionne tous les liens de navigation
  let navLinks = document.querySelectorAll(".nav-link");

  // Récupère le chemin actuel de la page (sans le domaine)
  let courantPath = window.location.pathname;

  // Vérifie si le chemin de chaque lien correspond au chemin actuel
  navLinks.forEach((link) => {
    let linkPath = new URL(link.href).pathname;
    if (linkPath === courantPath) {
      // Applique une classe pour styliser le lien actif
      link.classList.add("active-link");
    }
  });

// #############################################  GALLERY SINGLE POST ###################################################3
// On affiche la page gallery_single_post.html quand on clique sur le bouton
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

    // on ajout un boxshadow
    divAffichage.style.boxShadow = `6px 6px 0px ${highlightColor}`;
  });

  divAffichage.addEventListener("mouseout", function () {
    // On récupère la couleur de base du titre
    title.style.color = "";

    // On récupère la couleur de base du bouton
    button.style.backgroundColor = "";
    button.style.color = "";

    // on récupère la couleur de base du boxshadow
    divAffichage.style.boxShadow= "";
  });


// ############################################ ### FORMULAIRE ### ############################################
  // On récupére notre formulaire
  let form = document.querySelector("form");
  //   On récupère les champs du formulaire
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("tel");
  let messageInput = document.getElementById("textarea");
  let successMessage = document.getElementById("messageValidation");

  // On récupère les labels correspondants
        let nameLabel = document.querySelector("label[for='name']");
        let addressLabel = document.querySelector("label[for='text']");
        let emailLabel = document.querySelector("label[for='email']");
        let phoneLabel = document.querySelector("label[for='tel']");
        let messageLabel = document.querySelector("label[for='textarea']");

  //########################### Création d'un conteneur pour accueillir TOUTES les divs d'erreur ######################
  let globalErrorContainer = document.createElement("div");

  // On l'insère juste au-dessus du champ "Name"
  nameLabel.parentElement.insertBefore(globalErrorContainer, nameLabel);

  // On ajout un ecouteur d'événement sur le formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // On vide le conteneur d'erreurs à chaque submit
    globalErrorContainer.innerHTML = "";

    // Réinitialise les classes des labels
    [nameLabel, emailLabel, phoneLabel, messageLabel].forEach((label) =>
        label.classList.remove("d-none", "label-error")
    );

    let isValid = true;

    // Récupérer les valeurs des champs
    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let phoneValue = phoneInput.value.trim();
    let messageValue = messageInput.value.trim();

    // Vérifier si tous les champs sont vides
    if (!nameValue && !emailValue && !phoneValue && !messageValue) {
        let errorDiv = document.createElement("div");
        errorDiv.classList.add(
            "text-danger",
            "bg-danger-subtle",
            "text-center",
            "p-2",
            "mt-2"
        );
        errorDiv.textContent = "Tous les champs sont requis.";
        globalErrorContainer.appendChild(errorDiv);
        isValid = false; // Formulaire non valide
    } else {
        // Vérifications individuelles des champs seulement si nécessaire

        // Champ "Nom"
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/.test(nameValue)) {
            let errorDiv = document.createElement("div");
            errorDiv.classList.add(
                "text-danger",
                "bg-danger-subtle",
                "text-center",
                "p-2",
                "mt-2"
            );
            errorDiv.textContent = "Vérifier votre nom.";
            globalErrorContainer.appendChild(errorDiv);
            nameLabel.classList.add("label-error");
            isValid = false;
        }

        // Champ "Email"
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
            errorDiv.textContent = "Vérifier votre email.";
            globalErrorContainer.appendChild(errorDiv);
            emailLabel.classList.add("label-error");
            isValid = false;
        }

        // Champ "Téléphone"
        if (!/^\d{10}$/.test(phoneValue)) {
            let errorDiv = document.createElement("div");
            errorDiv.classList.add(
                "text-danger",
                "bg-danger-subtle",
                "text-center",
                "p-2",
                "mt-2"
            );
            errorDiv.textContent = "Vérifier votre numéro de téléphone.";
            globalErrorContainer.appendChild(errorDiv);
            phoneLabel.classList.add("label-error");
            isValid = false;
        }

        // Champ "Message"
        if (messageValue.length < 15) {
            let errorDiv = document.createElement("div");
            errorDiv.classList.add(
                "text-danger",
                "bg-danger-subtle",
                "text-center",
                "p-2",
                "mt-2"
            );
            errorDiv.textContent = "Vérifier votre message.";
            globalErrorContainer.appendChild(errorDiv);
            messageLabel.classList.add("label-error");
            isValid = false;
        }
    }

    // Affichage du message de succès ou erreurs
    if (!isValid) {
        successMessage.classList.add("d-none");
    } else {
        globalErrorContainer.innerHTML = "";
        successMessage.classList.remove("d-none");
        form.reset();
    }
});


});
