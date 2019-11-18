var layer = _.stage.withName("ply")
layer.vrDefaults()
//layer.makeKeyboardCamera()

var myTriangles = layer.rawTriangles.myTriangles
var PlyReaderToMesh = Java.type("trace.graphics.PlyReaderToMesh")
myTriangles.open()
new PlyReaderToMesh().load("/Users/aprilwang/Desktop/meshed-poisson.ply")
myTriangles.close()


