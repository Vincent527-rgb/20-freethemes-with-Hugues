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

    calcul(prix){
        if (prix > this.budget ) {
            alert('vous n\'avez pas assez')
        }else{
            let reste = this.budget - prix;
            return reste
        }
    }
}

// ==== Variables ====
const toutLesPersonnage = [];
const tabElementsPanier = [];
let idNumber = 0;

let totalPrice = 0;

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


function envoyerPanier(array = chaussures, callback) {
    displayProducts.addEventListener("click", function (e) {
        e.preventDefault();
        
        if (e.target.classList.contains("addToBag")) {
            let chaussureParent = e.target.parentElement;
            let chaussureTarget = chaussureParent.children[1]
            let nodeChaussure = chaussureTarget.textContent

            let foundModel = null;

            for (let marque of array) {
                for (let modele of marque.modèle) {
                    if (modele.nomModèle === nodeChaussure) {
                        foundModel = modele;
                        break;
                    }
                }
                if (foundModel) break; 
            }

            tabElementsPanier.push(foundModel);  
            displayBag.innerHTML = '';
            tabElementsPanier.forEach(elements => {
                
                const newElement = createElement("div", "chaussures", ``);
                const newElementNomModèle = createElement("div", "nomModel", `<strong>${elements.nomModèle}</strong>`);
                const newElementPrix = createElement("div", `prix`, `<em>${elements.prix} $</em>`);
    
                appendElement(displayBag, newElement)
                appendElement(newElement, newElementNomModèle)
                appendElement(newElement, newElementPrix)
            })

            const initialValue = 0;

            totalPrice = tabElementsPanier.reduce(
            (accumulator, currentValue) => accumulator + currentValue.prix,
            initialValue,
            );




            const newElement = createElement("div", "total", ``);
            const addItemBtn = createElement("button", "btnSend", "Payer")
            appendElement(displayBag, newElement)
            appendElement(newElement, totalPrice + ' $')
            appendElement(newElement, addItemBtn);
            const newElementOption = createElement("select", "personnes", ``);
            appendElement(newElement, newElementOption)
            for (const personne of toutLesPersonnage) {
                option = document.createElement('option')
                option.value = personne.name;
                option.textContent += `-- ${personne.name} --`

                appendElement(newElementOption, option)
            }



            if (typeof callback === "function") {
                callback({
                    elements: tabElementsPanier,
                    total: totalPrice
                })
            }

            let retourMonay = 0

            const btnSend = document.querySelector(".btnSend");
            if (btnSend) {
                btnSend.addEventListener('click', (e) =>{
                    let valuePersonne = newElementOption.value
                    let trouverPersonne = toutLesPersonnage.find(element => element.name === valuePersonne);
                    if (trouverPersonne) {
                        retourMonay = trouverPersonne.budget - totalPrice;
                        
                        const newElement = createElement("div", "ticket", ``);
                        const newElementNomModèle = createElement("div", "client", `<strong>le client : ${trouverPersonne.name}</strong>`);
                        const newElementPrix = createElement("div", `prix`, `<em>retour : ${retourMonay} $</em>`);
            
                        appendElement(displayCashier, newElement)
                        appendElement(newElement, newElementNomModèle)
                        appendElement(newElement, newElementPrix)
                    }
                })
            }
        }
    })
}

function callback() {
    return {
        elements: tabElementsPanier,
        total: totalPrice
    };
}



function afficherChaussures(array = chaussures) {
    array.forEach(element => {

        element.modèle.forEach(elements => {
            const newElement = createElement("div", "chaussures", ``);
            const newElementPhoto = createElement("div", "photo", "Ici, il y aura la photo de la chaussure");
            const newElementNomModèle = createElement("div", "nomModel", `<strong>${elements.nomModèle}</strong>`);
            const newElementDescription = createElement("div", "description", `${elements.description}`);
            const newElementPrix = createElement("div", `prix`, `<em>${elements.prix} $</em>`);

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
afficherChaussures();


envoyerPanier(chaussures, (panier) => {
    console.log("Panier mis à jour :", panier);
    
});


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