//阅读进度条
$(document).ready(function() {
  $(window).scroll(function() {
    $('.top-scroll-bar').attr(
      'style',
      'width: ' +
        ($(this).scrollTop() / ($(document).height() - $(this).height())) *
          100 +
        '%; display: block;'
    )
    var s = $(window).scrollTop()
    var a = $(document).height()
    var b = $(window).height()
    var result = parseInt((s / (a - b)) * 100)
    $('.top-scroll-bar').css('width', result + '%')
    if (result >= 0 && result <= 19)
      $('.top-scroll-bar').css('background', '#d1efec')
    if (result >= 20 && result <= 39)
      $('.top-scroll-bar').css('background', '#b7ece7')
    if (result >= 40 && result <= 59)
      $('.top-scroll-bar').css('background', '#90eae1')
    if (result >= 60 && result <= 79)
      $('.top-scroll-bar').css('background', '#64e6d9')
    if (result >= 80 && result <= 99)
      $('.top-scroll-bar').css('background', '#39efdc')
    if (result == 100) $('.top-scroll-bar').css('background', '#05c1ae')
  })
})
