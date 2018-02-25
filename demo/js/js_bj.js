//首页轮播
	jQuery(function($) {
				$("#demo27").swiper({
					/*nextButton: "#demo27 .swiper-button-next",
					prevButton: "#demo27 .swiper-button-prev",*/
					pagination: "#demo27 .swiper-pagination",
					autoplay: 2500,
					paginationClickable: true,//如果为true，则单击分页按钮将导致转换到适当的幻灯片,默认false
					preloadImages: !1,//启用时，Swiper将强制加载所有图像
					lazyLoading: true,
						noSwiping:false,
					//spaceBetween: 10,//slide 间距
					centeredSlides: !0,//如果为真，则主动幻灯片将居中，而不是始终位于左侧。
					loop: !0,//设置为true以启用连续循环模式
					slidesPerView: 1,//每一屏显示的 slide 数量,默认为1
					lazyLoadingOnTransitionStart:true,
					autoplayDisableOnInteraction: !1//用户交互时停止自动播放
				});
			});		
//频道tab
window.onload = function() {
				var sildes =$('#topNav').find('.swiper-wrapper').children()
					
				var tabsSwiper = new Swiper('#tabs-container', {
					speed: 0,
						noSwiping:false,
					onSlideChangeStart: function() {
						$(".tabs .active").removeClass('active')
						$(".tabs .swiper-slide").eq(tabsSwiper.activeIndex).addClass('active')
						
						if(tabsSwiper.activeIndex!=0){
							$('<img src="./img/loading00.gif" class="loading" style="margin-left:50%;">').appendTo($("#tabs-container").find(".swiper-wrapper").children().eq(tabsSwiper.activeIndex))
						}				
						
								var slide =sildes[tabsSwiper.activeIndex]
									slideLeft = slide.offsetLeft
						slideWidth = slide.clientWidth
						slideCenter = slideLeft + slideWidth / 2
			// 被点击slide的中心点

						mySwiper.setWrapperTransition(300)

						if (slideCenter < swiperWidth / 2) {
				
							mySwiper.setWrapperTranslate(0)

						} else if (slideCenter > maxWidth) {
				
							mySwiper.setWrapperTranslate(maxTranslate)

						} else { 

							nowTlanslate = slideCenter - swiperWidth / 2
							mySwiper.setWrapperTranslate(-nowTlanslate)
						}
						 var tag =slide.getAttribute('data-tag')
								 //console.log(tag)
							var html =''
						if(tag!=null){
							getData(4,tag,function(data){
							for(var i in data){
								//console.log(data[i])
								html+="<div class='request-content'><img style='width:25%;height:145px;' src="+data[i].image+"><div class='request-content-detail'><div>"+data[i].author+"</div><div class='request-content-summary'>"+data[i].summary+"</div><div class=''>"+data[i].pubdate+"</div></div></div>"
							}

							$("#tabs-container").find(".swiper-wrapper").children().eq(tabsSwiper.activeIndex).find('img.loading').hide()
						$("#tabs-container").find(".swiper-wrapper").children().eq(tabsSwiper.activeIndex).append(html)
							})
						}
					}
				})	
				 $(".tabs .swiper-slide").on('touchstart mousedown', function(e) {
					e.preventDefault()
					$(".tabs .active").removeClass('active')
					$(this).addClass('active')
					tabsSwiper.slideTo($(this).index())
				}) 
//				$(".tabs .swiper-slide").click(function(e) {
//					e.preventDefault()
//				})

//导航滑动			
			
			
			var mySwiper = new Swiper('#topNav', {
				freeMode: true,
				freeModeMomentumRatio: 0.5,
				slidesPerView: 'auto',
			});

			swiperWidth = mySwiper.container[0].clientWidth
			maxTranslate = mySwiper.maxTranslate();
			maxWidth = -maxTranslate + swiperWidth / 2

			/*$(".tabs").on('touchstart', function(e) {
				e.preventDefault()
			})
*/
			mySwiper.on('tap', function(swiper, e) {

			//	e.preventDefault()
				slide = swiper.slides[swiper.clickedIndex]
				slideLeft = slide.offsetLeft
				slideWidth = slide.clientWidth
				slideCenter = slideLeft + slideWidth / 2
	// 被点击slide的中心点

				mySwiper.setWrapperTransition(300)

				if (slideCenter < swiperWidth / 2) {
		
					mySwiper.setWrapperTranslate(0)

				} else if (slideCenter > maxWidth) {
		
					mySwiper.setWrapperTranslate(maxTranslate)

				} else { 

					nowTlanslate = slideCenter - swiperWidth / 2
					mySwiper.setWrapperTranslate(-nowTlanslate)
				}

				$("#topNav .active").removeClass('active')
				$("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')

						if(swiper.clickedIndex!=0&&swiper.clickedIndex!=4){
							$('<img src="./img/loading00.gif" class="loading" style="margin-left:50%;">').appendTo($("#tabs-container").find(".swiper-wrapper").children().eq(swiper.clickedIndex))
						}				
				var tags =slide.getAttribute('data-tag')
					var html =''
				if(tags!=null){
					getData(4,tags,function(data){
					for(var i in data){
						//console.log(data[i])

						html+="<div class='request-content'><img style='width:25%;height:145px;' src="+data[i].image+"><div class='request-content-detail'><div>"+data[i].author+"</div><div class='request-content-summary'>"+data[i].summary+"</div><div class=''>"+data[i].pubdate+"</div></div></div>"
					}
						$("#tabs-container").find(".swiper-wrapper").children().eq(swiper.clickedIndex).find('img.loading').hide()
						$("#tabs-container").find(".swiper-wrapper").children().eq(swiper.clickedIndex).append(html)
					}) 
				}
				
			})			

}



//收藏点击效果	
 $(document).ready(function(){
        $(".detail_footer_sc i").click(function(){
            $(".detail_footer_sc i").toggleClass("icon-xin1 bounceIn");
        });
    });
//删除收藏
$(document).ready(function(){
    $("#del_sc li a.close_btn").unbind().click(function(){
          $(this).parent().parent().parent().parent().remove();
        });
});

//地址界面
//删除
$(document).ready(function(){
    $("#addr li a.deladd").click(function(){
          $(this).parent().parent().parent().remove();
        });
});



