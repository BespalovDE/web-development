
function StenLegs(context, x, y){
    context.beginPath();
    context.strokeStyle = '#3f77c9';
    context.fillStyle = '#3f77c9';
    context.rect(x + 68, y + 240, 102, 18);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.strokeStyle = '#363136';
    context.fillStyle = '#363136';
    context.ellipse(x + 93, y + 260, 35, 5, 0, Math.PI, 0);
    context.stroke();
    context.fill();
    
    context.beginPath();
    context.ellipse(x + 145, y + 260, 35, 5, -2 * Math.PI / 360, Math.PI, 0);
    context.stroke();
    context.fill();
}

function StenBody(context, x, y){
    context.beginPath();
    context.lineWidth = 5; 
    context.strokeStyle = '#d26f60';
    context.fillStyle = '#d26f60';
    context.bezierCurveTo(x + 48, y + 221, x + 46, y + 204, x + 69, y + 176); 
    context.bezierCurveTo(x + 172, y + 130, x + 180, y + 206, x + 183, y + 231); 
    context.bezierCurveTo(x + 170, y + 240, x + 130, y + 246, x + 116, y + 245);
    context.bezierCurveTo(x + 116, y + 245, x + 95, y + 246, x + 62, y + 237); 
    context.stroke();
    context.fill();
}

