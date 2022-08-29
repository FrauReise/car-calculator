function carCalculator() {
    let carBrand = Number(document.getElementById('carBrand').value); 
    let carGear = Number(document.getElementById('carGearShift').value);
    let carBody = Number(document.getElementById('carBody').value);


    let carFuel = null; 
    let inputElements1 = document.getElementsByName('fuel');
    for(let i=0; inputElements1[i]; ++i){
        if(inputElements1[i].checked){
            carFuel = inputElements1[i].value;
            break;
        }
    }
    
    let carAge = null; 
    let inputElements2 = document.getElementsByName('year');
    for(let i=0; inputElements2[i]; ++i){
        if(inputElements2[i].checked){
            checkedValueCarAge = inputElements2[i].value;
            break;
        }
    }
    
    let sumCar = carBrand + Number(carFuel) + carGear + Number(carAge) + carBody;

    console.log(" Марка авто " + carBrand);
    console.log(" Топливо " + carFuel);
    console.log(" КПП " + carGear);
    console.log(" Возраста машины " + carAge);
    console.log(" Тип кузова " + carBody);
    console.log(" Общая сумма " + sumCar);
    console.log(" Проверка ввода данных " + Number.isNaN(sumCar));

    if(Number.isNaN(sumCar) == false){
        document.getElementById('result').innerHTML = ' Цена вашего автомобиля : ' + sumCar + 'рублей';
    } else document.getElementById('result').innerHTML = 'Ошибка ввода данных.';
}

function reloadPage(){
    document.location.reload(true);
}
