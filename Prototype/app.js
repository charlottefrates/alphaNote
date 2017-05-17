
//get tinyMCE content
var tinymce = tinymce.activeEditor.val();
console.log(tinymce);


//get drawingboard content
var img = $('default-board');
var imgString = img.toDataURL('image/jpeg',1.0)
console.log(imgString);


//get ChemDoodle content

var ChemDoodle;
