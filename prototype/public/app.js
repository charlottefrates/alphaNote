//get tinyMCE content
var t_content;

$("#saveT").on('click',function(){
     console.log('tinyMCE captured');
     var content = tinymce.get("texteditor").getContent();
     console.log("tinyMCE data grabbed and save to t_content");
     t_content = content;
     console.log(t_content);
     $("#data-container").html(content);
     return false;
     });


//clear tinyMCE content
$('#clearT').on('click',function(){
     console.log('clearing tinyMCE content');
     tinyMCE.get('texteditor').setContent('');
});

//reRender tinyMCE content
$('#reRenderT').on('click',function(){
     console.log('reRendering tinyMCE content with previous save');
     tinymce.get("texteditor").setContent(t_content);
});





//loads chemDoodle plugin
var sketcher = new ChemDoodle.SketcherCanvas('sketcher', 500, 300, {useServices:true, oneMolecule:true});

//get chemDoodle content

var molecule;

$('#sketch_submit').on('click',function(){
     console.log('ChemDoodle captured');
     //counts the number of atoms
     var mol = sketcher.getMolecule();
     console.log(mol);

     //generates MOlfile
     var molFile = ChemDoodle.writeMOL(mol);
     console.log(molFile);

     //updates molecule global variable
     molecule = molFile;

     console.log ("molecule global variable has been updated to: " + molecule);

     /*
     //view canvas as an image
     var viewACS = new ChemDoodle.ViewerCanvas('viewACS', 100, 100);
       viewACS.specs.bonds_width_2D = .6;
       viewACS.specs.bonds_saturationWidth_2D = .18;
       viewACS.specs.bonds_hashSpacing_2D = 2.5;
       viewACS.specs.atoms_font_size_2D = 10;
       viewACS.specs.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
       viewACS.specs.atoms_displayTerminalCarbonLabels_2D = true;
       var molecule = ChemDoodle.readMOL(molFile);
      viewACS.loadMolecule(molecule);
      */

     $("#data-container-3").html(mol);
     $("#data-container-3").html(molFile);
     //$("#data-container-3").html(molecule);

});

//reRender ChemDoodle content
$('#reRender').on('click', function(){
     console.log('reRendering molecule molFile');
     ChemDoodle.readMOL(molecule);
});
