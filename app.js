let years = prompt('В якому році ви народились?');
const newYears = parseInt(years);
let place = prompt('В якому місті ви живете?');
let sport = prompt('Який ваш улюблений вид спорту?');
let count_years, newPlace, newSport;

if(newYears !== newYears){
    count_years = 'Жаль, що ви не захотіли ввести у якому році народились';
}
else{
    count_years = parseInt(2022 - newYears);
}

if(place === 'Київ' || place === 'Вашингтон' || place === 'Лондон'){
    newPlace = 'Ти живеш в столиці ' + place;
}
else if(place === null || place === ''){
    newPlace = 'Жаль, що ви не захотіли ввести місто у якому проживаєте';
}
else{
    newPlace = 'Ти живеш в місті ' + place;
}

if(sport === 'Футбол'){
    newSport = 'Круто, хочеш стати Андрієм Ярмоленком?'
}
else if(sport === 'Бокс'){
    newSport = 'Круто, хочеш стати Олександром Усиком?';
}
else if(sport === 'Волейбол'){
    newSport = 'Круто, хочеш стати Тетяною Козловою?';
}
else if(sport === null || sport === ''){
    newSport = 'Жаль, що ви не захотіли ввести який вид спорту вам подобається';
}
else{
    newSport = 'Круто! ' + sport + ' - це цікавий вид спорту.' ;
}

alert(count_years+"\n" + newPlace+"\n" + newSport);