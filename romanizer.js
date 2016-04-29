function romanize (num) {
    var res = "";
    if(num<4)
    {
        res = imprimirCaracter(num, "I")
    } 
    else if (num<9) 
    {
        res = "V";
        res += imprimirCaracter(num-5, "I");
    }
    if(num%5 == 4){
        res = "IV";
    }
    if(num%5 == 1){
        res = "IX";
    }
    return res;
}

function imprimirCaracter(numeroVeces, caracter) {
    res = "";
    for(i=numeroVeces;i>0;i--)
                {
                    res= res + caracter;
                }
    return res;
}
