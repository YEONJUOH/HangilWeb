jQuery(document).ready(function(){
			"use strict";
			var options = {};
			options.ui = {
				container : "#pwd-container",
				showVerdictsInsideProgressBar : true,
				viewports : {
					progress : ".pwstrength_viewport_progress"
				}
			};
			options.common = {
				debug : true,
				onLoad : function() {
					$("#messages").text("Start typing password");
				}
			};
			$("#password").pwstrength(options);
		});
		
		$(function(){

			$('[role="presentation"]').click(function(){

				var domain = $(this).find("a").text();

				$("#domain").val(domain);

			});
			
			$("#confirmsignup").click(function() {

				//submitFunc();
				return submitFunc();

			});
			$("#useridTmp").keyup(function() {

				checkId();
			});
			$("#reenterpassword").keyup(function() {

				checkPWD();
				checkEmpty();
			});

			$("#password").keyup(function() {

				checkEmpty();
			});

			$(".signBtns").click(
					function() {
						console.log('hi')

						var name = $(this).attr("href");

						$(".myTabs").each(function() {
							$(this).removeClass("active");
						})

						$(".tab-pane").each(function() {
							$(this).removeClass("active");
							$(this).removeClass("in");
						})

						if (name == "#join") {
							$("#myTab li:nth-of-type(2) a").parent().addClass(
									"active");
							$("#signup").addClass("active");
							$("#signup").addClass("in");

						}
						if (name == "#sign") {
							$("#myTab li:nth-of-type(1) a").parent().addClass(
									"active");
							$("#signin").addClass("active");
							$("#signin").addClass("in");

						}
						$("#container2 .modal").modal();
						
					});

		})