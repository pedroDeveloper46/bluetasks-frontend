// == verifica apenas o valor e faz uma conversão entre as variveis, então uma string '10' e um int 10 seriam iguais usando esse operado
//=== verificar o valor e também o tipo, com um int 10, o operador só irá retornar true se a outra variavel também for inteiro e com valor 10

for (let index = 1; index <= 10; index++) {
    if (index % 2 === 0) {
        console.log(`${index} é par!`)
    }
}

//arrays
const array = [1,6,7,8,9,8];
console.log(array)

//objetos

const carro = {
    nome: 'Ford Ka',
    cor: 'Branco',
    ano: 2019
}

console.log(carro)
console.log(`O nome carro é o ${carro.nome}, cor ${carro.cor} e ano ${carro.ano}`)

const carros = [
    {
        nome: 'Fiesta',
        cor: 'Preto',
        ano: 2012
    },
    {
        nome: 'Gol',
        cor: 'Prata',
        ano: 2014
    },
    {
        nome: 'Renegade',
        cor: 'Vermelho',
        ano: 2018
    }
]

console.log(carros)

//spread operator
console.log(...array)

const outroCarro = {
    ...carro,
    marca: 'Ford'
}

console.log(outroCarro)


function print(message){
    console.log(message);
}

print('Pedro Victor')

const print2 = (message) => console.log(message)

print2('Sales Cavalcante')

const mult = (a,b) => a * b
console.log(mult(9,7))


//programação funcional
function somar(a,b){
    return a + b;
}

function multiplicar(a,b){
    return a * b;
}

function processar(a,b,op){
    return op(a,b);
}

console.log(processar(80,10,multiplicar));

const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros.map(n => n *2));

console.log(numeros.filter(n => n % 2 === 0))

//desestruturação de arrays e objetos

const letras = ['a','b','c'];

const [letraA, letraB, letraC] = letras;

console.log(`Letras ${letraA}, ${letraB}, ${letraC}`)

const carroObjeto = {
    nome: 'Fiesta',
    ano: '2015',
}

const {nome} = carroObjeto;
console.log(nome);
