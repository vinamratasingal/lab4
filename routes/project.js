exports.viewProject = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The project name is: " + name);
  var image = req.params.image; 
  console.log("The image is: "+ image); 
  res.render('project', {
  	'projectName' : name, 
  	'description' : "Description goes here", 
  	'image': image
  });
};