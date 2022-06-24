//FUNCTIONS FORMS
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        $('#divPwd').addClass('d-none');
    }else{
        $('#divPwd').removeClass('d-none');
    }
}

function IsPassword(password) {
    if(password.length > 6){
        $('#divCheck').removeClass('d-none');
    }else{
        $('#divCheck').addClass('d-none');
    }
}

function isAgree(){
    if($('#imAgree').is(':checked')){
        $('#divLogin').removeClass('d-none');
    }else{
        $('#divLogin').addClass('d-none');
    }
}