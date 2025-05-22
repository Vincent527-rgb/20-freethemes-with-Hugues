// ==== Sélections ====
// Formulaire humain
const inputName         = document.querySelector("#nom");
const inputBudget       = document.querySelector("#budget");
const selectRole        = document.querySelector("#role");
const btnAddClient      = document.querySelector(".ajouter-client");
// Afficher les produits disponibles
const displayProducts   = document.querySelector(".afficher-produits");
// Ajouter son code promo et choisir la quantité
const displayLignBag   = document.querySelector(".afficher-ligne-panier");
const inputPromo        = document.querySelector("#promo");
const btnAddBag         = document.querySelector(".ajouter-ligne-panier");
// Caisse
const displayBag        = document.querySelector(".afficher-panier");
const displayCashier    = document.querySelector(".afficher-caisse");

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

// ==== Variables ====
const toutLesPersonnage = [];
const tabElementsPanier = [];
let idNumber = 0;

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

// ==== Fonctions ====
function inscription(name, role, idNumber, budget) {
    let humainTrouver = toutLesPersonnage.find(element => element.name === name);

    if (humainTrouver) {
        alert('utilisateur existe déja')
        return;
    }else{
        let humains = new Human(name, role, idNumber, budget);
        toutLesPersonnage.push(humains)
    }
}

function afficherChaussures(array = chaussures) {
    array.forEach(element => {

        element.modèle.forEach(elements => {
            const newElement = createElement("div", "chaussures", ``);
            const newElementPhoto = createElement("div", "photo", "Ici, il y aura la photo de la chaussure");
            const newElementNomModèle = createElement("div", "nomModel", `<strong>${elements.nomModèle}</strong>`);
            const newElementDescription = createElement("div", "description", `${elements.description}`);
            const newElementPrix = createElement("div", `prix`, `<em>${elements.prix}</em>`);

            appendElement(displayProducts, newElement)
            appendElement(newElement, newElementPhoto)
            appendElement(newElement, newElementNomModèle)
            appendElement(newElement, newElementDescription)
            appendElement(newElement, newElementPrix)

            // Bouton ajouter élément
            const addItemBtn = createElement("button", "addToBag", "Ajouter au panier")
            appendElement(newElement, addItemBtn);

        })
    });
}
afficherChaussures(array = chaussures);
console.log(tabElementsPanier);


// ==== Evénements ====
btnAddClient.addEventListener('click',(e) =>{
    e.preventDefault();
    if (inputName.value === "" || selectRole.value === "" || inputBudget.value ==="") {
        alert('touts les champs ne sont pas');
    }else{
        let nameValue = inputName.value;
        let roleValue = selectRole.value;
        idNumber ++;
        let budgetValue = parseFloat(inputBudget.value);
        
        inscription(nameValue, roleValue, idNumber, budgetValue)
    }
    
    // console.log(toutLesPersonnage);
})

// displayProducts.addEventListener("click", function (event) {
//     event.preventDefault();

//     if (event.target.classList.contains("addToBag")) {
//         displayLignBag.innerHTML ='';
//         const item = event.target.parentElement;
        
//         tabElementsPanier.push(item.outerHTML);

//         for (const element of tabElementsPanier) {
//             displayLignBag.innerHTML += `${element}`;
//         }
        
//     }
// })

















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