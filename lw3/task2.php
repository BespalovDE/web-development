<?php // Check Identifier
  header("Content-Type: text/plain");
  function getGETParameter(string $name) : ?string
  {
      return isset($_GET[$name]) ? (string) $_GET[$name] : null;
  }

  $str = getGETParameter('identifier');
  if ($str === null)
  {
      echo 'no, becouse not found identificator';
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
           if (is_numeric($str[0]))
           {
               echo 'no, becouse first symbol must be letter';
           }
           else
           {
               echo 'yes';
           }
       }
  }

