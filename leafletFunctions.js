var blueMarker = L.AwesomeMarkers.icon({
    icon: 'play',
    markerColor: 'blue'
});

var greenMarker = L.AwesomeMarkers.icon({
    icon: 'play',
    markerColor: 'green'
});

var redMarker = L.AwesomeMarkers.icon({
    icon: 'play',
    markerColor: 'red'
});

var client;

function getFormData(){
    getNumCorrect();
    client = new XMLHttpRequest();
    var url =  "http://developer.cege.ucl.ac.uk:" + httpPortNumber + '/getQuizPoints/' + httpPortNumber;
    client.open("GET", url, true);
    client.onreadystatechange = processFormData;
    try{
        client.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }
    catch (e){
    }
    client.send();
}

function processFormData(){
    //Waiting response from server
    if(client.readyState<4){
        console.log('waiting for form data')
    }
    else if (client.readyState === 4){
        if (client.status > 199 && client.status < 300){
            console.log('form data sent.')
            var FormData = client.responseText;
            loadFormLayer(FormData);
        }
    }
}

// var formLayer;

// function loadFromLAyer(FormData){
//     var formJSON = JSON.parse(FormData)[0];
//     formLayer = L.geojson(formJSON,
//     {
//         // use point to layer to create the points
//         pointToLayer: function(feature, latlng){
//             // in this case, we build an HTML DIV string
//             // using the values in the data
//             var htmlString = "<DIV id='popup" + feature.properties.id + "><h3>" +
//         }
//     })
// }


// OLD DATASET
// var earthquakelayer;
// var mypoint;
// var mycircle;
// var mypolygon;
// var earthquakes;

// function addPointLinePoly(){

//     // add a point
//     mypoint = L.marker([51.5,-0.09]).addTo(mymap)
//         .bindPopup("<b>Hello!</b><br/>I am a popup.").openPopup();

//     // add a circle
//     mycircle = L.circle([51.5, -0.11], 500, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity:0.5
//     }).addTo(mymap).bindPopup("I am a circle")

//     // add a polygon (triangle)
//     mypolygon = L.polygon([
//         [51.509, -0.08],
//         [51.503, -0.06],
//         [51.51, -0.047]
//     ], {
//         color:'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5
//         }
//     ).addTo(mymap).bindPopup("I am a polygon");


// }


// function getEarthquakes(){
//     client = new XMLHttpRequest();
//     var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
//     client.open('GET', url);
//     client.onreadystatechange = dataResponse;
//     client.send();

// }


// // // create the code to wait for the response from the data server, and process the response once it is received
// // function earthquakeResponse(){
// //     // this function listens out for the server to say that the data is ready (i.e. has state 4)
// //     if (client.readyState == 4) {
// //         //once daata is ready, process the data
// //         var earthquakedata = client.responseText;
// //         loadEarthquakelayer(earthquakedata);
// //     }
// // }


// // define a global variable to hold the layer so we can use it later on
// var earthquakelayer;
        
// // convert the received data (which is text) into JSON format and add it to the map
// function loadEarthquakelayer(earthquakedata){
//     // convert text to JSON
//     var earthquakejson = JSON.parse(earthquakedata);
//     earthquakes = earthquakejson;
            
//     // load geoJSON earthquake layer using custom markers
//     earthquakelayer = L.geoJSON(earthquakejson,
//     {
//         // use point to layer to create the points
//         pointToLayer: function(feature, latlng){
//             // look at properties of GeoJSON file to see EQ magnitude and use different marker depending on magnitude
//             if (feature.properties.mag > 1.75){
//                 return L.marker(latlng, {icon: redMarker}).bindPopup("<b>"+
//                 feature.properties.place+"</b>");
//             }
                    
//             else { 
//             return L.marker(latlng, {icon: pinkMarker}).bindPopup("<b>"+
//                 feature.properties.place+"</b>");
//             }
//         },                  
//     }).addTo(mymap);
//     // change the map zoom so that all the data is shown
//     mymap.fitBounds(earthquakelayer.getBounds());
// }
// */
// /*var xhrFormData; //define global variable to process AJAX request to get formdata
// //var allForms;
// var formDataLayer; // global variable to hold formdata for later use






// function removeLayers(){
//     mymap.removeLayer(earthquakelayer);
//     mymap.removeLayer(mypoint)
//     mymap.removeLayer(mycircle)
//     mymap.removeLayer(mypolygon)


// }

// function dataResponse() {
//     if (client.readyState == 4) {
//         var geoJSONData = client.responseText;
//         console.log('loading data')
//         loadLayer(geoJSONData);
//     }
// }

// function loadLayer(geoJSONData){
//     var json = JSON.parse(geoJSONData);
//     earthquakes = json;
//     earthquakelayer = L.geoJson(json).addTo(mymap);
//     mymap.fitBounds(earthquakelayer.getBounds());
// }