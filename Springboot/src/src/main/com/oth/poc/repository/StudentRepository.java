package oth.poc.repository;


import oth.poc.model.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student, String> {

    public List<Student> findByFirstName(String lastName);

}
