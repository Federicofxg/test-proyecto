function validarDatos(){
    $("#msgNombre").text(""); 
    /*$("#msgApellido").text(""); */
    $("#msgConsulta").text(""); 
    $("#msgEmail").text("");
    $("#msgAconsulta").text("");
  
  
    let nombre =$("#nombre").val();
    /*let apellido =$("#apellido").val();*/
    let consulta =$("#consulta").val();
    let email =$("#email").val();
    let aconsulta =$("#aconsulta").val();
    
    if (nombre==""){
      $("#msgNombre").text("Completar este campo"); 
    }
    /*if (apellido==""){
      $("#msgApellido").text("Completar este campo"); 
    }*/
    if (consulta==""){
      $("#msgConsulta").text("Completar este campo"); 
    }
    if (email==""){
      $("#msgEmail").text("Completar este campo"); 
    }
    if (aconsulta==""){
      $("#msgAconsulta").text("Completar este campo"); 
    }
   
  else {alert("Consulta enviada")
          
    
    }
  
  }
  
  function sendSearch() {
    let searchValue = document.getElementById("search").value;
    window.open(`https://www.google.com.ar/search?q=${searchValue}`);
  }