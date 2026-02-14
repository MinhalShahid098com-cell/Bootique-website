
 
 // PRODUCTS DATA
        const products = [

            // === WINTER ===
            { id: 1, name: "Khaddar Printed", cat: "Winter", price: 5593, rating: 5, img: "winter8.webp", sale: false,
                desc: "<strong>KHADDAR PRINTED SHIRT</strong> <br><strong>PLAIN CHIFFON DUPATTA WITH LACE</strong> <br><strong>KHADDAR PRINTED TROUSERS</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 2, name: "Dhanak 3PC", cat: "Winter", price: 8775, rating: 4, img: "winter6.webp", sale: false,
                desc: "<strong>DYED EMBROIDERED DHANAK SHIRT</strong> <br><strong>DYED DHANAK TROUSER</strong> <br><strong>PASHMINA SHAW</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 3, name: "3PC Printed Suit", cat: "Winter", price: 4796, rating: 4, img: "winter7.webp", discount: 20, sale: true, 
                desc: "<strong>PRINTED BLENDED RAW SILK SHIRT</strong> <br><strong>PRINTED BLENDED  RAW SILK TROUSER</strong> <br><strong>PRINTED MONAR DUPATTA</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 4, name: "Dhanak 3PC", cat: "Winter", price: 8775, rating: 4, img: "winter5.webp", sale: false,
                desc: "<strong>DYED EMBROIDERED DHANAK SHIRT</strong>  <br><strong>DYED DHANAK TROUSER</strong> <br><strong>PASHMINA SHAWL</strong> ",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 5, name: "Sonnet", cat: "Winter", price: 8032, rating: 4, img: "winter4.webp", sale: false,
                desc:"Sonnet is a poetic ode to winter, crafted in premium Italian wool in a beautiful cocoa hue. Delicate embroidery graces the front and sleeves, complemented by a jacquard shawl in deep beautiful patterns. <br><strong>Fabric Italian wool</strong>  <br><strong>Embroidered front</strong> <br><strong>Embroidered sleeves</strong> <br><strong>Plain dyed back.</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 6, name: "Liana", cat: "Winter", price: 8898, rating: 4, img: "winter3.webp", sale: false,
                desc: "Gentle and graceful, Liana is a canvas of soft Karandi, adorned with delicate floral embroidery in shades of blush and lavender. The subtle details on the shirt and trousers exude timeless femininity, making it a versatile piece for cozy afternoons or cherished winter gatherings.<br><strong>Shirt</strong>: Printed Embroidered Slub Karandi Front</strong> <br><strong>Printed Back</strong> <br><strong>Printed Sleeves</strong> <br><strong>Organza Embroidered Patch</strong> <br><strong>Trousers</strong>: Printed Slub Karandi <br><strong>Dupatta</strong>: Printed Chiffon",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 7, name: "Nysa", cat: "Winter", price: 7563, rating: 4, img: "winter2.webp", sale: false,
                desc: "Bold yet graceful, Nysa transforms winter elegance with its striking floral story. Set against a serene Karandi base, the shirt and trousers bloom with vibrant embroidery, reminiscent of a garden alive with color even in the chill of the season.<br><strong>Shirt</strong> :Printed Embroidered Slub Karandi Front <br><strong>Printed Back</strong> <br><strong>Printed Sleeves</strong> <br><strong>Embroidered Daman Patch</strong> <br><strong>Trousers</strong>: Printed Slub Karandi <br><strong>Dupatta</strong>:Printed Chiffon",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 8, name: "Fia", cat: "Winter", price: 8012, rating: 4, img: "winter1.webp", discount: 20, sale: true,
                desc: "Fia stands out in beautiful purple, crafted in premium Italian wool with exquisite embroidery on the neckline, sleeves, and hem. A beatiful jacquard shawl enhances its regal presence, making it a true symbol of winter luxury. <br><strong>Fabric Italian wool</strong>  <br><strong>Embroidered front</strong> <br><strong>Embroidered sleeves</strong> <br><strong>Embroidered Organza Daman & Sleeves Patch</strong> <br><strong>Plain dyed back</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },

            // === CASUAL ===
            { id: 9, name: "2 Piece Embroidered Suit", cat: "Casual", price: 6990, rating: 5, img: "new1.webp", sale: false,
                desc: "A grey 2 piece suit with blue embroidery, cool toned contrast with neat detailing for a fresh, coordinated look.<br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 10, name: "2 Piece Solid Suit", cat: "Casual", price:  5990, rating: 5, img: "new2.webp", sale: false,
                desc: "A black basic cord featuring a button down shirt, clean, coordinated, and easy to style for everyday wear. <br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 11, name: "Silk Wrap", cat: "Casual", price: 15000, rating: 5, img: "new3.webp", sale: false,
                desc: "A pink 2 piece cord set dotted in black, relaxed fit with subtle detailing for a lively, everyday ensemble. <br><strong>Fabric</strong>: Polka Dots <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 12, name: "3 Piece Embroidered Suit", cat: "Casual", price:  12990, rating: 5, img: "new4.webp", discount: 20, sale: true,
                desc: "A purple embroidered suit paired with a shawl, rich tones and detailed accents create a vibrant, coordinated ensemble.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 13, name: "2 Piece Embroidered Linen Suit", cat: "Casual", price: 6990, rating: 5, img: "new5.webp", sale: false,
                desc: "A maroon embroidered 2 piece linen dress for women, bold, vibrant, and designed to make a lively style statement. <br><strong>Fabric</strong>: Linen  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 14, name: "3 Piece Embroidered Linen Suit", cat: "Casual", price: 11490, rating: 5, img: "new6.webp", sale: false,
                desc: "Elegant brown linen 3-piece suit featuring refined black embroidery. Breathable fabric with a tailored fit, perfect for get togethers and formal occasions. <br><strong>Fabric</strong>: Linen <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 15, name: "2 Piece Solid Suit", cat: "Casual", price: 5990, rating: 5, img: "new7.webp", sale: false,
                desc: "A classic navy blue solid 2 piece set designed for effortless elegance. Perfectly coordinated for a polished, versatile look.  <br><strong>Fabric</strong>: Blended  <br><strong>Ready to Wear</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 16, name: "3 Piece Embroidered Dobby Suit", cat: "Casual", price: 9490, rating: 5, img: "new8.webp", sale: false,
                desc: "A graceful green 3-piece set featuring an intricately embroidered shirt paired with a printed dupatta, Perfectly balanced for a refined look. <br><strong>Fabric</strong>: Dobby <br><strong>Ready to Wear</strong>.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            
            // === Summer ===
            { id: 17, name: "2PC Printed Cotton", cat: "Summer", price: 4170, rating: 4, img: "summer1.webp", sale: false,
                desc: "<strong>DIGITAL PRINTED COTTON LAWN SHIRT</strong> <br><strong>ORGANZA EMBROIDERED PATCH</strong> <br><strong>DIGITAL PRINTED COTTON LAWN TROUSERS</strong>",
              care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 18, name: "Printed Cotton Lawn", cat: "Summer", price: 5370, rating: 4, img: "summer2.jpg", sale: false,
                desc: "<strong>DIGITAL PRINTED COTTON LAWN SHIRT</strong> <br><strong>ORGANZA EMBROIDERED PATCH</strong> <br><strong>DIGITAL PRINTED COTTON LAWN TROUSERS</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 19, name: "2PC Cotton", cat: "Summer", price: 7470, rating: 4, img: "summer3.webp", discount: 20, sale: true,
                 desc: "<strong>100% COTTON CAMBRIC</strong> <br><strong>DYED EMBROIDERED COTTON SHIRT</strong> <br><strong>DYED COTTON TROUSERS WITH EMBROIDERED</strong> ",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 20, name: "Dyed Embroidered Cotton ", cat: "Summer", price: 42000, rating: 4, img: "summer4.webp", discount: 20, sale: true,
                desc: "<strong>100% COTTON CAMBRIC</strong> <br><strong>DYED EMBROIDERED  COTTON SHIRT</strong> <br><strong>DYED EMBROIDERED COTTON FARSHI SHALWAR</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 21, name: "3PC Printed Silk Viscose", cat: "Summer", price: 8225, rating: 4, img: "summer5.webp", sale: false,
                desc: "<strong>PRINTED SILK VISCOSE SHIRT WITH EMBROIDERED PATCH</strong> <br><strong>PRINTED SILK VISCOSE TROUSER</strong> <br><strong>PRINTED SILK DUPATTA WITH LACE</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 22, name: "3PC Printed Lawn", cat: "Summer", price: 6990, rating: 4, img: "summer6.webp", sale: false,
                desc: "<strong>DIGITAL PRINTED LAWN SHIRT</strong> <br><strong>DIGITAL PRINTED LAWN TROUSERS</strong> <br><strong>DIGITAL PRINTED LAWN DUPATTA</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 23, name: "3PC Embroidered Suit ", cat: "Summer", price: 6300, rating: 4, img: "summer7.webp", discount: 20, sale: true,
                desc: "<strong>PRINTED SILK VISCOSE SHIRT WITH EMBROIDERED PATCH</strong> <br><strong>PRINTED VISCOSE TROUSER</strong> <br><strong>PRINTED SILK DUPATTA WITH LACE</strong>",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },

            // === FORMAL ===
            { id: 24, name: "YURA", cat: "Formal", price: 11340, rating: 4, img: "formal1.webp", sale: false,
                desc: "Exuding timeless elegance, this Plum Violet 3-piece pret is a masterpiece in refined craftsmanship. The straight-cut lawn shirt features a rounded hemline with scalloped finishing, paired with a round neckline and slit, adorned with delicate embroidered motifs along the placket. The full-length shirt is enhanced with scalloped edges and graceful floral embroidery, while all-over tonal sprays add subtle charm. Its straight cambric cotton trousers are styled with embroidered scalloped borders at the ankle hem for a chic finish. The look is completed with a net dupatta, beautifully framed with four-sided embroidered scalloped borders, creating a statement of effortless sophistication <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Net <br><strong>Color</strong>: Plum Viole",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 25, name: "VAIIRA", cat: "Formal", price: 15900, rating: 4, img: "formal2.webp", sale: false,
                desc: "Step into elegant charm with this 3-Piece Pret in a sophisticated Mauve Orchid hue. The lawn shirt features a round V-neck with delicate pleat detailing, a short silhouette with a round embroidered hem, and loose sleeves accented with scalloped embroidery borders. Paired with a farshi shalwar adorned with embroidered hems and a flowing printed silk dupatta, this ensemble exudes timeless grace with a contemporary flair <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Silk Printed <br><strong>Color</strong>: Mauve Orchid.",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 26, name: "SEVARIN", cat: "Formal", price: 16900, rating: 4, img: "formal3.webp", discount: 20, sale: true,
                desc: "Fresh and refined, this Misty Jade 3-Piece Pret captures effortless elegance with a modern silhouette. The lawn A-line long shirt features a four-panel design, a clean round neckline accented with buttons, and a delicate lace finish at the hem, paired with three-quarter sleeves adorned with embroidered hems. Completed with straight-fit cambric cotton trousers with embroidered detailing and a graceful silk printed dupatta, this ensemble is timelessly chic. <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Silk Printed <br><strong>Color</strong>: Misty Jade",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 27, name: "ZARA", cat: "Formal", price: 89000, rating: 4, img: "formal4.webp", discount: 20, sale: true,
                desc: "Embrace understated luxury with this Grey 3-Piece Pret, crafted in luminous Silver Zari Net for a refined festive look. The short shirt features a graceful boat neckline, fully embroidered with intricate adda work for timeless elegance. Fitted sleeves are richly embroidered and finished with delicate pearl detailing, adding a soft feminine touch. A straight hemline adorned with pearl accents enhances the shirt’s contemporary silhouette. The look is paired with a fully embroidered flared gharara, designed with fluid movement and a wide embroidered hem. Completing the ensemble is a Silver Zari Net dupatta, finished with four-sided scalloped embroidered borders. A perfect fusion of classic craftsmanship and modern sophistication. <br><strong>Shirt Fabric</strong>: Silver Zari Net <br><strong>Garrara Fabric</strong>: Silver Zari Net <br><strong>Dupatta Fabric</strong>: Silver Zari Net <br><strong>Color</strong>: Grey",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 28, name: "OCÉANE", cat: "Formal", price: 17940, rating: 4, img: "formal5.webp", sale: false,
                desc: "Radiate elegance in this Royal Blue 3-piece micro velvet ensemble, a masterpiece of luxury and grace. The shirt features a sweetheart embroidered neckline with an all-over embroidery spray and detailed borders, exuding refined charm. Its fully embroidered sleeves add a touch of opulence, perfectly paired with flared trousers adorned with contrast scalloped embroidered hems. The ensemble is completed with a matching russian silk dupatta, beautifully framed with all-side embroidered borders for a truly regal finish.<br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Micro Velvet <br><strong>Bottom Fabric</strong>: Korean Silk <br><strong>Dupatta Fabric</strong>: Russian Silk <br><strong>Color</strong>: Royal Blue",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
            { id: 29, name: "ZAIRAH", cat: "Formal", price: 17940, rating: 4, img: "formal6.webp", discount: 20, sale: true,
                desc: "Radiate timeless elegance in this rich gold 3-piece pret outfit, designed to make a statement at every occasion. The high V-neckline adds structure to a fully embroidered tissue shirt, delicately hand-embellished for an opulent finish. Its long silhouette flows gracefully, paired with quarter sleeves and flared tissue pants that add a touch of drama. The separate lining ensures comfort without compromising the luxurious feel. A matching tissue dupatta, edged with intricate four-sided embroidered borders, completes the look with effortless sophistication <br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Tissue <br><strong>Trouser Fabric</strong>: Tissue <br><strong>Dupatta Fabric</strong>: Tissue <br><strong>Color</strong>: Rich Gold",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
         { id: 30, name: "INARAH", cat: "Formal", price: 14500, rating: 4, img: "formal7.jpg", sale: false,
                desc: "Make a statement in this 3-Piece Pret in a rich Dark Purple hue. The lawn shirt features an embroidered boat neckline with a front slit, a short silhouette with lace-accented side slits and hem, and loose sleeves finished with delicate embroidery. Paired with a skinny cambric cotton shalwar and a flowing chiffon dupatta adorned with embroidered four-sided borders, this ensemble blends modern sophistication with timeless elegance.<br><strong>3 Piece Pret</strong> <br><strong>Shirt Fabric</strong>: Lawn <br><strong>Trouser Fabric</strong>: Cambric Cotton <br><strong>Dupatta Fabric</strong>: Chiffon <br><strong>Color</strong>: Dark Purple",
        care: ["Dry clean only", "Do not bleach", "Iron at low temperature"] },
    ];

    

 // GLOBAL VARIABLES 
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let lastRenderedProducts = [];

// Cached DOM elements
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");
const productGrid = document.getElementById('productGrid');
const catTitle = document.getElementById('catTitle');
const carousel = document.getElementById("testimonialCarousel");
const dots = document.querySelectorAll(".dot");
const openSizeGuide = document.getElementById('openSizeGuide');
const closeSizeGuide = document.getElementById('closeSizeGuide');

// UTILITY FUNCTIONS
const isInWishlist = id => wishlist.includes(id);

const saveCart = () => localStorage.setItem("cart", JSON.stringify(cart));
const saveWishlist = () => localStorage.setItem("wishlist", JSON.stringify(wishlist));

const formatPrice = price => price.toLocaleString();

// PRODUCT RENDERING
function renderProducts(data = products) {
    if (!productGrid) return;
    lastRenderedProducts = data;

    productGrid.innerHTML = data.map(p => {
        const isFav = wishlist.includes(p.id);
        return `
        <div class="product-card group">
            <div class="aspect-[3/4] overflow-hidden bg-[#111] mb-3 relative border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
                ${p.sale ? `<span class="sale-badge">SALE</span>` : ''}
                <img src="${p.img}" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                <button onclick="toggleWishlist(${p.id}, event)" class="absolute top-2 right-2 text-amber-500 text-lg">
                    ${isFav ? '❤️' : '♡'}
                </button>
            </div>
            <p class="text-[9px] text-amber-500 uppercase tracking-widest">${p.cat}</p>
            <h3 class="text-white text-[10px] uppercase tracking-wider mt-1">${p.name}</h3>
            <div class="mt-1">
                ${p.sale && p.discount ? 
                    `<span class="text-gray-500 line-through text-[10px] mr-2">PKR ${formatPrice(p.price)}</span>
                     <span class="text-white text-[10px] font-bold">PKR ${formatPrice(getDiscountedPrice(p.price, p.discount))}</span>` : 
                    `<span class="text-gray-400 text-[10px]">PKR ${formatPrice(p.price)}</span>`}
            </div>
            <button onclick="openDetails(${p.id})" class="detail-action-btn w-full mt-4 py-2 text-[9px]">Quick View</button>
        </div>`;
    }).join('');
}

// Related Products
function renderRelatedProducts(currentId) {
    const container = $('#relatedProducts');
    const currentProduct = products.find(p => p.id === currentId);
    if (!currentProduct) return;

    // Filter products from same category, excluding the current one
    const related = products.filter(p => p.cat === currentProduct.cat && p.id !== currentId);

    // Destroy existing carousel if it exists to re-initialize with new data
    container.trigger('destroy.owl.carousel');
    container.html(''); 

    if (related.length === 0) {
        container.html('<p class="text-gray-500 italic text-[10px]">No related pieces found.</p>');
        return;
    }

    // Map through related products and create cards
    const relatedHTML = related.map(p => `
        <div class="item group cursor-pointer" onclick="openDetails(${p.id})">
            <div class="aspect-[3/4] overflow-hidden bg-[#111] mb-3 border border-white/5 group-hover:border-amber-500/30 transition-all duration-500">
                <img src="${p.img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${p.name}">
            </div>
            <p class="text-[9px] text-white uppercase tracking-widest">${p.name}</p>
            <p class="text-[9px] text-amber-500 mt-1">PKR ${formatPrice(p.price)}</p>
        </div>
    `).join('');

    container.html(relatedHTML);

    // Initialize Owl Carousel with responsive settings
    container.owlCarousel({
        loop: related.length > 4,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 },
            640: { items: 2 },
            1024: { items: 4 }
        }
    });
}

// WISHLIST
function toggleWishlist(id, event) {
    if (event) event.stopPropagation(); // prevent opening product details
    const index = wishlist.indexOf(id);
    if (index === -1) { wishlist.push(id); showToast("Added to Wishlist ❤️"); }
    else { wishlist.splice(index, 1); showToast("Removed from Wishlist"); }

    saveWishlist();
    updateWishlistUI();
    updateWishlistCounter();

    // Update icons on the product grid
    renderProducts(lastRenderedProducts);

    // Update modal wishlist button if open
    const detailWishBtn = document.getElementById('detailWishlistBtn');
    if (detailWishBtn) detailWishBtn.innerText = wishlist.includes(id) ? '♥' : '♡';
}

// Show Wishlist View
function showWishlist() {
    const favProducts = products.filter(p => wishlist.includes(p.id));
    
    if (favProducts.length === 0) {
        productGrid.innerHTML = `
            <div class="col-span-full py-32 text-center">
                <p class="serif text-2xl italic text-gray-500 mb-6">Your Wishlist is Empty</p>
                <button onclick="filterCategory('all')" class="hero-btn-premium">Explore Collection</button>
            </div>
        `;
    } else {
        catTitle.innerText = "Your Favorites";
        renderProducts(favProducts);
    }
    
    // Scroll to shop section
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function updateWishlistCounter() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.innerText = wishlist.length;
        
        if (wishlist.length === 0) {
            wishlistCount.style.opacity = "0";
        } else {
            wishlistCount.style.opacity = "1";
        }
    }
}

//  PRODUCT DETAILS 
function openDetails(id) {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    document.getElementById('detailImg').src = p.img;
    document.getElementById('detailName').innerText = p.name;
    document.getElementById('detailCat').innerText = p.cat;
    document.getElementById('detailDesc').innerHTML = p.desc;
   
    const detailWishBtn = document.getElementById('detailWishlistBtn');
if (detailWishBtn) {
    detailWishBtn.innerText = wishlist.includes(p.id) ? '♥' : '♡';
    detailWishBtn.onclick = (event) => toggleWishlist(p.id, event);
}
    const careList = document.getElementById('detailCare');
    if (careList) careList.innerHTML = p.care.map(c => `<li>${c}</li>`).join('');

    const priceEl = document.getElementById('detailPrice');
    if (p.sale && p.discount) {
        priceEl.innerHTML = `<span class="text-gray-500 line-through text-sm mr-3">PKR ${formatPrice(p.price)}</span>
                             <span class="text-amber-500">PKR ${formatPrice(getDiscountedPrice(p.price, p.discount))}</span>`;
    } else {
        priceEl.innerHTML = `PKR ${formatPrice(p.price)}`;
    }

    document.getElementById('detailStars').innerText = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);

    selectedSize = null;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('detailAddBtn').onclick = () => addToCart(p.id);

    document.getElementById('productDetailView').classList.add('details-open');
    document.body.style.overflow = 'hidden';
    
    renderRelatedProducts(id);
}

