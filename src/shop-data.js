const SHOP_DATA = [
  {
    title: 'Cakes',
    items: [
      {
        id: 1,
        name: "Chocolate Cake",
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 4.80,
      },
      {
        id: 2,
        name: "Vanilla Cake",
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 6.60,
      },
      {
        id: 3,
        name: "Black Forest Cake",
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 12.00,
      },
      {
        id: 4,
        name: "Red Velvet Cake",
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 7.25,
      },
      {
        id: 5,
        name: "Victoria Sponge Cake",
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 9.99,
      },
      {
        id: 6,
        name: "Angel Cake",
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 8.00,
      },
      {
        id: 7,
        name: "Banana Bread",
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 4.00,
      },
      {
        id: 8,
        name: 'Battenberg Cake',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14.00,
      },
      {
        id: 9,
        name: "Birthday Cake",
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16.00,
      },
      {
        id: 10,
        name: "Biscoff Cake",
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 13.50,
      },
    ],
  },
  {
    title: "Breads",
    items: [
      {
        id: 11,
        name: "Baguette",
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 4.00,
      },
      {
        id: 12,
        name: "Bagel",
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 3.20,
      },
      {
        id: 13,
        name: "Biscuit",
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 1.10,
      },
      {
        id: 14,
        name: "Bread Roll",
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 1.60,
      },
      {
        id: 15,
        name: "Breadsticks",
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 4.60,
      },
      {
        id: 16,
        name: "Brioche",
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 2.60,
      },
    ],
  },
  {
    title: "Sweet Treats",
    items: [
      {
        id: 17,
        name: "Chocolate Chip Muffin",
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 3.30,
      },
      {
        id: 18,
        name: "Raspberry Cookies",
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 1.50,
      },
      {
        id: 19,
        name: "Cinnamon Roll",
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 1.20,
      },
      {
        id: 20,
        name: "Tart",
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 2.00,
      },
    ],
  },
  // {
  //   title: 'Womens',
  //   items: [
  //     {
  //       id: 23,
  //       name: 'Blue Tanktop',
  //       imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
  //       price: 25,
  //     },
  //     {
  //       id: 24,
  //       name: 'Floral Blouse',
  //       imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
  //       price: 20,
  //     },
  //     {
  //       id: 25,
  //       name: 'Floral Dress',
  //       imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
  //       price: 80,
  //     },
  //     {
  //       id: 26,
  //       name: 'Red Dots Dress',
  //       imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
  //       price: 80,
  //     },
  //     {
  //       id: 27,
  //       name: 'Striped Sweater',
  //       imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
  //       price: 45,
  //     },
  //     {
  //       id: 28,
  //       name: 'Yellow Track Suit',
  //       imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
  //       price: 135,
  //     },
  //     {
  //       id: 29,
  //       name: 'White Blouse',
  //       imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
  //       price: 20,
  //     },
  //   ],
  // },
  // {
  //   title: 'Mens',
  //   items: [
  //     {
  //       id: 30,
  //       name: 'Camo Down Vest',
  //       imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
  //       price: 325,
  //     },
  //     {
  //       id: 31,
  //       name: 'Floral T-shirt',
  //       imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
  //       price: 20,
  //     },
  //     {
  //       id: 32,
  //       name: 'Black & White Longsleeve',
  //       imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
  //       price: 25,
  //     },
  //     {
  //       id: 33,
  //       name: 'Pink T-shirt',
  //       imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
  //       price: 25,
  //     },
  //     {
  //       id: 34,
  //       name: 'Jean Long Sleeve',
  //       imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
  //       price: 40,
  //     },
  //     {
  //       id: 35,
  //       name: 'Burgundy T-shirt',
  //       imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
  //       price: 25,
  //     },
  //   ],
  // },
];

{/*
const cakes = [
  {
    "id": 1,
    "name": "Chocolate Cake",
    "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    "price": 25
  },
  {
    "id": 2,
    "name": "Vanilla Cake",
    "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    "price": 18
  },
  {
    "id": 3,
    "name": "Black Forest Cake",
    "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    "price": 35
  },
  {
    "id": 4,
    "name": "Red Velvet Cake",
    "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
    "price": 25
  },
  {
    "id": 5,
    "name": "Victoria Sponge Cake",
    "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
    "price": 18
  },
  {
    "id": 6,
    "name": "Banana Cake",
    "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    "price": 14
  },
  {
    "id": 7,
    "name": "Carrot Cake",
    "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
    "price": 18
  },
  {
    "id": 8,
    "name": "Lemon Cheesecake",
    "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    "price": 14
  },
  {
    "id": 9,
    "name": "Fruitcake",
    "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
    "price": 16
  }
]
*/}
export default SHOP_DATA