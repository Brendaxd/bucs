var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rutas = new Schema//esquema de mongoose
({
	PUNTOPARTIDA: String,//campos de la tabla, se ingresan con un formulario en frontend
	PUNTOLLEGADA: String,
	HORASALIDA: Number,
	MINUTOSALIDA: Number,
	HORALLEGADA: Number,
	MINUTOLLEGADA: Number,
	BUS: Number
});

module.exports = mongoose.model('Rutas',rutas);//clase