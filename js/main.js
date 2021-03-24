// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load',init=>{
    let btn1=document.getElementById('btnAddEmployee');
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    btn1.addEventListener('click',openNew=>{
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
        window.open('add-employee.html','new','width=500 height=600');});
    });



