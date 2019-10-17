// CODE here for your Lambda Classes
//Lambda Class starts here
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(teacher){
        super(teacher);
        this.specialty = teacher.specialty,
        this.favLanguage = teacher.favLanguage,
        this.catchPhrase = teacher.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
    
}

class Students extends Person{
    constructor(scholar){
        super(scholar);
        this.previousBackground = scholar.previousBackground,
        this.className = scholar.className,
        this.favSubjects = scholar.favSubjects,
        this.grade = scholar.grade
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor{
    constructor(manager){
        super(manager);
        this.gradClassName = manager.gradClassName,
        this.favInstructor = manager.favInstructor
    }
    standUp(name, channel){
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(name, subject){
        return `${name} debugs ${this.name}'s code on ${subject}`;
    }
}

//End of Lambda Class

//Start of Attributes for classes
const doug = new Person({
    name: 'Doug',
    age: 45,
    location: 'DC'
});

const dave = new Instructor({
    name: 'Dave',
    age: 35,
    location: 'Texas',
    specialty:'Math',
    favLanguage: 'Spanish',
    catchPhrase: 'Peace Out!'
})

const doc = new Students({
    name: 'Doc',
    age: '22',
    location: 'Arizona',
    previousBackground: 'Sheepherder',
    className: 'Web Dev',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 88
})

const debbie = new ProjectManager({
    name: 'Debbie',
    age: 30,
    location: 'Iowa',
    specialty: 'Computer Science',
    favLanguage: 'Italian',
    catchPhrase: 'Keep it 100',
    gradClassName: 'Web25',
    favInstructor: 'Mr.Science'
})

//End of Attributes for classes

//Start console log
console.log(doug.speak());
console.log(dave.demo('HTML'));
console.log(dave.grade('JavaScript'));
console.log(doc.listsSubjects());
console.log(doc.PRAssignment('Ruby'));
console.log(doc.sprintChallenge('Advanced CSS'));
console.log(debbie.standUp('Bob','web25'));
console.log(debbie.debugsCode('Barb','React'));
