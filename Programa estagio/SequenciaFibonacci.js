// Define o numero que queremos verificar na sequencia de Fibonacci
let targetNumber = 12;

// Define o valor das variaveis como os dois primeiros numeros na sequencia de Fibonacci. Sao definidos como let para poderem ser atualizados posteriormente
let fibNumber1 = 0; // Primeiro numero na sequencia
let fibNumber2 = 1; // Segundo numero na sequencia

let fibSum = 0; // Soma dos dois numeros anteriores, que gera o resultado do proximo numero da sequencia de fibonacci
let fibonacciSequence = [0, 1]; // Array para armazenar a sequencia de Fibonacci, comecando com os numeros iniciais. Os numeros inicias sao colocados pois a lista sera percorrida pelo metodo includes() para saber se o targetNumber esta dentro desse array, caso os numeros iniciais nao estivessem incluidos, eles nao seriam verificados, gerando uma quebra do codigo, caso o targetNumber fosse 0 ou 1 

// Criacao da funaoo para gerar a sequencia de Fibonacci ate chegar ao numero alvo

function calculateFibonacciSequence() {
    // Gera a sequencia ate que o ultimo numero seja maior ou igual ao numero alvo
    while (fibSum < targetNumber) {
        fibSum = fibNumber1 + fibNumber2; // Calcula a soma dos dois primeiros numeros da sequencia de fibonnaci
        fibNumber1 = fibNumber2; // Atualiza o primeiro numero da sequencia para o valor do segundo
        fibNumber2 = fibSum; // Atualiza o segundo numero para o valor da soma
        fibonacciSequence.push(fibSum); // Adiciona o resultado da soma de number1+number2 ao array declarado anteriormente e apos isso repete por estar em um laco de repeticao, ate chegar ao numero inserido em 'targetNumber'
    }
}

// chama a funcao que faz o calculo
calculateFibonacciSequence();

// Percorre o array e verifica se algum valor inserido nele e igual ao targetNumber, em caso positivo retorna a mensagem 'Está na sequência', caso false 'Não está na sequência'
if (fibonacciSequence.includes(targetNumber)) {
    console.log('Está na sequência');
} else {
    console.log('Não está na sequência');
}

// Exibe o conteudo do array
console.log(fibonacciSequence);
