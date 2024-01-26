// TYPESCRIPT - Decorator
// Class Decorator

function version(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version, __name: "Aníbal"})
    };
}

// Attribute decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor que ${length}`)
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api {
//    @minLength(10)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api = new Api("ABCDEFGHIJKL");
console.log(api.name);