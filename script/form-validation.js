function validateForm() { 
  let form= document.getElementsByName("myform");   
  let name=document.myform.name.value; 
    
  let email=document.myform.email.value;  
  let atposition=email.indexOf("@");  
  let dotposition=email.lastIndexOf("."); 
    
  if (name == "") {
    alert("Name must be filled out"); 
    document.myform.name.style.borderColor = "red";
    document.myform.name.focus(); 
    event.preventDefault();
  } else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){  
      alert("Please enter a valid e-mail address" ); 
      document.myform.email.style.borderColor = "red";
      document.myform.email.focus();   
      event.preventDefault();
      } else{
        $(".contact__form").remove(); 
        alert("Thank you for submitting. We will contact you within 24 hours."); 
        }
} 