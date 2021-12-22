console.log(`function fat(i) {
    return i * fat(i-1)  
}

i   ||   fat
0   ||   0 * fat(0-1) == 0 * -1 * fat(-1-1) == 0 * -1 * -2 * fat(-2-1) ...
1   ||   1 * fat(1-1) == 1 * 0 * fat(0-1) == 1 * 0 * -1 * fat(-1-1) ...
2   ||   2 * fat(2-1) == 2 * 1 * fat(1-1) == 2 * 1 * 0 * fat(0-1) ...
... ||   ...

A recursividade foi feita errada, a função é chamada infinitamente pois não há uma condição de parada. 
Precisamos colocar uma condição de, quando 'i' for igual a 0, retornar 1 e, caso não seja, continua executando o resto da função normalmente.
Fazendo assim, temos um 'break point' na função e ela não é executada infinitamente.
E a condição escolhida foi pelo fato do fatorial de 0 ser 1.


Segue abaixo a função corrigida:

function fat(i) {
	if (typeof i !== 'number') {
  	return console.log('Número inválido. A função so aceita números inteiros maiores ou igual a 0')
  }
  if (i == 0)
    return 1
  else
    return i * fat(i-1)  
}
`)

function fat(i) {
	if (i < 0 || typeof i !== 'number')
  	return console.log('Número inválido. A função so aceita números inteiros maiores ou igual a 0')
  else if (i == 0)
    return 1
  else
    return i * fat(i-1)  
}