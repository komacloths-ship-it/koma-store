const products = [
  {
    id: 1,
    name: "Oversized Denim Jacket",
    category: "streetwear",
    label: "Best seller",
    price: 2499,
    colors: ["#315f88", "#dfe9ee", "#1a2a35"],
    tags: ["oversized", "jackets", "denim", "streetwear"],
  },
  {
    id: 2,
    name: "Spirit Tee🔥",
    category: "fanclub",
    displayCategory: "fan club",
    label: "Fan drop",
    price: 499,
    oldPrice: 799,
    colors: ["#f4f5f0", "#4ba58a", "#20312f"],
    tags: ["fan club", "daily wear", "basics", "cotton", "tshirts"],
    image: "assets/spirit-tee.png",
  },
  {
    id: 3,
    name: "Satin Evening Shirt",
    category: "occasion",
    label: "New drop",
    price: 1799,
    colors: ["#dd5f55", "#f4d9d3", "#4b1f28"],
    tags: ["printed cloths", "printed clothes", "shirts", "party wear", "occasion"],
  },
  {
    id: 4,
    name: "Cargo Utility Pants",
    category: "streetwear",
    label: "Limited",
    price: 2199,
    colors: ["#171a21", "#b99146", "#f3eee2"],
    tags: ["daily wear", "cargo", "pants", "streetwear"],
  },
  {
    id: 5,
    name: "Member Lounge Co-ord",
    category: "fanclub",
    displayCategory: "fan club",
    label: "Members",
    price: 2999,
    colors: ["#e7e2d7", "#315f88", "#ffffff"],
    tags: ["fan club", "daily wear", "co-ord", "linen", "summer"],
  },
  {
    id: 6,
    name: "Pleated Party Dress",
    category: "occasion",
    label: "Trending",
    price: 3299,
    colors: ["#22252d", "#dd5f55", "#f6f0eb"],
    tags: ["party wear", "dresses", "occasion"],
  },
  {
    id: 7,
    name: "Canvas Crossbody Bag",
    category: "accessories",
    label: "Carry daily",
    price: 1199,
    colors: ["#4ba58a", "#eef7f2", "#1d453c"],
    tags: ["accessories", "bags", "daily wear"],
  },
  {
    id: 8,
    name: "Minimal Silver Chain",
    category: "accessories",
    label: "Gift pick",
    price: 899,
    colors: ["#d7dde4", "#ffffff", "#68707d"],
    tags: ["accessories", "chain", "jewellery"],
  },
  {
    id: 9,
    name: "Action Figure Varsity Fit",
    category: "genz",
    displayCategory: "genz wear",
    label: "Figure fit",
    price: 2899,
    colors: ["#8b5cf6", "#a7f3d0", "#111318"],
    tags: ["genz wear", "action figure", "varsity", "oversized", "streetwear"],
    visual: "figure",
  },
  {
    id: 10,
    name: "Cyber Hero Printed Hoodie",
    category: "genz",
    displayCategory: "genz wear",
    label: "Printed",
    price: 2399,
    colors: ["#06b6d4", "#fef08a", "#172554"],
    tags: ["genz wear", "action figure", "printed cloths", "hoodie", "daily wear"],
    visual: "figure",
  },
  {
    id: 11,
    name: "Anime Cargo Street Set",
    category: "genz",
    displayCategory: "genz wear",
    label: "New vibe",
    price: 3499,
    colors: ["#fb7185", "#d9f99d", "#3f1d38"],
    tags: ["genz wear", "action figure", "cargo", "co-ord", "party wear"],
    visual: "figure",
  },
];

const state = {
  filter: "all",
  search: "",
  cart: [],
};

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const productGrid = document.querySelector("[data-products]");
const searchInput = document.querySelector("[data-search]");
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
    auth,
    googleProvider,
    createUserWithEmailAndPassword: authModule.createUserWithEmailAndPassword,
    signInWithEmailAndPassword: authModule.signInWithEmailAndPassword,
    signInWithPopup: authModule.signInWithPopup,
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
        <article class="product-card">
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
              <button class="add-button" type="button" data-add="${product.id}">Add</button>
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

function renderCart() {
  cartCount.textContent = state.cart.length;

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Your cart is waiting for the first fit.</p>';
    cartTotal.textContent = money.format(0);
    return;
  }

  cartItems.innerHTML = state.cart
    .map((product) => {
      const [a, b] = product.colors;
      return `
        <article class="cart-item">
          <div class="cart-thumb" style="--art-a: ${a}; --art-b: ${b};"></div>
          <div>
            <h3>${product.name}</h3>
            <p>${money.format(product.price)}</p>
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
  const addButton = event.target.closest("[data-add]");
  const removeButton = event.target.closest("[data-remove]");
  const filterButton = event.target.closest("[data-filter]");
  const authOpenButton = event.target.closest("[data-auth-open]");
  const authModeButton = event.target.closest("[data-auth-mode]");
  const googleAuthButton = event.target.closest("[data-google-auth]");
  const suggestionButton = event.target.closest("[data-suggestion]");

  if (addButton) {
    const product = products.find((item) => item.id === Number(addButton.dataset.add));
    state.cart.push(product);
    renderCart();
    openCart();
  }

  if (removeButton) {
    const index = state.cart.findIndex((item) => item.id === Number(removeButton.dataset.remove));
    state.cart.splice(index, 1);
    renderCart();
  }

  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button === filterButton);
    });
    renderProducts();
  }

  if (authOpenButton) openAuth(authOpenButton.dataset.authOpen);
  if (authModeButton) setAuthMode(authModeButton.dataset.authMode);
  if (googleAuthButton) {
    loginWithGoogle();
  }
  if (suggestionButton) {
    setSearchQuery(suggestionButton.dataset.suggestion);
    closeSearch();
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  }

  if (event.target.closest("[data-cart-open]")) openCart();
  if (event.target.closest("[data-cart-close]")) closeCart();
  if (event.target.closest("[data-auth-close]")) closeAuth();
  if (event.target.closest("[data-search-close]")) closeSearch();
  if (event.target === overlay) {
    closeCart();
    closeAuth();
    closeSearch();
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

renderProducts();
renderCart();
setupRevealAnimation();

const checkoutBtn =
document.querySelector(".checkout-button");

const checkoutModal =
document.getElementById("checkoutModal");

checkoutBtn.addEventListener("click", () => {
    checkoutModal.style.display = "flex";
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

    const orderText = state.cart
      .map(item =>
        `${item.name} - ₹${item.price}`
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
});

