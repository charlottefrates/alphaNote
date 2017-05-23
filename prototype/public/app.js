/* ================================== TINYMCE ================================== */

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

/* ================================== CHEMWRITER ================================== */

//Chemwriter get mol content
var molFile;

$('#button').on('click',function(){
     //grabs drawn molecule and generates molfile while also replacing new line characters with \n
     var content = chemwriter.components['editor'].getMolfile();
     $("#data-container-4").html(content);

     //content.replace(/\r?\n/gm, '\\n');
     //update molFile global variable
     molFile = content;

     console.log(molFile);

});

//ChemWriter clear
$('#clearChem').on('click',function(){
     console.log('clearing editor');
});


//ChemWriter reRender molFile
$('#reRenderChem').on('click',function(){
     console.log('reRendering editor');

     chemwriter.components['editor'].setMolfile(molFile);

});
