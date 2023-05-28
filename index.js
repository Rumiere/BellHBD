const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = 1500
canvas.height = 700

const hbd = new Image()
hbd.src = './b.png'

const img = new Image()
img.src = './d1.png'

const img2 = new Image()
img2.src = './180.png'

const img3 = new Image()
img3.src = './10.png'


const p = new Image()
p.src = './80.png'

const c1 = new Image()

const b = new Image()
const y = new Image()
const gg = new Image()
const j = new Image()
const p1 = new Image()
const f1 = new Image()
const f2 = new Image()

const a1 = new Image()
a1.src = './a1.png'
const a2 = new Image()
a2.src = './a2.png'
const a3 = new Image()
a3.src = './a3.png'
const a4 = new Image()
a4.src = './a4.png'
const a5 = new Image()
a5.src = './a5.png'
const bell = new Image()
bell.src = './bell.png'
const candle = new Image()
const fire = new Image()
fire.src = './Firework.png'





let x = 30
let cool = 0


let r = 256
let r2 = 256
let r21 = 768
let r22 = 768
let r31 = 256
let r32 = 1024

let w = 320
let k = 0
let g = 0
let h = 2
let o = 1000

let cake = 224
let x1 = 40
let fi = 0
let gi = 0
let ov = 0



function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.drawImage(img2,g,0)
    c.drawImage(img2,img2.width+g,0)
    c.drawImage(f1,0,0)
    c.drawImage(f2,0,0)
    
    c.drawImage(img,k,0)
    c.drawImage(img,img.width+k,0)
    c.drawImage(img,img.width*2+k,0)
    c.drawImage(img,img.width*3+k,0)
    document.getElementById(f)
    
     
    k-=2
    g-=1
    
     
    c.drawImage(
        p,
        w-320,
        0,
        p.width/4,
        p.height,
        600,
        240,
        p.width/4,
        p.height )
        
        c.drawImage(b,370,237)
        c.drawImage(y,200,237)
        c.drawImage(gg,1100,237)
        c.drawImage(p1,850,237)
        c.drawImage(j,40,237)
        c.drawImage(candle,600,400)
        if(ov<=1550){
        c.drawImage(
            c1,
            cake-224,
            0,
            c1.width/12,
            c1.height,
            650,
            50,
            c1.width/12,
            c1.height )
         
        
        }
            
            else{
            c.drawImage(bell,450,95)}
            
           
        
        
    
        if(g<=-img2.width*2){
            w = 640
            c.drawImage(img3,o,300)
            cool += 1
            
            fi = 0
            if(cool%x1 == 0 ){
                cake += 224
            }
            if(cake>=224*12){
                c1.src=''
                fi = 1
            }
            if(cool%x == 0 ){
                r += 256
                r21 += 256
                r31 += 256
            }

            if(fi ==1&& gi ==1){
                ov+=1
                f1.src = './180.png'
                f2.src = './d1.png'
                c.drawImage(
                    fire,
                    r-256,
                    r2-256,
                    fire.width/6,
                    fire.height/5,
                    0,
                    0,
                    fire.width/6,
                    fire.height/5 )
                    
                
                c.drawImage(
                        fire,
                        r21-256,
                        r22-256,
                        fire.width/6,
                        fire.height/5,
                        1000,
                        0,
                        fire.width/6,
                        fire.height/5 )

                        c.drawImage(
                            fire,
                            r31-256,
                            r32-256,
                            fire.width/6,
                            fire.height/5,
                            300,
                            40,
                            fire.width/6,
                            fire.height/5 )

                            c.drawImage(
                                fire,
                                r-256,
                                r2-256,
                                fire.width/6,
                                fire.height/5,
                                1300,
                                10,
                                fire.width/6,
                                fire.height/5 )
                        
                    
                c.drawImage(hbd,400,-120)
                if(r>=256*6){
                    r=256
                    r2+=256
                }
                if(r2>=256*5){
                    r2 = 256
                }

                if(r21>=256*6){
                    r21=256
                    r22+=256
                }
                if(r22>=256*5){
                    r22 = 256
                }
                if(r31>=256*6){
                    r31=256
                    r32+=256
                }
                if(r32>=256*5){
                    r32 = 256
                }
                if(ov>=200&&ov<=450){
                    c.drawImage(a1,80,145)

                }
                if(ov>=450&&ov<=700){
                    c.drawImage(a2,240,105)

                }
                if(ov>=700&&ov<=950){
                    c.drawImage(a3,400,105)

                }
                if(ov>=950&&ov<=1200){
                    c.drawImage(a4,880,105)

                }
                if(ov>=1200&&ov<=1450){
                    c.drawImage(a5,1050,105)

                }
            }
            if(o==1000){
            document.getElementById('id').style.visibility = 'inherit'
            
        }
            
        

        }
        else{
            c.drawImage(img3,img2.width*2+1000+g,300)
            document.getElementById('id').style.visibility = 'hidden'
            document.getElementById('id1').style.visibility = 'hidden'
            document.getElementById('id2').style.visibility = 'hidden'
          cool+=1
        
        
          if(cool%x == 0 ){
            w += 320
        }
        if(w>=320*4){
            w=320
        }
    
    }
   
}

function f (){
    b.src = './bl.png'
    y.src = './y.png'
    p1.src = './p.png'
    j.src = './j.png'
    gg.src = './g.png'
    document.getElementById('id1').style.visibility = 'inherit'
    document.getElementById('id2').style.visibility = 'inherit'
    document.getElementById('id').style.visibility = 'hidden'
    
    o = -1000
}

function g1 (){
    c1.src = './50.png'
    document.getElementById('id1').style.visibility = 'hidden'
    document.getElementById('id2').style.visibility = 'hidden'
    
    cake=224
    cool = 0
    gi = 1
}

  
animate()


