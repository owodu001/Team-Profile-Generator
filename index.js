const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



function runInquirer() {
    const promptArray = [{
        type: "input",
        message: "What is your name?",
        name: "name"
    }, {
        type: "input",
        message: "What is your ID?",
        name: "id"
    }, {
        type: "input",
        message: "What is your email?",
        name: "email"
    }, {
        type: "list",
        message: "What is your title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    // const promptArray = [{
    //     type: "input",
    //     message: "What is your name?",
    //     name: "name"
    // }];

    return inquirer
        .prompt(promptArray);
}

function runInquirerManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "office number"
    }];

    // function runInquirerEngineer() {
    //     const promptArray = [{
    //         type: "input",
    //         message: "What is your github?",
    //         name: "github"
    //     }];

    //     function runInquirerIntern() {
    //         const promptArray = [{
    //             type: "input",
    //             message: "What school do you attend?",
    //             name: "school"
    //         }];

    return inquirer
        .prompt(promptArray);
}



async function run() {
    let employeeArray = [];
    const maxTimes = 2;
    for (i = 0; i < maxTimes; i++) {
        var promise = new Promise((resolve, reject) => {
            runInquirer()
                .then(function({ name, id, email, title }) {
                    console.log(title);
                    if (title === "Manager") {
                        runInquirerManager().then(function(officeNumber) {
                            const employee = new Manager(name, id, email, officeNumber);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");

                        });
                    }
                    // const employee = new Employee(name, id, email);
                    // employee.getName();
                    // employee.getId();
                    // employee.getEmail();
                    // employee.getRole();

                    // resolve("done");
                }).catch(function(err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        var result = await promise;
        console.log(result);
    }

    console.log(employeeArray.length);
}
run()
    // push their response into an empty array to eventually compare with choices array
    // have 3 if statements and based on the matches, have another inquirer prompt to ask 
    // unique question

// const manager = new Manager();
// const intern = new Intern();
// const engineer = new Engineer();


// const fs = require("fs");

// // open

// fs.write("<html>");
// fs.write("<body>");
// fs.write("</body>");
// fs.write()

// function fun1(firstName, lastName) {

// }


function doWork() {

    let employee = new Engineer("Joe", 123, 'joe@foo.com', 'github.com/user/foo')

    let emps = [];
    emps.push(employee);


    let html = "";
    for (let i in emps) {
        let cardInfo = {
            name: employee.getName(),
            role: employee.getRole()
        }

        if (employee.getRole() == "Engineer") {
            cardInfo.bottomSlot = employee.getGithub();
        }

        html += getCardHtml(cardInfo);

    }
    console.log(html);

}

function getCardHtml(cardInfo) {
    let html = "<div>";
    html += "<div>";
    html += cardInfo.name;
    html += "</div>";
    html += "<div>";
    html += cardInfo.bottomSlot;
    html += "</div>";
    html += "</div>";
    return html;
}
// doWork()