function calcular_descuentos(cantidad,precio,categoria){ 
    
    const descuento = { sindescuento : 1.0,
        estudiante: 0.2,
        trainee: 0.5,
        junior: 0.85};

    if ( Object.keys(descuento).includes(categoria)){

        return cantidad * precio * descuento[categoria];

    } else { 
        
        throw new Error('Err. calcular_descuentos(): categoria invalida'); 

    }; 
};

export {calcular_descuentos};