package spring_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public final class PhoneServiceImpl implements PhoneService {

    @Autowired
    private PhoneStorage phoneStorage;

    @Override
    public void create(final Phone phone) throws IOException {
        phoneStorage.addPhoneToHashMap(phone);
    }

    @Override
    public List<Phone> readAll() {
        return phoneStorage.getAllPhones();
    }

    @Override
    public Phone read(final long id) {
        return phoneStorage.getPhoneById(id);
    }

    @Override
    public boolean update(final Phone phone, final long id) throws IOException {
        phone.setPhoneId(id);
        return phoneStorage.updateHashMap(id, phone);
    }

    @Override
    public boolean delete(final long id) {
        return phoneStorage.deleteFromHashMap(id);
    }

}
