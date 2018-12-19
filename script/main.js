$(function(){
    $("#phone").mask("7(999) 99-999-99");
  });

  $(function(){
    $("#phone1").mask("7(999) 99-999-99");
  });

new WOW().init();

$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: '<div class="arrow arrow_right1"></div>',
    prevArrow: '<div class="arrow arrow_left1"></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
  });
});

$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<div class="arrow arrow_right"></div>',
    prevArrow: '<div class="arrow arrow_left"></div>',
    responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 800,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
  ]
});
});

function priceScript(){
    var modal = document.getElementById('MyModal')
    modal.style.display = "block";
};

function offScript(){
    var modal = document.getElementById('MyModal')
    modal.style.display = 'none';
};

function offThanksScript(){
    var modal = document.getElementById('thanks')
    modal.style.display = 'none';
};

$(document).ready(function() {
    var modal = document.getElementById('thanks');
    var modal1 = document.getElementById('MyModal');
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            modal.style.display = "block";
            modal1.style.display = 'none';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});