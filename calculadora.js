const suma = (a,b) =>{
    return a+b
}

const resta = (a,b) =>{
    return a-b
}

const multiplicacion = (a,b)=>{
    return a*b
}

const division = (a,b)=>{
    if(b===0)
    {
        return console.log("No se puede realizar la division");
    }else{
        return a/b
    }
}
