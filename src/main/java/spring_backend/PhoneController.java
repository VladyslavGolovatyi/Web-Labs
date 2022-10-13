package spring_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public final class PhoneController {

    @Autowired
    private PhoneServiceImpl phoneService;

    @CrossOrigin
    @PostMapping(value = "/phones")
    public ResponseEntity<?> create(@RequestBody final Phone phone) throws IOException {
        phoneService.create(phone);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping(value = "/phones")
    public ResponseEntity<List<Phone>> read() {
        final List<Phone> phones = phoneService.readAll();

        return !phones.isEmpty()
                ? new ResponseEntity<>(phones, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @GetMapping(value = "/phones/{id}")
    public ResponseEntity<Phone> read(@PathVariable(name = "id") final int id) {
        final Phone phone = phoneService.read(id);

        return phone != null
                ? new ResponseEntity<>(phone, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @PutMapping(value = "/phones/{id}")
    public ResponseEntity<?> update(@PathVariable(name = "id") final int id, @RequestBody final Phone phone)
            throws IOException {
        final boolean updated = phoneService.update(phone, id);

        return updated
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }

    @CrossOrigin
    @DeleteMapping(value = "/phones/{id}")
    public ResponseEntity<?> delete(@PathVariable(name = "id") final int id) {
        final boolean deleted = phoneService.delete(id);

        return deleted
                ? new ResponseEntity<>(HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
    }
}
