package pejic.ivan.znamenitostimanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pejic.ivan.znamenitostimanager.exception.UserNotFoundException;
import pejic.ivan.znamenitostimanager.exception.ZnamenitostNotFoundException;
import pejic.ivan.znamenitostimanager.model.User;
import pejic.ivan.znamenitostimanager.repo.UserRepo;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser (User user) {
        return userRepo.save(user);
    }

    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    public User findUserByKorisnickoAndSifra(String korisnicko, String sifra){
        return userRepo.findUserByKorisnickoAndSifra(korisnicko, sifra)
                .orElseThrow(()-> new UserNotFoundException("User po korisnicko: "+ korisnicko +" i sifra: "+sifra+" ne posotoji"));
    }
}
