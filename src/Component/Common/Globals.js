export default {
  // Ne pas mettre le https , pas de SSl de config sur Docker
  // trouver la bonne IP pour la requête : aller dans réseau internet -> wifi -> le wifi en question -> adresse IPv4
  
  //BASE_URL: "http://192.168.1.59:8741", // Adresse IP en cours
  BASE_URL: "http://192.168.90.152:8741", // Adresse IP chez soi
  URL_IMAGES_PROPERTIES: "/assets/images/property/", // Chemin vers un fichier d'image de propriété
  GOOGLE_CLOUD_SERVICE_API_KEY: "XXXXXX",
  TEMP_IMAGE_PATH: "",
  HEADER_COLOR: "#5D1049",
  HEADER_TINT_COLOR: "#FFFFFF",
  HEADER_TITLE_FONTWEIGHT: '500',
  SENTRY_DSN: "XXXXX"
}