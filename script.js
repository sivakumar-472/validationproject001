function validateform(){
    //get form inputs
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;

    //reset error message

    document.getElementById('nameError').innerhtml='';
    document.getElementById('emailError').innerhtml='';

    //validatename
    if(name===''){
        document.getElementById('nameError').innerhtml='Name is Required';
        return false;//prevent form submission
    }


    //validate mail

    var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').innerhtml='invalid Email'
        return false  //prevent form submission
    }

    alert('form submitted succesfully');
        return true;
    



}