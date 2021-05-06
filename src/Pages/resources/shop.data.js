const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Fashion Summer Outdoor Sun Protection Fishing Cap',
        imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        price: 25
      },
      {
        id: 2,
        name: 'ADBUCKS Snow Proof Inside Fur Unisex',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41F36v4MfQL._AC_.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'ADBUCKS Snow Proof Inside Fur Wool Unisex',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51Tt1DCMBgL._AC_.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'GUSTAVE Fishing Hat Summer Sun Bonnie Hat',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ECe8c6fuL._AC_UL1024_.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Futurekart Womens Stylish Straw Fold Sun Beach Hat',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61SNVXM3x7L._AC_UL1100_.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'GHANIM Bucket Cap, Fisher Cap, Round Cap ',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61cok7dLp0L._AC_UL1008_.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'GUSTAVE® Summer Outdoor Sun Protection Cap ',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61BjJOnt7yL._AC_UL1001_.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'TravelJoy Unisex Vintage Cap ',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71N5kF5PnCL._AC_UL1500_.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Heelium Bamboo Bandana for Men & Women',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81QkqD53QaL._AC_UL1500_.jpg',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 10,
        name: 'VERSATYL Mens Feather Light Weight Jacket',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81xsZCOSyUL._AC_UL1500_.jpg',
        price: 125
      },
      {
        id: 11,
        name: 'AWG ALL WEATHER GEAR Mens Spectra Cotton Casual Sports Jacket - Black',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61oUINLNyyL._AC_UL1000_.jpg',
        price: 90
      },
      {
        id: 12,
        name: 'Scott International Mens Solid Wind Cheater Jacket',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/510GbRxnfgL._AC_UL1100_.jpg',
        price: 90
      },
      {
        id: 13,
        name: 'ARBIA FUNKI Mens Solid Denim Jacket',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61NRbKtk8qL._AC_UL1261_.jpg',
        price: 165
      },
      {
        id: 14,
        name: 'Veirdo Mens Solid Regular Jacket',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61XDVgM2mSL._AC_UL1500_.jpg',
        price: 185
      }
    ]
  },
  {
    id: 3,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 15,
        name: 'Sparx Mens Sd0323g Sneakers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51mSbA%2BGCyL._AC_UL1110_.jpg',
        price: 220
      },
      {
        id: 16,
        name: 'Sparx Men SM-162 Casual Shoes',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61djn1CRqCL._AC_UL1110_.jpg',
        price: 280
      },
      {
        id: 17,
        name: 'Clarks Men Kiowa Sport Leather Sneakers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71mVamgpBhL._AC_UL1500_.jpg',
        price: 110
      },
      {
        id: 18,
        name: 'ESSENCE Mens Sneaker',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51KmQkox91L._AC_.jpg',
        price: 160
      },
      {
        id: 19,
        name: 'Converse Unisex Canvas Sneakers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81BXvsaMgyL._AC_UL1500_.jpg',
        price: 160
      },
      {
        id: 20,
        name: 'Symbol Mens Canvas Sneakers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81cTcvI7YgL._AC_UL1500_.jpg',
        price: 160
      },
      {
        id: 21,
        name: 'Sparx Mens Sneakers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61MENg5%2BuDL._AC_UL1110_.jpg',
        price: 190
      },
      {
        id: 22,
        name: 'Sparx Mens Mesh Loafers',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81T8cy42ueL._AC_UL1500_.jpg',
        price: 200
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Parii Fashion Jaipur Cotton Flared/A-line Stitched Casual Long Maxi Dress for Women',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81ptHt2an4L._AC_UL1500_.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Bollyclues Womens Floral Maxi Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61TK9v5nBtL._AC_UL1440_.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Harpa Womens A-Line Knee-Long Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81jmILcHcUL._AC_UL1500_.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'ILLI LONDON Womens A-Line Maxi Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71CyO0A3zkL._AC_UL1500_.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'ILLI LONDON Womens Skater Knee Length Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/619rnEyFzzL._AC_UL1500_.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Haute Curry by Shoppers Stop Womens Regular Fit Printed Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51hgSFO3FCL._AC_UL1000_.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Lady Stark Womens Maxi Dress',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/611-TP6MdYL._AC_UL1500_.jpg',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Full Sleeve Slim Fit Plain Formal Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41pAubyn5NL._AC_.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Super weston Cotton Polka Print Dotted Shirts',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81q1-5edHwL._AC_UL1500_.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'IndoPrimo Mens Regular Fit Casual Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51PE8Aj%2BaAL._AC_UL1006_.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'Realone Mens Formal Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61kgtdMZbTL._AC_UL1500_.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'EYEBOGLER Mens Solid Regular Fit T-Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51mjLMt9XOL._AC_UL1300_.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'KIDSOR Mens Army Print Regular Fit Casual Cotton Shirt',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/710ZiyKsN9L._AC_UL1500_.jpg',
        price: 25
      }
    ]
  }];

export default SHOP_DATA;
