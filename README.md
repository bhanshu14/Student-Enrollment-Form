# Student Enrollment Form

## Title of the Project
**Student Enrollment Form using JsonPowerDB**

## Description
This project is a web-based student enrollment form designed to store student details using **JsonPowerDB**. JsonPowerDB is a high-performance, minimalistic, multi-mode DBMS that provides real-time data processing with simple REST APIs. This project showcases the implementation of basic CRUD operations (Create, Read, Update, Delete) for managing student data using JsonPowerDB.

### Features
- User-friendly form to input student details (Roll no.,Name,class,Birthdate,Address,Enrollment date.)
- Store, update, retrieve, and delete student records
- Fast data storage and retrieval using JsonPowerDB's REST APIs
- Lightweight and efficient solution, ideal for educational institutions

## Benefits of using JsonPowerDB
- **Simplified API**: Direct JSON document-based data storage and retrieval
- **High Performance**: Very low latency for real-time applications
- **Schema-free**: No schema rigidity, making it flexible for various data formats
- **Effortless Integration**: Easy to integrate with web-based projects through REST API
- **Minimal Infrastructure**: Runs with minimal resources and no heavy installations
- **Built-in Security**: Includes access control and authentication mechanisms

  ## Scope of Functionalities
1. **Create a Student Record**: Allows the addition of new student information through a form, which is then stored in JsonPowerDB.
2. **Read Student Records**: Fetches and displays existing student details from the database.
3. **Update Student Record**: Provides the ability to edit and update student details and save the modifications to the database.
4. **Delete a Student Record**: Enables deletion of student data from the database.
5. **Data Validation**: Basic validation of form inputs to ensure the integrity of the data.
6. **Responsive Design**: Ensures that the enrollment form works on different devices, including mobile phones and tablets.

## Examples of Use
1. **Creating a New Student Record**
   - A user can fill in the form with student details (name, age, email, course) and submit it. The details are stored in JsonPowerDB, and a success message is displayed.
   
   Example Input:
   ```json
   {
     "name": "John Doe",
     "age": 18,
     "email": "john.doe@example.com",
     "course": "Computer Science"
   }


## Release History
### v1.0.0 (Initial Release)
- Implemented student enrollment form with basic CRUD functionality using JsonPowerDB.
- Added basic frontend design for user input and display.
- Integrated JsonPowerDB for data storage with backend logic.
