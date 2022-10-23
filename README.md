<h2 align="center"> Roomex Test Automation Framework </h2>

<h4 align="center">
</h4>

#### Requirements
* NodeJS
* JDK
* VisualStudioCode
-----
#### Tech stacks:
[![WebdriverIO](https://img.shields.io/badge/-WebdriverI/O-EA5906?logo=WebdriverIO&logoColor=white)](https://webdriver.io/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=black)](https://www.typescriptlang.org/)
[![Mocha](https://img.shields.io/badge/-Mocha-%238D6748?logo=Mocha&logoColor=white)](https://mochajs.org/)
[![CucumberIO](https://img.shields.io/badge/-Cucumber.io-brightgreen?logo=cucumber&logoColor=white)](https://cucumber.io/)
[![ChaiJS](https://img.shields.io/badge/-ChaiJS-FEDABD?logo=Chai&logoColor=black)](https://www.chaijs.com/)
[![SuperTest](https://img.shields.io/badge/-SuperTest-07BA82?logoColor=white)](https://github.com/visionmedia/supertest)
-----
#### Features
    - Web and API Testing
    - Cucumber BDD framework
    - Page Object Design pattern
    - Screenshot in report for failed tests
    - Use of types for method params optimization
    - Improved import statement using tsconfig path
-----
#### Framework Structure
    <img width="224" alt="project_structure" src="https://user-images.githubusercontent.com/11722393/197422317-d64aced2-5243-4a1a-aff7-0d64fa8f0b15.png">

-----
#### Clone Repository
```bash
1. git clone PROVIDE URL
2. Navigate to `RoomexQAAssignment`
```
-----

### Running UI Tests
Install dependencies:
> Switch to the "ui-automation" folder and then run below command
```bash
yarn install
```

Setup .env file:<br>
create `.env` file inside ui_automation folder and update content with reference to `.env.example`

Run test in local:
> By default test will run in Chrome browser.
> Update MODE=LOCAL in .env file to see test running in browser.
```bash
yarn run test:ui     [ Cucumber BDD tests ]
```

Generate Report:
```bash
yarn report:allure
```
-----

### Running API Tests
Install dependencies:
> Navigate to "api-automation" folder and then run below command
```bash
yarn install
```

Run test:
```bash
yarn test:api
```

Generate Report:
```bash
yarn report:allure
```

----

#### Test Reports

##### UI Test Report
   <img width="600" alt="UI_Report" src="https://user-images.githubusercontent.com/11722393/197422333-095afded-5658-4ef4-864a-59004ea8479e.png">

-----


##### API Test Report
   <img width="600" alt="API_Report" src="https://user-images.githubusercontent.com/11722393/197422344-ee24877a-3077-48ae-8bb7-3b1d6659f7f6.png"
        
-----
