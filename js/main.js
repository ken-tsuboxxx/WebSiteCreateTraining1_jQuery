$(function() {
  let st = $('#shopname_sub');
  let st_array = st.text().split('');
  $('#shopname_sub').html('');
  $.each(st_array, function(index, element) {
    let new_element = $("<span/>").text(element).css({ opacity: 0});
    st.append(new_element);
    new_element.delay(index * 100);
    new_element.animate({ opacity: 1}, 800);
  });
});


$(function() {
  let counter = 0;
  let sliderWidth = $('.slider_wrapper').innerWidth();
  let listCount = $('.slide_item').length;

  $('.pagination_button').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    counter = $('.pagination_button').index(this);
    $('.slider').css('margin-left', (-1) * counter * sliderWidth);
  });
});
