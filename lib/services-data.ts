export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  gallery: string[];
  features: string[];
}

export const servicesData: Service[] = [
  {
    id: 'vertex-cards',
    title: 'Vertex Cards',
    description:
      'Smart business cards with NFC technology, digital contact sharing, and cloud integration',
    longDescription:
      'Transform the way you network with Vertex Cards - intelligent business cards that combine physical elegance with digital innovation. Our NFC-enabled cards allow instant contact sharing, digital portfolios, and seamless integration with your professional ecosystem. With real-time analytics and customizable designs, Vertex Cards are the ultimate tool for making lasting impressions and building meaningful connections in the modern business world.',
    icon: 'CreditCard',
    image: '/services-images/vertex-cards/dashboard.png',
    gallery: [
      '/services-images/vertex-cards/Stats.png',
      '/services-images/vertex-cards/brands.png',
      '/services-images/vertex-cards/pricing section.png',
      '/services-images/vertex-cards/Quota.png',
      '/services/vertex-cards/gallery-5.jpg',
      '/services/vertex-cards/gallery-6.jpg',
    ],
    features: [
      'NFC Technology Integration',
      'Digital Contact Sharing',
      'Cloud Synchronization',
      'Real-time Analytics',
      'Customizable Designs',
      'Mobile App Integration',
    ],
  },
  {
    id: 'school-management',
    title: 'School Management',
    description:
      'Complete academic management system for enrollment, grades, attendance, and parent communication',
    longDescription:
      'Streamline your educational institution with our comprehensive School Management System. From enrollment and attendance tracking to grade management and parent-teacher communication, manage every aspect of your school efficiently.',
    icon: 'GraduationCap',
    image: '/services-images/sch-system/sch-dashboard.jpg',
    gallery: [
      '/services-images/sch-system/sch-dashboard.jpg',
      '/services-images/sch-system/class-schedule.jpg',
      '/services-images/sch-system/dashboard2.jpg',
      '/services-images/sch-system/student-detailed-info.jpg',
    
    ],
    features: [
      'Student Enrollment System',
      'Attendance Tracking',
      'Grade Management',
      'Parent Communication Portal',
      'Fee Management',
      'Exam Scheduling',
    ],
  },
  {
    id: 'restaurant-management',
    title: 'Restaurant Management',
    description:
      'Comprehensive POS system, inventory management, order tracking, and customer analytics',
    longDescription:
      'Revolutionize your restaurant operations with our all-in-one management system. Handle POS transactions, track inventory in real-time, manage orders efficiently, and gain valuable insights into customer behavior and preferences.',
    icon: 'UtensilsCrossed',
    image: '/services-images/Chefflow/Smart Kitchen Display System.png',
    gallery: [
      '/services-images/Chefflow/Business Intelligence at Your Fingertips.png',
      '/services-images/Chefflow/CHEFFLOW.jpg',
      '/services-images/Chefflow/Real-time Metrics Dashboard.png',
      '/services-images/Chefflow/Smart Kitchen Display System.png',
     
    ],
    features: [
      'Point of Sale System',
      'Inventory Management',
      'Order Tracking',
      'Customer Analytics',
      'Staff Management',
      'Table Reservations',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description:
      'Custom-built native and cross-platform mobile applications for iOS and Android',
    longDescription:
      'Bring your ideas to life with our custom mobile app development services. We create high-performance native and cross-platform applications that engage users and drive business growth.',
    icon: 'Smartphone',
    image: '/services/mobile-apps/featured.jpg',
    gallery: [
      '/services/mobile-apps/gallery-1.jpg',
      '/services/mobile-apps/gallery-2.jpg',
      '/services/mobile-apps/gallery-3.jpg',
      '/services/mobile-apps/gallery-4.jpg',
      '/services/mobile-apps/gallery-5.jpg',
      '/services/mobile-apps/gallery-6.jpg',
    ],
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'UI/UX Design',
      'API Integration',
      'App Maintenance & Support',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Modern responsive websites and web applications using latest technologies',
    longDescription:
      'Create stunning digital experiences with our web development expertise. From responsive websites to complex web applications, we build solutions that perform flawlessly across all devices.',
    icon: 'Code',
    image: '/services/web-development/featured.jpg',
    gallery: [
      '/services/web-development/gallery-1.jpg',
      '/services/web-development/gallery-2.jpg',
      '/services/web-development/gallery-3.jpg',
      '/services/web-development/gallery-4.jpg',
      '/services/web-development/gallery-5.jpg',
      '/services/web-development/gallery-6.jpg',
    ],
    features: [
      'Responsive Design',
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'SEO Optimization',
      'Performance Tuning',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.id === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.id);
}
