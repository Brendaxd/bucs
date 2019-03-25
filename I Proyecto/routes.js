var controller_buses = require('./controller_buses.js');
var controller_choferes = require('./controller_choferes.js');
var controller_rutas = require('./controller_rutas.js');
var controller_administrador = require('./controller_administrador.js');
module.exports = function(app){
	
	var clasebuses = new controller_buses();
	app.post('/api/nuevobus',clasebuses.Guardar);
	app.post('/api/modificabus',clasebuses.Modificar);
	app.post('/api/eliminabus',clasebuses.Eliminar);
	app.post('/api/seleccionabus',clasebuses.Seleccionartodos);
	app.post('/api/seleccionabusporplaca',clasebuses.Seleccionarporplaca);
	app.post('/api/seleccionarbusporid',clasebuses.Seleccionarporid);
	app.post('/api/seleccionabuspornumero',clasebuses.Seleccionarpornumero);
    
    var clasechoferes = new controller_choferes();
	app.post('/api/nuevochofer',clasechoferes.Guardar);
	app.post('/api/modificachofer',clasechoferes.Modificar);
	app.post('/api/eliminachofer',clasechoferes.Eliminar);
	app.post('/api/seleccionachofer',clasechoferes.Seleccionartodos);
	app.post('/api/seleccionachoferpornombre',clasechoferes.Seleccionarpornombre);
	app.post('/api/seleccionarchoferporid',clasechoferes.Seleccionarporid);
	app.post('/api/seleccionachoferporedad',clasechoferes.Seleccionarporedad);

	var claserutas = new controller_rutas();
	app.post('/api/nuevaruta',claserutas.Guardar);
	app.post('/api/modificaruta',claserutas.Modificar);
	app.post('/api/eliminaruta',claserutas.Eliminar);
	app.post('/api/seleccionaruta',claserutas.Seleccionartodos);
	app.post('/api/seleccionarutaporpartida',claserutas.Seleccionarporpartida);
	app.post('/api/seleccionarrutaporid',claserutas.Seleccionarporid);
	app.post('/api/seleccionarutaporllegada',claserutas.Seleccionarporllegada);																		

    var claseadm = new controller_administrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);
    
    
	app.get('*',function(req,res){
		 res.sendfile('./login.html');
	});
};