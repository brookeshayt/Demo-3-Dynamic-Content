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

$('#Cat').on('click', function () {
    console.log('You poked the bear');

    catcount++;
    console.log(catcount);

    $('#cat-eye-closed').hide();
    $('#cat-eye-open').show();

    if (catcount == 1) {
        $('#cat-eye-closed').hide();
        $('#cat-eye-open').show();
    } else if (catcount == 2) {
        catmeow.play();
    }
    else if (catcount == 3) {
        $('#Cat').hide();
        catcount = 0;
    }
});




