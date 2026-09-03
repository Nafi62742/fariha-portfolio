import { Injectable } from '@angular/core';

import { SkillCategory, Experience, Project, Publication, Education, Leadership, AnalyticalSkill } from '@models/portfolio.models';

/**
 * Service that provides mock data for all portfolio sections,
 * including skill categories, projects, experience, publications, and education.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {

  /**
   * Retrieves the list of technical skill categories.
   *
   * @returns Array of SkillCategory objects
   */
  public getSkillCategories(): Array<SkillCategory> {
    return [
      {
        key: 'cat_database', icon: 'fa-database',
        skills: ['Oracle (11g, 12c, 19c)', 'MySQL', 'SQL Joins & Aggregations', 'Data Extraction']
      },
      {
        key: 'cat_mobile', icon: 'fa-server',
        skills: ['Oracle Data Guard', 'Oracle RAC', 'RMAN Backups & Restores', 'EXPDP/IMPDP', 'Oracle WebLogic', 'Oracle OEM']
      },
      {
        key: 'cat_frontend', icon: 'fa-linux',
        skills: ['Red Hat Linux', 'Oracle Linux']
      },
      {
        key: 'cat_backend', icon: 'fa-brain',
        skills: ['Agile & Scrum Fundamentals', 'User Stories & Acceptance Criteria', 'Cloud Basics (AWS)', 'SDLC & STLC']
      },
      {
        key: 'cat_tools', icon: 'fa-screwdriver-wrench',
        skills: ['Jira', 'Power BI', 'Git', 'GitHub']
      }
    ];
  }

  /**
   * Retrieves the elaborate analytical and business skills list.
   *
   * @returns Array of AnalyticalSkill objects
   */
  public getAnalyticalSkills(): Array<AnalyticalSkill> {
    return [
      {
        title: 'Requirement Analysis & Workflow Design',
        description: 'Analyzing complex business needs and designing efficient, clear process maps and operational workflows.',
        icon: 'fa-magnifying-glass-chart'
      },
      {
        title: 'Structured Documentation',
        description: 'Preparing structured Minutes of Meetings (MoM), action trackers, process flows, and system readiness reports.',
        icon: 'fa-file-lines'
      },
      {
        title: 'Stakeholder Communication & Coordination',
        description: 'Facilitating workshops and alignment discussions between cross-functional teams, clients, and international partners.',
        icon: 'fa-users-gear'
      },
      {
        title: 'Process Improvement & SLA Tracking',
        description: 'Tracking SLA metrics, identifying workflow bottlenecks, and proposing actionable optimizations.',
        icon: 'fa-chart-line'
      }
    ];
  }

  /**
   * Retrieves the professional experience timeline history.
   *
   * @returns Array of Experience objects
   */
  public getExperiences(): Array<Experience> {
    return [
      {
        company:    'Express Systems Limited',
        location:   'Dhaka, Bangladesh',
        role:       'Junior Engineer, Post-Sales (Oracle)',
        type:       'fulltime',
        startDate:  'Aug 2024',
        endDate:    null,
        icon:       'fa-briefcase',
        bullets: [
          'Database Administration: Installed, configured, and migrated Oracle Database versions 11g, 12c, and 19c across enterprise client environments.',
          'High Availability: Installed and configured Oracle Data Guard and Oracle RAC for high-availability and fault-tolerant database setups.',
          'Backup & Recovery: Performed logical database backup and restore operations using EXPDP/IMPDP and RMAN.',
          'Performance Monitoring: Monitored database health and performance metrics; identified and troubleshot issues to sustain optimal system reliability and minimize service disruptions.'
        ],
        tech: ['Oracle Database', 'Oracle Data Guard', 'Oracle RAC', 'RMAN', 'EXPDP/IMPDP', 'Red Hat Linux', 'Oracle Linux', 'MySQL', 'SQL']
      }
    ];
  }

  /**
   * Retrieves the collection of personal and professional projects.
   *
   * @returns Array of Project objects
   */
  public getProjects(): Array<Project> {
    return [
      {
        name:            'Kafka Implementation',
        description:     'Led cross-functional coordination for an enterprise-scale Apache Kafka implementation for Grameenphone, ensuring smooth delivery between international teams.',
        longDescription: 'This project involved coordinating an enterprise-scale Apache Kafka implementation for Grameenphone — one of Bangladesh\'s largest telecom operators — as the primary liaison between the international implementation partner and the client stakeholders. Responsibilities spanned the full delivery lifecycle: organizing stakeholder workshops to align project scope and use cases, managing task trackers, action plans, and timelines, and preparing comprehensive project documentation including MoMs, action trackers, and system readiness reports. Pre-implementation activities covered environment validation, access coordination, and server requirement verification. Proactive identification and resolution of implementation challenges ensured the project remained on schedule and met all business objectives.',
        highlights:      'Served as the primary coordination point between Grameenphone and international implementation partners, managing end-to-end delivery documentation and stakeholder alignment.',
        tech:            ['Apache Kafka', 'Oracle', 'Jira', 'Linux'],
        icon:            'fa-network-wired',
        color:           '#2563eb',
        category:        'office',
        type:            'Enterprise Implementation',
        shortRole:       'Kafka — Client: Grameenphone'
      },
      {
        name:            'Oracle DB Administration',
        description:     'Hands-on Oracle Database administration covering installation, configuration, migration, high-availability setup, and performance monitoring across enterprise client environments.',
        longDescription: 'As part of the post-sales engineering team at Express Systems Limited, this ongoing project involves full-lifecycle Oracle Database administration for enterprise clients. Core activities include the installation, configuration, and migration of Oracle Database 11g, 12c, and 19c across diverse client environments. High-availability configurations include Oracle Data Guard for disaster recovery and Oracle Real Application Clusters (RAC) for load distribution. Logical database backup and restore operations are performed using EXPDP/IMPDP and RMAN. Continuous performance monitoring covers database health metrics, query performance, and service reliability — proactively identifying and resolving issues before they impact business operations. The work spans Red Hat Linux and Oracle Linux environments with tooling through Oracle OEM and Oracle WebLogic.',
        highlights:      'Administered Oracle 11g/12c/19c installations, configured Data Guard and RAC for HA, and managed backup/recovery using RMAN and EXPDP/IMPDP.',
        tech:            ['Oracle Database', 'Oracle Data Guard', 'Oracle RAC', 'RMAN', 'EXPDP/IMPDP', 'Oracle OEM', 'Red Hat Linux', 'Oracle Linux'],
        icon:            'fa-database',
        color:           '#e11d48',
        category:        'office',
        type:            'Database Administration',
        shortRole:       'Enterprise Oracle DBA'
      },
      {
        name:            'KEIAI Order App',
        description:     'A cross-platform ordering management application built for KEIAI, enabling streamlined order placement and tracking.',
        longDescription: 'KEIAI Order App is a Flutter-based cross-platform application developed for KEIAI, a Japanese organization. The app provides a clean and efficient interface for placing, managing, and tracking orders within the organization. It supports both web and mobile platforms from a single Flutter codebase, ensuring a consistent experience across devices. The application integrates with the organization\'s backend systems to handle real-time order status updates, user authentication, and order history management. The web version is deployed and accessible online, while mobile builds target both Android and iOS.',
        highlights:      'Built a cross-platform Flutter application deployed as a web app with order management and real-time tracking features.',
        tech:            ['Flutter', 'Dart'],
        icon:            'fa-boxes-stacked',
        color:           '#14b8a6',
        category:        'office',
        type:            'Web & Mobile App',
        link:            'https://keiai-app.com/app/',
        shortRole:       'Prosthetics & Product Ordering'
      },
      {
        name:            'Pet App',
        description:     'An auction application for pets featuring real-time bidding, user listings, and live bid management.',
        longDescription: 'Pet App is a full-stack auction platform dedicated to pet adoption and trading, built for a Japanese client. The system enables users to list pets for auction with rich media, set reserve prices, and manage live bidding sessions with real-time countdown timers. The web frontend was built in Angular with a responsive layout that adapts gracefully across devices. The companion mobile application, built in Flutter, provides the same bidding and listing experience natively on both Android and iOS. The backend is powered by Python-based REST APIs deployed on AWS, with data persisted in DynamoDB for high-availability, low-latency reads. The platform also features user authentication, auction history tracking, and bid notification logic.',
        highlights:      'Built the web user interface in Angular and the mobile application in Flutter with AWS DynamoDB backend.',
        tech:            ['Angular', 'Flutter', 'Python', 'AWS DynamoDB', 'Dart'],
        icon:            'fa-paw',
        color:           '#6366f1',
        category:        'office',
        type:            'Web & Mobile App',
        link:            'https://www.dogcatbirth-records.com/',
        additionalLinks: [
          { label: 'Web App',     url: 'https://www.dogcatbirth-records.com/app/index.html', icon: 'fa-mobile-screen' },
          { label: 'Admin Panel', url: 'https://www.dogcatbirth-records.com/admin/login',    icon: 'fa-lock' }
        ],
        shortRole:       'Buy, Sell & Track Pets'
      },
      {
        name:            'Gram Stain Atlas',
        description:     'A medical atlas app for Gram staining, showing photos, explanations, and pronunciations for 50+ bacteria.',
        longDescription: 'Gram Stain Atlas is a clinically-oriented mobile reference application developed for a Japanese medical institution. It provides a comprehensive visual and audio guide to Gram staining — a fundamental microbiological technique used to classify bacteria. The app covers more than 50 bacterial species, each with high-resolution microscope slide photos, detailed clinical explanations, and native-language audio pronunciations to support medical students and laboratory professionals. The application was built using Flutter to target both Android and iOS from a single codebase. Data is stored locally via SQLite, allowing fully offline access — essential in clinical environments. The app was published to both the Google Play Store and Apple App Store in Japan.',
        highlights:      'Developed cross-platform mobile apps for iOS and Android with offline-first design and audio support.',
        tech:            ['Flutter', 'Dart', 'SQLite'],
        icon:            'fa-microscope',
        color:           '#06b6d4',
        category:        'office',
        type:            'Mobile App',
        playstore:       'https://play.google.com/store/apps/details?id=jp.or.ohtahp.gramstain&hl=ja&pli=1',
        appstore:        'https://apps.apple.com/jp/app/%E3%82%B0%E3%83%A9%E3%83%A0%E6%9F%93%E8%89%B2%E3%82%A2%E3%83%88%E3%83%A9%E3%82%B9/id1454593922',
        shortRole:       'Bacteria Microscopic Atlas'
      },
      {
        name:            'Nearest Area Finder',
        description:     'A proximity-sorting application designed to calculate and display the closest areas from any given location.',
        longDescription: "Nearest Area Finder is a Flutter application that takes a reference geographic coordinate and returns a sorted list of predefined locations ranked by distance from that point. The core of the app is a coordinate-based sorting algorithm that computes Haversine distances between the user's position and a set of known locations, then ranks them in ascending order of proximity. The UI presents results as a clean card list with distance labels, making it easy to quickly identify the nearest relevant area. This project was built to explore Flutter's geolocation capabilities and evaluate algorithmic approaches for proximity ranking without relying on external mapping APIs.",
        highlights:      'Implemented location coordinates sorting algorithms to fetch and rank nearby locations.',
        tech:            ['Flutter', 'Dart'],
        icon:            'fa-location-crosshairs',
        color:           '#8b5cf6',
        category:        'office',
        type:            'Flutter Project',
        shortRole:       'Location Proximity Finder'
      },
      {
        name:            'Izumi',
        description:     'An operational management platform for car repair tracking, delivery status, and service workflows.',
        longDescription: 'Izumi is an internal operations management platform developed for a Japanese automotive service company. It centralizes the entire lifecycle of vehicle repair jobs — from initial intake and diagnosis to parts ordering, technician assignment, and customer delivery. The platform features real-time workflow dashboards that aggregate operational data across multiple service bays, giving managers instant visibility into bottlenecks and job completion rates. Built on Angular for the frontend with a Python-based backend and AWS DynamoDB as the data store, the system was designed for high reliability and scalability. Key features include status tracking timelines, delivery scheduling, service history logs, and exportable reporting.',
        highlights:      'Designed workflow dashboards, aggregating operational data and improving visibility. Built on Angular and AWS.',
        tech:            ['Angular', 'Python', 'AWS DynamoDB'],
        icon:            'fa-car',
        color:           '#10b981',
        category:        'office',
        type:            'Web Application',
        shortRole:       'Car Repair & Workflow Tracker'
      },
      {
        name:            'Ginsen',
        description:     'Form management project featuring dynamic HTML layouts and an AWS-backed data collection framework.',
        longDescription: 'Ginsen is a flexible enterprise form management system developed for a Japanese organization that required a scalable way to collect, store, and process structured data submissions. The platform enables administrators to define custom form layouts using dynamic HTML templates, which users then fill in and submit. All submissions are ingested through Python-based processing pipelines and stored in AWS DynamoDB, enabling fast retrieval and analysis. The system supports conditional field logic, multi-step forms, and rich text inputs, making it adaptable to a wide variety of internal workflows such as incident reporting, procurement requests, and compliance checklists.',
        highlights:      'Built flexible user-defined data inputs and ingestion pipelines processing dynamic form submissions.',
        tech:            ['HTML5', 'Python', 'AWS DynamoDB'],
        icon:            'fa-file-invoice',
        color:           '#f59e0b',
        category:        'office',
        type:            'Web Application',
        shortRole:       'Dynamic Form Management'
      },
      {
        name:            'Voice Record & Play',
        description:     'An offline native Android mobile application designed to record, store, and play back high-quality voice recordings.',
        longDescription: "Voice Record & Play is a native Android application built in Java that provides a clean, minimal interface for capturing audio recordings and replaying them on demand. The app integrates with Android's MediaRecorder and MediaPlayer APIs to deliver high-quality audio capture with configurable encoding formats. All recordings are saved directly to the device's local filesystem, ensuring the app works entirely offline without relying on any cloud service. Users can manage their recordings through a simple list view, rename entries, delete unwanted recordings, and share clips via standard Android intents. This project served as a practical exploration of Android's media and storage APIs.",
        highlights:      'Implemented local filesystem storage operations and audio recording/playback APIs.',
        tech:            ['Java', 'Android SDK'],
        icon:            'fa-microphone',
        color:           '#3b82f6',
        category:        'office',
        type:            'Mobile App',
        shortRole:       'Offline Voice Recorder'
      },
      {
        name:            'Pabo Kothay',
        description:     'A discovery and advertising platform helper for small businesses to showcase services to nearby tourists.',
        longDescription: 'Pabo Kothay (Bengali for "Where Will I Find It?") is an Android application designed to bridge the gap between local small businesses and tourists exploring unfamiliar areas in Bangladesh. Business owners can register their shops, restaurants, or service providers with descriptions, photos, and location data. Tourists browsing the app can filter listings by category and proximity, seeing only businesses near their current location. The app leverages Firebase Realtime Database for live data sync, allowing business owners to update their listings instantly. It features a map-integrated discovery view, category filters, and a simple business dashboard for managing listings.',
        highlights:      'Implemented local business advertising channels and location discovery utilizing Firebase Realtime Database.',
        tech:            ['Java', 'Firebase', 'Android SDK'],
        icon:            'fa-map-location-dot',
        color:           '#ec4899',
        category:        'personal',
        type:            'Mobile App',
        shortRole:       'Local Business Directory'
      },
      {
        name:            'Flour to Pastry',
        description:     'A responsive web storefront and ordering application modeled on a real-life online cake shop.',
        longDescription: 'Flour to Pastry is a full-stack e-commerce web application designed around a real-life artisan cake shop. It provides a beautifully styled, responsive product catalog where customers can browse items by category, view detailed product pages with photos and descriptions, and place orders directly through the website. The backend is built with PHP, handling user sessions, authentication, and order processing logic. Product and order data are stored in a MySQL relational database with a carefully designed schema for catalog, inventory, and customer records. The project demonstrates a complete e-commerce flow from browsing to checkout, with an admin panel for managing products and viewing incoming orders.',
        highlights:      'Developed responsive e-commerce storefront views, database schema, and product catalogs.',
        tech:            ['PHP', 'HTML', 'CSS', 'MySQL'],
        icon:            'fa-cake-candles',
        color:           '#f97316',
        category:        'personal',
        type:            'Web Application',
        shortRole:       'Online Bakery Storefront'
      },
      {
        name:            'Get Fund',
        description:     'A business pitch and crowdfunding platform for entrepreneurs to showcase plans and secure investment.',
        longDescription: 'Get Fund is a crowdfunding and business pitch platform built to connect early-stage entrepreneurs with potential investors. Founders can create detailed campaign pages with business goals, milestones, and pitch videos. Investors browse campaigns, filter by industry or funding stage, and pledge amounts toward projects they believe in. The platform tracks funding progress in real time with visual goal indicators and sends notifications when milestones are reached. Built with C# and the ASP.NET MVC framework following clean MVC design patterns. Data is managed through Microsoft SQL Server with a normalized schema covering users, campaigns, pledges, and transactions.',
        highlights:      'Designed interactive pitch presentation pages and dashboard features for funding goal tracking.',
        tech:            ['C#', '.NET MVC', 'Microsoft SQL Server'],
        icon:            'fa-sack-dollar',
        color:           '#6366f1',
        category:        'personal',
        type:            'Web Application',
        shortRole:       'Crowdfunding Platform'
      },
      {
        name:            'Reckless Seas',
        description:     'A boat game implementing a simulated pseudo-3D visual perspective utilizing 2D visual models.',
        longDescription: 'Reckless Seas is a C++ desktop game that recreates the illusion of 3D depth using carefully layered 2D sprites and parallax scaling techniques. The player controls a motorboat navigating through increasingly treacherous open-ocean conditions — dodging icebergs, debris, and enemy vessels while managing speed and hull integrity. The game engine was written from scratch in C++, implementing a custom game loop, frame-rate-independent physics, sprite-based collision detection, and a parallax scrolling background system that creates a convincing sense of speed and depth. The entity management system handles spawning, lifecycle, and interaction of all on-screen objects. This was a hands-on exploration of low-level game development concepts without using any game engine such as Unity or Unreal.',
        highlights:      'Developed game physics, rendering structures, and entity-handling engines.',
        tech:            ['C++'],
        icon:            'fa-ship',
        color:           '#ef4444',
        category:        'personal',
        type:            'Game Project',
        youtube:         'https://www.youtube.com/watch?v=BuX1QRPwhjU',
        shortRole:       'Pseudo-3D Boat Game'
      },
      {
        name:            'School Management System',
        description:     'An upgraded administrative platform for teachers and students to manage academic schedules and progress.',
        longDescription: 'The School Management System is a desktop application built in Java to modernize day-to-day administrative operations in an academic institution. It provides role-based access for administrators, teachers, and students, each with a tailored interface for their specific responsibilities. Administrators can manage student enrollment, class assignments, and staff records. Teachers can input grades, track attendance, and view their assigned courses. Students can check their own academic records, view timetables, and monitor progress. The entire data layer is backed by Microsoft SQL Server, with a carefully normalized relational schema covering courses, enrollments, grades, attendance records, and staff assignments.',
        highlights:      'Designed data tables and relationship structures for courses, grades, and enrollments.',
        tech:            ['Java', 'Microsoft SQL Server'],
        icon:            'fa-graduation-cap',
        color:           '#8b5cf6',
        category:        'personal',
        type:            'Software Project',
        shortRole:       'School Admin & Grading'
      }
    ];
  }

  /**
   * Looks up a single project by its URL-safe slug.
   *
   * @param slug - The URL-safe slug of the project (e.g. 'pet-app')
   * @returns The matching Project object, or undefined if not found
   */
  public getProjectBySlug(slug: string): Project | undefined {
    return this.getProjects().find(p => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
  }

  /**
   * Retrieves the collection of academic and scientific publications.
   *
   * @returns Array of Publication objects
   */
  public getPublications(): Array<Publication> {
    return [
      {
        title:           'Enhancing Construction Site Safety: A Deep Learning Approach for Detection and Monitoring of Safety Equipment',
        venue:           'International Conference on Computer and Information Technology (ICCIT)',
        year:            '2024',
        authors:         'Fariha Hassan et al.',
        icon:            'fa-hard-hat',
        color:           '#f59e0b',
        abstract:        'Applies deep learning models to automatically detect and monitor the use of personal protective equipment (PPE) on construction sites, enhancing safety compliance and reducing workplace hazards.',
        longDescription: 'Construction sites are among the most hazardous work environments, where non-compliance with personal protective equipment (PPE) regulations significantly increases the risk of accidents and fatalities. This research proposes a deep learning-based system for real-time detection and monitoring of safety equipment — including helmets, vests, and gloves — from video and image feeds captured on construction sites. The model leverages state-of-the-art object detection architectures trained on a domain-specific dataset of PPE usage scenarios. The system is capable of flagging non-compliant individuals, logging incidents, and generating safety compliance reports. Results demonstrate strong detection accuracy across diverse lighting and occlusion conditions, validating the approach as a scalable solution for automated safety monitoring in the construction industry.',
        keywords:        ['Deep Learning', 'Object Detection', 'PPE Detection', 'Construction Safety', 'Computer Vision', 'Safety Compliance', 'ICCIT']
      },
      {
        title:           'Integration of Machine Learning Algorithms for Precision Crop Recommendations',
        venue:           'B.Sc. Thesis — Ahsanullah University of Science and Technology (AUST)',
        year:            '2024',
        authors:         'Fariha Hassan',
        icon:            'fa-seedling',
        color:           '#10b981',
        abstract:        'Leverages machine learning algorithms to deliver data-driven precision crop recommendations, optimizing agricultural decision-making based on environmental, soil, and climate parameters.',
        longDescription: 'Agriculture in Bangladesh faces significant challenges from climate variability, soil degradation, and suboptimal crop selection — factors that directly impact food security and farmer livelihoods. This thesis investigates the application of machine learning algorithms to build a precision crop recommendation system that suggests optimal crops for specific conditions based on soil nutrients (N, P, K), temperature, humidity, pH, and rainfall data. Multiple classifiers — including Decision Trees, Random Forest, Naïve Bayes, and Support Vector Machines — were trained and evaluated on a curated agricultural dataset. The system outputs crop recommendations with confidence scores, enabling farmers and agricultural advisors to make data-driven planting decisions. The final ensemble model achieves high accuracy while remaining interpretable, making it practical for deployment in low-resource agricultural environments.',
        keywords:        ['Machine Learning', 'Precision Agriculture', 'Crop Recommendation', 'Random Forest', 'Decision Tree', 'Soil Analysis', 'Agricultural AI']
      }
    ];
  }

  /**
   * Looks up a single publication by its URL-safe slug.
   *
   * @param slug - The URL-safe slug of the publication
   * @returns The matching Publication object, or undefined if not found
   */
  public getPublicationBySlug(slug: string): Publication | undefined {
    return this.getPublications().find(p => p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug);
  }

  /**
   * Retrieves the academic background timeline history.
   *
   * @returns Array of Education objects
   */
  public getEducation(): Array<Education> {
    return [
      {
        institution: 'Ahsanullah University of Science and Technology (AUST)',
        location:    'Dhaka, Bangladesh',
        degree:      'B.Sc. in Computer Science and Engineering',
        period:      'Graduated 2024',
        gpa:         'CGPA: 3.26 / 4.00',
        icon:        'fa-university',
        coursework:  ['Machine Learning', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Software Engineering', 'Data Structures & Algorithms', 'OOP']
      },
      {
        institution: 'Birshreshtha Noor Mohammad Public College',
        location:    'Dhaka, Bangladesh',
        degree:      'Higher Secondary Certificate (HSC) — Science',
        period:      '2019',
        gpa:         'GPA: 5.00 / 5.00',
        icon:        'fa-school',
        coursework:  []
      },
      {
        institution: 'Mohammadpur Preparatory School',
        location:    'Dhaka, Bangladesh',
        degree:      'Secondary School Certificate (SSC)',
        period:      '2017',
        gpa:         'GPA: 5.00 / 5.00',
        icon:        'fa-school-flag',
        coursework:  []
      }
    ];
  }



  /**
   * Retrieves the leadership and extracurricular roles history.
   *
   * @returns Array of Leadership objects
   */
  public getLeadership(): Array<Leadership> {
    return [
      {
        role:         'Program Organizer',
        organization: 'AUST CSE Society',
        period:       'Jan 2022 – Jul 2022',
        description:  'Organized academic seminars, programming workshops, and department events.'
      },
      {
        role:         'General Member',
        organization: 'AUST Innovation and Design Club',
        period:       'Jan 2019 – May 2022',
        description:  'Contributed to innovation challenges, design projects, and club activities.'
      }
    ];
  }
}
