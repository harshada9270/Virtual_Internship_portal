# Virtual Internship Portal

A modern web platform designed to connect students with virtual internship opportunities and help organizations manage their internship programs effectively.

## Features

- User Authentication (Students, Companies, and Administrators)
- Internship Posting and Application Management
- Student Profile Management
- Company Dashboard
- Real-time Communication
- Application Tracking System
- Document Management (Resumes, Certificates)

## Tech Stack

- Frontend: React.js with TypeScript
- Styling: Tailwind CSS
- Backend: Node.js/Express.js
- Database: MongoDB
- Authentication: JWT

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB installed locally or a MongoDB Atlas account

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd virtual-internship-portal
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
virtual-internship-portal/
├── components/         # React components
├── pages/             # Next.js pages
├── public/            # Static assets
├── styles/            # CSS styles
├── utils/             # Utility functions
├── models/            # Database models
├── config/            # Configuration files
└── api/              # API routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/yourusername/virtual-internship-portal](https://github.com/yourusername/virtual-internship-portal) 