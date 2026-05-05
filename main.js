// theme
function loadSavedTheme() {
    document.body.className = localStorage.getItem('userTheme') || 'light-theme';
}
function changeTheme() {
    const isDark = document.body.classList.contains('light-theme');
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
    localStorage.setItem('userTheme', document.body.className);
}

// menu
function toggleMenu() {
    document.getElementById("myLinks").classList.toggle("show-menu");
}

// products page
function getCart() { return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(cart) { localStorage.setItem("cart", JSON.stringify(cart)); }

function addToCart(id) {
    let cart = getCart();
    let item = cart.find(p => p.id == id);
    item ? item.quantity++ : cart.push({ id, quantity: 1 });
    saveCart(cart);
    alert("Added to cart!");
}
function removeFromCart(id) {
    saveCart(getCart().filter(p => p.id != id));
    renderCart();
    syncCartButtons();
}
function changeQuantity(id, change) {
    let cart = getCart().map(item => {
        if (item.id == id) item.quantity += change;
        return item;
    }).filter(item => item.quantity > 0);
    saveCart(cart);
    renderCart();
}

// cart
function renderCart() {
    const container = document.getElementById("cartContainer");
    const totalEl = document.getElementById("totalPrice");
    if (!container) return;
    let cart = getCart();
    if (!cart.length) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        totalEl.innerText = "Total: 0 EGP";
        return;
    }
    let total = 0;
    container.innerHTML = cart.map(item => {
        let p = features.find(x => x.id == item.id);
        if (!p) return "";
        let price = p.price * (1 - (p.discount || 0));
        total += price * item.quantity;
        return `<div class="cart-item">
            <img src="${p.image}" class="cart-img">
            <div class="cart-info">
                <h3>${p.name}</h3>
                <p>${price.toFixed(0)} EGP</p>
                <div class="qty-controls">
                    <button onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
            </div>
        </div>`;
    }).join("");
    totalEl.innerText = "Total: " + total.toFixed(0) + " EGP";
}

// products page 
function renderFeatured() {
    const container = document.querySelector("#featured .content .row");
    if (!container) return;
    const cart = getCart();
    container.innerHTML = features.filter(p => p.id !== 0 && p.id !== 17).map(p => {
        const inCart = cart.some(item => item.id == p.id);
        const btnText = inCart ? "Remove From Cart" : "Add To Cart";
        const btnFunc = inCart ? "removeFromCart" : "addToCart";
        const finalPrice = (p.price * (1 - (p.discount || 0))).toFixed(0);
        return `<div class="item">
            ${p.discount ? `<p class="discount">-${p.discount * 100}%</p>` : ""}
            <div class="head">
                <div class="image-container">
                    <img src="${p.image}">
                    <div class="overlay-details"><h3>Specifications:</h3><p>${p.description}</p></div>
                </div>
                <div class="body">
                    <h4>${p.name}</h4>
                    <div class="boxprice">
                        <div class="label"><h4>Price: </h4></div>
                        <div class="value"><p class="discount-2">
                            ${p.discount ? `<del>${p.price} <sup>EGP</sup></del> ` : ""}
                            ${finalPrice}<sup> EGP</sup>
                        </p></div>
                    </div>
                    <button onclick="${btnFunc}(${p.id})">${btnText}</button>
                    <h6>hover to show details</h6>
                </div>
            </div>
        </div>`;
    }).join("");
}

function syncCartButtons() {
    const cart = getCart();
    document.querySelectorAll('.cart-btn').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        const inCart = cart.some(item => item.id == id);
        btn.textContent = inCart ? "Remove From Cart" : "Add To Cart";
        btn.setAttribute('onclick', inCart ? `removeFromCart(${id})` : `addToCart(${id})`);
    });
}

// contact us form
function initContactForm() {
    const form = document.getElementById('contact-form') || document.querySelector('.messageForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input');
        localStorage.setItem('lastMessage', JSON.stringify({
            senderName:  inputs[0]?.value || "",
            senderEmail: inputs[1]?.value || "",
            subject:     inputs[2]?.value || "",
            text:        form.querySelector('textarea')?.value || ""
        }));
        alert('Your message has been sent!');
        form.reset();
    });
}

// checkout page
function initCheckout() {
    const btn = document.querySelector('.btn-confirm');
    if (!btn) return;
    btn.addEventListener('click', function () {
        const inputs = document.querySelectorAll('.checkout-card input');
        const payment = document.querySelector('.checkout-card select')?.value;
        const name = inputs[0]?.value || "";
        const address = inputs[1]?.value || "";
        const phone = inputs[2]?.value || "";
        if (!name || !address || !phone || payment === "Select Method") {
            alert("Please fill in all fields.");
            return;
        }
        localStorage.setItem('lastOrder', JSON.stringify({ name, address, phone, payment }));
        alert("Order confirmed!");
    });
}

    // log in / register page 
function switchTab(tab) {
    const isLogin = tab === 'login';
    if (!document.getElementById('loginFields')) return;
    document.getElementById('loginFields').style.display    = isLogin ? 'block' : 'none';
    document.getElementById('registerFields').style.display = isLogin ? 'none' : 'block';
    document.getElementById('loginTab').classList.toggle('active', isLogin);
    document.getElementById('registerTab').classList.toggle('active', !isLogin);
    document.getElementById('formTitle').textContent = isLogin ? "Welcome Back" : "Create Account";
    document.getElementById('message').textContent = "";
}
function handleRegister() {
    const username = document.getElementById('regUsername').value.trim();
    const email    = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const msg      = document.getElementById('message');
    if (!username || !email || !password) { msg.style.color = "red"; msg.textContent = "All fields are required."; return; }
    if (password.length < 6) { msg.style.color = "orange"; msg.textContent = "Password must be at least 6 characters."; return; }
    localStorage.setItem('userData', JSON.stringify({ username, email, password }));
    msg.style.color = "green";
    msg.textContent = "Account created! You can now log in.";
    switchTab('login');
}
function handleLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const msg      = document.getElementById('message');
    const saved    = JSON.parse(localStorage.getItem('userData'));
    if (!username || !password) { msg.style.color = "red"; msg.textContent = "All fields are required."; return; }
    if (!saved) { msg.style.color = "red"; msg.textContent = "No account found. Please register first."; return; }
    if (saved.username === username && saved.password === password) {
        msg.style.color = "green"; msg.textContent = "Login successful! Welcome " + username;
    } else {
        msg.style.color = "red"; msg.textContent = "Wrong username or password.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadSavedTheme();
    renderCart();
    renderFeatured();
    syncCartButtons();
    initContactForm();
    initCheckout();
    document.addEventListener("click", function (e) {
        const menu = document.getElementById("myLinks");
        if (!menu) return;
        if (!menu.contains(e.target) && !e.target.closest('.nav-wrapper')) {
            menu.classList.remove("show-menu");
        }
    });
});
