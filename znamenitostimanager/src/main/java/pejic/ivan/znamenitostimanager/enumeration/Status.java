package pejic.ivan.znamenitostimanager.enumeration;

public enum Status {
    ZNAMENITOST_UP("ZNAMENITOST_UP"),
    ZNAMENITOST_DOWN("ZNAMENITOST_DOWN");
    private final String status;

    Status(String status){
        this.status = status;
    }
    public String getStatus() {
        return this.status;
    }
}
