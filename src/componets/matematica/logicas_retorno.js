function Logica(ListaAtual,Novo){
    let Simbolos = ["+","-","×","÷","√","x²","%"];


    function Enumero(numero){
        return /[0-9]+/.test(numero);
    };

    function ContaMatematica(Num1,sinal,Num2=0){
        let rs;
        if(sinal === "+"){rs = parseFloat(Num1)+parseFloat(Num2); };

        if(sinal === "-"){rs = parseFloat(Num1)-parseFloat(Num2); };

        if(sinal === "×"){rs = parseFloat(Num1)*parseFloat(Num2); };

        if(sinal === "÷"){parseFloat(Num2) === 0 ? rs = "Não permitido" : rs = parseFloat(Num1)/parseFloat(Num2); };
        
        if(sinal === "%"){rs = parseFloat(Num1)/100;};
        
        if(sinal === "x²"){rs = parseFloat(Num1)*parseFloat(Num1);};
        
        if(sinal === "√"){rs = Math.sqrt(parseFloat(Num1))}; /* Misteriosamente o **1/2 nao funcionou na raiz */



        return(
            {
                valor:""+rs+"",
                dado: null,
                outro: null,
                apagar:true,
            }
        );
    };




    if(Simbolos.includes(Novo) && ListaAtual.valor!== null){
        
        Novo === "%" || Novo === "x²" || Novo === "√" ? ListaAtual = ContaMatematica(ListaAtual.valor,Novo) : ListaAtual.dado = Novo;

        return(ListaAtual);
    }

    if(ListaAtual.outro == null && ListaAtual.dado === null && !Simbolos.includes(Novo) && Novo!=="="){
        
        if(!ListaAtual.apagar){
            Enumero(ListaAtual.valor) ? ListaAtual.valor+=Novo : ListaAtual.valor = Novo;
            return(ListaAtual);
        }

        ListaAtual.valor = Novo;
        ListaAtual.apagar = false;
        return(ListaAtual);

    };

    if(ListaAtual.dado !== null && ListaAtual.valor !== null && Novo!=="="){
        Enumero(ListaAtual.outro) ? ListaAtual.outro+=Novo : ListaAtual.outro = Novo;
        return(ListaAtual);
    }
    
    if(ListaAtual.dado !== null && ListaAtual.valor !== null && ListaAtual.outro !== null && Novo === "="){

        return(ContaMatematica(ListaAtual.valor,ListaAtual.dado,ListaAtual.outro));
        

    };

}



export default Logica;
