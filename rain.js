var layer = _.stage.withName("rain")
layer.vrDefaults()
layer.makeKeyboardCamera()

var rainDirection = vec(0,-0.05,0)

function draw_rain(num) {
	var droplets = []

	for(var i=0;i<num;i++) {
		droplets.push(vec(Math.random(),Math.random(),Math.random()))
	}

	var f = new FLine()	
	f.color = vec(1,1,1,1)
	
	for(i=0;i<num;i++){
		f.moveTo(droplets[i])
		f.lineTo(droplets[i]+rainDirection)
	}
	
	layer.lines.f = f

	for(i=0;i<num; i++) {
		droplets[i] = droplets[i] + rainDirection
		if (droplets[i].y<0){
			droplets[i] = vec(Math.random(),Math.random(),Math.random())
		}
	}

}


while(true) {
	draw_rain(30)
	_.stage.frame()
}

