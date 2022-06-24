$('#logout').on('click',function(){
    localStorage.setItem('login', 'false');
    window.location.href="index.html";
});

$('#formLogin').on('submit', function(e){
    e.preventDefault();
    alert('formLogin');
});

function ecris(){
    var searchBar=$('#searchBar').val();
    $('#resultSearch').html(searchBar);
}