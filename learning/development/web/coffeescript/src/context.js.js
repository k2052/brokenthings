(function() {
  /* 
    As if this animal didn't have enough issues (like living in a zoo) it has constipation & bad context.
    
    As a sidenote zookeeper was the worst film about a gorilla (kevin james joke) I've ever seen.
    Like some sort of urban tarzan movie.    
    
    As a furhter sidenote the best movie about a gorilla I've eever seen was ironically a king of fishes. The fischer king.
    You should definitely give it a watch. 
    Robin Williams plays a schizophrenic gorilla that escapes & runs naked through central park. 
    Well, at least thats how I remember it. A great & hairy film.
  */
  var AnimalWithConstipationandBadContext, HealthyAnimal, animal1, animal2, bob;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  AnimalWithConstipationandBadContext = (function() {
    function AnimalWithConstipationandBadContext() {}
    AnimalWithConstipationandBadContext.prototype.crap_level = 9;
    AnimalWithConstipationandBadContext.prototype.shit = function() {
      return "My current crap backup is " + this.crap_level;
    };
    return AnimalWithConstipationandBadContext;
  })();
  HealthyAnimal = (function() {
    function HealthyAnimal() {
      this.shit = __bind(this.shit, this);
    }
    HealthyAnimal.prototype.crap_level = 4;
    HealthyAnimal.prototype.shit = function() {
      return "My current crap backup is " + this.crap_level;
    };
    return HealthyAnimal;
  })();
  animal1 = new HealthyAnimal;
  console.log(animal1.shit());
  animal2 = new AnimalWithConstipationandBadContext;
  console.log(animal2.shit());
  bob = function() {
    return console.log(animal2.shit());
  };
  bob();
  $("#elem").click(__bind(function(event) {
    console.log('clicked');
    return console.log(animal2.shit());
  }, this));
}).call(this);