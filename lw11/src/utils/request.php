<?php

function getPostParameter(string $fieldName): ? string
{   
    $value = null;
    if ((isset($_POST[$fieldName])) && ($_POST[$fieldName] !== ''))
    {
        $value = $_POST[$fieldName];
    }
    return $value;
}

function getRequestMethod(): string
{
    return $_SERVER['REQUEST_METHOD'];
}

function checkUsername(string $username): string
{
    return (preg_match("/^[A-Za-z]+$/", $username) && !empty($username)) ? 'correct' : 'error';
}

function checkEmail(string $email): string
{
    return (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($email)) ? 'correct' : 'error';
}

function checkCountry(string $country): string
{
    $countries = array('Россия', 'Украина', 'Беларусь', 'Казахстан', 'Средиземье', 'Нарния', 'Азерот');
    return (in_array($country, $countries) ? 'correct' : 'error');
}

function checkGender(string $gender): string
{
    return ($gender == 'Мужской' || $gender == 'Женский' ? 'correct' : 'error');
}

function checkMessage(string $message): string
{
    return (!empty($message)) ? 'correct' : 'error';
}

function fillResultArray(array $postArray, array $duty): array
{
    $resultArray = [];
    foreach ($duty as $key) {
        $value = $postArray[$key];
        if (!empty($value)) {
            $func = 'check' . $key;
            $resultArray[$key] = $func($value);
        } else {
            $resultArray[$key] = 'error';
        }
    }
    return $resultArray;
}