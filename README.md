<h1 align="center">📇 Contact List Manager</h1>

<p align="center">
  A full-stack Contact Management App built with <strong>React + Flask</strong>, deployed on <strong>Vercel</strong> and <strong>Render</strong>.
</p>

<hr />

<h2>🌐 Live Demo</h2>
<ul>
  <li>🚀 <strong>Frontend (React + Vite):</strong> 
    <a href="https://contact-list-three.vercel.app/" target="_blank">https://contact-list-three.vercel.app/</a>
  </li>
  <li>🔧 <strong>Backend (Flask API - Render):</strong> 
    <a href="https://contact-list-9x5p.onrender.com/" target="_blank">https://contact-list-9x5p.onrender.com/</a>
  </li>
</ul>

<h2>📦 Features</h2>
<ul>
  <li>Add new contacts with name and email</li>
  <li>Edit existing contact details</li>
  <li>Delete contacts</li>
  <li>Fully responsive UI with modals</li>
  <li>Backend API with SQLite and SQLAlchemy</li>
  <li>CORS-enabled API communication</li>
</ul>

<h2>📁 Folder Structure</h2>
<pre><code>
/backend         # Flask API
/frontend        # React Vite frontend
</code></pre>

<h2>🛠️ Tech Stack</h2>
<ul>
  <li>⚛️ React (Vite)</li>
  <li>🐍 Flask</li>
  <li>🗄️ SQLite</li>
  <li>🌐 Render (Backend hosting)</li>
  <li>▲ Vercel (Frontend hosting)</li>
</ul>

<h2>🧪 How to Use</h2>
<ol>
  <li>Visit the frontend: <a href="https://contact-list-three.vercel.app/">https://contact-list-three.vercel.app/</a></li>
  <li>Use the "Create New Contact" button to add entries.</li>
  <li>Click "Update" or "Delete" on any contact.</li>
  <li>All changes are synced in real-time with the Flask backend.</li>
</ol>

<h2>⚙️ Backend API Testing</h2>
<p>You can test these endpoints using <strong>Postman</strong> or <strong>cURL</strong>:</p>

<table border="1" cellpadding="8">
  <thead>
    <tr>
      <th>Endpoint</th>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/contacts</td>
      <td>GET</td>
      <td>Get all contacts</td>
    </tr>
    <tr>
      <td>/create_contact</td>
      <td>POST</td>
      <td>Add a new contact</td>
    </tr>
    <tr>
      <td>/update_contact/&lt;id&gt;</td>
      <td>PUT</td>
      <td>Update a contact</td>
    </tr>
    <tr>
      <td>/delete_contact/&lt;id&gt;</td>
      <td>DELETE</td>
      <td>Delete a contact</td>
    </tr>
  </tbody>
</table>

<p><strong>Backend Base URL:</strong> <code>https://contact-list-9x5p.onrender.com</code></p>

<h2>💻 Run Locally (Using GitHub Codespaces)</h2>
<p><strong>Note:</strong> This project was developed inside GitHub Codespaces, so there's no need to manually set up a virtual environment.</p>

<h3>Steps to run backend:</h3>
<pre><code>
cd backend
pip install -r requirements.txt
python main.py
</code></pre>

<h3>Steps to run frontend:</h3>
<pre><code>
cd frontend
npm install
npm run dev
</code></pre>

<h2>📚 Learning Resource</h2>
<p>This project was built with help from this awesome YouTube guide:</p>
<p>🎥 <a href="https://www.youtube.com/watch?v=PppslXOR7TA" target="_blank">React JS and Flask Project Tutorial</a></p>

<h2>🙌 Credits</h2>
<ul>
  <li>Design & Code: <strong>You</strong></li>
  <li>API Learning: <a href="https://www.youtube.com/@SimpliCode">SimpliCode (YouTube)</a></li>
  <li>Hosting: Vercel (Frontend), Render (Backend)</li>
</ul>

<h2>📬 Contact</h2>
<p>Have suggestions? Open an issue or drop a message! 😊</p>
