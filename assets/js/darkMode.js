// DARK MODE
window.onload=function(){
    if(localStorage.getItem('mode')){
        if(localStorage.getItem('mode')=='light'){
            $('#linkMode').attr("href", "assets/css/style.css");
            $('#btnCheck').prop('checked',false);
            $('#labelCheck').removeClass('btn-dark');
            $('#labelCheck').addClass('btn-light');
            $('#sun').removeClass('d-none');
            $('#moon').addClass('d-none');
        }else if(localStorage.getItem('mode')=='dark'){
            $('#linkMode').attr("href", "assets/css/dark-style.css");
            $('#btnCheck').prop('checked',true);
            $('#labelCheck').removeClass('btn-ligh');
            $('#labelCheck').addClass('btn-dark');
            $('#moon').removeClass('d-none');
            $('#sun').addClass('d-none');
        }
    }else{
        localStorage.setItem('mode', 'light');
    }
}

function changMode(){
    if($('#btnCheck').is(':checked')){
        localStorage.setItem('mode', 'dark');
        mode();
    }else{
        localStorage.setItem('mode', 'light');
        mode();
    }
}
