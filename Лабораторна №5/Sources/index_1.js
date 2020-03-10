const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
class person {
  constructor(name, surname, gender, dob) {
    this.name=name;
    this.surname=surname;
    this.gender=gender;
    this.dob=dob;
  }
}
var p = new person('Helen','Yu','F','1/12/1950');
var code = "";
// кодирование фамилии
surnm = p.surname.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, ""); // находим все гласные 
surnm += p.surname.replace(/[^AEIOU]/gi, ""); // находим все согласные
surnm += "XXX"; // добавляем 3 X в случае если не хватит гласных или согласных
surnm = surnm.substr(0, 3); // выделяем 3 первых символа из этой строки
code += surnm.toUpperCase();

// кодирование имени
nmcd = p.name.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
nmcd += "XXX";
nmcd = nmcd.substr(0, 3);
code+= nmcd.toUpperCase();

// обрабатываем дату рождения
valid = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
arr = p.dob.match(valid);
day = arr[1];
month = arr[3];
year = arr[4];
//добавляем два последних символа года рождения
code+= year.substr(-2);
//добавляем код месяца
code += months[month];
//добавляем дату рождения
if(p.gender=='M'){
	dayofbirth = day;
	if(dayofbirth < 10){
		code+='0';
		code+=dayofbirth;
	}
	else{
		code+=dayofbirth;
	}
}
else{
	code+= (parseInt(day)+40);
}
 