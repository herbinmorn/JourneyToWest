function Cast(name, age, gender, category, strength, hitpoints){
    this.name =name;
    this.age = age;
    this.gender = gender;
    this.category =  category;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function(){
        console.log("Name: " + this.name + "\nAge: " + this.age + "\nGender" +
         this.gender + "\nCategory" + this.category + "\nStrength" + this.strength + "\nHitpoints" + this.hitpoints);

         console.log("\n-------------\n");

    };


    this.isAlive = function(){
        if(this.hitpoints > 0){
            console.log(this.name + "is still alive!");
            console.log("\n-------------\n");
            return true;
        }
        console.log(this.name + "has died!");
        return false;
    };

    this.attack = function(character2){
        character2.hitpoints -= this.strength;
    };

    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    };

}

var Wukong = new Cast("Wukong", 500, "M", "Good", 5, 500);
var BaJie = new Cast("BaJie", 800,"M","Good",4, 400 );
var LadySkeleton =new Cast("LadySckeleton", 200, "F", "Evil",4, 50);
var KingEagle = new Cast("KingEagle", 1000, "M", "Evil",5, 500);

Wukong.printStats();
BaJie.printStats();
LadySkeleton.printStats();
KingEagle.printStats();

LadySkeleton.attack(Wukong);
Wukong.printStats();
Wukong.isAlive();

LadySkeleton.levelUp();
LadySkeleton.printStats();

while(Wukong.isAlive() === true && LadySkeleton.isAlive()=== true){
    Wukong.attack(LadySkeleton);
    LadySkeleton.attack(Wukong);
    
    Wukong.printStats();
    LadySkeleton.printStats();
}
