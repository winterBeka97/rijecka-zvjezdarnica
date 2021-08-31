function initMap() {
    // The location 
    const astronomskiCentar = { lat:45.32490431299977, lng:14.482875132700196 };
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: astronomskiCentar,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
      position: astronomskiCentar,
      map: map,
    });
  }