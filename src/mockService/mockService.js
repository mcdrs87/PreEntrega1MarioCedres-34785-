/* -------------- BACK-END -------------- */
const itemsDB = [
  {
    id: 1,
    title: "Remera Oversize Negra Estampa",
    description: "Remera oversize negra estampado urbano.",
    price: 2249,
    stock: 54,
    category: "remeras",
    thumbnail:
      "https://s.alicdn.com/@sc04/kf/H3791c78f05684066bb02ad5c5ec61eddi.png_300x300.png",
  },
  {
    id: 2,
    title: "Remera Oversize Negra Lisa",
    description: "Remera oversize negra lisa sin estampa.",
    price: 1999,
    stock: 34,
    category: "remeras",
    thumbnail:
      "https://s.alicdn.com/@sc04/kf/Hc2870264f886411aacab0382aaeec01co.jpg_300x300.jpg",
  },
  {
    id: 4,
    title: "Remera Oversize Blanca Estampada",
    description: "Remera oversize blanca estampado urbano.",
    price: 2249,
    stock: 123,
    category: "remeras",
    thumbnail:
      "https://s.alicdn.com/@sc04/kf/H31e59e9dec5b4914be28f9ca9a43ef5cM.png_300x300.png",
  },
  {
    id: 5,
    title: "Remera Oversize Negra Lisa",
    description: " Remera oversize blanca lisa sin estampa. ",
    price: 1999,
    stock: 32,
    category: "remeras",
    thumbnail:
      "https://s.alicdn.com/@sc04/kf/H92b938564f2a45a59bace8b68acd4fbeV.jpg_300x300.jpg",
  },
  {
    id: 6,
    title: "Abanico Estampado Negro Y Verde",
    description: "Abanico negro con motivos verdes de  madera y tela.",
    price: 1499,
    stock: 83,
    category: "accesorios",
    thumbnail:
      "https://norteabanicos.com/wp-content/uploads/2022/10/trama-enrejado-oct-22_green-curves-570x670.jpg",
  },
  {
    id: 7,
    title: "Abanico Estampado Blanco Y Negro",
    description: "Abanico estampado blanco de madera y tela.",
    price: 1499,
    stock: 50,
    category: "accesorios",
    thumbnail:
      "https://norteabanicos.com/wp-content/uploads/2022/07/DAG03383-min-570x670.jpg",
  },
  {
    id: 8,
    title: "Abanico Estampado De Colores ",
    description: "Abanico estampado de colores de madera y tela.",
    price: 1499,
    stock: 68,
    category: "accesorios",
    thumbnail:
      "https://norteabanicos.com/wp-content/uploads/2022/10/fluido-oct-22_orange-fluid-570x670.jpg",
  },
  {
    id: 9,
    title: "Riñonera De Cuero Negra",
    description: " Riñonera de cuero negra con cierre y broches.",
    price: 1200,
    stock: 96,
    category: "accesorios",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRVSCAfCUN-JooBtKvWaVOVMCJbWjbDeQl_5gY-dUPLRKzNX5ZF6yCzapsYhGhjeBZMRPnP6D-W&usqp=CAc",
  },
  {
    id: 10,
    title: "Riñonera De Tela Deportiva",
    description: "Riñonera de tela negra con cierre y broches.",
    price: 1099,
    stock: 89,
    category: "accesorios",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSiL6gMUNHscir1QunhBvlF1WglnWOewNYWd3a4UoddpGNJltlTRp1jqNwbv7hWzQfojWBKwW6e&usqp=CAc",
  },
  {
    id: 11,
    title: "Gorro De Visera Negro Liso",
    description: "Gorro de visera negro liso con broche de ajustar.",
    price: 699,
    stock: 65,
    category: "gorros",
    thumbnail:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfeR4mBvPvWDk90LSOajSb3JXDKy-E9uCbp5Vxbt42Gmju8nDfqbc2CkejmLDT-y6Ye3WPAeXuIg&usqp=CAc",
  },
  {
    id: 12,
    title: "Gorro De Visera Blanco Liso",
    description: "Gorro de visera blanco liso con broche de ajustar.",
    price: 699,
    stock: 52,
    category: "gorros",
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAJ-wDWN9MY0Yrtel_gq8qTcesI-rD9E3K3Yw5rGKFLON3isLDJz6SDoPPrfxxdRbAFg3oH7UXSvo&usqp=CAc",
  },
  {
    id: 13,
    title: "Gorro Tipo Pescador Negro",
    description: " Gorro tipo pescador piluso tela negro. ",
    price: 499,
    stock: 61,
    category: "gorros",
    thumbnail:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSaoN2DCRk4VsHMssflfSujbYGxyTFODT64oEwKYWnehkL4shL3o3NT5QBSTNICjuFO0a00kAkUEg&usqp=CAc",
  },
  {
    id: 14,
    title: "Gorro Tipo Pescador Batik",
    description: " Gorro tipo pescador piluso tela  batik. ",
    price: 499,
    stock: 50,
    category: "gorros",
    thumbnail:
      "https://www.javeraweb.com/wp-content/uploads/2022/08/5_788_230202.png",
  },
  {
    id: 15,
    title: "Gorro Tipo Pescador Blanco",
    description: " Gorro tipo pescador piluso tela  blanco. ",
    price: 499,
    stock: 50,
    category: "gorros",
    thumbnail:
      "https://static.dafiti.com.ar/p/whisper-0103-903931-1-product.jpg",
  },
  {
    id: 16,
    title: "Gorro Tipo Skater Tela Gris",
    description: " Gorro tipo skater de tela  gris logo frente. ",
    price: 399,
    stock: 30,
    category: "gorros",
    thumbnail:
      " https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTk7MhvYZ5nkWmEmX2z4mRX68OHYH0cIOxhiQRE0FyFWOP7_YtuVoJTVJpZAzls&usqp=CAc ",
  },
  {
    id: 17,
    title: "Gorro Tipo Skater Tela Negro",
    description: " Gorro tipo skakter de tela  negro logo frente. ",
    price: 399,
    stock: 30,
    category: "gorros",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRkxDgD5WrzN2v95HF2AtmuTg4noNiMXZanC7KeFAlJ-ZmSTwnirjHflveQKFCcc5y4nVnQkixSOU8&usqp=CAc ",
  },
];

export default function getItemsFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsDB);
    }, 500);
  });
}

export function getSingleItemFromAPI(idParams) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let itemRequested = itemsDB.find((item) => item.id === Number(idParams));

      if (itemRequested) {
        resolve(itemRequested);
      } else {
        reject(new Error("El item no existe."));
      }
    }, 500);
  });
}

export function getItemsFromAPIByCategory(categoryid) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let itemsRequested = itemsDB.filter(
        (item) => item.category === categoryid
      );
      resolve(itemsRequested);
    }, 500);
  });
}
