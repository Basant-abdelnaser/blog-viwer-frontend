# Blog Post Viewer — MEAN Stack

A simple blog viewer: Node/Express backend serves static posts, Angular frontend displays them. Clicking a title expands its description.

---

## Project Structure

```
blog-app/
├── .gitignore
├── README.md
├── backend/
│   ├── package.json
│   └── server.js           ← Express API on port 3000
└── frontend/
    ├── angular.json
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    └── src/
        ├── index.html
        ├── main.ts
        ├── styles.css
        └── app/
            ├── app.component.ts
            ├── app.config.ts
            └── blog/
                ├── blog.component.ts   ← logic
                ├── blog.component.html ← template
                └── blog.component.css  ← styles
```

---

## Requirements

- **Node.js v18+** → https://nodejs.org/en/download
- **Angular CLI** (install once, globally):

```bash
npm install -g @angular/cli
```

---

## Run the App

### Step 1 — Start the Backend

```bash
cd blog-app/backend
npm install
node server.js
```

You should see: `Backend running on http://localhost:3000`

---

### Step 2 — Start the Frontend (new terminal)

```bash
cd blog-app/frontend
npm install
ng serve
```

You should see: `Application bundle generation complete. Server is listening on localhost:4200`

---

### Step 3 — Open in browser

Go to: **http://localhost:4200**

Click any blog post title to expand its description. Click again to collapse.

---

## API Endpoint

`GET http://localhost:3000/api/posts` — returns the list of blog posts as JSON.
