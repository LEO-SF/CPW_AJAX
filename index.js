
var carregando = false; // indica se uma requisição Ajax está em andamento


function carregarImagens() {
    if (carregando == true) {
      return;
    }
    carregando = true;
    var url = "imagens.json";
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
        var imagens = JSON.parse(ajax.responseText);
        var divImagens = document.getElementById("images");
  
        for (const image of imagens.images) {
            var img = document.createElement("img");
            img.src = image.imagemUrl;
            divImagens.appendChild(img);      
        }
        carregando = false;
    }
    };
     ajax.send();
     var imgs = ajax.responseText.;
     console.log(imgs + "Hello");
  }

  carregarImagens()
/*
var imagesContainer = document.getElementById('images');

function randomize(){

for (var i = 0; i < imageUrls.length; i++) {

    var imageRandom = Math.floor(Math.random() * (imageUrls.length));
    // Cria um elemento de imagem para cada URL
    var imageElement = document.createElement('img');
  
    // Define o atributo 'src' do elemento de imagem com a URL da imagem atual
    imageElement.src = imageUrls[imageRandom];

    imageElement.width = 1200;
    imageElement.height = 800;
  
    // Adiciona o elemento de imagem ao elemento contêiner
    imagesContainer.appendChild(imageElement);
  }
}


carregarImagens()

window.addEventListener('scroll', endPage);

function endPage(){
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      carregarImagens()
    }

}*/