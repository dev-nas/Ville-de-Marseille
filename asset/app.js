
  /* ICI ON ECRIT DU CODE JS */
  /*
  QUAND ON CLIQUE SUR UNE PHOTO MINIATURE
  ON VEUT QUE L'IMAGE EN GRAND CHANGE POUR LA PHOTO CLIQUEE
  ETAPE1: IL FAUT SELECTIONNER TOUTES LES PHOTOS MINIATURES
  ETAPE2: IL FAUT AJOUTER UN EVENT LISTENER SUR CHAQUE MINIATURE
  */
  /* objet.methode(param1, param2) */        
  var listePhoto = document.querySelectorAll(".container img");
  listePhoto.forEach((image) => {
      // pour chaque image
      image.addEventListener("click", function (photo1) {
          // IL FAUT SELECTIONNER LA PHOTO EN GRAND
          var photoGrand = document.querySelector(".grande-image img");
          // CHANGER L'ATTRIBUT src POUR CHANGER L'IMAGE AFFICHEE
          // this EST UNE VARIABLE QUI CONTIENT LA BALISE SUR LAQUELLE LE VISITEUR A CLIQUE
          photoGrand.src = this.src;
          // DEBUG
          console.log(this);
          // IL FAUT AFFICHER LA LIGHTBOX
          var lightBox = document.querySelector(".grande-image");
          // IL FAUT CHANGER LE display A block
          // lightBox.style.display = 'block';
          // IL FAUT AJOUTER LA CLASSE montrer A LA BALISE
          lightBox.classList.add('montrer');
      });
  });
  // IL FAUT POUVOIR CACHER LA LIGHTBOX SI ON CLIQUE DESSUS
var lightBox = document.querySelector(".grande-image");
lightBox.addEventListener('click', function() {
    // IL FAUT CACHER LA LIGHTBOX
    lightBox.classList.remove('montrer');
});
function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
        x.className += " responsive";
    } else {
        x.className = "rc_nav";
    }