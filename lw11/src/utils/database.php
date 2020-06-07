<?php

function database(): PDO
{
    static $connection = null;
    if ($connection === null)
    {
        $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        $connection->query('SET NAMES utf8');
    }

    return $connection;
}


function saveFeedback(array $feedback): void
{
    $username = database()->quote($feedback['username']);
    $email = database()->quote($feedback['email']);
    $country = database()->quote($feedback['country']);
    $gender = database()->quote($feedback['gender']);
    $message = database()->quote($feedback['message']);
    $count = database()->query("SELECT COUNT(*) FROM profiles WHERE email = $email");
    /*if ($count->fetchColumn() == 0)
    {*/
        $stm = database()->query("INSERT INTO profiles (username, email, country, gender, message) VALUES ($username, $email, $country, $gender, $message)");    
    /*}*/
    /*else
    {
        $stm = database()->query("UPDATE profiles SET username = $username, country = $country, gender = $gender, message = $message WHERE email = $email");
    }*/
}

function getFeedback(string $email): array
{
    $email = database()->quote($email);
    $count = database()->query("SELECT COUNT(*) FROM profiles WHERE email = $email");
    if ($count->fetchColumn() > 0)
    {
        $stm = database()->query("SELECT * FROM profiles WHERE email = $email");
        $profile = $stm->fetch();
        $profileData['username'] = "Имя: ${profile['username']}";
        $profileData['email'] = "Эл. ящик: ${profile['email']}";
        $profileData['country'] = "Страна: ${profile['country']}";
        $profileData['gender'] = "Пол: ${profile['gender']}";
        $profileData['message'] = "Сообщение: ${profile['message']}";
        $fileExist = true;
        $stringCount = 1;
        $profile = $stm->fetch();
        while ($profile <> null) {
            $profileData['message'] = $profileData['message'] . "\n ${profile['message']}";
          $profile = $stm->fetch();
        }
    }
    else
    {
        $fileExist = false;
    }
    return array('fileExist' => $fileExist, 'profileData' => $profileData);
}
