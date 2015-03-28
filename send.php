<?php
session_start();

//init variables
$name = $email = $subject = $message = "" ;
$msg = $error = "";

//Handle submit
if (isset($_POST["send"])) {

    //trim space from user input.
    $name	   = trim($_POST["name"]);
    $email   = trim($_POST["email"]);
    $subject = trim($_POST["subject"]);

    //Validation
    if (!empty($name)){
        $error .= "<li>Please write your name</li>";
    }
    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error .= "<li>Invalid email</li>";
    }
    if (empty($email)) {
        $error .= "<li>Email is required</li>";
    }
    if (empty($message)) {
        $error .= "<li>Please write a message</li>";
    }

    //Creating error message list
    $msg = "<ul class='error_msg'> <b style=' margin-left: -15px;'>Fill in right informatio in the fields</b><br><br>" . $error . "</ul>";


    //If error messages are empty, send the form.
    if(empty($error)){

        /**
         * Sending message with php function mail()
         *
         * To make this work on your local machine you have to configure
         * your php.ini and sendmail.ini files. Below is a link on a simple tutorial on how to set it up.
         * https://www.youtube.com/watch?v=TO7MfDcM-Ho
         *
         */

        $ToEmail = 'daniel.bernalp89@gmail.com';
        $EmailSubject = 'Från Min-Portofolio';
        $Mailheader  = "From: ".$email."\r\n";
        $Mailheader .= "Reply-To: ".$email."\r\n";
        $Mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
        $MessageBody = "<b>Name:</b> ".$name."<br>";
        $MessageBody .= "<b>Email:</b> ".$email."<br><br>";
        $MessageBody .= "<b>Message:</b><br>".nl2br($message)."";
        mail($ToEmail, $EmailSubject, $MessageBody, $Mailheader) or die ("Failure");

        $name = $email = $subject = $message = "" ;
        $msg = "<div class='success_msg'>Your message has been sent</div>";
    }
}
?>



