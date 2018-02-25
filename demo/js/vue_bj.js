//修改商品数量，组件更改goods数据，如有联动直接替换json数据
    var goods={
      name:'产品名称',
      goodsNum:1,//最少订单
      moq:1,//起订量
      Stock:10,//库存
      up:'25'//单价

    };
    var vm = new Vue({
        el:'#selectNum',
        data:goods,
        template:'#selectNumTemplate',
        methods:{
            reduce:function(){
                if (this.goodsNum > this.moq){
                    this.goodsNum--
                }
            },
            plus:function(){
                if (this.goodsNum < this.Stock){
                    this.goodsNum++
                }
            }
        },
        ready:function(){
            if (this.goodsNum == this.moq){
                document.getElementById('reduce').setAttribute('disabled','');
            }else{
                document.getElementById('reduce').removeAttribute('disabled','');
            }
            if (this.goodsNum == this.Stock){
                document.getElementById('plus').setAttribute('disabled','');
            }else{
                document.getElementById('plus').removeAttribute('disabled','');
            }
        },
        watch:{
            "goodsNum":function(newval,oldval){
                console.log(newval)
                if (newval == this.moq){
                    document.getElementById('reduce').setAttribute('disabled','');
                }else{
                    document.getElementById('reduce').removeAttribute('disabled','');
                }
                if (newval == this.Stock){
                    document.getElementById('plus').setAttribute('disabled','');
                }else{
                    document.getElementById('plus').removeAttribute('disabled','');
                }
            }
        }
    })