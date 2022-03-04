let index = 0;
let cards = [];

const cardsInfo = [

    { id: 1, img: '../../../img/pizza5.png', title: 'pizza' },
    { id: 2, img: '../../../img/pizza8.png', title: 'pizza1' },
    { id: 3, img: '../../../img/pizza6.png', title: 'pizza2' },
    { id: 4, img: '../../../img/pizza10.png', title: 'pizza3' },
    { id: 5, img: '../../../img/pizza11.png', title: 'pizza4' },
    { id: 6, img: '../../../img/pizza12.png', title: 'pizza5' },
    { id: 7, img: '../../../img/pizza9.png', title: 'pizza6' },
    { id: 8, img: '../../../img/pizza9.png', title: 'pizza7' },
    { id: 9, img: '../../../img/pizza9.png', title: 'pizza8' },
    { id: 10, img: '../../../img/pizza9.png', title: 'pizza9' },
    { id: 11, img: '../../../img/pizza9.png', title: 'pizza10' },
    { id: 12, img: '../../../img/pizza9.png', title: 'pizza11' },
]

export const carouselFunction = () => {
    while (index < cardsInfo.length) {

        cards.push(cardsInfo.slice(index, index + 3));
        index += 3;
    }
    return cards;
}



