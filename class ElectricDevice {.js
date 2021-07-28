class ElectricDevice {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.isOn = false;
    }

    plugIn() {
      console.log(this.name + " is on.");
      this.isOn = true;
    }

    unplug() {
      console.log(this.name + " is on.");
      this.isOn = false;
    }
  }
  
  class Lamp extends ElectricDevice {
    constructor (name, brand, power, bulbType) {
      super(name, power);
      this.brand = brand;
      this.bulbType = bulbType;
      this.isOn = true;
    }
  }
  
  class Computer extends ElectricDevice {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isOn = false;
    }
  }
  
  const tableLamp = new Lamp("Table lamp", "XZ", 5, "LED");
  
  const homePC = new Computer("Desktop", "Intel", 120, "stationary", "for work");
  
  tableLamp.unplug();

  homePC.plugIn();
  
  console.log(homePC)
  console.log(tableLamp)