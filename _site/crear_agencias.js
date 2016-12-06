var json = require('./Agencias.json');

for(var i=0;i<json.AgenciasBancamiga[0].Agencia.length;i++) {
	console.log('---');
	console.log('layout: agencia');
	console.log('style-css: "style-bancamiga2.css"');
	console.log('icon-marker:  "/images/pin.png"');
	console.log('address:  "',json.AgenciasBancamiga[0].Agencia[i].Direccion,'"');
	console.log('name: "',json.AgenciasBancamiga[0].Agencia[i].Nombre,'"');
	console.log('office_hours: "8:30am - 3:30pm"');
	console.log('phones:  "',json.AgenciasBancamiga[0].Agencia[i].Telefonos,'"');
	console.log('latitude: "',json.AgenciasBancamiga[0].Agencia[i].Latitud,'"');
	console.log('longitude: "',json.AgenciasBancamiga[0].Agencia[i].Longitud,'"');
	console.log('office_category: "Occidental"');
	console.log('office_number: "502"');
	console.log('icon: "fa fa-map-marker fa-2x"');
	console.log('---');
}

// comando de ayuda node crear_agencias.js 
// comando de ayuda node crear_agencias.js > agencias
