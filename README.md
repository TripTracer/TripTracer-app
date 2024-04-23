#CryptoApp
This a crypto curreny mobile application that has been developed by a [react-native](https://reactnative.dev/) and TypeScript repository. This original project comprises three distinct parts, each corresponding to one of three different platforms. Here you are working on the mobile application part which is an Expo software. Below are some important considerations to keep in mind while working on this project(if you join to this project). You can refer to this file as the project's documentation.

## Getting Started

First, run the development server:

```bash
# development
$ npx expo start
```

Install the Expo application on your phone and scan the QR code to run the application on your device. You can also run the mobile application if you have already installed a simulator on your computer.

## Test

```bash
# unit tests
$ npm run test
```

## Git
This project has three different branches:
- production
- demo
- development

Git flow for before when you start working on a new feature or fixing a bug is as follows:
1. Pull repo from production
2. Create a new feature/fix branch

Git flow for after you finish working on a new feature or fixing a bug is as follows:
1. Pull request to development branch
2. Rebase from production
3. Solving the conflicts
4. Request for review

The feature branch should be created in the below format:
```bash
feature/{issue-number}-{issue-title}
```

Each new feature will be added to the development branch, with no direct pull requests (PRs) to the demo or production branches. New features will be incorporated into the development branch using a squash merge command, resulting in a single commit for each feature. 

We will then use a regular merge command to move changes from the development branch to the demo branch, and similarly from the demo to the production branch.

## Unit Tests
We will use Jest for unit testing. All test files will be located alongside their corresponding files, enabling us to easily update or develop tests when new features are added to specific components. 

Additionally, we have a __tests__ directory within the src directory for cases where separate test organization is necessary. 

## Docker
Please ensure that Docker is installed and running on your machine. To install the Docker image, you just need to run the following command:
```bash
docker build -t prefered-name .
```

After this step, the Docker image will be installed on your local machine. Then, to run the Docker image, use the following command:

```bash
docker up prefered-name
```


## Clean code and comments
Each component should feature clean, well-written code with minimal comments. We adhere to the principle that code should be self-explanatory, thereby reducing the need for extensive commenting. However, it is essential to include clear and concise comments that clarify the following aspects:

- The purpose and functionality of the code.
- The input and output arguments.

For internal documentation, we will use single-line comments. Multi-line comments are reserved for external documentation.

These titles will be used for commits names:
feat: Used when adding a new feature or functionality.
chore: Used for routine tasks like package updates.
refactor: Used when refactoring code without adding new features.
fix: Used when fixing a bug.
test: Used for adding or modifying tests.
doc: Used for updating the documentation.


## How to install a new package?
To install a package, use npm. Before adding any new components, please seek approval from the team leader to ensure their necessity and alignment with our project goals.

## How to work on a feature?

To develop/implement a feature, please follow these steps:
- Update your local development branch to get sure you have the latest version:
```bash
git checkout development
git pull origin development
```

- Add a new feature branch with name "feature-{feature name}" form the development branch:
```bash
git checkout -b feature-{feature name}
```

- Start working on the feature branch by adding a new commits for different parts of the feature(choose the right ccommit's title type)

- Send the commits to the remote branch 
```bash
git pull origin development
git push origin feature-{feature name}
```
- Continue developing the feature, adding more commits to the remote branch upon completing each part locally.

- Make a PR to the development branch after finishing the whole feature.

- Add other developers to review the feature.

- Make necessary changes based on the review feedback.

- Repeat the above steps to finalize the feature.

When you are working on a feature, Please consider thaese concepts:

- Don't ask for a review otherwise you are totally sure that the feature is ready to be reviewed.
- Each time before pushing commits to the feature branch on the remote server, Please make sure that your local feature branch is up to date with the remote development branch.
- Each time after following to preceding step, If you saw some conflicts, you have to solve those conflicts without removing the other people code!
- Choose the right and the most appropriate title for your commits.

## License

CryptoApp is [MIT licensed](LICENSE).














