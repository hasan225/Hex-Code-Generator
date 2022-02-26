function ColorGenerate (){

const btn =document.querySelector(".btn")
const output =document.querySelector(".output")

let HexCodes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
console.log(HexCodes.length)

let Hash ='#';

 for(let i=0; i<6; i++){
     let RanNum =Math.round(Math.random() * 15) // 7
     Numbers = HexCodes[RanNum];   // HexCodes[7] == 6
     let ColorCode = Hash +=Numbers
     
    document.querySelector('body').style.background=ColorCode
     output.textContent=ColorCode
 };

}
ColorGenerate()
