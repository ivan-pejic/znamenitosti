package pejic.ivan.znamenitostimanager.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Ocjena implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userId;
    private Long znamenitostId;
    private Long ocjena;

    public Ocjena(){}

    public Ocjena(Long userId, Long znamenitostId, Long ocjena){
        this.userId = userId;
        this.znamenitostId = znamenitostId;
        this.ocjena = ocjena;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public Long getUserId(){
        return userId;
    }

    public void setUserId(){
        this.userId = userId;
    }

    public Long getZnamenitostId(){
        return znamenitostId;
    }

    public void setZnamenitostId(){
        this.znamenitostId = znamenitostId;
    }

    public Long getOcjena(){
        return ocjena;
    }

    public void setOcjena(){
        this.ocjena = ocjena;
    }
}
