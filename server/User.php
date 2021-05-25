<?php
// session_start();
class User
{

    // database connection and table name
    private $conn;
    public $error_info = array();

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function register($paramsArray) {
            
            $firstname = $paramsArray->first_name;
            $lastname = $paramsArray->last_name;
            $email = $paramsArray->email;
            $address = $paramsArray->contact;            
            $password = md5($paramsArray->password);//ENCRYPTED PASSWORD
            $birthdate = date("Y-m-d", strtotime($paramsArray->birthdate));
            //$date = date("Y-m-d", strtotime($date));
            $company = $paramsArray->company;
            $query = "SELECT COUNT(email) as count FROM user where email='$email'";
            //echo $query;
            $stmt = $this->conn->query ( $query );
 
            $num = mysqli_num_rows ( $stmt );
            if ($num > 0) {
                //$data = array ();
                while ( $row = $stmt->fetch_assoc () ) {
                    $data = $row;
                }
                
                if($data['count'] > 0){
                    return "exist";
                }else {
                // query to insert record
                $query = "INSERT INTO user
                SET
                firstname='$firstname', lastname='$lastname', email='$email', address='$address', password='$password',
                birthdate='$birthdate', company='$company'";
                //echo $query;     
                $stmt = $this->conn->query($query);
                if ($stmt == true) {
                    return true;
                } else {
                    return false;
                }
                
            }
        }  

        
    } 
  
    public function getUsers($paramsArray)
    {
        // select all query
        $query = "SELECT
                 *
                  FROM
                  user
                  ORDER BY
                  user_id ASC";

        // execute query
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

    // Login for User
    public function login($paramsArray)
    {
          
        $email = $paramsArray->email;
        $password = md5($paramsArray->password);

        $query = "SELECT *
        FROM
        user
        WHERE
        email= '$email' AND password= '$password'
        ";
        //echo $query;
        // prepare query statement
        $stmt = $this->conn->query($query);

        $row = $stmt->fetch_assoc();

        if ($row > 0) {
            extract($row);
            //echo $row['user_type'];
            $_SESSION ['user_id'] = $row['user_id'];
            $_SESSION ['email'] = $row['email'];
            $_SESSION ['LoggedIn'] = 1;
            $_SESSION ['last_action'] = time();
            $data [] = $row;
            $_SESSION ['last_action'] = time();
            return $data;
        } else {
            return false;
        }           
    }

    public function logout($paramsArray)
    {
        unset($_SESSION["user_id"]);
        unset($_SESSION["email"]);
        unset($_SESSION["LoggedIn"]);
        unset($_SESSION["last_action"]);
        session_destroy();
        return 1;
    }

    
}
?>
