$(document).ready(function(){

 var current;//variable to store current image
//creating elements dynamically

  var li_box = $("<div></div>");
  li_box.addClass("lightBox");
  var bg = $("<div></div>");
  bg.addClass("bg");
  li_box.append(bg);
  var show =  $("<div></div>");
  show.addClass("show");
  var image = $("<img>");
  show.append(image);
  var next = $("<button>></button>");
  next.attr("type","button");
  next.addClass("next");
  show.append(next);
  var prev= $("<button><</button>");
  prev.attr("type","button");
  prev.addClass("previous");
  show.append(prev);
  li_box.append(show);
  //now appending all items to body
$("body").append(li_box);
//capturing image width and height
  var s_width = $(".show img").outerWidth();
  var s_height = $(".show img").outerHeight();
//targeting image in center by capturing windows width
  var left = ($(window).width() - s_width)/2;
   var top = ($(window).height() - s_height)/2;
   $(".show").css({top:top,left:left});


//things we need to do to toggle previous and next button
  //if current image has class hide_p or hide_n than hide button according to class
  function check_p(){
    return current.hasClass("hide_p");
  }

  function check_n(){
    return current.hasClass("hide_n");
  }

  $(".next").click(function(){
     //here we need to check for whether current position of image has class hide_n
     current = current.next();
     //now here we're just switching the show/hide for next & previous button with nested if
  if(check_p()){ 
    $(".previous").hide();
    $(".next").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  } else if(check_n()){
    $(".next").hide();
    $(".previous").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  }else{
    $(".previous").show();
    $(".next").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  }

})

  $(".previous").click(function(){
     //here we need to check for whether current position of image has class hide_p
     current = current.prev();
     //now here we're just switching the show/hide for next & previous button with nested if
  if(check_p()){ 
    $(".previous").hide();
    $(".next").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  } else if(check_n()){
    $(".next").hide();
    $(".previous").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  }else{
    $(".previous").show();
    $(".next").show();
    var src = current.children().attr("src");
    image.attr("src",src);
  }
  })



//tasks we need to perform when an user click on image i.e. any li the element will be created dynamically in our page
$("#light_box li").click(function(){
  //capturing location
    current = $(this);
//now here we're just switching the show/hide for next & previous button with nested if
  if(check_p()){ 
    $(".previous").hide();
    $(".next").show();
    var src = $(this).children().attr("src");
    image.attr("src",src);
    $(".lightBox").show();
  } else if(check_n()){
    $(".next").hide();
    $(".previous").show();
    var src = $(this).children().attr("src");
    image.attr("src",src);
    $(".lightBox").show();
  }else{
    $(".previous").show();
    $(".next").show();
    var src = $(this).children().attr("src");
    image.attr("src",src);
    $(".lightBox").show();
  }
})


$(".bg").dblclick(function(){
  $(".lightBox").hide();
})

})