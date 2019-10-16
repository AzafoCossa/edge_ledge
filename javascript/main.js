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