const express = require('express');
var app = express();
app.use( express.static( __dirname + '/' ));
const PORT = process.env.PORT || 9000;

my_data = {
	"Asia": ["Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Burma","Cambodia","China","Cyprus","East Turkistan","Georgia","Hong Kong","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","North Korea","South Korea","Kuwait","Kyrgyzstan","Laos","Lebanon","Macau","Malaysia","Maldives","Mongolia","Nepal","Oman","Pakistan","Palestine","Philippines","Qatar","Saudi Arabia","Singapore","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan","Vietnam","Yemen"],
	"Africa": ["Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cameroon","Cape Verde","Central African Republic","Chad","Comoros","Congo-Brazzaville","Congo-Kinshasa","Cote d'Ivoire","Djibouti","Egypt","Equatorial Guinea","Eritrea","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea Bissau","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Swaziland","São Tomé and Príncipe","Tanzania","Togo","Tunisia","Uganda","Western Sahara","Zambia","Zimbabwe"],
	"Europe": ["Albania","Andorra","Armenia","Austria","Azerbaijan","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Georgia","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Moldova","Monaco","Montenegro","The Netherlands","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"],
	"North America": ["Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States of America (USA)"],
	"South America": ["Bolivia","Brazil","Chile","Colombia","Ecuador","French Guiana","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"]
}

app.get( '/mydata', function( req, res ) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(my_data));
});


app.get( '/', function( req, res ) {
	res.sendFile( path.join( __dirname, '', 'index.html' ));
});


app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}!`);
});