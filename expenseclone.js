const sDate = document.getElementById("date-start")
const eDate =document.getElementById("date-end")
const selectors= document.getElementById("selector")
const amounts =document.getElementById("amount")
const reason = document.getElementById("resason-box")
const expensebody = document.getElementById("expense-body");
const expensebody1 = document.getElementById("expense-body1");
const totalAmountCell = document.getElementById("totalAmount");
const totalAmountCell1 = document.getElementById("totalAmount1");

let totalAmount=0;
let totalAmount1=0;

let expenses=[];

const Sdate  =sDate.value;
const Edate  =eDate.value;
const Selectors=selectors.value;
const Amount =amounts.value;
const Reason =reason.value;

function getselectvalue(){
  const selector = document.getElementById("selector").value;
}

function submitData(){


  if(Sdate===""){
     alert("please fill the Start- Date")
     return;
  }
  
  if(Edate===""){
     alert("please fill the End- Date")
     return;
  }
  
  if(Amount===""){
     alert("please fill the Amount")
     return;
  }
  
  if(selectors===""){
     alert("please fill the Start- Date")
     return;
  }
  
  if(Sdate===""){
     alert("please fill the select atleast one")
     return;
  }
 
  
  if(Reason===""){
     alert("please fill the description")
     return;
  }
  saveData();

  showdata();

};

for( const expense of expenses ){


  localStorage.setItem("first",Sdate);
  localStorage.setItem("second",Edate);
  localStorage.setItem("third",selectors);
  localStorage.setItem("fourth",Amount);
  localStorage.setItem("fifth",Reason);

  const fData =localStorage.getItem("first");
  const sData = localStorage.getItem("second");
   const tData =localStorage.getItem("third");
   const foData =localStorage.getItem("fourth");
   const fiData =localStorage.getItem("fifth");
  expenses.push({fData,sData,tData,foData,fiData});
  //  totalAmount+=Amount;
  //  totalAmountCell.textContent=totalAmount;

  if(Selectors==="cradit"){
     const   newRow =  expensebody.insertRow();
 
     const  StartDateCell = newRow.insertCell();
     const   EndDateCell =  newRow.insertCell();
     const   selectorsCell = newRow.insertCell();
     const    AmountCell = newRow.insertCell();
     const    ReasonCell= newRow.insertCell();
     
      const expense = expenses[expenses.length -1];
   
      StartDateCell.innerHTML =expense.fData;
      EndDateCell.innerHTML = expense.second;
      selectorsCell.innerHTML=expense.tData;
      AmountCell.innerHTML=expense.foData;
      ReasonCell.innerHTML=expense.fiData;
 }
 else{
    const   newRow =  expensebody1.insertRow();
 
    const  StartDateCell = newRow.insertCell();
    const   EndDateCell =  newRow.insertCell();
    const   selectorsCell = newRow.insertCell();
    const    AmountCell = newRow.insertCell();
    const    ReasonCell= newRow.insertCell();
    
     const expense = expenses[expenses.length -1];
  
     StartDateCell.innerHTML =expense.fData;
     EndDateCell.innerHTML = expense.second;
     selectorsCell.innerHTML=expense.tData;
     AmountCell.innerHTML=expense.foData;
     ReasonCell.inn=expense.fiData;
 }
}


