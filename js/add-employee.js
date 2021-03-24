// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load',init=>{
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let w=800,h=700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(w,h); 
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo(((window.screen.width-w)/2),((window.screen.height-h)/2));
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
    let btnCancel=document.getElementById('cancel');
    let btnSubmit=document.getElementById('submit');
    
// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW   
    btnCancel.addEventListener('click',closeWin=> {window.close()});
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault();
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        let fId=document.getElementById('id').value;
        let fName=document.getElementById('name').value;
        let fExt=document.getElementById('extension').value;
        let fEmail=document.getElementById('email').value;
        let fDept=document.getElementById('department').value;
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS
        /*let fId=document.getElementById('id').value;
        let fName=document.getElementById('name').value;
        let fExt=document.getElementById('extension').value;
        let fEmail=document.getElementById('email').value;
        let fDept=document.getElementById('department').value;*/
// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        let parentWin=window.opener.document.getElementById('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES
        let text= 'ID: '+fId+ `</br>`+
                  'Name: '+fName+`</br>`+
                  'Extension: '+fExt+`</br>`+
                  'Email: '+fEmail+`</br>`+
                  'Department: '+fDept+`</br>`;
// CLOSE THE POPUP
        window.close(); 
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
        parentWin.innerHTML=text;       
    });
});



