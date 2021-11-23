package pejic.ivan.znamenitostimanager.model;

import pejic.ivan.znamenitostimanager.enumeration.Status;

import java.io.Serializable;
import javax.persistence.*;

@Entity
public class Znamenitost implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String naziv;
    private String longituda;
    private String latituda;
    private String opcina;
    private String drzava;
    private String glavnaSlika;
    private Status status;

    public Znamenitost(){}

    public Znamenitost(String naziv, String longituda, String latituda, String opcina, String drzava, String glavnaSlika, Status status){
        this.naziv = naziv;
        this.longituda = longituda;
        this.latituda = latituda;
        this.opcina = opcina;
        this.drzava = drzava;
        this.glavnaSlika = glavnaSlika;
        this.status = status;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNaziv(){
        return naziv;
    }

    public void setNaziv(String naziv){
        this.naziv = naziv;
    }

    public String getLongituda(){
        return longituda;
    }

    public void setLongituda(String longituda){
        this.longituda = longituda;
    }

    public String getLatituda(){
        return latituda;
    }

    public void setLatituda(String latituda){
        this.latituda = latituda;
    }

    public String getOpcina(){
        return opcina;
    }

    public void setOpcina(String opcina) { this.opcina = opcina; }

    public void setDrzava(String drzava){
        this.drzava = drzava;
    }

    public String getDrzava() { return drzava; }

    public String getGlavnaSlika(){
        return glavnaSlika;
    }

    public void setGlavnaSlika(String glavnaSlika){
        this.glavnaSlika = glavnaSlika;
    }

    public void setStatus (Status status) { this.status = status; }

    public Status getStatus() { return status; }
}
