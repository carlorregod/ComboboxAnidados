<?php

require 'conexion.php';
$cmd = $_POST['comando'];

switch ($cmd)
{
    case 'carga_comboboxPais':
        $pgsql = getConnect();
        $query = "SELECT * FROM combobox.Pais";
        $respuesta = $pgsql->prepare($query);
        $respuesta->execute();
        $lista = '<option value="0">Seleccionar Opción</option>';
        while($f = $respuesta->fetchObject())
        {
            $lista .='<option value="'.$f->idpais.'">'.$f->nombrepais.'</option>';
        }
       echo $lista; 
       break;
       
    case 'carga_comboboxCiudad':
        $optPais = $_POST['optPais'];
        $pgsql = getConnect();
        $query = "SELECT * FROM combobox.Ciudad WHERE idpais='$optPais'";
        $respuesta = $pgsql->prepare($query);
        $respuesta->execute();
        $lista = '<option value="0">Seleccionar Opción</option>';
        while($f = $respuesta->fetchObject())
        {
            $lista .='<option value="'.$f->idciudad.'">'.$f->nombreciudad.'</option>';
        }
       echo $lista; 
       break;
       
    default:
        break;
}