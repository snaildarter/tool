function debouce(func,delay,immediate){
    var timer = null;
    return function(){
        var context = this;
        var args = arguments;
        if(timer) clearTimeout(time);
        if(immediate){
            //根据距离上次触发操作的时间是否到达delay来决定是否要现在执行函数
            var doNow = !timer;
            //每一次都重新设置timer，就是要保证每一次执行的至少delay秒后才可以执行
            timer = setTimeout(function(){
                timer = null;
            },delay);
            //立即执行
            if(doNow){
                func.apply(context,args);
            }
        }else{
            timer = setTimeout(function(){
                func.apply(context,args);
            },delay);
        }
    }
}
