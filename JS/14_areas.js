
	<script>
		
		var figura = function (elementoPadre) {
			
				this.formulario = document.createElement("form");
				elementoPadre.appendChild(this.formulario);
				this.alto = creadorObjetosDOM.addInput("alto","alto");
				this.ancho = creadorObjetosDOM.addInput("ancho","ancho");
				this.resultado = creadorObjetosDOM.addInput("resultado", "resultado");
				
				
		}
		
		var triangulo = function () {
				calcularArea = function () {
					this.resultado = this.alto * this.ancho /2;
				}
		}
		
		var rectantulo = function () {
			calcularArea = function() {
				this.resultado = this.alto * this.ancho;
			}
			
		triangulo.prototype = new figura;
		rectangulo.prototype = new figura;
		
		
				
		
		}
	</script>
