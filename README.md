📸 Gallery & JSON Viewer Project

This is a simple web application built using HTML, CSS, and JavaScript. The project demonstrates fetching data from two APIs and dynamically displaying it in a responsive gallery layout.

JSON API: JSONPlaceholder

Image API: Lorem Picsum

The project also includes a pagination feature for the gallery and a search input to navigate pages.


![image]("https://github.com/kriscodes07/html-css-js-project-api-project/blob/1cc37aa3186a66c1b4fab6f4bf800151fdb2046f/Screenshot%202026-03-06%20231858.png")

💻 Features

Gallery View (Lorem Picsum)

Fetches images from the Lorem Picsum API.

Displays images with author name and link to source.

Responsive card layout.

Pagination: Enter page number in the search bar to load different pages.

JSON Data View (JSONPlaceholder)

Fetches post data from JSONPlaceholder API.

Displays user id, title, and body in styled cards.

Navigation Bar

Simple navbar to switch between Gallery and JSON Data views.

Fixed styling for better usability.

Responsive Layout

Gallery and JSON cards are responsive and adapt to screen size.

Smooth scrolling for long content.

📁 Project Structure
project-folder/
│
├─ index.html           # Main HTML file
├─ index.css            # CSS styles for navbar, cards, and gallery
├─ mainpage1.js         # JavaScript for fetching APIs and DOM rendering
└─ assets/              # Optional: Images or other static assets
⚙️ How It Works

Gallery Page (Lorem Picsum)

Uses fetch to get images:

fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)

Loops through the data and creates cards dynamically.

Pagination input allows user to enter page number; hitting Enter updates gallery.

JSON Data Page (JSONPlaceholder)

Uses fetch to get post data:

fetch('https://jsonplaceholder.typicode.com/posts')

Loops through the posts and displays them in styled cards.

Pagination / Search

The input box listens for Enter key.

Updates the page number and refreshes gallery data.

Input resets after submission for better UX.

🖼 Screenshots

(Add screenshots here showing gallery view and JSON data view)

🚀 How to Run

Clone the repository:

git clone https://github.com/your-username/your-repo.git

Open index.html in your browser.

Navigate using the navbar links:

Gallery View → Shows images from Lorem Picsum.

JSON Data View → Shows posts from JSONPlaceholder.

Use the page input on the gallery page to navigate pages.

⚡ Technologies Used

HTML5

CSS3 (Flexbox, responsive design)

JavaScript (ES6, Fetch API, DOM manipulation)

APIs:

JSONPlaceholder for post data

Lorem Picsum for image gallery

📌 Notes

The gallery uses dynamic card rendering using JavaScript forEach.

The project does not require a backend; it’s fully static.

Works on modern browsers.

🔗 Links

JSONPlaceholder API

Lorem Picsum API

You can also add live demo if you host it using GitHub Pages:

https://your-username.github.io/your-repo/
