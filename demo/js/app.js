
$(document).ready(function(){
 		//收藏点击效果	
        $(".detail_footer_sc i").click(function(){
            $(".detail_footer_sc i").toggleClass("icon-xin1 bounceIn");
        });
        //款式选择
		$(".Style_list span").click(function(){
			var x=$(".Style_list span").index(this)	
				
			$(".Style_list span").removeClass("gg_current")
			$(this).addClass("gg_current")
		})
		//尺寸选择
		$(".size_list span").click(function(){
			var x=$(".size_list span").index(this)	
				
			$(".size_list span").removeClass("gg_current")
			$(this).addClass("gg_current")
		})
		
		
});