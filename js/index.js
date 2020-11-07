$(function(){
  //0 自定义滚动条
  $(".list").mCustomScrollbar();
  //1.监听移入移除事件
  //获取
  $(".list_name").hover(function () {
      // 显示子菜单
     $(this).find(".list_menu").stop().fadeIn(100);
    }, function () {
      // 隐藏子菜单
     $(this).find(".list_menu").stop().fadeOut(100);

    }
 
  );

  $(".list_time").hover(function(){
    //隐藏时长
    $(this).find("span").stop().fadeOut(10);
    //显示删除
    $(this).find("a").stop().fadeIn(100);

  },function(){
    // 隐藏删除
    $(this).find("a").stop().fadeOut(100);
    //显示时长
    $(this).find("span").stop().fadeIn(100);
    
  })




})