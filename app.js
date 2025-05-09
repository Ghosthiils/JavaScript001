// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "Luiz"
let idade = 20

// Console e Debug

console.log("seu nome é", nome)
console.log("vc tem " + idade)
nome = "Renato"
idade = "25"
console.log(nome, idade)

//tipos de dados
//text == string
let cidade = "americana"
console.log(typeof cidade)

//numerico == number
let salario = 1500.35
console.log(typeof salario)


//boleano == boleano
let fumante = false

console.log(typeof fumante)


// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+, -, /, *)
console.log(10+15)
let n1 = 10
let n2 = 5
console.log(n1 + n2) // soma
console.log(n1 - n2) // subtracao
console.log(n1 / n2) // divisao
console.log(n1 * n2) // multiplicacao
console.log(n1 % n2) // modulo
//     Operadores relacionais (> , < , >= , <= , != , ==)
console.log(n1 == n2) //igualdade
console.log(n1 != n2) //diferente
console.log(n1 > n2) //maior
console.log(10 < 10) //menor
console.log(10 <= 10) //menor igual
console.log(150 >= 175) //maior igual

//     Operadores lógicos (! , && , ||)
console.log(!10>2) //nao
console.log(!false) 

console.log(10>2 && 35<100 && n1>n2 && 100<90) //Todas as verificacoes precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10 < 2 || 100 == 150 || 57 == 57) // apenas uma verificacao precisa ser verdadeira para o resultado ser verdadeiro, o resultado só sera falso quando TODAS as verificacoes forem falsas

//desafio 
let preco = 100
let precoAcrecismo = 0
let precoDesconto = 0
//faça um codigo que acrescente 17% ao preco e imprima
precoAcrecismo = preco + preco * 0.17
console.log("preco com acrescimo de " + precoAcrecismo.toFixed(2))
//faça um codigo que desconte 7% do preco e imprima
precoDesconto = preco - preco * 0.07
console.log(" preco com desconto de " + precoDesconto.toFixed(2))







// Estrutura
//     Estrutura de controle/decisão
if(10>50) {
    console.log("10 é maior que 5")
} else {
    console.log("10 é menor que 50")
}


 let idadeDoCandidato = 159

 if(idadeDoCandidato >= 18 ) {
    console.log("pode dirigir")
 } else {
    console.log("volte mais tarde")
 }


 //DESAFIO
 //faça um codigo que verifique se o salario do funcionario é maior que 5000, se for mostre a mensagem "salario OK" se nao mostre a mensagem "precisa de um aumento de x reais"

 let funcionario = 3000 

 if (funcionario > 5000) {
    console.log("salario OK")
 } else {
    console.log("precisa de um aumento de", 5000 - funcionario)

 }
 
//     Laços de repetição
// quero mostrar 10 vezes a mensagem "senac Americana"
let controle = 1 //definicao da variavel de controle
while(controle <= 100 ) { // condicao
   console.log(controle)
   controle = controle + 2 //incremento
}
//mostrar 10 vezes a mensagem "senac Americana"
for(let i=1; i<=10; i=i+1) {
console.log("Senac Americana")
}

for(let i=1; i<=50; i=i+1) {
   console.log(i)
}

// Arrays --> vetor
let alunos = ["Joao", "paulo", "Renata", "Cris", "X"]
console.log(alunos)
console.log(alunos[2])
alunos[4] = "kleber"
console.log(alunos)
alunos.push("karem")
console.log(alunos)

let frutas = []

frutas.push("🍉")
frutas.push("🥑")
frutas.push("🍐")
frutas.push("🍊")
frutas.push("🍓")
console.log(frutas)




// Funções básicas
// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************