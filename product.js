let selectedSize = null;

const products = [
  {
  id: 1,
  name: "Shadow Gate Tee ⛩️",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "samurai",
    "shadow",
    "torii gate",
    "oversized"
  ],
  image: "assets/shadow-gate-tee.png"
},
  {
    id: 2,
    name: "Spirit Tee🔥",
    category: "fanclub",
    displayCategory: "fan club",
    label: "Fan drop",
    price: 899,
    oldPrice: 1799,
    colors: ["#f4f5f0", "#4ba58a", "#20312f"],
    tags: ["fan club", "daily wear", "basics", "cotton", "tshirts"],
    image: "assets/spirit-tee.png",
  },
  {
  id: 3,
  name: "Moon Gate Tee 🌙",
  category: "genz",
  displayCategory: "genz wear",
  label: "New Drop",
  price: 599,
  colors: ["#ffffff", "#d1d5db", "#111111"],
  tags: ["genz wear", "oversized", "cotton", "tshirts"],
  image: "assets/moon-gate-tee.png"
},
 {
  id: 4,
  name: "Shogun Tee 🔥",
  category: "genz",
  displayCategory: "genz wear",
  label: "New Drop",
  price: 649,
  colors: ["#111111", "#7f1d1d", "#ffffff"],
  tags: ["genz wear", "oversized", "anime", "streetwear", "cotton"],
  image: "assets/shogun-tee.png"
},
  {
  id: 5,
  name: "Shogun Tee White ⚪",
  category: "genz",
  displayCategory: "genz wear",
  label: "New Drop",
  price: 649,
  oldPrice: 849,
  colors: ["#ffffff", "#e5e7eb", "#7f1d1d"],
  tags: ["genz wear", "oversized", "anime", "streetwear", "cotton"],
  image: "assets/shogun-tee-white.png"
},
  {
  id: 6,
  name: "Crown Tee 👑",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium",
  price: 699,
  oldPrice: 899,
  colors: ["#ffffff", "#111111", "#7f1d1d"],
  tags: ["genz wear", "oversized", "streetwear", "premium", "crown"],
  image: "assets/crown-tee-white.png"
},
 {
  id: 7,
  name: "Pirate King Hoodie ☠️",
  category: "hoodies",
  displayCategory: "hoodies",
  label: "Anime Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#ffffff"],
  tags: ["hoodie", "anime", "one piece", "streetwear"],
  image: "assets/luffy-hoodie.png"
},
  {
  id: 8,
  name: "Built Different Tee ⚡",
  category: "streetwear",
  label: "New Arrival",
  price: 699,
  colors: ["#111111", "#d1d5db", "#4b5563"],
  tags: ["streetwear", "oversized", "minimal", "cotton", "daily wear"],
  image: "assets/built-different-tee.png"
},
  {
  id: 9,
  name: "Last Stand Tee ⚔️",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "samurai",
    "warrior",
    "oversized",
    "dark aesthetic"
  ],
  image: "assets/last-stand-tee.png"
},
  {
  id: 10,
  name: "67 Us Bro Always 😂",
  category: "memeculture",
  displayCategory: "meme culture",
  label: "Meme Drop",
  price: 599,
  colors: ["#111111", "#e5e7eb", "#4b5563"],
  tags: ["meme", "friends", "bro", "viral", "funny"],
  image: "assets/us-bro-always.png"
},
  {
    id: 11,
    name: "Demon Slayer Hoodie 🔥",
    category: "hoodies",
    displayCategory: "hoodies",
    label: "Anime Drop",
    price: 1499,
    oldPrice: 1799,
    colors: ["#111111", "#7f1d1d", "#ffffff"],
    tags: ["hoodie", "anime", "demon slayer", "streetwear"],
    image: "assets/demon-slayer-hoodie.png"
},
{
  id: 12,
  name: "Zoro Shadow Hoodie ⚔️",
  category: "hoodies",
  displayCategory: "hoodies",
  label: "Anime Drop",
  price: 1599,
  oldPrice: 1899,
  colors: ["#111111", "#3f4f3f", "#ffffff"],
  tags: ["hoodie", "anime", "zoro", "one piece", "streetwear"],
  image: "assets/zoro-hoodie.png"
},
{
  id: 13,
  name: "Shadow Summoner Hoodie 👹",
  category: "hoodies",
  displayCategory: "hoodies",
  label: "Anime Drop",
  price: 1599,
  oldPrice: 1899,
  colors: ["#111111", "#d6c7b2", "#7f1d1d"],
  tags: ["hoodie", "anime", "jjk", "streetwear", "oversized"],
  image: "assets/shadow-summoner-hoodie.png"
},
{
  id: 14,
  name: "Pirate King Tee ☠️",
  category: "fanclub",
  displayCategory: "fan club",
  label: "Anime Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#ffffff"],
  tags: ["one piece", "luffy", "anime", "fan club", "oversized"],
  image: "assets/pirate-king-tee.png"
},
{
  id: 15,
  name: "Ronin Shadow Tee ⚔️",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 749,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#d1d5db"],
  tags: [
    "genz wear",
    "samurai",
    "ronin",
    "oversized",
    "streetwear"
  ],
  image: "assets/ronin-shadow-tee.png"
},
{
  id: 16,
  name: "Freedom Seeker Tee ☠️",
  category: "fanclub",
  displayCategory: "fan club",
  label: "Anime Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "one piece",
    "anime",
    "pirate",
    "luffy",
    "fan club",
    "oversized"
  ],
  image: "assets/freedom-seeker-tee.png"
},
{
  id: 17,
  name: "Raven Soul Tee 🐦",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "raven",
    "dark aesthetic",
    "oversized",
    "streetwear"
  ],
  image: "assets/raven-soul-tee.png"
},
{
  id: 18,
  name: "Dragon Legend Tee 🐉",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "dragon",
    "japanese",
    "oversized",
    "dark aesthetic"
  ],
  image: "assets/dragon-legend-tee.png"
},
{
  id: 19,
  name: "Night Walker Tee 🌙",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#e5e7eb", "#7f1d1d"],
  tags: [
    "genz wear",
    "samurai",
    "night",
    "moon",
    "oversized"
  ],
  image: "assets/night-walker-tee.png"
},
{
  id: 20,
  name: "Tiger Fury Tee 🐯",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "tiger",
    "power",
    "oversized",
    "streetwear"
  ],
  image: "assets/tiger-fury-tee.png"
},
{
  id: 21,
  name: "Demon Heart Tee 👹",
  category: "genz",
  displayCategory: "genz wear",
  label: "Premium Drop",
  price: 799,
  oldPrice: 999,
  colors: ["#111111", "#7f1d1d", "#f5f5f5"],
  tags: [
    "genz wear",
    "oni",
    "demon",
    "japanese",
    "oversized"
  ],
  image: "assets/demon-heart-tee.png"
}
];


const productId =
Number(localStorage.getItem("selectedProduct"));

const product =
products.find(item => item.id === productId);

if(product){

    document.getElementById("productName")
    .textContent = product.name;

    document.getElementById("productCategory")
    .textContent = product.category;

    document.getElementById("productPrice")
    .textContent = "₹" + product.price;

    if(product.image){

        document.getElementById("productImage")
        .src = product.image;

    }

}

document.querySelectorAll(".size-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".size-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedSize =
        button.textContent;

    });

});

document
.getElementById("productAddCart")
.addEventListener("click", () => {

    if(!selectedSize){

        alert(
          "Please select a size"
        );

        return;}

        const cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

cart.push({
    ...product,
    size: selectedSize
});

localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);
    

    const toast =
document.getElementById("cartToast");

toast.textContent =
`Added Size ${selectedSize} ✅`;

toast.classList.add("show");

setTimeout(() => {

    toast.classList.remove("show");

}, 2000);
});