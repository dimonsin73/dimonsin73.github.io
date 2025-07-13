<?php
// несколько получателей
$to  = 'zmiciersiniuta@gmail.com'; 

// тема письма
$subject = 'Письмо с моего сайта';

// текст письма
$message = 'Пользователь' . $_POST['name'] . ' отправил вам письмо:<br />' . $_POST['message'] . '<br />
Связяться с ним можно по email <a href="mailto:' . $_POST['email'] . '">' . $_POST['email'] . '</a>'
;

// Для отправки HTML-письма должен быть установлен заголовок Content-type
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

// Дополнительные заголовки
$headers .= 'To: Иван <Ivan@example.com>' . "\r\n"; // Свое имя и email
$headers .= 'From: '  . $_POST['name'] . '<' . $_POST['email'] . '>' . "\r\n";


// Отправляем
mail($to, $subject, $message, $headers);

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

if (mail("zmiciersiniuta@gmail.com", "Заказ с сайта", "Модель:".$model.". E-mail: ".$mail ,"From: zmiciersiniuta@gmail.com \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";

?>

