// Dados do cardápio
const menuData = {
    lanches: [
        {
            id: 'xis-vegetariano',
            name: 'XIS VEGETARIANO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo e pepino.',
            price: 22.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Pepino']
        },
        {
            id: 'xis-salada',
            name: 'XIS SALADA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e alho.',
            price: 26.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho']
        },
        {
            id: 'xis-frango',
            name: 'XIS FRANGO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e frango.',
            price: 28.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Frango']
        },
        {
            id: 'xis-acebolado',
            name: 'XIS ACEBOLADO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto, alho e cebola.',
            price: 28.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho', 'Cebola']
        },
        {
            id: 'xis-strogonoff-frango',
            name: 'XIS STROGONOFF DE FRANGO',
            description: 'Strogonoff de frango, milho/ervilha, maionese, ovo, queijo e batata palha.',
            price: 32.00,
            ingredients: ['Strogonoff de frango', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Batata palha']
        },
        {
            id: 'xis-bacon',
            name: 'XIS BACON',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto, alho e bacon.',
            price: 32.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho', 'Bacon']
        },
        {
            id: 'xis-calabresa',
            name: 'XIS CALABRESA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e calabresa.',
            price: 32.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Calabresa']
        },
        {
            id: 'xis-coracao',
            name: 'XIS CORAÇÃO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e coração.',
            price: 32.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Coração']
        },
        {
            id: 'xis-doritos',
            name: 'XIS DORITOS',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto, alho e doritos.',
            price: 32.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho', 'Doritos']
        },
        {
            id: 'xis-fritas',
            name: 'XIS FRITAS',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto, alho e fritas.',
            price: 35.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho', 'Fritas']
        },
        {
            id: 'xis-linguica',
            name: 'XIS LINGUIÇA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e linguiça.',
            price: 32.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Linguiça']
        },
        {
            id: 'xis-alcatra',
            name: 'XIS ALCATRA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e alcatra.',
            price: 38.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alcatra']
        },
        {
            id: 'xis-costela',
            name: 'XIS COSTELA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e costela.',
            price: 39.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Costela']
        },
        {
            id: 'xis-file-suino',
            name: 'XIS FILÉ SUÍNO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e filé suíno.',
            price: 42.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Filé suíno']
        },
        {
            id: 'xis-bombado',
            name: 'XIS BOMBADO',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto, alho, calabresa e bacon.',
            price: 42.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Alho', 'Calabresa', 'Bacon']
        },
        {
            id: 'xis-file',
            name: 'XIS FILÉ',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e filé.',
            price: 42.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Filé']
        },
        {
            id: 'xis-picanha',
            name: 'XIS PICANHA',
            description: 'Alface, tomate, milho/ervilha, maionese, ovo, queijo, presunto e picanha.',
            price: 42.00,
            ingredients: ['Alface', 'Tomate', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Presunto', 'Picanha']
        },
        {
            id: 'xis-strogonoff-file',
            name: 'XIS STROGONOFF DE FILÉ',
            description: 'Strogonoff de filé, milho/ervilha, maionese, ovo, queijo e batata palha.',
            price: 42.00,
            ingredients: ['Strogonoff de filé', 'Milho/ervilha', 'Maionese', 'Ovo', 'Queijo', 'Batata palha']
        }
    ],
    dogs: [
        {
            id: 'dog-duplo',
            name: 'DOG DUPLO',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e 2 salsichas.',
            price: 19.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Salsicha (2)']
        },
        {
            id: 'dog-triplo',
            name: 'DOG TRIPLO',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e 3 salsichas.',
            price: 22.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Salsicha (3)']
        },
        {
            id: 'dog-calabresa',
            name: 'DOG CALABRESA',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e calabresa.',
            price: 32.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Calabresa']
        },
        {
            id: 'dog-frango',
            name: 'DOG FRANGO',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e frango.',
            price: 28.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Frango']
        },
        {
            id: 'dog-file',
            name: 'DOG FILÉ',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e filé.',
            price: 42.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Filé']
        }
    ],
    calotas: [
        {
            id: 'calota-salada',
            name: 'CALOTA SALADA',
            description: 'Carne, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 112.00,
            ingredients: ['Carne', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-frango',
            name: 'CALOTA FRANGO',
            description: 'Frango, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 120.00,
            ingredients: ['Frango', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-calabresa',
            name: 'CALOTA CALABRESA',
            description: 'Calabresa, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 125.00,
            ingredients: ['Calabresa', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-coracao',
            name: 'CALOTA CORAÇÃO',
            description: 'Coração, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 125.00,
            ingredients: ['Coração', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-linguica',
            name: 'CALOTA LINGUIÇA',
            description: 'Linguiça, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 125.00,
            ingredients: ['Linguiça', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-bacon',
            name: 'CALOTA BACON',
            description: 'Bacon, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 125.00,
            ingredients: ['Bacon', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-file',
            name: 'CALOTA FILÉ',
            description: 'Filé, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 156.00,
            ingredients: ['Filé', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-picanha',
            name: 'CALOTA PICANHA',
            description: 'Picanha, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 156.00,
            ingredients: ['Picanha', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-bombado',
            name: 'CALOTA BOMBADO',
            description: 'Bacon, calabresa, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 156.00,
            ingredients: ['Bacon', 'Calabresa', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-strogonoff-file',
            name: 'CALOTA STROGONOFF DE FILÉ',
            description: 'Strogonoff de filé, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 156.00,
            ingredients: ['Strogonoff de filé', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'calota-strogonoff-frango',
            name: 'CALOTA STROGONOFF DE FRANGO',
            description: 'Strogonoff de frango, maionese, milho, ervilha, alface, tomate, ovo, presunto, queijo, fritas e refrigerante 2L.',
            price: 136.00,
            ingredients: ['Strogonoff de frango', 'Maionese', 'Milho', 'Ervilha', 'Alface', 'Tomate', 'Ovo', 'Presunto', 'Queijo', 'Fritas', 'Refrigerante 2L']
        },
        {
            id: 'dog-calota',
            name: 'DOG CALOTA',
            description: 'Maionese, molho, milho, ervilha, queijo, batata palha e salsicha, fritas e refrigerante 2L.',
            price: 90.00,
            ingredients: ['Maionese', 'Molho', 'Milho', 'Ervilha', 'Queijo', 'Batata palha', 'Salsicha', 'Fritas', 'Refrigerante 2L']
        }
    ],
    porcoes: [
        {
            id: 'fritas',
            name: 'FRITAS',
            description: 'Porção de batatas fritas.',
            price: 35.00,
            halfPrice: 20.00,
            ingredients: ['Batata frita']
        },
        {
            id: 'fritas-queijo',
            name: 'FRITAS E QUEIJO',
            description: 'Porção de batatas fritas com queijo.',
            price: 39.00,
            halfPrice: 25.00,
            ingredients: ['Batata frita', 'Queijo']
        },
        {
            id: 'fritas-calabresa-queijo',
            name: 'FRITAS COM CALABRESA E QUEIJO',
            description: 'Porção de batatas fritas com calabresa e queijo.',
            price: 62.00,
            halfPrice: 35.00,
            ingredients: ['Batata frita', 'Calabresa', 'Queijo']
        },
        {
            id: 'fritas-frango-queijo',
            name: 'FRITAS COM FRANGO E QUEIJO',
            description: 'Porção de batatas fritas com frango e queijo.',
            price: 62.00,
            halfPrice: 35.00,
            ingredients: ['Batata frita', 'Frango', 'Queijo']
        },
        {
            id: 'fritas-bacon-queijo',
            name: 'FRITAS COM BACON E QUEIJO',
            description: 'Porção de batatas fritas com bacon e queijo.',
            price: 68.00,
            halfPrice: 35.00,
            ingredients: ['Batata frita', 'Bacon', 'Queijo']
        },
        {
            id: 'fritas-coracao-queijo',
            name: 'FRITAS COM CORAÇÃO E QUEIJO',
            description: 'Porção de batatas fritas com coração e queijo.',
            price: 68.00,
            halfPrice: 35.00,
            ingredients: ['Batata frita', 'Coração', 'Queijo']
        },
        {
            id: 'fritas-file-queijo',
            name: 'FRITAS COM FILÉ E QUEIJO',
            description: 'Porção de batatas fritas com filé e queijo.',
            price: 73.00,
            halfPrice: 40.00,
            ingredients: ['Batata frita', 'Filé', 'Queijo']
        },
        {
            id: 'fritas-picanha-queijo',
            name: 'FRITAS COM PICANHA E QUEIJO',
            description: 'Porção de batatas fritas com picanha e queijo.',
            price: 73.00,
            halfPrice: 40.00,
            ingredients: ['Batata frita', 'Picanha', 'Queijo']
        }
    ],
    bebidas: [
        {
            id: 'coca-2l',
            name: 'COCA 2L',
            description: 'Refrigerante Coca-Cola 2 litros.',
            price: 15.00,
            ingredients: []
        },
        {
            id: 'sprite-2l',
            name: 'SPRITE 2L',
            description: 'Refrigerante Sprite 2 litros.',
            price: 15.00,
            ingredients: []
        },
        {
            id: 'guarana-2l',
            name: 'GUARANÁ 2L',
            description: 'Refrigerante Guaraná 2 litros.',
            price: 10.00,
            ingredients: []
        },
        {
            id: 'coca-lata',
            name: 'COCA LATA',
            description: 'Refrigerante Coca-Cola lata.',
            price: 7.00,
            ingredients: []
        },
        {
            id: 'guarana-lata',
            name: 'GUARANÁ LATA',
            description: 'Refrigerante Guaraná lata.',
            price: 7.00,
            ingredients: []
        },
        {
            id: 'sprite-lemos',
            name: 'SPRITE LEMOS',
            description: 'Sprite sabor limão.',
            price: 0.00,  // Preço não informado
            ingredients: []
        },
        {
            id: 'suco-uva',
            name: 'SUCO DE UVA',
            description: 'Suco de uva.',
            price: 6.00,
            ingredients: []
        },
        {
            id: 'suco-uva-dell-vale',
            name: 'SUCO UVA DELL VALE',
            description: 'Suco de uva Dell Vale.',
            price: 6.00,
            ingredients: []
        },
        {
            id: 'suco-laranja',
            name: 'SUCO DE LARANJA',
            description: 'Suco de laranja.',
            price: 6.00,
            ingredients: []
        },
        {
            id: 'suco-laranja-dell-vale',
            name: 'SUCO LARANJA DELL VALE',
            description: 'Suco de laranja Dell Vale.',
            price: 6.00,
            ingredients: []
        },
        {
            id: 'energetico-monster',
            name: 'ENERGÉTICO MONSTER',
            description: 'Energético Monster.',
            price: 12.00,
            ingredients: []
        },
        {
            id: 'schin-lata',
            name: 'SCHIN LATÃO',
            description: 'Cerveja Schin lata grande.',
            price: 5.00,
            ingredients: []
        },
        {
            id: 'kaiser-lata',
            name: 'KAISER LATÃO',
            description: 'Cerveja Kaiser lata grande.',
            price: 5.00,
            ingredients: []
        },
        {
            id: 'polar-lata',
            name: 'POLAR LATÃO',
            description: 'Cerveja Polar lata grande.',
            price: 7.00,
            ingredients: []
        },
        {
            id: 'amstel-lata',
            name: 'AMSTEL LATÃO',
            description: 'Cerveja Amstel lata grande.',
            price: 7.00,
            ingredients: []
        },
        {
            id: 'brahma-lata',
            name: 'BRAHMA LATÃO',
            description: 'Cerveja Brahma lata grande.',
            price: 7.00,
            ingredients: []
        },
        {
            id: 'heineken-lata',
            name: 'HEINEKEN LATÃO',
            description: 'Cerveja Heineken lata grande.',
            price: 10.00,
            ingredients: []
        },
        {
            id: 'heineken-long',
            name: 'HEINEKEN LONG',
            description: 'Cerveja Heineken long neck.',
            price: 10.00,
            ingredients: []
        },
        {
            id: 'eisenbahn-long',
            name: 'EISENBAHN LONG',
            description: 'Cerveja Eisenbahn long neck.',
            price: 0.00,  // Preço não informado
            ingredients: []
        }
    ],
    adicionais: [
        {
            id: 'ovo',
            name: 'OVO',
            description: 'Adicional de ovo.',
            price: 2.00,
            ingredients: []
        },
        {
            id: 'cebola',
            name: 'CEBOLA',
            description: 'Adicional de cebola.',
            price: 2.00,
            ingredients: []
        },
        {
            id: 'cheddar',
            name: 'CHEDDAR',
            description: 'Adicional de queijo cheddar.',
            price: 4.00,
            ingredients: []
        },
        {
            id: 'catupiry',
            name: 'CATUPIRY',
            description: 'Adicional de queijo catupiry.',
            price: 4.00,
            ingredients: []
        },
        {
            id: 'barbecue',
            name: 'BARBECUE',
            description: 'Adicional de molho barbecue.',
            price: 4.00,
            ingredients: []
        },
        {
            id: 'maionese',
            name: 'MAIONESE',
            description: 'Adicional de maionese.',
            price: 3.00,
            ingredients: []
        },
        {
            id: 'maionese-verde',
            name: 'MAIONESE VERDE',
            description: 'Adicional de maionese verde.',
            price: 3.00,
            ingredients: []
        },
        {
            id: 'doritos',
            name: 'DORITOS',
            description: 'Adicional de doritos.',
            price: 6.00,
            ingredients: []
        },
        {
            id: 'fritas',
            name: 'FRITAS',
            description: 'Adicional de fritas.',
            price: 12.00,
            ingredients: []
        },
        {
            id: 'bacon',
            name: 'BACON',
            description: 'Adicional de bacon.',
            price: 12.00,
            ingredients: []
        },
        {
            id: 'bife',
            name: 'BIFE',
            description: 'Adicional de bife.',
            price: 12.00,
            ingredients: []
        },
        {
            id: 'coracao',
            name: 'CORAÇÃO',
            description: 'Adicional de coração.',
            price: 12.00,
            ingredients: []
        }
    ]
};

// Elementos DOM
const lanchesGrid = document.getElementById('lanchesGrid');
const dogsGrid = document.getElementById('dogsGrid');
const calotasGrid = document.getElementById('calotasGrid');
const porcoesGrid = document.getElementById('porcoesGrid');
const bebidasGrid = document.getElementById('bebidasGrid');
const adicionaisGrid = document.getElementById('adicionaisGrid');

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

const customizeModal = document.getElementById('customizeModal');
const cartModal = document.getElementById('cartModal');
const closeModals = document.querySelectorAll('.close-modal');

const modalItemTitle = document.getElementById('modalItemTitle');
const ingredientsList = document.getElementById('ingredientsList');
const additionalsList = document.getElementById('additionalsList');
const itemPrice = document.getElementById('itemPrice');
const addToCartBtn = document.getElementById('addToCartBtn');

const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const pickupBtn = document.getElementById('pickupBtn');
const deliveryBtn = document.getElementById('deliveryBtn');
const deliveryForm = document.getElementById('deliveryForm');
const paymentMethod = document.getElementById('paymentMethod');
const changeContainer = document.getElementById('changeContainer');
const clearCartBtn = document.getElementById('clearCartBtn');
const finishOrderBtn = document.getElementById('finishOrderBtn');

// Estado da aplicação
let cart = [];
let currentItem = null;
let removedIngredients = [];
let selectedAdditionals = [];
let deliveryOption = 'pickup'; // pickup ou delivery

// Função para formatar preço em R$
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Criar e exibir itens do menu
function createMenuItem(item, category) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.setAttribute('data-id', item.id);
    
    const itemHTML = `
        <div class="item-info">
            <h3 class="item-title">${item.name}</h3>
            <p class="item-description">${item.description}</p>
            <span class="item-price">R$ ${formatPrice(item.price)}</span>
            <button class="item-button" data-id="${item.id}" data-category="${category}">Personalizar e Adicionar</button>
        </div>
    `;
    
    menuItem.innerHTML = itemHTML;
    return menuItem;
}

// Renderizar menu por categoria
function renderMenu() {
    // Renderizar lanches
    menuData.lanches.forEach(item => {
        lanchesGrid.appendChild(createMenuItem(item, 'lanches'));
    });
    
    // Renderizar dogs
    menuData.dogs.forEach(item => {
        dogsGrid.appendChild(createMenuItem(item, 'dogs'));
    });
    
    // Renderizar calotas
    menuData.calotas.forEach(item => {
        calotasGrid.appendChild(createMenuItem(item, 'calotas'));
    });
    
    // Renderizar porções
    menuData.porcoes.forEach(item => {
        const menuItem = createMenuItem(item, 'porcoes');
        // Adicionar preço da meia porção se disponível
        if (item.halfPrice) {
            const priceElement = menuItem.querySelector('.item-price');
            priceElement.innerHTML = `R$ ${formatPrice(item.price)} <span class="half-price">(1/2: R$ ${formatPrice(item.halfPrice)})</span>`;
        }
        porcoesGrid.appendChild(menuItem);
    });
    
    // Renderizar bebidas
    menuData.bebidas.forEach(item => {
        if (item.price > 0) { // Só mostrar bebidas com preço definido
            bebidasGrid.appendChild(createMenuItem(item, 'bebidas'));
        }
    });
    
    // NÃO renderizar adicionais, pois não existe mais a grid no HTML
    // menuData.adicionais.forEach(item => {
    //     adicionaisGrid.appendChild(createMenuItem(item, 'adicionais'));
    // });
}

// Abrir modal de personalização
function openCustomizeModal(item, category) {
    if (!customizeModal || !modalItemTitle || !itemPrice || !ingredientsList || !additionalsList) {
        console.error('Elementos do DOM necessários não encontrados.');
        return;
    }
    currentItem = item;
    modalItemTitle.textContent = item.name;
    itemPrice.textContent = formatPrice(item.price);

    // Limpar listas anteriores
    ingredientsList.innerHTML = '';
    additionalsList.innerHTML = '';
    removedIngredients = [];
    selectedAdditionals = [];

    // Adicionar ingredientes para remover
    if (item.ingredients && item.ingredients.length > 0) {
        item.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('div');
            ingredientItem.classList.add('ingredient-item');
            ingredientItem.innerHTML = `
                <label>
                    <input type="checkbox" data-ingredient="${ingredient}"> Remover ${ingredient}
                </label>
            `;
            ingredientsList.appendChild(ingredientItem);
        });
    } else {
        const noIngredients = document.createElement('p');
        noIngredients.textContent = 'Não há ingredientes para remover';
        ingredientsList.appendChild(noIngredients);
    }

    // Mostrar seção de adicionais
    if (menuData.adicionais && menuData.adicionais.length > 0) {
        menuData.adicionais.forEach(additional => {
            const additionalItem = document.createElement('div');
            additionalItem.classList.add('additional-item');
            additionalItem.innerHTML = `
                <label>
                    <input type="checkbox" data-additional="${additional.id}" data-price="${additional.price}"> 
                    ${additional.name} <span class="additional-price">(+R$ ${formatPrice(additional.price)})</span>
                </label>
            `;
            additionalsList.appendChild(additionalItem);
        });
    } else {
        const noAdditionals = document.createElement('p');
        noAdditionals.textContent = 'Não há adicionais disponíveis';
        additionalsList.appendChild(noAdditionals);
    }

    // Exibir modal
    customizeModal.style.display = 'block';

    // Atualizar eventos
    updateCustomizationEvents();
}

// Atualizar eventos de personalização
function updateCustomizationEvents() {
    // Eventos de ingredientes
    const ingredientCheckboxes = ingredientsList.querySelectorAll('input[type="checkbox"]');
    ingredientCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const ingredient = this.getAttribute('data-ingredient');
            if (this.checked) {
                if (!removedIngredients.includes(ingredient)) {
                    removedIngredients.push(ingredient);
                }
            } else {
                removedIngredients = removedIngredients.filter(item => item !== ingredient);
            }
        });
    });

    // Eventos de adicionais
    const additionalCheckboxes = additionalsList.querySelectorAll('input[type="checkbox"]');
    additionalCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const additionalId = this.getAttribute('data-additional');
            const additionalName = this.parentNode.textContent.split('(')[0].trim();
            const additionalPrice = parseFloat(this.getAttribute('data-price'));

            if (this.checked) {
                selectedAdditionals.push({
                    id: additionalId,
                    name: additionalName,
                    price: additionalPrice
                });
            } else {
                selectedAdditionals = selectedAdditionals.filter(item => item.id !== additionalId);
            }

            updateItemPrice();
        });
    });
}

// Atualizar preço do item com adicionais
function updateItemPrice() {
    let totalPrice = currentItem.price;

    // Adicionar preço dos adicionais selecionados
    selectedAdditionals.forEach(additional => {
        totalPrice += additional.price;
    });

    itemPrice.textContent = formatPrice(totalPrice);
}

// Adicionar item ao carrinho
function addToCart() {
    const additionalPrice = selectedAdditionals.reduce((total, additional) => total + additional.price, 0);
    const totalPrice = currentItem.price + additionalPrice;

    const cartItem = {
        id: `${currentItem.id}-${Date.now()}`,
        name: currentItem.name,
        price: totalPrice,
        basePrice: currentItem.price,
        removedIngredients: [...removedIngredients],
        additionals: [...selectedAdditionals]
    };

    cart.push(cartItem);
    updateCartCount();
    saveToLocalStorage();

    // Fechar modal
    customizeModal.style.display = 'none';

    // Mostrar notificação
    showNotification(`${cartItem.name} adicionado ao carrinho!`);
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Atualizar contador do carrinho
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Abrir modal do carrinho
function openCartModal() {
    if (!cartModal || !cartItems || !cartTotal) {
        console.error('Elementos do DOM necessários para o carrinho não encontrados.');
        return;
    }

    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!');
        return;
    }

    // Limpar itens anteriores
    cartItems.innerHTML = '';

    // Adicionar itens do carrinho
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        let additionalText = '';
        if (item.additionals.length > 0) {
            additionalText = item.additionals.map(additional => additional.name).join(', ');
        }

        let removedText = '';
        if (item.removedIngredients && item.removedIngredients.length > 0) {
            removedText = `<p>Ingredientes removidos: ${item.removedIngredients.join(', ')}</p>`;
        } else {
            removedText = '<p>Ingredientes removidos: Nenhum</p>';
        }

        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Preço: R$ ${formatPrice(item.price)}</p>
                ${additionalText ? `<p>Adicionais: ${additionalText}</p>` : ''}
                ${removedText}
            </div>
            <button class="cart-item-remove" data-id="${item.id}">Remover</button>
        `;

        cartItems.appendChild(cartItem);
    });

    // Atualizar valor total
    updateCartTotal();

    // Exibir modal
    cartModal.style.display = 'block';

    // Atualizar eventos
    updateCartEvents();
}

// Atualizar total do carrinho
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = formatPrice(total);
}

// Atualizar eventos do carrinho
function updateCartEvents() {
    // Evento de remover item
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-id');
            removeFromCart(itemId);
        });
    });
    
    // Evento de alterar método de entrega
    pickupBtn.addEventListener('click', function() {
        setDeliveryOption('pickup');
    });
    
    deliveryBtn.addEventListener('click', function() {
        setDeliveryOption('delivery');
    });
    
    // Evento de alterar método de pagamento
    paymentMethod.addEventListener('change', function() {
        if (this.value === 'dinheiro') {
            changeContainer.classList.remove('hidden');
        } else {
            changeContainer.classList.add('hidden');
        }
    });
}

// Definir opção de entrega
function setDeliveryOption(option) {
    deliveryOption = option;
    saveToLocalStorage();

    if (option === 'pickup') {
        pickupBtn.classList.add('active');
        deliveryBtn.classList.remove('active');
        deliveryForm.classList.add('hidden');
    } else if (option === 'delivery') { // Adicionar verificação para 'delivery'
        pickupBtn.classList.remove('active');
        deliveryBtn.classList.add('active');
        deliveryForm.classList.remove('hidden');
    } else {
        console.error('Opção de entrega inválida:', option);
    }
}

// Remover item do carrinho
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    saveToLocalStorage();
    
    // Se o carrinho ficar vazio, fechar modal
    if (cart.length === 0) {
        cartModal.style.display = 'none';
        showNotification('Carrinho vazio!');
    } else {
        // Atualizar visualização do carrinho
        openCartModal();
    }
}

// Limpar carrinho
function clearCart() {
    cart = [];
    updateCartCount();
    saveToLocalStorage();
    cartModal.style.display = 'none';
    showNotification('Carrinho limpo!');
}

// Finalizar pedido
function finishOrder() {
    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio!');
        return;
    }
    
    // Construir mensagem do pedido
    let message = '🍔 *PEDIDO NEI LANCHES* 🍔\n\n';
    
    // Adicionar itens
    message += '*Itens:*\n';
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - R$ ${formatPrice(item.price)}\n`;
        
        if (item.removedIngredients.length > 0) {
            message += `   Sem: ${item.removedIngredients.join(', ')}\n`;
        }
        
        if (item.additionals.length > 0) {
            message += `   Adicionais: ${item.additionals.map(a => a.name).join(', ')}\n`;
        }
    });
    
    // Adicionar total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `\n*Total:* R$ ${formatPrice(total)}\n\n`;
    
    // Adicionar tipo de entrega
    if (deliveryOption === 'pickup') {
        message += '*Forma de Recebimento:* Retirada\n\n';
    } else {
        const name = document.getElementById('customerName').value;
        const address = document.getElementById('customerAddress').value;
        const reference = document.getElementById('customerRef').value;
        
        if (!name || !address) {
            showNotification('Preencha os dados de entrega!');
            return;
        }
        
        message += '*Forma de Recebimento:* Entrega\n';
        message += `*Nome:* ${name}\n`;
        message += `*Endereço:* ${address}\n`;
        if (reference) {
            message += `*Referência:* ${reference}\n`;
        }
        message += '\n';
    }
    
    // Adicionar forma de pagamento
    const payment = document.getElementById('paymentMethod').value;
    message += `*Forma de Pagamento:* ${payment.charAt(0).toUpperCase() + payment.slice(1)}`;
    
    // Adicionar troco se necessário
    if (payment === 'dinheiro') {
        const changeFor = document.getElementById('changeAmount').value;
        if (changeFor && parseFloat(changeFor) > total) {
            message += `\n*Troco para:* R$ ${parseFloat(changeFor).toFixed(2).replace('.', ',')}`;
        }
    }
    
    // Codificar para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp
    window.open(`https://wa.me/5551999069981?text=${encodedMessage}`, '_blank');
    
    // Limpar carrinho após envio
    cart = [];
    updateCartCount();
    cartModal.style.display = 'none';
}

