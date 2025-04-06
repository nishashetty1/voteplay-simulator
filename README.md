 # VotePlay Simulator 🗳️

VotePlay Simulator is a web-based educational platform designed to familiarize young teenagers with India's Electronic Voting Machine (EVM) and Voter Verifiable Paper Audit Trail (VVPAT) systems. The project addresses the crucial need for electoral literacy among future voters by providing an interactive and engaging simulation of the actual voting process. Built using modern web technologies including React.js, Node.js, and MongoDB, the platform ensures a secure, responsive, and user-friendly experience. The project serves as both an educational tool and a technical demonstration, effectively bridging the gap between electoral awareness and practical implementation of our Indian voting system.

### You can check it out at : [voteplay.tech](https://www.voteplay.tech)

## 🌟 Features

- **Authentication System**
  - Secure user registration and login
  - OTP verification for added security

- **EVM (Electronic Voting Machine) Simulation**
  - Realistic EVM interface replication
  - Interactive button controls
  - Authentic sound effects for button clicks

- **VVPAT (Voter Verifiable Paper Audit Trail) System**
   - Paper trail simulation after vote casting
   - Visual verification of the vote
   - Animated paper roll display
   - 7 seconds timer-based slip display system

- **Category-based Voting System**
   - Multiple voting categories (e.g. IPL teams, AI tools, browsers)
   - Category-specific candidate lists
   - Real-time vote counting
   - Result visualization

- **VoteCoin System**
   - Digital currency for platform interaction
   - Integrated payment gateway (Cashfree)
   - Cost structure:
     - 5 VoteCoins to cast a vote
     - 10 VoteCoins to view results

- **Dashboard Features**
   - Real-time voting statistics
   - User vote history
   - Sample Voter Id

- **Educational Components**
   - Interactive voting process guide
   - Information about Indian electoral system
   - Fun facts about voting and democracy
   - User-friendly interface for learning

- **Payment Integration**
  - Secure payment processing via Cashfree
  - Multiple subscription packages

- **Security Features**
   - Encrypted data transmission
   - Secure vote storage
   - Session management
   - Protected user informat
 
## 🛠️ Tech Stack

### Frontend
- React.js with Vite
- Zustand for state management
- Framer Motion for animations
- TailwindCSS for styling
- React Router for navigation

### Backend
- Node.js & Express
- MongoDB with Mongoose
- JWT authentication
- Nodemailer for OTP
- Cloudinary for image storage

## 🚀 Getting Started

### Prerequisites
- Node.js >= 14.x
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/nishashetty1/voteplay-simulator.git
```
2. Install backend dependencies
```bash
cd backend
npm install
```
3. Install frontend dependencies
```bash
cd frontend
npm install
```
4. Set up environment variables
```bash
#Backend (.env):
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
```
```bash
#Frontend (.env):
VITE_API_BASE_URL=http://localhost:5000/api
```
5. Start the development servers
```bash
#Backend
npm run dev
```
```bash
#Frontend
npm run dev
```
### 👥 Authors

- [Adarsh Nambiar](https://github.com/adarshnambiar12)
- [Nisha Shetty](https://github.com/nishashetty1)

### Acknowledgments
- Election Commission of India

### Screenshots
![image](https://github.com/user-attachments/assets/0c88bc44-cf0d-489d-a482-2131f7bf0564)
![image](https://github.com/user-attachments/assets/54f353ba-2900-49a1-9422-59e868936e6a)
![image](https://github.com/user-attachments/assets/7b6ea259-fd2a-4cf3-b919-d227b9a3510a)
![image](https://github.com/user-attachments/assets/1018c7af-bce6-42bf-9337-1ba302f45e22)
![image](https://github.com/user-attachments/assets/26e3e0da-643b-47f4-8af1-f018f7844821)
![image](https://github.com/user-attachments/assets/cf341b4d-de8d-43ab-aea5-47d168376745)
![image](https://github.com/user-attachments/assets/4c21b0c6-2750-4f0f-8021-36ac99829688)
![image](https://github.com/user-attachments/assets/d06a2183-9f7e-44a2-a9ee-47ac9f3293cd)
![image](https://github.com/user-attachments/assets/2cbe2bcf-c5da-4c88-a034-6f1ad4d877fd)
