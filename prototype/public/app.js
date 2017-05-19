$(document).ready(function(){

     //get tinyMCE content
     $("#get-data-form").submit(function(){
          console.log('tinyMCE captured');
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
     console.log('ChemDoodle captured');
     //counts the number of atoms
     var mol = sketcher.getMolecule();
     console.log(mol);
     //generates MOlfile
     var molFile = ChemDoodle.writeMOL(mol);
     console.log(molFile);
     //var image = mol.toDataURL('image/jpeg',1.0);
     //console.log('sketcher image captured');
     $("#data-container-3").html(mol);
     $("#data-container-3").html(molFile);
});
