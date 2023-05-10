//Funcionalidade de checagem de valores (HTML já faz isso nativamente mas aqui vai uma implementação de aprendizado com JS)

const nome = window.document.getElementById("name");
const email = window.document.getElementById("email");

// Utilizando o conceito de operadores ternários
/* (condição) ? (se sim faz isso) : (se falso faz isso)
     (nome e email tem valor) ? avisa que provavelmente tá ok
        : (nome ok email nao) ? avisa que falta email
        : (nome não ok email ok) ? avisa que falta nome
        : (sem valores) ? avisa que façta nome e email;
*/

function saveSuccess(){
    nome.value && email.value ? alert("Ao clicar 'OK!' você será redirecionado para uma nova página em alguns segundos.\n\nCaso não seja, verifique seu e-mail!")
        : nome.value && !email.value ? alert("Você precisa colocar seu email!")
        : !nome.value && email.value ? alert("Você precisa colocar seu nome!")
        : alert("Você precisa colocar seu nome e seu email!");
}