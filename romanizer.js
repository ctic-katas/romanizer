function romanize (num) {
    var resultado = "";
/*        
    if((num<4)){
        for (var i=0;i<num;i++){
            resultado+="I"
        }
    }
    
    if((num==4)){
        resultado+="IV"
    }
    
    if((num==5)){
        resultado+="V"
    }
    
    if((num>5 && num<9)){
        resultado="V"
        for (var i=6;i<=num;i++){
            resultado+="I"
        }
    }*/
    
    // I, V, X, L, C ...
    if(num % 1000 == 0){
        resultado += "M";
    }
    else if(num % 500 == 0){
        resultado += "D";
    }
        else if(num % 100 == 0){
        resultado += "C";
    }
        else if(num % 50 == 0){
        resultado += "L";
    }
        else if(num % 10 == 0){
        resultado += "X";
    }
        else if(num % 5 == 0){
        resultado += "V";
    }
    
    return resultado;
    
}
