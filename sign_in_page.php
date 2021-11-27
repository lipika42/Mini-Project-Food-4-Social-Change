<?php
if ($conn = mysqli_connect('localhost','root','','miniproject'))
{
		// echo "<pre>";
		// print_r($conn);
		// exit(); 

	if (isset($_POST['SignIn'])) 
	{
		//echo".....";
		// echo "<pre>";
		// print_r("hii");
		// exit();
		//echo "......";
		$email = $_POST['email'];
		$password = $_POST['psw'];
		//echo $email;
		//echo $password;
		$query = "SELECT * FROM ngo WHERE email ='$email' AND password='$psw'";
		$result = mysqli_query($conn,$query);
		if (mysqli_num_rows($result) == 1)
		{
			//while ($row = mysqli_fetch_assoc($result)) {
			// echo "Email: " .$row['$email']. " Password " .$row['$password']. "<br>";
			//	echo "hello panda";
			header("Location: sign_in_page.html");
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