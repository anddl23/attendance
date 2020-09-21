$(document).ready(function() {


	// 전체메뉴
	$(".lnb").slideUp();
	$(".gnb>li>a").click(function(){
		if ($(this).next(".lnb").is(":visible")) {
			$(this).next(".lnb").slideUp();
			$(this).removeClass("on");
		} else {
			$(".lnb").slideUp();
		    $(".gnb>li>a").removeClass("on");
		    $(this).next(".lnb").slideDown(300);
		    $(this).addClass("on");
		}
	});


	if($(".lnb>li>a").hasClass("on")){
		$(".lnb>li>a.on").parent("li").parent(".lnb").slideDown();
		$(".lnb>li>a.on").parent("li").parent(".lnb").siblings("a").addClass("on");
	};





  	// 원생등록 - 납부일 날짜지정
	$(".payday_date").hide();
	$(".btn_custom").click(function(){
		$(this).parent().next(".payday_date").show();
	});
	$(".btn_basic").click(function(){
		$(this).parent().next().next(".payday_date").hide();
	});





	// 원생등록 - 수업추가
     // $("#btnAddRow").on("click",function() {
     //     // clone
     //     $.trClone = $("#memberTable tr.cloneClass").clone().html();
     //     $.newTr = $("<tr>"+$.trClone+"</tr>");
	 //
     //     // append
     //     $("#memberTable tr.cloneClass").after($.newTr);
		//  $.newTr.children("td").children("#btnAddRow").hide();
	 //
     //     //delete Button 추가
     //     $.btnDelete = $(document.createElement("input"));
     //     $.btnDelete.attr({
     //         name : "btnRemove",
     //         type : "button" ,
     //         value : "x",
		// 	 class: "del_tr"
     //     });
     //     //$("#memberTable tr:last td:last").html("");
     //     $("#memberTable tr.cloneClass").next("tr").children("td:last").append($.btnDelete);
	 //
     //     // 버튼에 클릭 이벤트 추가
     //     $(".del_tr").on('click', function(){
     //         $(this).parent().parent().remove();
     //     });
     // });




	 // 원생상세 - 탭
	 $("#student_tab").tabs();

 	 // 문자 - 탭
 	 $("#sms_tab").tabs();




 	 // 레이어팝업 띄우기
 	 $(".pop_modal").hide();
 	 $(".btn_modal").click(function(){
		 $(this).next(".pop_modal").show();
		 $(this).next(".pop_modal").css("z-index","1");
		 $(this).next(".pop_modal").css("opacity","1");
		 $(this).next().children(".layer_popup").css("z-index","2");
	 });
 	 $(".btn_memo").click(function(){
		 $(this).next(".pop_modal").show();
   	 });
 	 $(".pop_close").click(function(){
		 $(this).parent().parent(".pop_modal").hide();
		 $(this).next(".pop_modal").css("z-index","-2");
		 $(this).next(".pop_modal").css("opacity","0");
		 $(this).next().children(".layer_popup").css("z-index","-1");
	 });
 	 $(".pop_btn_zone a").click( function(){
		 $(this).parent().parent().parent().parent().parent(".pop_modal").hide();
	 });



	 // 출결관리 - 날짜리스트
	 $(function(){
	   $('.bxslider').bxSlider({
		    mode: "horizontal",
   			pager : false
	   });
	 });


	 // 원생상세 - 수납현황 - 수납처리
	 $( function() {
	    $( ".datepicker" ).datepicker({
	      // showOn: "button",
	      // buttonImage: "../images/bl_calendar.png",
	      // buttonImageOnly: true,
	      // buttonText: "Select date",
		  dateFormat: 'yy.mm.dd'
	    });
	  } );






	  // 시간표 table even odd
	  var tds = document.querySelectorAll("td, th");
	  var groups = [];

	  for(var i = 0; i < tds.length; i++){
	  	if(tds[i].getAttribute('rowspan') != null){
	    	var rspan = tds[i];
	    	groups.push({
	      	parent: rspan.parentNode,
	        height: rspan.getAttribute('rowspan')
	      });
	    }
	  }

	  var count = 0;
	  var rows = document.querySelectorAll('tr');
	  var dark = true;

	  for(var i = 1; i < rows.length; i++){  // odd even 조절  i=0, i=1
	  	var row = rows[i];
	    var index = groupIndex(row);
	    if(index != null && dark){
	    	var group = groups[index];
	      var height = parseInt(group.height);
	      for(var j = i; j < i + height; j++){
	      	rows[j].classList.add('dark');
	      }
	      i += height - 1;
	      dark = !dark;
	      continue;
	    }
	    if(dark){
	    	rows[i].classList.add('dark');
	    }
	    dark = !dark;
	  }

	  function groupIndex(element){
	  	for(var i = 0; i < groups.length; i++){
	    	var group = groups[i].parent;
	      if(group == element){
	      	return i;
	      }
	    }
	    return null;
	  }




	  // 수업 신규 생성 - 타입 (일괄납부, 분할납부)
	  $(".pay_method").hide();
	  $(".btn_special").click(function(){
	  	$(this).parent().next(".pay_method").show();
	  });
	  $(".btn_regular").click(function(){
	  	$(this).parent().next(".pay_method").hide();
	  });


	 $("#pay_lump").click(function(){
	   $(".period").hide();
	 });
	 $("#pay_installment").click(function(){
	   $(".period").show();
	 });





 	 /* 체크박스 전체선택, 전체해제 */
 	 $(function(){ //전체선택 체크박스 클릭
 		 $("#all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
 			 if($("#all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
 			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
 				 $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
 			 }
 		 })
 	 })

	 /* 체크박스 전체선택, 전체해제 */
	 $(function(){ //전체선택 체크박스 클릭
		 $("#all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
			 if($("#all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
				  $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
			 }
		 })
	 })






	 /* 일반 sms -  체크박스 전체선택, 전체해제 */
  	 $(function(){ //전체선택 체크박스 클릭
  		 $("#basic_all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
  			 if($("#basic_all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
 				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
  			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
  				 $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
  			 }
  		 })
  	 })

 	 /* 수납 sms -  체크박스 전체선택, 전체해제 */
 	 $(function(){ //전체선택 체크박스 클릭
 		 $("#basic_all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
 			 if($("#basic_all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
 				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
 			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
 				  $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
 			 }
 		 })
 	 })



  	 /* 수납 sms -  체크박스 전체선택, 전체해제 */
  	 $(function(){ //전체선택 체크박스 클릭
  		 $("#pay_all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
			 if($("#pay_all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
				 $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
			 }
  		 })
  	 })

 	 /* 수납 sms -  체크박스 전체선택, 전체해제 */
 	 $(function(){ //전체선택 체크박스 클릭
 		 $("#pay_all_check").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
 			 if($("#pay_all_check").prop("checked")) { //해당화면에 전체 checkbox들을 체크해준다
 				 $(this).closest("form").find("input[type=checkbox]").prop("checked",true); // 전체선택 체크박스가 해제된 경우
 			 } else { //해당화면에 모든 checkbox들의 체크를해제시킨다.
 				  $(this).closest("form").find("input[type=checkbox]").prop("checked",false);
 			 }
 		 })
 	 })


  	 /* SMS - 체크박스 전체선택, 전체해제 */
  	 $(function(){ //전체선택 체크박스 클릭
  		 $(".btn_allcheck").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
  			$(this).parent().parent(".list").children("label").remove(); // 전체선택 체크박스가 해제된 경우
  		 })

		 $(".btn_delete").click(function(){ //만약 전체 선택 체크박스가 체크된상태일경우
  			$(this).parent().parent(".list").children("label").children("input[type=checkbox]:checked").parent("label").remove(); // 전체선택 체크박스가 해제된 경우
  		 })


  	 })






	 // 이미지 파일 등록
	 $(".img_input > input").hide();
 	 $(".img_preview").hide();
 	 $(".img_input > input").on("change", function() {
 		ext = $(this).val().split('.').pop().toLowerCase(); //확장자
 		//배열에 추출한 확장자가 존재하는지 체크
 		if ($.inArray(ext, ["gif", "png", "jpg", "jpeg"]) == -1) {
 			resetFormElement($(this)); //폼 초기화
 			window.alert("이미지 파일이 아닙니다! (gif, png, jpg, jpeg 만 업로드 가능)");
 		} else {
 			file = $(this).prop("files")[0];
 			blobURL = window.URL.createObjectURL(file);
 			$(this).parent().parent().next(".img_preview").children("img").attr("src", blobURL);
 			$(this).parent().parent().next(".img_preview").show(); //업로드한 이미지 미리보기
 			$(this).parent().parent().hide(); //파일 양식 감춤
 		}
 	});

 	$(".img_preview > .bt_del").bind('click', function() {
 		resetFormElement($(this).parent().prev().children().children('.img_input > input')); //전달한 양식 초기화
 		$(this).parent().prev().show(); //파일 양식 보여줌
 		$(this).parent(".img_preview").hide(); //미리 보기 영역 감춤
 		return false; //기본 이벤트 막음
 	});

 	function resetFormElement(e) {
 		e.wrap('<form>').closest('form').get(0).reset();
 		e.unwrap(); //감싼 <form> 태그를 제거
 	}




	// 수납현황 - 수납처리 : 은행사
    $(".tr_bank").hide();
    $(".pay_type > label").click(function(){
	    $(".tr_bank").hide();
    });
    $(".bt_bank").click(function(){
	    $(this).parent().parent().next(".tr_bank").show();
    });





	// 버스 코스 추가
     $(".btnAddBus").on("click",function() {
         // clone
         $.ddClone = $(".busList dd.cloneList").clone().html();
         $.newDd = $("<dd>"+$.ddClone+"</dd>");

         // append
         $(this).parent("li").parent("ul").parent("dt").parent("dl.busList").children("dd:last").after($.newDd);

         // 버튼에 클릭 이벤트 추가
         $(".bt_del").on('click', function(){
             $(this).parent().parent().parent("dd").remove();
         });
     });



	 // 선택항목설정
	 $(".bt").click(function(){
	 	  var items = $(this).prev("input.proof").val();
	 	  $(this).next("ul.item").append("<li><span>"+items+"</span> <a href='javascript:;' class='proof_del'><img src='../images/bl_del.png' alt='삭제'></a></li>");
	 });
	 $(".proof_del").click(function() {
	 	$(this).parent("li").remove();
	 });



	 // 문자 메세지 설정 삭제
	 $(".msg > dt > a").click(function(){
		$(this).closest(".msg").remove();
	 });



});

//  ↑ 여기까진 jqeury






// ↓ 여기부턴 javascript


// 버스 코스 이동
function moveUp(el){
	var $dd = $(el).parent().parent().parent("dd"); // 클릭한 버튼이 속한 tr 요소
	$dd.prev("dd").before($dd); // 현재 tr 의 이전 tr 앞에 선택한 tr 넣기
}

function moveDown(el){
	var $dd = $(el).parent().parent().parent("dd"); // 클릭한 버튼이 속한 tr 요소
	$dd.next("dd").after($dd); // 현재 tr 의 다음 tr 뒤에 선택한 tr 넣기
}
//
