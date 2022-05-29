# Understanding the Project
This project involves building an attendance system which utilizes facial recognition to mark the ***attendance*** with in-time. It covers areas such as facial detection, alignment and recognition, along with the development of a web application to cater to various use cases of the system such as registration of new employees, addition of photos to the training dataset, signing up, logging in, viewing attendance reports, etc. Along with these it also has an extra ***security system*** in it. This project intends to serve as an efficient substitute for traditional manual attendance systems. It can be used in corporate offices, schools, and organizations where security is essential.

This project aims to automate the traditional attendance system where the attendance is marked manually with added security. Its added features serve as an efficient upgrade and replacement over the traditional attendance system.


_This web application is made for the purpose of face recognition login using ReactJS as a frontend and Python Flask and opencv as a backend. Hence make sure that you have reactjs as well as python flask and opencv configured on your machine in order to run this application._

![architecture](https://github.com/ananyasingh13/Face-Recognition-Project/blob/main/presentation/Architecture.png)



- FRONTEND
  1. Home -
      It is the landing page of the project. The navbar has links to different pages. The "get started" button leads to procedure page.
  2. Procedure - Decribes the procedure for registering and login.
  3. Register - Has a textfield which takes the name of person and on clicking the button the image of the person is taken for training the model.
  4. Login - Authenticates the person trying to use the page also takes attendance using the machine learning model for face detection.
  5. Signup - Signup page for new user.
  6. Attendance - Shows the attendance excel sheet for the day with name and timestamp of marking attendance.
  
  ![Frontend webpage shown](https://github.com/ananyasingh13/Face-Recognition-Project/blob/main/presentation/image.png)
  

- BACKEND
    1. attendance.py - this takes the attendance through facial recognition. It trains the model based on the images in images-train folder. `OpenCV` with `face_recognition` package is used. `dlib` toolkit is also used. It opens up the camera , detects and ***identifies*** the face and marks the attendance along with timestamp in attendance.csv .
    2. security.py - It is for the added security feature of the project. It starts recording as soon as it detects the face and stops recording after 5 seconds of not detecting face.
    3. script.py - Takes the picture for training and has the model for authentication at login.
    
    ![Backend](https://github.com/ananyasingh13/Face-Recognition-Project/blob/main/presentation/backend.png)
    The above image shows the attendance.py running. The training of model is done as indicated in terminal with `Encoding done!` , the face is recognized and name is shown , the attendance is also recorded in attendance.csv


