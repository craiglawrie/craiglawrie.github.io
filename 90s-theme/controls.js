function toggle1() {
    // var x = document.getElementById("overlay1");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }

    var x = document.getElementsByClassName("overlay");

    for (i = 0; i< x.length; i++){
        x[i].style.display = none;
    }
    // document.getElementById("overlay1").style.display = "block";
}