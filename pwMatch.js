var pwlist=Array.of(1234,5678,9012,3456,7890);
function pw_Match() {
    if(pwlist.indexOf(1234)==-1){
        alert("incorrect pw");
    }
    else{
        alert("correct pw");
    }
}