function StenClaps(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#403539';
    context.moveTo(x + 118, y + 190);
    context.lineTo(x + 116, y + 247);
    context.stroke();

    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#403539';
    context.fillStyle = '#403539';
    context.arc(x + 111, y + 205, 1.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(x + 110, y + 220, 1.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.arc(x + 109, y + 236, 1.5, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

function StenHands(context, x, y){
     context.beginPath();
     context.strokeStyle = '#393035';
     context.lineWidth = 0.5; 
     context.moveTo(x + 69, y + 204);
     context.lineTo(x + 65, y + 221);      
     context.moveTo(x + 161, y + 204);
     context.lineTo(x + 164, y + 221);
     context.stroke();
     
     context.beginPath();
     context.lineWidth = 1; 
     context.strokeStyle = '#ff1f3e';
     context.fillStyle = '#ff1f3e';
     context.arc(x + 57, y + 225, 12, 0, 2 * Math.PI);
     context.stroke();
     context.fill();
     
     context.beginPath();
     context.arc(x + 175, y + 228, 12, 0, 2 * Math.PI);
     context.stroke();
     context.fill();
     
     context.beginPath();
     context.lineWidth = 2; 
     context.strokeStyle = '#ac4c4d';
     context.arc(x + 165, y + 225, 4.5, 0, 2 * Math.PI);
     context.stroke();
     context.fill();
     
     context.beginPath();
     context.arc(x + 65, y + 222, 4.5, 0, 2 * Math.PI);
     context.stroke();
     context.fill();
}

function StenCollar(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#ac4c4d';
    context.fillStyle = '#ff1f3e';
    context.ellipse(x + 92, y + 186, 28, 8, 55 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 141, y + 187, 25, 9, -50 * Math.PI / 360, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
}

function StenHead(context, x, y){
    context.beginPath();     
    context.arc(x + 115, y + 117, 74, 0, 2 * Math.PI);
    context.lineWidth = 3;
    context.strokeStyle = '#ffedc4';
    context.fillStyle = '#ffedc4';
    context.stroke();
    context.fill();
}

function StenCap(context, x, y){
    context.beginPath();     
    context.arc(x + 115, y + 117, 74, Math.PI + Math.PI/30, -Math.PI/20);
    context.bezierCurveTo(x + 187, y + 105, x + 125, y + 65, x + 43, y + 110);
    context.lineWidth = 3;
    context.strokeStyle = '#3c73c5';
    context.fillStyle = '#3c73c5'; 
    context.stroke();
    context.fill();

    context.lineCap = 'round';
    context.lineWidth = 4;
    context.strokeStyle = '#ff1f41'; 
    context.beginPath();   
    context.moveTo(x + 106, y + 23); 
    context.lineTo(x + 106, y + 54); 
    context.moveTo(x + 111, y + 23);   
    context.lineTo(x + 104, y + 53);
    context.moveTo(x + 118, y + 26);
    context.lineTo(x + 98, y + 51);
    context.moveTo(x + 120, y + 33);
    context.lineTo(x + 94, y + 45);
    context.moveTo(x + 121, y + 41);
    context.lineTo(x + 91, y + 37);
    context.moveTo(x + 118, y + 48);
    context.lineTo(x + 94, y + 30);
    context.moveTo(x + 114, y + 52);
    context.lineTo(x + 99, y + 25);
    context.stroke();

    context.beginPath(); 
    context.lineCap = 'butt';
    context.lineWidth = 15;
    context.strokeStyle = '#ff1f41';
    context.fillStyle = '#ff1f41'; 
    context.bezierCurveTo(x + 35, y + 107, x + 115, y + 80, x + 188, y + 102); 
    context.fillRect(x + 184, y + 97, 6, 12);  
    context.stroke();
}

function StenEyes(context, x, y){
    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.ellipse(x + 94, y + 127, 12, 16, 60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();
    context.fill();

    context.beginPath();
    context.ellipse(x + 136, y + 126, 12, 16, -60 * Math.PI / 360 , 0, 2 * Math.PI);
    context.stroke();      
    context.fill();

    context.beginPath(); ;
    context.fillStyle = '#342f33'; 
    context.arc(x + 102, y + 128, 2.5, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.arc(x + 126, y + 127, 2.5, 0, 2 * Math.PI);
    context.fill();

    context.beginPath();
    context.lineWidth = 3; 
    context.strokeStyle = '#543d45';
    context.moveTo(x + 65, y + 110);
    context.lineTo(x + 83, y + 92);
    context.stroke();

    context.beginPath();
    context.moveTo(x + 140, y + 92);
    context.lineTo(x + 159, y + 105);
    context.stroke();

    context.beginPath(); 
    context.lineWidth = 0.4;
    context.strokeStyle = '#000000';
    context.bezierCurveTo(x + 116, y + 118, x + 113, y + 123, x + 116, y + 128); 
    context.stroke();
}

function StenMouth(context, x, y){
    context.beginPath();
    context.lineWidth = 2; 
    context.strokeStyle = '#312c30';
    context.bezierCurveTo(x + 98, y + 165, x + 115, y + 163, x + 139, y + 164);
    context.bezierCurveTo(x + 139, y + 164, x + 128, y + 172, x + 118, y + 180);
    context.bezierCurveTo(x + 118, y + 180, x + 108, y + 172, x + 98, y + 165);
    context.stroke();
    context.fill();

    StenTeeth(context, x, y);
}

function StenTeeth(context, x, y){
    context.beginPath(); 
    context.strokeStyle = '#fff';
    context.fillStyle = '#fff'; 
    context.bezierCurveTo(x + 101, y + 165, x + 118, y + 165, x + 135, y + 165);
    context.bezierCurveTo(x + 135, y + 165, x + 133, y + 170, x + 120, y + 170);
    context.bezierCurveTo(x + 120, y + 170, x + 103, y + 170, x + 101, y + 165);
    context.stroke();
    context.fill();

    context.beginPath();
    context.lineWidth = 1; 
    context.strokeStyle = '#312c30';
    context.moveTo(x + 109, y + 163); 
    context.lineTo(x + 109, y + 172);
    context.moveTo(x + 119, y + 163); 
    context.lineTo(x + 119, y + 172);
    context.moveTo(x + 129, y + 163); 
    context.lineTo(x + 127, y + 172);
    context.stroke();
}

function drawSten(x, y){     
    x = x - 40;
    y = y - 18;
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    
    StenLegs(context, x, y);
    StenBody(context, x, y);
    StenClaps(context, x, y);
    StenHands(context, x, y);
    StenCollar(context, x, y);
    StenHead(context, x, y);
    StenCap(context, x, y);
    StenEyes(context, x, y);
    StenMouth(context, x, y);
}