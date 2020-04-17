<?PHP
  function getPOSTParameter(string $ident): ?string
  {
      return isset($_POST[$ident]) ? (string)$_POST[$ident] : null;
  }

  echo '<ul class="form_Value">';
  $email = getPOSTParameter('email');
  if ($email)
  {                                                                                                       
      $fileAddres = __DIR__; 
      $fileAddres = $fileAddres . '/' . $email . '.txt' ; 
      $fileAddres = str_replace('php/', 'data/', $fileAddres);               
      if (file_exists($fileAddres))                           
      {
          $fileContent = file_get_contents($fileAddres);
          $data = explode(PHP_EOL, $fileContent);
          $i = 0;
          while (count($data) > $i)       
          {
              if($i == 0)
              { 
                  echo '<li class="input_Field">';                     
                  echo $data[0];            
                  echo '</li>';
              }    
              if($i == 1)
              {
                  echo '<li class="input_Field">';
                  echo $data[1]; 
                  echo '</li>'; 
              }    
              if($i == 2)
              {
                  echo '<li class="input_Field">';                      
                  echo $data[2];           
                  echo '</li>';
              }    
              if($i == 3)
              {
                  echo '<li class="input_Field">';
                  echo $data[3];          
                  echo '</li>';  
              }   
              if($i == 4)
              {
                  echo '<li class="input_Field">';
                  echo $data[4];             
                  echo '</li>';
              }    
              $i = $i + 1;
          }     
      }
      else
      {
          echo '<li class="input_Field">';
          echo 'file not found';    
          echo '</li>';
      }
  }
  else
  {
      echo '<li class="input_Field">';
      echo 'Введите Email пользователя';
      echo '</li>';
  }
  echo '</ul>'
?>