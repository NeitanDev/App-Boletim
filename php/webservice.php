<?php
	/* prepara o documento para comunicação com o JSON, as duas linhas a seguir são obrigatórias 
	  para que o PHP saiba que irá se comunicar com o JSON, elas sempre devem estar no ínicio da página */
	header("Cache-Control: no-cache, no-store, must-revalidate"); // limpa o cache
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=utf-8"); 
	
	clearstatcache(); // limpa o cache
        // Dados do servidor de banco de Dados, neste exemplo uso Hostinger.
	$servidor = 'localhost';
	$usuario  = 'aluno';
	$senha    = 'etec@147';
	$banco    = 'aluno_3I_Neitan_Boletim';

	try {
		$conecta = new PDO("mysql:host=$servidor;dbname=$banco", $usuario , $senha);
		$conecta->exec("set names utf8"); //permite caracteres latinos.
		$consulta = $conecta->prepare('SELECT * FROM aluno_3I_Neitan_Boletim');
		$consulta->execute(array());
		$resultadoDaConsulta = $consulta->fetchAll();
		$json = json_encode($resultadoDaConsulta);
	        echo($json);
   
} catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage(); // opcional, apenas para teste
}
?>