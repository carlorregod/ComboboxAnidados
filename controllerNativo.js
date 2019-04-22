var Capsula = function() {
    //Privatización de métodos
    //AJAX
    _ajaxCallback = function(params, method, url, callback, asynchr=true )
    {
        var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) 
                {
                        var resp = xhttp.responseText;
                        //var respJson = JSON.parse(resp);
                        callback(resp);
                }
                else
                {
                        //console.log("xhr ha fallado...");
                }
        };
        xhttp.open(method, url, asynchr);    // Tipo de comunicacion
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);  // envio de http
        console.log("Enviando peticion al servidor...");
        return false;
    };
    //Callbacks de respuesta
    _callback_cmbPais = function(data) {
        document.getElementById('comboboxpais').innerHTML=data;
        document.getElementById('comboboxciudad').innerHTML= '<option value="0">Seleccionar Opción</option>';
    };
    
    _callback_cmbCiudad = function(data) {
        document.getElementById('comboboxciudad').innerHTML=data;
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
        params='&comando=carga_comboboxPais';
        method = 'POST';
        url = 'modelado.php';
        _ajaxCallback(params, method, url, _callback_cmbPais);
    };
    
    _seg_combobox = function() {
        seleccionado = document.getElementById('comboboxpais').value;
          params = '&comando=carga_comboboxCiudad'+
                  '&optPais='   +seleccionado;
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
//Crear objeto de métodos encapsulados
caps = new Capsula();
//Envento carga página
window.onload =caps.inicial;
//Cambios en combobox país
document.getElementById('comboboxpais').onchange = caps.seg_combobox;