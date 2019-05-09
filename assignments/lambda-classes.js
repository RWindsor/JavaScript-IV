// CODE here for your Lambda Classes
class Person {
    constructor (attribute){
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
    }
    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor (instrAtt){
        super(instrAtt);
        this.specialty = instrAtt.specialty;
        this.favLanguage = instrAtt.favLanguage;
        this.catchPhrase = instrAtt.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}.`;
    }
    grade (subject){
        return `${this.name} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor (studAtt){
        super(studAtt);
        this.previousBackground = studAtt.previousBackground;
        this.className = studAtt.className;
        this.favSubjects = studAtt.favSubjects;
    }
    listsSubjects (){
        return this.favSubjects.map(function (list){
            return list;
        });
    }
    prAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge (subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor (pmAtt){
        super (pmAtt);
        this.gradClassName = pmAtt.gradClassName;
        this.favInstructor = pmAtt.favInstructor;
    }
    standUp (channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`;
    }
}

//Instructors

const joey = new Instructor ({
    name: 'Joey',
    location: 'New York City',
    age: 27,
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: 'I need my Java in the morning'
});
//console.log (joey);

const phoebe = new Instructor ({
    name: 'Phoebe',
    location: 'Austin',
    age: 34,
    favLanguage: 'Javascript',
    specialty: 'Front-end Development',
    catchPhrase: 'Stay calm and spellcheck your code' 
});
// console.log(phoebe);

// Students

const monica = new Student ({
    name: 'Monica',
    location: 'Los Angeles',
    age: 22,
    previousBackground: 'No coding background',
    className: 'Web20',
    favSubjects: ['HTML', 'CSS', 'Gaming']
});
// console.log(monica);

const chandler = new Student ({
    name: 'Chandler',
    location: 'Seattle',
    age: 43,
    previousBackground: '7 years in IT',
    className: 'Web20',
    favSubjects: ['Crytocurrency', 'Back-end']
})
// console.log (chandler);

// Project Managers

const rachel = new ProjectManager ({
    name: 'Rachel',
    location: 'Orlando',
    age: 29,
    gradClassName: 'Web18',
    favInstructor: 'Phoebe'
});
// console.log(rachel);

const ross = new ProjectManager ({
    name: 'Ross',
    location: 'Los Angeles',
    age: 25,
    gradClassName: 'Web17',
    favInstructor: 'Joey'
});
// console.log(ross);

// Test methods
console.log(ross.speak());
console.log(joey.demo('Advanced Javascript'));
console.log(phoebe.grade('Adavanced Javascript'));
console.log(monica.listsSubjects());
console.log(chandler.prAssignment('Advanced Javascript'));
console.log(monica.sprintChallenge('Advanced Javascript'));
console.log(rachel.standUp('Web20'));
console.log(ross.debugsCode('Advanced Javscript'));
