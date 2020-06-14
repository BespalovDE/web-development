function Kyleslegs(context, x, y){
    context.beginPath();
    context.strokeStyle = '#21847d';
    context.fillStyle = '#21847d';
    context.rect(x + 68, y + 240, 102, 18);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.strokeStyle = '#454147';
    context.fillStyle = '#454147';
    context.ellipse(x + 93, y + 260, 35, 5, 0, Math.PI, 0);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.ellipse(x + 145, y + 260, 35, 5, -2 * Math.PI / 360, Math.PI, 0);
    context.stroke();
    context.fill();
}

function KylesBody(context, x, y){
    context.beginPath();
    context.lineWidth = 5; 
    context.strokeStyle = '#ff6018';
    context.fillStyle = '#ff6018';
    context.bezierCurveTo(x + 48, y + 221, x + 46, y + 204, x + 69, y + 176); 
    context.bezierCurveTo(x + 172, y + 130, x + 185, y + 206, x + 188, y + 231); 
    context.bezierCurveTo(x + 170, y + 240, x + 130, y + 246, x + 116, y + 245);
    context.bezierCurveTo(x + 116, y + 245, x + 95, y + 246, x + 62, y + 237); 
    context.stroke();
    context.fill();
}

function KylesClasp(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#6a3523';
    context.moveTo(x + 121, y + 185);
    context.lineTo(x + 120, y + 248);
    context.stroke();
}

function KylesPockets(context, x, y){
    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#6a3523';
    context.rect(x + 85, y + 204, 20, 24);
    context.moveTo(x + 85, y + 204);
    context.lineTo(x + 95, y + 215);      
    context.lineTo(x + 105, y + 204);
    context.stroke();
        
    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#6a3523';
    context.rect(x + 133, y + 202, 20, 24);
    context.moveTo(x + 133, y + 202);
    context.lineTo(x + 143, y + 213);      
    context.lineTo(x + 153, y + 202);
    context.stroke();
}

function KylesHands(context, x, y){
    context.beginPath();
    context.strokeStyle = '#393035';
    context.lineWidth = 0.5; 
    context.moveTo(x + 69, y + 204);
    context.lineTo(x + 65, y + 221);      
    context.moveTo(x + 165, y + 204);
    context.lineTo(x + 168, y + 225);
    context.stroke();

    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#4bc53d';
    context.fillStyle = '#4bc53d';
    context.arc(x + 54, y + 228, 12, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
     
    context.beginPath();
    context.arc(x + 179, y + 232, 12, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
     
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#469243';
    context.arc(x + 169, y + 229, 4.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
     
    context.beginPath();
    context.arc(x + 64, y + 224, 4.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

function KylesCollar(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#446839';
    context.fillStyle = '#00ad50';
    context.ellipse(x + 92, y + 179, 28, 8, 55 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 142, y + 181, 29, 9, -45 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

function KylesHead(context, x, y){
    context.beginPath();     
    context.arc(x + 118, y + 114, 75, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.strokeStyle = '#ffedc4';
    context.fillStyle = '#ffedc4';
    context.stroke();
    context.fill();
}

function KylesCap(context, x, y){
    context.beginPath();
    context.strokeStyle = '#50c63e';
    context.fillStyle = '#50c63e';       
    context.lineJoin = 'round';
    context.lineWidth = 35;
    context.moveTo(x + 44, y + 72);
    context.lineTo(x + 194, y + 72);
    context.rect(x + 62, y + 46, 114, 26);
    context.stroke();
    context.fill();

    context.beginPath();      
    context.strokeStyle = '#50c63e';
    context.lineWidth = 1;
    context.ellipse(x + 42, y + 117, 38, 13, -140 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();      
    context.lineWidth = 1;
    context.ellipse(x + 197, y + 118, 38, 13, 140 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();    

    context.beginPath();      
    context.lineWidth = 1;
    context.strokeStyle = '#478f41';
    context.ellipse(x + 41, y + 129, 50, 19, -140 * Math.PI / 360, -Math.PI / 5, 0);
    context.stroke();

    context.beginPath();      
    context.ellipse(x + 197, y + 129, 50, 19, -220 * Math.PI / 360, 0, Math.PI / 4.5);
    context.stroke();


    context.beginPath();
    context.strokeStyle = '#00ad51';
    context.fillStyle = '#00ad51';
    context.moveTo(x + 55, y + 97);  
    context.lineTo(x + 55, y + 57);
    context.lineTo(x + 184, y + 57);
    context.lineTo(x + 184, y + 97);
    context.bezierCurveTo(x + 184, y + 97,  x + 120,  y + 85, x + 55, y + 97);
    context.stroke();
    context.fill();
}

function KylesEyes(context, x, y){
    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.ellipse(x + 98, y + 119, 20, 24, 60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 142, y + 118, 20, 24, -60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();      
    context.fill();

    context.beginPath(); ;
    context.fillStyle = '#342f33'; 
    context.arc(x + 106, y + 119, 2.5, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(x + 131, y + 119, 2.5, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.lineWidth = 3; 
    context.strokeStyle = '#543d45';
    context.moveTo(x + 76, y + 96);
    context.lineTo(x + 96, y + 83);
    context.stroke();

    context.beginPath();
    context.moveTo(x + 140, y + 85);
    context.lineTo(x + 162, y + 94);
    context.stroke();

    context.beginPath(); 
    context.lineWidth = 0.4;
    context.strokeStyle = '#000000';
    context.bezierCurveTo(x + 121, y + 112, x + 118, y + 117, x + 121, y + 122); 
    context.stroke();
}

function KylesTeeth(context, x, y){
    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.bezierCurveTo(x + 105, y + 161, x + 123, y + 161, x + 142, y + 161);
    context.bezierCurveTo(x + 142, y + 161, x + 140, y + 167, x + 124, y + 167);
    context.bezierCurveTo(x + 124, y + 167, x + 107, y + 167, x + 105, y + 161);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#312c30';
    context.moveTo(x + 112, y + 160); 
    context.lineTo(x + 112, y + 170);
    context.moveTo(x + 123, y + 160); 
    context.lineTo(x + 123, y + 170);
    context.moveTo(x + 135, y + 160); 
    context.lineTo(x + 133, y + 170);
    context.stroke();
}

function KylesMouth(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.bezierCurveTo(x + 100, y + 160, x + 119, y + 160, x + 146, y + 160);
    context.bezierCurveTo(x + 146, y + 160, x + 132, y + 174, x + 124, y + 178);
    context.bezierCurveTo(x + 124, y + 178, x + 114, y + 174, x + 100, y + 160);
    context.stroke();
    context.fill();

    KylesTeeth(context, x, y);
}

function drawKyle(x, y){
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');  
    x = x - 40;
    y = y - 18;
    Kyleslegs(context, x, y);
    KylesBody(context, x, y);
    KylesClasp(context, x, y);
    KylesPockets(context, x, y);
    KylesHands(context, x, y);
    KylesCollar(context, x, y);
    KylesHead(context, x, y);
    KylesCap(context, x, y);
    KylesEyes(context, x, y);
    KylesMouth(context, x, y);
}