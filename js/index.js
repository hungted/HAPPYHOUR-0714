$(".loader-inner").loaders();
$(document).ready(function(){
    $(".go").click(function(){
        $('.home').css("z-index","-99");
        $('.game').css("z-index","1");
        localStorage.setItem("qa", "1")
        let ftQA = localStorage.getItem("qa");
        if(ftQA == 1){
            window.setTimeout(( () =>$('#QA1').css("position","unset") ), 3000);
        }
    });
    $(".info").click(function(){
        $(this).find(".loader-inner").hide();
        $(this).find(".info-qa").show();
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
            window.setTimeout(( () =>$('#QA7').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES6').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA7').offset().top+10000}, 100)), 2100);
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
            window.setTimeout(( () =>$('#QA11').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES10').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA11').offset().top+10000}, 100)), 2100);
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
            window.setTimeout(( () =>$('#QA14').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES13').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA14').offset().top+10000}, 100)), 2100);
        }else if(QA == 14){
            localStorage.setItem("qa", "15")
            $('#MES14').show();
            window.setTimeout(( () =>$('#QA15').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES14').offset().top+10000}, 100);
            window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA15').offset().top+10000}, 100)), 2100);
        }else if(QA == 15){
            localStorage.setItem("qa", "16")
            $('#MES15').show();
            // window.setTimeout(( () =>$('#QA16').css("position","unset") ), 2000);
            $('.chat-content').animate({scrollTop: $('#MES15').offset().top+10000}, 100);
            // window.setTimeout(( () =>$('.chat-content').animate({scrollTop: $('#QA16').offset().top+10000}, 100)), 2100);
        }else{
            console.log("over")
        }
    })
});
