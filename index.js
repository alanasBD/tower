let tower = 
[
  [10,11,12],
  [],
  []
];


let orginalDisks = ["disk1","disk2","disk3"];

let move = 0;

// disk1 = 10;
// disk2 = 11;
// disk3 = 12;

let tower2 = [[],[],[]];

//replace Number by disk name

const replaceNumber = () =>{
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){

       if(tower[i][j]===10){
         tower2[i][j] = "disk1"
       }
       else if(tower[i][j] === 11){
         tower2[i][j] = "disk2"
       }
       else if(tower[i][j] === 12){
         tower2[i][j] = "disk3"
       }
       else{
         tower2[i][j] = ""
       }

    }
  }
}

//match disks

const playAgain = () =>{
   location.reload();
}

const matchDisks = () =>{
   let matched = JSON.stringify(orginalDisks)===JSON.stringify(tower2[2]);
   if(matched){

     const lastScore = Number(localStorage.getItem("last-score"));
     if(move < lastScore){
       localStorage.setItem("last-score",move);
       document.getElementById("last-score").innerText = move;
     }

     document.getElementById("game").innerHTML = 
     `<div id="result">
         <h1>Congratulation!Your Score is : ${move}</h1>
         <button onclick="playAgain()">play again</button>
      </div>`
   }
}


// search disk location

const searchLocation =(val)=>{
  for(let i=0;i<3;i++){
   for(let j=0;j<3;j++){
      if(tower[i][j] === val){
        return [i,j];
     }
   }
  }
}




// all disks
let disk = 12;



function diskInfo (event){
   const diskName = event.target.classList[0];
   if(diskName === "disk1"){
     disk = 10;
   }
   else if(diskName === "disk2"){
     disk = 11;
   }
   else if(diskName === "disk3"){
     disk = 12;
   }

}



const  towerArea = () =>{
  let game = document.getElementById("game")
  game.innerHTML =  game.innerHTML = `<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower2[0][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower2[0][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower2[0][2]}" onclick="diskInfo(event)"></div>
      </div>
     
  </div>
</div>
<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower2[1][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower2[1][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower2[1][2]}" onclick="diskInfo(event)"></div>
      </div>
     
  </div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower2[2][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower2[2][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower2[2][2]}" onclick="diskInfo(event)"></div>
      </div>
     
  </div>
</div>`

}


// areas of tower


const showMove = () =>{
  document.getElementById("move").innerText = move;
}

const towerAreaOne = () =>{
   const [area,index] = searchLocation(disk);
  
   
  
   const len = tower[area].length;
   const isLastElement = tower[area][len-1] === disk ? true : false ;

   const lenOfAreaOne = tower[0].length;

   if(isLastElement && !lenOfAreaOne){
    tower[area].pop();
    tower[0].push(disk);
    move++;
    showMove();
  }
  else if(isLastElement && ( disk > tower[0][lenOfAreaOne-1])){
    tower[area].pop();
    tower[0].push(disk);
    move++;
    showMove();
  }

  


   replaceNumber();
   towerArea()
}

const towerAreaTwo = () =>{
   const [area,index] = searchLocation(disk);



   const len = tower[area].length;
   const isLastElement = tower[area][len-1] === disk ? true : false ;

   const lenOfAreaTwo = tower[1].length;

   if(isLastElement && !lenOfAreaTwo){
     tower[area].pop();
     tower[1].push(disk);
     move++;
     showMove();
    }
   else if(isLastElement && ( disk > tower[1][lenOfAreaTwo-1])){
     tower[area].pop();
     tower[1].push(disk);
     move++;
     showMove();
   }
   
   
  

   replaceNumber();
   towerArea()

}



const towerAreaThree = () =>{
  const [area,index] = searchLocation(disk);
  


  const len = tower[area].length;
  const isLastElement = tower[area][len-1] === disk ? true : false ;

  const lenOfAreaThree = tower[2].length;

  if(isLastElement && !lenOfAreaThree){
    tower[area].pop();
    tower[2].push(disk);
    move++;
    showMove();
  
    
  }
  else if(isLastElement && ( disk > tower[2][lenOfAreaThree-1])){
    tower[area].pop();
    tower[2].push(disk);
    move++;
    showMove();

   
   
  }

  replaceNumber();
  towerArea()
  matchDisks();
 
}



document.getElementById("last-score").innerText = localStorage.getItem("last-score");

