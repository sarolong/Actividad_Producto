var boton = document.getElementById('Agregar');

    var Cod=[];
    var Nom=[];
    var Cant=[];
    var Pre=[];
    var Tp=[];

boton.addEventListener("click", function(){
    //console.log("probando")
    var Codigo=(document.getElementById("codigo")).value;
    var Nombre=(document.getElementById("nombre")).value;
    var Cantidad=(document.getElementById("cantidad")).value;
    var Precio=(document.getElementById("precio")).value;
    var Tpagar=document.getElementById("Tpagar").value=Cantidad*Precio;
    var imprimir="";

    Cod.push(Codigo);
    Nom.push(Nombre);
    Cant.push(Cantidad);
    Pre.push(Precio);
    Tp.push(Tpagar);

    for (let i = 0; i < Cod.length; i++) {
        imprimir+= '<tr>';
        imprimir+= '<td id="c">'+Cod[i]+'</td>';
        imprimir+= '<td id="n">'+Nom[i]+'</td>';
        imprimir+= '<td id="c">'+Cant[i]+'</td>';
        imprimir+= '<td id="c">'+Pre[i]+'</td>';
        imprimir+= '<td id="c">'+Tp[i]+'</td>';
        imprimir+= '</tr>';
        
        document.getElementById("tabla").innerHTML=imprimir;
        
    }

        
        // document.getElementById("n").innerHTML=Nombre;
        // document.getElementById("cnt").innerHTML=Cantidad;
        // document.getElementById("p").innerHTML=Precio;     
   
})


    



