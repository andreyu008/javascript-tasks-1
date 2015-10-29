var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3],10);

function toRoman(number){
    var tens = Math.floor(number / 10) * 10;
    var units = number - tens;
    var hours = romans[tens] + romans[units];
    return hours;
}

if (hours >= 0 && hours <=23 && minutes >=0 && minutes<=59) {

    var romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    romans [20] = 'XX';
    romans [30] = 'XXX';
    romans [40] = 'XL';
    romans [50] = 'L';

    var romanHours = toRoman(hours);
    var romanMinutes=toRoman(minutes);

    console.log(hours === 0 ? '-' : romanHours, romanMinutes);
} else{
    console.log('Время указанно неверно');
}
