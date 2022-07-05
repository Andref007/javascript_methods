

//removendo espaços em branco no final da string usa-se o  métodp trim()
function replace() {
    var nome = "José Ângelo Stefânio Antônio        "
    // console.log(`Nome é original: ${nome}`)

 // o atributo .lenght Conta a quantidade de caracteres da string
    // console.log(`Removendo espaços no final da linha ${nome.length}`)

//Retira os espaços em brancos e converte tudo para minúsculo
// console.log(`${nome.trim().toLowerCase()}`)


//Retira os espaços em brancos e converte tudo para maiúsculo
// console.log(`${nome.trim().toUpperCase()}`)

//substitui a string a ser procurado por outra ( o primeiro que achar será substituido e encerra a procura)
// console.log(`${nome.trim().replace("o", "W")}`)


// substitui a string em todas as ocorrências
// console.log(`${nome.trim().replaceAll("o", "W")}`)

//retorna a posição do índice do array da string 
console.log(nome.indexOf('elo'))

}   

replace()





