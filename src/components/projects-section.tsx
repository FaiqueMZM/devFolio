"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

// Custom SVG Components for each project
const ProjectSVGs = {
  iCars: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Car body */}
      <path
        d="M80 180 L120 140 L280 140 L320 180 L320 220 L300 220 L300 240 L280 240 L280 220 L120 220 L120 240 L100 240 L100 220 L80 220 Z"
        fill="url(#carGradient)"
        filter="url(#glow)"
      />
      {/* Wheels */}
      <circle cx="130" cy="230" r="20" fill="#FF4C29" filter="url(#glow)" />
      <circle cx="270" cy="230" r="20" fill="#FF4C29" filter="url(#glow)" />
      {/* Windows */}
      <path
        d="M130 140 L140 160 L260 160 L270 140 Z"
        fill="#334756"
        opacity="0.8"
      />
      {/* Headlights */}
      <circle cx="320" cy="170" r="8" fill="#FF4C29" filter="url(#glow)" />
      <circle cx="320" cy="190" r="8" fill="#FF4C29" filter="url(#glow)" />
      {/* Tech elements */}
      <rect x="50" y="50" width="300" height="2" fill="#FF4C29" opacity="0.6" />
      <rect x="50" y="60" width="200" height="1" fill="#334756" opacity="0.8" />
      <text
        x="200"
        y="40"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="24"
        fontWeight="bold"
      >
        iCars
      </text>
    </svg>
  ),

  SmartSurveillance: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
        <radialGradient id="lensGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#082032" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Camera body */}
      <rect
        x="150"
        y="120"
        width="100"
        height="60"
        rx="10"
        fill="url(#cameraGradient)"
        filter="url(#glow)"
      />
      {/* Camera lens */}
      <circle
        cx="200"
        cy="150"
        r="30"
        fill="url(#lensGradient)"
        filter="url(#glow)"
      />
      <circle cx="200" cy="150" r="20" fill="#082032" />
      <circle cx="200" cy="150" r="15" fill="#FF4C29" opacity="0.8" />
      {/* Mounting arm */}
      <rect x="190" y="80" width="20" height="40" fill="#334756" />
      <rect x="180" y="70" width="40" height="15" rx="7" fill="#334756" />
      {/* Detection zones */}
      <path
        d="M200 150 L120 100 L120 110 L190 150 Z"
        fill="#FF4C29"
        opacity="0.3"
      />
      <path
        d="M200 150 L280 100 L280 110 L210 150 Z"
        fill="#FF4C29"
        opacity="0.3"
      />
      <path
        d="M200 150 L120 200 L120 190 L190 150 Z"
        fill="#FF4C29"
        opacity="0.3"
      />
      <path
        d="M200 150 L280 200 L280 190 L210 150 Z"
        fill="#FF4C29"
        opacity="0.3"
      />
      {/* Grid overlay */}
      <g opacity="0.4">
        <line
          x1="0"
          y1="100"
          x2="400"
          y2="100"
          stroke="#334756"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="150"
          x2="400"
          y2="150"
          stroke="#334756"
          strokeWidth="1"
        />
        <line
          x1="0"
          y1="200"
          x2="400"
          y2="200"
          stroke="#334756"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="300"
          stroke="#334756"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="0"
          x2="200"
          y2="300"
          stroke="#334756"
          strokeWidth="1"
        />
        <line
          x1="300"
          y1="0"
          x2="300"
          y2="300"
          stroke="#334756"
          strokeWidth="1"
        />
      </g>
      <text
        x="200"
        y="40"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="18"
        fontWeight="bold"
      >
        Smart Surveillance
      </text>
    </svg>
  ),

  FutureSeekersLK: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Rocket body */}
      <path
        d="M200 50 L220 100 L220 180 L200 200 L180 180 L180 100 Z"
        fill="url(#rocketGradient)"
        filter="url(#glow)"
      />
      {/* Rocket fins */}
      <path d="M180 160 L160 180 L180 180 Z" fill="#334756" />
      <path d="M220 160 L240 180 L220 180 Z" fill="#334756" />
      {/* Rocket flame */}
      <path d="M180 200 L200 240 L220 200 Z" fill="#FF4C29" filter="url(#glow)">
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      {/* Stars */}
      <circle cx="100" cy="80" r="2" fill="#FF4C29">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="320" cy="120" r="2" fill="#FF4C29">
        <animate
          attributeName="opacity"
          values="1;0.5;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="80" cy="200" r="2" fill="#334756">
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="350" cy="220" r="2" fill="#334756">
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Planet */}
      <circle cx="320" cy="200" r="25" fill="#334756" opacity="0.6" />
      <circle cx="315" cy="195" r="3" fill="#FF4C29" opacity="0.8" />
      <text
        x="200"
        y="280"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="18"
        fontWeight="bold"
      >
        Future Seekers LK
      </text>
    </svg>
  ),

  DevFolio: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient
          id="portfolioGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Monitor */}
      <rect
        x="100"
        y="80"
        width="200"
        height="120"
        rx="10"
        fill="#334756"
        filter="url(#glow)"
      />
      <rect x="110" y="90" width="180" height="100" fill="#082032" />
      {/* Screen content */}
      <rect
        x="120"
        y="100"
        width="160"
        height="8"
        fill="#FF4C29"
        opacity="0.8"
      />
      <rect
        x="120"
        y="115"
        width="100"
        height="4"
        fill="#334756"
        opacity="0.6"
      />
      <rect
        x="120"
        y="125"
        width="120"
        height="4"
        fill="#334756"
        opacity="0.6"
      />
      <rect
        x="120"
        y="135"
        width="80"
        height="4"
        fill="#334756"
        opacity="0.6"
      />
      {/* Code brackets */}
      <text x="130" y="160" fill="#FF4C29" fontSize="20" fontFamily="monospace">
        {"{ }"}
      </text>
      <text x="170" y="160" fill="#334756" fontSize="16" fontFamily="monospace">
        FI
      </text>
      <text x="220" y="160" fill="#FF4C29" fontSize="20" fontFamily="monospace">
        {"< />"}
      </text>
      {/* Monitor stand */}
      <rect x="190" y="200" width="20" height="30" fill="#334756" />
      <rect x="170" y="230" width="60" height="10" rx="5" fill="#334756" />
      {/* Floating elements */}
      <circle cx="80" cy="60" r="3" fill="#FF4C29" opacity="0.7">
        <animate
          attributeName="cy"
          values="60;50;60"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <rect
        x="320"
        y="70"
        width="6"
        height="6"
        fill="#334756"
        opacity="0.8"
        transform="rotate(45 323 73)"
      >
        <animate
          attributeName="opacity"
          values="0.8;0.4;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="20"
        fontWeight="bold"
      >
        DevFolio
      </text>
    </svg>
  ),

  InventoryManagement: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Warehouse shelves */}
      <rect
        x="50"
        y="120"
        width="80"
        height="100"
        fill="#334756"
        opacity="0.6"
      />
      <rect
        x="150"
        y="120"
        width="80"
        height="100"
        fill="#334756"
        opacity="0.6"
      />
      <rect
        x="250"
        y="120"
        width="80"
        height="100"
        fill="#334756"
        opacity="0.6"
      />
      {/* Boxes */}
      <rect
        x="60"
        y="130"
        width="25"
        height="25"
        fill="url(#boxGradient)"
        filter="url(#glow)"
      />
      <rect
        x="90"
        y="130"
        width="25"
        height="25"
        fill="#FF4C29"
        opacity="0.8"
      />
      <rect x="60" y="160" width="25" height="25" fill="#334756" />
      <rect
        x="160"
        y="130"
        width="25"
        height="25"
        fill="url(#boxGradient)"
        filter="url(#glow)"
      />
      <rect
        x="190"
        y="130"
        width="25"
        height="25"
        fill="#FF4C29"
        opacity="0.8"
      />
      <rect x="260" y="130" width="25" height="25" fill="#334756" />
      <rect
        x="290"
        y="130"
        width="25"
        height="25"
        fill="url(#boxGradient)"
        filter="url(#glow)"
      />
      {/* Barcode scanner beam */}
      <line
        x1="200"
        y1="80"
        x2="200"
        y2="120"
        stroke="#FF4C29"
        strokeWidth="3"
        opacity="0.8"
      >
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </line>
      {/* Scanner device */}
      <rect
        x="190"
        y="70"
        width="20"
        height="15"
        rx="3"
        fill="#334756"
        filter="url(#glow)"
      />
      {/* Data visualization */}
      <rect x="50" y="50" width="4" height="20" fill="#FF4C29" />
      <rect x="60" y="45" width="4" height="25" fill="#FF4C29" />
      <rect x="70" y="40" width="4" height="30" fill="#FF4C29" />
      <rect x="80" y="50" width="4" height="20" fill="#334756" />
      <text
        x="200"
        y="280"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="16"
        fontWeight="bold"
      >
        Inventory Management
      </text>
    </svg>
  ),

  EduBlog360: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Book */}
      <rect
        x="150"
        y="100"
        width="100"
        height="120"
        fill="url(#bookGradient)"
        filter="url(#glow)"
      />
      <rect x="155" y="105" width="90" height="110" fill="#082032" />
      {/* Book pages */}
      <line
        x1="165"
        y1="120"
        x2="235"
        y2="120"
        stroke="#334756"
        strokeWidth="2"
      />
      <line
        x1="165"
        y1="130"
        x2="220"
        y2="130"
        stroke="#334756"
        strokeWidth="1"
      />
      <line
        x1="165"
        y1="140"
        x2="230"
        y2="140"
        stroke="#334756"
        strokeWidth="1"
      />
      <line
        x1="165"
        y1="150"
        x2="210"
        y2="150"
        stroke="#334756"
        strokeWidth="1"
      />
      {/* Blog icon */}
      <circle cx="200" cy="180" r="15" fill="#FF4C29" opacity="0.8" />
      <rect x="195" y="175" width="10" height="2" fill="#082032" />
      <rect x="195" y="180" width="8" height="2" fill="#082032" />
      <rect x="195" y="185" width="6" height="2" fill="#082032" />
      {/* 360 degree indicator */}
      <circle
        cx="200"
        cy="70"
        r="25"
        fill="none"
        stroke="#FF4C29"
        strokeWidth="2"
        opacity="0.6"
      />
      <text
        x="200"
        y="77"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="14"
        fontWeight="bold"
      >
        360°
      </text>
      {/* Floating elements */}
      <circle cx="100" cy="120" r="3" fill="#334756" opacity="0.7">
        <animate
          attributeName="r"
          values="3;5;3"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="300" cy="160" r="4" fill="#FF4C29" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="18"
        fontWeight="bold"
      >
        EduBlog360
      </text>
    </svg>
  ),

  GetARideCab: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="taxiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Taxi body */}
      <path
        d="M100 160 L130 130 L270 130 L300 160 L300 200 L280 200 L280 220 L260 220 L260 200 L140 200 L140 220 L120 220 L120 200 L100 200 Z"
        fill="url(#taxiGradient)"
        filter="url(#glow)"
      />
      {/* Taxi sign */}
      <rect
        x="180"
        y="110"
        width="40"
        height="20"
        rx="5"
        fill="#FF4C29"
        filter="url(#glow)"
      />
      <text
        x="200"
        y="125"
        textAnchor="middle"
        fill="#082032"
        fontSize="12"
        fontWeight="bold"
      >
        TAXI
      </text>
      {/* Wheels */}
      <circle cx="140" cy="210" r="15" fill="#334756" />
      <circle cx="260" cy="210" r="15" fill="#334756" />
      <circle cx="140" cy="210" r="10" fill="#FF4C29" filter="url(#glow)" />
      <circle cx="260" cy="210" r="10" fill="#FF4C29" filter="url(#glow)" />
      {/* Windows */}
      <path
        d="M140 130 L150 150 L250 150 L260 130 Z"
        fill="#334756"
        opacity="0.7"
      />
      {/* Route path */}
      <path
        d="M50 80 Q150 60 250 80 T350 100"
        fill="none"
        stroke="#FF4C29"
        strokeWidth="3"
        strokeDasharray="10,5"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-30"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      {/* Location pins */}
      <circle cx="80" cy="90" r="8" fill="#FF4C29" filter="url(#glow)" />
      <circle cx="80" cy="90" r="4" fill="#082032" />
      <circle cx="320" cy="110" r="8" fill="#334756" />
      <circle cx="320" cy="110" r="4" fill="#FF4C29" />
      <text
        x="200"
        y="270"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="16"
        fontWeight="bold"
      >
        Get-A-Ride Cab Service
      </text>
    </svg>
  ),

  MSSQLDatabase: () => (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4C29" />
          <stop offset="100%" stopColor="#334756" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="#082032" />
      {/* Database cylinders */}
      <ellipse
        cx="150"
        cy="120"
        rx="40"
        ry="15"
        fill="url(#dbGradient)"
        filter="url(#glow)"
      />
      <rect
        x="110"
        y="120"
        width="80"
        height="60"
        fill="url(#dbGradient)"
        opacity="0.8"
      />
      <ellipse
        cx="150"
        cy="180"
        rx="40"
        ry="15"
        fill="url(#dbGradient)"
        filter="url(#glow)"
      />

      <ellipse cx="250" cy="140" rx="40" ry="15" fill="#334756" />
      <rect
        x="210"
        y="140"
        width="80"
        height="60"
        fill="#334756"
        opacity="0.8"
      />
      <ellipse cx="250" cy="200" rx="40" ry="15" fill="#334756" />

      {/* SQL text */}
      <text
        x="200"
        y="80"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="24"
        fontWeight="bold"
      >
        SQL
      </text>

      {/* Data flow lines */}
      <path
        d="M190 150 L210 160"
        stroke="#FF4C29"
        strokeWidth="3"
        opacity="0.7"
      >
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M190 170 L210 180"
        stroke="#FF4C29"
        strokeWidth="3"
        opacity="0.7"
      >
        <animate
          attributeName="opacity"
          values="1;0.7;1"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Data nodes */}
      <circle cx="100" cy="100" r="4" fill="#FF4C29" opacity="0.8" />
      <circle cx="120" cy="90" r="3" fill="#334756" opacity="0.6" />
      <circle cx="300" cy="120" r="4" fill="#FF4C29" opacity="0.8" />
      <circle cx="320" cy="140" r="3" fill="#334756" opacity="0.6" />

      {/* Connection lines */}
      <line
        x1="100"
        y1="100"
        x2="110"
        y2="120"
        stroke="#FF4C29"
        strokeWidth="2"
        opacity="0.5"
      />
      <line
        x1="290"
        y1="140"
        x2="300"
        y2="120"
        stroke="#334756"
        strokeWidth="2"
        opacity="0.5"
      />

      <text
        x="200"
        y="270"
        textAnchor="middle"
        fill="#FF4C29"
        fontSize="16"
        fontWeight="bold"
      >
        MS SQL Database Solution
      </text>
    </svg>
  ),
};

