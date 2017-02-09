
(function(){


  var building = {
    firstFloor: 'Ресторан',
    secondFloor: 'Клуб',
    thirdFloor: 'Зал'
  }

  console.log( building );


function test(){

    if( building.secondFloor === 'Клуб' ){
      if( building.fourthFloor === undefined ){
        building.fourthFloor = 'Клуб';
        building.secondFloor = 'Магазин';
      }

    }

}
test();
console.log( building );
})()








// !!!!
