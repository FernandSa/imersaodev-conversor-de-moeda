//Variável do valor do dolar em texto + pergunta que aparece como "alerta"
var valorEmDolarTexto = prompt("Qual o valor em dolar que você que converter?")

//Variével valor em numero para interação do usuário
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//Variáriavel para fazer o valor colocado vezes a cotação do Dolar
var valorEmReal = valorEmDolarNumero * 5.62

//Variáriavel criada para colocar 
var valorEmRealDecimal = valorEmReal.toFixed(2)

//alerta para mostrar o resultado final da conta!
alert(valorEmRealDecimal)

//comentário == //
