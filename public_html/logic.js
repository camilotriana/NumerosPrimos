function calcular(){
    var numero = document.getElementById("numero").value;
    var h3 = document.createElement("h2");
    var imprimirR = document.getElementById("resultado");
    imprimirR.innerHTML = "";
    
    var resultado=1;
    var contador1=-1;
    var continuar=true;
    var imprimir;
    for(var i=1;i<=numero;i++){
        resultado*=i;
    }
    imprimir = h3.appendChild(document.createTextNode("RESULTADO: "));
    imprimirR.appendChild(imprimir);
    while(continuar){
        for(var j=1;j<=20;j++){
            if(resultado%j==0){
                resultado=resultado/j;
                if(j!=1){
                    j=j-1;
                }
                contador1 ++;
            }
            else{
                if(contador1!=0){
                imprimir = h3.appendChild(document.createTextNode("("+ contador1 +")"));
                imprimirR.appendChild(imprimir);
                contador1=0;
                }
            }
        }
        if(resultado==1){
         continuar=false;
        }
    }
}
