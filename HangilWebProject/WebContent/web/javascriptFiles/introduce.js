
$(function() {
	var $prevNav=$('#firstIntroduce_page a'); //using in updateNav
	representativGreeting(); //first-page load
	
	$('.introduce_nav_menu li > a').click(function() {
		updateNav($(this));
		switch ($(this).attr('href')) {
		case '#representativGreeting' :
			representativGreeting();
			break;	
		case '#majorHistory' :
			majorHistory();
			break;
		case '#lookAtBooksOfHangil' :
			lookAtBooksOfHangil();
			break;
		case '#direction' :
			direction();
			break;
		case '#employeeGuide' :
			employeeGuide();
			break;
		}
		return false;
	});
	
	//introduce_nav active update
	function updateNav($currNav) {
		if($prevNav) {
			$prevNav.parent().removeClass('active');			
		}
		$currNav.parent().addClass('active');
		$prevNav = $currNav;
	}
	
	//gototop
	$('#introduce_contents').on('click', '#gototop', function() {
		$('html, body').animate({
			scrollTop : 0
		}, 600);
	});
	
	//in direction, another map Image
	$('#introduce_contents').on('click', '#map2', function() {
		$('#mapIn').slideToggle('fast');
		var $maptext = $('#map2');
		if($maptext.text() == '구글지도') {
			$maptext.text('닫기');
		} else {
			$maptext.text('구글지도');
		}

		return false;
	});
	
});


function representativGreeting() {
	$.ajax({
		url : 'javascriptFiles/introduce_representativeGreeting.json',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			$('.introduce_company #introduce_contents').empty();
			$.each(data, function(index, entry) {
				var html = '<div class="entry">';
				html += '<div class="title row">';
				html += '<div class="col-md-2"><p class="introduce_title">' + entry.title + '</p></div>';
				html += '<div class="col-md-10"><p class="introduce_title_explain">' + entry.title_explain + '</p></div>';
				html += '</div>';
				html += '<p id="photo"><img src="' + entry.src + '" class="img-responsive" alt="representativePicture"/></p>';
				html += '<p id="introduce_text">' + entry.explain1 + '<br /><br />';							
				html += entry.explain2 + '<br /><br />';							
				html += entry.explain3 + '<br /><br />';							
				html += entry.explain4 + '<br /></p>';							
				html += '<p id="introduce_origin">' + entry.origin + '</p>';
				html += '</div>';
				
				$('.introduce_company #introduce_contents').append(html);
			});
		} //end success ajax
	}); //end ajax representativGreeting
}// end function representativGreeting


function majorHistory() {
	$.ajax({
		url : 'javascriptFiles/majorHistory.json',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			$('.introduce_company #introduce_contents').empty();
			$.each(data, function(index, entry) {
				var html = '<div class="entry">';
				if(index == 0) {
					html += '<div class="title row">';
					html += '<div class="col-md-2"><p class="introduce_title">' + entry.date + '</p></div>';
					html += '<div class="col-md-10"><p class="introduce_title_explain">' + entry.content + '</p></div>';	
					html += '</div>';
				} else if(index == 1) {
					html += '<div id="history_explain">';
					html += '<p id="explain_image"><img class="img-responsive" src="' + entry.src + '" alt="hangilsaLogo"/></img></p>';
					html += '<p id="explain_text">' + entry.content + '</p>';
					html += '</div>';
				} else {
					html += '<div class="history row">';
					html += '<div class="col-md-2"><p class="historyDate">' + entry.date + '</p></div>';
					html += '<div class="col-md-10"><p class="historyContent">' +entry.content + '</p></div>';
					html += '</div>';
				}
				html += '</div>';
				$('.introduce_company #introduce_contents').append(html);
			});
			html = '<div id="gototop"><img src="images/gototop.png"/></div>';
			$('.introduce_company #introduce_contents').append(html);
		} //end success ajax
	}); //end ajax majorHistory
}// end function majorHistory


function lookAtBooksOfHangil() {
	$.ajax({
		url : 'javascriptFiles/lookAtBooksOfHangil.json',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			$('.introduce_company #introduce_contents').empty();
			$.each(data, function(index, entry) {
				var html = '<div class="entry">';
				if(index == 0) {
					html += '<div class="title row">';
					html += '<div class="col-md-3"><p class="introduce_title">' + entry.title + '</p></div>';
					html += '<div class="col-md-9"><p class="introduce_title_explain">' + entry.content + '</p></div>';	
					html += '</div>';
				} else {
					html += '<div class="lookbook">';
					html += '<p class="lb_title">' + entry.title + '</p>';
					html += '<p class="lb_image"><img src="' + entry.src + '" class="img-responsive" alt="hangilBooks"/></p>';
					html += '<p class="lb_content">' +entry.content + '</p>';
					html += '</div>';
				}
				html += '</div>';
				$('.introduce_company #introduce_contents').append(html);
			});
			html = '<div id="gototop"><img src="images/gototop.png"/></div>';
			$('.introduce_company #introduce_contents').append(html);
		} //end success ajax
	}); //end ajax lookAtBooksOfHangilmajorHistory
}// end function lookAtBooksOfHangilmajorHistory


