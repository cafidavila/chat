$(document).ready(function(){
			$("#go").click(function(e){
				e.preventDefault();  //previene el evento click , q se detenga
				var texto = $("#my-input").val();
				var miPrimerMensaje = $("<p></p>").text(texto).addClass("bg-primary"); //etiquetas al vuelo
				$(".resultado").append(miPrimerMensaje);
			}); 

		});


$(document).ready(function(){
			$("#red").click(function(e){
				e.preventDefault();  //previene el evento click , q se detenga
				var miPrimerMensaje = $("<p></p>").text(texto).addClass("bg-danger"); //etiquetas al vuelo
				$(".resultado").append(miPrimerMensaje);
			}); 

		});


