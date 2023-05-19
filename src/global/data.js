export const filterData = [
  { name: "Fast food", image: require("../images/burger.jpg"), id: "0" },
  { name: "Fashion", image: require("../images/clothes.jpg"), id: "1" },
  { name: "Health", image: require("../images/drugs_76x63.jpg"), id: "2" },
  {
    name: "Electronics",
    image: require("../images/electronics_76x63.jpg"),
    id: "3",
  },
  { name: "Gaming", image: require("../images/gaming_76x63.jpeg"), id: "4" },
  { name: "Shipping", image: require("../images/logo_76x63.png"), id: "5" },
];

export const vendorsData = [
  {
    VedorName: "Durmaz",
    farAway: "21.2",
    businessAddress: "İsmet İnönü Blv, Gazimağusa 99450, ",
    images: "https://durmazz.com/web/image/25236-c7f701ae/shop.jpg",
    averageReview: 4.9,
    numberOfReview: 772,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    vendorType: "Electronics, Gaming, Laptops...",
    productData: [
      { name: "Iphone x", price: 274.99, image: "../images/durmaz.jpg" },
      { name: "Iphone x", price: 274.99, image: "../images/durmaz.jpg" },
      {
        name: "Iphone x",
        price: 274.99,
        image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",
      },
    ],
    id: 0,
  },

  {
    VedorName: "Terranova",
    farAway: "21.2",
    businessAddress: "İsmet İnönü Blv, Gazimağusa 99450, ",
    images:
      "https://markovotepemall.bg/wp-content/uploads/2020/03/Terranova_photo_900_600.png",
    averageReview: 4.2,
    numberOfReview: 472,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    vendorType: "Electronics, Gaming, Laptops...",
    productData: [
      { name: "Iphone x", price: 274.99, image: "pict2" },
      { name: "Iphone x", price: 274.99, image: "pict2" },
      { name: "Iphone x", price: 274.99, image: "pict2" },
    ],
    id: 1,
  },

  {
    VedorName: "Ekor",
    farAway: "21.2",
    businessAddress: "İsmet İnönü Blv, Gazimağusa 99450, ",
    images:
      "https://media-cdn.tripadvisor.com/media/photo-s/17/22/9e/66/20190412-132713-largejpg.jpg",
    averageReview: 3.9,
    numberOfReview: 2272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    vendorType: "Electronics, Gaming, Laptops...",
    productData: [
      { name: "Iphone x", price: 274.99, image: "pict2" },
      { name: "Iphone x", price: 274.99, image: "pict2" },
      { name: "Iphone x", price: 274.99, image: "pict2" },
    ],
    id: 2,
  },
];
