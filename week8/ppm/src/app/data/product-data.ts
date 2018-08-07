export const productsList: any[] =[
  { id:randomId(),
    title:"bike",
    price: 100,
    url:'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  { id:randomId(),
    title:"bbal",
    price: 200,
    url:'https://images.pexels.com/photos/595808/pexels-photo-595808.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  { id:randomId(),
    title:"bike",
    price: 300,
    url:'https://images.pexels.com/photos/805303/pexels-photo-805303.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  { id:randomId(),
    title:"bike",
    price: 400,
    url:'https://images.pexels.com/photos/34006/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
  },
  { id:randomId(),
    title:"bike",
    price: 500,
    url:'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  { id:randomId(),
    title:"bike",
    price: 500,
    url:'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
];

function randomId(): number{
  return Math.floor(Math.random()*1000);
}
