
var CurrentBalance = 0;
$('#LogoutModal').click(function () {
    console.log("clicked");
    //mouse event action
    window.location.href = "index.html";
});


$('#Add').click(function (event) {
    //mouse event action
    if (validateNumber($('#CreditAmount').val(), '#CreditError')) {
        //if it satisfy the validate password and validate email function
        CurrentBalance += parseInt($("#CreditAmount").val());
        displayBalance(CurrentBalance);
        

        $('#AddMoneyModal').modal('toggle');
    }


});

function displayBalance(Balance) {
    $("#CurrentBalance").text('Rs. ' + Balance + ' /-');

    $("#CreditTransaction").text('Rs. ' + Balance + ' /-');
    
     $("#DebitTransaction").text('Rs. ' + Balance + ' /-');
     $("#Date").text(new Date());
        

}
$(document).ready(function () {
    console.log(new Date());
    displayBalance(CurrentBalance);
});

$('#Pay').click(function (event) {
    //mouse event action
    if (validateNumber($('#DebitAmount').val(), '#DebitAmountError')) {
        //if it satisfy the validate password and validate email function
        console.log("Make API call");
        if (parseInt($("#DebitAmount").val()) > CurrentBalance) {
            alert('you have insuffisient balance:(');
            $('#PayMoneyModal').modal('toggle');
        } else {

            CurrentBalance -= parseInt($("#DebitAmount").val());
            displayBalance(CurrentBalance);
            $('#PayMoneyModal').modal('toggle');
        }






    }

});



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



// Input : Value, ID
// Operation : TAKE INPUT ID AND Value AND VALIDATE String
// Output : bool
function validateString(Value, ID) {
    console.log('validateString() called');
    console.log(Value);
    console.log(typeof (Value));
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
    console.log(typeof (Value));
    $(ID).text('');
    //Sets text with ID as ''
    if (Value == '' || Value == null || Value == undefined) {
        $(ID).text('This field cannot be empty.');
        return false;
    }
    return true;
}






$('#Upload').click(function (event) {
    //mouse event action
    if (validatefile($('#Upload').val(), '#DebitAmountError')) {
        //if it satisfy the validate password and validate email function
        console.log("Make API call");

    }
});






