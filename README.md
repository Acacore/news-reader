# React + Vite


# AcaNews News Reader Web App

## 📌 Project Overview
The **AcaNews** is a responsive web application built with React that fetches and displays the latest news articles from a public news API. The application allows users to browse top headlines, search for news by keyword, and read brief summaries before visiting the original source for full articles.

The goal of this project is to provide a simple, user-friendly interface for accessing news from multiple sources in one place.

---

## 🚀 Features
- Fetches and displays **top news headlines** on page load
- **Search functionality** to find news articles by keyword
- News article cards displaying:
  - Article image (if available)
  - Title
  - Brief description/summary
  - Link to the full article on the source website
- **Responsive design** using Tailwind CSS for mobile and desktop devices

### Optional / Planned Features
- Category filters (e.g., Technology, Sports, Health)
- Country selection for localized news
- Pagination or “Load More” functionality

---

## 🔗 API Used
- **API Name:** NewsAPI.org
- **Endpoints:**
  - `GET /top-headlines` – Fetches top news headlines by country or category
  - `GET /categoryname` – Searches for news articles by keyword
- **Requirements:** Free API key (with limited daily requests)

### Data Displayed
- Article title
- Description
- Image
- Published date
- URL to full article

---

## 🛠️ Technologies Used
- **React** (JavaScript library for building UI)
- **Tailwind CSS** (Utility-first CSS framework)
- **NewsAPI** (External data source)
- **JavaScript (ES6+)**

---


## 📂 Project Structure
.
├── api
│   └── news.js
├── dist
│   ├── assets
│   │   ├── index-DPFfH_gc.css
│   │   └── index-je7v9Xmn.js
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── project_tree.txt
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── API.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Headlines.jsx
│   │   ├── Layout.jsx
│   │   ├── NewsCard.jsx
│   │   ├── NewsGrid.jsx
│   │   ├── NewsSearch.jsx
│   │   └── ScrollToTop.jsx
│   ├── contexts
│   │   └── LoadingContext.jsx
│   ├── hooks
│   │   └── useDebounce.js
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       ├── AboutUs.jsx
│       ├── ArticleDetails.jsx
│       ├── CategoryPages.jsx
│       ├── Contact.jsx
│       ├── Home.jsx
│       ├── PrivacyPage.jsx
│       └── TermsOfService.jsx
├── taildwind.config.js
├── vercel.json
└── vite.config.js

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/acacore/news-reader-app.git


Navigate to the project directory:

cd news-reader-app


Install dependencies:

npm install


Create a .env file in the root directory and add your API key:

VITE_NEWS_API_KEY=your_api_key_here


Start the development server:

npm run dev

🧪 Error Handling & Considerations

API rate limits are handled gracefully with user-friendly messages.

Loading and error states are implemented for better user experience.

The application is optimized for mobile and desktop views.

📅 Project Timeline
Week	Tasks
1	Research News APIs, obtain API key, set up React project, install Tailwind CSS
2	Build News component, fetch and display top headlines
3	Implement search functionality and loading/error states
4	Add advanced features and improve responsiveness
5	Testing, final styling, deployment, and documentation
## 🚀 Deployment

The application is deployed on a production server and is publicly accessible.

**Live Demo**: [https://news.acacore.com](https://news.acacore.com)

(Deployed using a modern hosting platform such as Vercel, Netlify, or equivalent — automatic CI/CD pipelines are recommended for future updates.)

👤 Author

Author
Edoh Mensah Akpedzene
Institution: ALX
Program: ALX Frontend
Nexus Poroject Cohort 8 (2025)

---

