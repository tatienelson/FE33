(function(){

  function Circle(){

    // var self = this;
    // Создать метод который будет устанавливать ширину элемента ( и высоту )

    var top, left, width;

    setCoordinates = function( newTop, newLeft ){
      if( newWidth ){
      top = newTop - newWidth.value / 2 +'px' ;
      left = newLeft - newWidth.value / 2 +'px';
    }
  

      // top = newTop +'px';
      // left = newLeft +'px';
    }



    setSize = function(){
      if( newWidth.value ){
          if( newWidth.value > area.clientWidth ){
      newWidth.value = area.clientWidth;
      width = area.clientWidth+'px';
      }
      
      else{
      width = newWidth.value+'px'; 
      }
    }
      
      else{
      newWidth.value = 30;
      width = newWidth.value+'px';

    }
      
    
    }

    this.create = function( event ){
      var element = document.createElement('div'); //создали элемент
      element.className = 'circle';
      setSize();
      setCoordinates( event.layerY, event.layerX );
      element.style.top = top;
      element.style.left = left;
      element.style.width = width;
      element.style.height = width;
      area.appendChild(element); // добавить в area созданный лемент
   
    
    }

  }

  var c = new Circle();
  area.addEventListener( 'click', c.create );

 

}())
