const a = ["유재석", "정준하", "박명수"];
const b = ["정형돈", "하하", "노홍철"];

const c = [...a, ...b];
console.log(c);

class Monster {
  constructor(id, name, type){
    this.id;
    this.name;
    this.type;
  };
  getName(){
    return this.name;
  }
}
  const test = new Monster(1, a[0], "MC");
  console.log(test);
  
