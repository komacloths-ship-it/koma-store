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

const state = {
  filter: "all",
  search: "",
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || []
};

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const productGrid = document.querySelector("[data-products]");
const searchInput = document.querySelector("[data-search]");
const wishlistDrawer =
document.querySelector("[data-wishlist-drawer]");

const wishlistItems =
document.querySelector(".wishlist-items");

const wishlistCount =
document.querySelector(".wishlist-count");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const overlay = document.querySelector("[data-overlay]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const header = document.querySelector("[data-header]");
const authModal = document.querySelector("[data-auth-modal]");
const authTitle = document.querySelector("[data-auth-title]");
const authSubmit = document.querySelector("[data-auth-submit]");
const authNote = document.querySelector("[data-auth-note]");
const authForm = document.querySelector("[data-auth-form]");
const nameField = document.querySelector("[data-name-field]");
const googleAuthText = document.querySelector("[data-google-auth-text]");
const searchModal = document.querySelector("[data-search-modal]");
const searchPanelInput = document.querySelector("[data-search-panel-input]");
let revealObserver;
let firebaseAuthApi;
let currentUser = null;

function hasFirebaseConfig() {
  const config = window.KOMA_FIREBASE_CONFIG;
  return Boolean(
    config &&
      config.apiKey &&
      config.appId &&
      !config.apiKey.startsWith("PASTE_") &&
      !config.appId.startsWith("PASTE_")
  );
}

async function loadFirebaseAuth() {
  if (firebaseAuthApi) return firebaseAuthApi;

  if (!hasFirebaseConfig()) {
    throw new Error("Add your Firebase config in firebase-config.js first.");
  }

  const [{ initializeApp }, authModule] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js"),
  ]);

  const app = initializeApp(window.KOMA_FIREBASE_CONFIG);
  const auth = authModule.getAuth(app);
  const googleProvider = new authModule.GoogleAuthProvider();

  firebaseAuthApi = {
    onAuthStateChanged: authModule.onAuthStateChanged,
    auth,
    googleProvider,
    createUserWithEmailAndPassword: authModule.createUserWithEmailAndPassword,
    signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
    signInWithPopup: authModule.signInWithPopup,
    signOut: authModule.signOut,
  };

  return firebaseAuthApi;
}

function showAuthMessage(message) {
  authNote.textContent = message;
}

function getReadableAuthError(error) {
  const code = error.code || "";

  if (code === "auth/api-key-not-valid" || error.message.includes("api-key-not-valid")) {
    return "Firebase API key is not valid. Copy the config again from Firebase Console using the copy button, then paste it into firebase-config.js.";
  }

  if (code === "auth/operation-not-allowed") {
    return "This login method is not enabled yet. Enable Google and Email/Password in Firebase Authentication.";
  }

  if (code === "auth/configuration-not-found") {
    return "Firebase Authentication is not set up for this project yet. In Firebase Console, open Authentication, click Get started, then enable Google and Email/Password sign-in.";
  }

  if (code === "auth/unauthorized-domain") {
    return "This website domain is not allowed in Firebase Auth. Add localhost or your website domain in Firebase Authentication settings.";
  }

  if (code === "auth/popup-closed-by-user") {
    return "Google sign-in was closed before it finished.";
  }

  return error.message || "Login could not finish.";
}

function getAuthMode() {
  return authTitle.textContent === "Create account" ? "signup" : "login";
}

async function loginWithGoogle() {
  try {
    showAuthMessage("Opening Google sign-in...");
    const { auth, googleProvider, signInWithPopup } = await loadFirebaseAuth();
    const result = await signInWithPopup(auth, googleProvider);
    showAuthMessage(`Signed in as ${result.user.email || result.user.displayName || "Google user"}.`);
    closeAuth();
  } catch (error) {
    showAuthMessage(getReadableAuthError(error));
  }
}

