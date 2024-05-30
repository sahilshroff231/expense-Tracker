const sDate = document.getElementById("date-start");
const eDate =document.getElementById("date-end");
const selector=document.getElementById('selector');
const amounts =document.getElementById("amount");
const reason = document.getElementById("resason-box");
 let expensebody = document.getElementById("expense-body");
const expensebody1 = document.getElementById("expense-body1");
const totalAmountCell = document.getElementById("totalAmount");
const totalAmountCell1 = document.getElementById("totalAmount1");
const btn= document.getElementById("submit");


// let expences = JSON.parse(localStorage.getItem('expences')) || [];

let expenses = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : [];

const selectedOption = selector.value;
const AmountInput = amounts.value;
const description =  reason.value;


function handleFormSubmit(event){
    event.preventDefault();
    const selectors= document.getElementById("selector");
const amounts =document.getElementById("amount");
const reason = document.getElementById("resason-box");


 expenses.push({selectedOption,AmountInput,description})
 localStorage.setItem("expense",JSON.stringify(expenses));
 window.location.reload();

}

function dataexpensetable(){
    expensebody.innerHTML='';
    expenses.forEach((expense)=>{
        let row = expensebody.insertRow();
        row.innerHTML = '<td>' + expense.selectedOption+ '</td>' +
                        '<td>' + expense.AmountInput + '</td>' +
                        '<td>' + expense.description+ '</td>' +
                        '<td>Edit</td>';
    })
    
   
  
}

btn.addEventListener("click",handleFormSubmit);
window.onload = function(){
    dataexpensetable();
}