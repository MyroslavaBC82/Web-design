function isWristBand(band){
	// рисунок в строках
	var viz1=true,viz2=true,viz3=true,viz4=true;
	for(i = 0; i < band.length; ++i){
		check = true;
		for(j = 1; j < band[i].length; ++j){
			if(band[i][j]!==band[i][j-1]) check = false;
		}
		if(check === false){
			viz1 = false;
		}
	}
	// рисунок в столбцах
	for(j = 0; j < band[0].length; ++j){
		check = true;
		for(i = 1; i < band.length; ++i){
			if(band[i][j] !== band[i-1][j]) check = false;
		}
		if(check === false){
			viz2 = false;
		}
	}
	// проверка диагонального рисунка(діагональна зліва)
	for(i = 0; i < band.length; ++i){
		for(j = 0; j < band[0].length; ++j){
			tmp = "";
			for(z = 0; z < band[0].length-j && z < band.length-i; ++z){
				tmp+= band[i+z][j+z];
			}
			if((tmp.split(tmp[0]).length - 1)!== tmp.length){
				viz3=false;
			}
		}
		
	}
	// проверка диагонального рисунка (діагональна справа)
	for(i = 0; i < band.length; ++i){
		for(j = band[0].length-1; j >= 0 ; --j){
			tmp = "";
			for(z = 0; z < band.length-i && j-z>=0; ++z){
				tmp+= band[i+z][j-z];
			}
			if((tmp.split(tmp[0]).length - 1)!== tmp.length){
				viz4=false;
			}
		}
		
	}
	return viz1||viz2||viz3||viz4;
}
