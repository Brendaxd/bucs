var Item = require('./rutas');
module.exports = class Rutas {
    constructor( ) {}//mongo no acepta el constructor lol

    Guardar(req,res) {
	     Item.create
       ({
          PUNTOPARTIDA: req.body.PUNTOPARTIDA,//campos de la tabla, se ingresan con un formulario en frontend
          PUNTOLLEGADA: req.body.PUNTOLLEGADA,
          HORASALIDA: req.body.HORASALIDA,
          MINUTOSALIDA: req.body.MINUTOSALIDA,
          HORALLEGADA: req.body.HORALLEGADA,
          MINUTOLLEGADA: req.body.MINUTOLLEGADA,
          BUS: req.body.BUS
        }, 
			   
        function(err, item) {
				  if (err)
          {
					 res.send(err);
          }
				  else
          {
            Item.find(function(err, item){
				 	    if (err)
				 		    res.send(err)
				        res.json(item);
				    });     
          }      	
			 });
    }
    

    Modificar(req,res) {
		  Item.update({_id : req.body._id},
			{$set:{ 
          NOMBRE: req.body.NOMBRE,
          EDAD: req.body.EDAD,
          CEDULA: req.body.CEDULA,
          FOTO: req.body.FOTO
        }}, 

			function(err, item) 
      {
				if (err)
        {
				  res.send(err);
        }// Obtiene y devuelve todos los rutas tras crear uno de ellos
        else
        {
          Item.find(function(err, item){
				 	  if (err)
  				 		res.send(err)
  				    res.json(item);
				  });       
        }        	
		  }); 
    }   
    
    
    Eliminar(req,res) {
      Item.remove({_id : req.body.id}, 
      function(err, item) {
			  if (err)
        {
					res.send(err);
        }// Obtiene y devuelve todos los rutas tras crear uno de ellos
        else
        {
          Item.find(function(err, item) {
				 	  if (err)
  				 		res.send(err)
  				    res.json(item);
  				});      
        }
      });
    }


    Seleccionartodos(req,res) {
		  Item.find(
		    function(err, item) {
          if (err)
          {
				    res.send(err)
          }
          else
          {
				    res.json(item); // devuelve todos los rutas en JSON	
          }
        });   
    }
    
    
    Seleccionarporpartida(req,res) {
      Item.find({PUNTOPARTIDA:req.body.PUNTOPARTIDA}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        {
					res.json(item); // devuelve todos los rutas en JSON		
        }
      });
    }
   

    Seleccionarporid(req,res) {
        console.log(req);
        
      Item.find({_id:req.body._id}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        { 
					res.json(item); // devuelve todos los rutas en JSON		
        }
      });
    }
    

    Seleccionarporllegada(req,res) {
      Item.find({PUNTOLLEGADA:req.body.PUNTOLLEGADA}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        { 
					res.json(item); // devuelve todas los rutas en JSON		
        }
      });  
    }
}