const projects = [
  {
    id: 1,
    title: "iCars",
    description:
      "The iCars project is a dynamic React web application designed for a car showroom, showcasing vehicles and services. Built with ReactJS and TypeScript, the application utilizes AWS Lambda functions to handle CRUD operations and interacts with REST APIs for seamless data management. AWS RDS and DynamoDB were implemented for efficient storage of inventory and car details, while AWS S3 was used for hosting the application, complemented by AWS CloudFront for optimized content delivery.",
    svg: "iCars",
    technologies: [
      "React",
      "TypeScript",
      "AWS S3",
      "AWS Lambda",
      "AWS RDS",
      "DynamoDB",
      "AWS CloudFront",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/FaiqueMZM/iCars-AWS-Project",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Surveillance System",
    description:
      "This final year project focuses on automating video surveillance to improve efficiency in violence detection. Utilizing deep learning techniques, the system employs VGG19 for feature extraction and ConvLSTM for analyzing video frames. By leveraging properties such as motion, object interactions, and contextual cues, the model distinguishes between peaceful and violent activities. Trained on the Hockey Fight Dataset, it achieved a 70% accuracy rate. Tools used for development included Python, PyTorch, Jupyter Notebook, and OpenCV, showcasing the integration of AI in security solutions.",
    svg: "SmartSurveillance",
    technologies: [
      "Deep Learning",
      "Python",
      "PyTorch",
      "Jupyter Notebook",
      "OpenCV",
    ],
    liveUrl: "#",
    githubUrl:
      "https://github.com/FaiqueMZM/Smart-Surveillance-System-Using-VGG19-and-ConvLSTM",
    featured: true,
  },
  {
    id: 3,
    title: "Future Seekers LK",
    description:
      "As part of an agile group project, Future Seekers LK was developed to facilitate job seeking and hiring processes for applicants and employers. This platform was built using the CodeIgniter framework alongside HTML, CSS, JavaScript, PHP, and MySQL. Throughout the project, I gained valuable experience in understanding client requirements, crafting user stories and personas, and utilizing project management software (Asana). The project involved working through sprints, providing insight into agile methodologies and teamwork in a dynamic environment.",
    svg: "FutureSeekersLK",
    technologies: ["CodeIgniter", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "DevFolio",
    description:
      "A modern, responsive portfolio website with futuristic design elements. Features include interactive animations, project showcases, and contact integration.",
    svg: "DevFolio",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/FaiqueMZM/devFolio",
    featured: true,
  },
  {
    id: 5,
    title: "Inventory Management System",
    description:
      "The Inventory Management System is a comprehensive application designed to manage inventory operations effectively. Initially developed as a command-line interface (CLI) application, it emphasized clean coding principles and implemented software design patterns, including Singleton, Command, Factory,  Builder, and Facade. The project transitioned into a Java Servlet Application using the MVC architecture, with user interfaces built using HTML and JSP. Key features included concurrency handling to ensure smooth client-server interactions, enhancing the application's efficiency and usability.",
    svg: "InventoryManagement",
    technologies: ["Java", "Servlet", "HTML", "JSP", "JDBC", "MySQL"],
    liveUrl: "#",
    githubUrl:
      "https://github.com/FaiqueMZM/Inventory-Management-System-Java-Servlet-Application",
    featured: false,
  },
  {
    id: 6,
    title: "EduBlog360",
    description:
      "EduBlog360 is a blog web application designed for multiple users to share articles, with an admin review system for publishing content. The project was developed using the Laravel framework, incorporating HTML, CSS, Blade, PHP, and SQLite. This application facilitates a streamlined content management system, allowing for efficient submission, review, and publication processes, ideal for multi-user environments.",
    svg: "EduBlog360",
    technologies: ["Laravel", "HTML", "CSS", "Blade", "PHP", "SQLite"],
    liveUrl: "#",
    githubUrl: "https://github.com/FaiqueMZM/EduBlog360-SSP2-CB008515",
    featured: false,
  },
  {
    id: 7,
    title: "Get-A-Ride Cab Service",
    description:
      "Get-A-Ride Cab Service is a Java-based application designed to manage cab service operations using Object-Oriented Programming (OOP) principles and the Model View Controller (MVC) architecture. The project provided hands-on experience in creating UML diagrams, including Activity, Sequence, and Class Diagrams. In addition, it involved documenting detailed test cases for each use case in the system, ensuring comprehensive coverage of functionality and robustness in design.",
    svg: "GetARideCab",
    technologies: ["OOP", "MVC", "UML", "Test Cases"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "MS SQL Database Solution",
    description:
      "This project involved designing and implementing a Microsoft SQL database solution tailored to the operational requirements of a hospital. The development process included creating an Entity Relationship Diagram (ERD) at a high level, normalizing the relational schema to 3NF, and conducting comprehensive testing through predefined test cases. The solution provided a robust data management framework ensuring the hospital's operational efficiency.",
    svg: "MSSQLDatabase",
    technologies: ["MS SQL", "ERD", "Normalization", "Test Cases"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentProject = projects[currentIndex];
  const SVGComponent =
    ProjectSVGs[currentProject.svg as keyof typeof ProjectSVGs];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C29]/5 via-transparent to-[#334756]/5"></div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#FF4C29] to-[#334756] bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Main Slider Container */}
        <div
          className="relative bg-[#2C394B]/20 backdrop-blur-sm border border-[#334756]/30 rounded-3xl p-8 overflow-hidden px-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, _index) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project SVG */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-[#FF4C29]/20 shadow-2xl shadow-[#FF4C29]/10 bg-[#082032]">
                      <div className="w-full h-64 md:h-80">
                        <SVGComponent />
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#FF4C29]/90 text-white border-0 px-3 py-1">
                            Featured
                          </Badge>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[#FF4C29]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Futuristic corner accents */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-[#FF4C29] opacity-60"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[#FF4C29] opacity-60"></div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-[#334756]/30 text-white/70 border-[#334756]/20 hover:bg-[#334756]/50 hover:text-[#FF4C29] cursor-pointer transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a href="" target="_blank" rel="noopener noreferrer">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#FF4C29] to-[#334756] hover:from-[#FF4C29]/80 hover:to-[#334756]/80 text-white border-0 px-6"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="border-[#FF4C29]/30 text-white hover:bg-[#FF4C29]/10 bg-transparent px-6"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#082032]/80 backdrop-blur-sm border border-[#FF4C29]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300 group z-10"
          >
            <ChevronLeft className="w-6 h-6 group-hover:text-[#FF4C29]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#082032]/80 backdrop-blur-sm border border-[#FF4C29]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300 group z-10"
          >
            <ChevronRight className="w-6 h-6 group-hover:text-[#FF4C29]" />
          </button>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center mt-8 gap-6">
          {/* Dot Indicators */}
          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#FF4C29] border-[#FF4C29] scale-125"
                    : "bg-transparent border-[#334756] hover:border-[#FF4C29]/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={toggleAutoPlay}
            className="w-10 h-10 bg-[#2C394B]/50 backdrop-blur-sm border border-[#334756]/30 rounded-full flex items-center justify-center text-white hover:bg-[#FF4C29]/20 hover:border-[#FF4C29] transition-all duration-300"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full max-w-md mx-auto">
          <div className="h-1 bg-[#334756]/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF4C29] to-[#334756] rounded-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-white/60">
            <span>
              {currentIndex + 1} of {projects.length}
            </span>
            <span>Featured Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
