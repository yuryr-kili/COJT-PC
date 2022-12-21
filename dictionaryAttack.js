function get_csvdata(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
    let list;
	let array_dic;
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		response.replace(/\s+/g, ""); //空白削除
		list = response.split(",");
		array_dic = Array(list);
		return array_dic;
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}