// Restaurants + menu data with categories & veg/non-veg
const restaurantsData = [
  {
    id: "r1",
    name: "NLR Specials",
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: 30,
    distance: "2.1 km",
    emoji: "🍛",
    image:
      "https://images.pexels.com/photos/11170284/pexels-photo-11170284.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r1m1",
        name: "Nellore Chicken Dum Biryani",
        price: 240,
        tags: "Spicy • Non-Veg • Signature",
        category: "Biryani",
        veg: false
      },
      {
        id: "r1m2",
        name: "Special Mutton Biryani",
        price: 310,
        tags: "Non-Veg • Chef's Special",
        category: "Biryani",
        veg: false
      },
      {
        id: "r1m3",
        name: "Paneer Dum Biryani",
        price: 220,
        tags: "Veg • Mild",
        category: "Biryani",
        veg: true
      },
      {
        id: "r1m4",
        name: "Egg Fried Rice",
        price: 180,
        tags: "Non-Veg",
        category: "Fried Rice",
        veg: false
      },
      {
        id: "r1m5",
        name: "Double Ka Meetha",
        price: 90,
        tags: "Dessert",
        category: "Dessert",
        veg: true
      },
      {
        id: "r1m6",
        name: "Sweet Lassi",
        price: 70,
        tags: "Beverage",
        category: "Beverage",
        veg: true
      }
    ]
  },
  {
    id: "r2",
    name: "Bulugondla Family Restaurant",
    cuisine: "Indian",
    rating: 4.4,
    deliveryTime: 28,
    distance: "3.0 km",
    emoji: "🍽️",
    image:
      "https://images.pexels.com/photos/5920740/pexels-photo-5920740.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r2m1",
        name: "Family Chicken Biryani (4 pax)",
        price: 650,
        tags: "Family Pack • Non-Veg",
        category: "Biryani",
        veg: false
      },
      {
        id: "r2m2",
        name: "Veg Family Meal Combo",
        price: 520,
        tags: "Veg • 4 Roti • Rice",
        category: "Veg",
        veg: true
      },
      {
        id: "r2m3",
        name: "Butter Chicken with Rice",
        price: 260,
        tags: "Non-Veg",
        category: "Non-Veg",
        veg: false
      },
      {
        id: "r2m4",
        name: "Curd Rice",
        price: 140,
        tags: "Veg",
        category: "Veg",
        veg: true
      },
      {
        id: "r2m5",
        name: "Fruit Salad with Ice Cream",
        price: 150,
        tags: "Dessert • Ice Cream",
        category: "Dessert",
        veg: true
      }
    ]
  },
  {
    id: "r3",
    name: "Shoel Biriyani",
    cuisine: "Arabian",
    rating: 4.5,
    deliveryTime: 32,
    distance: "3.5 km",
    emoji: "🍗",
    image:
      "https://images.pexels.com/photos/11232406/pexels-photo-11232406.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r3m1",
        name: "Chicken Majboos Biryani",
        price: 280,
        tags: "Arabian • Non-Veg",
        category: "Biryani",
        veg: false
      },
      {
        id: "r3m2",
        name: "Shoel Special Mandi (Half)",
        price: 420,
        tags: "Mandi • Non-Veg",
        category: "Mandi",
        veg: false
      },
      {
        id: "r3m3",
        name: "Shoel Family Mandi (4 pax)",
        price: 980,
        tags: "Family Pack • Mandi",
        category: "Mandi",
        veg: false
      },
      {
        id: "r3m4",
        name: "Grill Chicken (Half)",
        price: 260,
        tags: "Non-Veg",
        category: "Non-Veg",
        veg: false
      },
      {
        id: "r3m5",
        name: "Kunafa Slice",
        price: 180,
        tags: "Dessert",
        category: "Dessert",
        veg: true
      }
    ]
  },
  {
    id: "r4",
    name: "Adhil Mandi House",
    cuisine: "Arabian",
    rating: 4.3,
    deliveryTime: 35,
    distance: "4.0 km",
    emoji: "🥘",
    image:
      "https://images.pexels.com/photos/1395316/pexels-photo-1395316.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r4m1",
        name: "Chicken Mandi (Single)",
        price: 260,
        tags: "Mandi • Non-Veg",
        category: "Mandi",
        veg: false
      },
      {
        id: "r4m2",
        name: "Adhil Special Family Mandi",
        price: 1050,
        tags: "Family Pack • Non-Veg",
        category: "Mandi",
        veg: false
      },
      {
        id: "r4m3",
        name: "Fish Fry with Rice",
        price: 280,
        tags: "Sea Food • Non-Veg",
        category: "Non-Veg",
        veg: false
      },
      {
        id: "r4m4",
        name: "Mint Lemon Cooler",
        price: 90,
        tags: "Beverage",
        category: "Beverage",
        veg: true
      }
    ]
  },
  {
    id: "r5",
    name: "Flash Foods",
    cuisine: "Fast Food",
    rating: 4.2,
    deliveryTime: 22,
    distance: "1.9 km",
    emoji: "🍔",
    image:
      "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r5m1",
        name: "Classic Veg Burger",
        price: 120,
        tags: "Veg • Cheese",
        category: "Burger",
        veg: true
      },
      {
        id: "r5m2",
        name: "Chicken Crispy Burger",
        price: 150,
        tags: "Non-Veg",
        category: "Burger",
        veg: false
      },
      {
        id: "r5m3",
        name: "Peri Peri Fries",
        price: 110,
        tags: "Veg",
        category: "Veg",
        veg: true
      },
      {
        id: "r5m4",
        name: "Cheese Burst Pizza (7\")",
        price: 260,
        tags: "Veg • Cheese",
        category: "Pizza",
        veg: true
      },
      {
        id: "r5m5",
        name: "Cold Coffee",
        price: 110,
        tags: "Beverage",
        category: "Beverage",
        veg: true
      },
      {
        id: "r5m6",
        name: "Brownie with Ice Cream",
        price: 150,
        tags: "Dessert • Ice Cream",
        category: "Ice Cream",
        veg: true
      }
    ]
  },
  {
    id: "r6",
    name: "Bhimishetty’s Ruchulu",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: 27,
    distance: "2.7 km",
    emoji: "🥗",
    image:
      "https://images.pexels.com/photos/3214161/pexels-photo-3214161.jpeg?auto=compress&cs=tinysrgb&w=400",
    menu: [
      {
        id: "r6m1",
        name: "Veg Meals",
        price: 160,
        tags: "Veg • Homely",
        category: "Veg",
        veg: true
      },
      {
        id: "r6m2",
        name: "Gongura Chicken with Rice",
        price: 230,
        tags: "Spicy • Non-Veg",
        category: "Non-Veg",
        veg: false
      },
      {
        id: "r6m3",
        name: "Veg Fried Rice",
        price: 170,
        tags: "Veg",
        category: "Fried Rice",
        veg: true
      },
      {
        id: "r6m4",
        name: "Buttermilk",
        price: 50,
        tags: "Beverage",
        category: "Beverage",
        veg: true
      },
      {
        id: "r6m5",
        name: "Vanilla Ice Cream",
        price: 80,
        tags: "Ice Cream",
        category: "Ice Cream",
        veg: true
      }
    ]
  }
];

