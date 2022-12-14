const output_svg = document.getElementById('color_list');
let index = 1;

function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		response.replace(/\s+/g, ""); //空白削除
		const pswd = respocse.sprit(","); //配列格納
		output_svg.innerHTML = response; // 表示
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}
