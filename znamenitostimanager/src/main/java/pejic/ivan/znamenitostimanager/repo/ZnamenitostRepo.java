package pejic.ivan.znamenitostimanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pejic.ivan.znamenitostimanager.model.Znamenitost;

import java.util.Optional;

public interface ZnamenitostRepo extends JpaRepository<Znamenitost, Long> {
    void deleteZnamenitostById(Long id);

    Optional<Znamenitost> findZnamenitostById(Long id);
}
