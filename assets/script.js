$(document).ready(function() {  
  $('.saveBtn').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).parent().children('textarea').val());
    console.log($(this).parent().children('textarea').val());
  });

  function updateHour() {
    var currentHour = dayjs().hour();
    $('.time-block').each(function(){
      if (currentHour == $(this).attr('id')){
      $(this).removeAttr('class')
      $(this).attr('class', 'row time-block present')
      } else if (currentHour > $(this).attr('id')){
      $(this).removeAttr('class')
      $(this).attr('class', 'row time-block past')
      } else {
      $(this).removeAttr('class')
      $(this).attr('class', 'row time-block future')
      };
    });
  };

  updateHour();
  setInterval(updateHour, 15000);

  $('.time-block').each(function() {
    $(this).children('textarea').val(localStorage.getItem($(this).attr('id')))
  });
  
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY, h A'))
});