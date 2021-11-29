package pejic.ivan.znamenitostimanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pejic.ivan.znamenitostimanager.model.Ocjena;

import java.util.Optional;

public interface OcjenaRepo extends JpaRepository<Ocjena, Long> {
    Optional<Ocjena> findOcjenaByZnamenitostId(Long znamenitostId);
}
