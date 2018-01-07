$(function(){
  
  ////   page discription fadeIn   //////////////
  $(".title button").click(function(){
    $(".title").fadeOut(0);
  });
    ////  (smart phone only)(substitute of hover)   //////
  if($(window).width()<=767) {
    $(".title button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
    });
  };
  
  ////   page select level fadeIn   //////////////
  $(".description button").click(function(){
    $(".description").fadeOut(0);
  });
    ////  (smart phone only)(substitute of hover)   //////
  if($(window).width()<=767){
    $(".description button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
    });
  };
  
  ///   If each level button hover,change each level image   ///
      //////   easy button hover   /////////////////
  $(".easy button").hover(function(){
    $(".easy .selectLevelSpeechBalloon_1").fadeOut(0);
    $(".easy .imageBox img:nth-of-type(1)").fadeOut(0);
    $(".easy .selectLevelSpeechBalloon_2").fadeIn(0);
    $(".easy .imageBox img:nth-of-type(2)").fadeIn(0);
  },function(){
    $(".easy .selectLevelSpeechBalloon_1").fadeIn(0);
    $(".easy .imageBox img:nth-of-type(1)").fadeIn(0);
    $(".easy .selectLevelSpeechBalloon_2").fadeOut(0);
    $(".easy .imageBox img:nth-of-type(2)").fadeOut(0);
  });
  
      //////   normal button hover   /////////////////
  $(".normal button").hover(function(){
    $(".normal .selectLevelSpeechBalloon_1").fadeOut(0);
    $(".normal .imageBox img:nth-of-type(1)").fadeOut(0);
    $(".normal .selectLevelSpeechBalloon_2").fadeIn(0);
    $(".normal .imageBox img:nth-of-type(2)").fadeIn(0);
  },function(){
    $(".normal .selectLevelSpeechBalloon_1").fadeIn(0);
    $(".normal .imageBox img:nth-of-type(1)").fadeIn(0);
    $(".normal .selectLevelSpeechBalloon_2").fadeOut(0);
    $(".normal .imageBox img:nth-of-type(2)").fadeOut(0);
  });
  
      //////   hard button hover   /////////////////
  $(".hard button").hover(function(){
    $(".hard .selectLevelSpeechBalloon_1").fadeOut(0);
    $(".hard .imageBox img:nth-of-type(1)").fadeOut(0);
    $(".hard .selectLevelSpeechBalloon_2").fadeIn(0);
    $(".hard .imageBox img:nth-of-type(2)").fadeIn(0);
  },function(){
    $(".hard .selectLevelSpeechBalloon_1").fadeIn(0);
    $(".hard .imageBox img:nth-of-type(1)").fadeIn(0);
    $(".hard .selectLevelSpeechBalloon_2").fadeOut(0);
    $(".hard .imageBox img:nth-of-type(2)").fadeOut(0);
  });
  
      ///   If each level button hover,change each level image   ///
      ////  (smart phone only)(substitute of hover)   //////
          //////   easy button touchstart   /////////////////
  if($(window).width()<=767){
    $(".easy button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
      $(".easy .selectLevelSpeechBalloon_1").fadeOut(0);
      $(".easy .imageBox img:nth-of-type(1)").fadeOut(0);
      $(".easy .selectLevelSpeechBalloon_2").fadeIn(0);
      $(".easy .imageBox img:nth-of-type(2)").fadeIn(0);
    });
  };
          //////   normal button touchstart   /////////////////
  if($(window).width()<=767){
    $(".normal button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
      $(".normal .selectLevelSpeechBalloon_1").fadeOut(0);
      $(".normal .imageBox img:nth-of-type(1)").fadeOut(0);
      $(".normal .selectLevelSpeechBalloon_2").fadeIn(0);
      $(".normal .imageBox img:nth-of-type(2)").fadeIn(0);
    });
  };
        //////   hard button touchstart   /////////////////
  if($(window).width()<=767){
    $(".hard button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
      $(".hard .selectLevelSpeechBalloon_1").fadeOut(0);
      $(".hard .imageBox img:nth-of-type(1)").fadeOut(0);
      $(".hard .selectLevelSpeechBalloon_2").fadeIn(0);
      $(".hard .imageBox img:nth-of-type(2)").fadeIn(0);
    });
  };
  
  ////   start countdown animation   //////////////
  $(".eachLevel a").click(function(){
    
    //////   game view fadeIn    ////////////////////
    $($(this).attr("href")).fadeIn(0);
    $(".selectLevel").fadeOut(0,function(){
      
      ////   countdown animation   ////////////
      var timeID_3 = setTimeout(function(){
        $(".third").fadeOut(0);
      },1000);
      
      var timeID_2 = setTimeout(function(){
        $(".second").fadeOut(0);
      },2000);
      
      var timeID_1 = setTimeout(function(){
        $(".first").fadeOut(0);
      },3000);
      
      var timeID_start = setTimeout(function(){
        $(".start").fadeOut(0);
      },4000);
      
      ////   game view move speed & goal game view fadeOut   /////
      var timeID_gameViewMove = setTimeout(function(){
        
        ////   each game view css display variable definition   ////
        var easyDisplay = $("#easyGameView").css("display");
        var normalDisplay = $("#normalGameView").css("display");
        var hardDisplay = $("#hardGameView").css("display");
        
        ////   easy game view move speed   ///////////
          ///   (PC only)   ////////////////////
        if($(window).width()>=768){
          $("#easyGameView").animate({
            marginLeft:"0px"
          },40000,"easeInOutSine",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#easyGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(normalDisplay==="none" && hardDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
          ///   (smart phone only)   ////////////////////
        }else if($(window).width()<=767){
          $("#easyGameView").animate({
            marginLeft:"0px"
          },50000,"easeInOutSine",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#easyGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(normalDisplay==="none" && hardDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
        };
        
        ////   normal game view move speed   ///////////
        ///   (PC only)   ////////////////////
        if($(window).width()>=768){
          $("#normalGameView").animate({
            marginLeft:"0px"
          },32000,"linear",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#normalGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(easyDisplay==="none" && hardDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
           ///   (smart phone only)   ////////////////////
        }else if($(window).width()<=767){
          $("#normalGameView").animate({
            marginLeft:"0px"
          },42000,"linear",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#normalGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(easyDisplay==="none" && hardDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
        };
        
        ////   hard game view move speed   ///////////
        ///   (PC only)   ////////////////////
        if($(window).width()>=768){
          $("#hardGameView").animate({
            marginLeft:"0px"
          },30000,"easeInOutSine",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#hardGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(normalDisplay==="none" && easyDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
          ///   (smart phone only)   ////////////////////
        }else if($(window).width()<=767){
          $("#hardGameView").animate({
            marginLeft:"0px"
          },40000,"easeInOutSine",function(){
            var timeID_gameViewClose = setTimeout(function(){
              $("#hardGameView").fadeOut(0);
            
            ///   pakupaku kun fadeOut   //////////////
              if(normalDisplay==="none" && easyDisplay==="none"){
                $("div.yen_posi").fadeOut(0);
              };
            },2000);
          });
        };
        
        ////   pakupaku kun fadeIn   ///////////////
        $("div.yen_posi").fadeIn(0);
      },4001);
    });
    return false;
  });
  
  ////   game target position random function   ///////////////
    //////   (PC only)   ////////////////////
  if($(window).width()>=768){
    $(".game_view label").each(function(){
      $(this).css({
        position: "absolute",
        top: parseInt(Math.random()*460)+1+"px",
        left: (parseInt(Math.random()*5300)+1)+300+"px"
      });
    });
  }else if($(window).width()<=767){
    $(".game_view label").each(function(){
      $(this).css({
        position: "absolute",
        top: parseInt(Math.random()*200)+1+"px",
        left: (parseInt(Math.random()*5600)+1)+200+"px"
      });
    });
  };
  
  /////   game view target value 0 set   //////////////
  $(".game_view label input").each(function(){
    $(this).prop("checked",true);
  });
  
  ////////   easy target hit point+1 & points sum   //////////
  $("#easyGameView label").each(function(){
    $(this).click(function(){
      $(this).find("input").attr("value",1);
      
      var targetValue25 = parseInt($("#easyGameView input[name='target25']").val());
      var targetValue24 = parseInt($("#easyGameView input[name='target24']").val());
      var targetValue23 = parseInt($("#easyGameView input[name='target23']").val());
      var targetValue22= parseInt($("#easyGameView input[name='target22']").val());
      var targetValue21 = parseInt($("#easyGameView input[name='target21']").val());
      var targetValue20 = parseInt($("#easyGameView input[name='target20']").val());
      var targetValue19 = parseInt($("#easyGameView input[name='target19']").val());
      var targetValue18 = parseInt($("#easyGameView input[name='target18']").val());
      var targetValue17 = parseInt($("#easyGameView input[name='target17']").val());
      var targetValue16 = parseInt($("#easyGameView input[name='target16']").val());
      var targetValue15 = parseInt($("#easyGameView input[name='target15']").val());
      var targetValue14 = parseInt($("#easyGameView input[name='target14']").val());
      var targetValue13 = parseInt($("#easyGameView input[name='target13']").val());
      var targetValue12 = parseInt($("#easyGameView input[name='target12']").val());
      var targetValue11 = parseInt($("#easyGameView input[name='target11']").val());
      var targetValue10 = parseInt($("#easyGameView input[name='target10']").val());
      var targetValue9 = parseInt($("#easyGameView input[name='target9']").val());
      var targetValue8 = parseInt($("#easyGameView input[name='target8']").val());
      var targetValue7 = parseInt($("#easyGameView input[name='target7']").val());
      var targetValue6 = parseInt($("#easyGameView input[name='target6']").val());
      var targetValue5 = parseInt($("#easyGameView input[name='target5']").val());
      var targetValue4 = parseInt($("#easyGameView input[name='target4']").val());
      var targetValue3 = parseInt($("#easyGameView input[name='target3']").val());
      var targetValue2 = parseInt($("#easyGameView input[name='target2']").val());
      var targetValue1 = parseInt($("#easyGameView input[name='target1']").val());
      var sum = targetValue1+targetValue2+targetValue3+targetValue4+targetValue5+targetValue6+targetValue7+targetValue8+targetValue9+targetValue10+targetValue11+targetValue12+targetValue13+targetValue14+targetValue15+targetValue16+targetValue17+targetValue18+targetValue19+targetValue20+targetValue21+targetValue22+targetValue23+targetValue24+targetValue25;
      console.log(sum);
      $(this).find("span").html('<i class="fa fa-cloud" aria-hidden="true"></i>');
      
          //////   score fadeIn   ///////////////////////
      $("div.score h3").text(sum*4+" points");
      if(sum===25){
        $("div.perfect").fadeIn(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeOut(0);
      }else if(sum<=24 && sum>=20){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeIn(0);
        $("div.failure").fadeOut(0);
      }else if(sum<20){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeIn(0);
      };
    });
  });
  
  ////////   normal target hit point+1 & points sum   //////////
  $("#normalGameView label").each(function(){
    $(this).click(function(){
      $(this).find("input").attr("value",1);
      
      var targetValue25 = parseInt($("#normalGameView input[name='target25']").val());
      var targetValue24 = parseInt($("#normalGameView input[name='target24']").val());
      var targetValue23 = parseInt($("#normalGameView input[name='target23']").val());
      var targetValue22= parseInt($("#normalGameView input[name='target22']").val());
      var targetValue21 = parseInt($("#normalGameView input[name='target21']").val());
      var targetValue20 = parseInt($("#normalGameView input[name='target20']").val());
      var targetValue19 = parseInt($("#normalGameView input[name='target19']").val());
      var targetValue18 = parseInt($("#normalGameView input[name='target18']").val());
      var targetValue17 = parseInt($("#normalGameView input[name='target17']").val());
      var targetValue16 = parseInt($("#normalGameView input[name='target16']").val());
      var targetValue15 = parseInt($("#normalGameView input[name='target15']").val());
      var targetValue14 = parseInt($("#normalGameView input[name='target14']").val());
      var targetValue13 = parseInt($("#normalGameView input[name='target13']").val());
      var targetValue12 = parseInt($("#normalGameView input[name='target12']").val());
      var targetValue11 = parseInt($("#normalGameView input[name='target11']").val());
      var targetValue10 = parseInt($("#normalGameView input[name='target10']").val());
      var targetValue9 = parseInt($("#normalGameView input[name='target9']").val());
      var targetValue8 = parseInt($("#normalGameView input[name='target8']").val());
      var targetValue7 = parseInt($("#normalGameView input[name='target7']").val());
      var targetValue6 = parseInt($("#normalGameView input[name='target6']").val());
      var targetValue5 = parseInt($("#normalGameView input[name='target5']").val());
      var targetValue4 = parseInt($("#normalGameView input[name='target4']").val());
      var targetValue3 = parseInt($("#normalGameView input[name='target3']").val());
      var targetValue2 = parseInt($("#normalGameView input[name='target2']").val());
      var targetValue1 = parseInt($("#normalGameView input[name='target1']").val());
      var sum = targetValue1+targetValue2+targetValue3+targetValue4+targetValue5+targetValue6+targetValue7+targetValue8+targetValue9+targetValue10+targetValue11+targetValue12+targetValue13+targetValue14+targetValue15+targetValue16+targetValue17+targetValue18+targetValue19+targetValue20+targetValue21+targetValue22+targetValue23+targetValue24+targetValue25;
      console.log(sum);
      $(this).find("span").html('<i class="fa fa-cloud" aria-hidden="true"></i>');
      
          //////   score fadeIn   ///////////////////////
      $("div.score h3").text(sum*4+" points");
      if(sum===25){
        $("div.perfect").fadeIn(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeOut(0);
      }else if(sum<=24 && sum>=20){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeIn(0);
        $("div.failure").fadeOut(0);
      }else if(sum<20){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeIn(0);
      };
    });
  });
  
  ////////   hard target hit function   //////////
      ////////   hard target hit point+1 & hit point-1   //////////
  (function(){
    $("#hardGameView label.plus").each(function(){
      $(this).click(function(){
        $(this).find("input").attr("value",1);
        $(this).find("span").html('<i class="fa fa-cloud-upload" aria-hidden="true"></i>');
      });
    });
    
    $("#hardGameView label.minus").each(function(){
      $(this).click(function(){
        $(this).find("input").attr("value",-1);
        $(this).find("span").html('<i class="fa fa-cloud-download" aria-hidden="true"></i>');
      });
    });
    
      /////   each target points & sum   //////////////////
    $("#hardGameView label").click(function(){
      
      var targetValue25 = parseInt($("#hardGameView input[name='target25']").val());
      var targetValue24 = parseInt($("#hardGameView input[name='target24']").val());
      var targetValue23 = parseInt($("#hardGameView input[name='target23']").val());
      var targetValue22= parseInt($("#hardGameView input[name='target22']").val());
      var targetValue21 = parseInt($("#hardGameView input[name='target21']").val());
      var targetValue20 = parseInt($("#hardGameView input[name='target20']").val());
      var targetValue19 = parseInt($("#hardGameView input[name='target19']").val());
      var targetValue18 = parseInt($("#hardGameView input[name='target18']").val());
      var targetValue17 = parseInt($("#hardGameView input[name='target17']").val());
      var targetValue16 = parseInt($("#hardGameView input[name='target16']").val());
      var targetValue15 = parseInt($("#hardGameView input[name='target15']").val());
      var targetValue14 = parseInt($("#hardGameView input[name='target14']").val());
      var targetValue13 = parseInt($("#hardGameView input[name='target13']").val());
      var targetValue12 = parseInt($("#hardGameView input[name='target12']").val());
      var targetValue11 = parseInt($("#hardGameView input[name='target11']").val());
      var targetValue10 = parseInt($("#hardGameView input[name='target10']").val());
      var targetValue9 = parseInt($("#hardGameView input[name='target9']").val());
      var targetValue8 = parseInt($("#hardGameView input[name='target8']").val());
      var targetValue7 = parseInt($("#hardGameView input[name='target7']").val());
      var targetValue6 = parseInt($("#hardGameView input[name='target6']").val());
      var targetValue5 = parseInt($("#hardGameView input[name='target5']").val());
      var targetValue4 = parseInt($("#hardGameView input[name='target4']").val());
      var targetValue3 = parseInt($("#hardGameView input[name='target3']").val());
      var targetValue2 = parseInt($("#hardGameView input[name='target2']").val());
      var targetValue1 = parseInt($("#hardGameView input[name='target1']").val());
      var sum = targetValue1+targetValue2+targetValue3+targetValue4+targetValue5+targetValue6+targetValue7+targetValue8+targetValue9+targetValue10+targetValue11+targetValue12+targetValue13+targetValue14+targetValue15+targetValue16+targetValue17+targetValue18+targetValue19+targetValue20+targetValue21+targetValue22+targetValue23+targetValue24+targetValue25;
      console.log(sum);
      
          /////// score fadeIn   ///////////////
      $("div.score h3").text(sum*5+" points");
      if(sum*5===100){
        $("div.perfect").fadeIn(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeOut(0);
      }else if(sum*5<=99 && sum*5>=80){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeIn(0);
        $("div.failure").fadeOut(0);
      }else if(sum*5<80){
        $("div.perfect").fadeOut(0);
        $("div.success").fadeOut(0);
        $("div.failure").fadeIn(0);
      };
    });
  })();
  
  //////   pakupaku kun mouse move   //////////////////////
  ///////    (PC only)    ///////////////////////////
  if($(window).width()>=768){
  $(document).mousemove(function(e){
        $("div.yen_posi").css({
          top:e.pageY-30+"px",
          left:e.pageX+5+"px"
        });
      });
    ////    (smart phone only)    ///////////////////////////
  }else if($(window).width()<=767){
    $(document).on("touchstart",function(){
      $(this).data("startX",event.touches[0].pageX);
      $(this).data("startY",event.touches[0].pageY);
      $("div.yen_posi").css({
          top:$(this).data("startY")-30+"px",
          left:$(this).data("startX")+10+"px"
        });
    });
    $(document).on("touchmove",function(){
      $(this).data("startX",event.touches[0].pageX);
      $(this).data("startY",event.touches[0].pageY);
      $("div.yen_posi").css({
          top:$(this).data("startY")-30+"px",
          left:$(this).data("startX")+10+"px"
        });
    });
  };
  
  //////   pakupaku kun mouth open/close    //////////////////
  //////    (PC only)    //////////////////////
  if($(window).width()>=768){
  $(document).mousedown(function(){
    $("div.yen").fadeOut(0);
    $("div.circle_close").fadeIn(0);
  });
  $(document).mouseup(function(){
    $("div.circle_close").fadeOut(0);
    $("div.yen").fadeIn(0);
  });
  };
  
  //////   pakupaku kun mouth open/close    //////////////////
  //////    (smart phone only)    //////////////////////
  if($(window).width()<=767){
  $(document).on("touchstart",function(){
    $("div.yen").fadeOut(0);
    $("div.circle_close").fadeIn(0);
  });
  $(document).on("touchend",function(){
    $("div.circle_close").fadeOut(0);
    $("div.yen").fadeIn(0);
  });
  };
  
  ///////   try again, page reload   //////////////////
  $("div.score button").one("click",function(){
    location.reload();
  });
    ////  (smart phone only)(substitute of hover)   //////
  if($(window).width()<=767){
    $("div.score button").on("touchstart",function(){
      $(this).css({
        backgroundColor:"rgba(255,99,71,0.8)",
        fontWeight:"bold"
      });
      $(this).find("p").css({
        color:"rgba(255,255,0,0.9)"
      });
    });
  };
  
});