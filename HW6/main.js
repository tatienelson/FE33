(function(){

  function Circle(){

    // var self = this;
    // 1) При нажатии на созданную фигуру передавать данные о фигуре в окно для редактирования.
    // 2**) Менять свойства выбранной фигуры. ( Кнопка "Сохранить" запускает метод edit )
    // 3) если "почти" белый цвет, то добавить рамку к фигуре.
    // 4*) При нажатии на фигуру, создавать новую фигуру ниже/выше ( Свойство target )

    var top, left, width, bgc, figure;

    setCoordinates = function( newTop, newLeft ){
      top = newTop - newWidth.value / 2 +'px' ;
      left = newLeft - newWidth.value / 2 +'px';
    
    } // !!!!!!!!!!! 4

    setSize = function(){
      if( newWidth.value > area.clientWidth ){ 
      newWidth.value = area.clientWidth;
      width = area.clientWidth+'px';
      }
      
      else{
      width = newWidth.value+'px'; 
      }
    }

    setColor = function(){
      bgc = newBgc.value; // 3
    }

    setFigure = function(){
      var radios = document.getElementsByName('figure');
      for( var i = 0; i < radios.length; i++ ){
        if( radios[i].checked ){
          figure = radios[i].value;
        }
      }
    }

    getValue = function(){
      changeWidth.value = event.target.clientWidth;
      // changeColor.value = event.target.style.backgroundColor;
    }



    changeTarget = function(){
      var yes = document.getElementsByClassName('ok');

      for( var i = 0; i < yes.length; i++ ){
        yes[i].onclick = function(){

          var last = document.getElementsByClassName('active');

            for( var j = 0; j < last.length; j++){
              last[j].style.width = changeWidth.value+'px';
              last[j].style.height = changeWidth.value+'px';

              last[j].style.backgroundColor = changeColor.value;

              modal.parentNode.removeChild(modal); // убираем окно редактирования
            }
        } 
      }

    }
  
    identFigure = function(){
      var act = event.target;
      act.className += " active";
      // console.log( event.target.className );
      }




    removeClass = function(){
      var allfigures = document.getElementsByClassName('square'); 

      for( var i = 0; i < allfigures.length; i++ ){
        // console.log( allfigures[i].className );
         var classes = allfigures[i].className.split(' '); // создаем массив классов 

            for (var k = 0; k < classes.length; k++) {
              if (classes[k] == 'active') {
              classes.splice(k, 1); // удалить класс
              k--; 
              }
            }
      allfigures[i].className = classes.join(' '); // склеиваем классы в строку

      }
    }

    // hideModal = function(){
    //    place.deleteChild( modal );
    // }



      this.create = function( event ){

      if( event.target.className !== 'square' && event.target.className !== 'circle' ){
      console.log( event );
      var element = document.createElement('div'); 
      setFigure();
      element.className = figure;
      setSize();
      setCoordinates( event.layerY, event.layerX );
      setColor();
      element.style.top = top;
      element.style.left = left;
      element.style.width = width;
      element.style.height = width; 
      element.style.backgroundColor = bgc;
      area.appendChild(element); 
      // console.log( element );
      // console.log( element.className );
 
      }
      else{
        console.log( event );
        // console.log( event.target );
        // console.log ( event.target.clientbackgroundColor );
        console.log( event.target.style.backgroundColor );


        var modal = document.createElement('div');
        modal.id = 'modal';
        place.appendChild( modal );

        var size = document.createElement('input'); 
        size.type = 'number';
        size.id = 'changeWidth';
        modal.appendChild( size );

        var color = document.createElement('input'); 
        color.type = 'color';
        color.id = 'changeColor';
        modal.appendChild( color );

        var ok = document.createElement('button');
        ok.className = 'ok';
        ok.innerText = 'OK';
        modal.appendChild( ok );

        removeClass();
        identFigure();
        changeTarget();
        getValue();
  

      }



      // console.log( event );
      // var element = document.createElement('div'); //создали элемент
      // setFigure();
      // element.className = figure;
      // setSize();
      // setCoordinates( event.layerY, event.layerX );
      // setColor();
      // element.style.top = top;
      // element.style.left = left;
      // element.style.width = width;
      // element.style.height = width; 
      // element.style.backgroundColor = bgc;
      // area.appendChild(element); // добавить в area созданный лемент
    }

  }

  var c = new Circle();
  area.addEventListener( 'click', c.create )






}())
