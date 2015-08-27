

var LeafDoc = require('./src/leafdoc');
var doc = new LeafDoc();


doc.addFile('src/leafdoc.js');

// doc.addFile('../Leaflet/src/layer/marker/Marker.js');
// doc.addFile('../Leaflet/src/layer/marker/Marker.Drag.js');
// // doc.addFile('../Leaflet/src/layer/marker/Marker.Popup.js');
// doc.addFile('../Leaflet/src/layer/Popup.js');
// doc.addFile('../Leaflet/src/core/Events.js');
// doc.addFile('../Leaflet/src/layer/Layer.js');
// doc.addFile('../Leaflet/src/layer/tile/GridLayer.js');
// doc.addFile('../Leaflet/src/layer/tile/TileLayer.js');
// doc.addFile('../Leaflet/src/layer/tile/TileLayer.WMS.js');



// console.log('internal namespaces are', doc._namespaces);


// console.log('status is', doc);

// console.log('calling outputStr');
var out = doc.outputStr();


var sander = require('sander');


// sander.writeFileSync('Leaflet-docs.html', out);
sander.writeFileSync('Leafdoc.html', out);

// console.log(out);

// console.log(doc._AKAs);
