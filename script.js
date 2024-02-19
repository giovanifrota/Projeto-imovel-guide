const botoesTelefone = document.querySelectorAll('.ver-telefone');
const telefoneParagrafo = document.querySelector('.numero-telefone')
const botaoEnviar = document.querySelector('.botao-enviar')

const alerta = () =>{
    alert('Mensagem enviada')
}

botaoEnviar.addEventListener('click', alerta)

botoesTelefone.forEach(function(botaoTelefone) {
    botaoTelefone.addEventListener('click', function(event) {
        event.preventDefault();

        var telefoneParagrafo = this.nextElementSibling;
        telefoneParagrafo.style.display = telefoneParagrafo.style.display === 'block' ? 'none' : 'block';
    });
});

function menuShow() {
    var mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("menu-aberto");
}

document.getElementById("calcular").addEventListener("click", function() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);

    var resultado = (valor3 * valor2) / valor1;
    
    document.getElementById("resultado").value = resultado;
});