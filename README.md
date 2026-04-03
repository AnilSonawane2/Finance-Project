# Finance Backend Assignment

#### A robust backend system for managing financial records, users, and role-based access control. Designed to provide APIs for CRUD operations, analytics, and dashboard summaries.


## **Features**

### 1. User and Role Management
The backend provides a complete system to manage users and their access levels:

- **User Operations**: Create, update, and manage users.
- **Role Assignment**: Assign roles to users (Viewer, Analyst, Admin) with clearly defined permissions.
- **User Status Management**: Activate or deactivate users as needed.
- **Role-Based Access Control**: Restrict actions based on roles:
  - **Viewer**: Can only view dashboard data.
  - **Analyst**: Can view records and insights.
  - **Admin**: Full access to create, update, and manage records and users.


### 2. Financial Records Management
Supports CRUD operations for financial transactions:

- **Fields Supported**:
  - Amount
  - Type (Income or Expense)
  - Category
  - Date
  - Notes / Description
- **Operations Supported**:
  - Create, read, update, and delete records.
  - Filter records by date, category, or type.


### 3. Dashboard Summary APIs
Provides aggregated data for analytics and dashboard display:

- Total Income & Expenses
- Net Balance
- Category-wise Totals
- Recent Activity
- Monthly / Weekly Trends


### 4. Access Control
Enforces strict role-based permissions:

- **Viewer**: Read-only access.
- **Analyst**: Read access to records and summaries.
- **Admin**: Full management access including users and records.

Implemented using middleware and policy checks to ensure secure operations.


### 5. Validation and Error Handling
Ensures robust input handling:

- Validates required fields and proper data formats.
- Returns clear error messages with appropriate HTTP status codes.
- Prevents invalid or unauthorized operations.


### Optional Enhancements
- **Authentication**: JWT-based authentication for secure access.
- **Pagination**: Efficient listing of records.
- **Search**: Search records by text or criteria.
- **Soft Delete**: Mark records as deleted instead of permanent removal.
- **Rate Limiting**: Protect APIs from excessive requests.


## **Tech Stack**
- Node.js / Express.js
- MongoDB / Mongoose
- JWT Authentication
- Vercel for Deployment
- Validation & Error Handling with middleware


## Steps to step up finance project in your Local Device

Step 1: Clone this Repository
```bash
git clone https://github.com/AnilSonawane2/Finance-Project.git
```

Step 2: Open the terminal and move to Finance-Project Directory then install all packages
```bash
npm install
```

Step 3 : To Start the Server
```bash
npm run dev
```

### Note: I am using Free version of Vercel
You might face some common issue while testing deployed API's like:
- Free Vercel deployments sleep after inactivity (usually ~15–30 minutes).
- When a request comes in after sleep, the serverless function has to cold start, which can take a few seconds.
- This affects response time and is especially noticeable in APIs needing low latency.
