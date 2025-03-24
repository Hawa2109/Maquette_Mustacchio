// alert("Bonjour !");
// On va afficher l'image cliquée dans la div de la page gallery_single.html
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    // On sélectionner toutes les images de la galerie
    let images = document.querySelectorAll(".gallery-image img");
    console.log("Images found:", images);

    // On ajouter un événement click à chaque image
    images.forEach(image => {
        image.addEventListener("click", function () {
            console.log("Image clicked:", image.src);
            // On stocke l'URL de l'image cliquée dans le localStorage
            localStorage.setItem("clickedImage", image.src);
            // On rediriger vers la page gallery_single_post.html
            window.location.href = "gallery_single_post.html";
        });
    });

    // On récupérer l'URL de l'image cliquée depuis le localStorage
    let clickedImage = localStorage.getItem("clickedImage");
    if (clickedImage) {
        // Affichage de l'image dans la div
        let imageContainer = document.getElementById("image-container");
        let imgElement = document.createElement("img");
        imgElement.src = clickedImage;
        imgElement.classList.add("img-fluid");
        imageContainer.appendChild(imgElement);
    }
});
// ############################################ ### FORMULAIRE ### ############################################
// On récupére notre formulaire
let myform = document.querySelector("form");
// console.log(myform);
// On recupère les champs du formulaire

// le champ name
let inputName = document.querySelector("#name");
// console.log(inputName);

// le champ adresse
let inputAdresse = document.querySelector("#adresse");

// le champ email
let inputEmail = document.querySelector("#email");

// le champ phone
let inputTel = document.querySelector("#tel");

// le champ message
let inputMessage = document.querySelector("#message");

// le bouton submit
// let inputSubmit = document.querySelector("#submit");

// ############# On ajoute un ecoûteur d'événement sur le formulaire #############
// on ajout l'écouteur d'événement
myForm.addEventListener("submit", function(event){
event.preventDefault();

// on recupère les valeurs des champs en ajoutant aussi un trim pour enlever les espaces
// 
let valueName = inputName.value.trim();
let valueAdresse = inputAdresse.value.trim();
let valueEmail = inputEmail.value.trim();
let valueTel = inputTel.value.trim();
let valueMessage = inputMessage.value.trim();

// On crée un regex pour verifier l'email
let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}a$/;

// On crée des conditions pour verifier les champs
        if(valueName === ""){
            alert("Veuillez renseigner votre nom");
            return;
        }
        if(valueAdresse === ""){
            alert("Veuillez renseigner votre adresse");
            return;
        }
        if(valueEmail === "" || !regexMail.test(valueEmail)){
            alert("Veuillez renseigner un email valide");
            return;
        }
        if(valueTel === ""){
            alert("Veuillez renseigner votre numéro de téléphone");
            return;
        }
        if(valueMessage.length >10  && valueMessage !== ""){
            alert("Veuillez renseigner votre message");
        
        }else{
            alert("Merci pour votre message !");
        }



});























// // on va afficher un message d'alerte si le formulaire est soumis
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOM fully loaded and parsed");

//     // On sélectionner le formulaire
//     let form = document.querySelector("form");
//     console.log("Form found:", form);

//     // On ajouter un événement submit au formulaire
//     form.addEventListener("submit", function (event) {
//         console.log("Form submitted");
//         alert("Merci pour votre message !");
//     });
// });





