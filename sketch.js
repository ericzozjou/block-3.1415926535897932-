//let nb;
//let nb2;
//let nb3;
//let nb4;
//let nb5;
//let nb6;
let nbarray = [];
// 初始內容
function setup() {
  createCanvas(700, 700, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<20;i+=1){
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(70,-height/2+(height/7)*i,0,50));
  }
  //nb = new myBox(10,10,0,10);
  //nb2 = new myBox(15,15,0,25);
  //nb3 = new myBox(-15,10,0,50);
  //nb4 = new myBox(-20,20,0,25);
  //nb5 = new myBox(10,20,0,25);
  //nb6 = new myBox(20,10,0,15);
}
function draw() {
  background(mouseX,mouseY,128,128);
  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  })
  //nb.display();
  //nb2.display();
  //nb3.display();
  //nb4.display();
  //nb5.display();
  //nb6.display();
  
}
// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=size;
    this.mx = 3;
    this.my = 3;
    



  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);  
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.01);
        rotateY(frameCount*0.01);
        this.mx = this.mx-1;
        }
      box(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.y>width/3){this.my = -1*this.my;}
    if (this.y<-width/3){this.my = -1*this.my;} 
    if (this.x>width/3){this.mx = -1*this.mx;}
    if (this.x<-width/3){this.mx = -1*this.mx;}  
    this.x = this.x - this.mx;
    this.y = this.y + this.my;
  
  }
  
}