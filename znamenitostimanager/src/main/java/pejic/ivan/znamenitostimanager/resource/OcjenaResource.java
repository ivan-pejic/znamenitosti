package pejic.ivan.znamenitostimanager.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pejic.ivan.znamenitostimanager.model.Ocjena;
import pejic.ivan.znamenitostimanager.service.OcjenaService;

import java.util.List;

@RestController
@RequestMapping("/ocjena")
public class OcjenaResource {
    private final OcjenaService ocjenaService;

    public OcjenaResource(OcjenaService ocjenaService) {
        this.ocjenaService = ocjenaService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ocjena>> getAllOcjene(){
        List<Ocjena> ocjene = ocjenaService.findAllOcjene();
        return new ResponseEntity<>(ocjene, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Ocjena> getOcjenaByZnamenitostId(@PathVariable("id") Long znamenitostId){
        Ocjena ocjena = ocjenaService.findOcjenaByZnamenitostId(znamenitostId);
        return new ResponseEntity<>(ocjena, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Ocjena> addOcjena(@RequestBody Ocjena ocjena){
        Ocjena newOcjena = ocjenaService.addOcjena(ocjena);
        return new ResponseEntity<>(newOcjena, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Ocjena> updateOcjena(@RequestBody Ocjena ocjena){
        Ocjena updateOcjena = ocjenaService.updateOcjena(ocjena);
        return new ResponseEntity<>(updateOcjena, HttpStatus.OK);
    }
}
