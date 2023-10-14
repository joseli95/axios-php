<?php

if (isset($_POST['user'])) {
    echo json_encode(['error' => false, 'user' => $_POST['user']]);
} else {
    echo json_encode(['error' => true, 'user' => '']);
}
