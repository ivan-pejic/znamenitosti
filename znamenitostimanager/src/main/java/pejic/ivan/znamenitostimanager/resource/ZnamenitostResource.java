package pejic.ivan.znamenitostimanager.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pejic.ivan.znamenitostimanager.model.Znamenitost;
import pejic.ivan.znamenitostimanager.service.ZnamenitostService;

import java.util.List;

@RestController
@RequestMapping("/znamenitost")
public class ZnamenitostResource {
    private final ZnamenitostService znamenitostService;

    public ZnamenitostResource(ZnamenitostService znamenitostService) {
        this.znamenitostService = znamenitostService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Znamenitost>> getAllZnamenitosti() {
        List<Znamenitost> znamenitosti = znamenitostService.findAllZnamenitosti();
        return new ResponseEntity<>(znamenitosti, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Znamenitost> getZnamenitostById(@PathVariable("id") Long id) {
        Znamenitost znamenitost = znamenitostService.findZnamenitostById(id);
        return new ResponseEntity<>(znamenitost, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Znamenitost> addZnamenitost(@RequestBody Znamenitost znamenitost) {
        Znamenitost newZnamenitost = znamenitostService.addZnamenitost(znamenitost);
        return new ResponseEntity<>(newZnamenitost, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Znamenitost> updateZnamenitost(@RequestBody Znamenitost znamenitost) {
        Znamenitost updateZnamenitost = znamenitostService.updateZnamenitost(znamenitost);
        return new ResponseEntity<>(updateZnamenitost, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteZnamenitost(@PathVariable("id") Long id) {
        znamenitostService.deleteZnamenitost(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
