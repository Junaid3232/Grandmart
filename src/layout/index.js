import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const COLORS = {PRIMARY: '#59b828', SECONDARY: '#F9F9F9'};
const FONTS = {
  LIGHT: 'Rubik-Light',
  REGULAR: 'Rubik-Regular',
  MEDIUM: 'Rubik-Medium',
  SEMI_BOLD: 'Rubik-SemiBold',
};
const TRENDING_CATEGORIES = [
  {
    id: 1,
    title: 'Vegetables, Fruits and Meat',
    image: require('../assets/images/products/fruits-and-vegetables.png'),
  },
  {
    id: 2,
    title: 'Bakery, Spreads and Breakfast',
    image: require('../assets/images/products/bakery.png'),
  },

  {
    id: 3,
    title: 'Cosmetics',
    image: require('../assets/images/products/cosmetic.png'),
  },
  {
    id: 4,
    title: 'Dairy Products',
    image: require('../assets/images/products/dairy-products.png'),
  },
  {
    id: 5,
    title: 'Personal Hygiene',
    image: require('../assets/images/products/personal-hygiene-1.png'),
  },
  {
    id: 6,
    title: 'Baby Care',
    image: require('../assets/images/products/baby-care.png'),
  },
];

const SHOPS_DATA = [
  {
    title: 'Grandmart - Al Maqam',
    image: require('../assets/images/GM-Logo-Horizontal.png'),
  },
  {
    title: 'Wheatfields - Al Maqam',
    image: require('../assets/images/weatfields-logo.png'),
  },
];
const VEGETABLES = [
  {
    title: 'Iceberg Lettuce Per Piece',
    price: 1,
    discount: 0.8,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/lettuce-iceberg.png'),
  },
  {
    title: 'Tomatoes 1 kg',
    price: 1,
    discount: 0.3,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/Tomato.png'),
  },
  {
    title: 'Coriander 1 bunch',
    price: 1,

    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/coriander.png'),
  },
  {
    title: 'Bitter Gourd 500g',
    price: 1,
    discount: 0.6,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/bitter-gourd.png'),
  },
  {
    title: 'Broccoli 500g',
    price: 1,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/Broccoli.png'),
  },
  {
    title: 'Capsicum Green 250g',
    price: 1,
    discount: 0.5,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/vegetables/green-capsicum.png'),
  },
];
const FRUITS = [
  {
    title: 'Apple 1kg',
    price: 1,
    discount: 0.5,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/fruits/apple.png'),
  },
  {
    title: 'Grapefruit 1 pc',
    price: 1,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/fruits/grapefruit.png'),
  },
  {
    title: 'Papaya Per Piece',
    price: 1,
    description:
      'Carefully handpicked and packaged on a daily basis from fresh farms regularly to meet your everyday fresh grocery needs!',
    image: require('../assets/images/products/fruits/papaya.png'),
  },
];
const MEAT = [
  {
    title: 'Chicken Wings 1 kg',
    price: 2,
    discount: 0.5,
    description:
      'Chicken wings, or simply wings, deep-fried, unbreaded chicken wings or drums coated with vinegar-and-cayenne-pepper hot sauce mixed with butter. They are common served with celery and a blue cheese dipping sauce, which acts as a cooling agent for the mouth!',

    image: require('../assets/images/products/meat/frozen-chicken-wings.png'),
  },
  {
    title: 'Chicken Boneless Cubes 500g',
    price: 3,

    description:
      'Order the best quality of fresh, clean standard cut chicken from Pandamart delivered to your doorstep on time!',

    image: require('../assets/images/products/meat/diced-chicken.png'),
  },
  {
    title: 'Mutton leg 900g',
    price: 2,
    discount: 0.5,
    description:
      'Order the best quality of fresh, clean standard cut chicken from Pandamart delivered to your doorstep on time!',

    image: require('../assets/images/products/meat/mutton-leg.png'),
  },
  {
    title: 'Lamb leg 900g',
    price: 2,
    discount: 0.5,
    description:
      'Order the best quality of fresh, clean standard cut chicken from Pandamart delivered to your doorstep on time!',

    image: require('../assets/images/products/meat/lamb-leg.png'),
  },
];
const COSMETICS = [
  {
    title:
      'Maybelline New York Fit Me Matte Poreless Liquid Foundation SPF 22 Ivory 30 ml',
    price: 2,
    discount: 0.5,
    description:
      'All Maybelline New York products are made in China, France and USA. These products are 100% genuine. For a poreless looking finish!',
    image: require('../assets/images/products/cosmetics/Fitme228.png'),
  },
  {
    title:
      'Maybelline New York Fit Me Matte Poreless Pressed Powder Light Beige',
    price: 2,
    discount: 0.5,
    description:
      'All Maybelline New York products are made in China, France and USA. These products are 100% genuine. For a poreless looking finish!',

    image: require('../assets/images/products/cosmetics/fitme-pressed-powder.jpg'),
  },
  {
    title:
      "L'Oreal Paris Infallible 24H Matte Cover Foundation 125 Natural Rose",
    price: 2,
    discount: 0.5,
    description:
      'Feel Infallible Everyday!\n Infallible 24H Matte Cover Foundation is long-lasting liquid foundation and a true oily-skin saviour!',

    image: require('../assets/images/products/cosmetics/loreal-infalliblepng.png'),
  },
  {
    title: 'Maybelline New York Fit Me Concealer #40 Caramel',
    price: 2,
    discount: 0.5,
    description:
      'All Maybelline New York products are made in China, France and USA. These products are 100% genuine. For a poreless looking finish!',

    image: require('../assets/images/products/cosmetics/loreal-infalliblepng.png'),
  },
];
const BAKERY = [
  {
    title: 'CROISSANT THYME MINI 35G',
    price: 1.0,
    Qty: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penas et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.!',
    image: require('../assets/images/products/bakery/1.jpg'),
  },
  {
    title: 'PAIN AU FROMAGE MINI 35G',
    price: 1.0,
    Qty: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penas et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.!',
    image: require('../assets/images/products/bakery/2.jpg'),
  },
  {
    title: 'PAIN AU CHOCOLATE MINI 35G',
    price: 1.0,
    Qty: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penas et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.!',
    image: require('../assets/images/products/bakery/3.jpg'),
  },
];
const PERSONAL_HYGIENE = [
  {
    id: 21,
    title: 'Always Pads Ultra Large S5 7 Pcs',
    price: 1.0,
    Qty: 1,
    description:
      'No.1 trusted brand by women around the world to meet menstrual needs. Use Always to stay stressfree, confident and comfortable while maintaining hygiene for up to 6 hours!',
    image: require('../assets/images/products/personal-hygiene/always-pads-ultra-large.png'),
  },
  {
    id: 22,
    title:
      'Butterfly Sanitary Pads Breathables Maxi Net Mesh Long Value Pack 18 Pcs',
    price: 1.0,
    Qty: 1,
    description:
      'If you like your pads with traditional soft dry mesh, but also like the added benefit of breathable material that keeps your skin rash and itch free, then these pads are perfect for you!',
    image: require('../assets/images/products/personal-hygiene/butterfly-sanitary.jpg'),
  },
  {
    id: 23,
    title: 'Kotex Fresh Liners Unscented Longer & Wider 32 Pcs',
    price: 1.0,
    Qty: 1,
    description: 'Cotton soft and breathable!',
    image: require('../assets/images/products/personal-hygiene/kotex-freshliners.png'),
  },
  {
    id: 24,
    title: 'Carefree Liners Super Dry Long Unscented 20 Pcs',
    price: 1.0,
    Qty: 1,
    description: 'Cotton soft and breathable!',
    image: require('../assets/images/products/personal-hygiene/carefree-liners.png'),
  },
  {
    id: 25,
    title: 'Always Pads Ultra Large S5 7 Pcs',
    price: 1.0,
    Qty: 1,
    description:
      'No.1 trusted brand by women around the world to meet menstrual needs. Use Always to stay stressfree, confident and comfortable while maintaining hygiene for up to 6 hours!',
    image: require('../assets/images/products/personal-hygiene/always-pads-ultra-large.png'),
  },
];
const BABY_CARE = [
  {
    id: 26,
    title: 'Nestle Cerelac Baby Food 3 Fruits & Wheat 175g',
    price: 1.0,
    Qty: 1,
    description:
      "At 6 months old, your baby is ready to try his/her first solid foods. Packed with all the necessary nutrition NESTLE CERELAC supports your baby' growing needs. \n Great for taste and big on nutrition; NESTLE CERELAC 3 Fruits is nutritionally adapted complementary food that contains goodness of grains and fruits and helps to introduce new flavours!",
    image: require('../assets/images/products/baby-care/nestle-cerelac.png'),
  },
  {
    id: 27,
    title: 'Nestle Nido Fortigrow Powder Pouch 900g',
    price: 5.0,
    Qty: 1,
    description:
      'NESTLE NIDO FORTIGROW is especially formulated for school going kids to provide the best nutrition. It is enriched with nutrients which support your childs learning, immunity and growth to make them mind and body ready for school. Give your child the BEST nutrition with NESTLE NIDO Fortigrow- Because when it comes to your child, there are no second chances!',
    image: require('../assets/images/products/baby-care/nestle-nido-fortigrow.png'),
  },
];
const SLIDE_IMAGES = [
    {
      id: 1,
      image: require('../assets/images/slide1.jpg'),
    },
    {
      id: 2,
      image: require('../assets/images/slide2.jpg'),
    },
    {
      id: 3,
      image: require('../assets/images/slide3.jpg'),
    },
  ];
export const LAYOUT = {
  WIDTH,
  HEIGHT,
  COLORS,
  FONTS,
  TRENDING_CATEGORIES,
  SHOPS_DATA,
  VEGETABLES,
  FRUITS,
  MEAT,
  COSMETICS,
  BAKERY,
  PERSONAL_HYGIENE,
  BABY_CARE,
  BAKERY,
  SLIDE_IMAGES
};
