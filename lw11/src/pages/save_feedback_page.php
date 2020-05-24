<?php

function saveFeedbackPage(): void
{
    $userData['username'] = getPostParameter('username');
    $userData['email'] = getPostParameter('email');
    $userData['from'] = getPostParameter('from');
    $userData['gender'] = getPostParameter('gender');
    $userData['message'] = getPostParameter('message');
    
    $args = validateUserData($userData);
    if ($args['isValidate'] === true)
    {
        //данные корректны - сохранение анкеты
        saveFeedback($userData); //updateProfileFile($userData['email'], $userData);
        $status = 1;
        $message = 'Сообщение отправлено!';
        $valuesBefore = [];
        $args['errorFields'] = [];
    }
    else
    {
        $status = 0;
        $message = 'Заполните корректно поля:';
        $valuesBefore = $userData;
    }
    mainPage(array('status' => $status, 'errorFields' => $args['errorFields'], 'message' => $message, 'valuesBefore' => $valuesBefore));
}