// ==== Sélections ====
// Formulaire humain
const inputName             = document.querySelector("#nom");
const inputBudget           = document.querySelector("#budget");
const selectRole            = document.querySelector("#role");
const btnAddClient          = document.querySelector(".ajouter-client");
// Afficher les produits disponibles
const displayProducts       = document.querySelector(".afficher-produits");
// Ajouter son code promo et choisir la quantité
const boxPromoLignePanier   = document.querySelector(".promo-ligne-panier");
const displayLignBag        = document.querySelector(".afficher-ligne-panier");
const inputPromo            = document.querySelector("#promo");
const btnAddBag             = document.querySelector(".ajouter-ligne-panier");
// Caisse
const displayBag            = document.querySelector(".afficher-panier");
const displayCashier        = document.querySelector(".afficher-caisse");

// ==== Fonctions utilitaires
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) {element.className = className;}
    if (content) {element.innerHTML = content;}
    return element;
}
function appendElement(parent, child) {
    parent.append(child);
}

// ==== Class constructor ====
class Human {
    constructor(name, role, idNumber, budget) {
        this.name       = name;
        this.role       = role;
        this.idNumber   = idNumber;
        this.budget     = budget;
    }
    checkRole(isSalesman) {
        if (!isSalesman) {
            console.log("Je suis client et je souhaite acheter dans votre magasin de beaux produits"); 
        } else {
            console.log("Je suis le vendeur du magasin. Comment puis-je vous aider?");
            
        }
    }
}

class Product {
    constructor(brand, model, price, stock) {
        this.brand   = brand;
        this.model   = model;
        this.price   = price;
        this.stock   = stock;
    }
}

// ==== Variables ====
const collectionOfHumans = [];
let idNumber = 0;
const products = [];

// ==== Fonctions ====
// Générer les produits
function organizeProducts() {
    
    chaussures.forEach((chaussure) => {
        const brand = chaussure.marque;
        chaussure.modèle.forEach((mod) => {
            const model = mod.nomModèle;
            const price = mod.prix;
            const stock = 10;

            products.push(new Product (brand, model, price, stock))
        })
    })
    return products;
}
console.log(organizeProducts(), "organiser produits");
organizeProducts();

console.log(products, "tableau produit");

// Afficher les produits dans l'HTML
function displayListProducts() {
    products.forEach((product) => {
        const newElement = createElement("div", "chaussures", ``);
        const newElementPhoto = createElement("div", "photo", "Ici, il y aura la photo de la chaussure");
        const newElementNomModèle = createElement("div", "nomModel", `<strong>${product.brand}</strong>`);
        const newElementModel = createElement("div", "description", `${product.model}`);
        const newElementPrix = createElement("div", `prix`, `<em>${product.price}€</em>`);

        appendElement(displayProducts, newElement)
        appendElement(newElement, newElementPhoto)
        appendElement(newElement, newElementNomModèle)
        appendElement(newElement, newElementModel)
        appendElement(newElement, newElementPrix)

        // Bouton ajouter élément
        const addItemBtn = createElement("button", "addToBag", "Ajouter au panier");
        appendElement(newElement, addItemBtn);
    })
}
displayListProducts()

// ==== Evénements ====
// Créer l'humain
btnAddClient.addEventListener("click", function (event) {
    event.preventDefault();
    
    const name = inputName.value;
    const role = selectRole.value;
    idNumber += 1;
    const budget = parseFloat(inputBudget.value)

    collectionOfHumans.push(new Human(name, role, idNumber, budget))
})
console.log(collectionOfHumans, "collection humains");

// Ajouter l'article au panier
displayProducts.addEventListener("click", function (event) {
    event.preventDefault();

    if(event.target.classList.contains("addToBag")) {
        const cardProduct = event.target.parentElement.cloneNode(true);
        boxPromoLignePanier.classList.add("zindex");

        const addToBagBtn = cardProduct.querySelector(".addToBag");
        if (addToBagBtn) {
            addToBagBtn.remove();
        }

        const removeBtn = createElement("button", "removeItem", "Retirer de mon panier");
        const quantity = createElement("select", "quatity", "")
        const quantityOption = createElement("option", ``, "Choisissez la quantité");
        const quantityOption1 = createElement("option", "", "1");
        const quantityOption2 = createElement("option", "", "2");
        const quantityOption3 = createElement("option", "", "3");
        const quantityOption4 = createElement("option", "", "4");
        const quantityOption5 = createElement("option", "", "5");


        
        appendElement(cardProduct, removeBtn)
        appendElement(cardProduct, quantity)
        appendElement(quantity, quantityOption)
        appendElement(quantity, quantityOption1)
        appendElement(quantity, quantityOption2)
        appendElement(quantity, quantityOption3)
        appendElement(quantity, quantityOption4)
        appendElement(quantity, quantityOption5)

        displayLignBag.innerHTML = ``;
        appendElement(displayLignBag, cardProduct)
    }
})

// Retirer l'article de la ligne panier
displayLignBag.addEventListener("click", function (event) {
    event.preventDefault();

    if(event.target.classList.contains("removeItem")) {
        const cardProduct = event.target.parentElement;
        cardProduct.remove();
        console.log(cardProduct, "produit carte");
    }
})

// Code promo et finaliser le panier
boxPromoLignePanier.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Éléments parents de event.target :", event.target.parentElement);

    if (event.target.classList.contains("ajouter-ligne-panier")) {
        const cardProduct = event.target.parentElement.previousElementSibling.cloneNode(true);
        console.log("Éléments trouvés avec closest :", cardProduct);
        boxPromoLignePanier.classList.remove("zindex");

        const removeBtn = cardProduct.querySelector(".removeItem");
        if (removeBtn) {
            removeBtn.remove();
        }

        displayBag.innerHTML = ``;
        appendElement(displayBag, cardProduct)
    }
})










function productAvailable(isAvailable) {
        isAvailable = this.stock > 0;
        if (isAvailable) {
            console.log("Le produit est disponible.");
        } else {
            console.log("Le produit est malheureusement indisponible.");
            
        }
    
}
function showProduct() {
        console.log("Ici sera le code pour montrer le produit à l'utilisateur dans le HTML avec tous les détails");
}
class Promo {
    constructor(brand, model, price, stock, promo) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.stock = stock;
        this.promo = promo;
    }
    subtotal() {
        console.log(this.price*this.stock-this.promo);
    }
}
class Panier {
    constructor() {
        this.tableauVidePanier = [];
    }
    addProduct() {
        console.log("Code pour ajouter le produit");
    }
    subProduct() {
        console.log("Code pour retirer le produit");
    }
    total() {
        console.log("Code pour le total de tous les produits");
    }
}
class Caisse {
    constructor() {
        this.tableauVideCaisse = [];
    }
    showTotal() {
        console.log("Afficher le montant total au client");
    }
    receiveMoney() {
        console.log("Code pour recevoir l'argent");
    }
    calculateChange() {
        console.log("Code pour calculer la différence.");
    }
    giveMoneyBack() {
        console.log("Code pour donner la différence.");
    }
    createTicket() {
        console.log("Code pour générer l'addition");        
    }
}

// Faire le code pour connecter tout ça et l'afficher dans le HTML. 