async function submitEmailAuth(form) {
  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const authApi = await loadFirebaseAuth();
    const action =
      getAuthMode() === "signup"
        ? authApi.createUserWithEmailAndPassword
        : authApi.signInWithEmailAndPassword;
    const result = await action(authApi.auth, email, password);
    showAuthMessage(`Signed in as ${result.user.email}.`);
    form.reset();
    closeAuth();
  } catch (error) {
    showAuthMessage(getReadableAuthError(error));
  }
}

function prepareRevealElements(scope = document) {
  const revealTargets = scope.querySelectorAll(
    ".eyebrow, h1, h2, h3, .hero-copy, .look-copy p, .contact-email, .category, .price, .auth-note"
  );

  revealTargets.forEach((element, index) => {
    if (!element.classList.contains("reveal-text")) {
      element.classList.add("reveal-text");
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
    }

    if (revealObserver && !element.classList.contains("visible")) revealObserver.observe(element);
  });
}

function setupRevealAnimation() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal-text").forEach((element) => element.classList.add("visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  prepareRevealElements();
}

function productMatches(product) {
  const matchesFilter = state.filter === "all" || product.category === state.filter;
  const searchableText = [product.name, product.category, product.label, ...product.tags]
    .join(" ")
    .toLowerCase();
  const matchesSearch = searchableText.includes(state.search.toLowerCase());
  return matchesFilter && matchesSearch;
}

