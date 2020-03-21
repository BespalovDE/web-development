<?php // Survey Saver
  header("Content-Type: text/plain");
  function getGETParameter(string $name): ?string
  {
      return isset($_GET[$name]) ? (string) $_GET[$name] : null;
  }
  
  $firstName = getGETParameter('first_name');
  $lastName = getGETParameter('last_name');
  $email = getGETParameter('email');
  $age = getGETParameter('age');
  if ($em && (strlen($em) > 0))
  {
      $text = 'first_name=' . $firstName . ' last_name=' . $lastName . ' email=' . $email . ' age=' . $age . ' ';
      $handler = fopen('data/' . $email . '.txt', "w");  //создали/очистили файл и открыли его для записи
      fwrite($handler, $text);
      fclose($handler);
      echo ' The questionnaire was recorded'; 
  }
  else
  {
      echo 'e-mail is out!'; 
  }
?>
