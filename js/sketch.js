function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(150);

    pumpkinX= width/2;
    pumpkinY= height/2;

    pumpkinWidth=180;
    pumpkinHeight=pumpkinWidth-60;

    pEyeSize= pumpkinHeight-80;
    pIrisSize= pEyeSize-30;

    fill(255, 255, 255);
    ellipse(400, 400, 200);

    //PUMPKIN
    fill(1, 69, 16);
    triangle(pumpkinX-25, pumpkinY-80, pumpkinX, pumpkinY-50, pumpkinX+25, pumpkinY-80);
  
    fill(2, 105, 24);
    triangle(pumpkinX-12, pumpkinY-74, pumpkinX, pumpkinY-58, pumpkinX+12, pumpkinY-74);
  
     //back ellipse dark orange
     noStroke();
     fill(180, 52, 37);
     ellipse(pumpkinX,pumpkinY,pumpkinWidth,pumpkinHeight);

     //back ellipse light
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-10,pumpkinHeight-10);
 
    //back ellipse dark orange 2
    noStroke();
    fill(180, 52, 37);
    ellipse(pumpkinX,pumpkinY,pumpkinWidth-50,pumpkinHeight+10);

    //back ellipse light 2
    noStroke();
    fill(240, 90, 40);
    ellipse(pumpkinX,pumpkinY-3,pumpkinWidth-60,pumpkinHeight);

    //nose
     fill(150,25,0);
     triangle(pumpkinX-15, pumpkinY+20, pumpkinX, pumpkinY-5, pumpkinX+15, pumpkinY+20);

    //left eye - add a right eye here
     noStroke();
     fill(0, 0, 0);
     ellipse(pumpkinX-35,pumpkinY-20,pEyeSize,pEyeSize);
  
     fill(0, 0, 0);
     ellipse(pumpkinX+35,pumpkinY-20,pEyeSize,pEyeSize);

    //eye pupils - add a left pupil here
     noStroke();
     fill(248, 239, 47);
     ellipse(pumpkinX-35,pumpkinY-20,pIrisSize,pIrisSize);
     fill(248, 239, 47);
     ellipse(pumpkinX+35,pumpkinY-20,pIrisSize,pIrisSize);

}