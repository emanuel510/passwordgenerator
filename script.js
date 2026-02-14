function GeneratePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols){
    const UpperCaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const LowerCaseChars = `abcdefghijklmnopqrstuvwxyz`;
    const NumberChars = `0123456789`;
    const SymbolChars = `~!@#$%^&*()_-+={}[]:;"'<,>./?|`;
    let AllowedChars = ``;
    let password = ``;

    AllowedChars+= includeUpperCase ? UpperCaseChars: ``;
    AllowedChars+= includeLowerCase ? LowerCaseChars: ``;
    AllowedChars+= includeNumbers ? NumberChars: ``;
    AllowedChars+= includeSymbols ? SymbolChars: ``;

    for(let i = 0; i < passwordLength; i++){
        const RandomIndex = Math.floor(Math.random() * AllowedChars.length);
        password+= AllowedChars[RandomIndex];
    }
    return password;
}

const inputNumber = document.getElementById("inputNumber");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const button = document.getElementById("button1");



button.onclick = function(){
    const passwordLength = Number(inputNumber.value);
    const includeUpperCase = checkbox1.checked;
    const includeLowerCase = checkbox2.checked
    const includeNumbers = checkbox3.checked;
    const includeSymbols = checkbox4.checked;
    
    if(passwordLength < 1 || passwordLength > 32){
    document.getElementById("p9").textContent = `Password length must be from 1 to 32!`;
    return``;
    }
    if(checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false){
        document.getElementById("p9").textContent = `You must have something selected to generate a password!`;
        return``;
    }
    const password = GeneratePassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);
    document.getElementById("p9").textContent = password;
}










































