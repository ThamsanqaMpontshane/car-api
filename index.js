const theColors = document.querySelector('.colors');
const theBrands = document.querySelector('.brands');
const theCars = document.querySelector('.cars');
const carsTemplateText = document.querySelector('.colorsTemplate');
const carsTemplate = Handlebars.compile(carsTemplateText.innerHTML);
const carsElement = document.querySelector('.myCars');


//if colorsButton is clicked, show theColors , when clicked again, hide theColors
axios.get('https://api-tutor.herokuapp.com/v1/colors')
    .then((response) => {
        response.data.forEach((color) => {
            const colorButton = document.createElement('button');
            colorButton.innerHTML = color;
            colorButton.style.color = color;
            colorButton.id = color;
            theColors.appendChild(colorButton);
            colorButton.addEventListener('click', () => {
                if (colorButton.id === color) {
                    axios.get('https://api-tutor.herokuapp.com/v1/cars/color/' + color)
                        .then((response) => {
                            const cars = response.data;
                            carsElement.innerHTML = carsTemplate({cars});
                        })
                        .catch((error) => {
                            console.log(error);
                        }
                        )
                }
            })
        })
    })


axios.get('https://api-tutor.herokuapp.com/v1/makes')
    .then((response) => {
        response.data.forEach((brand) => {
            const brandButton = document.createElement('button');
            brandButton.innerHTML = brand;
            brandButton.id = brand;
            theBrands.appendChild(brandButton);
            brandButton.addEventListener('click', () => {
                if (brandButton.id === brand) {
                    axios.get('https://api-tutor.herokuapp.com/v1/cars/make/' + brand)
                        .then((response) => {
                            const cars = response.data;
                            carsElement.innerHTML = carsTemplate({cars});
                        })
                        .catch((error) => {
                            console.log(error);
                        }
                        )
                }
            }
            )
        });
    }
);

// axios.get('https://api-tutor.herokuapp.com/v1/cars')
//     .then(result => {
//         const cars = result.data;
//         carsElement.innerHTML = carsTemplate({ cars });
//     }
// );



