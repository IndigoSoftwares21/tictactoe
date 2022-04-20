 //Selectng all required elements
const selectBox = document.querySelector(".select-box"),
SelectX_btn = selectBox.querySelector(".playerX"),
SelectO_btn = selectBox.querySelector(".playerO"),
playboard = document.querySelector(".play-board"),
result = document.querySelector(".result"),
winner = document.querySelector(".winner"),
result_text = document.querySelector(".resulttext"),
oturn = document.querySelector(".oturn"),
xturn = document.querySelector(".xturn"),
allBox = document.querySelectorAll("section span"),
selected = "",
players = document.querySelector(".players");




window.onload = ()=>
{

  for (let i = 0; i < allBox.length; i++) {//This check all the boxes
    allBox[i].setAttribute("onclick", "clickedBox(this)");

    
  }
    SelectX_btn.onclick =() => //if x is selected
    {
      selectBox.classList.add("hide");
      playboard.classList.add("show");
      xturn.classList.add("active");
      localStorage.setItem('turn','0');
   }

    SelectO_btn.onclick =() => //if o is selected
    {
        
      selectBox.classList.add("hide");
      playboard.classList.add("show");
      oturn.classList.add("active");
      localStorage.setItem('turn','0');
    }

}

  //Player click function

let playerXIcon = "X"; //seting the player icon
let playerOIcon = "O"; //seting the player icon

function clickedBox(element){ //if we click a box
  
  if (localStorage.getItem('turn')=='0') {
    
    if(xturn.classList.contains("active"))
  {
      element.innerHTML = "X"
      xturn.classList.remove("active");
      oturn.classList.add("active");
    //  allBoxes.splice(parseInt(element.id),1);
     
    }
    else
    {
        element.innerHTML = "O"
        
        oturn.classList.remove("active");
        xturn.classList.add("active");
        
    }
    
    element.style.pointerEvents = "none"; //Once user has selected a box he cant select again
    checkwin(); //THIS CHECKS IF A PLAYER WON THE GAME
    
    let randomDelayTime = ((Math.random()* 1000)+200).toFixed()
    setTimeout(()=>{
      bot();
      localStorage.setItem('turn','0')
    },randomDelayTime); 
    localStorage.setItem('turn','1')
  }
  
  
  
}

/////////////////////////////////Bot click function///////////////////////////////////

function bot() {
 
    let array = []; //creating an empty array to store all the box index
    for (let i = 0; i < allBox.length; i++) {
      if(allBox[i].innerHTML == "")//if the span has no child element
      {
           array.push(i) //insertin the unselected boxes
          //  console.log( i + "  " + "has no child elements");
      }
      
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]
    
     if (array.length > 0) {
      if (xturn.classList.contains("active")) {
      allBox[randomBox].innerHTML = "X"
      xturn.classList.remove("active");
      oturn.classList.add("active");
      }
      else{
        allBox[randomBox].innerHTML = "O"
        oturn.classList.remove("active");
        xturn.classList.add("active");
      }
   
     }
     
     checkwin();
     
     allBox[randomBox].style.pointerEvents = "none";//so th e bot doest play twice
     console.log(array);
  }
 
  




function checkwin() {
  
  //HORIZONTALS
  if ( //THIS CHEKS IF THE X'S ARE IN POSITION OF WINNING
  allBox[0].innerHTML=="X"&&allBox[1].innerHTML=="X"&&allBox[2].innerHTML=="X"
  ||
  allBox[3].innerHTML=="X"&&allBox[4].innerHTML=="X"&&allBox[5].innerHTML=="X"
  ||
  allBox[6].innerHTML=="X"&&allBox[7].innerHTML=="X"&&allBox[8].innerHTML=="X"
  //DIAGONALS
  ||
  allBox[2].innerHTML=="X"&&allBox[4].innerHTML=="X"&&allBox[6].innerHTML=="X"
  ||
  allBox[0]=="X"&&totalBoxes[4]=="X"&&totalBoxes[8]=="X"
  ||
  //VERTICALS
  allBox[0].innerHTML=="X"&&allBox[3].innerHTML=="X"&&allBox[6].innerHTML=="X"
  ||
  allBox[1].innerHTML=="X"&&allBox[4].innerHTML=="X"&&allBox[7].innerHTML=="X"
  ||
  allBox[2].innerHTML=="X"&&allBox[5].innerHTML=="X"&&allBox[8].innerHTML=="X")
  {
      setTimeout(xwins, 350) //Calls the function that x wins after 0.15seconds
    //  alert("x wins")
      
  }

  else if ( //THIS CHEKS IF THE O'S ARE IN POSITION OF WINNING
       //HORIZONTALS
 
  allBox[0].innerHTML=="O"&&allBox[1].innerHTML=="O"&&allBox[2].innerHTML=="O"
  ||
  allBox[3].innerHTML=="O"&&allBox[4].innerHTML=="O"&&allBox[5].innerHTML=="O"
  ||
  allBox[6].innerHTML=="O"&&allBox[7].innerHTML=="O"&&allBox[8].innerHTML=="O"
  //DIAGONALS
  ||
  allBox[2].innerHTML=="O"&&allBox[4].innerHTML=="O"&&allBox[6].innerHTML=="O"
  ||
  allBox[0].innerHTML=="O"&&allBox[4].innerHTML=="O"&&allBox[8].innerHTML=="O"
  ||
  //VERTICALS
  allBox[0].innerHTML=="O"&&allBox[3].innerHTML=="O"&&allBox[6].innerHTML=="O"
  ||
  allBox[1].innerHTML=="O"&&allBox[4].innerHTML=="O"&&allBox[7].innerHTML=="O"
  ||
  allBox[2].innerHTML=="O"&&allBox[5].innerHTML=="O"&&allBox[8].innerHTML=="0")

  
  {
      setTimeout(owins, 350) //Calls the function that o wins after 0.15seconds
      //alert("O wins")
     
  }

  else if (  //THIS CHECKS IF ALL THE BOXES ARE FULL AND DISPLAYS THAT IT WAS A DRAW
    document.getElementById("0").innerHTML.length !=0
    &&
    document.getElementById("1").innerHTML.length !=0
    &&
    document.getElementById("2").innerHTML.length !=0
    &&
    document.getElementById("3").innerHTML.length !=0
    &&
    document.getElementById("4").innerHTML.length !=0
    &&
    document.getElementById("5").innerHTML.length !=0
    &&
    document.getElementById("6").innerHTML.length !=0
    &&
    document.getElementById("7").innerHTML.length !=0
    &&
    document.getElementById("8").innerHTML.length !=0) 
    
    {
      setTimeout(draw, 350) //Calls the function that it was a draw after 0.15seconds


  }
}
function xwins()
 {
    
      playboard.classList.remove("show");
    result.classList.add("show")
    winner.innerHTML = "X"
 }
 function owins()
 {
    playboard.classList.remove("show");
    result.classList.add("show")
    winner.innerHTML = "O"
 }

 function draw()
 {
    result_text.innerHTML = "Nobody Won!"
    playboard.classList.remove("show");
    result.classList.add("show")
 }