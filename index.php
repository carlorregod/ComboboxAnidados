<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Combobox</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>	
    <h1 class="text-danger mt-3 mb-5 mx-3">Combobox anidados de países-ciudades</h1>
    <table class="table table-hover mx-5" style="width:60%;">
        <tbody>
            <tr>
                <td><strong>Ingresar país</strong></td>
                <td>
                    <select id="comboboxpais" class="custom-select"></select>
                </td>
            </tr>
            <tr>
                <td><strong>Ingresar ciudad</strong></td>
                <td>
                    <select id="comboboxciudad" class="custom-select"></select>
                </td>
            </tr>
        </tbody>
    </table>
</body>
<fotter>
	<script
	src="https://code.jquery.com/jquery-3.4.0.js"
	integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
	crossorigin="anonymous"></script>
	<script src="controller-JQ.js"></script>
</fotter>
</html>