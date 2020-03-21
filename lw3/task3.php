<?php // Password Strength
  header("Content-Type: text/plain");
  function getGETParameter(string $name): ?string
  {
      return isset($_GET[$name]) ? (string) $_GET[$name] : null;
  }

  function getPasswordStrong(string $Password): ?int
  {
    $len = strlen($Password); // длинна всего пароля
    $lenSymbol = strlen(preg_replace("/[^a-zA-Z]/",  '',  $Password)); // длинна буквенной части пароля
    $security = 4 * $len; // 4*длинна всего пароля
    $security = $security +  4 * ($len - $lenSymbol);  // 4*длина числовой части пароля
    $security = $security + (($lenSymbol - strlen(preg_replace("/[^A-Z]/",  '',  $Password)) ) * 2); // +((len-n)*2) пароль содержит n символов в верхнем регистре
    $security = $security + (($lenSymbol - strlen(preg_replace("/[^a-z]/",  '',  $Password)) ) * 2); // +((len-n)*2) пароль содержит n символов в нижнем регистре
    if ((preg_replace("/[^a-zA-Z]/",  '',  $Password) === $Password) || (preg_replace("/[^_\d]/",  '',  $Password) === $Password)) // пароль только из букв или только из цифр
    {
        $security = $security - $len;
    }
    foreach (count_chars($Password, 1) as $i => $val) // массив из символов и числа их вхождения в строку
    {
        if ($val > 1) // если символ входит более чем 1 раз (1 символ в разных регистрах - это разные символы)
        {
            $security = $security - $val;
        }
    } 
    return $security;
  }

  $str = getGETParameter('password');
  if ($str === null)
  {
      echo ' no, becouse not found identificator';
  }
  else
  {
      if ($str !== preg_replace("/[^a-zA-Z_\d]/",  '',  $str))
      {
          $len = strlen($str);
          for ($i = 0; $i < $len; $i++)
          {
              if (strlen($str) > $i)
              {
                  if ((!ctype_alpha($str[$i])) && (!is_numeric($str[$i])))
                  {
                      echo 'no, becouse "' . $str[$i] . '" not allowed symbol';
                      break;
                  }
              }
              else
              { 
                  echo 'no, becouse "' . $str[$i] . '" not allowed symbol';
                  break;
              }
          }
       }
      else
      {
          echo getPasswordStrong($str);
      }
  }
?>
