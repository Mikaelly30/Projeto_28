class launcher{

    constructor(bodyA,pointB){

        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 10
        }

    this.bodyA = bodyA;
    this.pointB = pointB
    this.launch = Constraint.create(options);
    World.add(world,this.launch);
    
    }

display(){
    if(this.launch.bodyA){

   
    var pontoA = this.launch.bodyA.position;
    var pontoB = this.pointB;
    strokeWeight(3);
    line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
   
    }
}


fly()
{
    this.launch.bodyA = null;
    
}
attach(bodyA){
    
    this.launch.bodyA = bodyA;
       
    }
 


}
