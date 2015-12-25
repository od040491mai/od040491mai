$(function() {
	// Validate the contact form
  $('#contactform').validate({
  	// Specify what the errors should look like
  	// when they are dynamically added to the form
  	errorElement: "label",
  	wrapper: "td",
  	errorPlacement: function(error, element) {
  		error.insertBefore( element.parent().parent() );
  		error.wrap("<tr class='error'></tr>");

  	},
  	
  	// Add requirements to each of the fields
  	rules: {
  		name: {
  			required: true,
  			minlength: 2
  		},
  		email: {
  			required: true,
  			email: true
  		},
  		message: {
  			required: true,
  			minlength: 10
  		}
  	},
  	
  	// Specify what error messages to display
  	// when the user does something horrid
  	messages: {
  		name: {
  			required: "Введите пожалуйста ваше имя.",
  			minlength: jQuery.format("Имя должно состоять не меньше, чем из {0} букв.")
  		},
  		email: {
  			required: "Введите пожалуйста ваш email.",
  			email: "Введите пожалуйста правильный email."
  		},
  		message: {
  			required: "Введите пожалуйста ваше сообщение.",
  			minlength: jQuery.format("Сообщение должно состоять не меньше, чем из {0} букв.")
  		}
  	},
  	
  	// Use Ajax to send everything to processForm.php
  	submitHandler: function(form) {
  		$("#send").attr("value", "Отправка...");
  		$(form).ajaxSubmit({
  			success: function(responseText, statusText, xhr, $form) {
  				$(form).slideUp("fast");
  				$("#response").html(responseText).hide().slideDown("fast");
  			}
  		});
  		return false;
  	}
  });
});