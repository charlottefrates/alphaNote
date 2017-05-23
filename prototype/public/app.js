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


//Chemwriter get mol content

var molFile;

$('#button').on('click',function(){
     var content = chemwriter.components['editor'].getMolfile();
     console.log('chemical structure captured:' + content);
     $("#data-container-4").html(content);

     //update molFile global variable
     molFile = content;

     //changing molFile string
     // replace(whatyour suppose to find , value to replace)
     molFile.replace(/(\r|\n)/g,"+");

     console.log(typeof molFile);

});

//ChemWriter clear

$('#clearChem').on('click',function(){
     console.log('clearing editor');
});


//ChemWriter reRender molFile
//create custom attribute "data-chemwriter-data= molFile ""
//$('#editor').attr( 'data-chemwriter-data', molFile );

$('#reRenderChem').on('click',function(){
     console.log('reRendering editor');
     $('#editor').attr('data-chemwriter-data', "[NO NAME]\n  CHEMW2  02061315242D                              \nCreated with ChemWriter - http://chemwriter.com\n 12 12  0  0  1  0            999 V2000\n    5.6944   -5.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5605   -6.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    7.4265   -5.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    7.4265   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5605   -4.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.6944   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.2925   -4.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    9.1585   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.0246   -4.0278    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n    8.2925   -3.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n    4.8284   -4.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n    4.8284   -6.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  2  3  1  0  0  0  0\n  3  4  2  0  0  0  0\n  4  5  1  0  0  0  0\n  5  6  2  0  0  0  0\n  6  1  1  0  0  0  0\n  4  7  1  0  0  0  0\n  7  8  1  0  0  0  0\n  8  9  1  0  0  0  0\n  7 10  1  4  0  0  0\n  6 11  1  0  0  0  0\n  1 12  1  0  0  0  0\nM  END\n");

});


/*
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


     $("#data-container-3").html(molFile);
     //$("#data-container-3").html(molecule);

});

//reRender ChemDoodle content
$('#reRender').on('click', function(){
     console.log('reRendering molecule molFile');
     ChemDoodle.readMOL(molecule);
});

*/

$('document').ready(function(){
     $('#editor').attr('data-chemwriter-data', "[NO NAME]\n  CHEMW2  02061315242D                              \nCreated with ChemWriter - http://chemwriter.com\n 12 12  0  0  1  0            999 V2000\n    5.6944   -5.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5605   -6.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    7.4265   -5.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    7.4265   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    6.5605   -4.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    5.6944   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    8.2925   -4.0278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    9.1585   -4.5278    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   10.0246   -4.0278    0.0000 N   0  0  0  0  0  0  0  0  0  0  0  0\n    8.2925   -3.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n    4.8284   -4.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n    4.8284   -6.0278    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0\n  1  2  2  0  0  0  0\n  2  3  1  0  0  0  0\n  3  4  2  0  0  0  0\n  4  5  1  0  0  0  0\n  5  6  2  0  0  0  0\n  6  1  1  0  0  0  0\n  4  7  1  0  0  0  0\n  7  8  1  0  0  0  0\n  8  9  1  0  0  0  0\n  7 10  1  4  0  0  0\n  6 11  1  0  0  0  0\n  1 12  1  0  0  0  0\nM  END\n");

     
});
