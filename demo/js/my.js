document.onreadystatechange = function () {  
    if(document.readyState === "complete"){  
       setTimeout(function(){
		 $("#loading").fadeOut();
	   },1500)  
    }
	   //var myScroll = new IScroll('#tabs-container');
} 
	
/*var api ={
	search:"https://api.douban.com/v2/book/search"
}*/
    // var mescroll = new MeScroll("mescroll", { //第一个参数"mescroll"对应上面布局结构div的id
    //             down: {
    //                 callback: downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
    //             },
    //             up: {
    //                 callback: upCallback , //上拉加载的回调
    //                 isBounce: false //如果您的项目是在iOS的微信,QQ,Safari等浏览器访问的,建议配置此项.解析(必读)
    //             }
    //         });
    //     //下拉刷新的回调
    //     function downCallback() {
    //         $.ajax({
    //             url: 'https://api.douban.com/v2/book/search?tag="经典"',
    //             success: function(data) {
    //                 //联网成功的回调,隐藏下拉刷新的状态;
    //                 mescroll.endSuccess(); //无参
                    
    //             },
    //             error: function(data) {
    //                 //联网失败的回调,隐藏下拉刷新的状态
    //                 mescroll.endErr();
    //             }
    //         });
    //     }
        
    //     //上拉加载的回调 page = {num:1, size:10}; num:当前页 默认从1开始, size:每页数据条数,默认10
    //     function upCallback(page) {
    //         $.ajax({
    //             url: 'https://api.douban.com/v2/book/search?tag="经典"&count="+ page + "', //如何修改page.num从0开始 ?
    //             success: function(curPageData) {
                    
    //             },
    //             error: function(e) {
    //                 //联网失败的回调,隐藏下拉刷新和上拉加载的状态
    //                 mescroll.endErr();
    //             }
    //         });
    //     }

function getData(count,tag,cb){
	$.ajax({
		url:"https://api.douban.com/v2/book/search",
		type:'get',
		dataType:"jsonp",
		data:{
			tag:tag,
			count:count
		},
        beforeSend:function(){

        },
		success:function(data){
			
		typeof cb =='function'&&cb(data.books)
			}
	})
}
	 