# RWA Smart Living OS

A comprehensive community management system for gated communities built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Project Overview

RWA Smart Living OS is a complete solution for managing gated communities with role-based access for different user types:

- **Admin (RWA)**: Community management, complaint resolution, payment tracking
- **Residents**: Pay dues, raise complaints, book services, manage packages
- **Workers**: Job management, task tracking, completion reporting
- **Guards**: Visitor management, security monitoring, access control
- **Vendors**: Order management, inventory tracking, service delivery
- **AI Assistant**: Automated complaint tagging, vendor recommendations, scheduling optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account (for auth and database)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rwa-smart-living-os
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables with your Firebase and service configurations

5. Start the development server:
```bash
npm run dev
```

## 🏗️ Architecture

### Tech Stack

- **Frontend**: Next.js 13+, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Authentication**: Firebase Auth
- **Database**: Firestore/PostgreSQL
- **Storage**: Firebase Storage
- **Icons**: Lucide React

### Folder Structure

```
├── app/                    # Next.js app router pages
│   ├── admin/             # Admin dashboard pages
│   ├── resident/          # Resident portal pages
│   ├── worker/            # Worker management pages
│   ├── guard/             # Security panel pages
│   ├── vendor/            # Vendor dashboard pages
│   └── ai/                # AI assistant pages
├── components/            # Reusable UI components
│   ├── auth/              # Authentication components
│   ├── layouts/           # Layout components
│   └── ui/                # shadcn/ui components
├── context/               # React Context providers
├── services/              # API and external services
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🔐 Authentication & Authorization

### Role-Based Access Control

- **ProtectedRoute HOC**: Restricts access based on user roles
- **Firebase Auth**: Handles user authentication
- **OTP Login**: Phone-based authentication for residents
- **Role Assignment**: Users are assigned roles during registration

### User Roles

1. **Admin**: Full system access, community management
2. **Resident**: Personal dashboard, services, payments
3. **Worker**: Job assignments, task management
4. **Guard**: Visitor management, security monitoring
5. **Vendor**: Order fulfillment, inventory management
6. **AI**: Automated systems, recommendations

## 📱 Features by Role

### Admin Dashboard
- Community overview and statistics
- Resident management and access control
- Complaint monitoring and resolution
- Payment tracking and financial reports
- Announcement broadcasting
- Event approval workflow

### Resident Portal
- Personal dashboard with quick stats
- Monthly dues payment system
- Complaint submission and tracking
- Service booking and scheduling
- Package delivery management
- Amenity booking and usage

### Worker Interface
- Job assignment and tracking
- Task completion reporting
- Time tracking and productivity
- Photo upload for proof of work
- Priority-based task management

### Security Panel
- Visitor entry and exit logging
- QR code scanning for pre-approved visitors
- Real-time visitor tracking
- Security alert management
- Visit history and reporting

### Vendor Dashboard
- Order management and fulfillment
- Inventory tracking and alerts
- Service booking calendar
- Performance analytics
- Proof of service upload

### AI Assistant
- Automated complaint categorization
- Vendor recommendation engine
- Optimal time slot suggestions
- Predictive maintenance alerts
- Performance analytics

## 🎨 Design System

### Color Palette
- **Primary**: Teal/Community colors for trust and growth
- **Secondary**: Blue for reliability and security
- **Accent**: Orange for warmth and activity
- **Success**: Green for positive actions
- **Warning**: Amber for attention
- **Error**: Red for critical issues

### Typography
- **Font**: Inter for clean, modern readability
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)
- **Scale**: Responsive typography with proper hierarchy

### Components
- **Cards**: Elevated surfaces with subtle shadows
- **Buttons**: Clear hierarchy with hover states
- **Forms**: Accessible inputs with proper validation
- **Navigation**: Role-based sidebar layouts
- **Status Indicators**: Color-coded badges and tags

## 🔧 Development Guidelines

### Code Organization
- **File Limit**: Keep files under 300 lines
- **Single Responsibility**: Each component has one purpose
- **Proper Imports**: Use ES6 imports/exports
- **Type Safety**: Full TypeScript implementation

### Styling
- **Tailwind CSS**: Utility-first styling approach
- **Responsive Design**: Mobile-first responsive layouts
- **Accessibility**: WCAG 2.1 compliance
- **Dark Mode**: Optional dark theme support

### State Management
- **React Context**: Global state management
- **Local State**: Component-specific state with hooks
- **Form State**: React Hook Form for complex forms

## 📋 TODO for Interns

### Backend Development
- [ ] Implement Firebase Functions for server-side logic
- [ ] Set up Firestore database schema
- [ ] Create API endpoints for all CRUD operations
- [ ] Implement real-time notifications
- [ ] Add file upload and processing

### Frontend Features
- [ ] Complete form implementations
- [ ] Add data visualization charts
- [ ] Implement real-time updates
- [ ] Add search and filtering
- [ ] Create responsive mobile layouts

### Authentication
- [ ] Complete Firebase Auth integration
- [ ] Implement OTP verification
- [ ] Add role-based permissions
- [ ] Create user profile management

### AI/ML Integration
- [ ] Implement complaint classification ML model
- [ ] Create vendor recommendation system
- [ ] Add predictive scheduling algorithms
- [ ] Implement anomaly detection

### Testing
- [ ] Write unit tests for components
- [ ] Add integration tests
- [ ] Implement E2E testing
- [ ] Create performance tests

### DevOps
- [ ] Set up CI/CD pipeline
- [ ] Configure deployment environments
- [ ] Add monitoring and logging
- [ ] Implement backup strategies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation in `/docs`

---

Built with ❤️ for modern gated communities# rwa-stack

# RWA Stack – Digital Toolkit for Apartment Living

## Vision
A full-scale digital platform to support apartment residents, tenants, and RWAs in managing daily life—from rent dues to grocery delivery and guest entry.

## Tech Stack
- **Frontend:** React Native + Tailwind CSS
- **Backend:** Firebase Functions, Firestore, Node.js
- **Design:** Figma
- **Hosting:** Firebase Hosting, Vercel (optional)

##  Folder Structure
/frontend - Mobile app
/backend - Firebase Functions / APIs
/docs - Docs, API, module specs

bash
Copy
Edit

##  Getting Started
1. Fork the repo
2. Clone to local: `git clone https://github.com/[you]/rwa-stack.git`
3. Follow setup guide in `/frontend/README.md`

##  Contributing
Please read `/docs/contribution.md`. Open an issue before submitting a PR.

##  License
MIT
