var layer = _.stage.withName("layer")
layer.vrDefaults()
layer.makeKeyboardCamera()
layer.bindTriangleShader(_)

var myTriangles = layer.rawTriangles.myTriangles
myTriangles.open()
myTriangles.aux(1,0.3,0.6,0.8,1)
Shapes.sphere(2,15,10, myTriangles)
myTriangles.close()

//var p = new PhysicsSystem()
//var f1 = new Fline()
