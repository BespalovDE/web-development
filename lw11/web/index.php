<?php

//подключение "common.inc.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'common.inc.php');

if (getRequestMethod() === 'POST')
{   
    $postArray = json_decode(file_get_contents("php://input"), true);
    /*$postArray['username'] = getPostParameter('username');
    $postArray['email'] = getPostParameter('email');
    $postArray['country'] = getPostParameter('country');
    $postArray['gender'] = getPostParameter('gender');
    $postArray['message'] = getPostParameter('message');*/
    saveFeedbackPage($postArray);
} 
else
{
    mainPage();
}

