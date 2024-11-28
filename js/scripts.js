console.log('SVG Demo');

//.on is an event listener that listens for an event on the element. 

var dogcount = 0;
var dogwhine = document.getElementById('dog_whine');
var catcount = 0;
var catmeow = document.getElementById('cat_meow');

$('#Doggo').on('click', function () {
    console.log('You clicked the dog');

    dogcount++;
    console.log(dogcount);

    $('#dog-eye-closed').hide();
    $('#dog-eye-open').show();

    if (dogcount == 1) {
        $('#dog-eye-closed').hide();
        $('#dog-eye-open').show();
    } else if (dogcount == 2) {
        dogwhine.play();
    }
    else if (dogcount == 3) {
        $('#Doggo').hide();
        $('#Doggo-Play').show();
        dogcount = 0;
    }
});

$('#Cat').on('mouseenter', function () {
    console.log('mouse entered the region of the cat');
    $('#cat-eye-closed, #cat-eye-angry').hide();
    $('#cat-eye-open').show();
});

$('#Cat').on('mouseleave', function () {
    console.log('mouse left the region of the cat');
    $('#cat-eye-closed').show();
    $('#cat-eye-open, #cat-eye-angry').hide();
});

$('#Cat').on('click', function () {     //when we click on the cat, the eye either closes or you get an angry meow at random.
    console.log('You clicked the cat');

    var random = Math.floor(Math.random() * 2);
    console.log(random);

    if (random == 0) {
        $('#cat-eye-closed').show();
        $('#cat-eye-open, #cat-eye-angry').hide();
    } else {
        $('#cat-eye-angry').show();
        $('#cat-eye-open, #cat-eye-closed').hide();
        catmeow.play();
    }

    catcount++;
    console.log(catcount);
    if (catcount == 10) {
        console.log('The cat left');
        $('#cat-eye-angry').show();
        $('#cat-eye-open, #cat-eye-closed').hide();
        $('#Cat').fadeOut(2000);
    }
});

var quote1 = "Mi casa es mi casa—get your own.";
var quote2 = "Paws and Reflect";
var quote3 = "Home is where I scratch the furniture most";
var quote4 = "Bloom where you're planted—or where you've buried your treats";

var quotes = [quote1, quote2, quote3, quote4];
var colors = ["#568b62", "#ff976d", "#404E7C", "#62466B", "#073B3A", "#8884FF", "#563440", "#AABD8C"]

var quoteCounter = 0;

function changeQuote() {
    if (quoteCounter == quotes.length) {
        quoteCounter = 0;
    }
    $('blockquote').text(quotes[quoteCounter])
    quoteCounter++;

    var randomColor = Math.floor(Math.random() * colors.length);
    $('blockquote').css('color', colors[randomColor]);
};
setInterval(changeQuote, 4000);








