'use strict'
const leftBtnSection1 = document.querySelector(".leftButton-section-1");
const rightBtnSection1 = document.querySelector(".rightButton-section-1");
const sliderFirstNumSection1= document.querySelector('.sliderFirstNumber-section-1');
const imgSection1 = document.querySelector('.image-section-1');

leftBtnSection1.addEventListener('click', () => slider1('left'));
rightBtnSection1.addEventListener('click', () => slider1('right'));

let imageSection1 = ['image/image-section-1.png', 'image/image-section-1.png', 'image/image-section-1.png', 'image/image-section-1.png', 'image/image-section-1.png'];
/*  Тут можно указать 5-ть любых изображений, я же просто повторил исходное*/


function slider1(itemButton) {
    if (itemButton == 'right') {
        parseInt(sliderFirstNumSection1.innerHTML)<5 ? sliderFirstNumSection1.innerHTML=parseInt(sliderFirstNumSection1.innerHTML)+1 : sliderFirstNumSection1.innerHTML = '5';
    } else {
        parseInt(sliderFirstNumSection1.innerHTML)>1 ? sliderFirstNumSection1.innerHTML=parseInt(sliderFirstNumSection1.innerHTML)-1 : sliderFirstNumSection1.innerHTML = '1';
    };
    imgSection1.src = imageSection1[parseInt(sliderFirstNumSection1.innerHTML)-1]; /*меняем картинку по её номеру */
}

const leftBtnSection3 = document.querySelector(".image-3-leftButton");
const rightBtnSection3 = document.querySelector(".image-3-rightButton");

leftBtnSection3.addEventListener('click', () => slider2('left'));
rightBtnSection3.addEventListener('click', () => slider2('right'));

/*------------карточка товара--------------------------------------------------------------------------*/
class Product {
    constructor(urlImage, name, model, price){
        this.urlImage = urlImage;
        this.name = name;
        this.model = model;
        this.price = price;
    }
}



let product1 = new Product('image/section-3-image-1.png','Funboards','Chilli Rare Bird',890);
let product2 = new Product ('image/section-3-image-2.png', 'Surfboards', 'Emery NEM XF',950);
let product3 = new Product('image/section-3-image-3.png', 'Funboards', 'Agency GROM', 670);

let productArr = [];
productArr.push(product1);
productArr.push(product2);
productArr.push(product3);

let position =[3,1,2]; /*position[0],position[1],position[2] - значения индексов позиций карточек товара*/

const imagePart1 = document.querySelector('.image-part-1');
const namePart1 = document.querySelector('.name-part-1');
const modelPart1 = document.querySelector('.model-part-1');
const pricePart1 = document.querySelector('.price-part-1');

const imagePart2 = document.querySelector('.image-part-2');
const namePart2 = document.querySelector('.name-part-2');
const modelPart2 = document.querySelector('.model-part-2');
const pricePart2 = document.querySelector('.price-part-2');

const imagePart3 = document.querySelector('.image-part-3');
const namePart3 = document.querySelector('.name-part-3');
const modelPart3 = document.querySelector('.model-part-3');
const pricePart3 = document.querySelector('.price-part-3');

const part1 = document.querySelector('.part-1');
const part2 = document.querySelector('.part-2');
const part3 = document.querySelector('.part-3');
/* НЕ ЗАБУДЬТЕ ПОМЕНЯТЬ УРЛУ !!! */
const backgroundImg = ['background-image: url("http://localhost:63342/NewResponseProject-1/image/media960-board-1.png"); margin-top: 0%','background-image: url("http://localhost:63342/NewResponseProject-1/image/media960-board-2.png"); margin-top: -2.3%;','background-image: url("http://localhost:63342/NewResponseProject-1/image/media960-board-3.png"); margin-top: -3%']

const imageStyle = ['width: 80%; margin-top: 0%', 'width: 79%; margin-top: 0%', 'width: 76.8%;margin-top: -1.8%'];
const nameStyle = ['font-family: Poppins-Light; font-size: 0.75rem; color:#939393; text-transform: uppercase; letter-spacing: 0.25rem; position:absolute; margin-top: 17.5%; margin-left: -4.5%;',
'font-family: Poppins-Light; font-size: 0.75rem; color:#939393; text-transform: uppercase; letter-spacing: 0.25rem; position:absolute; margin-top: 17.5%; margin-left: -4.5%;',
    'font-family: Poppins-Light; font-size: 0.75rem; color:#939393; text-transform: uppercase; letter-spacing: 0.25rem; position:absolute; margin-top: 17.5%; margin-left: -4.5%;'];
const modelStyle = ['font-family: Playfair-Display-Bold; font-size: 1.625rem; color:#333333; position: absolute; margin-top: -16.5%; margin-left: 15.5%;',
    'font-family: Playfair-Display-Bold; font-size: 1.625rem; color:#333333; position: absolute; margin-top: -16.5%; margin-left: 15.3%;',
    'font-family: Playfair-Display-Bold; font-size: 1.625rem; color:#333333; position: absolute; margin-top: -16.5%; margin-left: 14.8%;'];
