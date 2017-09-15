
// Clousure para variables privadas
function impresora()
{
    var hojas = "privada";

    this.pruebaPrivada =  function(){
        console.log("Impresora Privada usando vbl call this.hojas " + this.hojas);
        console.log("Impresora Privada usando vbl call with hojas" + hojas);
    }
}

ImpresionesTest = function(){};

ImpresionesTest.FuncionImprimir = function (){
    return{

        imprimirInternamente : function(){
            console.log("FunctionImprimir");
        }
        
    }
}




function hello()
{
    console.log("llamado de funcion hello" + this);

    var temp = new impresora();
    temp.pruebaPrivada();
    console.log("Impresora Externo " + temp.hojas);

    //Llamado bajo namaspaces
    ImpresionesTest.FuncionImprimir().imprimirInternamente();

    //var boton = document.getElementById("boton");
    //boton.addEventListener("click", hello1);
}

function makeMoreExciting(string) {
  return string + '!!!!'
}

// Como pasar una funcion como parametro, 
// Se convierte en una semi variable y se utiliza plana como una funcion internamente
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

function callFunctionWithFunctionParameters()
{
	forEach(["x", "y", "z"], console.log);
	forEach(["1", "2", "3"], alert);
}

var hello1 = function()
{
	console.log("llamado de funcion hello1 " + this);
}

function hello2()
{
	console.log("llamado de funcion hello3 "+ this);
}

function hello4(name)
{
	console.log("llamado de funcion hello4 "+ this);
}

function hello3()
{

    "use strict";
    
	console.log("llamado de funcion hello2 " + this);
	
    var nombreVariable = "BautizoVariable";
    //console.log(nombreVariable);
    //valor("ok");

    var arreglo1 = [1, 2, 3, 4];
    
    for(var i = 0;i<arreglo1.length;i++)
    {
		//Solo ejecuta si el contador pasa por primera vez.
        if(arreglo1[i]===1)
        {
            //arreglo1[arreglo1.length] = 5;
			//Adiciona al final 3 nuevos valores al arreglo
            arreglo1.push(5, 6, 7);
			//Escribe en el DOM cual es el ultimo elemento
            document.writeln("Elemento nuevo : " + arreglo1[arreglo1.length - 1]);
            // Quita el ultimo elemento del arreglo
			arreglo1.pop();   
        }
    
        //Escribe en el DOM cual es ahora el elemento i
        //document.writeln("Elemento nuevo en arreglo :  " + arreglo1[i]);

		crearNuevoElemento(arreglo1[i]);
        
        var arreglo3 = arreglo1.map(Aumentar);

        console.log(arreglo3);

    }

}

// Ejemplo de llamado de la funcion callback2
callbackExample(1, hello1);
callbackExample(1, hello2);
callbackExample(1, hello3);
callbackExample(1, hello4);

function Aumentar(valor)
{
    return valor + valor;
}

function recorrerElemento()
{
	var elementosP = document.getElementsByTagName("p");

	for(var j = 0;j<elementosP.length;j++)
	{
		elementosP[j].innerHTML;
	}
}

//Crear nuevo elemento DOM
function crearNuevoElemento(elementoNuevo)
{
	console.log("llamado crear nuevo elemento");

	var node = document.createElement("p");
	var textNode = document.createTextNode("nuevo elemento arreglo : " + elementoNuevo);
	
	node.appendChild(textNode);
	document.getElementById("body1").appendChild(node);
}


//Function para realizar un llamado de una u otra funcion enviada omo parametro
function callbackExample(option, callbackInner)
{
    console.log("llamado Callback Inner");
	callbackInner();
}




//------


// Ejemplo basico de uso de una funcion tipo apply 
function usoApply()
{
    var numbers = [5, 6, 2, 3, 7];
    var max = Math.max.apply(null, numbers);
    console.log("El maximo valor en el arreglo es " + max );
}

//Ejemplo basico de uso de una funcion tipo call
function usoCall()
{
    //Here!!
}





