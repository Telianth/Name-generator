function theName(){
 const firstNameSyllables= ['gil','zi','thar','der','xal','na','ma','kil','xar','dar',
  'lar','xen','un','vor','mar','il','al','ul','gar','zan','seg','dir','dalan',
  'nek', 'for', 'ghel', 'bor','yd','ad','na','ren','sal','xyl','ny','yar','var',
  'shik', 'shar','vu','ash'];
  const middleNameSyllables=['von','van','bin','an','de'];  
//Integer Function
  function getInteger(min,max){
    return Math.floor((Math.random() * (max-min)) + min);
  }
  
  //Randomizer
  function createFirstName(){
      let numberOfSyllables = getInteger(3,4); //Length of Name
   let firstName='';
   for (let i = 0; i < numberOfSyllables ; i++) {
      let  syllable=Math.floor((Math.random() *firstNameSyllables.length));
     firstName+=firstNameSyllables[syllable];
     firstName=firstName[0].toUpperCase() +firstName.slice(1);//Capitalization
}

 return firstName;
 };
function createLastName(){
  let lastName='';
  let numberOfSyllables = getInteger(2,4);//Length of Name
  for (let i = 0; i < numberOfSyllables ; i++) {
      let syllable=Math.floor((Math.random() *firstNameSyllables.length));
    lastName+=firstNameSyllables[syllable];
    lastName=lastName[0].toUpperCase() +lastName.slice(1);//Capitalization
}    
    return lastName;
}
return createFirstName() + ' '+ createLastName();
}
console.log(theName());
