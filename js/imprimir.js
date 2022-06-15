

    var Cod=[];
    var Nom=[];
    var Cant=[];
    var Pre=[];
    var Tp=[];

function Mostrar(){
    
    var Codigo=(document.getElementById("codigo")).value;
    var Nombre=(document.getElementById("nombre")).value;
    var Cantidad=(document.getElementById("cantidad")).value;
    var Precio=(document.getElementById("precio")).value;
    var imprimir="";

    Cod.push(parseInt(Codigo));
    Nom.push(Nombre);
    Cant.push(Cantidad);
    Pre.push(Precio);
    

    for (let i = 0; i < Cod.length; i++) {
        imprimir+= '<tr>';
        imprimir+= '<th>'+Cod[i]+'</th>';
        imprimir+= '<td>'+Nom[i]+'</td>';
        imprimir+= '<td>'+Cant[i]+'</td>';
        imprimir+= '<td>'+Pre[i]+'</td>';
        imprimir+= '<td>'+'<button onclick="Buscar('+Cod[i]+')" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-arrows-move"></i></button>'+'</td>';
        imprimir+= '</tr>';                              
        
        document.getElementById("tabla").innerHTML=imprimir;
        
    }
  
   
}

function Buscar(codigo){
    let index=Cod.indexOf(codigo);
    var imprimir="";
           imprimir+= '<tr>';
           imprimir+= '<th>'+Cod[index]+'</th>';
           imprimir+= '<td>'+Nom[index]+'</td>';
           imprimir+= '<td>'+Cant[index]+'</td>';
           imprimir+= '<td>'+Pre[index]+'</td>';
           imprimir+= '</tr>';        

        document.getElementById("tabla2").innerHTML=imprimir;
        
}






    



