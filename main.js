const menuEmail = document.querySelector('.navbar-email');
const containerMenu = document.querySelector('.containerMenu');
const iconMenu = document.querySelector('.icon-menu');
const containerMenumobile = document.querySelector('.containerMenumobile');
const itemCar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleContainerMenu);
iconMenu.addEventListener('click', displayMenuMobile);
itemCar.addEventListener('click', displayCarContent);

function toggleContainerMenu (){
    containerMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function displayMenuMobile(){
    containerMenumobile.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function displayCarContent(){
    productDetail.classList.toggle('inactive');
    containerMenumobile.classList.add('inactive');
    containerMenu.classList.add('inactive');
}



//ProductsList
const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Board',
    price:3200,
    image:'https://media.istockphoto.com/id/1202959751/es/foto/maqueta-de-plantilla-de-tabla-de-skate-en-blanco-aislada-en-blanco.jpg?b=1&s=612x612&w=0&k=20&c=lt6NmQwjXY1lSLQ5xrDPwLqKBLmcGhddiCK-CriyQ4s=',
});
productList.push({
    name:'Patin electrico',
    price:16000,
    image:'https://media.istockphoto.com/id/1073716174/es/foto/cerrar-vista-de-las-piernas-del-hombre-en-el-scooter-el%C3%A9ctrico.jpg?b=1&s=612x612&w=0&k=20&c=9ltapZSjbBcCux4hgyzxDT4-xpioG2EZpBki0PEq_G0=',
});

function renderProducts(arr){
    for (product of productList){
        const productsCard = document.createElement('div');
        productsCard.classList.add('products-card');

        const productsimg = document.createElement('img');
        productsimg.setAttribute('src',product.image);

        const productsinfo = document.createElement('div');
        productsinfo.classList.add('product-info');

        const productsInfoDetail = document.createElement('div');

        const productsPrice = document.createElement('p');
        productsPrice.innerText = product.price;

        const productsName = document.createElement('p');
        productsName.innerText = product.name;

        const productsFigure = document.createElement('figure');
        const productsFigureImg = document.createElement('img');
        productsFigureImg.setAttribute('src','./images/icons/bt_add_to_cart.svg');

        productsInfoDetail.append(productsPrice,productsName);
        productsFigure.appendChild(productsFigureImg);
        productsinfo.append(productsInfoDetail,productsFigure);
        productsCard.append(productsimg,productsinfo);

        cardsContainer.appendChild(productsCard);
    }
}

renderProducts(productList);



