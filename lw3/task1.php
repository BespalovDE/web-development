<?php 
function getGETParameter(string $name): ?string
{
  return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
$str = trim(getGETParameter('text'));
while (strpos($str, "  ") !== false)
{
  $str = str_replace("  ", " ", $str);
}
echo $str;