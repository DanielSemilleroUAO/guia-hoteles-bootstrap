
$(function(){

		$("[data-toggle='tooltip']").tooltip();
		$("[data-toggle='popover']").popover();
		$('.carousel').carousel({
			interval: 2000
		});
		
		$('#contacto').on('show.bs.modal', function(e){
			console.log('El modal se esta mostrando');
			$('#contactoBtn').removeClass('btn-success');
			$('#contactoBtn').prop('disabled', true);
		});
		$('#contacto').on('shown.bs.modal', function(e){
			console.log('El modal se oculto');
		});
		$('#contacto').on('hide.bs.modal', function(e){
			console.log('El modal se oculto');
		});
		$('#contacto').on('hidden.bs.modal', function(e){
			console.log('El modal se termino de ocultar');
			
			$('#contactoBtn').addClass('btn-success');
			$('#contactoBtn').prop('disabled', false);
		});
	});
