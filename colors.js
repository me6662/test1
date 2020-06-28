
var Body = {
  setBackgroundColor : function (color)
  {
      document.querySelector('body').style.backgroundColor = color;
  },
  setColor : function (color)
  {
    //document.querySelector('#article').style.color = color;
    $('#article').css('color', color);
  }
};

var Links = {
  set_a_Tag_Color : function(color)
  {
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i < alist.length)
      // {
      // alist[i].style.color  = color;
      // i++;
      // }
      $('a').css('color' , color) // jQuery 이용
  },
  set_ol_Tag_Color : function(color)
  {
      var alist = document.querySelectorAll('ol');
      var i = 0;
      while(i < alist.length)
      {
      alist[i].style.color  = color;
      i++;
      }
  }
}

function nightDayHanlder(self)
{
  if(self.value === 'night')
  {
    Body.setBackgroundColor('black');
    Body.setColor('powderblue');
    Links.set_a_Tag_Color('powderblue');
    Links.set_ol_Tag_Color('powderblue');
    self.value = 'day';
  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.set_a_Tag_Color('black');
    Links.set_ol_Tag_Color('black');
    self.value = 'night'
  }
}
