// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender - attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${this.name} recives a perfect score on ${subject}`;
    }
};


class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listSubjects() {
       return this.student.favSubjects;
    };

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }
    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
};


const sara = new Instructor ({
    name: "Sara",
    age: 29,
    location: "LA",
    gender: "F",
    specialty: "Front End Design",
    favLanguage: "CSS",
    catchPhrase: "I love Design!"
});

const kieran = new Instructor ({
    name: "Kieran",
    age: 26,
    location: "SF",
    gender: "M",
    specialty: "React",
    favLanguage: "Javascript",
    catchPhrase: "I love Meme\'s!"
});

const brian = new Student ({
    name: "Brian",
    age: 25,
    location: "NJ",
    gender: "M",
    previousBackground: "Mechanic",
    className: "CSPT23",
    favSubjects: ["C#", "Python", "Java"],
});

const marie = new Student ({
    name: "Marie",
    age: 37,
    location: "TX",
    gender: "F",
    previousBackground: "Photography",
    className: "CS78",
    favSubjects: ["CSS", "HTML", "Javascript"],
});

const ari= new ProjectManager ({
    name: "Ari",
    age: 23,
    location: "CA",
    gender: "M",
    gradClassName: "CS14",
    favInstructor: "Josh"
});

const emily= new ProjectManager ({
    name: "Emily",
    age: 27,
    location: "CA",
    gender: "F",
    gradClassName: "CS17",
    favInstructor: "Dan"
});


console.log(marie.speak());
console.log(demo("Javascript"));