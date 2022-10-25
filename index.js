// SEMANA 1:
//Criando características string, number, boolean e com múltiplos valores para, no mínimo, 3 itens.
const d1 = 'Illmatic';
const artista1 = 'Nas';
const duracao1 = 39.51;
const ano1 = 1994;
const tracklist1 = ['The Genesis', 'N.Y. State of Mind', 'Lifes a Bitch', 'The World is Yours', 'Halftime', 'Memory Lane', 'One Love', 'One Time 4 Your Mind, Represent, It Aint Hard to Tell'];
const grammy1 = false;

const d2 = 'Reasonable Doubt';
const artista2 = 'Jay-Z';
const duracao2 = 55.32;
const ano2 = 1996;
const tracklist2 = ['Cant Knock the Hustle', 'Politics as Usual', 'Brooklyns Finest', 'Dead Presidents II', 'Feelin It', 'DEvils', '22 Twos', 'Can I Live', 'Aint No Nigga', 'Friend or Foe', 'Coming of Age', 'Cashmere Thoughts', 'Bring It On', 'Regrets'];
const grammy2 = false;

const d3 = 'The Eminem Show';
const artista3 = 'Eminem';
const duracao3 = 77.19;
const ano3 = 2002;
const tracklist3 = ['Curtains Up', 'White America', 'Business', 'Cleanin Out My Closet', 'Square Dance', 'The Kiss', 'Soldier', 'Say Goodbye Hollywood', 'Drips', 'Without Me', 'Paul Rosenberg', 'Sing for the Moment', 'Superman', 'Hailies Song', 'Steve Berman', 'When the Music Stops', 'Say What You Say', 'Till I Collapse', 'My Dads Gone Crazy', 'Curtains Close'];
const grammy3 = true;

//Calculando a média entre os valores numbers, imprimindo o valor e guardando em uma const.
const mediaDuracao = parseInt((duracao1 + duracao2 + duracao3) / 3);
console.log(`\n\n MÉDIA ENTRE VALORES NUMÉRICOS: ${mediaDuracao}`);

//Imprimindo resultado de uma operação lógica que checa se os booleanos são verdadeiros.
const ganhouGrammy = (grammy1 && grammy2 && grammy3);
console.log(`\n\n VERIFICAÇÃO DE BOOLEANOS: ${ganhouGrammy}`);

//Exibindo um relatório mostrando todos os dados de cada um dos itens criados.
console.log(`RELATÓRIO 1:\n${d1.toUpperCase()}\nArtista do Álbum: ${artista1}\nDuração do Álbum: ${duracao1}\nAno de Lançamento: ${ano1}\nTracklist: ${tracklist1}\nGanhou o Grammy?: ${grammy1}`);
console.log(`RELATÓRIO 2:\n${d2.toUpperCase()}\nArtista do Álbum: ${artista2}\nDuração do Álbum: ${duracao2}\nAno de Lançamento: ${ano2}\nTracklist: ${tracklist2}\nGanhou o Grammy?: ${grammy2}`);
console.log(`RELATÓRIO 3:\n${d3.toUpperCase()}\nArtista do Álbum: ${artista3}\nDuração do Álbum: ${duracao3}\nAno de Lançamento: ${ano3}\nTracklist: ${tracklist3}\nGanhou o Grammy?: ${grammy3}`);
// -------------------------------------------------------------------------------------------------------------------------------------------------

// SEMANA 2:
//Transformando os itens criados em objetos.
const disco1 = {
    nome: 'Illmatic',
    artista: 'Nas',
    duracao: 39.51,
    ano: 1994,
    tracklist: ['The Genesis', 'N.Y. State of Mind', 'Lifes a Bitch', 'The World is Yours', 'Halftime', 'Memory Lane', 'One Love', 'One Time 4 Your Mind', 'Represent', 'It Aint Hard to Tell'],
    grammy: false
}
const disco2 = {
    nome: 'Reasonable Doubt', 
    artista: 'Jay-Z',
    duracao: 55.32,
    ano: 1996,
    tracklist: ['Cant Knock the Hustle', 'Politics as Usual', 'Brooklyns Finest', 'Dead Presidents II', 'Feelin It', 'DEvils', '22 Twos', 'Can I Live', 'Aint No Nigga', 'Friend or Foe', 'Coming of Age', 'Cashmere Thoughts', 'Bring It On', 'Regrets'],
    grammy: false
}
const disco3 = {
    nome: 'The Eminem Show',
    artista: 'Eminem',
    duracao: 77.19,
    ano: 2002,
    tracklist: ['Curtains Up', 'White America', 'Business', 'Cleanin Out My Closet', 'Square Dance', 'The Kiss', 'Soldier', 'Say Goodbye Hollywood', 'Drips', 'Without Me', 'Paul Rosenberg', 'Sing for the Moment', 'Superman', 'Hailies Song', 'Steve Berman', 'When the Music Stops', 'Say What You Say', 'Till I Collapse', 'My Dads Gone Crazy', 'Curtains Close'],
    grammy: true
}
//Criando um array vazio para guardar os objetos.
const discosGrammy2 = [];