// Função para salvar dados no localStorage
function saveToLocalStorage() {
    const addressData = {
        name: document.getElementById('customerName')?.value || '',
        address: document.getElementById('customerAddress')?.value || '',
        reference: document.getElementById('customerRef')?.value || '',
        payment: document.getElementById('paymentMethod')?.value || '',
        change: document.getElementById('changeAmount')?.value || ''
    };
    localStorage.setItem('nei_cart', JSON.stringify(cart));
    localStorage.setItem('nei_deliveryOption', deliveryOption);
    localStorage.setItem('nei_addressData', JSON.stringify(addressData));
}

// Função para restaurar dados do localStorage
function restoreFromLocalStorage() {
    const savedCart = localStorage.getItem('nei_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
    const savedDelivery = localStorage.getItem('nei_deliveryOption');
    if (savedDelivery) {
        deliveryOption = savedDelivery;
    }
    const savedAddress = localStorage.getItem('nei_addressData');
    if (savedAddress) {
        const data = JSON.parse(savedAddress);
        if (document.getElementById('customerName')) document.getElementById('customerName').value = data.name || '';
        if (document.getElementById('customerAddress')) document.getElementById('customerAddress').value = data.address || '';
        if (document.getElementById('customerRef')) document.getElementById('customerRef').value = data.reference || '';
        if (document.getElementById('paymentMethod')) document.getElementById('paymentMethod').value = data.payment || '';
        if (document.getElementById('changeAmount')) document.getElementById('changeAmount').value = data.change || '';
    }
}

// Salvar endereço e pagamento ao digitar
function setupAddressListeners() {
    ['customerName','customerAddress','customerRef','paymentMethod','changeAmount'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', saveToLocalStorage);
            el.addEventListener('change', saveToLocalStorage);
        }
    });
}

