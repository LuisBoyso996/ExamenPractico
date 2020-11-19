var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["correo"] = document.getElementById("correo").value;
    formData["direccion"] = document.getElementById("direccion").value;
    formData["puesto"] = document.getElementById("puesto").value;
   
   
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaempleados").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.correo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.direccion;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.puesto;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
    Editar
    </button></a>
                       <a onClick="onDelete(this)"><button type="button" class="btn btn-danger">Eliminar</button></a>`;
}




function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("puesto").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("correo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("direccion").value = selectedRow.cells[2].innerHTML;
    document.getElementById("puesto").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.correo;
    selectedRow.cells[2].innerHTML = formData.direccion;
    selectedRow.cells[3].innerHTML = formData.puesto;
}

function onDelete(td) {
    if (confirm('Deseas eliminar del registro ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaempleados").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("nombreValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nombreValidationError").classList.contains("hide"))
            document.getElementById("nombreValidationError").classList.add("hide");
    }
    return isValid;
}


function validarempleado(){
    nombre = $("#nombre").val();
	correo = $("#correo").val();
 
    
    direccion = $("#direccion").val();
	puesto = $("#puesto").val();
	

	if(correo != ""){

		var caracteres = correo.length;
        var expresion = /^[a-zA-Z0-9\s+@]*$/;


		if(!expresion.test(correo)){

			$("#correo").after('<div class="alert alert-warning">No se permiten  caracteres especiales.</div>');

			return false;
		}

	}

	else if(nombre != ""){

		var caracteres = nombre.length;
		var expresion = /^[a-zA-Z\s]*$/;

		if(!expresion.test(nombre)){

			$("#nombre").after('<div class="alert alert-warning">No se permiten caracteres especiales.</div>');

			return false;

		}


    }
    
    else if(direccion != ""){

		var caracteres = direccion.length;
		var expresion = /^[a-zA-Z0-9\s]*$/;

		if(!expresion.test(direccion)){

			$("#direccion").after('<div class="alert alert-warning">No se permiten caracteres especiales.</div>');

			return false;

		}


    }
    


    else if(puesto != ""){

		var caracteres = puesto.length;
		var expresion = /^[a-zA-Z\s]*$/;

		if(!expresion.test(puesto)){

			$("#puesto").after('<div class="alert alert-warning">No se permiten caracteres especiales.</div>');

			return false;

		}


	}



	return true;

}