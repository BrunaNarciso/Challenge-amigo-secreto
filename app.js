let amigoSecreto = []; 

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value;

    if (nomeAmigo) {
        amigoSecreto.push(nomeAmigo);
        const lista = document.getElementById("listaAmigos");
        lista.textContent = amigoSecreto.join(", "); 
        inputAmigo.value = "";
    } else {
        alert("Por favor, digite um nome."); 
    }
}

function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("A lista está vazia. Adicione novos amigos!"); 
        return;
    }

    const resultado = document.getElementById("resultado");

    if (amigoSecreto.length === 1) {
        resultado.textContent = "O amigo sorteado foi: " + amigoSecreto[0];
        amigoSecreto = []; 
        const lista = document.getElementById("listaAmigos"); 
        lista.textContent = ""; 
        alert("Todos os amigos foram sorteados! Adicione novos amigos para começar novamente.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length); 
    const amigoSorteado = amigoSecreto[indiceAleatorio];
    amigoSecreto.splice(indiceAleatorio, 1); 

    resultado.textContent = "O amigo sorteado foi: " + amigoSorteado;
    const lista = document.getElementById("listaAmigos");
    lista.textContent = amigoSecreto.join(", ");  
   }
