// manager card creation 

const generateManager = function (manager) {
  return `
          <div class="col-4 mt-4 p-1">
            <div class="card h-100">
              <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>
                  <i class="fas fa-mug-hot mr-2"></i>  Manager
                </h4>
              </div>

              <div class="card-body">
                <p class="id">${manager.id}</p>
                <p class="email">
                  Email:
                  <a href="mailto:${manager.email}"
                    > ${manager.email}</a
                  >
                </p>
                <p class="office">${manager.officeNumber}: 1</p>
              </div>
            </div>
          </div>`
};


const generateEngineer = function (engineer) {
  return `<div class="col-4 mt-4 p-1">
<div class="card h-100">
  <div class="card-header">
    <h3>${engineer.name}</h3>
    <h4>
      <i class="fas fa-glasses mr-2"></i>
           Engineer
    </h4>
  </div>

  <div class="card-body">
    <p class="id">${engineer.id}</p>
    <p class="email">
      Email:
      <a href="mailto:${engineer.email}">${engineer.email}</a>
    </p>
    <p class="github">
      Github:
      <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a>
    </p>
  </div>
</div>
</div>`


};

const generateIntern = function (intern) {

  return`
<div class="col-4 mt-4 p-1">
<div class="card h-100">
  <div class="card-header">
    <h3>${intern.name}</h3>
    <h4>
      <i class="fas fa-user-graduate mr-2"></i>Intern
    </h4>
  </div>

  <div class="card-body">
    <p class="id">${intern.id}</p>
    <p class="email">
      Email:
      <a href="mailto:${intern.email}">${intern.email}</a>
    </p>
    <p class="school">${intern.school}</p>
  </div>
</div>
</div>
</div>
</div>`

};

const generateTemplate = (data) => {
    // cards array
    teamCardsArray = [];
  
    for (var i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole();
  
      //manager cards
      if (role === "Manager") {
        const managerCards = generateManager(employee);
        teamCardsArray.push(managerCards);
      }
      //engineer cards
      if (role === "Engineer") {
        const engineerCards = generateEngineer(employee);
        teamCardsArray.push(engineerCards);
      }
      //intern cards
      if (role === "Intern") {
        const internCards = generateIntern(employee);
        teamCardsArray.push(internCards);
      }
    }
  
    //join the cards
    const teamCards = teamCardsArray.join("");
  
    //passing information to generate template page
    const createTeam = generateTemplateHtml(teamCards);
    return createTeam;
  };
  
  //creating renderHTML
  const generateTemplateHtml = function (teamCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
    </head>
    <body>
      <header>
        <nav class="navbar" id="navbar">
          <div class="container-fluid">
            <span
            class="navbar-brand mb-0 h-50 w-100 text-center text-black bg-primary"
              id="navbar-text"
              >My Team</span
            >
          </div>
        </nav>
      </header>
      <main>
        <div class="container">
          <div class="row justify-content-center container-fluid" id="team-cards">
            <!-- cards -->
            ${teamCards}
          </div>
         </div>
      </main>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
  };
  
  //export
  module.exports = generateTemplate;