function saveData(){
    localStorage.setItem("first",Sdate);
    localStorage.setItem("second",Edate);
    localStorage.setItem("third",Selectors);
    localStorage.setItem("fourth",Amount);
    localStorage.setItem("fifth",Reason);
  
    const fData =localStorage.getItem("first");
    const sData = localStorage.getItem("second");
     const tData =localStorage.getItem("third");
     const foData =localStorage.getItem("fourth");
     const fiData =localStorage.getItem("fifth");
     expenses.push({fData,sData,tData,foData,fiData});
     if(Selectors==="cradit"){
 
        const   newRow =  expensebody.insertRow();
     
        const  StartDateCell = newRow.insertCell();
        const   EndDateCell =  newRow.insertCell();
        const   selectorsCell = newRow.insertCell();
        const    AmountCell = newRow.insertCell();
        const    ReasonCell= newRow.insertCell();
        
         const expense = expenses[expenses.length -1];
         totalAmount += Number(foData);
         totalAmountCell=totalAmount;
         StartDateCell =expense.fData;
         EndDateCell= expense.sData;
         selectorsCell=expense.tData;
         AmountCell=expense.foData;
         ReasonCell=expense.fiData;
         
        
     }
     
     else{
       const   newRow =  expensebody1.insertRow();
     
       const  StartDateCell = newRow.insertCell();
       const   EndDateCell =  newRow.insertCell();
       const   selectorsCell = newRow.insertCell();
       const    AmountCell = newRow.insertCell();
       const    ReasonCell= newRow.insertCell();
       
        const expense = expenses[expenses.length -1];
        
        totalAmount1 +=Number(foData);
        totalAmountCell1= totalAmount1;
        StartDateCell=expense.fData;
        EndDateCell = expense.sData;
        selectorsCell=expense.tData;
        AmountCell=expense.foData;
        ReasonCell=expense.fiData;
     }
     
      
}
function showdata(){

  if(Selectors==="cradit"){
     const   newRow =  expensebody.insertRow();
 
     const  StartDateCell = newRow.insertCell();
     const   EndDateCell =  newRow.insertCell();
     const   selectorsCell = newRow.insertCell();
     const    AmountCell = newRow.insertCell();
     const    ReasonCell= newRow.insertCell();
     
      const expense = expenses[expenses.length -1];
   
      StartDateCell.innerHTML =expense.fData;
      EndDateCell.innerHTML = expense.second;
      selectorsCell.innerHTML=expense.tData;
      AmountCell.innerHTML=expense.foData;
      ReasonCell.innerHTML=expense.fiData;
 }
 else{
    const   newRow =  expensebody1.insertRow();
 
    const  StartDateCell = newRow.insertCell();
    const   EndDateCell =  newRow.insertCell();
    const   selectorsCell = newRow.insertCell();
    const    AmountCell = newRow.insertCell();
    const    ReasonCell= newRow.insertCell();
    
     const expense = expenses[expenses.length -1];
  
     StartDateCell.innerHTML =expense.fData;
     EndDateCell.innerHTML = expense.second;
     selectorsCell.innerHTML=expense.tData;
     AmountCell.innerHTML=expense.foData;
     ReasonCell.inn=expense.fiData;
 }

}



const sDate = document.getElementById("date-start");
const eDate =document.getElementById("date-end");
const selectors= document.getElementById("selector");
const amounts =document.getElementById("amount");
const reason = document.getElementById("resason-box");
const expensebody = document.getElementById("expense-body");
const expensebody1 = document.getElementById("expense-body1");
const totalAmountCell = document.getElementById("totalAmount");
const totalAmountCell1 = document.getElementById("totalAmount1");
const btn= document.getElementById("submit");
let Table=document.getElementById('table');

let totalAmount=0;
let totalAmount1=0;

let expenses = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : [];

function getselectvalue(){
  const selector = document.getElementById("selector").value;
}


btn.addEventListener("click",submitData);


