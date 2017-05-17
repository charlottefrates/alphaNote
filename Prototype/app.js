
//get tinyMCE content
var tinymce = tinymce.activeEditor.getContent();
console.log(tinymce);


//get drawingboard content
var img = $('default-board');
var imgString = img.toDataURL('image/jpeg',1.0)
console.log(imgString);
