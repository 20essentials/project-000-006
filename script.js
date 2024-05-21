const d = document,
  $items = d.querySelectorAll(".unItem");

let fotos = [
  "assets/fotos_with_reference_AVIF/img-1.avif",
  "assets/fotos_with_reference_AVIF/img-2.avif",
  "assets/fotos_with_reference_AVIF/img-3.avif",
  "assets/fotos_with_reference_AVIF/img-4.avif",
  "assets/fotos_with_reference_AVIF/img-5.avif",
  "assets/fotos_with_reference_AVIF/img-6.avif",
  "assets/fotos_with_reference_AVIF/img-7.avif",
  "assets/fotos_with_reference_AVIF/img-8.avif",
  "assets/fotos_with_reference_AVIF/img-9.avif",
  "assets/fotos_with_reference_AVIF/img-10.avif",
  "assets/fotos_with_reference_AVIF/img-11.avif",
  "assets/fotos_with_reference_AVIF/img-12.avif",
  "assets/fotos_with_reference_AVIF/img-13.avif",
  "assets/fotos_with_reference_AVIF/img-14.avif",
  "assets/fotos_with_reference_AVIF/img-15.avif",
  "assets/fotos_with_reference_AVIF/img-16.avif",
  "assets/fotos_with_reference_AVIF/img-17.avif",
  "assets/fotos_with_reference_AVIF/img-18.avif",
  "assets/fotos_with_reference_AVIF/img-19.avif",
  "assets/fotos_with_reference_AVIF/img-20.avif",
  "assets/fotos_with_reference_AVIF/img-21.avif",
  "assets/fotos_with_reference_AVIF/img-22.avif",
  "assets/fotos_with_reference_AVIF/img-23.avif",
  "assets/fotos_with_reference_AVIF/img-24.avif",
  "assets/fotos_with_reference_AVIF/img-25.avif",
];
let colores = [
  "#FF5733", // Rojo Naranja
  "#33FF57", // Verde Limón
  "#3357FF", // Azul Vivo
  "#FF33A1", // Rosa Fucsia
  "#A133FF", // Púrpura
  "#FF5733", // Naranja
  "#33FFF6", // Turquesa Claro
  "#FF8F33", // Naranja Claro
  "#57FF33", // Verde Claro
  "#FF3333", // Rojo
  "#33FF99", // Verde Menta
  "#5733FF", // Azul Eléctrico
  "#FF3357", // Rosa Chicle
  "#33A1FF", // Azul Cielo
  "#FF33F6", // Rosa Neón
  "#A1FF33", // Amarillo Verdoso
  "#33FFB2", // Verde Agua
  "#FFB233", // Amarillo Naranja
  "#57A1FF", // Azul Claro
  "#A1FF57", // Verde Lima
  "#FF33D1", // Rosa Brillante
  "#33D1FF", // Azul Claro
  "#FF5733", // Rojo Anaranjado
  "#33FFA1", // Verde Claro
  "#FF8F57", // Naranja Claro
];

sorteador();
function sorteador() {
  let unArray = [],
    i;
  for (i = 0; i < 10; i++) {
    do {
      valor = Math.floor(Math.random() * fotos.length);
    } while (unArray.includes(valor));

    unArray.push(valor);
  }

  $items.forEach(
    (item, key) => {
      (item.style.backgroundImage = `url('${fotos[unArray[key]]}')`);
      d.body.style.backgroundColor = `${colores[unArray[key]]}`;
    }
  );

  
}

console.group("REFERENCE ")
console.log("Based in ->", "https://bentogrids.com/shots/clth7mi0600014r86mooqmy3l");
console.log("img-1 ->", "https://wallhaven.cc/w/2k2gy9");
console.log("img-2 ->", "https://wallhaven.cc/w/396lmd");
console.log("img-3 ->", "https://wallhaven.cc/w/9mgjq1");
console.log("img-4 ->", "https://wallhaven.cc/w/0wv5xx");
console.log("img-5 ->", "https://wallhaven.cc/w/nzm8ky");
console.log("img-6 ->", "https://wallhaven.cc/w/ne83mo");
console.log("img-7 ->", "https://wallhaven.cc/w/zx1x1y");
console.log("img-8 ->", "https://wallhaven.cc/w/nzmqly");
console.log("img-9 ->", "https://wallhaven.cc/w/4g33dd");
console.log("img-10 ->", "https://wallhaven.cc/w/nmzox8");
console.log("img-11 ->", "https://wallhaven.cc/w/43yq6y");
console.log("img-12 ->", "https://wallhaven.cc/w/3kdvg6");
console.log("img-13 ->", "https://wallhaven.cc/w/p8d67m");
console.log("img-14 ->", "https://wallhaven.cc/w/nzw76y");
console.log("img-15 ->", "https://wallhaven.cc/w/73ewlo");
console.log("img-16 ->", "https://wallhaven.cc/w/4dm8oo");
console.log("img-17 ->", "https://wallhaven.cc/w/0pvog3");
console.log("img-18 ->", "https://wallhaven.cc/w/nrq25j");
console.log("img-19 ->", "https://wallhaven.cc/w/3k713v");
console.log("img-20 ->", "https://wallhaven.cc/w/4y3v6d");
console.log("img-21 ->", "https://wallhaven.cc/w/0j3lem");
console.log("img-22 ->", "https://wallhaven.cc/w/mdg3x1");
console.log("img-23 ->", "https://wallhaven.cc/w/gj2wge");
console.log("img-24 ->", "https://wallhaven.cc/w/j8em9w");
console.log("img-25 ->", "https://wallhaven.cc/w/4v7gxl");
console.groupEnd();

