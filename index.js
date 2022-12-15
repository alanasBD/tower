let first = 
`<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
    <div style="margin-top:130px">  
        <div class="disk1" id="disk1" onclick="diskInfo(event)"></div>
    </div>
    <div  style="margin-top:-40px">
        <div class="disk2"  id="disk2" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
         <div class="disk3"  id="disk3" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk4"  id="disk4"  onclick="diskInfo(event)"></div>
    </div>
  </div>
</div>

<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower"></div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower"></div>
</div>`;


let second = 
`<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
    <div style="margin-top:130px">  
        <div class="disk1" id="disk1" onclick="diskInfo(event)"></div>
    </div>
    <div  style="margin-top:-40px">
        <div class="disk2"  id="disk2" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
         <div class="disk3"  id="disk3" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk4"  id="disk4"  onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk5"  id="disk5" onclick="diskInfo(event)"></div>
    </div>
  </div>
</div>

<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower"></div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower"></div>
</div>`;


let third = 
`<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
    <div style="margin-top:130px">  
        <div class="disk1" id="disk1" onclick="diskInfo(event)"></div>
    </div>
    <div  style="margin-top:-40px">
        <div class="disk2"  id="disk2" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
         <div class="disk3"  id="disk3" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk4"  id="disk4"  onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk5"  id="disk5" onclick="diskInfo(event)"></div>
    </div>
    <div style="margin-top:-40px">
        <div class="disk6"  id="disk6" onclick="diskInfo(event)"></div>
    </div>
  </div>
</div>



<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower"></div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower"></div>
</div>`;

//start from here

let tower = 
[
  [10,11,12],
  [],
  []
];
let newTower = [[],[],[]];
let orginalDisks = ["disk1","disk2","disk3"];


let move = 0;
let disk = 12;

let n =3;



// disk1 = 10;
// disk2 = 11;
// disk3 = 12;
// disk4 = 13;
// disk5 = 14;
// disk6 = 15;

//select button (4,5,6)


const selectButton = (btn)=>{
  n=btn;
  for(let i=4;i<=n;i++){
    orginalDisks.push("disk"+i);
  }
  
  if(btn === 4){
     tower[0].push(13);
     document.getElementById("btn5").disabled = true;
     document.getElementById("btn6").disabled = true;
     document.getElementById("game").innerHTML = first;

  }
  else if(btn === 5){
    tower[0].push(13,14);
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("game").innerHTML = second;
  }
  else if(btn === 6){
    tower[0].push(13,14,15)
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("game").innerHTML = third;
  }

  if(n===4){
    document.getElementById("score").innerText = localStorage.getItem("scoreForFour");
  }
  else if(n===5){
    document.getElementById("score").innerText = localStorage.getItem("scoreForFive");
  }
  else if(n===6){
    document.getElementById("score").innerText = localStorage.getItem("scoreForSix");
  }


}


//replace Number by disk name

const replaceNumber = () =>{
  for(let i=0;i<3;i++){
    for(let j=0;j<n;j++){
       if(tower[i][j]===10){
         newTower[i][j] = "disk1"
       }
       else if(tower[i][j] === 11){
         newTower[i][j] = "disk2"
       }
       else if(tower[i][j] === 12){
         newTower[i][j] = "disk3"
       }
       else if(tower[i][j] === 13){
         newTower[i][j] = "disk4"
       }
       else if(tower[i][j] === 14){
         newTower[i][j] = "disk5"
       }
       else if(tower[i][j] === 15){
         newTower[i][j] = "disk6"
       }
       else{
         newTower[i][j] = ""
       }
    }
  }
}

//match disks

const playAgain = () =>{
   location.reload();
}

const matchDisks = () =>{
   let matched = JSON.stringify(orginalDisks)===JSON.stringify(newTower[2]);
   let lastScore;
   if(matched){
     if(n===4){
        lastScore = Number(localStorage.getItem("scoreForFour"));
        if(move<lastScore){
          localStorage.setItem("scoreForFour",move);
        }
      }
      else if(n===5){
        lastScore = Number(localStorage.getItem("scoreForFive"));
        if(move<lastScore){
          localStorage.setItem("scoreForFive",move);
        }
      }
      else if(n===6){
        lastScore = Number(localStorage.getItem("scoreForSix"));
        if(move<lastScore){
          localStorage.setItem("scoreForSix",move);
        }
      }
      else if(n===3){
        lastScore = Number(localStorage.getItem("scoreForThree"));
        if(move<lastScore){
          localStorage.setItem("scoreForThree",move);
        }
      }
   

     document.getElementById("score").innerText = move;

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
   for(let j=0;j<n;j++){
      if(tower[i][j] === val){
        return [i,j];
     }
   }
  }
}

// all disks

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
   else if(diskName === "disk4"){
    disk = 13;
   }
   else if(diskName === "disk5"){
    disk = 14;
   }
   else if(diskName === "disk6"){
    disk = 15;
   }
}


// Tower area 

const  towerArea = () =>{
  let game = document.getElementById("game")
  game.innerHTML =  game.innerHTML = `<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${newTower[0][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${newTower[0][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${newTower[0][2]}" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${newTower[0][3]}"  id="disk4"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
          <div class="${newTower[0][4]}"  id="disk5" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
         <div class="${newTower[0][5]}"  id="disk6" onclick="diskInfo(event)"></div>
      </div>
  </div>
</div>
<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${newTower[1][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${newTower[1][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${newTower[1][2]}" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
         <div class="${newTower[1][3]}"  id="disk4"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
        <div class="${newTower[1][4]}"  id="disk5" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
       <div class="${newTower[1][5]}"  id="disk6" onclick="diskInfo(event)"></div>
      </div>
     
  </div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${newTower[2][0]}" onclick="diskInfo(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${newTower[2][1]}"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${newTower[2][2]}" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
         <div class="${newTower[2][3]}"  id="disk4"  onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
         <div class="${newTower[2][4]}"  id="disk5" onclick="diskInfo(event)"></div>
      </div>
      <div style="margin-top:-40px">
         <div class="${newTower[2][5]}"  id="disk6" onclick="diskInfo(event)"></div>
      </div>
     
  </div>
</div>`
}

//Show move count
const showMove = () =>{
  document.getElementById("move").innerText = move;
}

//First Tower

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

//Second Tower

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
   towerArea();
}




//Third Tower


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


document.getElementById("score").innerText = localStorage.getItem("scoreForThree");



