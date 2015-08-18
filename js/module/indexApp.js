/**
 * Created by Echo on 2015/8/18.
 */

define(['jquery'], function($){

    var indexFunc = function(){};

    indexFunc.prototype = {
        initLiPos: function($parentObj){
            //alert("reside")
            $parentObj.each(function(index, ele){
                var w = $(ele).width();
                $(ele).css({
                    "left": index*w + "px"
                })
            })
        }
    }
    return {indexFunc: indexFunc};
})