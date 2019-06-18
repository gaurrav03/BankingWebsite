$('#LoginBtn').click(function (event) {
    //mouse event action
    if ( validateEmail($('#Email').val(), '#EmailError')  && validatePassword($('#Password').val(), '#PasswordError')) {
        //if it satisfy the validate password and validate email function
        console.log("Make API call");
        if($('#Email').val()=='gaurav@gmail.com' && $('#Password').val()=='gaurav@12'){
            window.location.href="Dashboard.html";
        }else{
            $('#PasswordError').text('Incorrect credentials');
        }
       
    }
});
// Input : Password, ID
// Operation : TAKE INPUT ID AND PASSWORD AND VALIDATE PASSWORD
// Output : bool
function validatePassword(Password, ID) {

    //Sets text with ID as ''
    if (Password == '' || Password == null || Password == undefined) {
        $(ID).text('Password cannot be empty.');
        return false;
    }
    var PasswordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    //regex to validate password
    if (!PasswordPattern.test(Password)) {
        //javascript inbuilt function to test email and password is correct now(incorrect password email)
        $(ID).text('Password must include a special character and a numeric value.');
        return false;
    }
    return true;
}




// Input : Email, ID
// Operation : Take input Email and ID and validate Email
// Output : bool
function validateEmail(Email, ID) {
    console.log('validateEmail() called');
    console.log(Email);
    console.log(typeof(Email));
    console.log(ID);
    $(ID).text('');
    if (Email == '' || Email == null || Email == undefined) {
        $(ID).text('Email cannot be empty.');
        return false;
    }
    var EmailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    //regx to validate email
    if (!EmailPattern.test(Email)) {
        //javascript inbuilt function to test email and password is correct now(incorrect password email)
        $(ID).text('Please enter a valid Email Address.');
        return false;
    }
    return true;
}



// Input : Value, ID
// Operation : TAKE INPUT ID AND Value AND VALIDATE String
// Output : bool
function validateString(Value, ID) {
    console.log('validateString() called');
    console.log(Value);
    console.log(typeof(Value));
    console.log(ID);

    $(ID).text('');
    //Sets text with ID as ''
    if (Value == '' || Value == null || Value == undefined) {
        $(ID).text('This field cannot be empty.');
        return false;
    }
    return true;
}





// Input : Value, ID
// Operation : TAKE INPUT ID AND Value AND VALIDATE Number
// Output : bool
function validateNumber(Value, ID) {
    console.log('validateNumber() called');
    console.log(Value);
    console.log(ID);

    $(ID).text('');
    //Sets text with ID as ''
    if (Value == '' || Value == null || Value == undefined) {
        $(ID).text('This field cannot be empty.');
        return false;
    }
    return true;
}





// Input : Value, ID, 
// Operation : TAKE INPUT IP AND Value AND VALIDATE Number
// Output : bool
function validateInput(Value, ID, datatype) {
    console.log('validateInput() called');
    console.log(Value);
    console.log(ID);
    console.log(datatype);
    console.log(typeof(Value));
    $(ID).text('');
    //Sets text with ID as ''
    if (Value == '' || Value == null || Value == undefined) {
        $(ID).text('This field cannot be empty.');
        return false;
    }
    return true;
}







$('#RegisterBtn').click(function (event) {
    //mouse event action
    if (validateEmail($('#RegisterEmail').val(),'#RegisterEmailError') && validatePassword($('#RegisterPassword').val(),'#RegisterPasswordError') && validateString($('#RegisterInputAddress').val(),'#RegisterInputAddressError')) {
        //if it satisfy the validate password and validate email function
        console.log("Make API call");
    }
});







