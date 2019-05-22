noofcolors=6;

var colors=generatecolors(noofcolors);

var pickedColor=picrandomcolor();

$('#ColorDisplay').text(pickedColor);



for(i=0;i<colors.length;i++){
     
     $('.square')[i].style.background=colors[i];
}


$('#resetbtn').on('click',function(){
    colors=generatecolors(noofcolors);
    pickedColor=picrandomcolor();
    $('#ColorDisplay').text(pickedColor);

    for(i=0;i<colors.length;i++){
     
     $('.square')[i].style.background=colors[i];

     $("#message").text(' ');

     $('#resetbtn').text('NEW COLORS');
}})

$("#easymode").on('click',function(){
    $('#resetbtn').text('NEW COLORS');
    noofcolors=3;
    colors=generatecolors(noofcolors);
    pickedColor=picrandomcolor();
    $('#ColorDisplay').text(pickedColor);
    for(i=0;i<$('.square').length;i++){
        if(colors[i]){
            $('.square')[i].style.background=colors[i];
        }
        else{
            $('.square')[i].style.display='none';
        }
    }
    $("#message").text(' ');
})

$("#hardmode").on('click',function(){
    $('#resetbtn').text('NEW COLORS');
    noofcolors=6;
    colors=generatecolors(noofcolors);
    pickedColor=picrandomcolor();
    $('#ColorDisplay').text(pickedColor);
    for(i=0;i<$('.square').length;i++){
        if(colors[i]){
            $('.square')[i].style.background=colors[i];
            $('.square')[i].style.display='block';
        }
        
    }
    $("#message").text(' ');
  
})



//  Logic of the program:

$(".square").click(function() {
  var clickedcolor = $( this ).css( "background-color" );
  if(clickedcolor===pickedColor){
    $("#message").text('Correct!');
    colorall(clickedcolor);
    $('#resetbtn').text('Play Again?')

  }
  else{
    $("#message").text('Try Again');
    $(this).css({background:'#232323'});
  }
})


function picrandomcolor(){
    index=Math.floor(Math.random()*colors.length);
    return colors[index]
}


function colorall(colr){
    $('.square').css({background:colr})
}



//  generating a random color from 0 t0 255 for RGB
function randomcolor(){
    r=Math.floor(Math.random()*256);
    g=Math.floor(Math.random()*256);
    b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function generatecolors(num){
var arr=[];
for(i=0;i<num;i++){
    arr.push(randomcolor());
}
return arr;
}