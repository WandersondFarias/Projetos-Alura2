let listaManga = [];

//let dicionario = [
listaManga = [
  "https://img.assinaja.com/assets/tZ/004/img/351383_520x520.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51BeRXEKuWL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81EFJlUUAuL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91KDm4kUI2L.jpg",
  "https://http2.mlstatic.com/D_NQ_NP_632296-MLB45688299579_042021-O.jpg"
];

imagemManga = document.getElementById("aparecerManga");

function add() {
  var link = document.getElementById("link").value;
  listaManga.push(link);
  imagemManga.innerHTML = aparecerManga.innerHTML + "<img src=" + link + ">";
}
for (var i = 0; i < listaManga.length; i++) {
  document.write("<img src=" + listaManga[i] + ">");
}
