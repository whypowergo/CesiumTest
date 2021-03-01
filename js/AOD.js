/*改变原始宽度（0）*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
/*恢复原始宽度0*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(function(){
    $('.sidenav h2').on('click', function(){
        $(this).next('ul').toggleClass('active')
    })
})

