$(document).ready(function(){

     //get tinyMCE content
     $("#get-data-form").submit(function(){

          var content = tinymce.get("texteditor").getContent();
          console.log("tinyMCE data grabbed");
          $("#data-container").html(content);
          return false;
     });

     /*
     //get drawingboard content
     var img = $('default-board');
     var imgString = img.toDataURL('image/jpeg',1.0)
     console.log(imgString);


     //get ChemDoodle content

     var ChemDoodle;
     */



});
