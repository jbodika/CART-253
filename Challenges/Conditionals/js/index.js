/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

const puck = {
    x: 350,
    y: 350,
    size: 100,
    fill: "#ff0000"
  };

  const target = {
    x: 100,
    y: 200,
    size: 100,
    fill: "pink"
  };
  
  const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
  };
  
  /**
   * Create the canvas
   */
  function setup() {
    createCanvas(400, 400);
  }
  
  /**
   * Move the user circle, check for overlap, draw the two circles
   */
  function draw() {
    background("#aaaaaa");
    
    // Move user circle
    moveUser();
    
    //move Target 
    moveTarget(user,puck)
    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();

    checkPuck()
  }
  
  /**
   * Sets the user position to the mouse position
   */
  function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
  }
  
  /**
   * Displays the user circle
   */
  function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
  }
  
  /**
   * Displays the puck circle
   */
  function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
  }

  function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
  }
 

function checkPuck(){
    const distance = dist(user.x,user.y,target.x,target.y)
    const mouseIsOverlapping=(distance<user.size/2)
    //const mouseIsMoving = (movedX !==0|| movedY !==0)
    if(mouseIsOverlapping){
        console.log('hi')
        target.fill ="white"
        fill(target.fill)


    }else{
        target.fill = "pink"
    }
}

  function moveTarget(a,b){
   const distance = dist(a.x,a.y,b.x,b.y)
    const mouseIsOverlapping=(distance<a.size/2)
    //const mouseIsMoving = (movedX !==0|| movedY !==0)
    if( mouseIsOverlapping){
        axisX = b.x- a.x
        axisY = b.y +a.y
        puck.y +=(axisX>0?1:-1)
        puck.x += (axisY>0?1:-1)
    
        puck.x = constrain(puck.x,0,400)
        puck.y = constrain(puck.y,0,400)


    }

console.log(distance)
    // console.log(b)
    // console.log(a)

    //     if(a.x==b.x && a.y == b.y){
    //         console.log("overlaps")
    //     }
  }