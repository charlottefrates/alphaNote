
//get tinyMCE content
var tinyMCE = tinyMCE.activeEditor.selection.getContent({format : 'text'});
console.log(tinyMCE);

//get drawingboard content
var img = $('default-board');
var imgString = img.toDataURL('image/jpeg',1.0)
console.log(imgString);


//get ChemDoodle content

var ChemDoodle;
