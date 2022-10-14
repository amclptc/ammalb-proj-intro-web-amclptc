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
    tracklist: ['The Genesis', 'N.Y. State of Mind', 'Lifes a Bitch', 'The World is Yours', 'Halftime', 'Memory Lane', 'One Love', 'One Time 4 Your Mind, Represent, It Aint Hard to Tell'],
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
// console.log(discosGrammy);


if(disco1.grammy){
    discosGrammy.push(disco1);
}else{
    alert('O item não foi adicionado! Illmatic não ganhou o Grammy!')
}

if(disco2.grammy){
    discosGrammy.push(disco2);
}else{
    alert('O item não foi adicionado! Reasonable Doubt não ganhou o Grammy!')
}

if(disco3.grammy){
    discosGrammy.push(disco3);
}else{
    alert('O item não foi adicionado! The Eminem Show não ganhou o Grammy!')
}
console.log(discosGrammy);