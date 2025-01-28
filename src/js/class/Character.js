export default class Character {
  
    constructor(name, type) {
        let defaultTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !defaultTypes.includes(type)) {
            throw new Error('Некорректные данные');    
        }  
   
        this.name = name;
        this.type = type;
        this.health  = 100;
        this.level  = 1;

    }
}