//Adicionando objetos criados ao array de objetos, utilizando push.
// discosGrammy2.push(disco1, disco2, disco3);
// console.log('Array de objetos:')
// console.log(discosGrammy2);

//Adicionando itens ao objeto de array mas com uma verificação antes e exibindo um alert caso o item não se encaixe.
const ganhouGrammy2 = (disco) => {
    if(disco.grammy){
        discosGrammy2.push(disco);
    }else{
        alert(`O item não foi adicionado! ${disco.nome} não ganhou o Grammy!`)
    }
}
ganhouGrammy2(disco1)
ganhouGrammy2(disco2)
ganhouGrammy2(disco3)
console.log('\n\n ARRAY DE OBJETOS COM VERIFICAÇÃO')
console.log(discosGrammy2)
// -------------------------------------------------------------------------------------------------------------------------------------------------

//SEMANA 3:
//Não entendi essa parte, consegui o mesmo rsultado usando o jeito abaixo.
console.log(`Disco 1: ${disco1.nome.toUpperCase()}\nArtista do Álbum: ${disco1.artista}\nDuração do Álbum: ${disco1.duracao}\nAno de Lançamento: ${disco1.ano}\nTracklist: ${disco1.tracklist.join(', ')}\nGanhou o Grammy?: ${disco1.grammy}`);
console.log(`Disco 2: ${disco2.nome.toUpperCase()}\nArtista do Álbum: ${disco2.artista}\nDuração do Álbum: ${disco2.duracao}\nAno de Lançamento: ${disco2.ano}\nTracklist: ${disco2.tracklist.join(', ')}\nGanhou o Grammy?: ${disco2.grammy}`);
console.log(`Disco 3: ${disco3.nome.toUpperCase()}\nArtista do Álbum: ${disco3.artista}\nDuração do Álbum: ${disco3.duracao}\nAno de Lançamento: ${disco3.ano}\nTracklist: ${disco3.tracklist.join(', ')}\nGanhou o Grammy?: ${disco3.grammy}`);

//Fazendo o relatório, agora utilizando laços. E criando mais um item para verificação.
const disco4 = {
    nome: 'The College Dropout',
    artista: 'Kanye West',
    duracao: 72.17,
    ano: 2004,
    tracklist: ['Intro', 'We Dont Care', 'Graduation Day', 'All Falls Down', 'Ill Fly Away', 'Spaceship', 'Jesus Walks', 'Never Let Me Down', 'Get Em High', 'Workout Plan', 'The New Workout Plan', 'Slow Jamz', 'Breathe In Breathe Out', 'School Spirit Skit 1', 'School Spirit', 'School Spirit Skit 2', 'Lil Jimmy Skit', 'Two Words', 'Through the Wire', 'Family Business', 'Last Call'],
    grammy: true
}
ganhouGrammy2(disco4)

const discos = [disco1, disco2, disco3, disco4]

console.log(`\n\nRELATÓRIO COM LAÇOS`)

for(disco of discos){
    for(info in disco){
        
        console.log(`${info}: ${disco[info]}`)
    }
}

//Função que recebe um objeto e devolve uma string do relatório do objeto.
const relatorio = (disco) => {
    const stringRelatorio = (`Disco: ${disco.nome}, Artista: ${disco.artista}, Duração: ${disco.duracao}, Tracklist: ${disco.tracklist}, Ganhou o Grammy? ${disco.grammy}`)
    console.log(stringRelatorio)
}
console.log(`\n\nRELATÓRIO GERADO PELA FUNÇÃO: `)
relatorio(disco1)
relatorio(disco2)
relatorio(disco3)
relatorio(disco4)

//Função que recebe array de objetos e uma string e retorna um objeto que possui os itens que tenham nome/título igual à string passada.
console.log(`\n\nRESULTADO DA FUNÇÃO QUE RECBE OBJETOS E STRING:`)
const pesquisa = (arrayObj, string) => {
    for(let i in arrayObj){
        if(arrayObj[i].nome.includes(string)){
            return arrayObj[i]
        }
}alert('Nenhum item foi encontrado!')
}

console.log(pesquisa(discos, 'Reasonable Doubt' ))
// -------------------------------------------------------------------------------------------------------------------------------------------------

// SEMANA 4:
//Maior parte foi no HTML.
//Adicionando imagens aos itens criados no HTML.
discos[0].cover = './media/illmatic.jpeg'
discos[1].cover = './media/reasonabledoubt.jpeg'
discos[2].cover = './media/theeminemshow.jpeg'
discos[3].cover = './media/thecollegedropout.jpeg'
// console.log(discos)

//SEMANA 5:
//Tudo no CSS.

//SEMANA 6:
//Alterando o código para que a tela de lista de itens crie os elementos através da manipulação do DOM. E utilizando a função de busca criada para
//fazer com que ao digitar um campo no input e apertar o botão, apenas os itens com nome igual ao da busca sejam renderizados na tela.

function pesquisar(arrayObj, string){
    const pesquisa = document.getElementById('pesquisa');
    string = pesquisa.value

    const cardDiscos = document.getElementById('cardDiscos');

    for(elemento of arrayObj){
        if(elemento.nome === string){
            return cardDiscos.innerHTML = elemento.html.innerHTML
        }
    }return alert("O disco não foi encontrado!")
}