var Capsula = function() {
    //Privatización de métodos
    _ajaxCallback = function(params, method, url, callback, asynchr=true )
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
    
    _callback_cmbPais = function(data) {
        $('#comboboxpais').html(data);
        $('#comboboxciudad').html('<option value="0">Seleccionar Opción</option>');
    };
    
    _callback_cmbCiudad = function(data) {
        $('#comboboxciudad').html(data);
    };
       
    //Publicos
    this.ajaxCallback = function(params, method, url, callback, asynchr ) {
        return _ajaxCallback(params, method, url, callback, asynchr);
    };
    
    this.callback_cmbPais = function(data) {
        return _callback_cmbPais(data);
    };
    
    this.callback_cmbCiudad = function(data) {
        return _callback_cmbCiudad(data);
    };
    
    _inicial = function() {
        params = {
          'comando':'carga_comboboxPais'  
        };
        method = 'POST';
        url = 'modelado.php';
        _ajaxCallback(params, method, url, _callback_cmbPais);
    };
    
    _seg_combobox = function() {
        seleccionado = $('#comboboxpais').val();
        params = {
            'comando': 'carga_comboboxCiudad',
            'optPais': seleccionado
        };
        method = 'POST';
        url = 'modelado.php';
        _ajaxCallback(params, method, url, _callback_cmbCiudad);
    };
    
    this.inicial = function() {
        return _inicial();
    };
    
    this.seg_combobox = function() {
        return _seg_combobox();
    };
    
};

caps = new Capsula();


$(document).ready(caps.inicial);

$('#comboboxpais').on('change', caps.seg_combobox);


