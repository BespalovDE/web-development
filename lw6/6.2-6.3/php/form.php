<?php
$place = '<li><label class="label_Second">Откуда вы?</label>
          <div class="newSelect_Style"> 
            <select class="select"  type="text" name="from" value="" autocomplete="off">';
$countries = ['Не указано', 'Россия', 'Украина', 'Беларусь', 'Казахстан', 'Средиземье', 'Нарния', 'Азерот'];
foreach($countries as $key)
{
    $place = $place . '<option value="' . $key . '">' . $key; 
}
$place = $place . '</select>
                   </div>
                   </li><br> ';

$gend = '<li class="margin_Li"><label class="label_Second">Ваш пол</label>';
$radioPoint = ["men" => "Мужской" , "women" => "Женский"];
foreach($radioPoint as $key => $value)
{
    $checked = '';
    if($key === "men")
    {
        $checked = "checked";
    }
    $gend = $gend  . '<input type="radio" class="radio_Button" name="gender" id=" ' . $key . ' " value=" ' . $value . ' " ' . $checked . '/>
                      <label class="radio_Label" for=" ' . $key .  ' ">' . $value . 
                      '</label>';                   
}
$gend = $gend . '</li><br>';

$button = '<li>
             <button type="submit" name ="sendButton" class="form_Button" onClick="Handler" value="">
               Отправить
             </button>
           </li> '; 

$username = '<li><label class="label_First">Ваше имя</label> <br>
                <input type="text" class="input_Field" name="username" value=""/></li><br>';

$email = '<li><label class="label_First">Ваш email</label> <br>
              <input type="text" class="input_Field" name="email" value=""/></li><br>';

$mail = '<li><label class="label_First">Ваше сообщение</label> <br>
             <textarea name="message" wrap="hard" value=""></textarea> </li><br>';


$fields = [
    "name" => [
        "username" => $username
    ],
    "email" => [
        "email" => $email 
    ],
    "from" => [
        "choice" => $place
    ],
    "gender" => [
        "gend" => $gend
    ],
    "messege" => [
        "mail" => $mail
    ],
    "send" => [
        "button" => $button
    ]
]; 
?> 