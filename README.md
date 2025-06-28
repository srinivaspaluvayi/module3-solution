# 🔍 AngularJS Menu Search Application

A responsive web application built using **AngularJS** to search and filter restaurant menu items by description.  
Created as a solution to **Module 3** of Coursera’s “HTML, CSS, and JavaScript for Web Developers” course.

---

## 🚀 Features

### 🔎 Search Functionality
- Search menu items by typing keywords found in item descriptions
- Dynamically filters items in real-time using AngularJS controller logic

### 🗑️ Item Removal
- “Don’t want this one!” button allows users to remove individual items from the results list

### 📱 Responsive Design
- Fully responsive using **Bootstrap CSS**
- Optimized for desktop and mobile devices

---

## 🛠 Tech Stack

- **Frontend**: AngularJS (1.x), HTML5, CSS3
- **Styling**: Bootstrap (CDN)
- **Logic**: JavaScript with AngularJS Controllers and Services

---

## 📂 Folder Structure

```
module3-solution/
├── css/
│   └── styles.css          # Custom styles (optional)
├── js/
│   ├── app.js              # AngularJS module and controller
│   └── menuSearchService.js # Service to fetch and filter data
├── index.html              # Main page with UI
└── README.md               # Project documentation
```

---

## 🔧 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/srinivaspaluvayi/module3-solution.git
cd module3-solution
```

### 2. Open in Browser
- Simply open `index.html` in your web browser (no server setup needed)

---

## 🧪 How It Works

- App fetches a list of all menu items from a remote API (JSON data)
- Filters items based on the presence of the keyword in the description
- Displays matching results in a formatted list
- Lets user remove results one-by-one from the visible list

---

## 📸 Example

- Search: `"chicken"`
- Matches: Items with “chicken” in their description
- Action: Remove irrelevant ones using the "Don't want this one!" button

---

## 🎓 Acknowledgments

Project built as part of [Coursera](https://www.coursera.org/learn/single-page-web-apps-with-angularjs)'s **Module 3 Assignment**  
Course by [Johns Hopkins University](https://www.jhu.edu/)
