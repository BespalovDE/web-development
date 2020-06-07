<?php

function saveFeedbackPage($postArray): void
{
    $duty = ['username', 'email', 'country', 'gender', 'message'];
    $resultArray = fillResultArray($postArray, $duty);
    $checkError = true;
    foreach ($duty as $key) {
        if ($resultArray[$key] === 'error') {
            $checkError = false;
        }
    }
    if ($checkError) {
        $args = validateUserData($postArray);
        if ($args['isValidate'] === true)
        {
            saveFeedback($postArray); 
        }
    }
    header('Content-Type: application/json');
    echo json_encode($resultArray); 
}