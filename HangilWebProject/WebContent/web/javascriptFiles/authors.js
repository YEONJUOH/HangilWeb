$(function() {
	settingImg();
	jsonSetting();
	$('#title').find('.img').onMenu();
	searchBtn();
	backToTop();
	autoComplete();
});

function settingImg() {
	for (var i = 0; i < 15; i++) {
		$('#title').append(
				'<img id="hunimg" class="img" alt="' + (i + 1)
						+ '" src="images/writer_menu_' + (i + 1) + '.gif">');
	}
}

function jsonSetting() {
	for (var i = 1; i < 16; i++) {
		$.ajax({
			url : '../web/server/json' + i + '.json',
			success : function(data) {
				$.each(data, function(index, entry) {
					callHtml(entry.term, entry.contents);
				});
			},
			beforeSend : function() {
				$('.wrap-loading').removeClass('display-none');
			},
			complete : function() {
				$('.wrap-loading').addClass('display-none');

			}
		})
	}
	$('#title').on('click', '#hunimg', function() {
		$.ajax({
			url : '../web/server/json' + ($(this).attr('alt') + '.json'),
			success : function(data) {
				$('#contents').empty();
				$.each(data, function(index, entry) {
					callHtml(entry.term, entry.contents);
				});
			},
			beforeSend : function() {
				$('.wrap-loading').removeClass('display-none');
			},
			complete : function() {
				$('.wrap-loading').addClass('display-none');

			}
		})
	})
}

(function() {
	$.fn.onMenu = function() {
		$(this).each(
				function(index) {
					$(this).on(
							'click',
							function() {
								$('.img')
										.each(
												function(i) {
													$(this).attr(
															'src',
															'images/writer_menu_'
																	+ (i + 1)
																	+ '.gif');
												});
								$(this).attr(
										'src',
										'images/writer_menu_' + (index + 1)
												+ '_on.gif');
							});
				})
	}
})(jQuery);

function searchBtn() {
	$('#searchBtn')
			.on(
					'click',
					function() {
						$('#contents').empty();
						$('.img').each(
								function(i) {
									$(this).attr(
											'src',
											'images/writer_menu_' + (i + 1)
													+ '.gif');
								});
						var searchWord = $('#searchform').val();
						var select = $('#selectbox').val();
						$('#searchform').val('');
						if (searchWord == '') {
							var html = '<div class="alert alert-danger fade in">';
							html += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
							html += '<strong>주의!</strong> 검색어를 입력하세요!';
							html += '</div>';
							$('#contents').append(html);
						} else if (select == 'title') {
							for (var i = 1; i < 16; i++) {
								$.ajax({
									url : '../web/server/json' + i + '.json',
									success : function(data) {
										$.each(data, function(index, entry) {
											if (entry.term.match(".*"
													+ searchWord + ".*")) {
												callHtml(entry.term,
														entry.contents,
														searchWord);
											}
										});
									},
									beforeSend : function() {
										$('.wrap-loading').removeClass(
												'display-none');
									},
									complete : function() {
										$('.wrap-loading').addClass(
												'display-none');
									}
								})
							}
						} else if (select == 'contents') {
							for (var i = 1; i < 16; i++) {
								$.ajax({
									url : '../web/server/json' + i + '.json',
									success : function(data) {
										$.each(data, function(index, entry) {
											if (entry.contents.match(".*"
													+ searchWord + ".*")) {
												callHtml(entry.term,
														entry.contents,
														searchWord);
											}
										});
									},
									beforeSend : function() {
										$('.wrap-loading').removeClass(
												'display-none');
									},
									complete : function() {
										$('.wrap-loading').addClass(
												'display-none');
									}
								})
							}
						}
					})
}
function backToTop() {
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.back_to_top').fadeIn(duration);
		} else {
			$('.back_to_top').fadeOut(duration);
		}
	});

	$('.back_to_top').click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, duration);
	});
}
function callHtml(term, encontents, word) {
	var html = '<div class="box">';
	html += '<p class="pfont">' + term + '<span class="badge">저자</span><p>';
	html += '<p>' + encontents + '</p>';
	html += '</div>';

	$('#contents').append(html);
	$('#contents').highlight(word);
}
function autoComplete(){
	var authors = [
		          	'가라타니 고진', '강관식', '강대석', '강대일 ', '차명수',
		          	'카를 에를링하겐', '타라스 셰브첸코', '파트리크 지라르', '하랄트 빙켈', 'C. W. 밀스', '나데쥬다 만델슈탐',
		          	'나선희', '나도원', '나성', '나운영', '나은영', '다니엘 로요', '다이애너 크레인',
		          	'다테노 아키라', '대산 김석진', '데이비드 J. 칼루파하나', '라비드 이븐 라비아', '라이너 코케모어',
		          	'라인하르트 파트케', '라인홀트 노이만 호디츠', '램지 맥멀렌 ', '마거릿 미드', '바실리 오시포비치 클류쳅스키 ', '아담 샤프',
		          	'사미르 아민 ', '자넷 토드'
		          ];
	$('#searchform').autocomplete({
		source : [authors]
	});
}