// === Tema Claro/Escuro ===
function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme + '-theme');
}

function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

function setupThemeSwitcher() {
    // Criar botão
    let themeBtn = document.createElement('button');
    themeBtn.id = 'themeSwitcherBtn';
    themeBtn.className = 'theme-switcher-btn';
    document.body.appendChild(themeBtn);

    // Função para atualizar texto do botão
    function updateBtnText(theme) {
        themeBtn.textContent = theme === 'dark' ? 'Claro' : 'Escuro';
    }

    // Detectar tema salvo ou do sistema
    let savedTheme = localStorage.getItem('nei_theme');
    let theme = savedTheme || detectSystemTheme();
    applyTheme(theme);
    updateBtnText(theme);

    // Alternar tema ao clicar
    themeBtn.addEventListener('click', function() {
        theme = (theme === 'dark') ? 'light' : 'dark';
        applyTheme(theme);
        updateBtnText(theme);
        localStorage.setItem('nei_theme', theme);
    });

    // Atualizar se o sistema mudar (opcional)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('nei_theme')) {
            theme = e.matches ? 'dark' : 'light';
            applyTheme(theme);
            updateBtnText(theme);
        }
    });
}

// Inicializar
function init() {
    // Renderizar menu
    renderMenu();
    
    // Evento de toggle do menu mobile
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
    
    // Eventos de scroll suave para seções
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            menu.classList.remove('show');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Evento para abrir modal de personalização
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('item-button')) {
            const itemId = e.target.getAttribute('data-id');
            const category = e.target.getAttribute('data-category');
            const item = menuData[category].find(item => item.id === itemId);
            
            if (item) {
                openCustomizeModal(item, category);
            }
        }
    });
    
    // Evento para adicionar ao carrinho
    addToCartBtn.addEventListener('click', addToCart);
    
    // Evento para abrir carrinho
    cartButton.addEventListener('click', openCartModal);
    
    // Fechar modais
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            if (customizeModal) customizeModal.style.display = 'none';
            if (cartModal) cartModal.style.display = 'none';
        });
    });
    
    // Evento de clique fora dos modais para fechar
    window.addEventListener('click', function(e) {
        if (e.target === customizeModal && customizeModal) {
            customizeModal.style.display = 'none';
        }
        if (e.target === cartModal && cartModal) {
            cartModal.style.display = 'none';
        }
    });
    
    // Eventos do carrinho
    clearCartBtn.addEventListener('click', clearCart);
    finishOrderBtn.addEventListener('click', finishOrder);
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    init();
    restoreFromLocalStorage();
    setupAddressListeners();
    setupThemeSwitcher(); // Adiciona o botão e lógica de tema
});

