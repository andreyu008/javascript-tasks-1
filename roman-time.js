var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3],10);

if (hours >= 0 && hours <=23 && minutes >=0 && minutes<=60) {

    var romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    romans [20] = 'XX';
    romans [30] = 'XXX';
    romans [40] = 'XL';
    romans [50] = 'L';
    var hoursTens = Math.floor(hours / 10) * 10;
    var hoursUnits = hours % 10;
    var romanHours = romans[hoursTens] + romans[hoursUnits];
    var minutesTens = Math.floor(minutes/10)*10;
    var minutesUnits = minutes % 10;
    var romanMinutes = romans[minutesTens]+romans[minutesUnits];
    console.log(hours === 0 ? '-' : romanHours, romanMinutes);
} else{
    console.log('Время указанно неверно');
}






// Немного замечательного кода и магии
