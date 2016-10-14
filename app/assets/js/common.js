(function () {

    var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function () {
      var index = $('.bs-component').index($(this).parent());
      $.get(window.location.href, function (data) {
        var html = $(data).find('.bs-component').eq(index).html();
        html = cleanSource(html);
        $("#source-modal pre").text(html);
        $("#source-modal").modal();
      })

    });

    $('.bs-component [data-toggle="popover"]').popover();
    $('.bs-component [data-toggle="tooltip"]').tooltip();

    $(".bs-component").hover(function () {
      $(this).append($button);
      $button.show();
    }, function () {
      $button.hide();
    });

    function cleanSource(html) {
      var lines = html.split(/\n/);

      lines.shift();
      lines.splice(-1, 1);

      var indentSize = lines[0].length - lines[0].trim().length,
          re = new RegExp(" {" + indentSize + "}");

      lines = lines.map(function (line) {
        if (line.match(re)) {
          line = line.substring(indentSize);
        }

        return line;
      });

      lines = lines.join("\n");

      return lines;
    }
    $(".icons-material .icon").each(function () {
      $(this).after("<br><br><code>" + $(this).attr("class").replace("icon ", "") + "</code>");
    });

  })();
  
  $(function () {
    $.material.init();
	if($().noUiSlider)
	{
		$(".shor").length
			?
				$(".shor").noUiSlider({
				  start: 40,
				  connect: "lower",
				  range: {
					min: 0,
					max: 100
				  }
				})
			:
				'';
		
		
		
		$(".svert").length
			?
				$(".svert").noUiSlider({
				  orientation: "vertical",
				  start: 40,
				  connect: "lower",
				  range: {
					min: 0,
					max: 100
				  }
				})
			:
				'';
	}
	
			$(".refferal").click(function(){
				$(this).closest('.jobpost-lst-cnt').find('.frd-cnt').toggle();
			})	
  });
  
  $("#dropdown-menu select").dropdown();
	$('#addexp').click(function(){
		var body = $("html, body");
		body.stop().animate({scrollTop:$("#expdet").offset().top}, '1000', 'swing', function() {
		});
	});
	$('#addedu').click(function(){
		var body = $("html, body");
		body.stop().animate({scrollTop:$("#edudet").offset().top}, '1000', 'swing', function() {
		});
	});
	
	
	$(document).ready(function(){
var index = 1;
    $(".addnew-frd").click(function(){
        $("#ref-frd"+index).show();
index = parseInt(index) + 1;
    });
});

 $(document).ready(function($) {
	$("#owl-example").owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		autoplay:false,
		autoplayHoverPause:false,
		items : 6,
		
		responsive:{
			0:{
				items:1,
				nav:true
			},
			400:{
				items:2,
				nav:true
			},
			700:{
				items:3,
				nav:false
			},
			1000:{
				items:6,
				nav:true,
				loop:false
				}
			}
		});

	});
	
	
	$(document).ready(function($) {
    	$("#owl-example1").owlCarousel({
		loop:true,
        margin:0,
    	nav:true,
        autoplay:false,
        autoplayHoverPause:false,
		items : 6,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			400:{
				items:1,
				nav:true
			},

			700:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:true,
				loop:false
			}
		}
		  });
	})
	
	$(document).ready(function($) {
    	$("#owl-example2").owlCarousel({
		loop:true,
        margin:30,
    	nav:true,
        autoplay:false,
        autoplayHoverPause:false,
		items : 3,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			400:{
				items:1,
				nav:true
			},

			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}
		  });
	})
	
	
	$(window).scroll(function() {
	if(!$(".navbar").length)
	{
		return false;
	}
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
$(function() { $.scrollIt(); });



$(document).ready(function(){
 $("#show-block").click(function(e){
	 e.preventDefault();
	 $(".sign-form-hide").hide();
	 $(".signup-block").hide()
  $(".sign-form-show").fadeIn(750,function(){
    $(".sign-form-hide").fadeOut(750);
    
	})
	})
	
$(".backtologin").click(function(){
	$(".sign-form-show").hide()
        $(".sign-form-hide").show();
		$(".signup-block").show();
    });	
	
});


/*$(".navbar-respo").click(function(){
    $(".navbar-respo").addClass("intro");
}); */


$('.navbar-respo').click(function(){

$(this).toggleClass('navbar-close-icon');

});

 if($(document).width() <= 1024)
	 {
	 $('body').on('focus click',function(){
		$(".navbar-fixed-top").addClass('top-nav-collapse')
		});
	 $("ul.nav.navbar-nav.navbar-right li a").click(function(){
		   $(".navbar-collapse").removeClass("in");	
		   $(".navbar-toggle").removeClass("navbar-close-icon");	 
		  });
	}