// declaro a variavel display ondo será exibido o que for teclado
const display = document.querySelector('.campoResultado')
// Função que exibira o que for teclado dentro do display
function valor(valor) {
   display.innerHTML += valor
}
// Função que computa as strings tecladas 
// OBS: nunca usar a função 'eval', *uso meramente para fins educativo de pratica*

function calcular() {
   let resultado = document.getElementById('res').innerHTML
   display.innerHTML = eval(resultado)
}
// Função usada para apagar apenas o ultimo valor digitado 
function del() {
   if (display.textContent) {
      let resultado = document.getElementById('res').innerHTML
      display.innerHTML = resultado.slice(0, resultado.length - 1)
   }
}
// Função usada para apagar todos valores adicionados
function clean() {
   display.innerHTML = ''
}