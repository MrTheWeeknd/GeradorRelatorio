//gerar o pdf
/*
function funcao_pdf() {
    var pegarDados = document.getElementById('relatorio').innerHTML;
    var janela = window.open('', '', 'width=800, heigth= 600');
    var ocultar = document.getElementById('photos-container');
    ocultar.style.display = 'none';

    janela.document.write('<html> <head>');
    janela.document.write('<title></title> </head>');
    janela.document.write('<link rel="stylesheet" type="text/css" href="index.css">');
    janela.document.write('<body>');
    janela.document.write(pegarDados);
    janela.document.write('</body> </html>');
    janela.document.close();
    janela.print();

    ocultar.style.display = '';
}
*/

function funcao_pdf() {
    var element = document.getElementById('relatorio'); // Seleciona o conteúdo do relatório
    html2pdf()
      .set({
        margin: 0,
        filename: 'relatorio.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      })
      .from(element)
      .save(); // Salva o PDF
  }
  

// Adicionando as fotos (pré-visualização e upload ilimitado)
document
.getElementById("fotos")
.addEventListener("change", function (event) {
  var files = event.target.files;
  var container = document.getElementById("photos-container");
  for (var i = 0; i < files.length; i++) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = document.createElement("img");
      img.src = e.target.result;
      img.width = 150;
      img.height = 150;
      container.appendChild(img);
    };
    reader.readAsDataURL(files[i]);
  }
});


//script google maps

function initAutocomplete() {
    var input = document.getElementById('endereco');
    var autocomplete = new google.maps.places.Autocomplete(input);
    
    // Se você deseja restringir as sugestões a um país específico, pode fazer isso:
    autocomplete.setComponentRestrictions({ 'country': ['br'] });

    // Para lidar com a seleção do endereço
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        console.log(place); // Aqui você pode pegar as informações do endereço selecionado
    });
}
window.onload = initAutocomplete;

//exibe somente quem fez o serviço
