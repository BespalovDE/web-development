<?php

function saveFeedbackPage(array $postArray): void
{
    $args = validateUserData($postArray);
    if ($args['isValidate'] === true)
    {
        saveFeedback($postArray); 
    }
}