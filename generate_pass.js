generate_pass = (moji, num)=>{
var result = [];

for (let i = 0; i < num; i++) {
    for (let j = 0; j < Math.pow(moji.length, num); j++) {
        result[j] = result[j] || [];
        result[j].push(chars.charAt((j / Math.pow(moji.length, i) ) % chars.length));
    }
}

return result;
};

const moji = '0123456789';
