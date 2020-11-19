function Login(){ 
    var done=0; 
    var correo=document.login.correo.value; 
    var password=document.login.password.value; 
    if (correo=="admin@gmail.com" && password=="admin123") { 
    window.location="views/home.html"; 
    } 
  
    if (correo=="admin2@gmail.com" && password=="admin123") { 
    window.location="views/home.html"; 
    }
   

    if (correo=="" && password=="") { 
        alert("Porfavor ingrese, correo y contraseña no pueden ir vacios"); 
   

    }
 


}
  

    
function validarlogin(){

	correo = $("#correo").val();
	password = $("#password").val();
	

	if(correo != ""){

		var caracteres = correo.length;
        var expresion = /^[a-zA-Z0-9\s+@]*$/;
        


		if(!expresion.test(correo)){

			$("#correo").after('<div class="alert alert-warning">No se permiten  caracteres especiales.</div>');

			return false;
		}

	}

	else if(password != ""){

		var caracteres = password.length;
		var expresion = /^[a-zA-Z0-9\s]*$/;

		if(!expresion.test(password)){

			$("#password").after('<div class="alert alert-warning">No se permiten caracteres especiales.</div>');

			return false;

		}


	}



	return true;

}


