// SEMANA 1:
// const disco1 = 'Illmatic';
// const artista1 = 'Nas';
// const duracao1 = 39.51;
// const ano1 = 1994;
// const tracklist1 = ['The Genesis', 'N.Y. State of Mind', 'Lifes a Bitch', 'The World is Yours', 'Halftime', 'Memory Lane', 'One Love', 'One Time 4 Your Mind, Represent, It Aint Hard to Tell'];
// const grammy1 = false;

// const disco2 = 'Reasonable Doubt';
// const artista2 = 'Jay-Z';
// const duracao2 = 55.32;
// const ano2 = 1996;
// const tracklist2 = ['Cant Knock the Hustle', 'Politics as Usual', 'Brooklyns Finest', 'Dead Presidents II', 'Feelin It', 'DEvils', '22 Twos', 'Can I Live', 'Aint No Nigga', 'Friend or Foe', 'Coming of Age', 'Cashmere Thoughts', 'Bring It On', 'Regrets'];
// const grammy2 = false;

// const disco3 = 'The Eminem Show';
// const artista3 = 'Eminem';
// const duracao3 = 77.19;
// const ano3 = 2002;
// const tracklist3 = ['Curtains Up', 'White America', 'Business', 'Cleanin Out My Closet', 'Square Dance', 'The Kiss', 'Soldier', 'Say Goodbye Hollywood', 'Drips', 'Without Me', 'Paul Rosenberg', 'Sing for the Moment', 'Superman', 'Hailies Song', 'Steve Berman', 'When the Music Stops', 'Say What You Say', 'Till I Collapse', 'My Dads Gone Crazy', 'Curtains Close'];
// const grammy3 = true;

// const mediaDuracao = (duracao1 + duracao2 + duracao3) / 3;
// console.log(mediaDuracao);

// const ganhouGrammy = (grammy1 && grammy2 && grammy3);
// console.log(ganhouGrammy);

// console.log(`${disco1.toUpperCase()}\nArtista do Álbum: ${artista1}\nDuração do Álbum: ${duracao1}\nAno de Lançamento: ${ano1}\nTracklist: ${tracklist1}\nGanhou o Grammy?: ${grammy1}`);
// console.log(`${disco1.toUpperCase()}\nArtista do Álbum: ${artista2}\nDuração do Álbum: ${duracao2}\nAno de Lançamento: ${ano2}\nTracklist: ${tracklist2}\nGanhou o Grammy?: ${grammy2}`);
// console.log(`${disco1.toUpperCase()}\nArtista do Álbum: ${artista3}\nDuração do Álbum: ${duracao3}\nAno de Lançamento: ${ano3}\nTracklist: ${tracklist3}\nGanhou o Grammy?: ${grammy3}`);

// SEMANA 2:
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

const discosGrammy = [];
// discosGrammy.push(disco1, disco2, disco3);
// console.log(discosGrammy)

const ganhouGrammy = (disco) => {
    if(disco.grammy){
        discosGrammy.push(disco);
    }else{
        alert(`O item não foi adicionado! ${disco.nome} não ganhou o Grammy!`)
    }
}
// ganhouGrammy(disco1)
// ganhouGrammy(disco2)
// ganhouGrammy(disco3)


//SEMANA 3:
// const illmaticTracklist = disco1.tracklist.join(', ');
// const reasonableDoubtTracklist = disco2.tracklist.join(', ');
// const theEminemShowTracklist = disco3.tracklist.join(', ');

// console.log(`${disco1.nome.toUpperCase()}\nArtista do Álbum: ${disco1.artista}\nDuração do Álbum: ${disco1.duracao}\nAno de Lançamento: ${disco1.ano}\nTracklist: ${disco1.tracklist.join(', ')}\nGanhou o Grammy?: ${disco1.grammy}`);
// console.log(`${disco2.nome.toUpperCase()}\nArtista do Álbum: ${disco2.artista}\nDuração do Álbum: ${disco2.duracao}\nAno de Lançamento: ${disco2.ano}\nTracklist: ${disco2.tracklist.join(', ')}\nGanhou o Grammy?: ${disco2.grammy}`);
// console.log(`${disco3.nome.toUpperCase()}\nArtista do Álbum: ${disco3.artista}\nDuração do Álbum: ${disco3.duracao}\nAno de Lançamento: ${disco3.ano}\nTracklist: ${disco3.tracklist.join(', ')}\nGanhou o Grammy?: ${disco3.grammy}`);

const disco4 = {
    nome: 'The College Dropout',
    artista: 'Kanye West',
    duracao: 72.17,
    ano: 2004,
    tracklist: ['Intro', 'We Dont Care', 'Graduation Day', 'All Falls Down', 'Ill Fly Away', 'Spaceship', 'Jesus Walks', 'Never Let Me Down', 'Get Em High', 'Workout Plan', 'The New Workout Plan', 'Slow Jamz', 'Breathe In Breathe Out', 'School Spirit Skit 1', 'School Spirit', 'School Spirit Skit 2', 'Lil Jimmy Skit', 'Two Words', 'Through the Wire', 'Family Business', 'Last Call'],
    grammy: true
}

//ganhouGrammy(disco4)


for(disco of discosGrammy){
    for(info in disco){
        console.log(`${info}: ${disco[info]}`)
    }
}

const discos = [disco1, disco2, disco3, disco4]
console.log(discos)

for(disco of discos){
    for(info in disco){
        console.log(`${info}: ${disco[info]}`)
    }
}

const relatorio = (disco) => {
    const stringRelatorio = (`Disco: ${disco.nome}, Artista: ${disco.artista}, Duração: ${disco.duracao}, Tracklist: ${disco.tracklist}, Ganhou o Grammy? ${disco.grammy}`)
    console.log(stringRelatorio)
}

// relatorio(disco1)


const pesquisa = (arrayObj, string) => {
    for(let i in arrayObj){
        if(arrayObj[i].nome.includes(string)){
            return arrayObj[i]
        }
}alert('Nenhum item foi encontrado!')
}



// SEMANA 4:
discos[0].cover = './media/illmatic.jpeg'
discos[1].cover = './media/reasonabledoubt.jpeg'
discos[2].cover = './media/theeminemshow.jpeg'
discos[3].cover = './media/thecollegedropout.jpeg'
// console.log(discos)

