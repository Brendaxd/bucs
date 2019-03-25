var Item = require('./choferes');
module.exports = class Choferes {
    constructor( ) {}//mongo no acepta el constructor lol

    Guardar(req,res) {
	     Item.create
       ({
          NOMBRE: req.body.NOMBRE,
          EDAD: req.body.EDAD,
          CEDULA: req.body.CEDULA,
          FOTO: req.body.FOTO
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
        }// Obtiene y devuelve todos los choferes tras crear uno de ellos
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
        }// Obtiene y devuelve todos los choferes tras crear uno de ellos
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
				    res.json(item); // devuelve todos los choferes en JSON	
          }
        });   
    }
    
    
    Seleccionarpornombre(req,res) {
      Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        {
					res.json(item); // devuelve todos los choferes en JSON		
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
					res.json(item); // devuelve todos los choferes en JSON		
        }
      });
    }
    

    Seleccionarporedad(req,res) {
      Item.find({EDAD:req.body.EDAD}, function(err, item) {
        if (err)
        {
				  res.send(err)
        }
        else
        { 
					res.json(item); // devuelve todas los choferes en JSON		
        }
      });  
    }
}