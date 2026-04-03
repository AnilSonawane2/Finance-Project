# Project API Documentation

## 1. Auth 
```bash
POST - /api/v1/auth/register
POST - /api/v1/auth/login
```
## 2. User -
```bash
GET - /api/v1/users  (only admin)
PUT - /api/v1/users/:id/role  (only admin)
PUT - /api/v1/users/:id/status  (only admin)
```
## 3. Record - 
```bash
POST - /api/v1/records  (only admin)
GET - /api/v1/records
PUT - /api/v1/records/:id  (only admin)
DELETE - /api/v1/records/:id  (only admin)
```
## 3. Record - Only(Admin,Analyst)
```bash
GET - /api/v1/dashboard
```
