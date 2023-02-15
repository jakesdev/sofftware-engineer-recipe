console.log('====Inheritance Principle====');

export class SmartPhone {
  color!: string;
  os!: string;
  memory!: string;

  constructor(init?: Partial<SmartPhone>) {
    Object.assign(this, init);
  }

  getSmartPhoneInfo() {
    console.log(`
      Color: ${this.color}
      OS ${this.os}
      Memory: ${this.memory}
    `);
  }
}

// this Iphone inheritance and using method of SmartPhone
export class IPhone extends SmartPhone {}
// this Android inheritance and using method of SmartPhone
export class Android extends SmartPhone {}

const iphone1 = new IPhone({
  color: 'red',
  os: 'iOS',
  memory: '64gb',
});

const iphone2 = new IPhone({
  color: 'red',
  os: 'iOS',
  memory: '64gb',
});

const bag = [iphone1, iphone2];

for (const phone of bag) {
  phone.getSmartPhoneInfo();
}
