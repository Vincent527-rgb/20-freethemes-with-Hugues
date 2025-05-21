// ==== Formulaire inscription ====
const inputNom      = document.querySelector("#nom");
const inputBudget   = document.querySelector("#budget");
const btnAjouter    = document.querySelector(".ajouter-client");
// ==== Affichage ====
const toutChaussures    = document.querySelector(".tout-chaussures");
const envoyer       = document.querySelector(".envoyer");
const addition      = document.querySelector(".addition");
const montantTotal  = document.querySelector(".montant-total");

// ==== tableau ====
const chaussures = [
    {
        marque: 'Nike',
        modèle: [
            {
                nomModèle: 'Nike Air Max',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 120,
            },
            {
                nomModèle: 'Nike Air Force 1',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 110,
            }
        ]
    },
    {
        marque: 'Adidas',
        modèle: [
            {
                nomModèle: 'Adidas Ultraboost',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 130,
            },
            {
                nomModèle: 'Adidas Stan Smith',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 100,
            }
        ]
    },
    {
        marque: 'New Balance',
        modèle: [
            {
                nomModèle: 'New Balance 990',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 140,
            },
            {
                nomModèle: 'New Balance 574',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 120,
            }
        ]
    },
    {
        marque: 'Puma',
        modèle: [
            {
                nomModèle: 'Puma RS-X',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 110,
            },
            {
                nomModèle: 'Puma Suede',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 90,
            }
        ]
    },
    {
        marque: 'Reebok',
        modèle: [
            {
                nomModèle: 'Reebok Classic',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 100,
            },
            {
                nomModèle: 'Reebok Nano',
                description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quam consequuntur quod ratione, placeat numquam!',
                prix: 110,
            }
        ]
    }
];






