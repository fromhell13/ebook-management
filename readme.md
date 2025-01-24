# E-Book Management Application

This project is a simple e-book management application with a **frontend** built using **React** and a **backend** built using **Node.js** and **MongoDB**. The application allows users to add, update, delete, and view books.

## Technologies Used

### **Frontend:**
- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: Used to make HTTP requests from the frontend to the backend.
- **React Router**: A library used for handling routing in the React application.

### **Backend:**
- **Node.js**: A JavaScript runtime used to build the backend.
- **Express.js**: A web framework for Node.js used to handle HTTP requests.
- **MongoDB**: A NoSQL database for storing book information.
- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment.

---

## Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR)

### **Client-Side Rendering (CSR):**
- CSR means the browser downloads a minimal HTML file and JavaScript bundle, which is then responsible for rendering the entire page content. The application makes API calls to fetch data dynamically, and React handles rendering.

### **Server-Side Rendering (SSR):**
- In SSR, the server generates and sends the fully rendered HTML to the browser for each request. The page is rendered on the server and delivered to the client, providing an initial view of the page.

---

## Justification for Chosen Technologies

### **Technology Stack:**
1. **React.js**:
   - React is widely used for building modern web applications. It provides component-based architecture, making it easy to manage state and build dynamic, reusable UI components. React’s virtual DOM optimizes rendering, improving performance.
   
2. **Node.js + Express.js**:
   - Node.js is a JavaScript runtime that allows us to write both the frontend and backend in JavaScript. Express.js is a fast, minimalistic framework that makes handling routing and API requests in Node.js simpler.
   
3. **MongoDB**:
   - MongoDB is a NoSQL database that allows for flexible, schema-less storage of data, making it well-suited for this application’s dynamic nature. It’s also a natural fit for JSON-like documents, which align well with JavaScript.
   
4. **Axios**:
   - Axios is a promise-based HTTP client for the browser and Node.js. It simplifies making API requests from the frontend to the backend.

---

## Deployment Instructions

### **Prerequisites**
Ensure you have the following installed:
- [Docker](https://www.docker.com/get-started) (for building and running containers)
- [Minikube](https://minikube.sigs.k8s.io/docs/) (for local Kubernetes cluster)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) (to interact with Kubernetes)

### **Steps to Run Locally**

1. **Clone the Repository:**
   ```bash
   git clone https://gitfront.io/r/fromhell13/3Qhw6qYmtVri/ebook-management/
   cd ebook-management
   ```

2. **Run locally using Docker compose:**
   - Run docker compose compose build:
     ```bash
     docker-compose up --build -d
     ```
   - The frontend will be accessible at `http://localhost:3000`.
   - The backend will be accessible at `http://localhost:5000`.

---

## Kubernetes Deployment

### **Steps to Deploy on Minikube**

1. **Start Minikube:**
   If Minikube is not already running, start it:
   ```bash
   minikube start
   ```

2. **Build Docker Images for Kubernetes**:
   - All images has been push to my personal docker hub

3. **Apply Kubernetes Configurations:**
   - Apply the backend and frontend deployments and services in Minikube:
     ```bash
     kubectl apply -f kubernetes/backend-deployment.yaml
     kubectl apply -f kubernetes/frontend-deployment.yaml
     kubectl apply -f kubernetes/mongo-deployment.yaml
     ```

4. **Access the Application:**
   Use Minikube to access your frontend service:
   ```bash
   minikube service frontend --url
   ```


---