<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <!-- bootstrap5 cdn -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <style>
            .navbar-brand {
                display: flex;
                align-items: center;
                height: 100%;
                padding: 0;
            }
    
            .navbar-brand img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
    
            .navbar {
                margin: 0 !important;
                padding: 0 !important;
                background-color: #FFCEE4 !important;
            }
    
            .navbar-nav .nav-item .nav-link {
                color: black;
                font-size: 17px;
                text-align: center;
                font-weight: bold;
                margin-right: 5px;
                transition: 0.3s ease-in-out;
            }
    
            .navbar-nav .nav-item .nav-link:hover {
                opacity: 0.8;
            }
    
            .custom-button {
                color: black;
                background-color: #FFCEE4;
                border: none;
                margin-top: 3px;
                font-size: 17px;
                font-weight: bold;
            }
            .custom-button:hover {
                background-color: #FFCEE4;
            }
        </style>
    </head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="http://localhost:8080/OnlineCourseManagement/Student" class="navbar-brand">
            <img src="logo.png" alt="logo" style="width: 150px; height: fit-content;">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                <li class="nav-item mt-2">
                    <a class="nav-link active" aria-current="page"
                        href="http://localhost:8080/OnlineCourseManagement/Student">Home</a>
                </li>
                <li class="nav-item mt-2">
                    <a class="nav-link" href="#">Courses</a>
                </li>
                <li class="nav-item mt-2">
                    <a class="nav-link" href="#">Instructor</a>
                </li>

                <li class="nav-item mt-2">
                    <form class="form-inline" method="post" action="Enroll">
                        <button type="submit" class="btn btn-info custom-button">Enroll for courses</button>
                    </form>
                </li>

                <li class="nav-item mt-2">
                    <form class="form-inline" method="post" action="Logout">
                        <input type="hidden" name="id" value="logout">
                        <button type="submit" class="btn btn-primary custom-button">Log out</button>
                    </form>
                </li>


            </ul>
        </div>

    </nav>

	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-4">
				Welcome
				<c:out value="${fullname}"></c:out>
			</h1>
			<p class="lead">You have enrolled for the following courses</p>
		</div>
	</div>

	<div class="container">
		<table class="table table-striped table-bordered">
			<thead>
				<tr>
					<th scope="col">Course ID</th>
					<th scope="col">Course Name</th>
					<th scope="col">Course Teacher</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${courses}" var="i">
					<tr>
						<td>${i[0]}</td>
						<td>${i[1]}</td>
						<td>${i[2]}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
	</div>
</body>
</html>