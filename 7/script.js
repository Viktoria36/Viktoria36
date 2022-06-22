alert("javascript підключен")
let instruction = `
                Інструкція:
        Параметр          Що Означає
          leg               катет
       hypotenuse         гіпотенуза
    adjacent angle   прилеглий до катета кут
    opposite angle  протилежний до катета кут
        angle    один з двох гострих кутів (коли задана гіпотенуза)
Функція повинна приймати аргументи в такому порядку:
Значення аргумента 1, тип аргумента 1 , значення аргумента 2, тип аргумента 2
`
console.log(instruction);

let a,b,c,alpha,beta;

let ArgTypes=["leg","hypotenuse","adjacent angle","opposite angle","angle"];

function RadToDeg (rad ){
		return (rad * 180) / Math.PI;
	}
function DegToRad (deg ){
    return (Math.PI * deg) / 180;
}

function triangle(value1, type1, value2, type2){
    if(!ArgTypes.includes(type1) || !ArgTypes.includes(type2) || (type1 === "angle" && type2!="hypotenuse") || (type2 === "angle" && type1!="hypotenuse") ){
        console.log("Неправильний ввід, перечитайте інструкцію")
        return "failed";
    }
    
    if(value1<=0 || value2 <=0 ){
        return "Значення не можуть бути менше або дорівнювати нулю";
    }

    //два катета
    if(type1 =="leg" && type2 == "leg"){
        a=value1;
        b=value2;
        c=Math.sqrt(a*a+b*b);
        alpha=RadToDeg(Math.asin(a/c));
        beta=RadToDeg(Math.asin(b/c));
    }

    //катет і гіпотенуза
    else if(type1 =="leg" && type2 == "hypotenuse" ){
        if(value2<=value1){
            return "Катет не може бути більшим за гіпотенузу";
        }
        a=value1;
        c=value2;
        b=Math.sqrt(c*c-a*a);
        alpha=RadToDeg(Math.asin(a/c));
        beta=RadToDeg(Math.asin(b/c));
    }
    else if(type2 =="leg" && type1 == "hypotenuse" ){
        if(value2>=value1){
            return "Катет не може бути більшим за гіпотенузу";
        }
        a=value2;
        c=value1;
        b=Math.sqrt(c*c-a*a);
        alpha=RadToDeg(Math.asin(a/c));
        beta=RadToDeg(Math.asin(b/c));
    }

    //катет і прилеглий кут
    else if(type1 =="leg" && type2 == "adjacent angle" ){
        if(value2>=90){
            return "Введений кут не гострий";
        }
        a=value1;
        beta=value2;
        alpha=90-beta;
        c=a/Math.cos(DegToRad(beta));
        b=Math.sqrt(c*c-a*a);
    }
    else if(type1 =="adjacent angle" && type2 == "leg" ){
        if(value1>=90){
            return "Введений кут не гострий";
        }
        beta=value1;
        a=value2;
        alpha=90-beta;
        c=a/Math.cos(DegToRad(beta));
        b=Math.sqrt(c*c-a*a);
    }

    //катет і протилежний гострий кут
    else if(type1 =="leg" && type2 == "opposite angle" ){
        if(value2>=90){
            return "Введений кут не гострий";
        }
        a=value1;
        alpha=value2;
        beta=90-alpha;
        c=a/Math.sin(DegToRad(alpha));
        b=Math.sqrt(c*c-a*a);
    }
    else if(type1 =="opposite angle" && type2 == "leg" ){
        if(value1>=90){
            return "Введений кут не гострий";
        }
        a=value2;
        alpha=value1;
        beta=90-alpha;
        c = a/Math.sin(DegToRad(alpha));
        
        b=Math.sqrt(c*c-a*a);
    }

    //гіпотенуза і гострий кут
    else if(type1 =="hypotenuse" && type2 == "angle" ){
        if(value2>=90){
            return "Введений кут не гострий";
        }

        с=value1;
        alpha=value2;
        beta=90-alpha;
        a=c*Math.cos(DegToRad(beta));
        b=c*Math.cos(DegToRad(alpha));
    }
    else if(type1 =="angle" && type2 == "hypotenuse" ){
        if(value1>=90){
            return "Введений кут не гострий";
        }
        c=value2;
        alpha=value1;
        beta=90-alpha;
        a=c*Math.cos(DegToRad(beta));
        b=c*Math.cos(DegToRad(alpha));
    }
    else{
        return "Неправильний ввід, перечитайте інструкцію";
    }

    console.log("a = "+ a);
    console.log("b = "+ b);
    console.log("c = "+ c);
    console.log("alpha = "+ alpha);
    console.log("beta = "+ beta);
    return "success";
}