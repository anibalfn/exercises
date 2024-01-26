// TYPESCRIPT - Classes
// Data Modifiers: 1) Public, 2) Private, 3) Protected;

class Character {
    protected name?: string;
    readonly strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.strength} points!`)
    }
}

//class Character = super()
// class Magician subclass

class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const char1 = new Character("Garen", 50, 65);
const char2 = new Magician("Seraphine", 7, 55, 90);
char1.skill = 62;