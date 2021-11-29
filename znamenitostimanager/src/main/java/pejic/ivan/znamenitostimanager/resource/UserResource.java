package pejic.ivan.znamenitostimanager.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pejic.ivan.znamenitostimanager.model.User;
import pejic.ivan.znamenitostimanager.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{korisnicko}and{sifra}")
    public ResponseEntity<User> getUserByKorisnickoAndSifra (@PathVariable("korisnicko") String korisnicko, @PathVariable("sifra") String sifra){
        User user = userService.findUserByKorisnickoAndSifra(korisnicko, sifra);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
