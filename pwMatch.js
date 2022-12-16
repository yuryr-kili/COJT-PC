var pwlist=Array.of(1234,5678,9012,3456,7890);
function pw_Match() {
    if(pwlist.indexOf(1234)==-1){ //indexOfが完全一致だったか怪しいので要確認。例：pwlist内123456に対し.indexOf(1234)が反応するかどうか？
        alert("incorrect pw");
    }
    else{
        alert("correct pw");
    }
}

//修正案
/*
const pwlist=Array.of(1234,5678,9012,3456,7890);
const seikai = 1234;

function pw_Match(pw, correct) {
    pw_len = pw.length
    for(i=0; i<pw_len; i++){
        if(pw[i] === correct){ 
            alert("incorrect pw");
        }
        else{
            alert("correct pw");
        }
    }
}
*/
