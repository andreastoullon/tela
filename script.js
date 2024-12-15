const meuBotao = document.querySelector(".lg");
function exibirMensagem(){
    console.log("hello world");
}
if(meuBotao){
    meuBotao.addEventListener("click", exibirMensagem);
}
// javascript e o botao de login funcionando 