const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const selectsort = document.getElementById("sort");

const tbl = document.getElementById("tblNumbers");


let total = 0;

let numbersArr = new Array();




btn1.addEventListener("click", () => {

    const txtNumber = document.getElementById("txtNum").value;

    let num;
    let regex = /^[0-9]+$/; // regular expression for checking valid positive number values.


    if(txtNumber.match(regex)){
        num = parseInt(txtNumber);
        numbersArr.push(num);
        console.log(numbersArr);
        document.getElementById("txtNum").value = "";
    } else {
        window.alert("Please input a number");
        document.getElementById("txtNum").value = "";
        return;
    }

    iterateNumbers();
    
});

btn2.addEventListener("click", () => {
    document.getElementById("txtNum").value = "";
});

btn3.addEventListener("click", () => {
    numbersArr = [];
    total = 0;

    // reset all trs
    while(tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild);
    }

    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    document.getElementById("btn5").style.display = "none";
    document.getElementById("labelsort").style.display = "none";
    document.getElementById("sort").style.display = "none";

});

btn4.addEventListener("click", () => {
    const trTotal = document.createElement("tr");
    const tdTotalLabel = document.createElement("td");
    const tdTotalValue = document.createElement("td");

    trTotal.style.height = "30px";

    tdTotalLabel.style.fontWeight = "bold";
    tdTotalLabel.innerHTML = "TOTAL";

    tdTotalValue.style.textDecoration = "underline";
    tdTotalValue.innerHTML = total;
        
    trTotal.appendChild(tdTotalLabel);
    trTotal.appendChild(tdTotalValue);
    tbl.appendChild(trTotal);
});

btn5.addEventListener("click", () => {
    const trHigh = document.createElement("tr");
    const tdHigh = document.createElement("td");
    const tdHighValue = document.createElement("td");
    const trLow = document.createElement("tr");
    const tdLow = document.createElement("td");
    const tdLowValue = document.createElement("td");

    trHigh.style.height = "30px";
    trLow.style.height = "30px";
    tdHigh.style.fontWeight = "bold";
    tdHigh.style.fontWeight = "bold";
    
    tdHighValue.innerHTML ="HIGHEST:";
    tdLow.innerHTML = "LOWEST:";

    let max = numbersArr[0];
    let min = numbersArr[0];
    let i = 0;

    for (i =0; i < numbersArr.length; i++){
        if (numbersArr[i] > max) {
            max = numbersArr[i];
        }
        if (numbersArr[i] < min) {
            min = numbersArr[i];
        }
    }

    tdHighValue.innerHTML =max;
    tdLowValue.innerHTML = min(numbersArr);

    trHigh.appendChild(tdHigh);
    trHigh.appendChild(tdHighValue);
    tbl.appendChild(trHigh);
    trLow.appendChild(tdLow);
    trLow.appendChild(tdLowValue);
    tbl.appendChild(trLow);
});

function deleteNumber(i) {
    numbersArr.splice(i,1);
    iterateNumbers();
    console.log(numbersArr)
}

function editNumber(i) {

    const editTxt = prompt("Enter new number: ", numbersArr[i]);
    const regex = /^[0-9]+$/; // regular expression for checking valid positive number values.
    
    if(editTxt == null || editTxt == "") {
        alert("You did not input a new value!");
    } else {
        if(editTxt.match(regex)) {
            numbersArr[i] = parseInt(editTxt);
            iterateNumbers();
            console.log(numbersArr);
        } else {
            alert("You did not input a valid number!");
        }
    } 
}

function iterateNumbers() {
    // reset all trs
    while(tbl.hasChildNodes()) {
        tbl.removeChild(tbl.firstChild);
    }

    if(!(numbersArr.length == 0)) {

        total = 0;

        console.log(`Array Length: ${numbersArr.length}`);

        // Loop for iterating numbers from the array in a table
        for(let i=0 ; i < numbersArr.length ; i++) {

            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td"); // for the delete button
            const td4 = document.createElement("td"); // for the delete button
            const btnDelete = document.createElement("button");
            const btnEdit = document.createElement("button");

            td1.style.width = "70px";
            td1.innerHTML = numbersArr[i];

            td2.style.width = "70px";

            if(numbersArr[i] %2 == 0) {
                td2.style.color = "green";
                td2.innerHTML = "EVEN";
            } else {
                td2.style.color = "blue";
                td2.innerHTML = "ODD";
            }

            btnDelete.setAttribute("onclick", `deleteNumber(${i})`) ;
            btnDelete.innerHTML = "Remove"; 

            btnEdit.setAttribute("onclick", `editNumber(${i})`) ;
            btnEdit.innerHTML = "Edit";

            td3.appendChild(btnDelete);
            td4.appendChild(btnEdit);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);

            tbl.appendChild(tr);

            if(!(numbersArr.length == 0)) {
              
                document.ggetElementById("btn3").style.display = "inline";
                document.ggetElementById("btn4").style.display = "inline";
                document.ggetElementById("btn5").style.display = "inline";
                document.ggetElementById("labelsort").style.display = "inline";
                document.ggetElementById("sort").style.display = "inline";
            }
            
            total += numbersArr[i];
            console.log(numbersArr[i]);

            console.log(`Total: ${total}`)
        }
    } else {
        total = 0;
        
        document.getElementById("btn3").style.display = "none";
        document.getElementById("btn4").style.display = "none";
        document.getElementById("btn5").style.display = "none";
        document.getElementById("labelsort").style.display = "none";
        document.getElementById("sort").style.display = "none";
    }

}
