alert("Вас вітає SmartLift хмарочосу Empire State Building!");
alert("Будь ласка оберіть поверх!");
let floors = +prompt("Введіть свій поверх!");
if(floors < 1 || floors > 102){
    alert("Ви ввели невірний поверх!");
    console.log("Ви ввели невірний поверх!");
}else if(floors >=1 && floors < 24 || floors > 39 && floors <=102 ){
    alert("Ви обрали" + " " + floors + "-й поверх");
    console.log("Поїхали!");
}else if(floors >= 24 && floors <= 39){
    alert("Треба ввести пароль!");
    let password = +prompt("Введыть пароль!");
    if(password == 1337){
        alert("Прарль вірний!");
        alert("Ви обрали" + " " + floors + "-й поверх");
        console.log("Поїхали!");
    }else{
        alert("Пароль невірний! Спробуйте ще раз!");
    }
}
