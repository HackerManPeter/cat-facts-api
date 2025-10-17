# Cat Facts

A RESTful API endpoint built with Bun that returns profile information along with dynamic cat facts fetched from an external API.

## Overview

This project implements a simple yet robust API that:

- Returns user profile information
- Fetches random cat facts from the Cat Facts API
- Includes rate limiting to prevent abuse
- Provides proper error handling

## Features

- ⚡ Built with Bun for blazing-fast performance
- 🐱 Dynamic cat facts from external API
- 🛡️ Rate limiting to prevent API abuse
- 🐳 Docker support for easy deployment
- ⚠️ Comprehensive error handling
- 📝 Type-safe TypeScript implementation

## Tech Stack

- **Runtime**: Bun
- **Language**: TypeScript
- **Deployment**: Docker + Docker Compose
- **External API**: [Cat Facts API](https://catfact.ninja)

## API Documentation

### Endpoint: `GET /me`

Returns user profile information along with a random cat fact.

#### Response Format

```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Full Name",
    "stack": "Your favorite tech stack"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "A random cat fact"
}
```

#### Status Codes

- `200 OK` - Successful response
- `404 Not Found` - Endpoint not found
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

#### Rate Limiting

The API implements per-IP rate limiting. Each IP address is limited to a configurable number of requests within a cooldown period. For example, with a 3-minute cooldown and a limit of 5 requests, no IP can make more than 5 requests within any 3-minute window.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Bun](https://bun.sh) (v1.0.0 or higher)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)
- [Docker Compose](https://docs.docker.com/compose/) (optional, for containerized deployment)

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/HackerManPeter/cat-facts-api
cd cat-facts
```

### 2. Install dependencies

```bash
bun install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=3000
CAT_API_BASE_URL=https://catfact.ninja
FACT_LENGTH=200
EMAIL=your-email@example.com
FULL_NAME=Your Full Name
COOL_DOWN_TIME=3
REQUEST_LIMIT=5
```

#### Environment Variables Explained

| Variable           | Description                                | Example                 |
| ------------------ | ------------------------------------------ | ----------------------- |
| `PORT`             | Application port                           | `3000`                  |
| `CAT_API_BASE_URL` | Base URL for the Cat Facts API             | `https://catfact.ninja` |
| `FACT_LENGTH`      | Maximum length of cat facts                | `200`                   |
| `EMAIL`            | Your email address                         | `user@example.com`      |
| `FULL_NAME`        | Your full name                             | `John Doe`              |
| `COOL_DOWN_TIME`   | Rate limit cooldown period (minutes)       | `3`                     |
| `REQUEST_LIMIT`    | Max requests per IP within cooldown period | `5`                     |

## Running the Application

### Local Development

Run directly:

```bash
bun run server.ts
```

Or use the npm script:

```bash
bun start
```

The server will start on the port specified in your `.env` file (default: 3000).

### Using Docker Compose (Recommended)

Docker Compose automatically reads the `.env` file:

```bash
docker-compose up --build
```

### Using Docker

```bash
# Build the image
docker build -t cat-facts .

# Run the container (pass environment variables)
docker run -p 3000:3000 --env-file .env cat-facts
```

### Testing the API

Once the server is running, test the endpoint:

```bash
curl http://localhost:3000/me
```

Or open in your browser:

```
http://localhost:3000/me
```

## Project Structure

```
cat-facts/
├── handlers/
│   ├── cat.handler.ts        # Main /me endpoint handler
│   ├── error.handler.ts      # Error handling logic
│   ├── index.ts              # Handler exports
│   └── not-found.handler.ts  # 404 handler
├── utils/
│   ├── get-random-cat-facts.ts  # Cat Facts API integration
│   ├── index.ts                 # Utility exports
│   └── rate-limiter.ts          # Per-IP rate limiting
├── config.ts                 # Configuration management
├── server.ts                 # Application entry point
├── Dockerfile               # Docker configuration
├── compose.yaml             # Docker Compose configuration
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Documentation
```

## Error Handling

The API implements comprehensive error handling:

- **Rate Limiting**: Returns `429 Too Many Requests` when an IP exceeds the configured rate limit
- **External API Failures**: Returns `500 Internal Server Error` if the Cat Facts API is unavailable
- **Invalid Endpoints**: Returns `404 Not Found` for any endpoint other than `/me`
- **Server Errors**: Returns `500 Internal Server Error` for unexpected server errors

## Deployment

This application is deployed on a private server using Docker Compose.

### Deployment Steps

1. Ensure Docker and Docker Compose are installed on your server
2. Clone the repository to your server
3. Configure the `.env` file with production values
4. Run the application:

```bash
   docker-compose up -d
```

5. The API will be accessible at your server's address on the configured port

## Deployment

This application is deployed and accessible at:

**Live API**: `https://periscope.automaker.top`

### Self-Hosting

To deploy on your own server:

1. Ensure Docker and Docker Compose are installed
2. Clone the repository to your server
3. Configure the `.env` file with production values
4. Run the application:

```bash
   docker-compose up -d
```

5. The API will be accessible at your server's address on the configured port

## Credits

This README was created with assistance from [Claude](https://claude.ai) by Anthropic.

## Author

**Your Name**

- LinkedIn: [linkedin.com/in/pebueku](https://www.linkedin.com/in/pebueku)
- Email: pebueku@gmail.com

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [HNG Internship](https://hng.tech) - Stage 0 Backend Task
- [Cat Facts API](https://catfact.ninja) for providing the cat facts
- [Bun](https://bun.sh) for the amazing JavaScript runtime
