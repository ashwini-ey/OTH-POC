package oth.poc.service;

import oth.poc.model.Student;
import java.util.List;

public interface StudentService {

    public void saveStudent(Student student);
    public List<Student> getAllStudents();
    public List<Student> getByFirstName(String firstName);
    public void updateStudent(Student student);
    public void deleteStudent(String id);
}
