
// let number=prompt("Enter 0");
// number=parseInt(number);

// if(number===0){
//     alert("User entered zero");
// }




function loopingExamples(){

    for(let i=0;i<5;i++){
        if(i==3){
            continue;
        }
        else if(i==4){
            // break;
            return;
        }
        console.log(i);
    }

    console.log("Out of for")


}

loopingExamples();