function renderProducts() {
  const visibleProducts = products.filter(productMatches);

  productGrid.innerHTML = visibleProducts
    .map((product) => {
      const [a, b, piece] = product.colors;
      return `
  <article class="product-card"
         data-product="${product.id}">
    <button
  class="wishlist-btn"
  data-wishlist="${product.id}">
      <i class="${
  state.wishlist.includes(product.id)
    ? "fa-solid"
    : "fa-regular"
} fa-heart"></i>
    </button>
          ${product.image ? `
<div class="product-art">
  <img src="${product.image}" alt="${product.name}" class="product-image">
  <span class="product-badge">${product.label}</span>
</div>
` : `
<div class="product-art ${product.visual === "figure" ? "figure-art" : ""}" style="--art-a: ${a}; --art-b: ${b}; --piece: ${piece};">
  <span class="product-badge">${product.label}</span>
  ${product.visual === "figure" ? '<span class="figure-model" aria-hidden="true"></span>' : ""}
</div>
`}
          <div class="product-info">
            <div class="product-top">
              <div>
                <h3>${product.name}</h3>
                <p class="category">${product.displayCategory || product.category}</p>
              </div>
            </div>
            <div class="price-row">
              <span class="price">
  ${product.oldPrice ? `<span class="old-price">${money.format(product.oldPrice)}</span>` : ""}
  ${money.format(product.price)}
              </span>
             <button
  class="add-button"
  type="button"
  data-add="${product.id}"
   >Choose Size</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  if (!visibleProducts.length) {
    productGrid.innerHTML = '<p class="empty-state">No products found for that search.</p>';
  }

  prepareRevealElements(productGrid);
}
 function renderWishlist(){

    const items = products.filter(product =>
        state.wishlist.includes(product.id)
    );

    wishlistCount.textContent = items.length;

    wishlistItems.innerHTML = items.map(product => `
        <div class="cart-item">
            <h3>${product.name}</h3>
            <p>${money.format(product.price)}</p>
        </div>
    `).join("");

}
function renderCart() {
 
  cartCount.textContent = state.cart.length;

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Your cart is waiting for the first fit.</p>';
    cartTotal.textContent = money.format(0);
    return;
  }

  cartItems.innerHTML = state.cart
    .map((product) => {
      const [a, b] = product.colors || ["#7c3aed", "#312e81"];
      return `
        <article class="cart-item">
          <div class="cart-thumb">
  <img src="${product.image}" alt="${product.name}">
          </div>
          <div>
            <h3>${product.name}</h3>
            <p>
  Size: ${product.size || "N/A"}<br>
  ${money.format(product.price)}
          </p>
          </div>
          <button class="icon-button" type="button" data-remove="${product.id}" aria-label="Remove ${product.name}">x</button>
        </article>
      `;
    })
    .join("");

  const total = state.cart.reduce((sum, product) => sum + product.price, 0);
  cartTotal.textContent = money.format(total);
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (!authModal.classList.contains("open") && !searchModal.classList.contains("open")) overlay.classList.remove("open");
}

function setAuthMode(mode) {
  const isSignup = mode === "signup";
  authTitle.textContent = isSignup ? "Create account" : "Login";
  authSubmit.textContent = isSignup ? "Create Account" : "Login";
  googleAuthText.textContent = isSignup ? "Sign up with Google" : "Login with Google";
  authNote.textContent = isSignup
    ? "Create a Koma account to save sizes, build wishlists, and get first access to new drops."
    : "Login to track orders, save your cart, and get Koma drop alerts.";
  nameField.hidden = !isSignup;
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.authMode === mode);
  });
}

function openAuth(mode = "login") {
  setAuthMode(mode);
  authModal.classList.add("open");
  overlay.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuth() {
  authModal.classList.remove("open");
  authModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !searchModal.classList.contains("open")) overlay.classList.remove("open");
}

function setSearchQuery(query) {
  state.search = query.trim();
  searchInput.value = state.search;
  searchPanelInput.value = state.search;
  renderProducts();
}

function openSearch() {
  searchModal.classList.add("open");
  overlay.classList.add("open");
  searchModal.setAttribute("aria-hidden", "false");
  searchPanelInput.focus();
}

function closeSearch() {
  searchModal.classList.remove("open");
  searchModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !authModal.classList.contains("open")) overlay.classList.remove("open");
}

document.addEventListener("click", (event) => {
  const productCard =
event.target.closest("[data-product]");

if (
  productCard &&
  !event.target.closest(".wishlist-btn") &&
  !event.target.closest(".add-button")
) {
  openProduct(
    Number(productCard.dataset.product)
  );
}
  const addButton = event.target.closest("[data-add]");
  const removeButton = event.target.closest("[data-remove]");
  const filterButton = event.target.closest("[data-filter]");
  const authOpenButton = event.target.closest("[data-auth-open]");
  const authModeButton = event.target.closest("[data-auth-mode]");
  const googleAuthButton = event.target.closest("[data-google-auth]");
  const suggestionButton = event.target.closest("[data-suggestion]");
  const heartBtn = event.target.closest(".wishlist-btn");
  const wishlistBtn =
event.target.closest("[data-wishlist]");

if (wishlistBtn) {

 event.stopPropagation();

  const productId =
  Number(wishlistBtn.dataset.wishlist);

  const icon =
  wishlistBtn.querySelector("i");

  if (state.wishlist.includes(productId)) {

    state.wishlist =
    state.wishlist.filter(
      id => id !== productId
    );

  } else {

    state.wishlist.push(productId);

  }

  localStorage.setItem(
  "wishlist",
  JSON.stringify(state.wishlist)
);



renderProducts();
renderWishlist();
}



  if (addButton) {

    event.stopPropagation();

    const productId =
    Number(addButton.dataset.add);

    localStorage.setItem(
        "selectedProduct",
        productId
    );

    window.location.href =
    "product.html";
}

  if (removeButton) {

    const index = state.cart.findIndex(
      (item) => item.id === Number(removeButton.dataset.remove)
    );

    state.cart.splice(index, 1);

    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    );

    renderCart();
}

  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button === filterButton);
    });
    renderProducts();
  }

  if (authOpenButton) {
  const loginBtn = document.querySelector("[data-auth-open]");

  if (
    loginBtn &&
    loginBtn.textContent !== "Login"
  ) {
    if (confirm("Do you want to logout?")) {

      loadFirebaseAuth().then(({ auth, signOut }) => {
        signOut(auth);
      });

    }
  } else {
    openAuth(authOpenButton.dataset.authOpen);
  }
}
  if (authModeButton) setAuthMode(authModeButton.dataset.authMode);
  if (googleAuthButton) {
    loginWithGoogle();
  }
  if (suggestionButton) {
    setSearchQuery(suggestionButton.dataset.suggestion);
    closeSearch();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  }
if(event.target.closest("[data-wishlist-open]")){
    wishlistDrawer.classList.toggle("open");
}
if (event.target.closest("[data-wishlist-close]")) {
    wishlistDrawer.classList.remove("open");
}
  if (event.target.closest("[data-cart-open]")) openCart();
  if (event.target.closest("[data-cart-close]")) closeCart();
  if (event.target.closest("[data-auth-close]")) closeAuth();
  if (event.target.closest("[data-search-close]")) closeSearch();
  if (event.target === overlay) {
    closeCart();
    closeAuth();
    closeSearch();

    wishlistDrawer.classList.remove("open");
}
  if (event.target.closest("[data-focus-search]")) openSearch();
});

searchInput.addEventListener("input", (event) => {
  setSearchQuery(event.target.value);
});

searchPanelInput.addEventListener("input", (event) => {
  setSearchQuery(event.target.value);
});

searchPanelInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    closeSearch();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  }
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitEmailAuth(event.currentTarget);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

window.openProduct = function(id){

    localStorage.setItem(
        "selectedProduct",
        id
    );

    window.location.href = "product.html";
}

renderProducts();
renderCart();
renderWishlist();
setupRevealAnimation();

const checkoutBtn =
document.querySelector(".checkout-button");

const checkoutModal =
document.getElementById("checkoutModal");

checkoutBtn.addEventListener("click", () => {

    if (!currentUser) {

        alert("Please Login or Sign Up first");

        openAuth("login");

        return;
    }

    if (state.cart.length === 0) {

        alert(
          "Please add at least one product to proceed."
        );

        return;
    }

    checkoutModal.style.display = "flex";

});

document
.getElementById("closeCheckout")
.addEventListener("click", () => {

    checkoutModal.style.display = "none";

});
document
.getElementById("sendWhatsAppOrder")
.addEventListener("click", () => {

    const name =
    document.getElementById("customerName").value;

    const phone =
    document.getElementById("customerPhone").value;

    const address =
    document.getElementById("customerAddress").value;

    if (!name.trim()) {
    alert("Please enter your name");
    return;
}

if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Please enter a valid 10 digit mobile number");
    return;
}

if (!address.trim()) {
    alert("Please enter your address");
    return;
}

    const orderText = state.cart
  .map(item =>
    `${item.name} - Size ${item.size || "N/A"} - ₹${item.price}`
  )
  .join("%0A");

    const total = state.cart.reduce(
      (sum, item) => sum + item.price,
      0
    );

    const message =
`Hello from Koma!%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Address: ${address}%0A%0A
Order:%0A${orderText}%0A%0A
Total: ₹${total}`;

    window.open(
      `https://wa.me/918331975957?text=${message}`,
      "_blank"
    );
    checkoutModal.style.display = "none";

document.getElementById(
  "orderSuccess"
).style.display = "flex";

});

document
.getElementById("continueShopping")
.addEventListener("click", () => {

    document.getElementById(
      "orderSuccess"
    ).style.display = "none";

});

document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("closeLuffy");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            document.getElementById("luffyWidget").style.display = "none";
        });
    }
});

(async () => {
  try {
    const { auth, onAuthStateChanged } =
      await loadFirebaseAuth();

    onAuthStateChanged(auth, (user) => {
      currentUser = user;
      const loginBtn =
        document.querySelector("[data-auth-open]");

      if (!loginBtn) return;

      const signupBtn =
document.querySelector(".signup-button");

if (user) {

    const shortName =
(user.displayName || user.email || "Account")
.split(" ")[0];

loginBtn.textContent = shortName;

    if(signupBtn){
        signupBtn.style.display = "none";
    }

} else {

    loginBtn.textContent = "Login";

    if(signupBtn){
        signupBtn.style.display = "inline-flex";
    }

}
    });
  } catch (error) {
    console.log(error);
  }
})();