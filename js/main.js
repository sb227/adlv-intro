/// 메인 페이지 JS - main.js ////

$(function (e) { ///////////////// JQB //////////////////////
    console.log('실행');


    $('.menu_btn').click(function () {
		console.log('dd')
		$('.mob_menu').addClass('active');
		$('.mob_bg').addClass('active');
		$('.close_btn').addClass('active');
		$('.lnb_mob').addClass('active');
		$('.gnb_mob').addClass('active');
	}); ///////// click /////////////

	$('.close_btn').click(function () {
		$('.mob_menu').removeClass('active');
		$('.lnb_mob').removeClass('active');
		$('.gnb_mob').removeClass('active');
	}); ///////// click ////////////
}); ///////////////// JQB //////////////////////

