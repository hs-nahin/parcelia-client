# Parcelia Client

**Frontend of Parcelia** — a modern parcel management platform with role-based workflows for real-world delivery operations.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [License](#license)

---

## About

**Parcelia** is a web-based B2C parcel management system designed to streamline parcel booking, tracking, and delivery operations across multiple locations. It provides dedicated workflows for merchants, administrators, and delivery agents, focusing on efficiency, transparency, and scalability in real-world logistics.

This frontend project focuses on building a professional, responsive, and interactive user interface using React, Tailwind CSS, and DaisyUI. The app demonstrates real-world system workflows while remaining a portfolio-grade project.

---

## Features

- Role-based dashboards for **Merchants**, **Admins**, and **Delivery Agents**
- Parcel booking, tracking, and management
- Real-time status updates and interactive UI components
- Responsive design optimized for desktop and mobile
- Branded and user-friendly landing page with custom theming
- Interactive carousel using Swiper.js

---

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS + DaisyUI
- **Interactions:** Swiper.js for carousels
- **State Management:** React Context / Local state
- **API Calls:** Axios or Fetch

---

## Project Structure

```txt
parcelia-client/
│
├─ public/                # Static assets: images, icons, favicon
├─ src/
│   ├─ assets/            # Images, logos, icons
│   ├─ components/        # Reusable UI components
│   │   ├─ common/
│   │   └─ ui/
│   ├─ pages/             # Route-based pages
│   │   ├─ Home/
│   │   ├─ Dashboard/
│   │   └─ Auth/
│   ├─ layouts/           # Layout components (MainLayout, DashboardLayout)
│   ├─ hooks/             # Custom React hooks
│   ├─ services/          # API calls
│   ├─ utils/             # Helper functions
│   ├─ routes/            # Route configuration
│   ├─ context/           # Global state / auth
│   ├─ App.jsx
│   └─ main.jsx
├─ tailwind.config.js
├─ package.json
└─ README.md
```
