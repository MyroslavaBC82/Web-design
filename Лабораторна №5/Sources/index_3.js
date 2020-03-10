function caesarCipher(tmp, k) {
	// так же при k<0
	if(k<0) return caeasarCipher(tmp, k+26);
	cipher = '';
	for (i = 0; i < tmp.length; i ++) {
		c = tmp[i];
		// проверяем является ли символ буквой
		if (c.match(/[a-z]/i)) {
			// получаем ascii код
			code = tmp.charCodeAt(i);
			// расматриваем два случая: для букв верхнего регистра и нижнего
			if ((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code - 65 + k) % 26) + 65);
			}
			else if ((code >= 97) && (code <= 122)){
				c = String.fromCharCode(((code - 97 + k) % 26) + 97);
			}
		}
		cipher += c;
	}
	return cipher;
}
