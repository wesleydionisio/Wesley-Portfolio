<?php error_reporting(0); ?>

<?php
if ( ($_POST['name']!="") && ($_POST['email']!="")){
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = "contato@wesleydionisio.dev.br";
$subject = "Novo formulário recebido no site!";
$message = "<p>Contato recebido de: $name.</p>
<p>$message</p><br>WhatsApp: $phone";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <".$email.">" . "\r\n";
$sent = mail($to,$subject,$message,$headers);
if($sent){
	echo "Seu contato foi enviado com sucesso, responderei o mais breve possível!";
}
else{
	echo "Ops, houve um erro ao enviar o formulário :( Tente novamente mais tarde, ou envie um Whats!";
	}
}
?>