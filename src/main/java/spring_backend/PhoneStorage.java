package spring_backend;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public final class PhoneStorage {

    private final Map<Long, Phone> phones = new HashMap<>();

    private Long nextAvailableId = 1L;

    public Long getNextAvailableId() {
        return nextAvailableId;
    }

    public void addPhoneToHashMap(final Phone phone) {
        phone.setPhoneId(nextAvailableId++);
        phones.put(phone.getPhoneId(), phone);
    }

    public List<Phone> getAllPhones() {
        return new ArrayList<>(phones.values());
    }

    public Phone getPhoneById(final Long id) {
        return phones.get(id);
    }

    public boolean deleteFromHashMap(final Long id) {
        return phones.remove(id) != null;
    }

    public boolean updateHashMap(final long id, final Phone phone) {
        if (!phones.containsKey(id)) {
            return false;
        } else {
            phones.put(id, phone);
        }
        return true;
    }

}
