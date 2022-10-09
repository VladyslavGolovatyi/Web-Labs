package spring_backend;

import java.io.IOException;
import java.util.List;

public interface PhoneService {
    void create(Phone phone) throws IOException;
    List<Phone> readAll();
    Phone read(long id);
    boolean update(Phone phone, long id) throws IOException;
    boolean delete(long id);
}
