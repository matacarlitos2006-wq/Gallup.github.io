<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST['fname']);
    $lastname = htmlspecialchars($_POST['lname'])
    $email   = htmlspecialchars($_POST['Email']);
    $phonenumber = htmlspecialchars($_POST['Phone Number'])
    $message = htmlspecialchars($_POST['message']);

    $to = "cmata1@unm.edu";
    $subject = "New Contact Form Submission";

    $body = "Name: $name\nLastName: $lastname\nEmail: $email\nPhoneNumber: $phonenumber\nMessage:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message Sent!";
    } else {
        echo "Error sending message.";
    }
}
?>
