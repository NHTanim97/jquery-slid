$(document).ready(function(){


    // slid up
$(".btn").click(function(){
 $("p").slideUp(1000);
});

$(".btn").click(function(){
    $(".slid").css("background","pink");
   });



//    slid down
$(".btn2").click(function(){
    $("p").slideDown(1000);
   });

   $(".btn2").click(function(){
    $(".slid").css("background","black");
   });


});