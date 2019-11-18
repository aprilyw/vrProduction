var layer = _.stage.withName("colmap")
layer.vrDefaults()
layer.makeKeyboardCamera()

var PointCloud = Java.type("trace.graphics.PointCloud")
// load a point cloud from a points3D.txt file somewhere
var points = new PointCloud("/Users/aprilwang/Desktop/aprilyw/vrProduction/points3D.txt")

var f = new FLine()
//f.moveTo(0,1)

f.pointed=true
f.pointSize = 0.15

// put the points into the FLine
points.toFLine(f)

layer.lines.f = f
//layer.layerIsDone=true

_.stage.frame()

