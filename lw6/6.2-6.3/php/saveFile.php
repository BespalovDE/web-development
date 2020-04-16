<?php

function getParameter(string $name): ? string
{
    return isset($_POST[$name]) ? (string) $_POST[$name] : null;
}

function getData()
{
    $username = getParameter('username');
    if ($username == null)
    {
        $username = 'anonimus';
    }
    $email = getParameter('email');
    $from = getParameter('from');
    $gender = getParameter('gender');
    $message = getParameter('message');
    $data = "Имя: ${username}\r\nEmal: ${email}\r\nСтрана: ${from}\r\nПол: ${gender}\r\nСообщение: $message";
    if ($email != null && $message != null)
    {
        $form = [
            "data" => $data,
            "email" => $email
        ];
    }
    else
    {
        $form = null;
    }
    return $form;
}

function saveData()
{
    $form = getData();
    if ($form === null)
    {
        echo 'Отсутствует сообщение, либо не указан email!';
        exit('');
    }
    else
    {
        $data = $form['data'];
        $email = $form['email'];
        $file = "../data/" . strtolower($email) . ".txt";
        file_put_contents($file, $data);
        $redirect = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '../Index.php';
        header("Location: $redirect");
        exit('');
    }
}  

saveData();

?>
