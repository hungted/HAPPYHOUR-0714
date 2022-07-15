$(".loader-inner").loaders();
$(document).ready(function(){
    $(".go").click(function(){
        $('.home').css("z-index","-99");
        $('.game').css("z-index","1");
        localStorage.setItem("qa", "1")
        let ftQA = localStorage.getItem("qa");
        if(ftQA == 1){
            window.setTimeout(( () =>$('#part1').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('#part1-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part1-2').offset().top+10000}, 100)), 4100);
            window.setTimeout(( () =>$('#QA1').css("position","unset") ), 6000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA1').offset().top+10000}, 100)), 6100);
        }
    });
    $(".info").click(function(){
        $(this).find(".loader-inner").hide();
        $(this).find(".info-qa").show();
    });

    $(".boness").click(function(){
        let QA = localStorage.getItem("qa");
        if(QA == 15){
            localStorage.setItem("qa", "16")
            window.setTimeout(( () =>$('#part5').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part5').offset().top+10000}, 100)), 2100);
            window.setTimeout(( () =>$('#part5-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part5-2').offset().top+10000}, 100)), 4100);
            window.setTimeout(( () =>$('#QA16').css("position","unset") ), 6000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA16').offset().top+10000}, 100)), 6100);
        }
    });

    $(".sumit-btn").on('click', function() {
        let QA = localStorage.getItem("qa");
        if(QA == 1){
            localStorage.setItem("qa", "2")
            $('#MES1').show();
            window.setTimeout(( () =>$('#QA2').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES1').offset().top+1000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA2').offset().top+1000}, 100)), 2100);
        }else if(QA == 2){
            localStorage.setItem("qa", "3")
            $('#MES2').show();
            window.setTimeout(( () =>$('#QA3').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES2').offset().top+1000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA3').offset().top+1000}, 100)), 2100);
        }else if(QA == 3){
            localStorage.setItem("qa", "4")
            $('#MES3').show();
            window.setTimeout(( () =>$('#QA4').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES3').offset().top+1000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA4').offset().top+1000}, 100)), 2100);
        }else if(QA == 4){
            localStorage.setItem("qa", "5")
            $('#MES4').show();
            window.setTimeout(( () =>$('#QA5').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES4').offset().top+1000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA5').offset().top+1000}, 100)), 2100);
        }else if(QA == 5){
            localStorage.setItem("qa", "6")
            $('#MES5').show();
            window.setTimeout(( () =>$('#QA6').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES5').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA6').offset().top+10000}, 100)), 2100);
        }else if(QA == 6){
            localStorage.setItem("qa", "7")
            $('#MES6').show();
            $('.chat-content').animate({scrollTop: $('#MES6').offset().top+10000}, 100);

            window.setTimeout(( () =>$('#part2').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part2').offset().top+10000}, 100)), 2100);
            window.setTimeout(( () =>$('#part2-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part2-2').offset().top+10000}, 100)), 4100);
            window.setTimeout(( () =>$('#QA7').css("position","unset") ), 6000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA7').offset().top+10000}, 100)), 6100);

        }else if(QA == 7){
            localStorage.setItem("qa", "8")
            $('#MES7').show();
            window.setTimeout(( () =>$('#QA8').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES7').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA8').offset().top+10000}, 100)), 2100);
        }else if(QA == 8){
            localStorage.setItem("qa", "9")
            $('#MES8').show();
            window.setTimeout(( () =>$('#QA9').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES8').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA9').offset().top+10000}, 100)), 2100);
        }else if(QA == 9){
            localStorage.setItem("qa", "10")
            $('#MES9').show();
            window.setTimeout(( () =>$('#QA10').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES9').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA10').offset().top+10000}, 100)), 2100);
        }else if(QA == 10){
            localStorage.setItem("qa", "11")
            $('#MES10').show();
            $('.chat-content').animate({scrollTop: $('#MES10').offset().top+10000}, 100);

            window.setTimeout(( () =>$('#part3').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part3').offset().top+10000}, 100)), 2100);
            window.setTimeout(( () =>$('#part3-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part3-2').offset().top+10000}, 100)), 4100);
            window.setTimeout(( () =>$('#QA11').css("position","unset") ), 6000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA11').offset().top+10000}, 100)), 6100);
        }else if(QA == 11){
            localStorage.setItem("qa", "12")
            $('#MES11').show();
            window.setTimeout(( () =>$('#QA12').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES11').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA12').offset().top+10000}, 100)), 2100);
        }else if(QA == 12){
            localStorage.setItem("qa", "13")
            $('#MES12').show();
            window.setTimeout(( () =>$('#QA13').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES12').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA13').offset().top+10000}, 100)), 2100);
        }else if(QA == 13){
            localStorage.setItem("qa", "14")
            $('#MES13').show();
            $('.chat-content').animate({scrollTop: $('#MES13').offset().top+10000}, 100);

            window.setTimeout(( () =>$('#part4').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part4').offset().top+10000}, 100)), 2100);
            window.setTimeout(( () =>$('#part4-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part4-2').offset().top+10000}, 100)), 4100);
            window.setTimeout(( () =>$('#QA14').css("position","unset") ), 6000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA14').offset().top+10000}, 100)), 6100);
        }else if(QA == 14){
            localStorage.setItem("qa", "15")
            $('#MES14').show();
            window.setTimeout(( () =>$('#QA15').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES14').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA15').offset().top+10000}, 100)), 2100);
        }else if(QA == 15){
            $('#MES15').show();
            $('.chat-content').animate({scrollTop: $('#MES15').offset().top+10000}, 100);
        }else if(QA == 16){
            localStorage.setItem("qa", "17")
            $('#MES16').show();
            $('.chat-content').animate({scrollTop: $('#MES16').offset().top+10000}, 100);
            
            window.setTimeout(( () =>$('#part6').css("position","unset") ), 2000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part6').offset().top+10000}, 100)), 2100);
            window.setTimeout(( () =>$('#part6-2').css("position","unset") ), 4000);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#part6-2').offset().top+10000}, 100)), 4100);
        }else{
            console.log("over")
        }
    })
});
