# Recipe App - ReactJS & Redux
# Overview
This is a Recipe App built with ReactJS and Redux that allows users to:
✅ Browse and search for recipes
✅ Filter recipes based on categories and dietary preferences
✅ View recipe details, including ingredients and instructions
✅ Mark recipes as favorites and save them

# Features
1.Fetches recipe data from the Edamam API
2.Search functionality to find recipes based on keywords
3.Filters for vegetarian, gluten-free, and categories
4.Favorite feature to save and manage liked recipes
5.Built using ReactJS, Redux, and Tailwind CSS for styling

# Folder Structure
recipe-app/
│── public/ 
│── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Main pages
│   ├── redux/         # Redux store, slices, actions
│   ├── styles/        # CSS or Tailwind styles
│   ├── App.js         # Main React component
│   ├── index.js       # Entry point
│── package.json       # Dependencies & scripts
│── README.md          # Project Documentation

# Installation & Setup

1.Clone the Repository
git clone https://github.com/your-username/recipe-app.git
cd recipe-app

2️.Install Dependencies
npm install

3. Set Up API Keys
Get your API Key & App ID from Edamam API
Create a .env file in the root and add:
REACT_APP_EDAMAM_APP_ID=your_app_id
REACT_APP_EDAMAM_API_KEY=your_api_key

4️.Start the Project
npm start
Runs the app on http://localhost:3000/.
