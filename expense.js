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
let TableD = document.getElementById("table-D");
let   editbtn = document.querySelector(".editbtn");
let tbcss = document.getElementById('tbcss');



let expenses = localStorage.getItem("expense") ? JSON.parse(localStorage.getItem("expense")) : [];

function getselectvalue(){
   const selector = document.getElementById("selector").value;
 }

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
   expenses.push({Edate,Sdate,Selectors,Amount,Reason});
   localStorage.setItem("expense",JSON.stringify(expenses));
   expenses.forEach(expense=>{
      if(expense.Selectors==="cradit"){
         Table.innerHTML =`
         <div>
               ${ createTable(expenses)}
         </div>`
      }
      else{
         TableD.innerHTML =`
         <div>
            ${ createTabled(expenses)}
         </div>`
      }
   })
//  if(expenses.Selectors==="cradit"){
//    Table.innerHTML =`
//    <div>
//          ${ createTable(expenses)};
//    </div>`
// }
// else{
//    TableD.innerHTML =`
//    <div>
//       ${ createTabled(expenses)}
//    </div>`
// }
  
 
} 


btn.addEventListener("click",submitData);


const createTable =(expenses)=>{
   return `
            <table>
            <thead class="tbhead">
                <th>Start-Date</th>
                <th>End-Date</th>
                <th>Credit/Debit</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Edit</th>
            </thead>
            <tbody id="tbcss">
                ${createtableData(expenses)}            
            </tbody>
            <tfoot>
              
            </tfoot>
           </table>`;  
};

const createtableData =(expenses)=>{
   let html =''
       expenses.forEach(expense=>{
         if(expense.Selectors==="cradit"){
            html+=`
            <tr class='tr'>
            <td>${expense.Sdate}</td>
            <td>${expense.Edate}</td>
            <td>${expense.Selectors}</td>
            <td>${expense.Amount}</td>
            <td>${expense.Reason}</td>  
        </tr>`
         }
       });  
       return html;
    
}
 

Table.innerHTML =`
<div>
   ${ createTable(expenses)}
</div>`

let btnEdit = document.createElement('button');
btnEdit.textContent='edit';
btnEdit.classList.add(".Edit");






// TableD.innerHTML =`
// <div>
//    ${ createTabled(expenses)}
// </div>`




const createTabled =(expenses)=>{
   return `
            <table>
            <thead class="tbhead">
                <th>Start-Date</th>
                <th>End-Date</th>
                <th>Credit/Debit</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Edit</th>
            </thead>
            <tbody class="tbcss">
                ${createtableDatad(expenses)}
                ${btnEdit}
            </tbody>
            <tfoot>
              
            </tfoot>
           </table>`;  
};

const createtableDatad =(expenses)=>{
   let html1 =''
       expenses.forEach(expense=>{

         if(expense.Selectors==='deposit'){
            html1+=`
            <tr>
            <td>${expense.Sdate}</td>
            <td>${expense.Edate}</td>
            <td>${expense.Selectors}</td>
            <td>${expense.Amount}</td>
            <td>${expense.Reason}</td>
           
        </tr>`
         }
       });
    
       return html1;
}
 





TableD.innerHTML =`
<div>
   ${ createTabled(expenses)}
</div>`






