<?php
$model = $_POST['model'];
$quantity = $_POST['quantity'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$mail = $_POST['mail'];

$model = htmlspecialchars($model);
$quantity = htmlspecialchars($quantity);
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$mail = htmlspecialchars($mail);

$model = urldecode($model);
$quantity = urldecode($quantity);
$name = urldecode($name);
$tel = urldecode($tel);
$mail = urldecode($mail);

$model = trim($model);
$quantity = trim($quantity);
$name = trim($name);
$tel = trim($tel);
$mail = trim($mail);

if (mail("zmiciersiniuta@gmail.com", "Заявка с сайта", "Модель:".$model.". E-mail: ".$mail ,"From: zmiciersiniuta@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>