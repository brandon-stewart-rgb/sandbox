//imdb slider
var slider = document.getElementById('slider');
noUiSlider.create(slider, {
    // starting value range
    start: [0, 10],
    //  minimum distance between the handles can be set using the margin option 
    margin: 1,
    // adds color to bar
    connect: true,
    // tool tips to display current value
    tooltips: true,
    
    range: {
        'min': [0],
        
        'max': [10]
    },
     // change format of decimals to integers
     format: wNumb( { decimals: 0 })
   
});

// adds slider IMDB Rating value to input box in order to be included in form. ID is form id
var imdbInput = document.getElementById('imdb');
slider.noUiSlider.on('update', function (values) {
  var imdbValue = values.join(' - ');
  imdbInput.value = imdbValue;
});

imdbInput.addEventListener('change', function () {
  slider.noUiSlider.set([null, this.value]);
});




// year span slider
var nonLinearStepSlider = document.getElementById('span-slider');
noUiSlider.create(nonLinearStepSlider, {
    // starting values
    start: [1900, 2021],
    //  minimum distance between the handles can be set using the margin option currently set at a 19 to keep separate
    margin: 19,
    // adds color to bar
    connect: true,
     // tool tips to display current value
    tooltips: true,
    
    // connect: 'lower',
    range: {
        'min': [1900],
        
        'max': [2021]
    },
     // change format of decimals to integers
     format: wNumb( { decimals: 0 })
});

// display the slider value 
var yearsInput = document.getElementById('year-span');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
    // join the two values and then place in input box
    var yearsValue = values.join(' - ');
    yearsInput.value = yearsValue;
    console.log(values)
});


yearsInput.addEventListener('change', function () {
    nonLinearStepSlider.noUiSlider.set([null, this.value]);
});