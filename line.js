var layer = _.stage.withName("rain")
layer.vrDefaults()
layer.makeKeyboardCamera()

var f = new FLine()
f.moveTo(0,0,0)
f.lineTo(1,1,1)
f.color = vec(1,1,1,1)


layer.lines.f = f

_.stage.frame()