function direction() {
	$.ajax({
		url : 'javascriptFiles/direction.json',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			$('.introduce_company #introduce_contents').empty();
			$.each(data, function(index, entry) {
				var html = '<div class="entry">';
				html += '<div class="title row">';
				html += '<div class="col-md-3"><p class="introduce_title">' + entry.title + '</p></div>';
				html += '<div class="col-md-9"><p class="introduce_title_explain">' + entry.title_explain + '</p></div>';
				html += '</div>';
				html += '<div id="direction_top"><p class="dir"><span class="direction_attr">Address</span>' + entry.address + '</p></div>';
				html += '<p class="dir" id="direction_tel"><span class="direction_attr">Tel</span>' + entry.tel + '</p>';
				html += '<p class="dir" id="direction_fax"><span class="direction_attr">FAX</span>' + entry.fax + '</p>';
				html += '<p id="direction_image"><img src="' + entry.src + '" class="img-responsive" alt="directionMap"/></p>';
				html += '<div id="map2div"><a id="map2" href="#">구글지도</a><div id="mapIn"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.429493683305!2d126.68272211483563!3d37.70959537977138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c88a555455f1d%3A0x55379c7169077325!2zKOyjvCnrj4TshJzstpztjJDtlZzquLjsgqw!5e0!3m2!1sko!2skr!4v1458619377265" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div></div>';
				html += '<p class="dir" id="direction_car"><span class="direction_attr">승용차 이용시</span>' + entry.car + '</p>';						
				html += '<p class="dir" id="direction_bus"><span class="direction_attr">버스 이용시</span>' + entry.bus + '</p>';						
				html += '<p class="dir" id="direction_url"><img src="images/arrow.gif"/><a id="introduce_links" href="' + entry.url + '" target="_blank">' + entry.url + '</a><p>';						
				html += '</div>';

				$('.introduce_company #introduce_contents').append(html);
			});
			$('#introduce_contents').find('#mapIn').hide();
		} //end success ajax
	}); //end ajax representativGreeting
}// end function representativGreeting


function employeeGuide() {
	$.ajax({
		url : 'javascriptFiles/employeeGuide.json',
		type : 'get',
		dataType : 'json',
		success : function(data) {
			$('.introduce_company #introduce_contents').empty();
			var pre = '';
			$.each(data, function(index, entry) {
				var html = '<div class="entry">';
				if(index == 0) {
					html += '<div class="title row">';
					html += '<div class="col-md-2"><p class="introduce_title">' + entry.department + '</p></div>';
					html += '<div class="col-md-10"><p class="introduce_title_explain">' + entry.position + '</p></div>';	
					html += '</div>';
				} else {
					if(entry.kind) {
						html += '<div class="employee_kind">';
						html += '<p class="kind_text"><img src="images/arrow.gif"/>' + entry.kind + '</p>';
						if(entry.kind_sub) {
							html += '<p class="kind_sub">' + entry.kind_sub + '</p>';								
						} else if(entry.kind_mail) {
							html += '<p class="kind_mail"><a id="introduce_mails" href="mailto:' + entry.kind_mail + '" target="_blank">' + entry.kind_mail + '</a></p>';															
						} else {
							html += '<p class="kind_link"><a id="introduce_links" href="' + entry.kind_link + '" target="_blank">' + entry.kind_link + '</a></p>';								
						}
						html += '</div>';
					} else {
						if(pre != entry.department) {
							pre = entry.department;
							/*html += '<div class="department">';*/
							html += '<p class="department">' + entry.department + '</p>';
							/*html += '</div>';	*/					
						}
						if(entry.position) {
							html += '<p class="position">' + entry.position + '</p>';
						}
						html += '<p class="trivial">' + entry.name + '</p>';
						html += '<p class="trivial">' + entry.num + '</p>';
					}
				}
				html += '</div>';
				
				$('.introduce_company #introduce_contents').append(html);
			});
			html = '<div id="gototop"><img src="images/gototop.png" alt="topButton"/></div>';
			$('.introduce_company #introduce_contents').append(html);
		} //end success ajax
	}); //end ajax employeeGuide
}// end function employeeGuide





