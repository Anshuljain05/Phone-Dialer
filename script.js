let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        let l = display.innerText.length;
        if(e.target.id == 'back-icon'){
            if (display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
        }
        else if(e.target.id == 'star-icon'){
            console.log('Favourite Button Clicked!');
        }
        else if(e.target.id == 'call-icon'){
            console.log('Call Button Clicked!');
        }
        else if(l == 10){
            return;
        }
        else {
            let currentButtonText = e.target.innerText;
            let firstValue = currentButtonText[0];
            if(firstValue == '2' || firstValue == 'A'){
                display.innerText += '2';
            }
            else if(firstValue == '3' || firstValue == 'D'){
                display.innerText += '3';
            }
            else if(firstValue == '4' || firstValue == 'G'){
                display.innerText += '4';
            }
            else if(firstValue == '5' || firstValue == 'J'){
                display.innerText += '5';
            }
            else if(firstValue == '6' || firstValue == 'M'){
                display.innerText += '6';
            }
            else if(firstValue == '7' || firstValue == 'P'){
                display.innerText += '7';
            }
            else if(firstValue == '8' || firstValue == 'T'){
                display.innerText += '8';
            }
            else if(firstValue == '9' || firstValue == 'W'){
                display.innerText += '9';
            }
            else{
                display.innerText += firstValue;
            }  
        }
    });
});
