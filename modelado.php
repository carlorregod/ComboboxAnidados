<?php

require 'conexion.php';

class Capsula
{
    public function __construct($cmd, $optPais)
    {
        $this->cmd = $cmd;
        $this->optPais = $optPais;
    }
    
    private function _opciones()
    {
        switch ($this->cmd)
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
               return $lista; 

            case 'carga_comboboxCiudad':
                $pgsql = getConnect();
                $query = "SELECT * FROM combobox.Ciudad WHERE idpais='$this->optPais'";
                $respuesta = $pgsql->prepare($query);
                $respuesta->execute();
                $lista = '<option value="0">Seleccionar Opción</option>';
                while($f = $respuesta->fetchObject())
                {
                    $lista .='<option value="'.$f->idciudad.'">'.$f->nombreciudad.'</option>';
                }
               return $lista; 

            default:
                return;
        }
    }
    
    public function opciones()
    {
        return $this->_opciones();
    }
}

$cmd = $_POST['comando'];
$optPais = $_POST['optPais'];
$caps = new Capsula($cmd, $optPais);
echo $caps->opciones();
