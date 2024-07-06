$(document).ready(function(){
    var $h_c2_img = $('.content2_carousel img').height(),
        $c_h_c2_img = 0,
        $btn_top = $h_c2_img/2,
        $c_btn_top = 0,
        a = 0,
        b = 0,
        c = 0,
        d = 180,
        e = 0;

    // $('.content2_carousel button').css({'top':$btn_top})

    $(window).resize(function(){
        // $c_h_c2_img=$h_c2_img
        // $c_btn_top=$c_h_c2_img/2

        // $('.content2_carousel button').css({'top':$c_btn_top})

        if($(window).width() > 1023){
            $('body').css({'overflow':'visible'})
            $('.more_open_blur, .more_menu').css({'display':'none'})
        }
    })

    

    $('.more_btn').click(function(){
        $('body').css({'overflow':'hidden'})
        $('.more_open_blur, .more_menu').css({'display':'block'})
        $('.more_menu').animate({'left':'0'},300)
    }),$('.more_open_blur, .more_close').click(function(){
        $('body').css({'overflow':'visible'})
        $('.more_open_blur, .more_menu').css({'display':'none'})
        $('.more_menu').addClass('closed')
        if($('.more_menu').hasClass('closed') == true){
            $('.more_menu').removeClass('closed').animate({'left':'-300px'})
        }
    }),$('.more_menu_wrap>ul>li span:nth-child(1)').click(function(){
        if($(this).hasClass('closed') == false){
            $(this).parent('li').find('ul').stop().slideUp(300)
            $(this).parent('li').find('i').css({'transform':'rotate(0)'})
            $(this).addClass('closed')
        }else{
            $(this).parent('li').find('ul').stop().slideDown(300)
            $(this).parent('li').find('i').css({'transform':'rotate(180deg)'})
            $(this).removeClass('closed')
        }
    })

    setInterval(function(){
        e=(e+1)%4

        $('.flip'+e+'').css({'transform':'rotateY('+d+'deg)'})
        if(d==180){
            $('.flip'+e+' .flip_front li').delay(800).fadeOut(0)
            $('.flip'+e+' .flip_back li').eq(0).delay(800).fadeIn(0)
        }else{
            $('.flip'+e+' .flip_back li').delay(800).fadeOut(0)
            $('.flip'+e+' .flip_front li').eq(0).delay(800).fadeIn(0)
        }

        setTimeout(function(){
            if(d==180){
                $('.flip'+e+' .flip_front li:nth-child(1)').appendTo('.flip'+e+' .flip_front')
            }else{
                $('.flip'+e+' .flip_back li:nth-child(1)').appendTo('.flip'+e+' .flip_back')
            }
        },800)
    },3000)
    
    setInterval(function(){
        if(d==360){
            d=0
        }
        d=d+180
    },12000)
    
    setInterval(function(){
        $('.content1_img_carousel:nth-child(1) ul').css({'top':'0'})
        $('.content1_img_carousel:nth-child(4) ul').css({'bottom':'0'})
        $('.content1_img_carousel:nth-child(5) ul').css({'top':'0'})
        $('.content1_img_carousel:nth-child(8) ul').css({'bottom':'0'})
    },56000)

    setInterval(function(){
        $('.logo_carousel ul').css({'left':'0'})
    },44000)

    $('.nav_search_btn').click(function(){
        $('.nav_search_open, .nav_search_open_blur').css({'display':'block'})
        $('.search_result').stop().slideDown(300)
        if($(window).width() < 1024){
            $('.login').css({'display':'none'})
        }
    }),$('.nav_search_open_blur, .nav_search_close').click(function(){
        $('.nav_search_open, .nav_search_open_blur, .search_result').css({'display':'none'})
        $('.login').css({'display':'block'})
    })

    $('.content2_carousel button').click(function(){
        b=$('.content2_carousel ul').width()
        b=b/3
        if($(this).index()==1){
            a=(a+1)%3
            c=a*-b
            $('.content2_carousel ul').animate({'left':c},600)
        }else{
            a=(a+2)%3
            c=a*-b
            $('.content2_carousel ul').animate({'left':c},600)
        }
        if(a==2){
            $('.content2_carousel button').eq(1).stop().fadeOut(150)
        }else if(a==0){
            $('.content2_carousel button').eq(0).stop().fadeOut(150)
        }else{
            $('.content2_carousel button').eq(0).stop().fadeIn(150)
            $('.content2_carousel button').eq(1).stop().fadeIn(150)
        }
    }).hover(function(){
        $(this).css({'border':'1px solid rgba(150, 150, 150, 1);', 'transform':'scale(1.08)'})
    }, function(){
        $(this).css({'border':'1px solid rgba(150, 150, 150, 0.4);', 'transform':'scale(1)'})
    }).mousedown(function(){
        $(this).css({'transform':'scale(0.9)'})
    }).mouseup(function(){
        $(this).css({'transform':'scale(1)'})
    })

    $('.how_depth').hover(function(){
        $('.how_depth2').stop().fadeIn(200)
    }, function(){
        $('.how_depth2').stop().fadeOut(200)
    }), $('.free_btn').hover(function(){
        $(this).css({'background-color':'#2c2c2c'})
    }, function(){
        $(this).css({'background-color':'#000000'})
    }), $('.how_btn').hover(function(){
        $(this).css({'color':'#2c2c2c','text-decoration':'underline'})
        $(this).find('i').css({'transform':'scale(1.1)'})
    }, function(){
        $(this).css({'color':'#000000','text-decoration':'none'})
        $(this).find('i').css({'transform':'scale(1)'})
    }), $('.sub_ad_btn').hover(function(){
        $(this).css({'background-color':'#dadada'})
    }, function(){
        $(this).css({'background-color':'#ffffff'})
    })
    
    $('.main_ad_left>a:nth-child(1), .content1_more').hover(function(){
        $(this).stop().animate({'opacity':'0.7'},200).find('i').stop().animate({'margin-left':'3px'},200)
    }, function(){
        $(this).stop().animate({'opacity':'1'},200).find('i').stop().animate({'margin-left':'0'},200)
    })

    $('.content1_img_carousel li img').hover(function(){
        $(this).css({'transform':'scale(1.04)','box-shadow':'0 5px 0 rgba(0, 0, 0, 0.2)'})
    }, function(){
        $(this).css({'transform':'scale(1)','box-shadow':'none'})
    })
})