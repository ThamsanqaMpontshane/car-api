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
            theColors.innerHTML += `<li>${color}</li>`;
        });
    }
);

axios.get('https://api-tutor.herokuapp.com/v1/makes')
    .then((response) => {
        response.data.forEach((brand) => {
            theBrands.innerHTML += `<li>${brand}</li>`;
        });
    }
);

axios.get('https://api-tutor.herokuapp.com/v1/cars')
    .then(result => {
        const cars = result.data;
        carsElement.innerHTML = carsTemplate({ cars });
    }
);


