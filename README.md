# InterestFusion_HTF
InterestFusion: Combat loneliness in education by connecting individuals based on shared interests. Secure profiles, matching, and future plans for scalability and enhanced safety


InterestFusion is a platform aimed at addressing mental health issues such as loneliness, alienation, and social awkwardness within education institutions. By connecting individuals based on shared interests and hobbies, we aim to foster meaningful relationships and combat feelings of isolation.

## Project Details

### Current Situation
- Designed for a class of fewer than 100 people initially
- Users can create, update, and delete their profiles
- Profiles are authenticated by favourite technique
- Users can view and match with others based on similar interests/hobbies
- User verification is done via OTP, potentially using the Vonage API
- Connected users can contact each other using SSN

### Future Plans
- Scale platform to support larger databases and user populations
- Improve stability and user experience
- Implement features for blocking/hiding matches and reporting users
- Enable monitored and safe chat functionality between connected individuals
- Optimizing the matching algorithm using tree data structure for matching the tags used in the profile

## Unique Selling Points (USPs)
- Minimalistic user data collection, ensuring privacy
- Profile information is only shared after confirmation from both users
- Users receive notifications of matching interests, but details are shared only upon mutual agreement
- No cheesey or overthought answers required
- Emphasis on user privacy and data security
- Notifications facilitate mutual consent before sharing profile information

## Project Setup and Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Steps to Set Up the Project

1. **Clone the Repository**: Clone the project repository to your local machine.
   ```bash
   git clone https://github.com/KGupta2601/HackThisFall_InterestFusion.git
   ```

2. **Navigate to the Project Directory**: Change into the project directory.
   ```bash
   cd HackThisFall_InterestFusion
   ```

3. **Install Dependencies**: Install all the required dependencies using npm or yarn.
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Set Up Environment Variables**: Create a `.env` file in the root directory of the project and configure it as per the example provided in the `.env.example` file.

5. **Run MongoDB**: Ensure your MongoDB instance is running locally or configure your `.env` file to use a cloud-based MongoDB instance.

6. **Start the Development Server**: Run the application locally.
   ```bash
   npm start
   ```

7. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

## Development Guidelines

We aim to maintain high standards of code quality and consistency. Please adhere to the following guidelines:

### Technology Stack
We encourage using the following technologies while contributing:
- **Frontend**: React, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

### Coding Standards
- Follow best practices for React and JavaScript development.
- Use meaningful variable and function names.
- Ensure all code is well-documented and modular.
- Use Prettier for code formatting.

### Branching and Commits
- Create a new branch for every feature or bug fix.
  ```bash
  git checkout -b <branch-name>
  ```
- Write clear and concise commit messages.
  ```bash
  git commit -m "Add: Feature to match users based on shared interests"
  ```

### Testing
- Ensure that your changes are well-tested.
- Run the project locally to verify your changes.
  ```bash
  npm start
  ```

### Pull Requests
- Push your branch to your forked repository.
  ```bash
  git push origin <branch-name>
  ```
- Create a pull request (PR) to the `main` branch of the original repository.
- Provide a detailed description of your changes in the PR template.
- Reference any relevant issues or feature requests in your PR.

## Community Guidelines
- Be respectful and inclusive.
- Open issues for any bugs or feature requests.
- Provide constructive feedback during code reviews.


