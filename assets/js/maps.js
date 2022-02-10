function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 52.3555,
            lng: 1.1743
        }
    });
    new google.maps.Marker({
        position: {lat: 51.465247 , lng:-0.035574},
        map,
        title: "Home",
    });
}