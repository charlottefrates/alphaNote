//get tinyMCE content
$("#get-data-form").submit(function(){
     console.log('tinyMCE captured');
     var content = tinymce.get("texteditor").getContent();
     console.log("tinyMCE data grabbed");
     console.log(content);
     $("#data-container").html(content);
     return false;
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
     var viewACS = new ChemDoodle.ViewerCanvas('viewACS', 100, 100);
       viewACS.specs.bonds_width_2D = .6;
       viewACS.specs.bonds_saturationWidth_2D = .18;
       viewACS.specs.bonds_hashSpacing_2D = 2.5;
       viewACS.specs.atoms_font_size_2D = 10;
       viewACS.specs.atoms_font_families_2D = ['Helvetica', 'Arial', 'sans-serif'];
       viewACS.specs.atoms_displayTerminalCarbonLabels_2D = true;
       var molecule = ChemDoodle.readMOL(molFile);
       viewACS.loadMolecule(molecule);

     $("#data-container-3").html(mol);
     $("#data-container-3").html(molFile);
});
