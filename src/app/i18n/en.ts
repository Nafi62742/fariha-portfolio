/**
 * Schema defining the structure of translation dictionary files.
 */
export interface TranslationSchema {
  nav: {
    home:         string;
    about:        string;
    skills:       string;
    experience:   string;
    projects:     string;
    publications: string;
    education:    string;
    contact:      string;
    resume:       string;
  };
  hero: {
    greeting:     string;
    name:         string;
    role:         string;
    roles:        Array<string>;
    tagline:      string;
    tagline_prefix: string;
    tagline_web:    string;
    tagline_mobile: string;
    tagline_cloud:  string;
    location:       string;
    cta_projects: string;
    cta_contact:  string;
    cta_resume:   string;
    scroll_hint:  string;
  };
  about: {
    section_label:  string;
    title:          string;
    bio_1:          string;
    bio_2:          string;
    bio_3:          string;
    stat_exp:       string;
    stat_projects:  string;
    stat_databases: string;
    stat_devops:    string;
  };
  skills: {
    section_label: string;
    title:         string;
    subtitle:      string;
    cat_mobile:    string;
    cat_frontend:  string;
    cat_backend:   string;
    cat_database:  string;
    cat_cloud:     string;
    cat_tools:     string;
  };
  experience: {
    section_label: string;
    title:         string;
    subtitle:      string;
    present:       string;
    internship:    string;
    fulltime:      string;
  };
  projects: {
    section_label: string;
    title:         string;
    subtitle:      string;
    view_all:      string;
    tech_used:     string;
    role:          string;
  };
  publications: {
    section_label: string;
    title:         string;
    subtitle:      string;
    published_in:  string;
    year:          string;
    authors:       string;
  };
  education: {
    section_label: string;
    title:         string;
    subtitle:      string;
    gpa:           string;
    cgpa:          string;
    coursework:    string;
  };
  contact: {
    section_label:       string;
    title:               string;
    subtitle:            string;
    name_label:          string;
    name_placeholder:    string;
    email_label:         string;
    email_placeholder:   string;
    message_label:       string;
    message_placeholder: string;
    send_btn:            string;
    sending:             string;
    success_msg:         string;
    or_reach:            string;
    location:            string;
  };
  footer: {
    built_with:    string;
    rights:        string;
  };
}

/**
 * English translation dictionary.
 */
export const EN: TranslationSchema = {
  nav: {
    home:         'Home',
    about:        'About',
    skills:       'Skills',
    experience:   'Experience',
    projects:     'Projects',
    publications: 'Publications',
    education:    'Education',
    contact:      'Contact',
    resume:       'Resume'
  },
  hero: {
    greeting:      "Hi, I'm",
    name:          'Fariha Hassan',
    role:          'Junior Engineer, Post-Sales (Oracle)',
    roles:         ['Post-Sales Engineer', 'Database Specialist', 'Project Coordinator', 'CSE Graduate'],
    tagline:       'Detail-oriented database engineer specializing in Oracle systems administration, high availability, and project coordination.',
    tagline_prefix: 'Specializing in:',
    tagline_web:    'Oracle & MySQL Database Operations',
    tagline_mobile: 'High Availability & Migration Solutions',
    tagline_cloud:  'Cross-functional IT Project Coordination',
    location:       'Dhaka, Bangladesh',
    cta_projects:  'View Projects',
    cta_contact:   'Get In Touch',
    cta_resume:    'Download CV',
    scroll_hint:   'Scroll to explore'
  },
  about: {
    section_label: 'About Me',
    title:         'Junior Engineer & Oracle Database Specialist',
    bio_1:         'I\'m a detail-oriented Junior Engineer with 2 years of experience in Oracle database operations, supporting enterprise clients through implementation, troubleshooting, root cause analysis, and migrations.',
    bio_2:         'I have hands-on experience administering Oracle Database (11g, 12c, 19c) and MySQL, implementing high-availability setups with Oracle Data Guard and Oracle RAC, and managing database backups and recovery.',
    bio_3:         'Recently, I led stakeholder and international partner coordination for a major Kafka implementation project at Grameenphone. I also hold a B.Sc. in Computer Science and Engineering from AUST, with research publications in Deep Learning.',
    stat_exp:      'Years Experience',
    stat_projects: 'Projects Managed',
    stat_databases: 'Databases Administered',
    stat_devops:   'Tools & Technologies'
  },
  skills: {
    section_label: 'Skills',
    title:         'Technologies & Skills',
    subtitle:      'Enterprise database administration, high-availability setups, system administration, and project coordination tools.',
    cat_mobile:    'Oracle Tools & Systems',
    cat_frontend:  'Operating Systems',
    cat_backend:   'Conceptual Knowledge',
    cat_database:  'Databases',
    cat_cloud:     'Analytical & Business Skills',
    cat_tools:     'Tools & Platforms'
  },
  experience: {
    section_label: 'Experience',
    title:         'Professional Journey',
    subtitle:      'Where I\'ve worked and what I\'ve built.',
    present:       'Present',
    internship:    'Internship',
    fulltime:      'Full-time'
  },
  projects: {
    section_label:   'Projects',
    title:           'Things I\'ve Built',
    subtitle:        'A selection of projects spanning web, mobile, and cloud platforms.',
    view_all:        'View All',
    tech_used:       'Technologies',
    role:            'Role & Highlights'
  },
  publications: {
    section_label: 'Publications',
    title:         'Research & Publications',
    subtitle:      'Peer-reviewed research in Machine Learning and Deep Learning.',
    published_in:  'Published in',
    year:          'Year',
    authors:       'Authors'
  },
  education: {
    section_label: 'Education',
    title:         'Academic Background',
    subtitle:      'My formal education journey.',
    gpa:           'GPA',
    cgpa:          'CGPA',
    coursework:    'Key Coursework'
  },
  contact: {
    section_label:       'Contact',
    title:               'Let\'s Work Together',
    subtitle:            'I\'m currently open to new opportunities. Whether you have a project, a question, or just want to say hello — my inbox is always open.',
    name_label:          'Your Name',
    name_placeholder:    'e.g. Sarah Mitchell',
    email_label:         'Your Email',
    email_placeholder:   'e.g. sarah.mitchell@gmail.com',
    message_label:       'Message',
    message_placeholder: 'Hi Fariha, I\'d love to discuss a project or opportunity with you...',
    send_btn:            'Send Message',
    sending:             'Sending...',
    success_msg:         'Message sent! I\'ll get back to you soon.',
    or_reach:            'Or reach me directly',
    location:            'Dhaka, Bangladesh'
  },
  footer: {
    built_with:  'Built by Fariha Hassan',
    rights:      'All rights reserved.'
  }
};
