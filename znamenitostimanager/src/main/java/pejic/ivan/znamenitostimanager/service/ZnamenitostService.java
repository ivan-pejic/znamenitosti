package pejic.ivan.znamenitostimanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pejic.ivan.znamenitostimanager.exception.ZnamenitostNotFoundException;
import pejic.ivan.znamenitostimanager.model.Znamenitost;
import pejic.ivan.znamenitostimanager.repo.ZnamenitostRepo;

import java.util.List;

@Service
public class ZnamenitostService {
    private final ZnamenitostRepo znamenitostRepo;

    @Autowired
    public ZnamenitostService(ZnamenitostRepo znamenitostRepo) {
        this.znamenitostRepo = znamenitostRepo;
    }

    public Znamenitost addZnamenitost(Znamenitost znamenitost) {
        return znamenitostRepo.save(znamenitost);
    }

    public List<Znamenitost> findAllZnamenitosti() {
        return znamenitostRepo.findAll();
    }

    public Znamenitost updateZnamenitost(Znamenitost znamenitost) {
        return znamenitostRepo.save(znamenitost);
    }

    public Znamenitost findZnamenitostById(Long id) {
        return znamenitostRepo.findZnamenitostById(id)
                .orElseThrow(()-> new ZnamenitostNotFoundException("Znamenitost po id "+ id +" ne posotoji"));

    }

    public void deleteZnamenitost(Long id) {
        znamenitostRepo.deleteZnamenitostById(id);
    }
}
