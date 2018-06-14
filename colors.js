var Links= {
  setColor : function(color){
    //var alist = document.querySelectorAll('a');
    //var i=0;
    //while ( i < alist.length){
    //    alist[i].style.color = color;
    //    i = i+1;
    //  }
    $('a').css('color',color);
  }
}
var Borders = {
  bottom : function (color){
    //document.querySelector('h1').style.borderBottomColor=color;
    $('h1').css('borderBottomColor',color);
  },
  right : function (color){
    //document.querySelector('#grid ul').style.borderRightColor=color;
    $('#grid ul').css('borderRightColor',color);
  }
}
var Body={
      setBackgroundColor : function(color) {
        //document.querySelector('body').style.backgroundColor=color;
        $('body').css('backgroundColor',color);
      },
      setColor : function (color) {
        //document.querySelector('body').style.color=color;
        $('body').css('color',color);
      }
}

var Iframes={
  setBackgroundColor : function (color){
    document.getElementById('myframe').style.backgroundColor = color;
  },
  setColor : function (color) {
    
  }
}

function night_day(self){

  if ( self.value === 'Night')
    {
      Body.setBackgroundColor('black');
      Body.setColor('AntiqueWhite ');
      Borders.bottom('AntiqueWhite ');
      Borders.right('AntiqueWhite ');
      self.value = 'Day';
      Links.setColor('AntiqueWhite ');
      Iframes.setBackgroundColor('gray');
      Iframes.setColor('AntiqueWhite');
      }

  else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Borders.bottom('black');
      Borders.right('black');
      self.value = 'Night';
      Links.setColor('blue');
      Iframes.setBackgroundColor('white');
      }
}
