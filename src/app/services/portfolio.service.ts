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
