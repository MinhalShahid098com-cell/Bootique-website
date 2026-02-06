
 
 // PRODUCTS DATA
        const products = [
            // === WINTER ===
            { id: 1, name: "Khaddar Printed", cat: "Winter", price: 5593, rating: 5, img: "winter8.webp", desc: "<strong>KHADDAR PRINTED SHIRT</strong> <br><strong>PLAIN CHIFFON DUPATTA WITH LACE</strong> <br><strong>KHADDAR PRINTED TROUSERS</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 2, name: "Dhanak 3PC", cat: "Winter", price: 8775, rating: 4, img: "winter6.webp", desc: "<strong>DYED EMBROIDERED DHANAK SHIRT</strong> <br><strong>DYED DHANAK TROUSER</strong> <br><strong>PASHMINA SHAW</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 3, name: "#PC Printed Suit", cat: "Winter", price: 4796, rating: 4, img: "winter7.webp", desc: "<strong>PRINTED BLENDED RAW SILK SHIRT</strong> <br><strong>PRINTED BLENDED  RAW SILK TROUSER</strong> <br><strong>PRINTED MONAR DUPATTA</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 4, name: "Dhanak 3PC", cat: "Winter", price: 8775, rating: 4, img: "winter5.webp", desc: "<strong>DYED EMBROIDERED DHANAK SHIRT</strong>  <br><strong>DYED DHANAK TROUSER</strong> <br><strong>PASHMINA SHAWL</strong> ",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 5, name: "Sonnet", cat: "Winter", price: 8032, rating: 4, img: "winter4.webp", desc:"Sonnet is a poetic ode to winter, crafted in premium Italian wool in a beautiful cocoa hue. Delicate embroidery graces the front and sleeves, complemented by a jacquard shawl in deep beautiful patterns. <br><strong>Fabric Italian wool</strong>  <br><strong>Embroidered front</strong> <br><strong>Embroidered sleeves</strong> <br><strong>Plain dyed back.</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 6, name: "Liana", cat: "Winter", price: 8898, rating: 4, img: "winter3.webp", desc: "Gentle and graceful, Liana is a canvas of soft Karandi, adorned with delicate floral embroidery in shades of blush and lavender. The subtle details on the shirt and trousers exude timeless femininity, making it a versatile piece for cozy afternoons or cherished winter gatherings.<br><strong>Shirt</strong>: Printed Embroidered Slub Karandi Front</strong> <br><strong>Printed Back</strong> <br><strong>Printed Sleeves</strong> <br><strong>Organza Embroidered Patch</strong> <br><strong>Trousers</strong>: Printed Slub Karandi <br><strong>Dupatta</strong>: Printed Chiffon",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 7, name: "Nysa", cat: "Winter", price: 7563, rating: 4, img: "winter2.webp", desc: "Bold yet graceful, Nysa transforms winter elegance with its striking floral story. Set against a serene Karandi base, the shirt and trousers bloom with vibrant embroidery, reminiscent of a garden alive with color even in the chill of the season.<br><strong>Shirt</strong> :Printed Embroidered Slub Karandi Front</strong> <br><strong>Printed Back</strong> <br><strong>Printed Sleeves</strong> <br><strong>Embroidered Daman Patch</strong> <br><strong>Trousers</strong> : Printed Slub Karandi <br><strong>Dupatta</strong> :Printed Chiffon",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 8, name: "Fia", cat: "Winter", price: 8012, rating: 4, img: "winter1.webp", desc: "Fia stands out in beautiful purple, crafted in premium Italian wool with exquisite embroidery on the neckline, sleeves, and hem. A beatiful jacquard shawl enhances its regal presence, making it a true symbol of winter luxury. <br><strong>Fabric Italian wool</strong>  <br><strong>Embroidered front</strong> <br><strong>Embroidered sleeves</strong> <br><strong>Embroidered Organza Daman & Sleeves Patch</strong> <br><strong>Plain dyed back</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },

            // === CASUAL ===
            { id: 9, name: "2 Piece Embroidered Suit", cat: "Casual", price: 6990, rating: 5, img: "new1.webp", desc: "A grey 2 piece suit with blue embroidery, cool toned contrast with neat detailing for a fresh, coordinated look.<br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 10, name: "2 Piece Solid Suit", cat: "Casual", price:  5990, rating: 5, img: "new2.webp", desc: "A black basic cord featuring a button down shirt, clean, coordinated, and easy to style for everyday wear. <br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 11, name: "Silk Wrap", cat: "Casual", price: 15000, rating: 5, img: "new3.webp", desc: "A pink 2 piece cord set dotted in black, relaxed fit with subtle detailing for a lively, everyday ensemble. <br><strong>Fabric</strong>: Polka Dots <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 12, name: "3 Piece Embroidered Suit", cat: "Casual", price:  12990, rating: 5, img: "new4.webp", desc: "A purple embroidered suit paired with a shawl, rich tones and detailed accents create a vibrant, coordinated ensemble.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 13, name: "2 Piece Embroidered Linen Suit", cat: "Casual", price: 6990, rating: 5, img: "new5.webp", desc: "A maroon embroidered 2 piece linen dress for women, bold, vibrant, and designed to make a lively style statement. <br><strong>Fabric</strong>: Linen  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 14, name: "3 Piece Embroidered Linen Suit", cat: "Casual", price: 11490, rating: 5, img: "new6.webp", desc: "Elegant brown linen 3-piece suit featuring refined black embroidery. Breathable fabric with a tailored fit, perfect for get togethers and formal occasions. <br><strong>Fabric</strong>: Linen <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 15, name: "2 Piece Solid Suit", cat: "Casual", price: 5990, rating: 5, img: "new7.webp", desc: "A classic navy blue solid 2 piece set designed for effortless elegance. Perfectly coordinated for a polished, versatile look.  <br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 16, name: "3 Piece Embroidered Dobby Suit", cat: "Casual", price: 9490, rating: 5, img: "new8.webp", desc: "A graceful green 3-piece set featuring an intricately embroidered shirt paired with a printed dupatta, Perfectly balanced for a refined look. <br><strong>Fabric</strong>: Dobby <br><strong>Ready to Wear</strong>.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            
            // === summer ===
            { id: 17, name: "2PC Printed Cotton", cat: "Summer", price: 4170, rating: 4, img: "summer1.webp", desc: "<strong>DIGITAL PRINTED COTTON LAWN SHIRT</strong> <br><strong>ORGANZA EMBROIDERED PATCH</strong> <br><strong>DIGITAL PRINTED COTTON LAWN TROUSERS</strong>",
              care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 18, name: "Printed Cotton Lawn", cat: "Summer", price: 5370., rating: 4, img: "summer2.jpg",desc: "<strong>DIGITAL PRINTED COTTON LAWN SHIRT</strong> <br><strong>ORGANZA EMBROIDERED PATCH</strong> <br><strong>DIGITAL PRINTED COTTON LAWN TROUSERS</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 19, name: "2PC Cotton", cat: "Summer", price: 7470, rating: 4, img: "summer3.webp", desc: "<strong>100% COTTON CAMBRIC</strong> <br><strong>DYED EMBROIDERED COTTON SHIRT</strong> <br><strong>DYED COTTON TROUSERS WITH EMBROIDERED</strong> ",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 20, name: "Dyed Embroidered Cotton ", cat: "Summer", price: 42000, rating: 4, img: "summer4.webp", desc: "<strong>100% COTTON CAMBRIC</strong> <br><strong>DYED EMBROIDERED  COTTON SHIRT</strong> <br><strong>DYED EMBROIDERED COTTON FARSHI SHALWAR</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 21, name: "3PC Printed Silk Viscose", cat: "Summer", price: 8225, rating: 4, img: "summer5.webp", desc: "<strong>PRINTED SILK VISCOSE SHIRT WITH EMBROIDERED PATCH</strong> <br><strong>PRINTED SILK VISCOSE TROUSER</strong> <br><strong>PRINTED SILK DUPATTA WITH LACE</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 22, name: "3PC Printed Lawn", cat: "Summer", price: 6990, rating: 4, img: "summer6.webp", desc: "<strong>DIGITAL PRINTED LAWN SHIRT</strong> <br><strong>DIGITAL PRINTED LAWN TROUSERS</strong> <br><strong>DIGITAL PRINTED LAWN DUPATTA</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 23, name: "3PC Embroidered Suit ", cat: "Summer", price: 6300, rating: 4, img: "summer7.webp", desc: "<strong>PRINTED SILK VISCOSE SHIRT WITH EMBROIDERED PATCH</strong> <br><strong>PRINTED VISCOSE TROUSER</strong> <br><strong>PRINTED SILK DUPATTA WITH LACE</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },

            // === FORMAL ===
            { id: 24, name: "YURA", cat: "Formal", price: 11340, rating: 4, img: "formal1.webp", 
                desc: "Exuding timeless elegance, this Plum Violet 3-piece pret is a masterpiece in refined craftsmanship. The straight-cut lawn shirt features a rounded hemline with scalloped finishing, paired with a round neckline and slit, adorned with delicate embroidered motifs along the placket. The full-length shirt is enhanced with scalloped edges and graceful floral embroidery, while all-over tonal sprays add subtle charm. Its straight cambric cotton trousers are styled with embroidered scalloped borders at the ankle hem for a chic finish. The look is completed with a net dupatta, beautifully framed with four-sided embroidered scalloped borders, creating a statement of effortless sophistication <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Net <br><strong>Color</strong>: Plum Viole",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 25, name: "VAIIRA", cat: "Formal", price: 15900, rating: 4, img: "formal2.webp", 
                desc: "Step into elegant charm with this 3-Piece Pret in a sophisticated Mauve Orchid hue. The lawn shirt features a round V-neck with delicate pleat detailing, a short silhouette with a round embroidered hem, and loose sleeves accented with scalloped embroidery borders. Paired with a farshi shalwar adorned with embroidered hems and a flowing printed silk dupatta, this ensemble exudes timeless grace with a contemporary flair <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Silk Printed <br><strong>Color</strong>: Mauve Orchid.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 26, name: "SEVARIN", cat: "Formal", price: 16900, rating: 4, img: "formal3.webp", 
                desc: "Fresh and refined, this Misty Jade 3-Piece Pret captures effortless elegance with a modern silhouette. The lawn A-line long shirt features a four-panel design, a clean round neckline accented with buttons, and a delicate lace finish at the hem, paired with three-quarter sleeves adorned with embroidered hems. Completed with straight-fit cambric cotton trousers with embroidered detailing and a graceful silk printed dupatta, this ensemble is timelessly chic <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric: Cambric Cotton <br><strong>>Dupatta Fabric</strong>: Silk Printed <br><strong>Color</strong>: Misty Jade",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 27, name: "ZARA", cat: "Formal", price: 89000, rating: 4, img: "formal4.webp", 
                desc: "Embrace understated luxury with this Grey 3-Piece Pret, crafted in luminous Silver Zari Net for a refined festive look. The short shirt features a graceful boat neckline, fully embroidered with intricate adda work for timeless elegance. Fitted sleeves are richly embroidered and finished with delicate pearl detailing, adding a soft feminine touch. A straight hemline adorned with pearl accents enhances the shirt’s contemporary silhouette. The look is paired with a fully embroidered flared gharara, designed with fluid movement and a wide embroidered hem. Completing the ensemble is a Silver Zari Net dupatta, finished with four-sided scalloped embroidered borders. A perfect fusion of classic craftsmanship and modern sophistication. <br><strong>Shirt Fabric</strong>: Silver Zari Net <br><strong>Garrara Fabric</strong>: Silver Zari Net <br><strong>Dupatta Fabric</strong>: Silver Zari Net <br><strong>Color</strong>: Grey",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 28, name: "OCÉANE", cat: "Formal", price: 17940, rating: 4, img: "formal5.webp", 
                desc: "Radiate elegance in this Royal Blue 3-piece micro velvet ensemble, a masterpiece of luxury and grace. The shirt features a sweetheart embroidered neckline with an all-over embroidery spray and detailed borders, exuding refined charm. Its fully embroidered sleeves add a touch of opulence, perfectly paired with flared trousers adorned with contrast scalloped embroidered hems. The ensemble is completed with a matching russian silk dupatta, beautifully framed with all-side embroidered borders for a truly regal finish.<br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Micro Velvet <br><strong>Bottom Fabric</strong>: Korean Silk <br><strong>Dupatta Fabric</strong>: Russian Silk <br><strong>Color</strong>: Royal Blue",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 29, name: "ZAIRAH", cat: "Formal", price: 17940, rating: 4, img: "formal6.webp", 
                desc: "Radiate timeless elegance in this rich gold 3-piece pret outfit, designed to make a statement at every occasion. The high V-neckline adds structure to a fully embroidered tissue shirt, delicately hand-embellished for an opulent finish. Its long silhouette flows gracefully, paired with quarter sleeves and flared tissue pants that add a touch of drama. The separate lining ensures comfort without compromising the luxurious feel. A matching tissue dupatta, edged with intricate four-sided embroidered borders, completes the look with effortless sophistication <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Tissue <br><strong>Trouser Fabric</strong>: Tissue <br><strong>Dupatta Fabric</strong>: Tissue <br><strong>Color</strong>: Rich Gold",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
         { id: 30, name: "INARAH", cat: "Formal", price: 14500, rating: 4, img: "formal7.jpg", 
                desc: "Make a statement in this 3-Piece Pret in a rich Dark Purple hue. The lawn shirt features an embroidered boat neckline with a front slit, a short silhouette with lace-accented side slits and hem, and loose sleeves finished with delicate embroidery. Paired with a skinny cambric cotton shalwar and a flowing chiffon dupatta adorned with embroidered four-sided borders, this ensemble blends modern sophistication with timeless elegance.<br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Chiffon <br><strong>Color</strong>: Dark Purple",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
        ];

        // GLOBAL VARIABLES
        let cart = [];
        let selectedSize = null;

        // RENDER PRODUCTS
        function renderProducts(data = products) {
            document.getElementById('productGrid').innerHTML = data.map(p => `
                <div class="group product-card cursor-pointer">
                    <div class="aspect-[3/4] overflow-hidden bg-[#111] mb-6 relative" onclick="openDetails(${p.id})">
                        <img src="${p.img}" class="w-full h-full object-cover grayscale transition-all duration-1000">
                       <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                         <span class="view-details-btn">
                             View Details </span>
                             </div>
                              </div>
                              <div class="star-rating mb-2">${'★'.repeat(p.rating)}${'☆'.repeat(5 - p.rating)}</div>
                              <p class="text-[10px] text-amber-500 uppercase tracking-widest mb-1">${p.cat}</p>
                              <div class="flex justify-between font-light uppercase text-xs tracking-wider">
                                 <span>${p.name}</span>
                                 <span>PKR ${p.price.toLocaleString()}</span>
                                 </div>
                                 </div>
                                `).join('');
                            }
                            
                            // SORT PRODUCTS
                            function sortItems() {
                                const order = document.getElementById('sortOrder').value;
                                let sortedData = [...products]; 
                                if (order === 'low') {
                                    sortedData.sort((a, b) => a.price - b.price);
                                } else if (order === 'high') {
                                    sortedData.sort((a, b) => b.price - a.price);
                                }
                                
                                renderProducts(sortedData);
                             }

                            function filterCategory(cat) {
    const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);

    // Update heading dynamically
    const heading = document.getElementById('catTitle');
    heading.innerText = cat === 'all' ? 'Our Collection' : `${cat} Collection`;

    // Smooth scroll to products section
    const shopSection = document.getElementById('shop');
    shopSection.scrollIntoView({ behavior: 'smooth' });
}


                            // SEARCH PRODUCTS
                            function searchProducts() { 
                                const q = document.getElementById('searchBar').value.toLowerCase(); renderProducts(products.filter(p => p.name.toLowerCase().includes(q))); 
                            }
                            
                            renderProducts();

                            // PRODUCT DETAILS MODAL
                           function openDetails(id) {
    const p = products.find(prod => prod.id === id);
    document.getElementById('detailImg').src = p.img;
    document.getElementById('detailName').innerText = p.name;
    document.getElementById('detailCat').innerText = p.cat;
    document.getElementById('detailPrice').innerText = `PKR ${p.price.toLocaleString()}`;
    document.getElementById('detailStars').innerText = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);
    document.getElementById('detailAddBtn').onclick = () => addToCart(p.id);
    
    // Render HTML tags
    document.getElementById('detailDesc').innerHTML = p.desc;
    document.getElementById('detailCare').innerHTML = p.care
        ? p.care.map(item => `<li>${item}</li>`).join('') : 'N/A';

    const overlay = document.getElementById('productDetailView');
    overlay.classList.add('details-open');
    document.body.style.overflow = 'hidden'; // prevent background scroll
}

// CLOSE PRODUCT DETAILS OVERLAY
function closeDetails() {
    const overlay = document.getElementById('productDetailView');
    overlay.classList.remove('details-open');
    document.body.style.overflow = 'auto'; // restore scrolling
}

                            

                            
                            // Accordion toggle logic
                           const accBtns = document.querySelectorAll(".accordion-btn");
                           accBtns.forEach(btn => {
                           btn.addEventListener("click", () => {
                           const content = btn.nextElementSibling;
                           content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
                           });
                           });

                            // MOBILE MENU TOGGLE
                            function toggleMenu() {
                                const menu = document.getElementById('mobileMenu');
                                const btn = document.getElementById('menuBtn');
                                
                                menu.classList.toggle('menu-open');
                                 btn.classList.toggle('open');
                                 
                                 if (menu.classList.contains('menu-open')) {
                                    document.body.style.overflow = 'hidden';
                                
                                } else {
                                    document.body.style.overflow = 'auto';
                                }
                            }
                            
                            // CART FUNCTIONS
                            function addToCart(id) {
                                const item = products.find(p => p.id === id);
                                cart.push({ ...item, size: selectedSize || 'M' });
                                updateCart();
                                toggleCart();
                            }

                           function updateCart() {
                             document.getElementById('cartCount').innerText = cart.length;
                             const container = document.getElementById('cartItems');
                             container.innerHTML = cart.map((item, index) => `
                             <div class="flex gap-4 items-center">
                                <img src="${item.img}" class="w-16 h-20 object-cover">
                                <div class="flex-1 text-[10px] uppercase">
                                <h4 class="font-bold">${item.name}</h4>
                                <p class="text-amber-500">PKR ${item.price.toLocaleString()}</p>
                            </div>
                            <button onclick="cart.splice(${index},1); updateCart()">&times;</button>
                            </div>
                            `).join('');
                            const total = cart.reduce((sum, item) => sum + item.price, 0);
                            document.getElementById('totalPrice').innerText = `PKR ${total.toLocaleString()}`;
                        }
                        
                        // Size selection
                        function selectSize(size, element) {
                            selectedSize = size;
                            
                            const buttons = element.parentElement.querySelectorAll('.size-btn');
                            buttons.forEach(btn => btn.classList.remove('active'));
                            element.classList.add('active');
                        }
                        
                        // Cart button logic
                        function checkout() {
                            if (cart.length === 0) {
                            alert("👜 Your bag is empty!");
                            return;
                        }
                        
                        let message = "Aura Closet Order:%0A------------------%0A";
                        cart.forEach(item => {
                        message += `- ${item.name} (${item.size}): PKR ${item.price.toLocaleString()}%0A`;
                        });
                        message += `%0A*Total: ${document.getElementById('totalPrice').innerText}*`;

                        // Redirect to WhatsApp
                        window.open(`https://wa.me/923001234567?text=${message}`);
                        }

                        // Cart slider 
                        function toggleCart() {
                        document.getElementById('cartSidebar').classList.toggle('cart-open');
                        }
                        
                        // LOGIN MODAL
                        window.addEventListener("DOMContentLoaded", () => {
                        const loggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");
                        const userEmail = localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");

                        if (loggedIn) {
                        showLoginSuccess(userEmail);
                        }
                        });
                        
                        const loginForm = document.querySelector("#loginModal form");
                        loginForm.addEventListener("submit", function (e) {
                            e.preventDefault();
                            
                            const email = this.querySelector("input[type='email']").value;
                            const password = this.querySelector("input[type='password']").value;
                            const remember = this.querySelector("input[type='checkbox']").checked;
                            
                            if (remember) {
                                localStorage.setItem("userEmail", email);
                                localStorage.setItem("isLoggedIn", true);
                            } else {
                                sessionStorage.setItem("userEmail", email);
                                sessionStorage.setItem("isLoggedIn", true);
                            }
                            
                            closeLoginModal();
                            showLoginSuccess(email);
                        });


                        function showLoginSuccess(email) {
                        const toast = document.createElement("div");
                        toast.innerText = `Login, ${email}!`;
                        toast.className = "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-6 py-3 rounded-xl shadow-lg text-xs uppercase tracking-widest z-50";
                        document.body.appendChild(toast);

                        setTimeout(() => {
                        toast.remove();
                        }, 3000);
                       }

                        // Logout function
                        function logout() {
                        localStorage.removeItem("userEmail");
                        localStorage.removeItem("isLoggedIn");
                        sessionStorage.removeItem("userEmail");
                        sessionStorage.removeItem("isLoggedIn");

                        const toast = document.createElement("div");
                        toast.innerText = "Logged out successfully!";
                        toast.className = "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-6 py-3 rounded-xl shadow-lg text-xs uppercase tracking-widest z-50";
                        document.body.appendChild(toast);

                        setTimeout(() => toast.remove(), 3000);
                        }

                        // Open/Close modal functions 
                        function openLoginModal() {
                        document.getElementById('loginModal').classList.remove('hidden');
                        document.getElementById('loginModal').classList.add('flex');
                        }

                        function closeLoginModal() {
                        document.getElementById('loginModal').classList.add('hidden');
                        document.getElementById('loginModal').classList.remove('flex');
                        }

                        // FOOTER & BACK TO TOP
                        document.getElementById('year').textContent = new Date().getFullYear();
                        const backToTopBtn = document.getElementById("backToTopBtn");

                        window.onscroll = function () {
                        const btn = document.getElementById("backToTopBtn");
                        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                            btn.classList.add("show");
                        } else {
                            btn.classList.remove("show");
                        }
                        };
        
                       // INIT LUCIDE ICONS (FINAL & SAFE)
window.addEventListener("load", () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});


                       
// TESTIMONIALS DOTS SLIDER

const carousel = document.getElementById("testimonialCarousel");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Auto slide (luxury feel)
setInterval(() => {
    currentIndex = (currentIndex + 1) % dots.length;
    updateCarousel();
}, 5000);

updateCarousel();
