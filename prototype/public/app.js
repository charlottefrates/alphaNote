$(document).ready(function(){

     //get tinyMCE content
     $("#get-data-form").submit(function(){

          var content = tinymce.get("texteditor").getContent();
          console.log("tinyMCE data grabbed");
          $("#data-container").html(content);
          return false;
     });


});

//loads chemDoodle plugin
var sketcher = new ChemDoodle.SketcherCanvas('sketcher', 500, 300, {useServices:true, oneMolecule:true});

//get chemDoodle content
$('#sketch_submit').on('click',function(){
     console.log('clicked submit');
     var mol = sketcher.getMolecule();
     console.log(mol);
     var image = mol.toDataURL('image/jpeg',1.0);
     console.log('sketcher image captured');
     $("#data-container-3").html(image);
});
