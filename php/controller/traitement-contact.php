<?php
// ON RECUPERE LES INFOS DU FORMULAIRE
// ET ENSUITE ON VA LES STOCKER DANS LA TABLE SQL blog
$nom             = $_REQUEST["nom"] ?? "";
$email           = $_REQUEST["email"] ?? "";
$message         = $_REQUEST["message"] ?? "";
// appeler ma fonction pour insérer une ligne dans la table SQL blog
// ON VA CHARGER LE CODE DES FONCTIONS
require "php/mes-fonctions.php";
// ensuite je peux appeler mes fonctions
insererLigneTable("contact", [
    "nom"             => $nom,
    "email"           => $email,
    "message"             => $message,
]);
// message de confirmation pour l'utilisateur
$confirmation = "Votre message est bien envoye";
