package pejic.ivan.znamenitostimanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pejic.ivan.znamenitostimanager.model.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findUserByKorisnickoAndSifra(String korisnicko, String sifra);
}
