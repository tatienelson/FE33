//Задание 1


while (true) {
    var color = prompt('Укажите цвет из перечисленных(red, green, blue)');
    if (color === 'red'|| color === 'green' || color === 'blue') break;
}

while (true) {
    var memory = prompt('Выберите объем памяти (32, 64, 128)');
    if (memory === '32'|| memory === '64' || memory === '128') break;
}

if( color === 'red' && memory === '32' ){
    document.write('<img src="red32.jpg">'); 
}
else if( color === 'red' && memory === '64' ){
    document.write('<img src="red64.jpg">'); 
}
else if( color === 'red' && memory === '128' ){
    document.write('<img src="red128.jpg">'); 
}
else if( color === 'green' && memory === '32' ){
    document.write('<img src="green32.jpg">'); 
}
else if( color === 'green' && memory === '64' ){
    document.write('<img src="green64.jpg">'); 
}
else if( color === 'green' && memory === '128' ){
    document.write('<img src="green128.jpg">'); 
}
else if( color === 'blue' && memory === '32' ){
    document.write('<img src="blue32.jpg">'); 
}
else if( color === 'blue' && memory === '64' ){
    document.write('<img src="blue64.jpg">'); 
}    
else if( color === 'blue' && memory === '128' ){
    document.write('<img src="blue128.jpg">'); 
} 


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

