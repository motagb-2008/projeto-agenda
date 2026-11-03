const botao = document.getElementById("menu_contatos")
console.log(botao)
function BotaoFuncinal (){
    console.log ("apetou no meu botao hihiha");
}
botao.addEventListener('click',BotaoFuncinal);

const search = document.getElementById("pesquisa");
search.addEventListener('input',function(){
    console.log(search.value);
});
// o 'click' e o 'input' sao eventos, ou seja , açoes especificas usadas no addEventListener com suas proprias finalidades
// 'input' eh um evento que detecta quando se digita algo na barra de pesquisa
// XXX.value o valor da variavel de texto do XXX eh capturado pelo .value