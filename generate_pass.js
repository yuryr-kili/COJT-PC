generate_pass = (moji, num)=>{
var result = []; //返値を格納する配列

for (let i = 0; i < num; i++) { //パスワード長の回数繰り返し
    for (let j = 0; j < Math.pow(moji.length, num); j++) { //指定文字群から成る指定長のパスワードの合計種類の回数繰り返し
        result[j] = result[j] || []; //配列resultのインデックスが j の要素の配列が存在しなければば[]を、そうでなければresult[j]の値を入れる（jsにおける絶対参照とかよくわからん）
        result[j].push(chars.charAt((j / Math.pow(moji.length, i) ) % chars.length)); //result[j]内の配列に文字を要素として追加する。
    }
}

return result; //返値
};

const moji = '0123456789';
