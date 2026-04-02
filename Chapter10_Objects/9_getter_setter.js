const user = {
    firstname:"Alice",
    lastname:"Smith",
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    },
    set fullName(name) {
        const [first, last] = name.split(" ");
        this.firstname = first;
        this.lastname = last;
    }
}