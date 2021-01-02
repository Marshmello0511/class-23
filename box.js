class box{

    constructor(x,y,width,height){  //constructor(200,200,50,50)

        var options={
            restitution:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options);   //(200,200,50,50)
        this.width=width;  //50
        this.height=height;  //50

        World.add(world,this.body);



    }


    display(){
        var pos=this.body.position;
        
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);  //(200,200,50,50)
        

    }











}