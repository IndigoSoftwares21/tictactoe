//Selectng all required elements
const selectBox = document.querySelector(".selectbox"),
SelectX_btn = selectBox.querySelector(".xbtn"),
SelectO_btn = selectBox.querySelector(".obtn"),
oturn = document.querySelector(".oturn"),
xturn = document.querySelector(".xturn"),
totalBoxes = ["0","1","2","3","4","5","6","7","8"],
resultbOX = document.querySelector(".result"),
winner = document.querySelector(".winner"),
random_btn = document.querySelector(".randombtn"),
result_text = document.querySelector(".resulttext"),
playboard = document.querySelector(".playboard");
////////////////////////////////





window.onload = ()=>
{

    

    SelectX_btn.onclick =() =>
    {
        selectBox.style.display = "none";//hide the select box when you click X
        playboard.style.display = "flex"; 
        xturn.classList.add("active");
       }

    SelectO_btn.onclick =() =>
    {
        
        selectBox.style.display = "none";//hide the select box when you click O
        playboard.style.display = "flex"; 
        oturn.classList.add("active");
        
    }
    random_btn.onclick =() =>
    {
        selectFirstPlayer();
        selectBox.style.display = "none";//hide the select box when you click O
        playboard.style.display = "flex"; 
    }

  



}

 function selectFirstPlayer() //THIS SELECTS THE FIRST PLAYER RANDOMLY
 {
   var randomchooser =  Math.floor(Math.random()*2); //Pick a random Number 0 or 1;


   if (randomchooser==0) {
         xturn.classList.add("active"); //If number is 0 then X PLAYS FIRST
   }


   if (randomchooser==1) {
        oturn.classList.add("active"); //If number is 1 then 0 Plays First
   }

 }



 //PLAYER CLICK FUNCTION

 function boxclick(element)
 {
    if(xturn.classList.contains("active"))
    {
        element.innerHTML = "X"
        xturn.classList.remove("active");
        oturn.classList.add("active");
      //  allBoxes.splice(parseInt(element.id),1);
       
      //  alert(allBoxes);
      totalBoxes[parseInt(element.id)] = "X"
     // alert(totalBoxes)
      
    }

   else
    {
        element.innerHTML = "O"
        
        oturn.classList.remove("active");
        xturn.classList.add("active");
        
       // allBoxes.splice(parseInt(element.id),1);
      

      // alert(allBoxes);

      totalBoxes[parseInt(element.id)] = "O"
      //alert(totalBoxes)
     // checkwin();
    }

    element.style.pointerEvents = "none"; //Once user has selected a box he cant select again
    checkwin(); //THIS CHECKS IF A PLAYER WON THE GAME
 }
 
 

 


 function checkwin() {
    //HORIZONTALS
    if ( //THIS CHEKS IF THE X'S ARE IN POSITION OF WINNING
    totalBoxes[0]=="X"&&totalBoxes[1]=="X"&&totalBoxes[2]=="X"
    ||
    totalBoxes[3]=="X"&&totalBoxes[4]=="X"&&totalBoxes[5]=="X"
    ||
    totalBoxes[6]=="X"&&totalBoxes[7]=="X"&&totalBoxes[8]=="X"
    //DIAGONALS
    ||
    totalBoxes[2]=="X"&&totalBoxes[4]=="X"&&totalBoxes[6]=="X"
    ||
    totalBoxes[0]=="X"&&totalBoxes[4]=="X"&&totalBoxes[8]=="X"
    ||
    //VERTICALS
    totalBoxes[0]=="X"&&totalBoxes[3]=="X"&&totalBoxes[6]=="X"
    ||
    totalBoxes[1]=="X"&&totalBoxes[4]=="X"&&totalBoxes[7]=="X"
    ||
    totalBoxes[2]=="X"&&totalBoxes[5]=="X"&&totalBoxes[8]=="X")
    {
        setTimeout(xwins, 350) //Calls the function that x wins after 0.15seconds
      //  alert("x wins")
        
    }

    else if ( //THIS CHEKS IF THE O'S ARE IN POSITION OF WINNING
         //HORIZONTALS
        totalBoxes[0]=="O"&&totalBoxes[1]=="O"&&totalBoxes[2]=="O"
        ||
        totalBoxes[3]=="O"&&totalBoxes[4]=="O"&&totalBoxes[5]=="O"
        ||
        totalBoxes[6]=="O"&&totalBoxes[7]=="O"&&totalBoxes[8]=="O"
        //DIAGONALS
        ||
        totalBoxes[2]=="O"&&totalBoxes[4]=="O"&&totalBoxes[6]=="O"
        ||
        totalBoxes[0]=="O"&&totalBoxes[4]=="O"&&totalBoxes[8]=="O"
        ||
        //VERTICALS
        totalBoxes[0]=="O"&&totalBoxes[3]=="O"&&totalBoxes[6]=="O"
        ||
        totalBoxes[1]=="O"&&totalBoxes[4]=="O"&&totalBoxes[7]=="O"
        ||
        totalBoxes[2]=="O"&&totalBoxes[5]=="O"&&totalBoxes[8]=="O"

    ) 
    {
        setTimeout(owins, 350) //Calls the function that o wins after 0.15seconds
       // alert("O wins")
       
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
    playboard.style.display = "none"; 
    resultbOX.style.display = "flex"
    winner.innerHTML = "X"
 }
 function owins()
 {
    playboard.style.display = "none"; 
    resultbOX.style.display = "flex"
    winner.innerHTML = "O"
 }

 function draw()
 {
    result_text.innerHTML = "Nobody Won!"
    playboard.style.display = "none"; 
    resultbOX.style.display = "flex"
 }







 /*else 
      if(
          (totalBoxes[0]!="X"&&totalBoxes[1]!="X"&&totalBoxes[2]!="X"
        &&
        totalBoxes[3]!="X"&&totalBoxes[4]!="X"&&totalBoxes[5]!="X"
        &&
        totalBoxes[6]!="X"&&totalBoxes[7]!="X"&&totalBoxes[8]!="X") 

        &&

        (totalBoxes[0]!="O"&&totalBoxes[1]!="O"&&totalBoxes[2]!="O"
        &&
        totalBoxes[3]!="O"&&totalBoxes[4]!="O"&&totalBoxes[5]!="O"
        &&
        totalBoxes[6]!="O"&&totalBoxes[7]!="O"&&totalBoxes[8]!="O") 


        ) 
        {
            result_text.innerHTML = "Nobody Won!"
            playboard.style.display = "none"; 
            resultbOX.style.display = "flex"
        }
       */