let cart = [];
let orders = [];

document.addEventListener("DOMContentLoaded", () => {
  const views = document.querySelectorAll(".view");
  const navLinks = document.querySelectorAll(".nav-link");
  const goRestaurantsButtons = document.querySelectorAll(".go-restaurants");
  const mainCategoryCards = document.querySelectorAll(".main-category-card");
  const restaurantListEl = document.getElementById("restaurant-list");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const cartEmptyEl = document.getElementById("cart-empty");
  const cartContentEl = document.getElementById("cart-content");
  const cartItemsEl = document.getElementById("cart-items");
  const cartSubtotalEl = document.getElementById("cart-subtotal");
  const cartDeliveryEl = document.getElementById("cart-delivery");
  const cartTotalEl = document.getElementById("cart-total");

  const checkoutForm = document.getElementById("checkout-form");

  const ordersEmptyEl = document.getElementById("orders-empty");
  const ordersListEl = document.getElementById("orders-list");

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Filter state
  let currentCuisine = "all";
  let currentType = "all";
  let currentSearchTerm = "";

  // Flatten dishes (for home page rows)
  const allDishes = restaurantsData.flatMap((r) =>
    r.menu.map((item) => ({
      ...item,
      restaurantId: r.id,
      restaurantName: r.name,
      rating: r.rating
    }))
  );

  // Navigation
  function showView(id) {
    views.forEach((v) => {
      v.classList.toggle("active", v.id === id);
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === id);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      if (target) showView(target);
    });
  });

  goRestaurantsButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      if (type) {
        currentType = type;
        updateFilterTypeButtons(type);
      }
      showView("restaurants");
      updateRestaurantView();
    });
  });

  // Big category cards on home
  mainCategoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const type = card.dataset.jumpType;
      if (type) {
        currentType = type;
        updateFilterTypeButtons(type);
      }
      showView("restaurants");
      updateRestaurantView();
    });
  });

  function updateFilterTypeButtons(type) {
    const typeButtons = document.querySelectorAll(".filter-type-btn");
    typeButtons.forEach((b) => {
      b.classList.toggle("active", b.dataset.type === type);
      if (type === "all" && b.dataset.type === "all") {
        b.classList.add("active");
      }
      if (!type) b.classList.remove("active");
    });
  }

  // Restaurant cards (respect currentType filter for visible dishes)
  function createRestaurantCard(restaurant) {
    const card = document.createElement("article");
    card.className = "restaurant-card";

    let visibleMenu = restaurant.menu;

    if (currentType !== "all") {
      visibleMenu = restaurant.menu.filter((item) => {
        if (currentType === "Veg") return item.veg === true;
        if (currentType === "Non-Veg") return item.veg === false;
        return item.category === currentType;
      });
      if (visibleMenu.length === 0) visibleMenu = restaurant.menu;
    }

    card.innerHTML = `
      <div class="restaurant-header">
        <div class="restaurant-image-wrapper">
          <div class="restaurant-image" style="background-image:url('${restaurant.image}')"></div>
          <span class="restaurant-tag">${restaurant.emoji}</span>
        </div>
        <div class="restaurant-main">
          <h3>${restaurant.name}</h3>
          <div class="restaurant-meta">
            <span class="restaurant-pill">${restaurant.cuisine}</span>
            <span class="restaurant-pill restaurant-rating">★ ${restaurant.rating}</span>
            <span class="restaurant-pill">${restaurant.deliveryTime} mins</span>
            <span class="restaurant-pill">${restaurant.distance}</span>
          </div>
        </div>
      </div>
      <div class="menu">
        ${visibleMenu
          .map(
            (item) => `
          <div class="menu-item">
            <div class="menu-info">
              <span class="menu-name">${item.name}</span>
              <span class="menu-meta">${item.tags}</span>
            </div>
            <div class="menu-actions">
              <span class="menu-price">₹${item.price}</span>
              <button class="menu-add-btn"
                data-add-to-cart="true"
                data-restaurant-id="${restaurant.id}"
                data-item-id="${item.id}">
                Add
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    return card;
  }

  function renderRestaurants(data) {
    restaurantListEl.innerHTML = "";
    if (!data.length) {
      restaurantListEl.innerHTML =
        '<div class="empty-state">No restaurants found. Try another filter.</div>';
      return;
    }
    data.forEach((restaurant) => {
      restaurantListEl.appendChild(createRestaurantCard(restaurant));
    });
  }

  function updateRestaurantView() {
    let data = restaurantsData.filter((r) => {
      // cuisine filter
      if (currentCuisine !== "all" && r.cuisine !== currentCuisine) return false;

      // search
      if (currentSearchTerm) {
        const term = currentSearchTerm;
        const inName = r.name.toLowerCase().includes(term);
        const inCuisine = r.cuisine.toLowerCase().includes(term);
        const inMenu = r.menu.some(
          (m) =>
            m.name.toLowerCase().includes(term) ||
            (m.category && m.category.toLowerCase().includes(term))
        );
        if (!inName && !inCuisine && !inMenu) return false;
      }

      // type filter: restaurant must have at least one matching item
      if (currentType !== "all") {
        if (currentType === "Veg") {
          return r.menu.some((m) => m.veg === true);
        }
        if (currentType === "Non-Veg") {
          return r.menu.some((m) => m.veg === false);
        }
        return r.menu.some((m) => m.category === currentType);
      }

      return true;
    });

    renderRestaurants(data);
  }

  // Initial render
  updateRestaurantView();

  // Cuisine filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cuisine = btn.dataset.cuisine;
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCuisine = cuisine || "all";
      updateRestaurantView();
    });
  });

  // Type filter buttons
  const typeFilterButtons = document.querySelectorAll(".filter-type-btn");
  typeFilterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.type;
      typeFilterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentType = type || "all";
      updateRestaurantView();
    });
  });

  // Search
  function handleSearch() {
    const term = searchInput.value.trim().toLowerCase();
    currentSearchTerm = term;
    showView("restaurants");
    updateRestaurantView();
  }

  searchBtn.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  });

  // Home page category rows
  function renderHomeCategory(filterFn, containerId, limit = 12) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const dishes = allDishes.filter(filterFn).slice(0, limit);

    if (!dishes.length) {
      container.innerHTML =
        '<div class="empty-state small">No items yet in this category.</div>';
      return;
    }

    container.innerHTML = dishes
      .map(
        (d) => `
      <article class="dish-card">
        <div class="dish-main">
          <div class="dish-name">${d.name}</div>
          <div class="dish-meta">${d.restaurantName} • ★ ${d.rating}</div>
          <div class="dish-tags">${d.tags}</div>
        </div>
        <div class="dish-side">
          <div class="dish-price">₹${d.price}</div>
          <button class="dish-add-btn"
            data-add-to-cart="true"
            data-restaurant-id="${d.restaurantId}"
            data-item-id="${d.id}">
            Add
          </button>
        </div>
      </article>
    `
      )
      .join("");
  }

  // Render all home rows
  renderHomeCategory((d) => d.category === "Biryani", "home-biryani-list");
  renderHomeCategory((d) => d.category === "Mandi", "home-mandi-list");
  renderHomeCategory(
    (d) => d.category === "Pizza" || d.category === "Burger" || d.category === "Veg",
    "home-fastfood-list"
  );
  renderHomeCategory(
    (d) => d.category === "Dessert" || d.category === "Ice Cream" || d.category === "Beverage",
    "home-dessert-list"
  );

  // Cart logic
  function addToCart(restaurantId, itemId) {
    const restaurant = restaurantsData.find((r) => r.id === restaurantId);
    if (!restaurant) return;

    const item = restaurant.menu.find((m) => m.id === itemId);
    if (!item) return;

    const existing = cart.find(
      (c) => c.itemId === itemId && c.restaurantId === restaurantId
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        restaurantId,
        restaurantName: restaurant.name,
        itemId: item.id,
        name: item.name,
        price: item.price,
        qty: 1
      });
    }

    renderCart();
  }

  function updateCartItem(itemId, restaurantId, delta) {
    const row = cart.find(
      (c) => c.itemId === itemId && c.restaurantId === restaurantId
    );
    if (!row) return;
    row.qty += delta;
    if (row.qty <= 0) {
      cart = cart.filter(
        (c) => !(c.itemId === itemId && c.restaurantId === restaurantId)
      );
    }
    renderCart();
  }

  function removeCartItem(itemId, restaurantId) {
    cart = cart.filter(
      (c) => !(c.itemId === itemId && c.restaurantId === restaurantId)
    );
    renderCart();
  }

  function renderCart() {
    if (cart.length === 0) {
      cartEmptyEl.classList.remove("hidden");
      cartContentEl.classList.add("hidden");
      return;
    }

    cartEmptyEl.classList.add("hidden");
    cartContentEl.classList.remove("hidden");

    cartItemsEl.innerHTML = "";
    let subtotal = 0;

    cart.forEach((row) => {
      const itemTotal = row.qty * row.price;
      subtotal += itemTotal;

      const el = document.createElement("div");
      el.className = "cart-item";
      el.innerHTML = `
        <div class="cart-item-main">
          <span class="cart-item-name">${row.name}</span>
          <span class="cart-item-restaurant">${row.restaurantName}</span>
        </div>
        <div class="cart-controls">
          <div class="cart-qty">
            <button
              type="button"
              data-cart-minus="true"
              data-restaurant-id="${row.restaurantId}"
              data-item-id="${row.itemId}"
            >-</button>
            <span>${row.qty}</span>
            <button
              type="button"
              data-cart-plus="true"
              data-restaurant-id="${row.restaurantId}"
              data-item-id="${row.itemId}"
            >+</button>
          </div>
          <span class="cart-price">₹${itemTotal}</span>
          <button
            type="button"
            class="cart-remove"
            data-cart-remove="true"
            data-restaurant-id="${row.restaurantId}"
            data-item-id="${row.itemId}"
          >
            Remove
          </button>
        </div>
      `;
      cartItemsEl.appendChild(el);
    });

    const delivery = subtotal > 0 ? 40 : 0;
    const total = subtotal + delivery;

    cartSubtotalEl.textContent = `₹${subtotal}`;
    cartDeliveryEl.textContent = `₹${delivery}`;
    cartTotalEl.textContent = `₹${total}`;
  }

  // Event delegation for Add / + / - / Remove
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add-to-cart]");
    if (addBtn) {
      const restaurantId = addBtn.dataset.restaurantId;
      const itemId = addBtn.dataset.itemId;
      addToCart(restaurantId, itemId);
      showView("cart");
      return;
    }

    const plusBtn = e.target.closest("[data-cart-plus]");
    if (plusBtn) {
      const restaurantId = plusBtn.dataset.restaurantId;
      const itemId = plusBtn.dataset.itemId;
      updateCartItem(itemId, restaurantId, 1);
      return;
    }

    const minusBtn = e.target.closest("[data-cart-minus]");
    if (minusBtn) {
      const restaurantId = minusBtn.dataset.restaurantId;
      const itemId = minusBtn.dataset.itemId;
      updateCartItem(itemId, restaurantId, -1);
      return;
    }

    const removeBtn = e.target.closest("[data-cart-remove]");
    if (removeBtn) {
      const restaurantId = removeBtn.dataset.restaurantId;
      const itemId = removeBtn.dataset.itemId;
      removeCartItem(itemId, restaurantId);
      return;
    }
  });

  // Checkout
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const formData = new FormData(checkoutForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const payment = formData.get("payment");

    let subtotal = 0;
    cart.forEach((row) => {
      subtotal += row.qty * row.price;
    });
    const delivery = subtotal > 0 ? 40 : 0;
    const total = subtotal + delivery;

    const order = {
      id: Date.now(),
      customerName: name,
      phone,
      address,
      payment,
      total,
      placedAt: new Date().toLocaleString(),
      items: cart.map((c) => ({
        name: c.name,
        qty: c.qty,
        from: c.restaurantName
      }))
    };

    orders.unshift(order);
    cart = [];
    renderCart();
    renderOrders();
    checkoutForm.reset();
    alert("Order placed successfully!");
    showView("orders");
  });

  function renderOrders() {
    if (orders.length === 0) {
      ordersEmptyEl.classList.remove("hidden");
      ordersListEl.innerHTML = "";
      return;
    }

    ordersEmptyEl.classList.add("hidden");
    ordersListEl.innerHTML = "";

    orders.forEach((order) => {
      const card = document.createElement("article");
      card.className = "order-card";
      card.innerHTML = `
        <div class="order-header">
          <div>
            <div class="order-id">Order #${order.id}</div>
            <div class="order-meta">${order.placedAt}</div>
          </div>
          <div class="order-total">₹${order.total}</div>
        </div>
        <div class="order-meta">
          ${order.customerName} • ${order.phone}<br/>
          ${order.address}<br/>
          Payment: ${order.payment}
        </div>
        <div class="order-items">
          <strong>Items:</strong>
          <ul>
            ${order.items
              .map(
                (item) =>
                  `<li>${item.qty} × ${item.name} <span style="color:#9ca3af;">(${item.from})</span></li>`
              )
              .join("")}
          </ul>
        </div>
      `;
      ordersListEl.appendChild(card);
    });
  }

  // Initial
  renderCart();
  renderOrders();
});
