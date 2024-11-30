<?

if(isset($_POST["type"]) && isset($_POST["name"]) && isset($_POST["phone"])){
    $subject = "Заявка";
    $to  = "shalyaevvs@gmail.com";      
    $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
    $fromMail = 'info@vseperegovory.com';
    $fromName = 'vseperegovory.com';
    $date = date(DATE_RFC2822);
    $messageId='<'.time().'-'.md5($fromMail.$to).'@'.$_SERVER['SERVER_NAME'].'>';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8". "\r\n";
    $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";
    $headers .= "Date: ". $date ." \r\n";
    $headers .= "Message-ID: ". $messageId ." \r\n";

    $message = "Заявка: {$_POST["type"]} \r\n 
    Имя: {$_POST["name"]} \r\n 
    Телефон: {$_POST["phone"]}";

    var_dump(mail($to, $subject, $message, $headers)); 
}