const DISPLAY = document.getElementById('str1');
const RESULT = document.getElementById('str2');
let strDisplay = "Press any digit to start";
let strResult = "0";
let cntOperator = 0;

function main(){
    buttonAssignment();
}

function buttonAssignment(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        
        if(button.parentElement.parentElement.className == "numbers-btns"){
            button.addEventListener('click',()=>{
                if((strDisplay == "Press any digit to start")||(RESULT.textContent!="0")){
                    strDisplay = "";
                    RESULT.textContent = "0";
                }
                let buttonId = button.id;
                if(buttonId == "zero"){
                    buttonId = "0";
                }
                else if(buttonId == "dot"){
                    buttonId = ".";
                }
                strDisplay += buttonId;
                DISPLAY.textContent = strDisplay;
                
            });
        }
        if(button.parentElement.className == "misc-btns"){
            button.addEventListener('click',()=>{
                strDisplay = "Press any digit to start"
                DISPLAY.textContent = strDisplay;
                RESULT.textContent = "0";
            });
        }
        if(button.parentElement.className == "operands-btns"){
            button.addEventListener('click',()=>{
                if(RESULT.textContent == "0"){
                    if(button.id == "btnequals"){
                        calculate(1);
                        RESULT.textContent = strResult;
                    }
                    else{
                        if(cntOperator == 1){
                            calculate(0);
                            strDisplay = strResult + " " + button.id + " ";
                            DISPLAY.textContent = strDisplay;
                            cntOperator++;
                        }
                        else if(strDisplay != "Press any digit to start"){
                            strDisplay = strDisplay + " " + button.id + " ";
                            DISPLAY.textContent = strDisplay;
                            cntOperator++;
                        }
                    }
                }   
            });
        }
    });
}

function calculate(x){
    const STRINGARRAY = strDisplay.split(" ");
    const OPERATORS = ["+","-","X","%"];
    let nums = []
    let currOperator = ""
    let answer = 0;

    STRINGARRAY.forEach(ele => {
        OPERATORS.forEach(operator => {
            if(ele == operator){
                currOperator = ele;
            }
        });
        
        if(ele != currOperator){
            let newNum = parseFloat(ele);
            nums.push(newNum);
        }
        
    });
    switch (currOperator){
        case "+":
            answer = nums[0] + nums[1];
            break;
        case "-":
            answer = nums[0] - nums[1];
            break;
        case "X":
            answer = nums[0] * nums[1];
            break;
        case "%":
            answer = nums[0] / nums[1];
            break;
        default:
            break;
    }

    strResult = answer.toString();
    if(x==1){
        
    }

    cntOperator = 0;
}

main();