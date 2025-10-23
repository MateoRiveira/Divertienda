
const products = [
 {
  id: 1,
  title: "PlayStation 5",
  price: 499.99,
  img: "/images/play5.png",
  category: "Consolas",
  description: "Consola de nueva generación de Sony con gráficos 4K y control DualSense con retroalimentación háptica.",
  stock: 45
},
{
  id: 2,
  title: "Xbox Series X",
  price: 499.99,
  img: "/images/seriesx.jpeg",
  category: "Consolas",
  description: "Consola más potente de Microsoft, con soporte para juegos en 4K y disco de 1TB SSD.",
  stock: 55
},
{
  id: 3,
  title: "Nintendo Switch OLED",
  price: 349.99,
  img: "/images/switch1.jpeg",
  category: "Consolas",
  description: "Versión mejorada de la Nintendo Switch con pantalla OLED de 7 pulgadas y mejor audio.",
  stock: 35
},
{
  id: 4,
  title: "Steam Deck 512GB",
  price: 649.99,
  img: "images/steamdeck.jpg",
  category: "Consolas",
  description: "Consola portátil de Valve que permite jugar la mayoría de los juegos de PC en cualquier lugar.",
  stock: 40
},

{
  id: 5,
  title: "Gaming Laptop ASUS ROG Strix",
  price: 1599.99,
  img: "/images/laptop.jpeg",
  category: "Computadoras",
  description: "Laptop gamer con procesador Ryzen 7, RTX 3060 y pantalla de 144Hz.",
  stock: 55
},
{
  id: 6,
  title: "PC Gamer Intel i9 + RTX 4090",
  price: 3499.99,
  img: "/images/compu.jpg",
  category: "Computadora",
  description: "PC de escritorio de alto rendimiento con tarjeta gráfica RTX 4090 y procesador Intel i9.",
  stock: 25
},
{
  id: 7,
  title: "EA Sports FC 26",
  price: 69.99,
  img: "/images/fc26.png",
  category: "Videojuegos",
  description: "El nuevo simulador de fútbol con licencias oficiales y modo carrera mejorado.",
  stock: 15
},
{
  id: 8,
  title: "Hollow Knight Silksong",
  price: 6.99,
  img: "/images/silksong.png",
  category: "Videojuegos",
  description: "La esperada secuela de Hollow Knight, un metroidvania lleno de acción y exploración.",
  stock: 85
},
{
  id: 9,
  title: "Persona 3 Reload",
  price: 69.99,
  img: "/images/p3r.png",
  category: "Videojuegos",
  description: "Remake completo de Persona 3 con gráficos modernos y sistema de combate actualizado.",
  stock: 70
},
{
  id: 10,
  title: "Persona 4 Golden",
  price: 39.99,
  img: "/images/p4g.jpg",
  category: "Videojuegos",
  description: "Versión definitiva de Persona 4 con mejoras gráficas y nuevo contenido adicional.",
  stock: 70
},
{
  id: 11,
  title: "Persona 5 Royal",
  price: 59.99,
  img: "/images/p5r.jpg",
  category: "Videojuegos",
  description: "Edición mejorada de Persona 5 con nuevos personajes, eventos y mecánicas.",
  stock: 120
},
{
  id: 12,
  title: "Persona 3 Portable",
  price: 49.99,
  img: "/images/p3p.png",
  category: "Videojuegos",
  description: "Versión portátil del clásico Persona 3 con opción de protagonista femenina.",
  stock: 55
},
{
  id: 13,
  title: "God of War Ragnarök",
  price: 69.99,
  img: "/images/gowragnarok.jpeg",
  category: "Videojuegos",
  description: "Acompaña a Kratos y Atreus en el desenlace épico de la saga nórdica.",
  stock: 35
},
{
  id: 14,
  title: "The Legend of Zelda: Tears of the Kingdom",
  price: 69.99,
  img: "/images/zelda.jpg",
  category: "Videojuegos",
  description: "Secuela de Breath of the Wild, explora Hyrule con nuevas habilidades y libertad total.",
  stock: 35
},
{
  id: 15,
  title: "Red Dead Redemption 2",
  price: 39.99,
  img: "images/reddead2.jpeg",
  category: "Videojuegos",
  description: "Juego de mundo abierto ambientado en el Salvaje Oeste con una historia épica.",
  stock: 45
},
{
    id: 16,
    title: "Cyberpunk 2077: Phantom Liberty",
    price: 59.99,
    img: "images/cyberpunk.jpeg",
    category: "Videojuegos",
    description: "Expansión de Cyberpunk 2077 con nuevas áreas, historia y mejoras en el gameplay.",
    stock: 45
},
{
    id: 17,
    title: "Elden Ring",
    price: 59.99,
    img: "images/eldenring.jpg",
    category: "Videojuegos",
    description: "Juego de rol de mundo abierto desarrollado por FromSoftware en colaboración con George R.R. Martin.",
    stock: 55
},
{
    id: 18,
    title: "Mortal Kombat 1",
    price: 69.99,
    img: "/images/mk1.jpeg",
    category: "Videojuegos",
    description: "Reinicio de la saga con nuevos personajes, fatalities espectaculares y mejor jugabilidad.",
    stock: 10
},
{
    id: 19,
    title: "Street Fighter 6",
    price: 59.99,
    img: "images/sf6.jpeg",
    category: "Videojuegos",
    description: "La nueva entrega del clásico juego de lucha con nuevos luchadores y modos de juego.",
    stock: 35
},
{
    id: 20,
    title: "Resident Evil 4 Remake",
    price: 59.99,
    img: "images/re4remake.jpeg",
    category: "Videojuegos",
    description: "Remake del clásico survival horror con gráficos modernos y jugabilidad mejorada.",
    stock: 55
},
{
    id: 21,
    title: "Call of Duty: Modern Warfare III",
    price: 69.99,
    img: "/images/codmw3.jpeg",
    category: "Videojuegos",
    description: "Nueva entrega de la saga Call of Duty con campaña épica y modos multijugador intensos.",
    stock: 8
},
{
    id: 22,
    title: "Assassin’s Creed Mirage",
    price: 69.99,
    img: "/images/asscreedmirage.jpeg",
    category: "Videojuegos",
    description: "Vuelve a las raíces de la saga con una historia en Bagdad y sigilo clásico.",
    stock: 12
},
{
    id: 23,
    title: "Starfield",
    price: 69.99,
    img: "/images/starfield.jpg",
    category: "Videojuegos",
    description: "Juego de rol espacial de Bethesda con exploración de galaxias y libertad total.",
    stock: 34
},
{
    id: 24,
    title: "Final Fantasy XVI",
    price: 69.99,
    img: "/images/finalfantasy16.png",
    category: "Videojuegos",
    description: "Nueva entrega de la saga con combate en tiempo real y una historia épica.",
    stock: 34
},
{
    id: 25,
    title: "Diablo IV",
    price: 69.99,
    img: "/images/diablo4.jpeg",
    category: "Videojuegos",
    description: "Regreso del clásico ARPG con mazmorras, loot y multijugador online.",
    stock: 20
},
{
    id: 26,
    title: "Gran Turismo 7",
    price: 59.99,
    img: "/images/gt7.jpeg",
    category: "Videojuegos",
    description: "El simulador de conducción definitivo con cientos de autos y circuitos reales.",
    stock: 25
},
{
    id: 27,
    title: "Forza Horizon 5",
    price: 59.99,
    img: "/images/forza5.jpeg",
    category: "Videojuegos",
    description: "Conduce por un mapa inspirado en México con cientos de coches disponibles.",
    stock: 25
},
{
    id: 28,
    title: "Mario Kart 8 Deluxe",
    price: 59.99,
    img: "/images/mk8.jpeg",
    category: "Videojuegos",
    description: "Juego de carreras arcade de Mario y sus amigos con todo el contenido adicional incluido.",
    stock: 25
},
{
    id: 29,
    title: "Super Smash Bros. Ultimate",
    price: 59.99,
    img: "/images/smashultimate.jpeg",
    category: "Videojuegos",
    description: "El crossover de lucha más grande de la historia con todos los personajes de Nintendo.",
    stock: 25
},
{
    id: 30,
    title: "Splatoon 3",
    price: 59.99,
    img: "/images/splatton3.jpeg",
    category: "Videojuegos",
    description: "Shooter multijugador de Nintendo con batallas de tinta llenas de color.",
    stock: 25
},
{
    id: 31,
    title: "Metroid Dread",
    price: 59.99,
    img: "/images/metroid.jpeg",
    category: "Videojuegos",
    description: "Juego de acción y exploración en 2D protagonizado por Samus Aran.",
    stock: 25
},
{
    id: 32,
    title: "Kirby and the Forgotten Land",
    price: 59.99,
    img: "images/kirby.jpeg",
    category: "Videojuegos",
    description: "Primera aventura 3D de Kirby en un mundo misterioso lleno de secretos.",
    stock: 25
},
{
    id: 33,
    title: "Minecraft",
    price: 29.99,
    img: "/images/minecraft.jpg",
    category: "Videojuegos",
    description: "Juego de construcción y supervivencia con bloques en un mundo infinito.",
    stock: 25
},
{
    id: 34,
    title: "The Sims 4",
    price: 39.99,
    img: "images/sims4.jpeg",
    category: "Videojuegos",
    description: "Crea, diseña y controla la vida de tus Sims en este simulador social.",
    stock: 25
},
{
    id: 35,
    title: "Among Us",
    price: 9.99,
    img: "/images/amongus.jpeg",
    category: "Videojuegos",
    description: "Juego multijugador de deducción social donde debes descubrir al impostor.",
    stock: 25
},
{
    id: 36,
    title: "Valheim",
    price: 19.99,
    img: "/images/valheim.jpeg",
    category: "Videojuegos",
    description: "Survival sandbox inspirado en la mitología vikinga.",
    stock: 25
},
{
    id: 37,
    title: "Baldur’s Gate 3",
    price: 69.99,
    img: "images/baldur3.jpeg",
    category: "Videojuegos",
    description: "Juego de rol táctico basado en Dungeons & Dragons con decisiones que afectan la historia.",
    stock: 25
},
{
    id: 38,
    title: "Alan Wake II",
    price: 69.99,
    img: "/images/alanwake2.jpeg",
    category: "Videojuegos",
    description: "Secuela del clásico thriller psicológico con gráficos de última generación.",
    stock: 25
},
{
    id: 39,
    title: "Dead Space Remake",
    price: 59.99,
    img: "/images/ds.jpeg",
    category: "Videojuegos",
    description: "Remake del clásico survival horror espacial con atmósfera renovada.",
    stock: 25
},
{
    id: 40,
    title: "Hogwarts Legacy",
    price: 69.99,
    img: "/images/hogl.jpeg",
    category: "Videojuegos",
    description: "Juego de rol ambientado en el universo de Harry Potter con libertad para explorar Hogwarts.",
    stock: 25
},
{
    id: 41,
    title: "Lies of P",
    price: 59.99,
    img: "/images/liesofp.jpeg",
    category: "Videojuegos",
    description: "Juego inspirado en Pinocho con combate soulslike y una atmósfera oscura.",
    stock: 25
},
{
    id: 42,
    title: "Sekiro: Shadows Die Twice",
    price: 49.99,
    img: "/images/sekiro.jpeg",
    category: "Videojuegos",
    description: "Juego de acción y sigilo en el Japón Sengoku, desarrollado por FromSoftware.",
    stock: 25
},
{
    id: 43,
    title: "Dark Souls III",
    price: 39.99,
    img: "images/dk3.jpg",
    category: "Videojuegos",
    description: "La tercera entrega de la saga souls con combates intensos y dificultad elevada.",
    stock: 25
}
]; 

export default products