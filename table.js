function displayTable() {
	let html = '<table id="gen"><th>ИМЯ</th><th>ОЧКИ</th>';
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage.key(i) != "i18nextLng") {
			html += '<tr aling="center">';
			for (let j = 0; j < 1; j++) {
				let key = localStorage.key(i);
				html += "<td>" + localStorage.key(i) + "</td>";
				html += "<td>" + localStorage.getItem(key) + "</td>";
			}
			html += "</tr>";
		}
	}
	html += "</table>";

	document.getElementById("top").innerHTML = html;
}
