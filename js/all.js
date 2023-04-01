// init canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 設定畫布尺寸 (像素)
canvas.width = 400;
canvas.height = 400;

let time = 0
function draw(){
  time++
  // 殘影：用白透明度覆蓋矩形範圍，讓會動的元素有殘影效果  
  // ctx.fillStyle = "rgba(255,255,255,0.2)"
  // ctx.fillRect(0,0,400,400)
  
  // 清除矩形範圍  (x、y、width、height)
  ctx.clearRect(0,0,440,400)
  
  // 繪製格線  
//   ctx.beginPath()
//   for(let i = 0; i < 10; i++){
//     let pos = i * 50
//     // Ｘ軸線    
//     ctx.moveTo(pos,0)
//     ctx.lineTo(pos,400)
//     ctx.fillText(pos,pos,10)
//     // Ｙ軸線    
//     ctx.moveTo(0,pos)
//     ctx.lineTo(400,pos)
//     ctx.fillText(pos,0,pos)
    
//     // 漸層
//     let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
//     gradient.addColorStop("0"," magenta");
//     gradient.addColorStop("0.5", "blue");
//     gradient.addColorStop("1.0", "red");
//     // 填入漸層色
//     ctx.fillStyle = gradient;
//   }
  ctx.strokeStyle = "rgba(0,0,0,0.2)"
  ctx.stroke()
  
  // 地平線
  ctx.beginPath()
    ctx.moveTo(25,350)
    ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()
  
  ctx.fillStyle = "#ed5a2a"
  ctx.fillRect(300,300,50,50)
  ctx.strokeRect(300,300,50,50)

  ctx.beginPath()
    ctx.rect(250,250,50,100)
    ctx.rect(50,300,50,50)
  ctx.fillStyle = "#ffe14f"
  ctx.fill()
  ctx.stroke()
  
  ctx.beginPath()
    ctx.rect(100,250,50,100)
    ctx.rect(200,250,50,100)
  ctx.fillStyle = "#abcddd"
  ctx.fill()
  ctx.stroke()
  
  // 拱門   
  ctx.beginPath()
    ctx.moveTo(100,200)
    ctx.lineTo(250,200)
    ctx.lineTo(250,250)
    ctx.lineTo(200,250)
    ctx.arc(175,250,25,0,Math.PI,true)
    ctx.lineTo(100,250)
    ctx.closePath()
  ctx.fillStyle = "white"
  ctx.fill()
  ctx.stroke()
  
  // 屋頂   
  ctx.beginPath()
    ctx.moveTo(100,200)
    ctx.lineTo(175,150)
    ctx.lineTo(250,200)
    ctx.closePath()
  ctx.fillStyle = "#ed5a2a"
  ctx.fill()
  ctx.stroke()

  // 旗子  
  ctx.beginPath()
    ctx.moveTo(175,150)
    ctx.lineTo(175,100 - mouse.y / 5)
    ctx.lineTo(200,110 - mouse.y / 5 - (time % 5))
    ctx.lineTo(175,120 - mouse.y / 5)
    ctx.closePath()
  ctx.fillStyle = "hsl("+ (mouse.x % 360) + ",50%,50%)"
  ctx.fill()
  ctx.stroke()
  
  // 車子
  let carx = time % 440 - 40;
  ctx.fillStyle = "white"
  ctx.fillRect(carx,325,40,25)
  ctx.strokeRect(carx,325,40,25)
  ctx.beginPath()
    ctx.arc(carx + 10,350,5,0,Math.PI * 2)
    ctx.arc(carx + 30,350,5,0,Math.PI * 2)
    
    ctx.closePath()
  ctx.fillStyle = "black"
  ctx.fill()
  ctx.stroke()
  
  // 滑鼠圓點
  ctx.beginPath()
  ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2)
  ctx.fillStyle = "hsl(" + (mouse.x % 360) + ",50%,50%)"
  ctx.fill()
}

setInterval(draw, 10)

// 滑鼠移動監聽
let mouse = { x: 0, y: 0 }
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.offsetX 
  mouse.y = e.offsetY
})