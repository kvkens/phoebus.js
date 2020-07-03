window.onload = function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext && canvas.getContext('2d');
    console.log(ctx);
    if(!ctx){
        alert('no canvas')
    }else{
        startGame();
    }
    function startGame(){
        // ctx.fillStyle = "rgb(0,0,128,.5)";
        // ctx.fillRect(50,100,55,55);
        var img = new Image();
        img.onload =  function(){
            ctx.drawImage(img,100,100)
        }
        img.src="images/ui_icon_item_4202_6_426.png";
    }
}