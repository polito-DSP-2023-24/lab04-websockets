class User{    
    constructor(id, name, email, hash) {
        if(id)
            this.id = id;

        this.name = name;
        this.email = email;
        
        if(hash)
            this.hash = hash;

        this.self =  "/api/users/" + this.id;
        this.selection =  "/api/users/" + this.id + "/selection";
    }
}

module.exports = User;
