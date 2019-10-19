function initMap() {

    // Your Location
    const loc = {
        lat: -25.889893,
        lng: 32.432576
    };

    // Centered map on a location
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 8
    });

    const marker = new google.maps.Map({
        position: loc,
        map: map
    })
}

window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})

//Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            800);
    }
});