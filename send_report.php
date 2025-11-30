$photo_tmp = $_FILES['photo']['tmp_name']; // Temporary uploaded file
$photo_name = $_FILES['photo']['name'];    // Original filename
$photo_data = chunk_split(base64_encode(file_get_contents($photo_tmp)));