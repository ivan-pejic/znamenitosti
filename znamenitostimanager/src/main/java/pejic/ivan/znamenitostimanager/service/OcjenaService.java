package pejic.ivan.znamenitostimanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pejic.ivan.znamenitostimanager.exception.OcjenaNotFoundException;
import pejic.ivan.znamenitostimanager.exception.ZnamenitostNotFoundException;
import pejic.ivan.znamenitostimanager.model.Ocjena;
import pejic.ivan.znamenitostimanager.repo.OcjenaRepo;

import java.util.List;

@Service
public class OcjenaService {
    private final OcjenaRepo ocjenaRepo;

    @Autowired
    public OcjenaService(OcjenaRepo ocjenaRepo) {
        this.ocjenaRepo = ocjenaRepo;
    }

    public Ocjena addOcjena(Ocjena ocjena){
        return ocjenaRepo.save(ocjena);
    }

    public List<Ocjena> findAllOcjene(){
        return ocjenaRepo.findAll();
    }

    public Ocjena updateOcjena(Ocjena ocjena){
        return ocjenaRepo.save(ocjena);
    }

    public Ocjena findOcjenaByZnamenitostId(Long znamenitostId){
        return ocjenaRepo.findOcjenaByZnamenitostId(znamenitostId)
                .orElseThrow(()-> new OcjenaNotFoundException("Ocjena za znamenitost pod id "+ znamenitostId +" ne posotoji"));
    }

}
