<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@example.com"; // Replace with your email
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>