package main.java.pejic.ivan.znamenitostimanager.model;

import javax.persistence.Entity;
import java.io.Serializable;

@Entity
public class Znamenitost implements Serializable {
    private Long id;
    private String naziv;
    private String longituda;
    private String latituda;
    private String opcina;
    private String drzava;
    private String glavnaSlika;
}