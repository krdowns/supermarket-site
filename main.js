var cart = [];

var dairyItems = [{
        img: 'images/Dairy/butter.png',
        name: 'Butter'
    },

    {
        img: 'images/Dairy/milk.png',
        name: 'Milk'
    },

    {
        img: 'images/Dairy/sour-cream.png',
        name: 'Sour Cream'
    },

    {
        img: 'images/Dairy/yogurt.png',
        name: 'Yogurt'
    }
];

var meatItems = [{
        img: 'images/Meat/chicken-breast.png',
        name: 'Chicken Breasts'
    },

    {
        img: 'images/Meat/ground-beef.png',
        name: 'Ground Beef'
    },

    {
        img: 'images/Meat/pork-chops.png',
        name: 'Pork Chops'
    },

    {
        img: 'images/Meat/t-bone.png',
        name: 'T-Bone Steak'
    }
];

var produceItems = [{
        img: 'images/Produce/avocado.png',
        name: 'Avocados'
    },

    {
        img: 'images/Produce/broccoli.png',
        name: 'Broccoli'
    },

    {
        img: 'images/Produce/cauliflower.png',
        name: 'Cauliflower'
    },

    {
        img: 'images/Produce/lettuce.png',
        name: 'Lettuce'
    }
];

$('#dairy').click(function () {
    populateItems('dairy');
});

$('#meat').click(function () {
    populateItems('meat');
});

$('#produce').click(function () {
    populateItems('produce');
});

// var dairyItems = document.getElementById('dairy').addEventListener('click', populateItems());

// var meatItems= document.getElementById('meat').addEventListener('click', populateItems());

// var produceItems = document.getElementById('produce').addEventListener('click', populateItems());

$('#items').on('click', '.item', function() {
    var itemName = $(this).find('p').text();
    addItemToShoppingCart(itemName);
});


//----------------ADD TO SCREEN-------------//


function populateItems(category) {

    clearItems();

    var myItems;
    switch (category) {
        case 'dairy':
            myItems = dairyItems;
            break;
        case 'meat':
            myItems = meatItems;
            break;
        case 'produce':
            myItems = produceItems;
            break;
        default:
    }


    var categoryList = $('ul');
    for (var i = 0; i < myItems.length; i++) {
        var currentItem = myItems[i];
        categoryList.append(
            `<li class='items'>
                <img src='${currentItem.img}'>
                <p>${currentItem.name}</p>
            </li>`);
    }

    $('#items').append(categoryList);
}


function clearItems() {
    $('#items').empty();
}


//-----------------ADD TO CART--------------//
function addToCart(item) {
    $('#cart ul').append(`
    <li>
            ${item}
    </li>`);
}