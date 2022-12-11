let tower = 
[
  ["disk1","disk2","disk3"],
  [],
  []
];




let disk = ""

// all disks

function disk1(event){
  
  disk = "disk1";
  console.log(event,tower);
  event.stopPropagation();

}

function disk2(event){
  disk = "disk2";
  console.log(event.target,tower);
  event.stopPropagation();
}

function disk3(event){
  disk = "disk3";
  console.log(event.target,tower);
  event.stopPropagation();
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


const  towerArea = () =>{
  let game = document.getElementById("game")
  game.innerHTML =  game.innerHTML = `<div class="tower-area" id="tower-area1" onclick="towerAreaOne()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower[0][0]}" onclick="disk1(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower[0][1]}"  onclick="disk2(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower[0][2]}" onclick="disk3(event)"></div>
      </div>
     
  </div>
</div>
<div class="tower-area" id="tower-area2" onclick="towerAreaTwo()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower[1][0]}" onclick="disk1(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower[1][1]}"  onclick="disk2(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower[1][2]}" onclick="disk3(event)"></div>
      </div>
     
  </div>
</div>
<div class="tower-area" id="tower-area3" onclick="towerAreaThree()">
  <div class="tower">
      <div style="margin-top:130px">  
          <div class="${tower[2][0]}" onclick="disk1(event)"></div>
      </div>
      <div  style="margin-top:-40px">
          <div class="${tower[2][1]}"  onclick="disk2(event)"></div>
      </div>
      <div style="margin-top:-40px">
           <div class="${tower[2][2]}" onclick="disk3(event)"></div>
      </div>
     
  </div>
</div>`

}


// areas of tower

const towerAreaOne = () =>{
   const [area,index] = searchLocation(disk);
   const item = tower[area][index];
   tower[area].pop(item);
   tower[0].push(item);
  //  console.log(tower);
   towerArea()
}

const towerAreaTwo = () =>{
   const [area,index] = searchLocation(disk);
   const item = tower[area][index];
   tower[area].pop(item);
   tower[1].push(item);
  //  console.log(tower);
   towerArea()
}



const towerAreaThree = () =>{
  const [area,index] = searchLocation(disk);
  const item = tower[area][index];
  tower[area].pop(item);
  tower[2].push(item);
  // console.log(tower);
  towerArea()
}

