

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, 600, 400);

let cw = window.innerWidth;
let ch = window.innerHeight;

canvas.width = cw;
canvas.height = ch;

let frame = 0;

let gradient = ctx.createRadialGradient(cw,ch,cw,ch,cw,ch);
gradient.addColorStop(0,"red");
gradient.addColorStop(0.2,"yellow");
gradient.addColorStop(0.4,"green");
gradient.addColorStop(0.6,"cyan");
gradient.addColorStop(0.8,"blue");
gradient.addColorStop(1,"magenta");


class Luce{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	draw(){
		ctx.beginPath();
		ctx.fillStyle = gradient;
		ctx.fillRect(this.x, this.y, 50 , 50);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

	}
}


let update = ()=>{

	for(let i =0; i<5 ; i++){
		let luce = new Luce(Math.random() * cw * 1.3, Math.random()*ch*1.3);
		luce.draw();
	}

	ctx.fillStyle = "rgba(0,0,0,0.09)";
	ctx.fillRect(0,0,cw,ch);

	requestAnimationFrame(update);
	frame++;

}

update();