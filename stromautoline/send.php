<?php
// Проверяем, были ли отправлены данные методом POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы, используя $_POST
    $name = htmlspecialchars(strip_tags(trim($_POST['user_name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['user_email'])));
    $phone = htmlspecialchars(strip_tags(trim($_POST['user_phone'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['user_message'])));

    // Адрес получателя
    $to = "dimonsin73@gmail.com";

    // Тема письма
    $subject = "Новое сообщение с формы обратной связи";

    // Содержание письма
    $email_body = "Имя: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Телефон: $phone\n\n";
    $email_body .= "Сообщение:\n$message\n";

    // Заголовки письма
    // Указываем от кого отправлено письмо, чтобы получатель мог ответить
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправляем письмо с помощью функции mail()
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз или свяжитесь с администратором хостинга.";
    }

} else {
    // Если запрос не был POST, перенаправляем обратно на форму
    header("Location: index.html");
    exit();
}
?>
