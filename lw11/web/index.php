<?php

//подключение "common.inc.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'common.inc.php');

if (getRequestMethod() === 'POST')
{   
    //если POST - проверка данных, сохранение и главная страница
    $postArray = json_decode(file_get_contents("php://input"), true);
    $duty = ['username', 'email', 'country', 'gender', 'message'];
    $resultArray = fillResultArray($postArray, $duty);
    header('Content-Type: application/json');
    saveFeedbackPage($postArray);
    echo json_encode($resultArray);  
} 
else
{
    //иначе - главная страница
    mainPage();
}

