ajaxCallback = function(params, method, url, callback, asynchr=true )
{
        $.ajax({
                asynchr: asynchr,
                method: method,
                url: url,
                data: params
                //dataType: 'mycustomtype'
        })
        .done(function(respuesta) {
                callback(respuesta);
        })
        .fail(function() {
                console.log('Ha fallado...');
        });
        return false;
};

callback_cmbPais = function(data) {
    $('#comboboxpais').html(data);
    $('#comboboxciudad').html('<option value="0">Seleccionar Opción</option>');
};

callback_cmbCiudad = function(data) {
    $('#comboboxciudad').html(data);
};

inicial = function() {
    params = {
      'comando':'carga_comboboxPais'  
    };
    method = 'POST';
    url = 'modelado.php';
    ajaxCallback(params, method, url, callback_cmbPais);
};

function seg_combobox(hola) {
    seleccionado = $('#comboboxpais').val();
    params = {
        'comando': 'carga_comboboxCiudad',
        'optPais': seleccionado
    };
    method = 'POST';
    url = 'modelado.php';
    ajaxCallback(params, method, url, callback_cmbCiudad);
}

$(document).ready(inicial);

$('#comboboxpais').on('change', seg_combobox);


