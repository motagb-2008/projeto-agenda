

const search = document.getElementById("pesquisa");

// o 'click' e o 'input' sao eventos, ou seja , açoes especificas usadas no addEventListener com suas proprias finalidades
// 'input' eh um evento que detecta quando se digita algo na barra de pesquisa
// XXX.value o valor da variavel de texto do XXX eh capturado pelo .value

search.addEventListener('input', function(){
    if (search.value.length > 0 ){
        console.log("Nome valido!");
    }else{
        console.log("Sem nome registrado")
    }
})

const ListaContatos = [
    {nome:"Gabriel", num:"21971573349" },
    {nome:"Patricia", num:"21999788428" }
];
console.log(ListaContatos[0].nome, ListaContatos[0].num); 

const linguiça = [
    {nome:"adairton", num: "2199999999"},
    {nome: "Gabriela", num:"10101010110"}                
];
ListaContatos.push (...linguiça);



const especifico = ListaContatos.filter(function(contato){
    return contato.nome === "Gabriel" || contato.nome === "adairton";

})
console.log(especifico);

search.addEventListener('input',function(){
    const valor_pesquisado = search.value;
    
    const resultado = ListaContatos.filter(function(contatos){
        return contatos.nome.includes(valor_pesquisado)
    })
    console.log(resultado)
    const principal = document.getElementById("main");
        principal.textContent =""
        resultado.forEach(function(contato_filtrado){
            principal.textContent += contato_filtrado.nome + "\n"
              
        
            })
})



