import vans from "../assets/vans1.webp"
import jordons from "../assets/jordons.avif"
import product1 from "../assets/product (1).jpg";
import product2 from  "../assets/product (2).jpg"
import product3 from  "../assets/product (3).jpg"
import product4 from  "../assets/product (4).jpg"
import product5 from  "../assets/product (5).jpg"
import product6 from  "../assets/product (6).jpg"
import product7 from  "../assets/product (7).jpg"
import product8 from  "../assets/product (8).jpg"
import product9 from  "../assets/product (9).jpg"
import product10 from  "../assets/product (10).jpg"


const inventoryProducts = [
  {
    Id: 1,
    name: "Vans Old Skool",
    description: "The Vans Old Skool is a classic low-top sneaker featuring a retro design with a durable canvas upper and suede accents. Its iconic side stripe and padded collar offer both style and comfort. Perfect for everyday wear, these sneakers combine a timeless look with modern durability, making them an essential addition to any casual wardrobe.",
    condition: "9/10",
    price: "4500",
    size: '12',
    image: vans,
    inInventory: true
  },
  {
    Id: 2,
    name: "Jordans 4 Retro Black",
    description: "The Jordan 4 Retro Black is a premium basketball sneaker that features a sleek black leather upper with mesh panels for breathability. This model is renowned for its distinctive design elements such as the lace locks, flight logo, and visible Air-Sole cushioning for enhanced comfort. A versatile sneaker that combines high performance with a stylish look, making it a staple for both sports and casual wear.",
    condition: "8/10",
    price: "1300",
    size: '7',
    image: jordons, 
    inInventory: true
  },
  {
    Id: 3,
    name: "Converse Lowtops Men",
    description: "Converse Lowtops for men offer a timeless, low-profile design with a sturdy canvas upper and a classic rubber toe cap. These sneakers are known for their versatility and comfort, making them ideal for a variety of casual activities. The durable construction and simple yet stylish appearance ensure that they remain a popular choice among sneaker enthusiasts.",
    condition: "9/10",
    price: "1250",
    size: '9',
    image: product1, 
    inInventory: true
  },
  {
    Id: 4,
    name: "Nike Air Force 1 LE",
    description: "The Nike Air Force 1 LE is a legendary sneaker that has become a staple in the world of fashion and basketball. Featuring a high-quality leather upper, cushioned sole, and the iconic Air-Sole unit for superior comfort, this sneaker blends classic design with modern technology. Its versatile style makes it suitable for both casual wear and athletic activities.",
    condition: "9/10",
    price: "1450",
    size: '7',
    image: product2, 
    inInventory: true
  },
  {
    Id: 5,
    name: "Lanvin Luxury",
    description: "Lanvin Luxury sneakers are a high-end footwear option that combines elegance with comfort. These sneakers feature premium materials, including soft leather and a sleek design, ensuring a sophisticated appearance while maintaining high levels of comfort. Ideal for those who appreciate luxury and want a distinctive look, these sneakers are perfect for both formal and casual settings.",
    condition: "8/10",
    price: "5000",
    size: '9',
    image: product3, 
    inInventory: true
  },
  {
    Id: 6,
    name: "Yeezy Boost 350 V2",
    description: "The Yeezy Boost 350 V2 is a highly sought-after sneaker known for its innovative design and unparalleled comfort. Featuring a Primeknit upper with a distinctive stripe and Boost cushioning for a responsive feel, this sneaker is both fashionable and functional. Its sleek silhouette and modern aesthetics make it a favorite among sneaker enthusiasts and fashion-forward individuals alike.",
    condition: "9/10",
    price: "3500",
    size: '10.5',
    image: product4, 
    inInventory: true
  },
  {
    Id: 7,
    name: "Nike ZoomX Vaporfly",
    description: "The Nike ZoomX Vaporfly is engineered for speed and performance, featuring cutting-edge technology such as ZoomX foam and a carbon-fiber plate for maximum propulsion. This racing shoe is designed to provide elite runners with a competitive edge, offering a lightweight and responsive ride that enhances speed and efficiency during races and training.",
    condition: "9/10",
    price: "3500",
    size: '11',
    image: product5, 
    inInventory: true
  },
  {
    Id: 8,
    name: "Nike Free RN 5.0",
    description: "Nike Free RN 5.0 sneakers offer a flexible and natural running experience with their minimalistic design and Free sole technology. The lightweight construction and breathable mesh upper provide a comfortable fit, allowing for a more natural range of motion during runs. These sneakers are perfect for runners who value flexibility and a close-to-barefoot feel.",
    condition: "8/10",
    price: "3500",
    size: '6',
    image: product6,
    inInventory: true
  },
  {
    Id: 9,
    name: "Nike SB Dunk Low",
    description: "The Nike SB Dunk Low combines skate culture with streetwear style, featuring a durable leather upper and a padded collar for comfort. This iconic sneaker offers a classic look with modern updates, including enhanced cushioning and grip for optimal performance on and off the board. Its versatile design makes it suitable for a wide range of activities.",
    condition: "9/10",
    price: "3500",
    size: '10',
    image: product7,
    inInventory: true
  },
  {
    Id: 10,
    name: "Nike React Infinity Run Flyknit",
    description: "The Nike React Infinity Run Flyknit is designed to provide a smooth and stable running experience with its React foam cushioning and Flyknit upper. This innovative shoe offers exceptional support and a plush feel, making it ideal for long-distance runs. Its modern design and advanced technology ensure a comfortable ride and reduced risk of injury.",
    condition: "9/10",
    size: '9.5',
    price: "3500",
    image: product8,
    inInventory: true
  }
];


export  {
  inventoryProducts,
  vans,
 jordons,
 product1,
 product2,
product3,
product4,
product5,
product6,
product7,
product8,
product9,
product10

};