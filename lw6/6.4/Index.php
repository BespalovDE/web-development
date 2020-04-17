<html lang="ru">
  <meta http-equiv="Cache-Control" content="no-cache">
  <head>
    <meta charset="UTF-8">
    <title>Просмотр запросов формы</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap&subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="css/formshow.css">
  </head>
  <body>
    <div class="form_Block"> 
      <div class="title">
        <span>ПОИСК АНКЕТЫ</span>
      </div>
      <form action="index.php" method="POST" > 
        <? include('php/form.php'); ?>
        <ul class="menu_main form_Value">
          <? foreach($fields as $fieldName => $fieldAttrs): ?>
            <?= $fieldAttrs["email"] ?>
            <?= $fieldAttrs["button"] ?>
          <? endforeach; ?>
        </ul>
      </form>
      <?php include_once ('php/findFile.php'); ?>
    </div>
  </body>   
</html>