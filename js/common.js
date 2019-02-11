var $$ = {

    copyLine: function () {
        var clipboard = new Clipboard('#btn_share');
        clipboard.on('success', function (e) {
            /*  parent.alert("链接复制成功!", {
                  // icon : 1,
                  time: 1500
              })*/
            $("#btn_share").click(function () {
                $(".alert").show();
                setTimeout(function () {
                    $(".alert").fadeOut();
                },1500)
                // console.log('wererf')
            })
        })
    },

    showText:function shows(a) {
        $('.buttonText').text(a);
        $('#none_choose').hide();
        $('#choose').show();
    },

    blockSit:function(){
        //blocksit define
        $(window).load( function() {
            $('#container').BlocksIt({
                numOfCol: 5,
                offsetX: 8,
                offsetY: 8,
                blockElement: '.grid'
            });
        });

//window resize
        var currentWidth = 1100;
        $(window).resize(function() {
            var winWidth = $(window).width();
            var conWidth;
            if(winWidth < 660) {
                conWidth = 440;
                col = 2
            } else if(winWidth < 880) {
                conWidth = 660;
                col = 3
            } else if(winWidth < 1100) {
                conWidth = 880;
                col = 4;
            } else {
                conWidth = 1100;
                col = 5;
            }

            if(conWidth != currentWidth) {
                currentWidth = conWidth;
                $('#container').width(conWidth);
                $('#container').BlocksIt({
                    numOfCol: col,
                    offsetX: 8,
                    offsetY: 8
                });
            }
        });
    },

    search:function () {
        $(".souSuo").click(function () {
            $('.headerNav').hide().addClass('animated fadeInDown');
            $(".headerNavActive").show().addClass('animated fadeInDown');
        })
    },

    clear:function(){
        $("#clear").on('click',function () {
            $(".headerNavActive").hide().addClass('animated fadeDown');
            $(".headerNav").show().addClass('animated fadeDown');
        })
    },

    goBack:function () {
        $("#goBack").click(function () {
            history.back(-1);
        })
    },

    Swiper:function () {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true,
            delay:2000,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },

       login:function () {
           $("#register").click(function () {
               layer.open({
                   type: 2,
                   skin: 'layui-layer-rim', //加上边框
                   area: ['553px', '547px'], //宽高
                   content: 'register.html',
                   title:'',
                /*   end: function () {
                       window.location.reload();
                   }*/
               });
           })
       },

    signUp:function () {
        $("#signUp").click(function () {
            layer.open({
                type: 2,
                skin: 'layui-layer-rim', //加上边框
                area: ['552px', '414px'], //宽高
                content: 'signUp.html',
                title: '',
            /*   end: function () {
                   window.location.reload();
               }*/


        })
            window.parent.location.reload();
            //刷新父页面
            var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
            parent.layer.close(index);  // 关闭layer*/
        })
    },

    vipSwiper:function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay:true,
            delay:500,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    },

    figure:function () {
        $(".dropdown-menu").mouseover(function () {
            $("#btn").removeClass('btn');
            $("#btn").addClass('article');
        }).mouseout(function () {
            $("#btn").removeClass('article');
            $(".btn-default").addClass('btn')
        })
    },
    // 实现下拉刷新
    Scroll:function(){
        // 获取滚动条当前的位置
        function getScrollTop() {
            var scrollTop = 0;
            if(document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop;
            } else if(document.body) {
                scrollTop = document.body.scrollTop;
            }
            return scrollTop;
        }
        // 获取当前可视范围的高度
        function getClientHeight() {
            var clientHeight = 0;
            if (document.body.clientHeight && document.documentElement.clientHeight) {
                clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
            } else {
                clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
            }
            return clientHeight;
        }
        // 获取文档完整的高度
        function getScrollHeight() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }
        window.onscroll = onScroll;
        function onScroll() {
            console.log(123);
            if(getScrollTop() + getClientHeight() == getScrollHeight()) {
                alert("到达底部")
                //此处发起AJAX请求
            }
        }
    },
    // 获取页面元素的位置
    position:function() {
    var wrapTop =document.getElementById('scrollWrap');
    console.log(wrapTop.scrollTop + " " + "滚动条当前的位置");
    console.log(wrapTop.scrollHeight + " " + "获取滚动条的高度")
    },
    lastPage:function () {
        $(".prev>.last").click(function () {
            window.history.back(-1)
        })
    },
    f:function num(number) {
        $("button").click(function () {
            alert(number*2);
            alert(number*3);
            alert(number*4);
        })
    },
}