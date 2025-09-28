export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
  optionalFeatures?: string[];
  specifications?: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'service-vans',
    name: 'Service Vans',
    category: 'Mobile Maintenance',
    description: 'Multipurpose vehicle used for Mobile Maintenance and repair of heavy machinery, equipments without hassle of travel to workshops. Service vans are fully customisable depending on the site requirements with self sufficient Power and Air Backup.',
    image: 'https://i.ibb.co/whDZW11z/service-van.png',
    features: [
      'Ergonomic Open type cabin design for better ventilation, Good visibility and easy access',
      'Individual storage spaces for all type of lubes and spares for better 5S',
      'Digital dispensing guns for all lubes for record and usage',
      'Embossed tool Trays for ease of operations',
      'Pneumatic line sufficient for required for washing, greasing and other works required at sites',
      'Inbuilt water tank for storage of water for pressurise cleaning of equipment\'s',
      'Complete tooling and equipment of International and Indian brands',
      'Special Coating at bottom to reduce Rusting from wet soil sticked below body',
      'Pneumatic tools for opening for big nuts like wheel nuts, sum trucks etc'
    ],
    optionalFeatures: [
      'GPS enabled Remote monitoring system',
      'CCTV control for movement'
    ]
  },
  {
    id: '2',
    slug: 'hybrid-towers',
    name: 'Hybrid Towers',
    category: 'Light Towers',
    description: 'Offering 200 W x 6 LEDs with a life span of 50000 hours. Combined with CPCB-II compliant Diesel Genset with a high service interval of 500 hrs and 6-sections 7m Galvanised iron mast with 340-degree rotation.',
    image: 'https://i.ibb.co/YB0DLrK9/Hybrid-Towers.png',
    features: [
      'Efficient and high Performance of 200-Watt x 6 IP 66 LED light with longer service life',
      '6 Hours of Battery Backup with 6hrs of Charging',
      'Compacted and high performance 7.5KVA Cummins engine with Stamford Alternator',
      'CPCB-II Compliant canopy designed',
      '6 section 7 m or 9m Galvanised Iron mast with 340 Degree rotation',
      'Longer hours of continuous operation without fuel fill',
      '16 Ampere Auxiliary Output port for welding and another machine',
      'Separate switches for all LEDs',
      'Leaf spring mounted chassis with towing hook and towing speed of 30 KM/hr',
      'Compact design and Robust Design',
      'Multi-display control panel with alarms and sensors',
      'Auto Operation of GENSET to Inverter and vice versa',
      '5 adjustable jacks for better stability',
      'Auto operation for LEDs as per time settings'
    ],
    optionalFeatures: [
      'Customize LED as per requirement',
      '5 kva and 15 Kva Options',
      'IOT Enabled and Industry 4.0 Complaint'
    ],
    specifications: {
      'LED Power': '200W x 6',
      'LED Life Span': '50,000 hours',
      'Engine': '7.5KVA Cummins with Stamford Alternator',
      'Mast Height': '7m or 9m',
      'Rotation': '340 degrees',
      'Towing Speed': '30 KM/hr'
    }
  },
  {
    id: '3',
    slug: 'solar-towers',
    name: 'Solar Towers',
    category: 'Light Towers',
    description: 'Offering 100 W x 4 LEDs with a life span of 30000 hours. Combined With 1.8 KW of solar Panel a high service interval and 6-sections 7m Powder Coated iron mast with 340-degree rotation.',
    image: 'https://i.ibb.co/FSrRWNN/SOLARTowers.png',
    features: [
      'Efficient and high Performance of 100-Watt x 4 IP 66 LED light with longer service life',
      '10-11 Hours of Battery Backup with single solar day charging',
      'Compacted and High performance 550+ watts Solar panels',
      '6 section 7 m or 9m Powder Coated Iron mast with 340 Degree rotation',
      'Longer hours of continuous operation',
      'Separate switches for all LEDs',
      'Leaf spring mounted chassis with towing hook and towing speed of 20 KM/hr',
      'Compact design and Robust Design',
      'Multi-display control panel with alarms and sensors',
      'Auto Operation of LED with respect to time',
      '5 adjustable jacks for better stability',
      'Grid input for charging when solar is not present'
    ],
    optionalFeatures: [
      'Customize LED as per requirement',
      'IOT Enabled and Industry 4.0 Complaint'
    ],
    specifications: {
      'LED Power': '100W x 4',
      'LED Life Span': '30,000 hours',
      'Solar Panel': '550+ watts',
      'Battery Backup': '10-11 hours',
      'Mast Height': '7m or 9m',
      'Rotation': '340 degrees',
      'Towing Speed': '20 KM/hr'
    }
  },
  {
    id: '4',
    slug: 'power-house-towers',
    name: 'Power House Towers',
    category: 'Light Towers',
    description: 'Offering 200 W x 4 LEDs with a life span of 50000 hours. Combined with CPCB-IV+ compliant Diesel Genset with a high service interval of 500 hrs and 5-sections 7m Galvanised iron mast with 340-degree rotation.',
    image: 'https://i.ibb.co/84N3gNRF/Power-House-Towers.png',
    features: [
      'Efficient and high Performance of 200-Watt x 4 IP 66 LED light with longer service life',
      'Compacted and high performance 15KVA Cummins engine with Stamford Alternator',
      'CPCB-II Compliant canopy designed',
      '5 section 7 m Galvanised Iron mast with 340 Degree rotation',
      'Longer hours of continuous operation without fuel fill',
      'Auxiliary Output ports for welding and another machine',
      'Separate switches for all LEDs',
      'Leaf spring mounted chassis with towing hook and towing speed of 40 KM/hr',
      'Compact design',
      'Multi-display control panel with alarms and sensors',
      'AMF panel for Auto operation',
      '5 adjustable jacks for better stability'
    ],
    optionalFeatures: [
      'IOT Enabled and Industry 4.0 Complaint',
      'Customize LED as per requirement',
      'Auto operation for LEDs when the requirement',
      '7.5 KVA Only Diesel Tower',
      'Tower With Welding Machines Single Holder and Double Holder'
    ],
    specifications: {
      'LED Power': '200W x 4',
      'LED Life Span': '50,000 hours',
      'Engine': '15KVA Cummins with Stamford Alternator',
      'Mast Height': '7m',
      'Rotation': '340 degrees',
      'Towing Speed': '40 KM/hr'
    }
  },
  {
    id: '5',
    slug: 'diesel-towers',
    name: 'Diesel Towers',
    category: 'Light Towers',
    description: 'Offering 200 W x 4 LEDs with a life span of 50000 hours. Combined with CPCB-II compliant Diesel Genset with a high service interval of 500 hrs and 6-sections 7m Galvanised iron mast with 340-degree rotation.',
    image: 'https://i.ibb.co/3yQbt3jt/Dieseltowers.png',
    features: [
      'Efficient and high Performance of 200-Watt x 4 IP 66 LED light with longer service life',
      'Compacted and high performance 5-KVA Mahindra engine with Alternator',
      'CPCB-II Compliant canopy designed',
      '6 section 7 m or 9m MS Powder coat mast with 340 Degree rotation',
      'Longer hours of continuous operation without fuel fill',
      '16 Ampere Auxiliary Output port for welding and another machine',
      'Separate switches for all LEDs',
      'Leaf spring mounted chassis with towing hook and towing speed of 30 KM/hr',
      'Compact design and Robust Design',
      'Multi-display control panel with alarms and sensors',
      '5 adjustable jacks for better stability'
    ],
    optionalFeatures: [
      'Customize LED as per requirement',
      'IOT Enabled and Industry 4.0 Complaint'
    ],
    specifications: {
      'LED Power': '200W x 4',
      'LED Life Span': '50,000 hours',
      'Engine': '5KVA Mahindra with Alternator',
      'Mast Height': '7m or 9m',
      'Rotation': '340 degrees',
      'Towing Speed': '30 KM/hr'
    }
  }
];