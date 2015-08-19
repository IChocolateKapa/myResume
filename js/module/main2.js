/**
 * Created by Echo on 2015/8/18.
 */

require.config({
    paths: {
        jquery: "../lib/jquery-2.1.3.min",
        event: "../common/common-event"
    }
})

require(['jquery', 'indexApp', 'event'], function($, iApp, EV){
    var indexApp = new iApp.indexFunc();

    var eve = EV.eventUtil;

    //indexApp.autoSlide();




    $(function(){


        var slideTime;
        $(".slideTrigger li").mouseenter(function(){
            indexApp.clearAutoPlayTimer();
            var $this = $(this);
            var index = $this.index();
            slideTime = setTimeout(function(){
                $(".slideTrigger li").removeClass("curr");
                $this.addClass("curr");
                $(".ListItem").removeClass("curr").eq(index).addClass("curr");
            }, 800)
        })

        $(".slideTrigger li").mouseleave(function(){
            indexApp.clearAutoPlayTimer();
            if(autoPlay){
                indexApp.autoSlide();
                $(".ctl-btn").html("暂停").removeClass("play").attr("title", "暂停自动播放");
            }
        })

        $(".slider-next").click(function(){
            indexApp.clearAutoPlayTimer();
            indexApp.slideAnimate(true);
            if(autoPlay){
                indexApp.autoSlide();
                $(".ctl-btn").html("暂停").removeClass("play").attr("title", "暂停自动播放");
            }

        })
        $(".slider-prev").click(function(){
            indexApp.clearAutoPlayTimer();
            indexApp.slideAnimate(false);
            if(autoPlay){
                indexApp.autoSlide();
                $(".ctl-btn").html("暂停").removeClass("play").attr("title", "暂停自动播放");
            }

        })


        var autoPlay = true;
        $(".ctl-btn").click(function(){
            var $this = $(this);
            /*暂停状态下没有play类, 有play类表示当前是暂停播放状态*/
            if(!$this.hasClass("play")){
                indexApp.clearAutoPlayTimer();
                globalSlide = null;
                autoPlay = false;
                $this.html("开始").addClass("play").attr("title", "开始自动播放");
            } else {
                autoPlay = true;
                indexApp.autoSlide();
                $(".ctl-btn").html("暂停").removeClass("play").attr("title", "暂停自动播放");
            }

            eve.preventDefault(event);
        })


    })

    $(".slide").on("mousewheel DOMMouseScroll", MouseWheelHandler);

    function MouseWheelHandler(e){
        var ifNext = indexApp.getScrollDirection(e);
        setTimeout(function(){
            indexApp.slideAnimate(ifNext);
        }, 600)
    }

})