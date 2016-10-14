import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'user-friends',
     templateUrl: 'app/user/friends/user-friends.component.html'
})
export class UserFriendsComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit(): void {
		    setTimeout(() => {
		 	jQuery(document).ready(function($) {
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
                
            	$("#jobforward").click(function(){
            		$(this).fadeOut(1000,function(){
            			$("#referral").fadeIn(1000);
            		});
            	});
            	
            	$(".select-btn").click(function(){
            		$(this).parent().addClass("frd-lst-half");
            		$(this).parent().find(".cancel-btn").fadeIn(750);
            		$(this).closest('li').find('.top-remove').fadeOut(500);
            	});
            	$(".cancel-btn, .top-remove").click(function(){
            		$(this).closest('li').slideUp(500);
                    return false;
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

			});
		}, 0);
		
	} //ngAfterViewInit
}