const priceStyle = ['font-family: Poppins-Light; font-size: 1.25rem; color:#d47ab4; text-transform: uppercase; position:absolute; margin-top: -12.3%; margin-left: 19.5%;',
    'font-family: Poppins-Light; font-size: 1.25rem; color:#d47ab4; text-transform: uppercase; position:absolute; margin-top: -13.2%; margin-left: 19.5%;',
    'font-family: Poppins-Light; font-size: 1.25rem; color:#d47ab4; text-transform: uppercase; position:absolute; margin-top: -13.2%; margin-left: 19.5%;'];

function slider2(itemButton) {
    if (itemButton == 'right'){
        position[0]+=2; /*каждый клик карточка 'перепрыгивает' через одну позицию, но из-за того, что я юзаю остаток от деления на "3", поэтому и прибавляю "2"*/
        position[1]+=2;
        position[2]+=2;
        let numberImage1 = Math.abs(position[0]) % 3; /*вычисляем, какой товар по номеру будет на первом месте*/
        let numberImage2 = Math.abs(position[1]) % 3; /*вычисляем, какой товар по номеру будет на втором месте*/
        let numberImage3 = Math.abs(position[2]) % 3; /*вычисляем, какой товар по номеру будет на третьем месте*/

        if (window.innerWidth>960){
            /*------------------1 товар-------------------------------*/
        imagePart1.src = productArr[numberImage1].urlImage;
        imagePart1.style.cssText =imageStyle[numberImage1];

        namePart1.innerHTML = productArr[numberImage1].name;
        namePart1.style.cssText =nameStyle[numberImage1];

        modelPart1.innerHTML = productArr[numberImage1].model;
        modelPart1.style.cssText =modelStyle[numberImage1];

        pricePart1.innerHTML = `$${productArr[numberImage1].price}`;
            /*------------------2 товар-------------------------------*/

        imagePart2.src = productArr[numberImage2].urlImage;
        imagePart2.style.cssText =imageStyle[numberImage2];

        namePart2.innerHTML = productArr[numberImage2].name;
        namePart2.style.cssText =nameStyle[numberImage2];

        modelPart2.innerHTML = productArr[numberImage2].model;
        modelPart2.style.cssText =modelStyle[numberImage2];

        pricePart2.innerHTML = `$${productArr[numberImage2].price}`;

            /*------------------3 товар-------------------------------*/
        imagePart3.src = productArr[numberImage3].urlImage;
        imagePart3.style.cssText =imageStyle[numberImage3];

        namePart3.innerHTML = productArr[numberImage3].name;
        namePart3.style.cssText =nameStyle[numberImage3];

        modelPart3.innerHTML = productArr[numberImage3].model;
        modelPart3.style.cssText =modelStyle[numberImage3];

        pricePart3.innerHTML = `$${productArr[numberImage3].price}`;
        } else {
            part1.style.cssText = backgroundImg[numberImage1];
            part2.style.cssText = backgroundImg[numberImage2];
           /* part3.style.cssText = backgroundImg[numberImage3];*/
            console.log(backgroundImg[numberImage1]+"---"+backgroundImg[numberImage2]);

        };

    } else {
        position[0]-=2;
        position[1]-=2;
        position[2]-=2;
        let numberImage1 = Math.abs(position[0]) % 3;
        let numberImage2 = Math.abs(position[1]) % 3;
        let numberImage3 = Math.abs(position[2]) % 3;

        if (window.innerWidth>960) {
            /*------------------1 товар-------------------------------*/
            imagePart1.src = productArr[numberImage1].urlImage;
            imagePart1.style.cssText = imageStyle[numberImage1];

            namePart1.innerHTML = productArr[numberImage1].name;
            namePart1.style.cssText = nameStyle[numberImage1];

            modelPart1.innerHTML = productArr[numberImage1].model;
            modelPart1.style.cssText = modelStyle[numberImage1];

            pricePart1.innerHTML = `$${productArr[numberImage1].price}`;
            /*------------------2 товар-------------------------------*/

            imagePart2.src = productArr[numberImage2].urlImage;
            imagePart2.style.cssText = imageStyle[numberImage2];

            namePart2.innerHTML = productArr[numberImage2].name;
            namePart2.style.cssText = nameStyle[numberImage2];

            modelPart2.innerHTML = productArr[numberImage2].model;
            modelPart2.style.cssText = modelStyle[numberImage2];

            pricePart2.innerHTML = `$${productArr[numberImage2].price}`;
            /*------------------3 товар-------------------------------*/

            imagePart3.src = productArr[numberImage3].urlImage;
            imagePart3.style.cssText = imageStyle[numberImage3];

            namePart3.innerHTML = productArr[numberImage3].name;
            namePart3.style.cssText = nameStyle[numberImage3];

            modelPart3.innerHTML = productArr[numberImage3].model;
            modelPart3.style.cssText = modelStyle[numberImage3];

            pricePart3.innerHTML = `$${productArr[numberImage3].price}`;
        } else {
            part1.style.cssText = backgroundImg[numberImage1];
            part2.style.cssText = backgroundImg[numberImage2];
            /*part3.style.cssText = backgroundImg[numberImage3];*/
            console.log(backgroundImg[numberImage1]+"---"+backgroundImg[numberImage2]);
        }
    };



}


