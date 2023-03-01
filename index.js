const inquirer = require('inquirer');
const teamMembers = [];
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const fs = require("fs");
const { Console } = require('console');
const generateTemplate = require("./src/generateTemplate");









const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the the manager?',
            validate: managerNameInput => {
                if(managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter a valid name!");
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the manager?',
            validate: managerIdInput => {
                if(managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter a valid Id!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the the manager?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the office number of the the manager?'
        },


    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.mangerOffice);
        teamMembers.push(manager);
        menuPrompt();
    });
};

const menuPrompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "employeeList",
            message: "Which employee would you like to add next?",
            choices: ['Engineer','Intern',"Finish building the team"]
        }
    ]).then(userChoice => {
        switch (userChoice.employeeList) {
            case "Engineer":
                engineerPrompt();
                break;
            case "Intern":
                internPrompt();
                break;
            default:
                buildTeam();
        }
    });
};

const engineerPrompt = () => {
    console.log('\x1b[32m%s\x1b[0m',`
    ---------------------------- 
        Building an Engineer
    ----------------------------
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the id of the engineer?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the engineer?'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is the github of the engineer?'
        },

    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        menuPrompt();
    });
};

const internPrompt = () => {
    console.log('\x1b[32m%s\x1b[0m',`
    ---------------------------- 
        Building an Intern
    ----------------------------
 
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?'
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the id of the intern?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school of the intern?'
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        menuPrompt();
    });
};


const buildTeam = () => {
    console.log('\x1b[32m%s\x1b[0m',`
    ---------------------------- 
             Built team! 
    ----------------------------
`); 
console.log(teamMembers);

fs.writeFileSync("./dist/teamprofile.html", generateTemplate(teamMembers));





};


intit = () => {
    managerPrompt();
};


intit();