$('#QuerryButtton').click(function (event) {
    //mouse event action
    if (validateEmail($('#UserEmail').val()) && validateQuerry($('#UserQuerry').val())) {
        //if it satisfy the validate password and validate email function
        console.log("Make API call");
        $('#ModalTitle').text('Success');
        $('#ModalMessage').text('concratulations');
        $('#ContactModal').modal('show');

    }
});
function validateEmail(Email) {
    $('#EmailError').text('');
    if (Email == '' || Email == null || Email == undefined) {
        $('#EmailError').text('Email cannot be empty.');
        return false;
    }
    var EmailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    //regx to validate email
    if (!EmailPattern.test(Email)) {
        //javascript inbuilt function to test email and password is correct now(incorrect password email)
        $('#EmailError').text('Please enter a valid Email Address.');
        return false;
    }
    return true;
}

function validateQuerry(Querry) 

    {
        console.log(Querry);
        $('#UserQuerryError').text('');
        if (Querry == '' || Querry == null || Querry == undefined ||  Querry =='Choose') {
            $('#UserQuerryError').text('querry cannot be empty.');
            return false;
    
        }
       
        return true;
    }

