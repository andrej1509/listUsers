<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>listUsers</title>
	</head>
	<link rel="stylesheet" href="css/vendor.css"/>
	<link rel="stylesheet" href="css/main.css"/>
	<body>
		<section>
			<div class="wrap_title">
				<h1>List user base</h1>
			</div>
			<div class="wrap_fields">
				<ul>
					<li>
						<div class="row">
							<div class="hcol col-md-2 col-sm-2 col-xs-2"><h3>Number</h3></div>
							<div class="hcol col-md-4 col-sm-4 col-xs-4"><h3>Full Name</h3></div>
							<div class="hcol col-md-3 col-sm-3 col-xs-3"><h3>Birthdate</h3></div>
							<div class="hcol col-md-2 col-sm-2 col-xs-2"><h3>Phone</h3></div>
						</div>
					</li>
				</ul>
				<a href="#" class="button_add">
					<span>Add new user</span>
				</a>
			</div>
			<div class="wrap_popup">
				<form class="pop-up">
					<div class="box">
						<h3>Add User</h3>
						<a href="#" class="close-button">&#10006;</a>
						<div>
							<label for="number">Number:</label>
							<input type="text" name="number" id="number" required/>
						</div>
						<div>
							<label for="fullname">Full Name:</label>
							<input type="text"  name="fullname" id="fullname" required/>
						</div>
						
						<div>
							<label for="birthdate">Birthdate:</label>
							<input type="text"  name="birthdate" id="birthdate" required/>
						</div>
						
						<div>
							<label for="phone">Phone:</label>
							<input type="tel"  name="phone" id="phone" required/>
						</div>
					</div>
					<div class="buttons">
						<a href="#" class="btn-minimal">Add User</a>
					</div>
				</form>
				</div>
				<div class="wrap_popup_del">
				<div class="pop-up-del">
					<div class="box">
						<h3>Delete User</h3>
						<p></p>
						<a href="#" class="close-button">&#10006;</a>
					</div>
					<a href="#" class="btn-norm yes">Yes</a>
					<a href="#" class="btn-norm no">No</a>
				</div>
				</div>		
		</section>
		<script src="js/vendor.js"></script>
		<script src="js/main.js"></script>
	</body>
</html>