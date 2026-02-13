# API Documentation

**Aswathi's Full Stack CRUD Application**  
**Task Manager REST API - Complete Reference**

### Base URL
```
http://localhost:8000/api
```

---

## Task Endpoints

### 1. Get All Tasks

**Endpoint:**
```
GET /tasks/
```

**Description:** Retrieve a paginated list of all tasks

**Query Parameters:**
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| page | integer | Page number (default: 1) | ?page=1 |
| status | string | Filter by status (pending, in_progress, completed) | ?status=pending |
| priority | string | Filter by priority (low, medium, high) | ?priority=high |
| search | string | Search in title and description | ?search=project |
| ordering | string | Sort by field (-created_at for desc) | ?ordering=-created_at |

**Example Request:**
```bash
curl "http://localhost:8000/api/tasks/?status=pending&priority=high"
```

**Example Response:**
```json
{
  "count": 15,
  "next": "http://localhost:8000/api/tasks/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the CRUD application",
      "status": "pending",
      "priority": "high",
      "due_date": "2026-02-14",
      "created_at": "2026-02-07T10:30:00Z",
      "updated_at": "2026-02-07T10:30:00Z"
    }
  ]
}
```

**Status Codes:**
- `200 OK` - Successfully retrieved tasks
- `400 Bad Request` - Invalid query parameters

---

### 2. Create a Task

**Endpoint:**
```
POST /tasks/
```

**Description:** Create a new task

**Request Body:**
```json
{
  "title": "Required - Task title",
  "description": "Optional - Task description",
  "status": "Optional - pending (default), in_progress, or completed",
  "priority": "Optional - low, medium (default), or high",
  "due_date": "Optional - Date in YYYY-MM-DD format"
}
```

**Example Request:**
```bash
curl -X POST http://localhost:8000/api/tasks/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Finish project documentation",
    "description": "Complete all README files",
    "status": "in_progress",
    "priority": "high",
    "due_date": "2026-02-14"
  }'
```

**Example Response:**
```json
{
  "id": 5,
  "title": "Finish project documentation",
  "description": "Complete all README files",
  "status": "in_progress",
  "priority": "high",
  "due_date": "2026-02-14",
  "created_at": "2026-02-07T12:00:00Z",
  "updated_at": "2026-02-07T12:00:00Z"
}
```

**Status Codes:**
- `201 Created` - Task successfully created
- `400 Bad Request` - Invalid data or missing required fields
- `422 Unprocessable Entity` - Validation error

**Validation Rules:**
- `title` - Required, max 255 characters
- `status` - Must be one of: pending, in_progress, completed
- `priority` - Must be one of: low, medium, high
- `due_date` - Must be valid date format (YYYY-MM-DD)

---

### 3. Get Task by ID

**Endpoint:**
```
GET /tasks/{id}/
```

**Description:** Retrieve details of a specific task

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| id | integer | Task ID |

**Example Request:**
```bash
curl http://localhost:8000/api/tasks/1/
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the CRUD application",
  "status": "in_progress",
  "priority": "high",
  "due_date": "2026-02-14",
  "created_at": "2026-02-07T10:30:00Z",
  "updated_at": "2026-02-07T10:30:00Z"
}
```

**Status Codes:**
- `200 OK` - Task found
- `404 Not Found` - Task does not exist

---

### 4. Update Task (Complete)

**Endpoint:**
```
PUT /tasks/{id}/
```

**Description:** Replace entire task with new data (all fields required)

**Example Request:**
```bash
curl -X PUT http://localhost:8000/api/tasks/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated task title",
    "description": "Updated description",
    "status": "completed",
    "priority": "medium",
    "due_date": "2026-02-15"
  }'
```

**Status Codes:**
- `200 OK` - Task updated successfully
- `400 Bad Request` - Invalid data
- `404 Not Found` - Task does not exist

---

### 5. Partial Update Task

**Endpoint:**
```
PATCH /tasks/{id}/
```

**Description:** Update specific fields of a task (fields are optional)

