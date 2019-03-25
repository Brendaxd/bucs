class Buses {
    constructor(_id, 
    MODELO,
    CIRCULACION,
    NUMERO,
    PLACA,
    CHOFER,
    ASIENTOS,
    IMAGEN
    ) 
    
    {
        this._id=_id;
        this.MODELO=MODELO;
        this.CIRCULACION=CIRCULACION;
        this.NUMERO=NUMERO;
        this.PLACA=PLACA;
        this.CHOFER=CHOFER;
        this.ASIENTOS=ASIENTOS;
        this.IMAGEN=IMAGEN;
    }

    Guardar() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
       
            try {

                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://localhost:8080/api/nuevobus');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                         {
                            reject(xhr); 
                         }
                };

                xhr.send(JSON.stringify(objetoaenviar));            

            }
            catch(err) {
                reject(err.message);

            }
        });
    }
    
    Modificar() {
       var objetoaenviar = this;
       // Return a new promise.
       return new Promise(function(resolve, reject) {
       // Do the usual XHR stuff
       
            try {
           
               var xhr = new XMLHttpRequest();
               xhr.open('POST', 'https://localhost:8080/api/modificabus');
               xhr.setRequestHeader('Content-Type', 'application/json');
               xhr.onload = function() {
                   
                   if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                   }
                    else
                        {
                            reject(xhr); 
                        }
               };
               xhr.send(JSON.stringify(objetoaenviar));     
          
           }
           catch(err) {
               reject(err.message);
           }
        });
    }   
    
    Eliminar() {

       var objetoaenviar = this;
       // Return a new promise.
       return new Promise(function(resolve, reject) {
       // Do the usual XHR stuff
       
           try {
               var xhr = new XMLHttpRequest();
               xhr.open('POST', 'https://localhost:8080/api/eliminabus');
               xhr.setRequestHeader('Content-Type', 'application/json');
               xhr.onload = function() {
                   if (xhr.status === 200) {
                       resolve(JSON.parse(xhr.responseText));
                   }
                   else
                        {
                            reject(xhr); 
                        }
               };
               xhr.send(JSON.stringify(objetoaenviar));
           }
           catch(err){
               reject(err.message);
           }
       });
    }
    
    Seleccionartodos() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
       
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://localhost:8080/api/seleccionabus');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                        {
                            reject(xhr); 
                        }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err) {
                reject(err.message);

            }
        });
    }
    
    Seleccionarporplaca() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://localhost:8080/api/seleccionabusporplaca');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                        {
                            reject(xhr);
                        }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err) {
                reject(err.message);
            }
        });
    }
    
    Seleccionarporid() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://localhost:8080/api/seleccionarbusporid');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                        {
                            reject(xhr); 
                        }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err) {
                reject(err.message);
            }
        });
    }
    
    Seleccionarpornumero() {
        var objetoaenviar = this;
        // Return a new promise.
        return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://localhost:8080/api/seleccionabuspornumero');
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else
                        {
                            reject(xhr);
                        }
                };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err) {
                reject(err.message);
            }
        });
    } 
}

