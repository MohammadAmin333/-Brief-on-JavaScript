let balance=1000;
function showMenu(){
    console.log("\n Welcome to banking system")
    console.log("1. Chieck Balance")
    console.log("2. Diposit Money")
    console.log("3. Withdraw Money")
    console.log("4.  Exit")
}

function BankingSystem(){
let choice;
do{
showMenu();//function call
choice=parseInt(prompt("Enter Your Choice(1-4):"));
switch(choice){
    case 1:
        console.log("Your Current Ballance is $:"+balance)
        break;
        case 2:
        let DipositAmount = parseInt(prompt("Enter Your amount to diposit:"));
        if(DipositAmount>0){
        balance+=DipositAmount;
        console.log("$" + DipositAmount + "has been Diposited.new Ballance:$" + balance);

    }
    else{
        console.log("Invalid amount.Please try again");
    }
    break;
}
    } while(choice!==4); 
}


BankingSystem();
