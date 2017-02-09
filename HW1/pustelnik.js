//Задание 1


while (true) {
    var color = prompt('Укажите цвет из перечисленных(red, green, blue)');
    if (color === 'red'|| color === 'green' || color === 'blue') break;
}

while (true) {
    var memory = prompt('Выберите объем памяти (32, 64, 128)');
    if (memory === '32'|| memory === '64' || memory === '128') break;
}

document.write('<img src='+color+memory+'.jpg>')




//Задание 2

// var matrix = new Array(3);
// for(var i = 0; i < matrix.length; i++){
//     matrix[i] = new Array;
// 	document.write('<br>');

//     for(var j = 0; j < matrix.length; j++){
//         matrix[i][j] = 0;
//         console.log(matrix[i][j]);
//         document.write("<span>"+" "+matrix[i][j]+" "+"</span>");
    
//     }
// }
 
// console.log( matrix );