function submitData(){
  const Sdate  =sDate.value;
  const Edate  =eDate.value;
  const Selectors=selectors.value;
  const Amount =amounts.value;
  const Reason =reason.value;

  if(Sdate===""){
     alert("please fill the Start- Date")
     return;
  }
  
  if(Edate===""){
     alert("please fill the End- Date")
     return;
  }
  
  if(Amount===""){
     alert("please fill the Amount")
     return;
  }
  
  if(selectors===""){
     alert("please fill the Start- Date")
     return;
  }
  
  if(Sdate===""){
     alert("please fill the select atleast one")
     return;
  }
 
  
  if(Reason===""){
     alert("please fill the description")
     return;
  }
  
  // localStorage.setItem("first",Sdate);
  // localStorage.setItem("second",Edate);
  // localStorage.setItem("third",Selectors);
  // localStorage.setItem("fourth",Amount);
  // localStorage.setItem("fifth",Reason);

 
expenses.push({Edate,Sdate,Selectors,Amount,Reason});
  localStorage.setItem("expense",JSON.stringify(expenses))

 
  
    
if(Selectors==="cradit"){
  Table.innerHTML= `
  <div>
  ${createTable( expenses)}
  </div>`;
      
  const createTable = (expenses)=>{
     return `
     <table>
     <thead>
         <th>Start-Date</th>
         <th>End-Date</th>
         <th>Credit/Debit</th>
         <th>Amount</th>
         <th>Description</th>
         <th>Edit</th>
     </thead>
     <tbody>
         ${createtableData(expenses)}
     </tbody>
     <tfoot>
       
     </tfoot>
   </table>`;

 };
   const createtableData=(expenses)=>{
      let html = ''
      expenses.forEach(expense=>{
         html+=`
         <tr>
         <td>${expense.sData}</td>
         <td>${expense.Edate}</td>
         <td>${expense.Selectors}</td>
         <td>${expense.Amount}</td>
         <td>${expense.Reason}</td>
     </tr>`
      });
       return html;
    }
 
  




  //   btnEdit.textContent="Edit";
  //   btnEdit.classList.add('Edit');
  //   EditCell.appendChild(btnEdit);

 }   
}


// for( const expense of expenses ){
//    const Sdate  =sDate.value;
//    const Edate  =eDate.value;
//    const Selectors=selectors.value;
//    const Amount =amounts.value;
//    const Reason =reason.value;

//    localStorage.setItem("first",Sdate);
//    localStorage.setItem("second",Edate);
//    localStorage.setItem("third",selectors);
//    localStorage.setItem("fourth",Amount);
//    localStorage.setItem("fifth",Reason);

//    const fData =localStorage.getItem("first");
//    const sData = localStorage.getItem("second");
//     const tData =localStorage.getItem("third");
//     const foData =localStorage.getItem("fourth");
//     const fiData =localStorage.getItem("fifth");
//    expenses.push({fData,sData,tData,foData,fiData});
//    //  totalAmount+=Amount;
//    //  totalAmountCell.textContent=totalAmount;

//    if(Selectors==="cradit"){
//       const   newRow =  expensebody.insertRow();
 
//       const  StartDateCell = newRow.insertCell();
//       const   EndDateCell =  newRow.insertCell();
//       const   selectorsCell = newRow.insertCell();
//       const    AmountCell = newRow.insertCell();
//       const    ReasonCell= newRow.insertCell();
     
//        const expense = expenses[expenses.length -1];
   
//        StartDateCell.innerHTML =expense.fData;
//        EndDateCell.innerHTML = expense.second;
//        selectorsCell.innerHTML=expense.tData;
//        AmountCell.innerHTML=expense.foData;
//        ReasonCell.innerHTML=expense.fiData;
//   }
//   else{
//      const   newRow =  expensebody1.insertRow();
 
//      const  StartDateCell = newRow.insertCell();
//      const   EndDateCell =  newRow.insertCell();
//      const   selectorsCell = newRow.insertCell();
//      const    AmountCell = newRow.insertCell();
//      const    ReasonCell= newRow.insertCell();
//      const    EditCell = newRow.insertCell();
    
//       const expense = expenses[expenses.length -1];
  
//       StartDateCell.innerHTML =expense.fData;
//       EndDateCell.innerHTML = expense.second;
//       selectorsCell.innerHTML=expense.tData;
//       AmountCell.innerHTML=expense.foData;
//       ReasonCell.inn=expense.fiData;
//   }
// }
