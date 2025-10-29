
let btn=document.getElementById('submit');
let message=document.getElementById('mess');
let tHead=document.getElementById('tab');
let count=0;

btn.addEventListener('click', (e)=>{  
    e.preventDefault();

 let nam=document.getElementById('name').value.trim();
let coun=document.getElementById('country').value.trim();
let dob=document.getElementById('dob').value.trim();
    
    if(nam === " " || coun === " " || dob === " "){
       message.innerText="All fields are required";
       message.style.color="red";
    }
    else{
      count++;
      let taRow=document.createElement('tr');

      let tableData=document.createElement('td');
      let serialNum=tableData.innerText=count;
     
      let tableDa=document.createElement('td');
      let newName= tableDa.innerText=nam;

      let tablD=document.createElement('td');
      let newCountry= tablD.innerText=coun;

      let taD=document.createElement('td');
      let newDob=taD.innerText=dob;

     taRow.appendChild(tableData);
     taRow.appendChild(tableDa);
     taRow.appendChild(tablD);
     taRow.appendChild(taD);

     tHead.appendChild(taRow);
     
     tHead.style.display="block";
  
     
    localStorage.setItem(serialNum,newName);
    
    

    // while(data !=  null){
    //     localStorage.removeItem(data);
    // }

    // localStorage.clear();
    

     
   document.getElementById('name').value ="";
   document.getElementById('country').value="";
   document.getElementById('dob').value="";
    }
   
   //local storage(key,value)
    

    // localStorage.removeItem("username");

    


});