var weight = prompt("BMIの測定を開始します。まずは体重を入力してください。(Kg)");

var heightcm = prompt("身長(cm)を入力してください。");
var heightm = heightcm / 100;
var bmi = (weight / (heightm * heightm));

var message = (`あなたのBMIは ${bmi.toFixed(2)} です。`);
alert(message);
