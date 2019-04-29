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
        return `${student.name} recives a perfect score on ${subject}`;
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
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${this.name} love's ${this.favSubjects[i]}`);
          }
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
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
    favInstructor: "Josh",
    favlanguage: "Jacascript",
    specialty: "React",
    catchPhrase: "I love JS!"
});

const emily= new ProjectManager ({
    name: "Emily",
    age: 27,
    location: "CA",
    gender: "F",
    gradClassName: "CS17",
    favInstructor: "Dan",
    favlanguage: "CSS",
    specialty: "Flexbox",
    catchPhrase: "I love Web Development!"
});


console.log("Marie Speak \n", marie.speak());
console.log("Emily Speak \n", emily.speak());
console.log("Sara Demo \n", sara.demo("CSS"));
console.log("Keiran Demo \n", kieran.demo("Javascript"));
console.log("Ari Standup \n", ari.standUp("Slack"));
console.log("sara grade \n", sara.grade(brian, "HTML"));
console.log("Marie list Subjects \n", marie.listSubjects());

console.log("Marie PRAassignment \n", marie.PRAssignment("callbacks"));
console.log("Brian Sprint Challenge \n", brian.sprintChallenge("Great Idea Web Page"));


console.log("Emily Debug \n ", emily.debugsCode(brian, "HTML"));
console.log("Ari debug \n", ari.debugsCode(marie,"classes"));


