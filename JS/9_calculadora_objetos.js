	function calcula(var1, var2){
		this.result=0;		
		calcula.prototype.suma = function (){
			this.result = parseInt(var1) + parseInt(var2); 
		}
		calcula.prototype.resta = function (){
			this.result = var1 - var2;
		}
		calcula.prototype.multiplica = function (){
			this.result = var1 * var2; 
		}
		calcula.prototype.divide = function (){
			this.result = var1 / var2;
		}
		console.log("final")
		//document.calculadora.resultado.value=result;
		

	}
		
	function accion(operando){	
		var a = new calcula(document.calculadora.op1.value, document.calculadora.op2.value);
		if (operando == "+"){
			a.suma();
		}
		else if(operando == "-") {
			a.resta();
		}
		else if(operando == "*") {
			a.multiplica();
		}
		else if(operando == "/") {
			a.divide();
		}
		console.log("a ",a);
		document.calculadora.resultado.value=a.result;
	}