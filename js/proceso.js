
    var Id=[];
    var Cod=[];
    var Nom=[];
    var Cant=[];
    var Pre=[];
    var Tp=[];
    var contador=1;

function Agg(){
   
    $('.Ocultar').removeClass("Ocultar");
    var Codigo=(document.getElementById("codigo")).value;
    var Nombre=(document.getElementById("nombre")).value;
    var Cantidad=(document.getElementById("cantidad")).value;
    var Precio=(document.getElementById("precio")).value;
    if(Cod.indexOf((String(Codigo))) >= 0){
        Swal.fire(
            'El Dato ya Existe',
            '',
            'error'
        )  
    }else{
        Id.push(String(contador));
        Cod.push(String(Codigo));
        Nom.push(String(Nombre));
        Cant.push(String(Cantidad));
        Pre.push(String(Precio));
        contador++;   
        document.getElementById("Formulario").reset();
    }
}

function Mostrar(){

    cont=Cod.length;
    if(cont<1){
        location.href ="index.html";
    }
    var imprimir="";
    for (let i = 0; i < Cod.length; i++) {
        imprimir+= '<tr>';
        imprimir+= '<th>'+Cod[i]+'</th>';
        imprimir+= '<td>'+Nom[i]+'</td>';
        imprimir+= '<td>'+Cant[i]+'</td>';
        imprimir+= '<td>'+Pre[i]+'</td>';
        imprimir+= '<td>'+
        '<div class="row"> <div class="col" style="padding-right: 0px;"><button onclick="Imprimir('+Id[i]+')" type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">'+
        '<i class="bi bi-pencil-square"></i></button></div>'+
        '<div class="col" style="padding-right: 12px;"><button onclick="Eliminar('+Id[i]+')" type="button" class="btn btn-danger btn-sm" >'+
        '<i class="bi bi-trash"></i></button>'+
        '</td> </div>';
        imprimir+= '</tr>';                              
        
        document.getElementById("tabla").innerHTML=imprimir;
        
    } 
}

function Imprimir(codigo){
    let index=Id.indexOf(String(codigo));
    document.getElementById("ID").value=Id[index];
    document.getElementById("codi").value=Cod[index];
    document.getElementById("nombre2").value=Nom[index];
    document.getElementById("cantidad2").value=Cant[index];
    document.getElementById("precio2").value=Pre[index];
        
}

function Actualizar(codigo){
    let index=Id.indexOf(String(codigo));
    Cod[index]=document.getElementById("codi").value;
    Nom[index]=document.getElementById("nombre2").value;
    Cant[index]=document.getElementById("cantidad2").value;
    Pre[index]=document.getElementById("precio2").value;
    Mostrar();
    Swal.fire(
        'Actualizacion Exitosa',
        '',
        'success'
    )
    $('#exampleModal').modal('hide');
}

function Eliminar(codigo){
    
    Swal.fire({
        title: 'Eliminar Items',
        text: "¿Estas Seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            let index=Id.indexOf(String(codigo));
            Cod.splice(index,1);
            Nom.splice(index,1);
            Cant.splice(index,1);
            Pre.splice(index,1);
            Mostrar()
            
          Swal.fire(
            'Eliminado',
            'Items Eliminado',
            'success'
          )
        }
      })
    
}






    



