class Jedi {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    introduce() {
        return `${this.name} ${this.lastName}`;
    }
}

class JediMaster extends Jedi {
    constructor(title, name, lastName) {
        super(name, lastName);
        this.title = title;
    }

    introduce() {
        return `${this.title} ${super.introduce()}`;
    }
}

const anakin = new Jedi('Anakin', 'Skywalker');
const quinGon = new JediMaster('Master', 'Qui-Gon', 'Jinn');

console.log(anakin.name);
console.log(quinGon.title);

console.log(anakin.introduce());
console.log(quinGon.introduce());
