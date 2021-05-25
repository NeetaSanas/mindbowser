<?php
// session_start();
class Subscription
{

    // database connection and table name
    private $conn;
    public $error_info = array();

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function makePayment($paramsArray) {
        $package_name = $paramsArray->package_name;
        $price = $paramsArray->price;
        $user_id = $_SESSION['user_id'];
        $start_date = date('Y-m-d');
        //echo $start_date;
        $end_date = date ( 'Y-m-d', strtotime ( $start_date . ' + ' . 30 . ' days' ) );
        //echo $end_date;
        
        // query to insert record
        $query = "INSERT INTO subscription
        SET
        package_name='$package_name', price='$price', start_date='$start_date', 
        end_date='$end_date', user_id='$user_id'";
        //echo $query;     
        $stmt = $this->conn->query($query);
        if ($stmt == true) {
            return true;
        } else {
            return false;
        }    
    }  
  
    public function getSubscriptionList()
    {
        $user_id = $_SESSION['user_id'];
        // select all query
        $query = "SELECT * FROM subscription where subscription.user_id = '$user_id' and cancel_flag = '0'";
        $stmt = $this->conn->query($query);
        $num = mysqli_num_rows($stmt);
        if ($num > 0) {
            $data = array();
            while ($row = $stmt->fetch_assoc()) {
                $data [] = $row;
            }
            return $data;
        } else {
            return false;
        }
        // return data to the frond end
        $_SESSION ['last_action'] = time();
    }

    public function cancelPackage($paramsArray) {
        $subscription_id = $paramsArray;
        $query = "UPDATE subscription
        SET cancel_flag = '1'
        where subscription_id='$subscription_id'";
        //echo $query;     
        $stmt = $this->conn->query($query);
        if ($stmt == true) {
            return true;
        } else {
            return false;
        }    
    }  

    public function resumePackage($paramsArray) {
        $subscription_id = $paramsArray;

        $query = "SELECT resume_flag FROM subscription where subscription.subscription_id = '$subscription_id'";
        $stmt = $this->conn->query($query);
        $num = mysqli_num_rows($stmt);
        if ($num > 0) {
            $data = array();
            while ($row = $stmt->fetch_assoc()) {
                $resume_flag = $row;
            }
        }

        $query = "UPDATE subscription
        SET resume_flag = " . ($resume_flag == 1 ? "0" : "1") . "
         where subscription_id='$subscription_id'";
        //echo $query;     
        $stmt = $this->conn->query($query);
        if ($stmt == true) {
            return true;
        } else {
            return false;
        }    
    }  
   

    
}
?>
