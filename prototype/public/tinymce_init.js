tinymce.init({
     /* replace textarea having class .tinymce with tinymce editor */
     selector: 'textarea.tinymce',
     width: 1000,
	height: 500,
	  menubar: false,
	  plugins: [
	    'advlist autolink lists link image charmap print preview anchor',
	    'searchreplace wordcount visualblocks code fullscreen insertdatetime media nonbreaking',
	    'insertdatetime media table contextmenu paste code'
	  ],
	  toolbar: 'undo redo| styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
});
