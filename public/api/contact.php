<?php

function checkString($text) {
    if (preg_match("/(to:|cc:|bcc:|from:|subject:|reply-to:|content-type:|MIME-Version:|multipart/mixed|Content-Transfer-Encoding:)/ims", $text)) {
        exit;
    }

    if (preg_match("/%0A|\\r|%0D|\\n|%00|\\0|%09|\\t|%01|%02|%03|%04|%05|%06|%07|%08|%09|%0B|%0C|%0E|%0F|%10|%11|%12|%13/i", $text)) {
        exit;
    }
}

function sendMail() {
    $receiver = "info@thoroee.com";
    $subject = $_POST["subject"];
    $sender = $_POST["sender"];
    $text = $_POST["message"];
    $captcha = $_POST["captcha"];

    if ($captcha != "6") {
        exit;
    }

    checkString($subject);
    checkString($sender);
    
    mail($receiver, $subject, $text, "From: Guest <".$sender.">");
}

sendMail();
echo "success";

?>