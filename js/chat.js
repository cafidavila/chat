$(document).ready(function(){
			$("#go").click(function(e){
				e.preventDefault();  //previene el evento click , que se detenga
				var texto = $("#my-input").val();
				var color = $("#color").val()
				var miPrimerMensaje = $("<p></p>").text(texto).addClass("alert-"+color); //etiquetas al vuelo
				$(".resultado").append(miPrimerMensaje);
			}); 

		});





