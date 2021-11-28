package pejic.ivan.znamenitostimanager.enumeration;

public enum Role {
        USER_GUEST("USER_GUEST"),
        USER_ADMIN("USER_ADMIN");
        private final String role;

        Role(String status){
            this.role = status;
        }
        public String getStatus() {
            return this.role;
        }
}

