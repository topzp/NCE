$(document).ready(function(){
    var nav =document.getElementById("assets_nav");
    var navlist = nav.children;
    var con = document.getElementById("assets_content");
    var conlist = con.children;
    for (var i= 0;i<navlist.length;i++){
        navlist[i].index = i;
        navlist[i].onclick = function (){
            for (var m = 0;m< conlist.length;m++){
                navlist[m].className = "";
                conlist[m].style.display ="none";
            }
            this.className = "active";
            conlist[this.index].style.display = "block";
        }
    }

})