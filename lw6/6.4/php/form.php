<?php
$button = '<li>
             <button type="submit" name ="sendButton" class="form_Button" onClick="Handler" value="">
               Найти анкету
             </button>
           </li> '; 

$email = '<li><label class="label_First">Введите email</label> <br>
              <input type="text" class="input_Field" name="email" value=""/></li>';

$fields = [
    "email" => [
        "email" => $email 
    ],
    "send" => [
        "button" => $button
    ]
]; 
?> 