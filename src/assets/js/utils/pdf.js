var nombre = 'Ingrid';

$(function() {
    
     $('#cmd').click(function() {
         $('#pdf-cliente').text(nombre);

            var doc = new jsPDF();
            doc.fromHTML($('.container').html(), 15, 15, {
                'width': 170
            });

            doc.save('sample-file.pdf');
        });  
    });