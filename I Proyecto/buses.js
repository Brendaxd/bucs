var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var buses = new Schema//esquema de mongoose
({
	MODELO: String,//campos de la tabla, se ingresan con un formulario en frontend
	CIRCULACION: Number,
	NUMERO: Number,
	PLACA: Number,
	CHOFER: String,
	
	ASIENTOS:{
		
		A1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		A2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		A3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		A4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},

		

		B1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		B2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		B3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		B4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		C1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		C2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		C3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		C4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		D1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		D2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		D3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		D4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		E1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		E2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		E3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		E4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		F1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		F2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		F3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		F4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		G1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		G2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		G3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		G4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		H1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		H2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		I1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		I2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		I3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		I4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		J1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		J2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		J3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		J4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		K1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		K2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		K3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		K4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		L1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		L2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		L3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		L4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		M1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		M2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		M3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		M4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},



		N1:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		N2:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		N3:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		},
		N4:{
			NOMBRECLIENTE:String,
			CEDULA:Number
		}
	},

	IMAGEN:String
});

module.exports = mongoose.model('Buses',buses);//clase y variable