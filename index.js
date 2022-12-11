let tower = 
[
  [10,11,12],
  [],
  []
];



// disk1 = 10;
// disk2 = 11;
// disk3 = 12;


let disk = 12;

// all disks

function disk1(event){
  const diskOne = 10;

  if(diskOne >= disk){
    disk = diskOne;
  }
  
  console.log(disk);
  event.stopPropagation();

}

function disk2(event){
  const diskTwo = 11

  if(diskTwo >= disk){
    disk = diskTwo;
  }
  console.log(disk);
  event.stopPropagation();
}

function disk3(event){
  const  diskThree = 12;

  if(diskThree>= disk){
     disk = diskThree
  }
  console.log(disk);

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
   console.log(tower);
   towerArea()
}

const towerAreaTwo = () =>{
   const [area,index] = searchLocation(disk);
   const item = tower[area][index];
   tower[area].pop(item);
   tower[1].push(item);
    console.log(tower);
   towerArea()
}



const towerAreaThree = () =>{
  const [area,index] = searchLocation(disk);
  const item = tower[area][index];
  tower[area].pop(item);
  tower[2].push(item);
  console.log(tower);
  towerArea()
}

