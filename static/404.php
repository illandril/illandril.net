<?php
if(strpos($_SERVER['REQUEST_URI'], '.part') !== FALSE ){
    readfile('404.part.html');
} else {
    readfile('404.html');
}
?>