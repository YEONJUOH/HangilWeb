$(function(){
	$('.form-control').keypress(function(e){
		if(e.which==13){
			console.log(e.which);
			var keyword = $(this).val();
			$(this).val("");
			searchrequest(keyword);
		}
	});
	
	$('a img').attr({'data-toggle':'modal','data-target':'#indexModal'}).click(function(e){
		e.preventDefault();
		var str = $(this).attr('alt');
		bookInforequest(str);
	});
	$('.carousel-caption').attr({'data-toggle':'modal','data-target':'#indexModal'}).click(function(e){
		e.preventDefault();
		var str = $(this).prev().attr('alt');
		bookInforequest(str);
	})
	function bookInforequest(str){
		$.ajax({
			url : "../web/server/index.jsp",
			type : "post",
			dataType : "json",
			data : {
				title : str
			},
			success : function (json){
				var tmp = json[0].title;
				console.log(json);
				$('.modal-body2').html(json[0].contents);
				$('.modal-desc').html(json[0].desc);
				$('.modal-title').html(json[0].title);
			}
		});
		
	}
	function searchrequest(keyword){
		$.ajax({
			url : "../web/server/index.jsp",
			type : "post",
			dataType : "json",
			data : {
				allRequest : 1
			},
			success : function (json){
				console.log("ok");
				var tmptmp=0;
				var cnt=0;
				var resultHtml = '';
				var resultHtmltitle = '';
				var resultHtmldesc = '';
				var resultHtmlbody = '';
				$.each(json,function(i,data){
					if(data.title.contains(keyword)){
						cnt++;
						var strIndex = data.title.indexOf(keyword);
						var strLastIndex = strIndex+keyword.length
						var sizeNumber = keyword.length;
						var strSub = data.title;
						var strResult = strSub.replace(keyword,"<span style='background : yellow'>"+keyword+"</span>")
						resultHtmltitle += "<b>도서명</b>에서 발견</br>도서명 : "+strResult+"</br><hr>"
					}
					if(data.desc.contains(keyword)){
						cnt++;
						var strIndex = data.desc.indexOf(keyword);
						var strLastIndex = strIndex+keyword.length
						var sizeNumber = keyword.length;
						var strSub = data.desc;
						var strResult = strSub.replace(keyword,"<span style='background : yellow'>"+keyword+"</span>")
						resultHtmldesc += "<b>도서상세</b>에서 발견</br>도서명 : "+data.title+"</br>결과 : "+strResult+"</br><hr>"
						
					}
					if(data.contents.contains(keyword)){
						cnt++;
						
						console.log(tmptmp++)
						var strIndex = data.contents.indexOf(keyword);
						console.log(strIndex)
						var strLastIndex = strIndex+keyword.length
						var sizeNumber = keyword.length;
						var strResult = "";
						if(strIndex>=10){
							var strSub = data.contents.substr(strIndex-10,20).replace(/((<|>|\/|b)([^>]+)>)/gi, "");
							strResult = strSub.replace(keyword,"<span style='background : yellow'>"+keyword+"</span>")
							resultHtmlbody += "<b>도서설명</b>에서 발견</br>도서명 : "+data.title+"</br>결과 : ..."+strResult+"...</br><hr>"
						} else if(strIndex<10) {
							var strSub = data.contents;
							strResult = strSub.replace(keyword,"<span style='background : yellow'>"+keyword+"</span>")
							resultHtmlbody += "<b>도서설명</b>에서 발견</br>도서명 : "+data.title+"</br>결과 : ..."+strResult+"...</br><hr>"
						}
					}
				})
				resultHtml = resultHtmlbody+resultHtmldesc+resultHtmltitle;
				console.log(resultHtml);
				$('.modal-title').html(keyword+"의 검색 결과");
				$('.modal-desc').html("결과"+cnt+"건");
				$('.modal-body2').html(resultHtml);
				$('#indexModal').modal('show');
			}
		});
		
	}
});