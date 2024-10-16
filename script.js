function showMessage (){
    alert('Ola, esta é uma interação com JavaScript');
}

function trocar(){
    var lx =document.getElementById("ol").style.color
    document.getElementById("ol").style.color = "blue"

    if (lx === 'red'){
        document.getElementById("ol").style.color = "white "
    } else{ document.getElementById("ol").style.color = "red"

  

    }
}