let imagenenbase64 = "";
$("#imgbuses").change(function(){
    readURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            imagenenbase64=e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}


var asientos = new Object();

var asientoA1 = new Object();
asientoA1.NOMBRECLIENTE = null;
asientoA1.CEDULA=null;
asientos.A1= asientoA1;

var asientoA2 = new Object();
asientoA2.NOMBRECLIENTE = null;
asientoA2.CEDULA=null;
asientos.A2= asientoA2;

var asientoA3 = new Object();
asientoA3.NOMBRECLIENTE = null;
asientoA3.CEDULA=null;
asientos.A3= asientoA3;

var asientoA4 = new Object();
asientoA4.NOMBRECLIENTE = null;
asientoA4.CEDULA=null;
asientos.A4= asientoA4;



var asientoB1 = new Object();
asientoB1.NOMBRECLIENTE = null;
asientoB1.CEDULA=null;
asientos.B1= asientoB1;

var asientoB2 = new Object();
asientoB2.NOMBRECLIENTE = null;
asientoB2.CEDULA=null;
asientos.B2= asientoB2;

var asientoB3 = new Object();
asientoB3.NOMBRECLIENTE = null;
asientoB3.CEDULA=null;
asientos.B3= asientoB3;

var asientoB4 = new Object();
asientoB4.NOMBRECLIENTE = null;
asientoB4.CEDULA=null;
asientos.B4= asientoB4;



var asientoC1 = new Object();
asientoC1.NOMBRECLIENTE = null;
asientoC1.CEDULA=null;
asientos.C1= asientoC1;

var asientoC2 = new Object();
asientoC2.NOMBRECLIENTE = null;
asientoC2.CEDULA=null;
asientos.C2= asientoC2;

var asientoC3 = new Object();
asientoC3.NOMBRECLIENTE = null;
asientoC3.CEDULA=null;
asientos.C3= asientoC3;

var asientoC4 = new Object();
asientoC4.NOMBRECLIENTE = null;
asientoC4.CEDULA=null;
asientos.C4= asientoC4;



var asientoD1 = new Object();
asientoD1.NOMBRECLIENTE = null;
asientoD1.CEDULA=null;
asientos.D1= asientoD1;

var asientoD2 = new Object();
asientoD2.NOMBRECLIENTE = null;
asientoD2.CEDULA=null;
asientos.D2= asientoD2;

var asientoD3 = new Object();
asientoD3.NOMBRECLIENTE = null;
asientoD3.CEDULA=null;
asientos.D3= asientoD3;

var asientoD4 = new Object();
asientoD4.NOMBRECLIENTE = null;
asientoD4.CEDULA=null;
asientos.D4= asientoD4;



var asientoE1 = new Object();
asientoE1.NOMBRECLIENTE = null;
asientoE1.CEDULA=null;
asientos.E1= asientoE1;

var asientoE2 = new Object();
asientoE2.NOMBRECLIENTE = null;
asientoE2.CEDULA=null;
asientos.E2= asientoE2;

var asientoE3 = new Object();
asientoE3.NOMBRECLIENTE = null;
asientoE3.CEDULA=null;
asientos.E3= asientoE3;

var asientoE4 = new Object();
asientoE4.NOMBRECLIENTE = null;
asientoE4.CEDULA=null;
asientos.E4= asientoE4;



var asientoF1 = new Object();
asientoF1.NOMBRECLIENTE = null;
asientoF1.CEDULA=null;
asientos.F1= asientoF1;

var asientoF2 = new Object();
asientoF2.NOMBRECLIENTE = null;
asientoF2.CEDULA=null;
asientos.F2= asientoF2;

var asientoF3 = new Object();
asientoF3.NOMBRECLIENTE = null;
asientoF3.CEDULA=null;
asientos.F3= asientoF3;

var asientoF4 = new Object();
asientoF4.NOMBRECLIENTE = null;
asientoF4.CEDULA=null;
asientos.F4= asientoF4;



var asientoG1 = new Object();
asientoG1.NOMBRECLIENTE = null;
asientoG1.CEDULA=null;
asientos.G1= asientoG1;

var asientoG2 = new Object();
asientoG2.NOMBRECLIENTE = null;
asientoG2.CEDULA=null;
asientos.G2= asientoG2;

var asientoG3 = new Object();
asientoG3.NOMBRECLIENTE = null;
asientoG3.CEDULA=null;
asientos.G3= asientoG3;

var asientoG4 = new Object();
asientoG4.NOMBRECLIENTE = null;
asientoG4.CEDULA=null;
asientos.G4= asientoG4;



var asientoH1 = new Object();
asientoH1.NOMBRECLIENTE = null;
asientoH1.CEDULA=null;
asientos.H1= asientoH1;

var asientoH2 = new Object();
asientoH2.NOMBRECLIENTE = null;
asientoH2.CEDULA=null;
asientos.H2= asientoH2;



var asientoI1 = new Object();
asientoI1.NOMBRECLIENTE = null;
asientoI1.CEDULA=null;
asientos.I1= asientoI1;

var asientoI2 = new Object();
asientoI2.NOMBRECLIENTE = null;
asientoI2.CEDULA=null;
asientos.I2= asientoI2;

var asientoI3 = new Object();
asientoI3.NOMBRECLIENTE = null;
asientoI3.CEDULA=null;
asientos.I3= asientoI3;

var asientoI4 = new Object();
asientoI4.NOMBRECLIENTE = null;
asientoI4.CEDULA=null;
asientos.I4= asientoI4;



var asientoJ1 = new Object();
asientoJ1.NOMBRECLIENTE = null;
asientoJ1.CEDULA=null;
asientos.J1= asientoJ1;

var asientoJ2 = new Object();
asientoJ2.NOMBRECLIENTE = null;
asientoJ2.CEDULA=null;
asientos.J2= asientoJ2;

var asientoJ3 = new Object();
asientoJ3.NOMBRECLIENTE = null;
asientoJ3.CEDULA=null;
asientos.J3= asientoJ3;

var asientoJ4 = new Object();
asientoJ4.NOMBRECLIENTE = null;
asientoJ4.CEDULA=null;
asientos.J4= asientoJ4;


var asientoK1 = new Object();
asientoK1.NOMBRECLIENTE = null;
asientoK1.CEDULA=null;
asientos.K1= asientoK1;

var asientoK2 = new Object();
asientoK2.NOMBRECLIENTE = null;
asientoK2.CEDULA=null;
asientos.K2= asientoK2;

var asientoK3 = new Object();
asientoK3.NOMBRECLIENTE = null;
asientoK3.CEDULA=null;
asientos.K3= asientoK3;

var asientoK4 = new Object();
asientoK4.NOMBRECLIENTE = null;
asientoK4.CEDULA=null;
asientos.K4= asientoK4;



var asientoL1 = new Object();
asientoL1.NOMBRECLIENTE = null;
asientoL1.CEDULA=null;
asientos.L1= asientoL1;

var asientoL2 = new Object();
asientoL2.NOMBRECLIENTE = null;
asientoL2.CEDULA=null;
asientos.L2= asientoL2;

var asientoL3 = new Object();
asientoL3.NOMBRECLIENTE = null;
asientoL3.CEDULA=null;
asientos.L3= asientoL3;

var asientoL4 = new Object();
asientoL4.NOMBRECLIENTE = null;
asientoL4.CEDULA=null;
asientos.L4= asientoL4;



var asientoM1 = new Object();
asientoM1.NOMBRECLIENTE = null;
asientoM1.CEDULA=null;
asientos.M1= asientoM1;

var asientoM2 = new Object();
asientoM2.NOMBRECLIENTE = null;
asientoM2.CEDULA=null;
asientos.M2= asientoM2;

var asientoM3 = new Object();
asientoM3.NOMBRECLIENTE = null;
asientoM3.CEDULA=null;
asientos.M3= asientoM3;

var asientoM4 = new Object();
asientoM4.NOMBRECLIENTE = null;
asientoM4.CEDULA=null;
asientos.M4= asientoM4;



var asientoN1 = new Object();
asientoN1.NOMBRECLIENTE = null;
asientoN1.CEDULA=null;
asientos.N1= asientoN1;

var asientoN2 = new Object();
asientoN2.NOMBRECLIENTE = null;
asientoN2.CEDULA=null;
asientos.N2= asientoN2;

var asientoN3 = new Object();
asientoN3.NOMBRECLIENTE = null;
asientoN3.CEDULA=null;
asientos.N3= asientoN3;

var asientoN4 = new Object();
asientoN4.NOMBRECLIENTE = null;
asientoN4.CEDULA=null;
asientos.N4= asientoN4;

function botonguardarclick()
{
    var businstanciado = new Buses(0,
    document.getElementById("MODELO").value,
    document.getElementById("CIRCULACION").value,
    document.getElementById("NUMERO").value,
    document.getElementById("PLACA").value,
    document.getElementById("CHOFER").value,
    asientos,
    imagenenbase64);
    
    peliculainstanciada.Guardar().then(function(response) {
        console.log("Success!", response);
        alert("Guardado con exito");
    }, 
    function(error) {
        console.error("Failed!", error);
        alert("Error " + error);
    });
    
}
function validar()
        {
            if(localStorage.getItem("usuariolog")==null)
            {
                location.href="login.html";
            }
        }