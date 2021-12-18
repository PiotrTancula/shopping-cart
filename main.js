function addDataNumber() {
    for (let i = 0; i < addToCartButton.length; i++) {
        addToCartButton[i].setAttribute('data-number', [i]);
    }

}


let addToCartButton = [...document.getElementsByClassName('cart')];
let shoppingCartItemsSpace = document.getElementById('shoppingCart-itemsSpace');
let courseDescription = [...document.getElementsByClassName('course')];
let shoppingCart = document.getElementById('shoppingCartOpen');
let price = [...document.getElementsByClassName('price')];
let totalShoppingCartValue = document.getElementById('shoppingCart-totalValue');





addDataNumber();





for (let item of addToCartButton) {
    item.addEventListener('click', buy);
}

let totalItemsForBuy = [];
let totalValue = 0;
let totalMinusValue = 0;

function buy(e) {

    let itemForBuy = document.createElement('div');
    let addButton = document.createElement('div');
    let reduceButton = document.createElement('div');
    let productDescription = document.createElement('div');
    let priceDescription = document.createElement('div');
    let quantityDescription = document.createElement('div');
    productDescription.textContent = courseDescription[e.target.dataset.number].textContent;
    priceDescription.textContent = price[e.target.dataset.number].textContent;

    reduceButton.textContent = '-';
    addButton.textContent = '+';
    itemForBuy.classList.add('itemForBuy');
    addButton.classList.add('shoppingCart-itemsSpace-add');
    reduceButton.classList.add('shoppingCart-itemsSpace-reduce')
    productDescription.classList.add('shoppingCart-itemsSpace-productDescription');
    priceDescription.classList.add('shoppingCart-itemsSpace-priceDescription');
    quantityDescription.classList.add('shoppingCart-itemsSpace-quantityDescription')
    quantityDescription.textContent = '0';

    itemForBuy.appendChild(productDescription);
    itemForBuy.appendChild(priceDescription);
    itemForBuy.appendChild(quantityDescription);
    itemForBuy.appendChild(addButton);
    itemForBuy.appendChild(reduceButton);
    shoppingCartItemsSpace.appendChild(itemForBuy);

    let totalItemsForBuy = [];
    totalItemsForBuy.push(itemForBuy);





    let counter = 0;



    addButton.addEventListener('click', function (buy) {

        counter++;
        quantityDescription.textContent = counter;




        let currentPrice = parseInt(event.target.parentNode.children[1].textContent);
        let currentQuantity = event.target.parentNode.children[2].textContent;
        let currentItemPriceQuantity = currentPrice * currentQuantity;
        totalValue += currentPrice;
        console.log(currentPrice, currentQuantity, currentItemPriceQuantity, totalValue, counter);
        totalShoppingCartValue.textContent = `${totalValue}$`;


    })

    reduceButton.addEventListener('click', function (buy) {




        counter--;
        quantityDescription.textContent = counter;



        let currentPrice = event.target.parentNode.children[1].textContent;
        console.log(currentPrice);
        console.log(typeof (quantityDescription.textContent));





        if (counter < 0) {

            totalMinusValue += currentPrice;


        } else {
            totalValue -= currentPrice;
            totalShoppingCartValue.textContent = `${totalValue}$`;
            console.log(totalValue);
        }

        console.log(totalValue, counter);

        if (counter <= 0) {


            priceDescription.textContent = 0;
            counter = 0;
            itemForBuy.parentNode.removeChild(itemForBuy);
            totalShoppingCartValue.textContent = `${totalValue}$`;


            console.log('dziala');
        }














    })










}