**Example Request:**
```bash
curl -X PATCH http://localhost:8000/api/tasks/1/ \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

**Example Response:**
```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish the CRUD application",
  "status": "completed",
  "priority": "high",
  "due_date": "2026-02-14",
  "created_at": "2026-02-07T10:30:00Z",
  "updated_at": "2026-02-07T14:30:00Z"
}
```

**Status Codes:**
- `200 OK` - Task updated successfully
- `400 Bad Request` - Invalid data
- `404 Not Found` - Task does not exist

---

### 6. Delete Task

**Endpoint:**
```
DELETE /tasks/{id}/
```

**Description:** Delete a specific task

**Example Request:**
```bash
curl -X DELETE http://localhost:8000/api/tasks/1/
```

**Example Response:**
```json
{
  "detail": "Task deleted successfully."
}
```

**Status Codes:**
- `204 No Content` - Task deleted successfully
- `404 Not Found` - Task does not exist

---

## Statistics Endpoints

### Get Task Statistics

**Endpoint:**
```
GET /tasks/statistics/
```

**Description:** Retrieve overall task statistics and metrics

**Example Request:**
```bash
curl http://localhost:8000/api/tasks/statistics/
```

**Example Response:**
```json
{
  "total_tasks": 15,
  "completed_tasks": 5,
  "pending_tasks": 7,
  "in_progress_tasks": 3,
  "completion_rate": 33.33
}
```

**Status Codes:**
- `200 OK` - Statistics retrieved successfully

---

## Filtering Endpoints

### Get Tasks By Status

**Endpoint:**
```
GET /tasks/by_status/?status={status}
```

**Description:** Get all tasks with a specific status

**Query Parameters:**
| Parameter | Type | Required | Values |
|-----------|------|----------|--------|
| status | string | Yes | pending, in_progress, completed |

**Example Request:**
```bash
curl "http://localhost:8000/api/tasks/by_status/?status=completed"
```

**Example Response:**
```json
[
  {
    "id": 2,
    "title": "Setup React",
    "description": "Initialize React project",
    "status": "completed",
    "priority": "high",
    "due_date": "2026-02-07",
    "created_at": "2026-02-06T08:00:00Z",
    "updated_at": "2026-02-07T14:00:00Z"
  },
  {
    "id": 3,
    "title": "Setup Django",
    "description": "Initialize Django project",
    "status": "completed",
    "priority": "high",
    "due_date": "2026-02-07",
    "created_at": "2026-02-06T09:00:00Z",
    "updated_at": "2026-02-07T14:00:00Z"
  }
]
```

**Status Codes:**
- `200 OK` - Tasks retrieved successfully
- `400 Bad Request` - Missing or invalid status parameter

---

### Get Tasks By Priority

**Endpoint:**
```
GET /tasks/by_priority/?priority={priority}
```

**Description:** Get all tasks with a specific priority

**Query Parameters:**
| Parameter | Type | Required | Values |
|-----------|------|----------|--------|
| priority | string | Yes | low, medium, high |

**Example Request:**
```bash
curl "http://localhost:8000/api/tasks/by_priority/?priority=high"
```

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Complete project",
    "priority": "high",
    "status": "in_progress",
    ...
  },
  {
    "id": 4,
    "title": "Deploy application",
    "priority": "high",
    "status": "pending",
    ...
  }
]
```

**Status Codes:**
- `200 OK` - Tasks retrieved successfully
- `400 Bad Request` - Missing or invalid priority parameter

---

## Data Types and Formats

### Task Object
```json
{
  "id": "integer (read-only, auto-increment)",
  "title": "string (required, max 255)",
  "description": "string (optional, unlimited)",
  "status": "string (enum: pending, in_progress, completed)",
  "priority": "string (enum: low, medium, high)",
  "due_date": "string (date format: YYYY-MM-DD, optional)",
  "created_at": "string (ISO 8601 datetime, read-only)",
  "updated_at": "string (ISO 8601 datetime, read-only)"
}
```

### Status Values
- `pending` - Task not started
- `in_progress` - Task currently being worked on
- `completed` - Task finished

### Priority Values
- `low` - Low priority
- `medium` - Standard priority
- `high` - High priority

---

## Error Responses

### Bad Request (400)
```json
{
  "error": "Invalid request data",
  "details": {
    "title": ["This field may not be blank."],
    "priority": ["Invalid priority choice."]
  }
}
```

### Not Found (404)
```json
{
  "detail": "Not found."
}
```

### Validation Error (422)
```json
{
  "title": ["Title must be less than 255 characters"]
}
```

---

## Common Patterns

### Filter by Multiple Criteria
```bash
# Combine status and priority filters
curl "http://localhost:8000/api/tasks/?status=pending&priority=high"
```

### Search Tasks
```bash
# Search in title and description
curl "http://localhost:8000/api/tasks/?search=project"
```

### Sort Tasks
```bash
# Sort by creation date (newest first)
curl "http://localhost:8000/api/tasks/?ordering=-created_at"

# Sort by due date
curl "http://localhost:8000/api/tasks/?ordering=due_date"
```

### Pagination
```bash
# Get specific page
curl "http://localhost:8000/api/tasks/?page=2"

# Default page size is 10 tasks
```

---

## Rate Limiting

Currently, there is no rate limiting implemented. For production, consider implementing:
- API rate limiting (e.g., 100 requests per hour)
- Per-user rate limiting
- Throttling for expensive operations

---

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (React dev server)
- `http://127.0.0.1:3000`
- `http://localhost:5173` (Vite server)
- `http://127.0.0.1:5173`

For production, update `CORS_ALLOWED_ORIGINS` in Django settings.

---

## Authentication (Future)

Currently, the API has no authentication. Future versions should implement:
- Token-based authentication (JWT)
- User registration and login
- Permission levels (admin, user, guest)
- Rate limiting per user

---

## Versioning

Current API Version: `v1`

Future versions will use URL versioning: `/api/v2/tasks/`

---

## Support

For issues or questions about the API:
1. Check the troubleshooting section in main README
2. Verify Django server is running
3. Check CORS settings
4. Review request/response format
5. Inspect browser console for errors

---

Last Updated: February 7, 2026
API Status: Production Ready ✅
