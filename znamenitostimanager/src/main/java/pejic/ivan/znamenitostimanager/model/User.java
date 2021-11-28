package pejic.ivan.znamenitostimanager.model;


import pejic.ivan.znamenitostimanager.enumeration.Role;
import pejic.ivan.znamenitostimanager.enumeration.Status;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String korisnicko;
    private String sifra;
    private Role uloga;

    public User () {}

    public User(String korisnicko, String sifra, Role uloga){
        this.korisnicko = korisnicko;
        this.sifra = sifra;
        this.uloga = uloga;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getKorisnicko(){
        return korisnicko;
    }

    public void setKorisnicko(String korisnicko){
        this.korisnicko = korisnicko;
    }

    public String getSifra(){
        return sifra;
    }

    public void setSifra(String sifra){
        this.sifra = sifra;
    }

    public Role getUloga(){
        return uloga;
    }

    public void setUloga(Role uloga){
        this.uloga = uloga;
    }
}
