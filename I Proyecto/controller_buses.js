var Item = require('./buses');
module.exports = class Buses {
    constructor( ) {}//mongo no acepta el constructor lol

    Guardar(req,res) {
	     Item.create
       ({
          MODELO: req.body.MODELO,//toma los datos que se ingresaron en frontend
          CIRCULACION: req.body.CIRCULACION,
          NUMERO: req.body.NUMERO,
          PLACA: req.body.PLACA,
          CHOFER: req.body.CHOFER,
          ASIENTOS: req.body.ASIENTOS,
          IMAGEN: req.body.IMAGEN
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
          MODELO: req.body.MODELO,
          CIRCULACION: req.body.CIRCULACION,
          NUMERO: req.body.NUMERO,
          PLACA: req.body.PLACA,
          CHOFER: req.body.CHOFER,
          ASIENTOS: req.body.ASIENTOS,
          IMAGEN: req.body.IMAGEN
        }}, 

			function(err, item) 
      {
				if (err)
        {
				  res.send(err);
        }// Obtiene y devuelve todos los buses tras crear uno de ellos
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
        }// Obtiene y devuelve todos los buses tras crear uno de ellos
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
				    res.json(item); // devuelve todos los buses en JSON	
          }
        });   
    }
    
    
    Seleccionarporplaca(req,res) {
      Item.find({PLACA:req.body.PLACA}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        {
					res.json(item); // devuelve todos los buses en JSON		
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
					res.json(item); // devuelve todos los buses en JSON		
        }
      });
    }
    

    Seleccionarpornumero(req,res) {
      Item.find({NUMERO:req.body.NUMERO}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        { 
					res.json(item); // devuelve todas los buses en JSON		
        }
      });  
    }
}