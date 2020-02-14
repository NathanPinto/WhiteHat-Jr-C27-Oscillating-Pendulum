class Attachment {
    constructor(bodyA,bodyB){
        var attachment_options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 7
        }
        this.chain = Constraint.create(attachment_options)
        World.add(world,this.chain)
    }
    display(){
        push();
        strokeWeight(8);
        stroke("blue")
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
      pop();
    }
}