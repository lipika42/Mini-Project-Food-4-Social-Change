<?php
if ($conn = mysqli_connect('localhost','root','',''))
{
		// echo "<pre>";
		// print_r($conn);
		// exit(); 

	if (isset($_POST['SignUp'])) 
	{
		//echo".....";
		// echo "<pre>";
		// print_r("hii");
		// exit();
		//echo "......";
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $phone = $POST['phone'];
		$email = $_POST['email'];
		$password = $_POST['password'];
        $password = $_POST['password'];
		//echo $email;
		//echo $password;
		$query = "SELECT * FROM ngo WHERE $firstname = $_POST['firstname'] AND $lastname = $_POST['lastname'] AND $phone = $POST['phone'] AND  email ='$email' AND password='$password' AND  ";
		$result = mysqli_query($conn,$query);
		if (mysqli_num_rows($result) == 1)
		{
			//while ($row = mysqli_fetch_assoc($result)) {
			// echo "Email: " .$row['$email']. " Password " .$row['$password']. "<br>";
			//	echo "hello panda";
			header("Location: sign_up_page.html");
   			exit;
		}

	}
	else
	{
			// echo "user id or password is incorrect";
		echo "invalid";
   		exit;
	}
	mysqli_close($conn);

}
else
{
	echo "not connected";
}
?>


