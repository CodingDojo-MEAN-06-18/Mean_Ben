import { Player } from '../player';

export const PlayerList: any =[
  {
    id: Math.floor(Math.random()*1000),
    name : "John",
    position: 'forward',
    game: {
      //0=green, 1=red, 2=yellw
      1:{default:[0]},
      2:{default:[1]},
      3:{default:[2]}
    }
  },
  {
    id: Math.floor(Math.random()*1000),
    name : "Wonda",
    position: 'Beach',
    game: {
      1:{default:[1]},
      2:{default:[2]},
      3:{default:[2]}
    }
  },
  {
    id: Math.floor(Math.random()*1000),
    name : "Jess",
    position: null,
    game: {
      1:{default:[2]},
      2:{default:[2]},
      3:{default:[2]}
    }
  },
  {
    id: Math.floor(Math.random()*1000),
    name : "Lisa",
    position: 'forward',
    game: {
      1:{default:[2]},
      2:{default:[2]},
      3:{default:[2]}
    }
  },
  {
    id: Math.floor(Math.random()*1000),
    name : "Dave",
    position: 'Tan',
    game: {
      1:{default:[2]},
      2:{default:[2]},
      3:{default:[2]}
    }
  },
]
