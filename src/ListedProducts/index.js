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
  { Id: 1, name: "Vans Old Skool",  description:
  "EUR 38, PK/UK 5, US 6.5\nBrand Salomon\nCondition Excellent\nType: Running, Casual\nOriginal Branded\nNo damage no stain and not a fake or copy\n100% Original Genuine imported from UK USA\nHigh Quality Original Brand Good Looking",
  condition: "10/10", 
  price: "4500", image: vans ,
   inInventory : true},
  { Id: 2, name: "Jordons 4 Retro Black",  description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "1300", image: jordons ,inInventory : true},
  { Id: 3, name: "Converse Lowtops Men",  description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "1250", image: product1 ,inInventory : true},
  { Id: 4, name: "Nike Air Force 1 LE",  description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "1450", image: product2,inInventory : true},
  { Id: 5, name: "Lanvin Luxury", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "5000", image: product3, inInventory : true},
  { Id: 6, name: "Yeezy", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "3500", image: product4, inInventory : true},
  { Id: 7, name: "Yeezy", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "3500", image: product4, inInventory : true},
  { Id: 8, name: "Yeezy", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "3500", image: product4, inInventory : true},
  { Id: 9, name: "Yeezy", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "3500", image: product4, inInventory : true},
  { Id: 10, name: "Yeezy", description:
  "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.", condition: "10/10", price: "3500", image: product4, inInventory : true},

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