function closeDetails() {
    document.getElementById('productDetailView').classList.remove('details-open');
    document.body.style.overflow = 'auto';
}

// ACCORDION
function toggleAccordion(btn) {
    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// SELECT SIZE
function selectSize(size, element) {
    selectedSize = size;
    element.parentElement.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// CART
function addToCart(id) {
    if (!selectedSize) return showToast("Please select a size");  // ← this line

    const p = products.find(prod => prod.id === id);
    const finalPrice = p.sale && p.discount ? getDiscountedPrice(p.price, p.discount) : p.price;

    cart.push({ ...p, size: selectedSize, finalPrice, cartId: Date.now() });
    saveCart();
    updateCartUI();
    showToast("Added to Closet ✨");
    closeDetails();
    toggleCart();
}

function updateCartUI() {
    if (cartCount) cartCount.innerText = cart.length;
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="text-center text-gray-500 italic py-10 uppercase text-[9px]">Your closet is empty</p>`;
        cartTotal.innerText = "PKR 0";
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="flex justify-between items-center border-b border-white/5 pb-4">
            <div class="flex items-center gap-4">
                <img src="${item.img}" class="w-12 h-16 object-cover">
                <div>
                    <p class="text-[10px] text-white uppercase">${item.name} (${item.size})</p>
                    <p class="text-[9px] text-amber-500">PKR ${formatPrice(item.finalPrice)}</p>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-white">&times;</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.finalPrice, 0);
    cartTotal.innerText = "PKR " + formatPrice(total);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('cart-open');
}

function checkout() {
    if (cart.length === 0) return showToast("Closet is empty");
    let msg = "✨ *New Order from Style Haven* ✨%0A%0A";
    cart.forEach(item => msg += `- ${item.name} (${item.size}): PKR ${formatPrice(item.finalPrice)}%0A`);
    const total = cart.reduce((sum, item) => sum + item.finalPrice, 0);
    msg += `%0A*Total: PKR ${formatPrice(total)}*`;
    window.open(`https://wa.me{msg}`);
}

// SORT, FILTER, SEARCH
function sortItems() {
    const order = document.getElementById('sortOrder').value;
    const sortedData = [...products];
    if (order === 'low') sortedData.sort((a,b)=>a.price-b.price);
    else if (order === 'high') sortedData.sort((a,b)=>b.price-a.price);
    renderProducts(sortedData);
}

function filterCategory(cat) {
    const filtered = cat === 'all' ? products : products.filter(p => p.cat === cat);
    renderProducts(filtered);
    catTitle.innerText = cat === 'all' ? 'Our Collection' : `${cat} Collection`;
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() {
    const q = document.getElementById('searchBar').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.cat.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <p class="text-gray-500 italic mb-4">No pieces found matching "${q}"</p>
                <button onclick="renderProducts()" class="hero-btn-premium">View All Pieces</button>
            </div>
        `;
        return;
    }
    renderProducts(filtered);
}

// SALE LOGIC
function showSaleItems() {
    const saleProducts = products.filter(p => p.sale);
    renderProducts(saleProducts);
    const catTitle = document.getElementById("catTitle");
    if (catTitle) catTitle.innerText = "Sale";
}

function getDiscountedPrice(price, discount) {
    return Math.round(price - (price * discount / 100));
}

function setActiveNav(tabButton) {
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(btn => btn.classList.remove('bg-amber-500', 'text-black'));

    tabButton.classList.add('bg-amber-500', 'text-black');
}

// MENU
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('menuBtn');
    menu.classList.toggle('-translate-x-full');
    menu.classList.toggle('translate-x-0');
    document.body.style.overflow = menu.classList.contains('translate-x-0') ? 'hidden' : 'auto';
    btn.classList.toggle('open');
}

function navigateTo(target) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('shop').classList.add('hidden');
    document.getElementById('contact-us').classList.add('hidden');

if (target === 'home') {
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('shop').classList.remove('hidden');
    showSaleItems();  
    window.scrollTo({ top:0, behavior:'smooth' });

    } else if (target === 'contact-us') {
        document.getElementById('contact-us').classList.remove('hidden');
        document.getElementById('contact-us').scrollIntoView({ behavior:'smooth' });
    } else {
        document.getElementById('shop').classList.remove('hidden');
        filterCategory(target);
    }

    // Close mobile menu
    const menu = document.getElementById('mobileMenu');
    if (!menu.classList.contains('-translate-x-full')) toggleMenu();
}

// LOGIN / LOGOUT
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function logout() {
    ['userEmail','isLoggedIn'].forEach(key => {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
    });
    showToast("Logged out successfully!");
}

function showLoginSuccess(email) {
    showToast(`Login, ${email}!`);
}

function showToast(msg) {
    const toast = document.createElement("div");
    toast.innerText = msg;
    toast.className = "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-6 py-3 rounded-xl shadow-lg text-xs uppercase tracking-widest z-50";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}
// BACK TO TOP
window.addEventListener("scroll", () => {
    const backBtn = document.getElementById("backToTopBtn");
    if (backBtn) {
        if (window.scrollY > 500) {
            backBtn.classList.add('show'); 
        } else {
            backBtn.classList.remove('show');
        }
    }
});

// CAROUSEL
let currentIndex = 0;
function updateCarousel() {
    if (!carousel) return;
    carousel.style.transform = `translateX(-${currentIndex*100}%)`;
    dots.forEach((dot,i) => dot.classList.toggle("active-dot", i===currentIndex));
}
if (carousel && dots.length) {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
    }, 5000);
}

// SIZE GUIDE
document.addEventListener("DOMContentLoaded", () => {
    const sizeModal = document.getElementById('sizeGuideModal');
    const openBtn = document.getElementById('openSizeGuide');
    const closeBtn = document.getElementById('closeSizeGuide');

    if (openBtn && sizeModal) {
        // OPEN MODAL
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sizeModal.classList.remove('hidden');
            sizeModal.classList.add('flex'); 
            document.body.style.overflow = 'hidden'; 
        });

        // CLOSE MODAL (Button)
        closeBtn.addEventListener('click', () => {
            closeSizeModal();
        });

        // CLOSE MODAL (Outside Click)
        window.addEventListener('click', (e) => {
            if (e.target === sizeModal) {
                closeSizeModal();
            }
        });
    }

    function closeSizeModal() {
        sizeModal.classList.add('hidden');
        sizeModal.classList.remove('flex');
        document.body.style.overflow = ''; 
    }
});

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    showSaleItems(); 
    updateCart();
    updateWishlistCounter(); 

    const loggedIn = localStorage.getItem("isLoggedIn") || sessionStorage.getItem("isLoggedIn");
    const userEmail = localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
    if (loggedIn) showLoginSuccess(userEmail);

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lucide icons
    if (window.lucide) lucide.createIcons();
});

if (window.lucide) lucide.createIcons();
