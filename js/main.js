var initMap = function () {
    $.getJSON('locationinfo.json', function (data) {
        //var output = "<ul>";
        var lat1 = parseFloat(data.location[0].latitude);
        var lng1 = parseFloat(data.location[0].longitude);
        var lat2 = parseFloat(data.location[1].latitude);
        var lng2 = parseFloat(data.location[1].longitude);
        var lat3 = parseFloat(data.location[2].latitude);
        var lng3 = parseFloat(data.location[2].longitude);
        var location1 = {
            lat: lat1
            , lng: lng1
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10
            , center: location1
        });
        var location2 = {
            lat: lat2
            , lng: lng2
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10
            , center: location2
        });
        var location3 = {
            lat: lat3
            , lng: lng3
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10
            , center: location1
        });
        var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h4 id="firstHeading" class="firstHeading">Belfast</h4>'+ '<div id="bodyContent">' + '<table><tr><th>Popultion</th><th>Employment</th><th>Happiness%</th></tr><tr><td>'+data.location[0].population+'</td><td>Employment</td><td>Happiness</td></tr></tr></table>'+'</div>' + '</div>';
        var infowindow1 = new google.maps.InfoWindow({
            content: contentString
        });
        var infowindow2 = new google.maps.InfoWindow({
            content: contentString
        });
        var infowindow3 = new google.maps.InfoWindow({
            content: contentString
        });
        var marker1 = new google.maps.Marker({
            position: location1
            , map: map
            , title: 'Belfast NI'
        });
        marker1.addListener('click', function () {
            infowindow1.open(map, marker1);
        });
        var marker2 = new google.maps.Marker({
            position: location2
            , map: map
            , title: 'Lisburn NI'
        });
        marker2.addListener('click', function () {
            infowindow2.open(map, marker2);
        });
        var marker3 = new google.maps.Marker({
            position: location3
            , map: map
            , title: 'Carrickfergus NI'
        });
        marker3.addListener('click', function () {
            infowindow3.open(map, marker3);
        });
    });
};