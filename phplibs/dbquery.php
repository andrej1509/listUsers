<?php

ob_start();
$dbh = new PDO('mysql:host=localhost;dbname=listusers', 'admin1', 'info1104');

if(empty($_POST)){
    $stmt = $dbh->prepare('SELECT * FROM sys_user');
    $stmt->execute();
    $data = $stmt->fetchAll();
    $errors = ob_get_contents();
    ob_end_clean();
    if(empty($data)){
        $data = 4;
    }
    $resp = array(
        'errors' => $errors,
        'data_r' => $data
    );
    die(json_encode($resp, JSON_UNESCAPED_UNICODE));
}else{
    $number = (int)($_POST["number"]);
    $stmt = $dbh->prepare('SELECT * FROM sys_user WHERE number = ?');
    $stmt->execute(array($number));
    $data = $stmt->fetchAll();

    if((!$data) && ($_POST["delete"]!=true)) {
        $allowed = array("number", "fullname", "birthdate", "phone", "active");
        $sql = "INSERT INTO sys_user SET " . pdoSet($allowed, $values);
        $stm = $dbh->prepare($sql);
        $stm->execute($values);
        $errors = ob_get_contents();
        ob_end_clean();
        $resp = array(
            'errors' => $errors,
            'data_r' => 2
        );
        die(json_encode($resp, JSON_UNESCAPED_UNICODE));
    }else if($_POST["delete"]==true){
        $count = $dbh->exec("DELETE FROM sys_user WHERE number = $number");
        $errors = ob_get_contents();
        ob_end_clean();
        $resp = array(
            'errors' => $errors,
            'data_r' => 5,
            'num_del' => $number
        );
        die(json_encode($resp, JSON_UNESCAPED_UNICODE));
    }else{
        $errors = ob_get_contents();
        ob_end_clean();
        $resp = array(
            'errors' => $errors,
            'data_r' => 3
        );
        die(json_encode($resp, JSON_UNESCAPED_UNICODE));
    }
}
function pdoSet($allowed, &$values, $source = array()) {
    $set = '';
    $values = array();
    if (!$source) $source = &$_POST;
    foreach ($allowed as $field) {
        if (isset($source[$field])) {
            $set.="`".str_replace("`","``",$field)."`". "=:$field, ";
            if($field=="birthdate"){
                $d1 = strtotime($source[$field]);
                $source[$field] = date("Y-m-d", $d1);
            }
            $values[$field] = $source[$field];
        }
    }
    return substr($set, 0, -2);
}


