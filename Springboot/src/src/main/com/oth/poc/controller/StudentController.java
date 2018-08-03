package oth.poc.controller;

import oth.poc.model.Student;
import oth.poc.repository.StudentRepository;
import oth.poc.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/")
public class StudentController {

    @Autowired
    MongoTemplate mongoTemplate;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    StudentService studentService;

    //Create
    @RequestMapping(method = RequestMethod.POST, value = "/addStudent")
    public String save(@RequestBody Student student) {
        studentService.saveStudent(student);
        return student.getId();
    }

    //Get all records
    @RequestMapping(value = "/getAllStudents", method = RequestMethod.GET)
    public List<Student> getAllStudents() {
        return studentService.getAllStudents();
    }

    //Get by first name
    @RequestMapping(value = "/getStudent/{firstName}", method = RequestMethod.GET)
    public List<Student> getByFirstName(@PathVariable String firstName) {
        List<Student> studentList = new ArrayList<Student>();
       studentList =  studentService.getByFirstName(firstName);
       return studentList;
    }

    // update
    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, value ="/updateStudent")
    public String update(@RequestBody Student student) {
        studentService.updateStudent(student);
        return "Student updated successfully";
    }


   // delete
    @RequestMapping(value = "deleteStudent/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable String id) {
        studentService.deleteStudent(id);
        return "Student deleted successfully";
    }
}


