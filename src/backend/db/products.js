import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "Van Heusen",
    orignalPrice: 899,
    subtitle: "Van Heusen",
    description: "Men's Solid Regular Fit Polo",
    discountPrice: 379,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/81kBDMG9OjL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Allen Solly",
    orignalPrice: 899,
    subtitle: "Allen Solly",
    description: "Men's Polo",

    discountPrice: 524,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/31f6DVaOq+L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jones",
    orignalPrice: 1099,
    subtitle: "Jack & Jones",
    description: "Men's Slim T-Shirt",

    discountPrice: 226,
    rating: 2,
    productImg:
      "https://m.media-amazon.com/images/I/81p6OdV8I1L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Van Heusen",
    orignalPrice: 1199,
    subtitle: "Van Heusen",
    description: "Men's Regular Polo Shirt",

    discountPrice: 324,
    rating: 1,
    productImg:
      "https://m.media-amazon.com/images/I/81ogyJ7d+SS._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "U.S. POLO ASSN.",
    orignalPrice: 1899,
    subtitle: "U.S. POLO ASSN.",
    description: "Men's Regular Fit T-Shirt",

    discountPrice: 954,
    rating: 2,
    productImg:
      "https://m.media-amazon.com/images/I/81BPjok0MUL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jones",
    orignalPrice: 1000,
    subtitle: "Jack & Jones",
    description: "Men's Slim T-Shirt",

    discountPrice: 699,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/7190ARiBrWL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Allen Solly",
    orignalPrice: 1010,
    subtitle: "Allen Solly",
    description: "Men's Regular Fit Polo",

    discountPrice: 608,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/51DKWYMKZSL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "U.S. POLO ASSN.",
    orignalPrice: 999,
    subtitle: "U.S. POLO ASSN.",
    description: "Men's Regular fit T-Shirt",

    discountPrice: 559,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/71ovlWYPX5L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "U.S. POLO ASSN.",
    orignalPrice: 999,
    subtitle: "U.S. POLO ASSN.",
    description: "Men's Solid Regular Fit T-Shirt",

    discountPrice: 559,
    rating: 3,
    productImg:
      "	https://m.media-amazon.com/images/I/71FqsWGfvlL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    orignalPrice: 799,
    subtitle: "Peter England",
    description: "Men's Slim Polo Shirt",

    discountPrice: 359,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/81xjoTlW3HL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "blackberrys",
    orignalPrice: 1200,
    subtitle: "blackberrys",
    description: "Men's Solid Slim T-Shirt",

    discountPrice: 350,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/71uwj3-u1wS._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    orignalPrice: 899,
    subtitle: "Peter England",
    description: "Men's Slim Polo Shirt",

    discountPrice: 576,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/710WvI9Gs8L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jones",
    orignalPrice: 999,
    subtitle: "Jack & Jones",
    description: "Men's Slim T-Shirt",

    discountPrice: 455,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/711MZy2SdZL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jones",
    orignalPrice: 800,
    subtitle: " Jack & Jones",
    description: "Men's Slim Fit T-Shirt",

    discountPrice: 202,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/71xYJWXkkiL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    orignalPrice: 999,
    subtitle: "Peter England",
    description: "Men's Slim Polo Shirt",

    discountPrice: 699,
    rating: 2,
    productImg:
      "https://m.media-amazon.com/images/I/71z+E7lAqFL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: " U.S. POLO ASSN.",
    orignalPrice: 999,
    subtitle: " U.S. POLO ASSN.",
    description: "Men's Regular fit T-Shirt",

    discountPrice: 559,
    rating: 3,
    productImg:
      "	https://m.media-amazon.com/images/I/71oDECYIp7L._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    orignalPrice: 800,
    subtitle: "Peter England",
    description: "Men's Slim Polo Shirt",

    discountPrice: 699,
    rating: 2,
    productImg:
      "https://m.media-amazon.com/images/I/81F+gG6jGaL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jack & Jone",
    orignalPrice: 999,
    subtitle: "Jack & Jone",
    description: "Men's Slim T-Shirt",

    discountPrice: 350,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/71QBLxuGZOL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Max",
    orignalPrice: 499,
    subtitle: "Max",
    description: "Men's Slim Polo",

    discountPrice: 399,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/81vHlgI1+dL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Integriti",
    orignalPrice: 799,
    subtitle: "Integriti",
    description: "Men's Slim Polo",

    discountPrice: 699,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/816qoOUmtaS._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Peter England",
    orignalPrice: 799,
    subtitle: "Peter England",
    description: "Men's Slim Polo Shirt",

    discountPrice: 359,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/81KtSfx7ZVL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "U.S. POLO ASSN.",
    orignalPrice: 999,
    subtitle: "U.S. POLO ASSN.",
    description: "Men's Solid Regular Fit Cotton Polo",

    discountPrice: 750,
    rating: 4,
    productImg:
      "https://m.media-amazon.com/images/I/61LqxBt9xbL._AC_UL480_FMwebp_QL65_.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Integriti",
    orignalPrice: 1000,
    subtitle: "Integriti",
    description: "Men's Slim Polo",

    discountPrice: 399,
    rating: 3,
    productImg:
      "https://m.media-amazon.com/images/I/81k0r2v83KS._AC_UL480_FMwebp_QL65_.jpg"
  }
];
