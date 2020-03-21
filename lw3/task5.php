<?php // Survey Info
  header("Content-Type: text/plain");
  
  function GetBetween($content, $start, $end)
  {
      $result = explode($start, $content);
      if (isset($result[1]))
      {
          $result = explode($end, $result[1]);
          return $result[0];
      }
      else
      {
          return ' ';
      } 
  }

  function getGETParameter(string $name): ?string
  {
      return isset($_GET[$name]) ? (string) $_GET[$name] : null;
  }

  $email = getGETParameter('email');
  $filename = 'data/'.$email.'.txt';
  if ($email && (strlen($email) > 0))
  {
      if (file_exists($filename))
      {
          $file = fopen($filename , 'r');
          $str = htmlentities(fgets($file));
          fclose($file);
          echo "First Name: " . GetBetween($str, "first_name=", ' ');
          echo "\r\nLast Name: " . GetBetween($str, "last_name=", ' ');
          echo "\r\nEmail: " . GetBetween($str, "email=", ' ');
          echo "\r\nAge: " . GetBetween($str, "age=", ' ');
      }
      else
      {
          echo 'The questionnaire not found'; 
      }
  }
?>