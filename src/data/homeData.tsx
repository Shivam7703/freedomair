import {
  banner,
  banner2,
  banner3,
  banner4,
  cl1,
  cl2,
  cl3,
  cl4,
  air1, air10, air11, air12, air13, air14, air15, air16, air17, air18, air19, air2, air20, air3, air4, air5, air6, air7, air8, air9,
  logo2,
  drainage,
  civil,
  horiculture,
  bg,
  bhk,
  ser1,
  ser2,
  ser3,
  ser4,
  ser5,
  blog1,
  blog2,
  blog3,
  blog4,
} from "@/assets";
import { BsFillFuelPumpFill } from "react-icons/bs";

import {
  FaEye,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { GiPipes } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoIosLeaf, IoIosSettings } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { LiaRoadSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import { MdFastfood, MdFlightLand, MdOutlineAltRoute, MdOutlineSupportAgent } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { RiMailSendLine, RiSofaFill } from "react-icons/ri";
import { TbBuildingAirport, TbCircuitGround } from "react-icons/tb";

// homepage
export const navItemsArray = [
  // { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about-us" },

  {
    id: 3,
    label: "Services",
    href: "/services",
    subNav: [
      {
        id: 1,
        label: "Overfly & Landing Permit Assistance",
        href: "/services/overfly-and-landing-permit-assistance",
      },
      {
        id: 2,
        label: "Airport Slots",
        href: "/services/airport-slots",
      },
      {
        id: 3,
        label: "Ground Handling Arrangements",
        href: "/services/ground-handling-arrangements",
      },
      {
        id: 4,
        label: "Aviation Fuel Provision",
        href: "/services/aviation-fuel-provision",
      },
      {
        id: 5,
        label: "Crew Accommodation and Support",
        href: "/services/crew-accommodation-and-support",
      },
      {
        id: 6,
        label: "On-Site Gourmet Catering",
        href: "/services/on-site-gourmet-catering",
      },
      {
        id: 7,
        label: "Customized Aviation Solutions",
        href: "/services/customized-aviation-solutions",
      },
      // {
      //   id: 8,
      //   label: "Aircraft Managements",
      //   href: "/services/aircraft-managements",
      // },
    ],
  },

  { id: 4, label: "Info & Regulations", href: "/info-regulation" },
  { id: 5, label: "Airport Index", href: "/airport-index" },
  { id: 6, label: "Contact Us", href: "/contact-us" },

  {
    id: 7,
    label: "More",
    href: "#",
    subNav: [
      { id: 1, label: "Sustainability", href: "/sustainability" },
      { id: 2, label: "Privacy Policy", href: "/privacy-policy" },
      { id: 3, label: "Blogs", href: "/blogs" },
      { id: 4, label: "Gallery", href: "/gallery" },
    ],
  },
];

export const social = [
  {
    icon: <FaFacebookSquare />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/freedomairservices_pvt_ltd/",
  },
  {
    icon: <FaXTwitter />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
  },
];
// homeabout
export const Homeabout = {
  img2: banner,
  title: "About us",
  title1: "Leading Aviation Service ",
  title2: " Provider",
  para:
    "Established in 1997 and headquartered in New Delhi, Freedom Air Services Pvt. Ltd. is recognized as one of the leading aviation service providers in the region. With a strong nationwide footprint and trusted global network, we proudly represent India across the international aviation industry.",
  vision: [
    {
      heading: "Our Vision",
      icon: <FaEye />,
      text:
        "To be a globally trusted aviation partner, setting benchmarks in operational excellence, innovation, and reliability while strengthening India’s presence in the international aviation ecosystem.",
    },
    {
      heading: "Our Mission",
      icon: <GoGoal />,
      text:
        "To deliver seamless, secure, and efficient aviation solutions through expertise, integrity, and strategic global partnerships, ensuring uncompromised quality and client-focused service excellence.",
    },
  ],
  // count: [
  //   { value: "150+", label: "Projects Done" },
  //   { value: "150+", label: "Satisfied Clients" },
  //   { value: "30+", label: "Years Active" },
  // ],
};

export const Servicedata = {
  title: "Our Aviation Services",
  para:
    "We provide reliable, efficient, and comprehensive aviation support tailored to your needs, ensuring smooth operations, timely coordination, and professional assistance across domestic and international routes.",
  service: [
    {
      title: "Overfly and Landing Permit Assistance",
      para: "Quick approvals and smooth flight clearances across global airspace.",
      text: "We arrange required flight permits quickly and accurately, ensuring smooth approvals for both domestic and international operations without delays.",

      img: ser1,

      icon: <MdFlightLand />,

      description: "We provide complete flight support, including overfly and landing clearances globally. Our team manages documentation, coordinates with aviation authorities, and ensures timely approvals to avoid operational delays. With strong regulatory knowledge and global connections, we help operators maintain smooth, compliant, and efficient flight movements worldwide.",

      para2: "We simplify complex aviation processes, ensuring smooth approvals and seamless flight operations for everyone.",

      how_we_work: [
        {
          id: 1,
          heading: "Consultation & Requirement Analysis",
          para: "We begin by understanding operational plans, aircraft type, route, and specific permit requirements. This ensures a customized strategy to meet all regulatory and operational needs.",
        },
        {
          id: 2,
          heading: "Documentation Preparation",
          para: "Our team prepares all necessary documents, forms, and applications accurately. Proper documentation reduces delays, ensures compliance with aviation authorities, and speeds up the permit approval process.",
        },
        {
          id: 3,
          heading: "Coordination with Authorities",
          para: "We liaise directly with civil aviation authorities, airspace regulators, relevant agencies, and using our global network to submit applications, track progress, and resolve queries efficiently, ensuring timely approvals.",
        },
        {
          id: 4,
          heading: "Permit Delivery & Support",
          para: "Once permits are approved, we provide all clearances and guidance for smooth flight operations. Ongoing support ensures compliance and resolves any last-minute challenges.",
        },
      ],

      faqs: [
        {
          id: 1,
          que: "What is an overfly permit, and why is it needed?",
          ans: "An overfly permit allows a foreign registered aircraft to legally fly through another country's airspace. It ensures compliance with international aviation laws.",
        },
        {
          id: 2,
          que: "How long does it take to get landing and overfly permits?",
          ans: "Processing times vary by country. Some take a few hours, others several days. Early applications and proper documentation help ensure faster approvals, meeting concerned authorities directives.",
        },
        {
          id: 3,
          que: "Can I get permits without expert assistance?",
          ans: "Yes, but mistakes or missing documents can cause delays or refusals. Expert support ensures accuracy, faster processing, and compliance with aviation authorities.",
        },
        {
          id: 4,
          que: "Which countries require mandatory permits for overflight or landing?",
          ans: "Almost every country requires permits, especially outside operators' home country. Certain regions have stricter regulations, proper planning prevents fines and avoids operational risks.",
        },
        {
          id: 5,
          que: "Do you provide support for last-minute flights?",
          ans: "Our team navigates through regulatory requirements, and streamlines the process, ensuring efficient and timely approvals of urgent requests, maintaining full compliance and operational safety.",
        },
      ],
    },

    {
      title: "Airport Slots",
      para: "Secure, timely, and hassle-free airport slots for smooth flight operations worldwide.",
      text: " We secure airport slot approvals on time, coordinating closely with authorities to ensure smooth arrivals and departures as scheduled.",
      img: drainage,
      icon: <TbBuildingAirport />,
      description: "We provide end-to-end support towards securing requested airport slots at domestic and international airports. Our team coordinates with authorities concerned efficiently, and ensures compliance with local regulations. Ensures a tailored slot application strategy aligned with airport availability and regulations.",
      para2: "We simplify complex airport slot management processes, ensuring timely approvals and smooth operations for every flight.",
      how_we_work: [
        {
          id: 1,
          heading: "Flight Planning & Requirement Analysis",
          para: "We begin by understanding the flight schedule, aircraft type, and destination airport requirements.",
        },
        {
          id: 2,
          heading: "Slot Application Preparation",
          para: "Our team prepares and submits all necessary forms and applications accurately. Correct documentation and timing increase the chances of securing preferred slots efficiently.",
        },
        {
          id: 3,
          heading: "Coordination with Airport Authorities",
          para: "We liaise directly with airport slot coordinators, air traffic control, and relevant agencies to confirm slot availability, resolve conflicts, and ensure timely approvals for your operations.",
        },
        {
          id: 4,
          heading: "Slot Confirmation & Support",
          para: "Once slots are approved, we provide confirmation and guidance for smooth airport operations. Ongoing support ensures adjustments are made for schedule changes or last-minute requirements.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "How are airport slots allocated?",
          ans: "Slots are allocated based on airport capacity, flight schedules, and traffic management rules. Early planning and expert coordination improve the chances of preferred timings.",
        },
        {
          id: 2,
          que: "Can slots be changed after approval?",
          ans: "Yes, but changes are subject to airport authority approval and availability. Timely requests and proper communication minimize disruptions.",
        },
        {
          id: 3,
          que: "Are slots mandatory at all airports?",
          ans: "Yes, due to heavy traffic and parking constraints, prior slot approval is mandatory at all airports.",
        },
        {
          id: 4,
          que: "How do peak hours affect slot availability?",
          ans: "High-demand hours, especially at major hubs, reduce slot options. Advanced planning and alternative timings help secure approvals efficiently.",
        },
        {
          id: 5,
          que: "Does Freedom Air Services handle multi-leg or connecting flight?",
          ans: "Absolutely. We manage complex routes, ensuring all slots align for departures, arrivals, and transit airports, providing seamless operations across the entire flight plan.",
        },
      ],
    },

    {
      title: "Ground Handling Arrangements",
      para: "Professional ground support ensuring smooth operations every time.",
      text: "We coordinate complete ground handling support, including aircraft parking, baggage handling, catering, and ramp services efficiently.",
      img: ser2,
      icon: <TbCircuitGround />,
      description: "Coordinating with authorities concerned at each airport, we assist with comprehensive ground handling solutions, including airport fees, baggage handling, ramp services, passenger assistance, catering, and aircraft maintenance coordination. Our expert team ensures all operations are safe, efficient, and compliant with international aviation standards.",
      para2: "We manage all aspects of ground operations, ensuring smooth, timely, and reliable support for every aircraft and passenger.",
      how_we_work: [
        {
          id: 1,
          heading: "Flight & Ground Requirement Analysis",
          para: "Based on the flight schedule, passenger needs, cargo requirements, and airport specifics. This allows us to plan a comprehensive ground handling strategy tailored to your operations.",
        },
        {
          id: 2,
          heading: "Coordination with Airport Authorities",
          para: "Our team liaises with airport staff, ground crew, and local authorities to arrange all fees, clearances, and permissions for smooth operations.",
        },
        {
          id: 3,
          heading: "On-Ground Handling Services",
          para: "We supervise baggage handling, ramp services, fuelling, passenger boarding assistance, and aircraft maintenance support, ensuring safety, timeliness, and operational efficiency.",
        },
        {
          id: 4,
          heading: "Continuous Monitoring & Support",
          para: "Throughout the turnaround, we monitor operations, manage challenges, and provide immediate solutions to ensure flawless service and compliance with aviation standards.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "What is included in ground handling services?",
          ans: "It covers passenger assistance, baggage management, ramp services, fuelling coordination, airport fees, catering coordination and maintenance support to ensure smooth flight operations.",
        },
        {
          id: 2,
          que: "Are these services mandatory at every airport?",
          ans: "Ground handling is mandatory, and always suggested for safety, efficiency, and compliances.",
        },
        {
          id: 3,
          que: "Can ground handling support cargo flight too?",
          ans: "Yes. Our services extend to cargo operations as well, including loading/unloading, storage coordination, and customs documentation support.",
        },
        {
          id: 4,
          que: "How does Freedom Air Services ensures quality?",
          ans: "Freedom Air represent the interest of operator, liaise with all concerned agencies, ensuring that all contracted services are maintained to achieve on time movements, supervise every step, and make sure all documentation are as per operators' specific requirements, also in accordance to the ICAO/IATA recommended practices.",
        },
        {
          id: 5,
          que: "Can last-minute ground handling be arranged?",
          ans: "Absolutely. Our team specializes in urgent and ad hoc operations, ensuring smooth support even for emergency, medical evacuation and diverted flights.",
        },
      ],
    },

    {
      title: "Aviation Fuel Provision",
      para: "Reliable fuel supply solutions for seamless flight operations across India.",
      text: " We organize reliable fuel supply at competitive rates, ensuring timely refueling services for uninterrupted and safe flight operations.",
      img: ser3,
      icon: <BsFillFuelPumpFill />,
      description: "Freedom Air Services assists with aviation fuel arrangements, ensuring an uninterrupted fuel supply at all Indian airports. Leveraging strategic partnerships, we provide competitive pricing while maintaining safety, quality, and operational efficiency for every client.",
      para2: "We simplify aviation fuel management, ensuring timely availability, cost-effectiveness, and smooth operations for all aircraft.",
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Analysis & Planning",
          para: "We start by understanding your fuel needs, aircraft type, route, and operational schedules. This helps us plan precise fuel arrangements tailored to your operations.",
        },
        {
          id: 2,
          heading: "Supplier Coordination & Pricing",
          para: "We coordinate with certified fuel suppliers to secure competitive rates and ensure quality compliance, minimizing operational costs without compromising safety.",
        },
        {
          id: 3,
          heading: "Logistics & Delivery Management",
          para: "Our team manages the logistics of fuel delivery, scheduling refuelling at the right time and location, avoiding delays and ensuring smooth airport operations.",
        },
        {
          id: 4,
          heading: "Monitoring & Ongoing Support",
          para: "We continuously monitor fuel supply, usage, and regulatory compliance. Our team addresses any last-minute changes or urgent requirements to maintain seamless flight operations.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can Freedom Air manage fuel for multiple airports simultaneously?",
          ans: "Yes. We coordinate with suppliers across all major airports to ensure timely fuel delivery for multi-location operations.",
        },
        {
          id: 2,
          que: "Are the fuel prices competitive?",
          ans: "Absolutely. Our partnerships and bulk arrangements allow us to offer clients cost-effective pricing without compromising quality.",
        },
        {
          id: 3,
          que: "Does the services include quality checks?",
          ans: "Yes. We ensure aviation fuel meets strict quality standards and regulatory requirements before delivery.",
        },
        {
          id: 4,
          que: "How quickly can emergency fuel be arranged?",
          ans: "Our team can arrange fuel deliveries in urgent such situation.",
        },
        {
          id: 5,
          que: "Is this service available for all type of aircrafts?",
          ans: "Yes. We cater to commercial, charter, and private aircraft, ensuring fuel availability tailored to different aircraft types and capacities. However prior arrangements needs to be made or check availability for Avgas 100 LL requirement, because of not available at most of airport locations.",
        },
      ],
    },

    {
      title: "Crew Accommodation and Support",
      para: "Comfortable stays and seamless support for your crew at every airport.",
      text: " We arrange comfortable crew accommodation, transportation, and local assistance to ensure convenience, safety, and stress-free layovers.",
      img: horiculture,
      icon: <MdOutlineSupportAgent />,
      description: "We prioritize the comfort and convenience of flight crews. Freedom Air arranges quality hotels, airport transfers, and any additional support needed to ensure a smooth, stress-free stay during layovers.",
      para2: "We simplify crew logistics, providing safe accommodation, timely transport, and personalized support to enhance crew efficiency and satisfaction.",
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Assessment & Planning",
          para: "We start by understanding crew schedules, flight duration, and special requirements. This allows us to plan hotel bookings, transfers, and other facilities tailored to each crew.",
        },
        {
          id: 2,
          heading: "Hotel & Transport Arrangement",
          para: "We select and book hotels that meet safety, comfort, and convenience standards. Transport is arranged to ensure timely pick-ups and drop-offs to / from airports.",
        },
        {
          id: 3,
          heading: "Additional Crew Support",
          para: "Our team addresses any special needs such as dietary preferences, medical assistance, or communication support, ensuring crews feel cared for during their stay.",
        },
        {
          id: 4,
          heading: "Monitoring & Feedback",
          para: "We maintain contact with crews during their stay to resolve any issues promptly and ensure continuous satisfaction and smooth operations.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Do you provide hotel bookings for all crew types?",
          ans: "Yes. We arrange accommodations for pilots, cabin crew, and ground staff, prioritizing comfort, convenience, and proximity to airports, and accordance to the required category and budget.",
        },
        {
          id: 2,
          que: "Are transport services included with hotel arrangements?",
          ans: "Crew transport basically arranged separately.",
        },
        {
          id: 3,
          que: "Can special requirements be accommodated?",
          ans: "Yes. We handle dietary restrictions, medical needs, and other personalized requests to ensure crew comfort.",
        },
        {
          id: 4,
          que: "Do you provide support for international layover?",
          ans: "Yes, our service extends across India and international destinations where crew may require local assistance.",
        },
        {
          id: 5,
          que: "Is this service available for short-notice flights?",
          ans: "Yes. We specialize in urgent crew arrangements, ensuring hotels, transport, and support are arranged quickly for unexpected schedules etc.",
        },
      ],
    },

    {
      title: "On-site Gourmet Catering",
      para: "Delicious, customized catering solutions for airline crews and passengers.",
      text: " Freedom Air Services assists airlines in arranging on-site catering tailored to specific dietary preferences and operational requirements. We ensure high-quality, safe, and timely meals to meet crew and passenger expectations.",
      img: ser4,
      icon: <MdFastfood />,
      description: "Freedom Air Services assists airlines in arranging on-site catering tailored to specific dietary preferences and operational requirements. We ensure high-quality, safe, and timely meals to meet crew and passenger expectations.",
      para2: "We simplify airline catering, delivering customized meal solutions that are fresh, timely, and aligned with dietary needs for every flight operation.",
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Assessment & Menu Planning",
          para: "We start by understanding crew or passenger dietary needs, flight schedules, and cuisine preferences. This allows us to design menus that meet airline requirements efficiently.",
        },
        {
          id: 2,
          heading: "Vendor Coordination & Quality Control",
          para: "We liaise with certified catering vendors to prepare meals according to airline standards. Each meal undergoes quality checks to ensure freshness, hygiene, and compliance with food safety regulations.",
        },
        {
          id: 3,
          heading: "On-site Preparation & Delivery",
          para: "Our team ensures meals are prepared on-site when required and delivered on time at the airport or aircraft, maintaining optimal temperature and presentation.",
        },
        {
          id: 4,
          heading: "Continuous Support & Feedback",
          para: "We monitor catering services and gather feedback from crew and passengers to make adjustments for future flights, ensuring consistent satisfaction and high service standards.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Can you handle special dietary requirements?",
          ans: "Yes. We accommodate vegetarian, vegan, gluten-free, halal, kosher, and other specific dietary needs for all flights.",
        },
        {
          id: 2,
          que: "Is catering available for international and domestic flights?",
          ans: "Absolutely. Our service is flexible and can manage meals for flights within India or international operations.",
        },
        {
          id: 3,
          que: "How is quality and hygiene ensured?",
          ans: "We work only with certified vendors and follow strict food safety protocols to maintain high-quality, fresh meals.",
        },
        {
          id: 4,
          que: "Can last-minute catering requests be handled?",
          ans: "Yes, we always try to handle urgent catering requests, however the certified catering vendors need minimum 12 hours prior order, ensuring meals are prepared and delivered without compromising quality.",
        },
        {
          id: 5,
          que: "Do you cater to both crew and passengers?",
          ans: "Yes. We provide customized meals for airline crews and passengers, ensuring satisfaction for all onboard.",
        },
      ],
    },

    {
      title: "Customized Aviation Solutions",
      para: "Tailored services designed to meet every airline's unique operational needs.",
      text: "At Freedom Air Services, we provide personalized solutions for airlines based on their specific requirements. From ad hoc charter flights to long-term flight series, we offer flexible support, including credit services for regular clients, ensuring smooth and efficient operations.",
      img: ser5,
      icon: <IoIosSettings />,
      description: "At Freedom Air Services, we provide personalized solutions for airlines based on their specific requirements. From ad hoc charter flights to long-term flight series, we offer flexible support, including credit services for regular clients, ensuring smooth and efficient operations.",
      para2: "We analyze each airline's needs and provide tailored solutions that optimize operations, reduce costs, and ensure seamless execution across all flight services.",
      how_we_work: [
        {
          id: 1,
          heading: "Requirement Analysis & Planning",
          para: "We assess the airline's operational needs, flight schedules, and service preferences to design solutions that are customized for each specific route or flight series.",
        },
        {
          id: 2,
          heading: "Service Customization & Strategy",
          para: "Based on analysis, we tailor our services—including permits, ground support, fuelling and catering - to meet exact requirements, ensuring efficiency and cost-effectiveness.",
        },
        {
          id: 3,
          heading: "Implementation & Coordination",
          para: "Our team executes the customized plan, coordinating with authorities, vendors, and airport teams to deliver smooth operations and meet all operational deadlines.",
        },
        {
          id: 4,
          heading: "Continuous Support & Optimization",
          para: "We monitor performance, gather feedback, and provide ongoing adjustments to enhance operational efficiency, improve service delivery, and maintain long-term client satisfaction.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "What makes these solutions customized?",
          ans: "We tailor every service - permits, ground support, fuelling and catering - to match the airline's specific operational and scheduling requirements.",
        },
        {
          id: 2,
          que: "Can regular clients get credit services?",
          ans: "Yes. Frequent clients can avail of credit facilities, ensuring smooth operations and financial flexibility for ongoing flights.",
        },
        {
          id: 3,
          que: "Are these services suitable for ad hoc flights?",
          ans: "Absolutely. All given services applicable to ad-hoc flights too.",
        },
        {
          id: 4,
          que: "Can long-term flight series be managed?",
          ans: "Yes. We provide comprehensive supports services and execution for regular flights too, ensuring consistent service quality across all operations.",
        },
        {
          id: 5,
          que: "How do you ensure operational efficiency?",
          ans: "Through detailed planning, continuous monitoring, and proactive coordination with vendors, authorities, and airport teams, we optimize every aspect of flight operations.",
        },
      ],
    },

    // {
    //   title: "Aircraft Managements",
    //   para: "Comprehensive solutions to ensure safe, efficient, and seamless aircraft operations.",
    //   text: "Freedom Air Services provides complete aircraft management solutions for private and commercial operators. From flight planning and crew management to maintenance oversight and regulatory compliance, we ensure your aircraft operates efficiently, safely, and on schedule.",
    //   img: bhk,
    //   icon: <IoAirplane />,
    //   description: "Freedom Air Services provides complete aircraft management solutions for private and commercial operators. From flight planning and crew management to maintenance oversight and regulatory compliance, we ensure aircraft operates efficiently, safely, and on schedule.",
    //   para2: "We handle all aspects of aircraft operations, allowing operators to focus on their missions while we manage logistics, compliance, and operational efficiency.",
    //   how_we_work: [
    //     {
    //       id: 1,
    //       heading: "Flight Planning & Scheduling",
    //       para: "We plan according to customers' specific requirement, or develop detailed flight schedules, considering routes, airport slots, fuel requirements, and regulatory approvals to optimize aircraft utilization and efficiency.",
    //     },
    //     {
    //       id: 2,
    //       heading: "Crew Management & Coordination",
    //       para: "Our team manages pilot and crew assignments, training requirements, rest schedules, and travel arrangements to ensure seamless operations and adherence to aviation regulations.",
    //     },
    //     {
    //       id: 3,
    //       heading: "Maintenance & Compliance Oversight",
    //       para: "We contract for maintenance schedules, also to coordinate inspections, and to ensure regulatory compliance with aviation authorities to maintain aircraft safety and operational readiness.",
    //     },
    //     {
    //       id: 4,
    //       heading: "Operational Support & Monitoring",
    //       para: "We provide real-time operational support, track flights, manage any delays or contingencies, and ensure smooth coordination between crew, ground staff, and airport authorities.",
    //     },
    //   ],
    //   faqs: [
    //     {
    //       id: 1,
    //       que: "Does aircraft management cover both private and commercial planes?",
    //       ans: "We can provide tailored management solutions for all aircraft types, ensuring safety, compliance, and operational efficiency.",
    //     },
    //     {
    //       id: 2,
    //       que: "Can you handle crew assignments and training?",
    //       ans: "We can manage pilots, cabin crew, and ground staff, including training, scheduling, and compliance with aviation regulations.",
    //     },
    //     {
    //       id: 3,
    //       que: "Are maintenance and inspections included in the service?",
    //       ans: "We coordinate for maintenance, safety checks, and regulatory inspections to keep aircraft fully operational and airworthy.",
    //     },
    //     {
    //       id: 4,
    //       que: "Do you provide real-time flight monitoring?",
    //       ans: "Our team tracks flights, monitors operations, and provides operational support, slot issues, or any any such requirements.",
    //     },
    //     {
    //       id: 5,
    //       que: "Can operators outsource the entire management of their aircraft?",
    //       ans: "We can offer end-to-end management, from scheduling and fuel arrangements to crew and regulatory compliance, providing peace of mind and operational efficiency.",
    //     },
    //   ],
    // },
  ],
};

// section3
export const crafting = {
  title2: "Leading Aviation with Commitment and Precision",

  slides: [
    {
      id: 1,
      heading: "Precision-Driven Operations",
      img: banner,
      text:
        "Delivering accurate solutions for every flight operation",
    },
    {
      id: 2,
      heading: "Client-Centered Solutions",
      img: banner2,
      text:
        "Services designed around unique aviation client requirements",
    },
    {
      id: 3,
      heading: "Seamless Coordination",
      img: banner4,
      text:
        "Managing every detail with smooth professional coordination",
    },
    {
      id: 4,
      heading: "Industry Expertise",
      img: banner3,
      text:
        "Extensive aviation knowledge backed by proven experience",
    },
  ],
};

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",

  testimonials: [
    {
      id: 1,
      title: "Shivam Goyal",
      text:
        "Freedom Air Services handled our overflight and landing permits very efficiently. The approvals were arranged on time, and the entire coordination was smooth. Their team kept us updated throughout, which made our operation completely stress-free.",
      img: cl1,
    },
    {
      id: 2,
      title: "R.P. Singh",
      text:
        "We approached Freedom Air Services for urgent airport slot approvals, and they delivered beyond expectations. Their coordination with airport authorities was professional and quick, helping us maintain our schedule without any operational delays.",
      img: cl2,
    },
    {
      id: 3,
      title: "Dinesh Bansal",
      text:
        "Freedom Air Services organized excellent ground handling support for our aircraft. From parking arrangements to crew assistance, everything was managed properly. Their attention to detail ensured a smooth turnaround and hassle-free experience.",
      img: cl3,
    },
    {
      id: 4,
      title: "Vivek Kunde",
      text:
        "Fuel supply and crew accommodation were perfectly arranged by Freedom Air Services. The pricing was competitive, and hotel coordination was comfortable for our crew. Their 24/7 support team was always available whenever we required assistance.",
      img: cl4,
    },
  ],
};

export const blogData = {
  title1: "Blogs & News",
  title2: "Stay Updated With our",
  title3: " Latest News",
  blogs: [
    {
      id: 1,
      title: "How to Choose the Right Aviation Ground Support in India?",
      text: "In aviation, what happens on the ground is just as important as what happens in the air. Efficient aviation ground support ensures smooth turnarounds, passenger comfort, aircraft safety, regulatory compliance, and operational profitability. In a dynamic and fast-growing aviation market like India, choosing the right aviation ground support partner is not just a vendor decision—it is a strategic business move.",
      text2: `<div class="blog-content">

  <h1 style="color: #EB5431;">How to Choose the Right Aviation Ground Support in India?</h1>

  <p>In aviation, what happens on the ground is just as important as what happens in the air. Efficient aviation ground support ensures smooth turnarounds, passenger comfort, aircraft safety, regulatory compliance, and operational profitability. In a dynamic and fast-growing aviation market like India, choosing the right aviation ground support partner is not just a vendor decision—it is a strategic business move.</p>

  <p>With increasing airport traffic, stricter regulatory oversight, and rising passenger expectations, airlines, charter operators, cargo companies, and private jet owners must work with a ground handling partner that combines reliability, speed, compliance, and professionalism.</p>

  <p>This guide breaks down how to choose the right aviation ground support in India, what factors truly matter, and how the right partner can protect both your aircraft and your reputation.</p>

  <h2 style="color: #EB5431">Why Ground Support Matters</h2>

  <p>Aviation ground support includes everything that happens from the moment an aircraft lands until it takes off again. This includes:</p>

  <ul>
    <li>Aircraft marshaling and parking</li>
    <li>Passenger handling</li>
    <li>Baggage coordination</li>
    <li>Refueling coordination</li>
    <li>Ramp service</li>
    <li>Cargo handling</li>
    <li>Crew assistance</li>
    <li>Documentation and permit</li>
    <li>Security coordination</li>
    <li>Aircraft cleaning and technical support</li>
  </ul>

  <p>Even a small delay in any of these areas can affect slot timings, increase operational costs, and impact passenger satisfaction.</p>
  
  <p>In India's busy aviation hubs like Delhi, Mumbai, Hyderabad, Bengaluru, and Chennai, turnaround efficiency is critical. That is why selecting the right aviation ground support provider is not optional—it is essential.</p>

  <h2 style="color: #EB5431">Understand Your Operational Needs</h2>

  <p>Before choosing a partner, clearly define your requirements.</p>
  
  <p>Ask yourself:</p>
  
  <ul>
    <li>Are you a commercial airline, charter operator, cargo operator, or private jet service?</li>
    <li>Do you require pan-India coverage or only specific airports?</li>
    <li>Do you operate domestic, international, or both?</li>
    <li>How frequent are your flights?</li>
    <li>Do you require VIP handling services?</li>
    <li>Do you need technical coordination support?</li>
  </ul>

  <p>A cargo operator's needs are very different from those of a luxury charter service. Similarly, a private jet operator will prioritize discretion and speed, while a commercial airline may prioritize cost-efficiency and scalability.</p>
  
  <p>Clarity at this stage prevents future operational mismatches.</p>

  <h2 style="color: #EB5431">Check Airport Coverage</h2>

  <p>India has more than 140 operational airports, and coverage varies significantly among ground support companies.</p>
  
  <p>When selecting aviation ground support in India, verify:</p>
  
  <ul>
    <li>Which airports are they licensed to operate in</li>
    <li>Whether they have in-house teams or subcontractors</li>
    <li>Their presence at Tier-2 and Tier-3 airports</li>
    <li>Their experience in high-traffic metro airports</li>
  </ul>

  <p>Consistency across airports is important. If you operate multi-city routes, working with a partner that offers standardized service levels across locations reduces coordination stress.</p>

  <h2 style="color: #EB5431">Regulatory Compliance Is Non-Negotiable</h2>

  <p>Indian aviation is governed by the Directorate General of Civil Aviation (DGCA) and other airport authorities. Non-compliance can result in fines, grounding, or serious operational disruption.</p>
  
  <p>Ensure your aviation ground support partner:</p>
  
  <ul>
    <li>Holds valid licenses and approvals</li>
    <li>Complies with DGCA regulations</li>
    <li>Follows airport authority SOPs</li>
    <li>Maintains safety certifications</li>
    <li>Conducts regular staff training</li>
  </ul>

  <p>A compliant partner protects you from legal exposure and operational risk.</p>

  <h2 style="color: #EB5431">Safety First, Always</h2>

  <p>Ground handling errors can damage aircraft, injure personnel, and delay flights. When evaluating a ground support partner, review:</p>
  
  <ul>
    <li>Their safety record</li>
    <li>Incident reporting systems</li>
    <li>Insurance coverage</li>
    <li>Equipment maintenance logs</li>
    <li>Staff training programs</li>
  </ul>

  <p>A professional aviation ground support company invests heavily in safety culture. They conduct frequent audits, refresher training, and equipment checks.</p>
  
  <p>In aviation, shortcuts are expensive. Safety must never be compromised for cost.</p>

  <h2 style="color: #EB5431">Equipment Quality and Readiness</h2>

  <p>Modern aircraft require specialized ground support equipment (GSE). This includes:</p>
  
  <ul>
    <li>Ground power units (GPU)</li>
    <li>Air start units</li>
    <li>Tow tractors</li>
    <li>Belt loaders</li>
    <li>Passenger stairs</li>
    <li>De-icing equipment (in specific regions)</li>
    <li>Cargo loaders</li>
  </ul>

  <p>Ask the provider:</p>
  
  <ul>
    <li>Is the equipment owned or leased?</li>
    <li>How often is it maintained?</li>
    <li>Is backup equipment available?</li>
    <li>Is the equipment compatible with your aircraft type?</li>
  </ul>

  <p>Operational disruptions often occur due to poor equipment maintenance. A reliable partner ensures equipment readiness at all times.</p>

  <h2 style="color: #EB5431">Staff Expertise and Professionalism</h2>

  <p>Ground staff represent your brand on the runway and inside the terminal.</p>
  
  <p>Evaluate:</p>
  
  <ul>
    <li>Training standards</li>
    <li>Language proficiency</li>
    <li>Grooming and professionalism</li>
    <li>Experience with international carriers</li>
    <li>Experience with business jets and VIP flights</li>
  </ul>

  <p>For charter and VIP operators, discretion and service etiquette are extremely important.</p>
  
  <p>Professional staff reduce miscommunication and enhance passenger experience.</p>

  <h2 style="color: #EB5431">Speed and Turnaround Efficiency</h2>

  <p>Turnaround time directly impacts profitability.</p>
  
  <p>Delayed departures increase:</p>
  
  <ul>
    <li>Airport parking charges</li>
    <li>Fuel costs</li>
    <li>Crew overtime</li>
    <li>Slot penalties</li>
    <li>Passenger dissatisfaction</li>
  </ul>

  <p>Ask potential partners about:</p>
  
  <ul>
    <li>Average turnaround time</li>
    <li>Performance metrics</li>
    <li>Coordination systems</li>
    <li>Crisis response protocol</li>
  </ul>

  <p>Data-driven companies track their performance and continuously improve turnaround efficiency.</p>

  <h2 style="color: #EB5431">Transparency in Pricing</h2>

  <p>Cost matters—but clarity matters more.</p>
  
  <p>When reviewing proposals, ensure pricing includes:</p>
  
  <ul>
    <li>Ramp services</li>
    <li>Passenger handling</li>
    <li>Equipment usage</li>
    <li>Night charges</li>
    <li>Overtime charges</li>
    <li>Special service fees</li>
    <li>Airport coordination fees</li>
  </ul>

  <p>Avoid partners who provide vague estimates. Hidden costs often appear later.</p>
  
  <p>A transparent aviation ground support partner provides clear cost breakdowns upfront.</p>

  <h2 style="color: #EB5431">Technology and Coordination Systems</h2>

  <p>Modern aviation operations rely on digital coordination.</p>
  
  <p>Look for partners that use:</p>
  
  <ul>
    <li>Real-time flight tracking</li>
    <li>Digital documentation systems</li>
    <li>Automated communication tools</li>
    <li>Flight planning coordination support</li>
    <li>Online reporting dashboards</li>
  </ul>

  <p>Technology improves accuracy and reduces communication errors.</p>

  <h2 style="color: #EB5431">Reputation and Industry Presence</h2>

  <p>Experience matters.</p>
  
  <p>Research:</p>
  
  <ul>
    <li>Client testimonials</li>
    <li>Industry partnerships</li>
    <li>Years in operation</li>
    <li>Repeat clients</li>
    <li>International airline experience</li>
  </ul>

  <p>A well-established aviation ground support company in India typically has a stable operational network and crisis management experience.</p>

  <h2 style="color: #EB5431">Emergency Handling Capability</h2>

  <p>Weather disruptions, technical delays, airspace congestion, and unexpected diversions are common in aviation.</p>
  
  <p>Your ground partner should be capable of:</p>
  
  <ul>
    <li>Quick diversion handling</li>
    <li>Emergency crew coordination</li>
    <li>Rapid equipment mobilization</li>
    <li>VIP last-minute adjustments</li>
    <li>Handling AOG (Aircraft on Ground) situations</li>
  </ul>

  <p>Their response speed during crises often defines their true capability.</p>

  <h2 style="color: #EB5431">Communication and Accountability</h2>

  <p>One of the most overlooked factors in choosing aviation ground support in India is communication clarity.</p>
  
  <p>Ensure:</p>
  
  <ul>
    <li>A single point of contact</li>
    <li>24/7 operational support</li>
    <li>Escalation matrix</li>
    <li>Real-time updates</li>
    <li>Clear reporting structure</li>
  </ul>

  <p>Poor communication causes operational chaos. Clear accountability prevents confusion.</p>

  <h2 style="color: #EB5431">Long-Term Partnership Value</h2>

  <p>Instead of selecting based purely on cost, evaluate long-term strategic value:</p>
  
  <ul>
    <li>Can they scale with your growth?</li>
    <li>Can they support fleet expansion?</li>
    <li>Can they handle new airport routes?</li>
    <li>Do they provide advisory support?</li>
  </ul>

  <p>A good aviation ground support partner acts as an operational extension of your airline or aviation business.</p>

  <h2 style="color: #EB5431">How Does Freedom Air Help You?</h2>

  <p>Freedom Air Services stands out as a trusted aviation ground support partner in India by combining operational expertise, regulatory compliance, and personalized service.</p>
  
  <p>Here's how Freedom Air supports aviation operators:</p>
  
  <h3 style="color: #EB5431">1. Pan-India Network</h3>
  <p>Freedom Air offers coordinated ground handling solutions across major and emerging airports in India, ensuring consistent service quality.</p>

  <h3 style="color: #EB5431">2. Compliance-Driven Operations</h3>
  <p>All services are aligned with DGCA regulations and airport authority standards, reducing compliance risk for operators.</p>

  <h3 style="color: #EB5431">3. Experienced Team</h3>
  <p>The team consists of trained professionals with hands-on experience in commercial aviation, private jets, cargo handling, and VIP movements.</p>

  <h3 style="color: #EB5431">4. Fast Turnaround Focus</h3>
  <p>Freedom Air prioritizes operational speed without compromising safety, helping operators minimize ground time.</p>

  <h3 style="color: #EB5431">5. Transparent Costing</h3>
  <p>Clear pricing structures eliminate hidden charges and support predictable budgeting.</p>

  <h3 style="color: #EB5431">6. 24/7 Support</h3>
  <p>Round-the-clock operational assistance ensures readiness for diversions, emergency landings, and last-minute schedule changes.</p>

  <h3 style="color: #EB5431">7. Customized Solutions</h3>
  <p>Whether it's a charter flight, business jet, cargo aircraft, or scheduled commercial operation, Freedom Air tailors services based on operational needs.</p>

  <p>Freedom Air Services focuses not only on execution but on partnership—ensuring aircraft safety, passenger comfort, and operational reliability.</p>

  <h2 style="color: #EB5431">Conclusion</h2>

  <p>Choosing the right aviation ground support in India requires careful evaluation of safety standards, compliance, infrastructure, experience, pricing transparency, and operational efficiency.</p>
  
  <p>India's aviation market is growing rapidly, and operational complexity is increasing. A strong ground handling partner ensures your aircraft operates smoothly, passengers remain satisfied, and regulatory requirements are consistently met.</p>
  
  <p>The right partner does more than handle aircraft—they protect your brand, safeguard your assets, and support your growth. When evaluating aviation ground support providers, think beyond cost. Think reliability. Think safety. Think long-term operational stability. Because in aviation, excellence on the ground determines success in the sky.</p>

</div>
`,
      date: "13 March 2026",
      img: blog1,
      author: "Admin",
    },
    {
      id: 3,
      title: "How Rising Fuel Prices Are Changing Flight Planning Costs in 2026",
      text: "Fuel has always been one of the largest operational expenses in aviation. In 2026, however, rising fuel prices are not just affecting airline profitability—they are reshaping how flights are planned, routed, scheduled, and priced. From commercial airlines to private jet operators, every aviation stakeholder is adjusting strategies to manage increasing fuel costs while maintaining efficiency and safety.",
      text2: `<div class="blog-content">

  <h1 style="color: #EB5431;">How Rising Fuel Prices Are Changing Flight Planning Costs in 2026</h1>

  <p>Fuel has always been one of the largest operational expenses in aviation. In 2026, however, rising fuel prices are not just affecting airline profitability—they are reshaping how flights are planned, routed, scheduled, and priced.</p>
  
  <p>From commercial airlines to private jet operators, every aviation stakeholder is adjusting strategies to manage increasing fuel costs while maintaining efficiency and safety.</p>
  
  <p>Let's explore how fuel price volatility is transforming flight planning in 2026 and what it means for operators, charter companies, and aviation service providers.</p>

  <h2 style="color: #EB5431">Why Are Aviation Fuel Prices Rising in 2026?</h2>
  
  <p>Several global factors are influencing jet fuel prices:</p>
  
  <ul>
    <li>Ongoing geopolitical tensions affecting oil supply chains</li>
    <li>Fluctuating crude oil production levels</li>
    <li>Carbon taxation policies in certain regions</li>
    <li>Growing global travel demand</li>
    <li>Increased transition toward Sustainable Aviation Fuel (SAF)</li>
  </ul>

  <p>Jet fuel prices are directly linked to crude oil markets. Even small changes in oil production or international trade regulations can significantly impact aviation fuel costs.</p>
  
  <p>Additionally, environmental policies and carbon emission regulations are contributing to higher operational expenses for airlines and operators.</p>

  <h2 style="color: #EB5431">Fuel: The Largest Cost Component in Flight Operations</h2>
  
  <p>In many cases, fuel accounts for 25% to 35% of total flight operating costs. For long-haul international routes, this percentage can be even higher.</p>
  
  <p>When fuel prices rise:</p>
  
  <ul>
    <li>Ticket prices increase</li>
    <li>Charter costs go up</li>
    <li>Operating margins shrink</li>
    <li>Route planning becomes more complex</li>
  </ul>

  <p>In 2026, operators can no longer treat fuel as a fixed cost. It has become a dynamic variable that directly influences flight strategy.</p>

  <h2 style="color: #EB5431">How Flight Planning Is Changing in Response</h2>

  <h3 style="color: #EB5431">1. More Efficient Route Selection</h3>
  <p>Airlines are now prioritizing fuel-efficient routing more than ever.</p>
  <p>Instead of choosing the shortest distance, planners often evaluate:</p>
  <ul>
    <li>Wind patterns</li>
    <li>Air traffic congestion</li>
    <li>Overflight fees</li>
    <li>Altitude optimization</li>
    <li>Weather conditions</li>
  </ul>
  <p>A slightly longer route with favorable winds can consume less fuel than a shorter route facing strong headwinds.</p>
  <p>Advanced flight planning software now calculates real-time fuel burn scenarios before departure.</p>

  <h3 style="color: #EB5431">2. Strategic Fuel Uplift Planning</h3>
  <p>Operators are carefully selecting where to refuel.</p>
  <p>Fuel prices vary significantly from one airport to another. In 2026, operators compare:</p>
  <ul>
    <li>Regional fuel price differences</li>
    <li>Fuel taxes</li>
    <li>Availability of bulk discounts</li>
    <li>Contracted supplier rates</li>
  </ul>
  <p>This strategy, often called "tankering," involves uplifting extra fuel at cheaper airports to reduce refueling needs at expensive locations—while still maintaining safety limits.</p>
  <p>However, carrying extra fuel increases aircraft weight, which also increases burn. So planning must be precise.</p>

  <h3 style="color: #EB5431">3. Increased Focus on Weight Management</h3>
  <p>Every kilogram onboard affects fuel consumption.</p>
  <p>Flight planners now closely monitor:</p>
  <ul>
    <li>Passenger load distribution</li>
    <li>Cargo weight</li>
    <li>Catering quantities</li>
    <li>Water storage</li>
    <li>Additional equipment</li>
  </ul>
  <p>Even small reductions in weight can create measurable fuel savings over long distances.</p>
  <p>Private operators are also becoming more conscious about optimizing baggage and payload limits.</p>

  <h3 style="color: #EB5431">4. Growth in Sustainable Aviation Fuel (SAF)</h3>
  <p>Sustainable Aviation Fuel is gaining attention in 2026 as governments push for lower carbon emissions.</p>
  <p>However, SAF often costs more than conventional jet fuel.</p>
  <p>Airlines must now balance:</p>
  <ul>
    <li>Environmental compliance</li>
    <li>Corporate sustainability goals</li>
    <li>Increased fuel expenses</li>
  </ul>
  <p>Some regions offer incentives or subsidies for SAF usage, while others impose carbon penalties for traditional fuel.</p>
  <p>Flight planning teams now factor sustainability policies into cost calculations.</p>

  <h3 style="color: #EB5431">5. Shift Toward Secondary Airports</h3>
  <p>Major international hubs often have higher fuel prices and additional surcharges.</p>
  <p>To reduce costs, some operators are exploring:</p>
  <ul>
    <li>Secondary airports</li>
    <li>Regional hubs</li>
    <li>Less congested alternatives</li>
  </ul>
  <p>This strategy not only reduces fuel uplift cost but may also minimize airport slot delays, further optimizing overall operations.</p>

  <h3 style="color: #EB5431">6. Dynamic Pricing in Charter Aviation</h3>
  <p>Private aviation has felt the impact strongly in 2026.</p>
  <p>Charter quotes now frequently include:</p>
  <ul>
    <li>Fuel surcharge adjustments</li>
    <li>Variable pricing clauses</li>
    <li>Shorter quote validity periods</li>
  </ul>
  <p>Operators cannot lock in prices far in advance due to fuel volatility. This has changed how charter agreements are structured.</p>
  <p>Clients are becoming more aware of fuel components in their pricing breakdowns.</p>

  <h2 style="color: #EB5431">Technology Is Playing a Bigger Role</h2>
  
  <p>Modern flight planning tools now use:</p>
  
  <ul>
    <li>Predictive analytics</li>
    <li>Real-time fuel price monitoring</li>
    <li>AI-driven route simulations</li>
    <li>Weather-based optimization algorithms</li>
  </ul>

  <p>These systems allow dispatch teams to model multiple scenarios before confirming a flight plan.</p>
  
  <p>For example, a software system can compare:</p>
  
  <ul>
    <li>Route A: Shorter distance, higher headwinds</li>
    <li>Route B: Longer distance, favorable tailwinds</li>
  </ul>

  <p>The system calculates total projected fuel burn, cost difference, and time impact within seconds. This level of precision is becoming essential in 2026.</p>

  <h2 style="color: #EB5431">Impact on International Operations</h2>
  
  <p>Rising fuel prices also affect:</p>
  
  <ul>
    <li>Overflight decisions</li>
    <li>Technical stops</li>
    <li>Aircraft type selection</li>
    <li>Long-haul vs. short-haul scheduling</li>
  </ul>

  <p>Some airlines are re-evaluating ultra-long-haul routes because fuel economics have shifted.</p>
  
  <p>Operators may choose aircraft models with better fuel efficiency rather than higher seating capacity. In business aviation, selecting the right aircraft category (light jet vs. mid-size vs. heavy jet) has become even more strategic.</p>

  <h2 style="color: #EB5431">Financial Risk Management Strategies</h2>
  
  <p>To manage uncertainty, many airlines use:</p>
  
  <ul>
    <li>Fuel hedging contracts</li>
    <li>Long-term supplier agreements</li>
    <li>Volume-based discounts</li>
    <li>Forward purchase contracts</li>
  </ul>

  <p>Hedging allows airlines to lock in fuel prices for future months, protecting against sudden market spikes.</p>
  
  <p>However, hedging also carries risk if fuel prices unexpectedly drop. Smaller operators often rely more on flexible fuel sourcing strategies rather than large hedging contracts.</p>

  <h2 style="color: #EB5431">The Environmental Factor</h2>
  
  <p>Governments worldwide are tightening aviation emission policies.</p>
  
  <p>Carbon offset programs, environmental reporting requirements, and green taxation policies are influencing fuel costs.</p>
  
  <p>Passengers are also increasingly conscious of environmental impact. Airlines promoting SAF usage and efficient routing are gaining a brand advantage—even if ticket prices are slightly higher.</p>
  
  <p>Fuel planning in 2026 is not just about cost; it is also about sustainability compliance and public perception.</p>

  <h2 style="color: #EB5431">What This Means for Aviation Operators</h2>
  
  <p>Rising fuel prices are pushing operators to:</p>
  
  <ul>
    <li>Improve operational efficiency</li>
    <li>Invest in fuel analytics tools</li>
    <li>Strengthen supplier relationships</li>
    <li>Enhance strategic route planning</li>
    <li>Monitor market trends closely</li>
  </ul>

  <p>The margin for error is shrinking.</p>
  
  <p>Every route decision, fuel uplift choice, and scheduling adjustment directly affects profitability.</p>

  <h2 style="color: #EB5431">What This Means for Clients & Charter Customers</h2>
  
  <p>Customers may notice:</p>
  
  <ul>
    <li>Transparent fuel surcharges</li>
    <li>More dynamic pricing</li>
    <li>Flexible route options</li>
    <li>Increased focus on sustainability</li>
  </ul>

  <p>Understanding that fuel is a fluctuating cost component helps set realistic expectations for aviation pricing in 2026.</p>

  <h2 style="color: #EB5431">The Bigger Picture: A More Strategic Aviation Industry</h2>
  
  <p>While rising fuel prices create challenges, they are also encouraging smarter operations.</p>
  
  <p>Airlines and private operators are becoming:</p>
  
  <ul>
    <li>More data-driven</li>
    <li>More efficient</li>
    <li>More environmentally conscious</li>
    <li>More cost-aware</li>
  </ul>

  <p>Fuel will always be a critical component of aviation economics. In 2026, however, its influence extends beyond simple operating cost—it is redefining how flights are planned, priced, and executed.</p>
  
  <p>Rising fuel prices are driving:</p>
  
  <ul>
    <li>Smarter route optimization</li>
    <li>Strategic refueling decisions</li>
    <li>Greater technology adoption</li>
    <li>Increased sustainability focus</li>
  </ul>

  <p>The future of flight planning is no longer just about reaching the destination—it is about reaching it efficiently, economically, and responsibly.</p>

</div>
`,
      date: "18 March 2026",
      img: blog2,
      author: "Admin",
    },

    {
      id: 4,
      title: "Navigating Airspace Restrictions During Global Events",
      text: "Global events such as international summits, sporting tournaments, diplomatic gatherings, and high-security political meetings bring prestige to host countries—but they also introduce significant operational complexity for aviation stakeholders. During these periods, governments often impose temporary airspace restrictions to ensure safety, manage congestion, and maintain national security. For flight operators, these restrictions can affect routing, permits, fuel planning, airport slots, and overall operational cost.",
      text2: `<div class="blog-content">

  <h1 style="color: #EB5431;">Navigating Airspace Restrictions During Global Events</h1>

  <p>Global events such as international summits, sporting tournaments, diplomatic gatherings, and high-security political meetings bring prestige to host countries—but they also introduce significant operational complexity for aviation stakeholders.</p>
  
  <p>During these periods, governments often impose temporary airspace restrictions to ensure safety, manage congestion, and maintain national security. For flight operators, these restrictions can affect routing, permits, fuel planning, airport slots, and overall operational cost.</p>
  
  <p>Understanding how to manage these temporary limitations has become an essential part of modern flight operations planning.</p>

  <h2 style="color: #EB5431">Why Airspace Restrictions Are Implemented</h2>
  
  <p>When a country hosts a high-profile event, airspace control becomes a security priority. Authorities aim to prevent unauthorized aircraft access while ensuring the safe movement of VIP delegations and increased commercial traffic.</p>
  
  <p>These restrictions are not arbitrary. They are carefully structured based on:</p>
  
  <ul>
    <li>Threat assessments</li>
    <li>Expected air traffic volume</li>
    <li>Military coordination</li>
    <li>Diplomatic security requirements</li>
  </ul>

  <p>For operators, this means flight planning must adapt quickly to updated regulations and notices.</p>

  <h2 style="color: #EB5431">Types of Airspace Restrictions You May Encounter</h2>
  
  <p>Airspace control during global events typically falls into structured categories. Understanding them helps operators plan efficiently.</p>
  
  <ul>
    <li><strong>Temporary Flight Restrictions (TFRs):</strong> Short-term restrictions around event venues.</li>
    <li><strong>No-Fly Zones:</strong> Complete prohibition of civilian aircraft in designated areas.</li>
    <li><strong>Altitude Restrictions:</strong> Flights may be allowed, but at controlled altitudes.</li>
    <li><strong>VIP Movement Closures:</strong> Temporary airspace suspension during official arrivals or departures.</li>
  </ul>

  <p>Each type of restriction carries different operational implications and compliance requirements.</p>

  <h2 style="color: #EB5431">Impact on Flight Routing and Scheduling</h2>
  
  <p>One of the most immediate effects of airspace restrictions is route adjustment. Aircraft may need to avoid restricted zones, leading to longer flight paths and additional coordination with air traffic control.</p>
  
  <p>Even a minor rerouting can impact total flight time and crew duty limits. In high-traffic periods, holding patterns and slot delays further complicate scheduling. For commercial airlines and private operators alike, flexibility becomes essential.</p>

  <h2 style="color: #EB5431">Fuel Planning Adjustments</h2>
  
  <p>Rerouted flights naturally consume more fuel. During major events, fuel planning becomes more dynamic and calculated.</p>
  
  <p>Operators must consider:</p>
  
  <ul>
    <li>Extra contingency fuel</li>
    <li>Alternate airport options</li>
    <li>Holding fuel for congestion</li>
    <li>Technical stop planning if required</li>
  </ul>

  <p>Carrying additional fuel ensures safety but increases aircraft weight, which also impacts consumption. Precision in fuel calculation is critical during restricted airspace operations.</p>

  <h2 style="color: #EB5431">Airport Slot Challenges During Major Events</h2>
  
  <p>Global events attract increased passenger and business aviation traffic. Nearby airports often operate at or near capacity.</p>
  
  <p>This results in:</p>
  
  <ul>
    <li>Limited landing and departure slot availability</li>
    <li>Strict adherence to approved timings</li>
    <li>Reduced parking space</li>
    <li>Higher ground handling demand</li>
  </ul>

  <p>Slot approvals must be secured well in advance. Last-minute adjustments become difficult during peak event periods.</p>

  <h2 style="color: #EB5431">Permit Complexity and Regulatory Coordination</h2>
  
  <p>During high-profile events, aviation authorities may introduce additional permit scrutiny. Overflight and landing permits might require extended processing times or enhanced documentation review.</p>
  
  <p>In some cases, authorities may request:</p>
  
  <ul>
    <li>Detailed passenger manifests</li>
    <li>Aircraft documentation revalidation</li>
    <li>Diplomatic clearances</li>
    <li>Security declarations</li>
  </ul>

  <p>Advance submission and continuous follow-up with authorities significantly reduce approval delays.</p>

  <h2 style="color: #EB5431">The Role of NOTAM Monitoring</h2>
  
  <p>NOTAMs (Notices to Airmen) are critical during global events. These official notices communicate temporary changes in airspace, runway availability, and operational procedures.</p>
  
  <p>Flight planning teams must:</p>
  
  <ul>
    <li>Monitor NOTAM updates daily</li>
    <li>Interpret geographic coordinates accurately</li>
    <li>Confirm crew briefings reflect the latest changes</li>
    <li>Adjust flight paths immediately if required</li>
  </ul>

  <p>Ignoring or misinterpreting NOTAMs can result in heavy penalties or forced diversions.</p>

  <h2 style="color: #EB5431">Business Aviation vs Commercial Airline Impact</h2>
  
  <p>Commercial airlines usually operate on fixed route networks, allowing some degree of pre-planned adjustment. Business aviation, however, often works on short-notice scheduling, making restrictions more challenging.</p>
  
  <p>Private operators may face:</p>
  
  <ul>
    <li>Parking limitations at event airports</li>
    <li>Higher fuel demand and limited supply</li>
    <li>Strict arrival/departure windows</li>
    <li>Increased security screening</li>
  </ul>

  <p>Early coordination becomes even more important for business aviation flights.</p>

  <h2 style="color: #EB5431">Financial Implications of Restricted Airspace</h2>
  
  <p>Airspace restrictions do not only affect scheduling — they directly influence operational costs.</p>
  
  <p>Cost impacts may include:</p>
  
  <ul>
    <li>Increased fuel burn</li>
    <li>Higher overflight fees</li>
    <li>Slot penalty charges</li>
    <li>Additional crew hours</li>
    <li>Extended ground handling expenses</li>
  </ul>

  <p>Even minor rerouting can shift the financial balance of a flight operation. Cost forecasting during global events must account for multiple variables.</p>

  <h2 style="color: #EB5431">Strategic Planning Before Major Events</h2>
  
  <p>Proactive preparation reduces operational risk. Successful operators begin planning weeks before major global events.</p>
  
  <p>Key preparation steps include:</p>
  
  <ul>
    <li>Tracking global event calendars</li>
    <li>Reviewing preliminary aviation advisories</li>
    <li>Securing slots early</li>
    <li>Preparing alternate route scenarios</li>
    <li>Coordinating closely with local partners</li>
  </ul>

  <p>Advanced planning ensures smoother approvals and minimizes last-minute disruptions.</p>

  <h2 style="color: #EB5431">Technology and Predictive Planning Tools</h2>
  
  <p>Modern flight planning software has become indispensable during restricted airspace periods. These systems integrate real-time data, weather forecasts, and airspace notices to simulate routing options instantly.</p>
  
  <p>With predictive analytics, operators can compare:</p>
  
  <ul>
    <li>Route time differences</li>
    <li>Fuel consumption variations</li>
    <li>Cost implications</li>
    <li>Congestion probability</li>
  </ul>

  <p>Data-driven planning significantly reduces uncertainty during global events.</p>

  <h2 style="color: #EB5431">Crew Coordination and Communication</h2>
  
  <p>Clear communication between dispatch teams and cockpit crews is essential. Pilots must be briefed thoroughly on:</p>
  
  <ul>
    <li>Updated routing</li>
    <li>Restricted zones</li>
    <li>Alternate airport options</li>
    <li>Expected delays</li>
  </ul>

  <p>Strong coordination ensures operational safety and compliance with temporary regulations.</p>

  <h2 style="color: #EB5431">Increasing Frequency of Airspace Restrictions</h2>
  
  <p>In today's geopolitical climate, airspace restrictions are becoming more common. Beyond global events, operators now face limitations due to:</p>
  
  <ul>
    <li>Military exercises</li>
    <li>Diplomatic tensions</li>
    <li>Climate summits</li>
    <li>International security alerts</li>
  </ul>

  <h2 style="color: #EB5431">Conclusion</h2>
  
  <p>Navigating airspace restrictions during global events requires preparation, flexibility, and precision. While these temporary changes can increase complexity, strategic planning and real-time monitoring allow operators to maintain safe and efficient operations.</p>
  
  <p>In today's aviation environment, success depends not just on reaching a destination, but on anticipating regulatory shifts and adapting quickly to them.</p>
  
  <p>Proactive coordination, intelligent routing, and early approvals transform potential disruption into controlled execution.</p>

</div>
`,
      date: "18 March 2026",
      img: blog3,
      author: "Admin",
    },

    {
      id: 5,
      title: "Slot Allocation Process: What Aviation Operators Should Know",
      text: "In today's busy aviation environment, airport slots are one of the most valuable operational assets. As global air traffic continues to grow, especially at major international hubs, access to preferred landing and departure times is becoming increasingly competitive. For aviation operators — whether commercial airlines, cargo carriers, or private jet operators — understanding the slot allocation process is essential for maintaining schedule reliability, operational efficiency, and cost control.",
      text2: `<div class="blog-content">

  <h1 style="color: #EB5431;">Slot Allocation Process: What Aviation Operators Should Know</h1>

  <p>In today's busy aviation environment, airport slots are one of the most valuable operational assets. As global air traffic continues to grow, especially at major international hubs, access to preferred landing and departure times is becoming increasingly competitive.</p>
  
  <p>For aviation operators — whether commercial airlines, cargo carriers, or private jet operators — understanding the slot allocation process is essential for maintaining schedule reliability, operational efficiency, and cost control.</p>
  
  <p>A slot is not simply a preferred time; it is a coordinated approval granted by airport authorities allowing an aircraft to land or depart at a specific time window. Without a confirmed slot at congested airports, flight operations may face delays, penalties, or even denial of service.</p>

  <h2 style="color: #EB5431">What Is an Airport Slot?</h2>
  
  <p>An airport slot is an official permission issued by a slot coordinator that allows an airline or operator to use the full range of airport infrastructure — runway, terminal, and parking—on a specified date and time.</p>
  
  <p>Slots are particularly required at Level 3 (fully coordinated) airports, where demand exceeds capacity. These airports cannot accommodate every requested movement, so time-based allocation becomes necessary.</p>
  
  <p>In simple terms, if too many aircraft want to land at the same time, a slot system ensures order, safety, and fair distribution.</p>

  <h2 style="color: #EB5431">Why Slot Allocation Is Necessary</h2>
  
  <p>Airports have physical and operational limitations. Runways can only handle a certain number of movements per hour. Terminals have limited gate availability. Air traffic control must maintain safe separation between aircraft.</p>
  
  <p>Without slot coordination, the result would be:</p>
  
  <ul>
    <li>Severe congestion</li>
    <li>Increased delays</li>
    <li>Safety risks</li>
    <li>Inefficient use of infrastructure</li>
  </ul>

  <p>Slot allocation ensures that airport capacity is used efficiently while maintaining safety standards.</p>

  <h2 style="color: #EB5431">Categories of Airports Based on Slot Requirements</h2>
  
  <p>Airports are classified globally under a standardized system:</p>
  
  <ul>
    <li><strong>Level 1 (Non-Coordinated):</strong> No slot approval required.</li>
    <li><strong>Level 2 (Schedule Facilitated):</strong> Monitoring required, but limited coordination.</li>
    <li><strong>Level 3 (Coordinated):</strong> Formal slot approval mandatory before operation.</li>
  </ul>

  <p>Most major international hubs fall under Level 3, where slot control is strict and highly regulated.</p>

  <h2 style="color: #EB5431">How the Slot Allocation Process Works</h2>
  
  <p>The slot allocation process is structured and seasonal. It typically follows the Worldwide Airport Slot Guidelines (WASG), which govern how slots are distributed globally.</p>
  
  <p>The process includes:</p>
  
  <ul>
    <li>Submission of slot requests by airlines</li>
    <li>Capacity declaration by airport authorities</li>
    <li>Allocation review by slot coordinators</li>
    <li>Confirmation or adjustment of requested timings</li>
  </ul>

  <p>Slots are usually allocated twice a year — for the summer and winter scheduling seasons.</p>

  <h2 style="color: #EB5431">Historical Rights and Slot Priority</h2>
  
  <p>Airlines that have historically operated at a specific slot time may receive priority under the "use it or lose it" principle. If an airline uses a slot consistently (typically 80% usage rule), it retains priority for the following season.</p>
  
  <p>This system protects operational stability but also limits new entrants' access at congested airports. For new operators, gaining access at peak hours can be challenging due to this historical precedence.</p>

  <h2 style="color: #EB5431">Challenges Operators Face in Slot Allocation</h2>
  
  <p>The slot process may appear straightforward, but in reality, it can be highly competitive and complex.</p>
  
  <p>Common challenges include:</p>
  
  <ul>
    <li>High demand during peak hours</li>
    <li>Limited parking stands</li>
    <li>Slot timing restrictions</li>
    <li>Coordinated airport congestion</li>
    <li>Seasonal capacity reductions</li>
  </ul>

  <p>For business aviation operators, short-notice requests can be particularly difficult during high-traffic seasons.</p>

  <h2 style="color: #EB5431">Slot Coordination During Peak Seasons</h2>
  
  <p>During global events, holidays, or summer travel peaks, airport demand increases significantly. Slot availability becomes tighter, and approval windows narrow.</p>
  
  <p>Operators must plan well in advance to secure optimal timings. Last-minute slot requests may result in off-peak approvals or operational delays.</p>
  
  <p>Proactive coordination with local authorities and handling agents significantly improves approval chances.</p>

  <h2 style="color: #EB5431">Slot Swapping and Adjustments</h2>
  
  <p>In certain cases, airlines may swap slots among themselves, subject to regulatory approval. This allows better operational alignment without increasing airport congestion.</p>
  
  <p>However, slot swaps require:</p>
  
  <ul>
    <li>Mutual agreement</li>
    <li>Regulatory transparency</li>
    <li>Official coordinator approval</li>
  </ul>

  <p>For smaller operators, flexibility in timing often becomes the key to securing access.</p>

  <h2 style="color: #EB5431">Financial Impact of Slot Allocation</h2>
  
  <p>Airport slots influence more than just timing — they directly impact operational costs and profitability.</p>
  
  <p>Delayed or non-ideal slots can result in:</p>
  
  <ul>
    <li>Increased fuel burn due to holding patterns</li>
    <li>Passenger dissatisfaction</li>
    <li>Crew overtime costs</li>
    <li>Reduced aircraft utilization</li>
    <li>Missed connecting flights</li>
  </ul>

  <p>For charter operators, slot timing can affect client satisfaction and overall service quality.</p>

  <h2 style="color: #EB5431">Technology and Slot Management</h2>
  
  <p>Modern aviation systems now use digital slot coordination platforms that improve transparency and efficiency.</p>
  
  <p>Advanced software tools help operators:</p>
  
  <ul>
    <li>Submit slot requests electronically</li>
    <li>Track approval status in real time</li>
    <li>Monitor slot usage compliance</li>
    <li>Analyze historical slot performance</li>
  </ul>

  <p>Digitalization has made the process more streamlined, but competition remains intense at major hubs.</p>

  <h2 style="color: #EB5431">Regulatory Compliance and Penalties</h2>
  
  <p>Operating without an approved slot at coordinated airports can result in serious consequences. Authorities may impose:</p>
  
  <ul>
    <li>Financial penalties</li>
    <li>Slot withdrawal</li>
    <li>Operational restrictions</li>
    <li>Reduced future priority</li>
  </ul>

  <p>Strict compliance with approved slot timings is critical. Even minor deviations beyond tolerance windows can trigger scrutiny.</p>

  <h2 style="color: #EB5431">Best Practices for Aviation Operators</h2>
  
  <p>To navigate the slot allocation process efficiently, operators should:</p>
  
  <ul>
    <li>Submit slot requests early</li>
    <li>Maintain accurate schedule planning</li>
    <li>Monitor seasonal capacity announcements</li>
    <li>Coordinate with experienced ground handlers</li>
    <li>Ensure compliance with slot usage rules</li>
  </ul>

  <p>Flexibility and early engagement significantly increase success rates.</p>

  <h2 style="color: #EB5431">The Growing Importance of Strategic Slot Planning</h2>
  
  <p>As global air traffic continues to grow, slot scarcity is becoming more common. Major international hubs are nearing maximum capacity, making slot allocation increasingly competitive.</p>
  
  <p>Airlines are now incorporating slot strategy into long-term route planning and commercial decisions. For business aviation, strategic scheduling and proactive coordination are essential to avoid last-minute disruption.</p>

  <h2 style="color: #EB5431">Conclusion</h2>
  
  <p>The slot allocation process is a critical component of modern aviation operations. It ensures safety, fairness, and efficiency in increasingly congested airspace environments. For aviation operators, understanding how slots are allocated, prioritized, and monitored is essential for maintaining schedule reliability and controlling operational costs. While the process can be competitive, proactive planning, regulatory awareness, and strong coordination transform complexity into opportunity.</p>
  
  <p>In today's aviation landscape, securing the right slot at the right time is not just about timing — it is about strategy.</p>

</div>
`,
      date: "18 March 2026",
      img: blog4,
      author: "Admin",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "At Freedom Air Services, we began with a simple belief: aviation support should be safe, reliable, and accessible. Our journey is driven by dedication, discipline, and an unwavering commitment to excellence in every operation we undertake.",
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram:
      "https://www.instagram.com/freedomairservices_pvt_ltd/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  copyrightText: "Copyright © 2026 . Designed and Managed by ",
  list1: {
    title: "Quick Links",
    links: [
      { id: 2, label: "About Us", href: "/about-us" },

      {
        id: 3,
        label: "Services",
        href: "/services",
      },

      { id: 4, label: "Info & Regulations", href: "/info-regulation" },
      { id: 5, label: "Airport Index", href: "/airport-index" },
      { id: 6, label: "Contact Us", href: "/contact-us" },
      { id: 7, label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },

  list2: {
    title: "Services",
    links: [
      {
        id: 1,
        label: "Overfly & Landing Permit Assistance",
        href: "/services/overfly-and-landing-permit-assistance",
      },
      {
        id: 2,
        label: "Airport Slots",
        href: "/services/airport-slots",
      },
      {
        id: 3,
        label: "Ground Handling Arrangements",
        href: "/services/ground-handling-arrangements",
      },
      {
        id: 4,
        label: "Aviation Fuel Provision",
        href: "/services/aviation-fuel-provision",
      },
      {
        id: 5,
        label: "Crew Accommodation and Support",
        href: "/services/crew-accommodation-and-support",
      },
      {
        id: 6,
        label: "On-Site Gourmet Catering",
        href: "/services/on-site-gourmet-catering",
      },
      {
        id: 7,
        label: "Customized Aviation Solutions",
        href: "/services/customized-aviation-solutions",
      },
      // {
      //   id: 8,
      //   label: "Aircraft Managements",
      //   href: "/services/aircraft-managements",
      // },
    ],
  },
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "We build strong, reliable spaces with a commitment to quality and trust. Our focus is on delivering every project with precision, safety, and excellence. ",
  slug: "about-us",
  img: banner2,
};

export const Aboutabout = {
  img: banner3,
  img2: banner,
  title: "About us",
  title1: "Safe and Reliable ",
  title2: "Aviation Services",
  para:
    "Leading reliable, innovative aviation solutions connecting people, businesses, and opportunities worldwide. We deliver safe, efficient, and seamless air services designed to elevate travel experiences and support global growth with precision and responsibility.",
  vision: [
    {
      heading: "Our Vision",
      icon: <FaEye />,
      text:
        "To become a trusted aviation partner recognized for safety, innovation, and service quality. We envision connecting people and businesses globally while setting new benchmarks in responsible and sustainable air services.",
    },
    {
      heading: "Our Mission",
      icon: <GoGoal />,
      text:
        "To deliver safe, reliable, and efficient aviation services while maintaining the highest standards of professionalism. We aim to create seamless travel experiences that prioritize customer satisfaction, operational excellence, and long-term trust.",
    },
    {
      heading: "Our Goals",
      icon: <GoGoal />,
      text:
        "To expand our network, enhance service quality, and adopt advanced aviation technologies. We strive to build lasting client relationships, maintain strict safety compliance, and continuously improve operational performance across all services.",
    },
  ],
  // process: [
  //   { value: 99, label: "Success Rate" },
  //   { value: 99, label: "Client Satisfaction" },
  //   { value: 100, label: "Transparecy" },
  // ],
};

export const serviceBanner = {
  title: "Our Services",
  para:
    "Expert Building and Interior Design Solutions. From Concept to Completion, We Build Comfort For Your Life! ",
  slug: "services",
  img: banner,
};

// contact page
export const contactBanner = {
  title: "Contact Us",
  para:
    "Get in touch with our team for support, inquiries, and seamless aviation services tailored to your operational needs.",
  slug: "contact-us",
  img: banner,
};

export const contactData = {
  details: [
    {
      icon: <FiPhone />, // Aapka phone icon
      para: "Contact Numbers",
      data: [
        { text: "Operations: +91 88262 92951", slug: "tel:+918826292951" },
        { text: ": +911166606104", slug: "tel:+911166606104" },
        { text: "Accounts: +911146546209", slug: "tel:+911146546209" },
      ],
    },
    {
      icon: <FiMail />, // Aapka email icon
      para: "E-mail Addresses",
      data: [
        { text: "ops@freedomair.aero", slug: "mailto:ops@freedomair.aero" },
        { text: "ops@freedomair.in", slug: "mailto:ops@freedomair.in" },
        { text: "ops.freedomair@gmail.com", slug: "mailto:ops.freedomair@gmail.com" },
      ],
    },
    {
      icon: <FiMapPin />, // Aapka map icon
      para: "Our Location",
      data: [
        {
          text: "C-49, III Floor, Lajpat Nagar – II, New Delhi – 110024, INDIA",
          slug: "https://www.google.com/maps/place/Freedom+Air+Services/@28.5714385,77.2339782,17z/data=!4m10!1m2!2m1!1sC-49,+III+Floor,+Lajpat+Nagar+%E2%80%93+II,+New+Delhi+%E2%80%93+110024,+INDIA!3m6!1s0x390ce30077e0858d:0xc798ac10cb1c9112!8m2!3d28.5714385!4d77.2383556!15sCkFDLTQ5LCBJSUkgRmxvb3IsIExhanBhdCBOYWdhciDigJMgSUksIE5ldyBEZWxoaSDigJMgMTEwMDI0LCBJTkRJQZIBE2F2aWF0aW9uX2NvbnN1bHRhbnTgAQA!16s%2Fg%2F11x6wn3qz3?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
        },
      ],
    },
  ],
};

export const airport = [
  {
    "img": "air21",
    "airportName": "VIDP / DEL / Indira Gandhi International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry), Customs Yes, Slots Required",
    "remarks": "Delhi GA Airport Operations",
    "airportType": "Civil / International",
    "address": "General Aviation Lounge Terminal 1, D I G I Airport, New Delhi - 110037",
    "runwayDimensions": "Multiple runways: 11R/29L (4,429m x 60m), 11L/29R (4,400m x 45m), 10/28 (3,810m x 45m), 9/27 (2,812m x 45m)",
    "latitude": "28.55616",
    "longitude": "77.100281"
  },
  {
    "img": "air22",
    "airportName": "VAAH / AMD / Sardar Vallabhbhai Patel International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Airport coordinated; slots mandatory. Restrictions and parking subject to availability.",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry), Customs Yes, Slots Required",
    "airportType": "Civil / International",
    "address": "Airport Road, Hansol, Ahmedabad, Gujarat 380003",
    "runwayDimensions": "Single runway 05/23: 3,505m x 46m (11,499 ft x 148 ft)",
    "latitude": "23 04 37.92 N",
    "longitude": "072 38 04.91 E"
  },
  {
    "img": "air23",
    "airportName": "VABB / BOM / Chhatrapati Shivaji International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0230 UTC - 0430 UTC Daily – No LDG / No TK OFF; 1130 UTC - 1400 UTC Daily – No LDG / No TK OFF",
    "customsImmigration": "YES",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes, Airport of Entry",
    "remarks": "Mumbai Airport Operations",
    "airportType": "Civil / International",
    "address": "Mumbai, Maharashtra 400099",
    "runwayDimensions": "Runways: 09/27 (3,660m x 45m), 14/32 (2,871m x 45m)",
    "latitude": "N19-05.5",
    "longitude": "E072-51.9"
  },
  {
    "img": "air24",
    "airportName": "VAAU / IXU / Aurangabad Airport",
    "airportOperatingHours": "MON, WED, FRI, SAT: 0000-0350 & 1000-1405; TUE, THU, SUN: 0000-0350 & 1120-1405",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No, not an Airport of Entry",
    "airportType": "Domestic",
    "address": "Jalna Road, Chikkalthana, Aurangabad, Maharashtra",
    "runwayDimensions": "Runway 09/27: 2,839m x 45m (9,300 ft)",
    "latitude": "19 51 45.82 N",
    "longitude": "075 23 53.21 E"
  },
  {
    "img": "air25",
    "airportName": "VABJ / BHJ / Bhuj Airport",
    "airportOperatingHours": "72 HR Prior Notice Required for Non-Scheduled Flights",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "As Per ATS",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No, but slots required",
    "airportType": "Civil / Domestic",
    "address": "IAF Campus, Bhuj, Gujarat",
    "runwayDimensions": "Runway: 2,514m x 45m (8,250 ft x 148 ft)",
    "latitude": "23 17 16.18 N",
    "longitude": "069 40 12.53 E"
  },
  {
    "img": "air26",
    "airportName": "VABO / BDQ / Vadodara Airport",
    "airportOperatingHours": "SUN, MON, TUE, FRI, SAT: 0030-1600; WED, THU: 0030-0310 & 0450-1600",
    "airportRestrictions": "WED, THU 0310 UTC - 0450 UTC",
    "customsImmigration": "NO",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No, slots required",
    "airportType": "Civil / Domestic, IAF Base",
    "address": "Civil Aerodrome, Harni Road, Vadodara-390022",
    "runwayDimensions": "Runway 04/22: 2,469m x 45m (8,100 ft x 150 ft)",
    "latitude": "22 20 10.19 N",
    "longitude": "073 13 34.64 E"
  },
  {
    "img": "air27",
    "airportName": "VABP / BHO / Raja Bhoj Airport",
    "airportOperatingHours": "0100-1700 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Airport Road, Gandhi Nagar, Bhopal, Madhya Pradesh 462036",
    "runwayDimensions": "Runway 12/30: 2,744m x 45m (9,000 ft x 148 ft)",
    "latitude": "23.1715 N",
    "longitude": "077.2015 E"
  },
  {
    "img": "air28",
    "airportName": "VAID / IDR / Devi Ahilyabai Holkar Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Confirm before arrival",
    "airportType": "Public / International",
    "address": "Depalpur Road, Indore",
    "runwayDimensions": "Runway 07/25: 2,750m x 45m (9,028 ft x 128 ft)",
    "latitude": "22 43 18.43 N",
    "longitude": "075 48 03.9 E"
  },
  {
    "img": "air29",
    "airportName": "VAJB / JLR / Jabalpur Airport",
    "airportOperatingHours": "MON: 0225-0510 UTC, 0910-1205 UTC, 1305-1425 UTC; TUE: 0225-0510 UTC, 0910-1040 UTC, 1305-1425 UTC; WED & SUN: 0225-0510 UTC, 0620-0745 UTC, 0910-1040 UTC, 1305-1425 UTC; THU: 0225-0510 UTC, 0910-1040 UTC, 1305-1425 UTC; FRI: 0225-0510 UTC, 0620-0745 UTC, 0910-1205 UTC, 1305-1425 UTC; SAT: 0225-0510 UTC, 0750-1040 UTC, 1305-1425 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No, slots required",
    "airportType": "Domestic",
    "address": "Dumna, Jabalpur, Madhya Pradesh",
    "runwayDimensions": "Runway 06/24: 1,988m x 45m",
    "latitude": "23 10 40.14 N",
    "longitude": "080 03 07.37 E"
  },
  {
    "img": "air30",
    "airportName": "VAJM / JGA / Jamnagar Airport",
    "airportOperatingHours": "0230 UTC – 1830 UTC",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Applicable",
    "airportType": "Civil Enclave / IAF Base",
    "address": "Airport Road Civil Enclave, Govardhanpur, Jamnagar, Gujarat",
    "runwayDimensions": "Two runways: 12/30 (2,510m x 45m), 6/24 (2,512m x 45m)",
    "latitude": "22 27 55.88 N",
    "longitude": "070 00 45.20 E"
  },
  {
    "img": "air31",
    "airportName": "VANP / NAG / Dr. Babasaheb Ambedkar International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0750 UTC – 0925 UTC – MON TO SAT – NO LDG / NO TK OFF (Except SUN)",
    "customsImmigration": "H24",
    "airportFireCategory": "VIII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes, Airport of Entry",
    "airportType": "Civil / International",
    "address": "Sonegaon, Nagpur, Maharashtra",
    "runwayDimensions": "Runway 14/32: 3,200m x 45m (10,499 ft x 148 ft)",
    "latitude": "21 05 31.89 N",
    "longitude": "079 02 49.86 E"
  },
  {
    "img": "air32",
    "airportName": "VAPO / PNQ / Pune International Airport",
    "airportOperatingHours": "0330 UTC – 0600 UTC MON-FRI (No LDG / No TKOFF); 0530 UTC – 1030 UTC SAT (No LDG / No TKOFF)",
    "airportRestrictions": "NIL",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes, from 8 AM to 8 PM",
    "airportType": "Civil / Military",
    "address": "New Airport Rd, Pune International Airport Area, Lohgaon, Pune, Maharashtra 411032",
    "runwayDimensions": "Runway 10/28: 2,540m x 45m (2,535m)",
    "latitude": "18.3456 N",
    "longitude": "073 55 11 E"
  },
  {
    "img": "air33",
    "airportName": "VAPR / PBD / Porbandar Airport",
    "airportOperatingHours": "72 HR Prior Notice Required",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "As Per ATS",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Available, slots required",
    "airportType": "Domestic",
    "address": "NH 8B, Porbandar, Gujarat",
    "runwayDimensions": "Runway 09/27: 1,372m x 45m (4,500 ft)",
    "latitude": "21 38 55.23 N",
    "longitude": "069 39 25.99 E"
  },
  {
    "img": "air34",
    "airportName": "VARK / RAJ / Rajkot Airport",
    "airportOperatingHours": "0210 UTC - 1505 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Yes, Airport of Entry",
    "airportType": "International",
    "address": "Civil Aerodrome, Gandhigram, Rajkot, Gujarat",
    "runwayDimensions": "Runway 04/22: 3,048m x 45m (10,000 ft)",
    "latitude": "22 18 33.06 N",
    "longitude": "070 46 46.29 E"
  },
  {
    "img": "air35",
    "airportName": "VASD / SAG / Shirdi Airport",
    "airportOperatingHours": "Nil (As Per ATS)",
    "airportRestrictions": "YES",
    "customsImmigration": "IV",
    "airportFireCategory": "N/A",
    "visa": "https://indianvisaonline.gov.in/",
    "ciqAvailability": "Not Available",
    "airportType": "Domestic / International",
    "address": "19 41 19 N",
    "runwayDimensions": "Runway 09/27: 2,500m x 45m (8,202 ft)",
    "latitude": "074 22 44 E",
    "longitude": "0530 UTC - 1230 UTC"
  },
  {
    "img": "air36",
    "airportName": "VASU / STV / Surat Airport",
    "airportOperatingHours": "TUE/WED/THU/FRI/SUN: 0150 UTC – 1930 UTC; MON/SAT: 0150 UTC – 1630 UTC",
    "airportRestrictions": "Nil",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "CAT VI (CAT VII when requested)",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No, slots required",
    "airportType": "Domestic / International",
    "address": "Surat-Dumas Rd, Near Magdalla, Surat, Gujarat",
    "runwayDimensions": "Runway: 2,905m x 45m (9,500 ft)",
    "latitude": "21 06 50.62 N",
    "longitude": "072 44 30.45 E"
  },
  {
    "img": "air37",
    "airportName": "VAUD / UDR / Maharana Pratap Airport",
    "airportOperatingHours": "0200 UTC – 1430 UTC",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Available",
    "airportType": "Domestic",
    "address": "NH 76, Dabok, Rajasthan",
    "runwayDimensions": "Runway 08/26: 2,743m x 45m (9,000 ft)",
    "latitude": "24 37 03.71 N",
    "longitude": "073 53 45.96 E"
  },
  {
    "img": "air38",
    "airportName": "VEAB / IXD / Allahabad Airport",
    "airportOperatingHours": "24 HR Prior Notice Required",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Available",
    "airportType": "Domestic / IAF",
    "address": "Allahabad Road, Bamrauli, Allahabad, Uttar Pradesh",
    "runwayDimensions": "Runway 12/30: 2,591m x 45m (8,500 ft)",
    "latitude": "N25 26.43",
    "longitude": "E81 44.13"
  },
  {
    "img": "air39",
    "airportName": "VEAT / IXA / Agartala Airport",
    "airportOperatingHours": "0200 UTC - 1530 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No, slots required",
    "airportType": "Domestic",
    "address": "Airport Road, Agartala, Tripura",
    "runwayDimensions": "Runway 18/36: 2,286m x 45m (7,500 ft)",
    "latitude": "23 53 13.12 N",
    "longitude": "091 14 25.62 E"
  },
  {
    "img": "air40",
    "airportName": "VEBD / IXB / Bagdogra Airport",
    "airportOperatingHours": "0030-1330 WATCH HR",
    "airportRestrictions": "Nil",
    "customsImmigration": "YES",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes, Airport of Entry",
    "airportType": "Customs Airport / International",
    "address": "Bagdogra, Darjeeling District, Siliguri, West Bengal",
    "runwayDimensions": "Runway: 2,754m x 45m (9,000 ft x 150 ft)",
    "latitude": "26 40 52.34 N",
    "longitude": "088 19 42.84 E"
  },
  {
    "img": "air41",
    "airportName": "VEBN / VNS / Lal Bahadur Shastri Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry, Customs Yes",
    "airportType": "International",
    "address": "Varanasi District, Babatpur, Uttar Pradesh 221006",
    "runwayDimensions": "2,745m x 46m (09/27)",
    "latitude": "25 27 08.49 N",
    "longitude": "082 51 33.63 E"
  },
  {
    "img": "air42",
    "airportName": "VEBS / BBI / Biju Patnaik International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Airport of Entry, Customs Yes",
    "airportType": "International",
    "address": "Airport Road, Bhubaneswar",
    "runwayDimensions": "2,743m x 45m (14/32), 1,379m x 45m (05/23)",
    "latitude": "20 14 39.71 N",
    "longitude": "085 49 04.01 E"
  },
  {
    "img": "air43",
    "airportName": "VECC / CCU / Netaji Subhash Chandra Bose International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Customs 24hrs, Immigration 24hrs",
    "airportType": "International",
    "address": "Jessore Rd, Dum Dum, Kolkata, West Bengal 700052",
    "runwayDimensions": "3,627m x 46m (01R/19L), 2,839m x 46m (01L/19R)",
    "latitude": "22 39 17.06 N",
    "longitude": "088 26 48.20 E"
  },
  {
    "img": "air44",
    "airportName": "VEDB / DBD / Dhanbad Airport",
    "airportOperatingHours": "NIL (To Be Coordinated with State Government)",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "N/A (City Fire Service on Call)",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No, Customs No",
    "airportType": "Civil / Domestic",
    "address": "Bhuli Hirak Road, Satyam Nagar, Dhanbad, Jharkhand",
    "runwayDimensions": "1,136m x 28m (07/25)",
    "latitude": "23 50 02.56 N",
    "longitude": "086 25 30.94 E"
  },
  {
    "img": "air45",
    "airportName": "VEGT / GAU / Lokpriya Gopinath Bordoloi International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0750 UTC - 0920 UTC (Mon and Fri)",
    "customsImmigration": "YES",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Airport of Entry, Customs Yes",
    "airportType": "International",
    "address": "Borjhar, Guwahati, Assam 781015",
    "runwayDimensions": "3,103m x 45m (02/20)",
    "latitude": "26 06 21.93 N",
    "longitude": "091 35 09.38 E"
  },
  {
    "img": "air46",
    "airportName": "VEGY / GAY / Gaya International Airport",
    "airportOperatingHours": "0520-1130 HR",
    "airportRestrictions": "NIL",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Customs Yes",
    "airportType": "International",
    "address": "Gaya, Bihar 823004",
    "runwayDimensions": "2,287m x 45m (10/28)",
    "latitude": "24 44 40 N",
    "longitude": "084 57 04 E"
  },
  {
    "img": "air47",
    "airportName": "VEIM / IMF / Imphal International Airport",
    "airportOperatingHours": "0240 UTC – 1215 UTC (Daily)",
    "airportRestrictions": "NIL",
    "customsImmigration": "Only with prior approval for special cases",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Customs & Immigration Not Listed",
    "airportType": "International",
    "address": "NH 150, Imphal, Manipur 795140",
    "runwayDimensions": "2,746m x 45m (04/22)",
    "latitude": "24 45 36 N",
    "longitude": "093 53 48 E"
  },
  {
    "img": "air48",
    "airportName": "VEJS / IXW / Sonari Airport",
    "airportOperatingHours": "Prior Notice 24 HR Required",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "CAT-6 within ATS HR",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Airport Road, Sonari, Jamshedpur, Jharkhand",
    "runwayDimensions": "1,030m x 30m (08/26)",
    "latitude": "22 48 47.56 N",
    "longitude": "086 10 07.84 E"
  },
  {
    "img": "air49",
    "airportName": "VEKO / HJR / Khajuraho Airport",
    "airportOperatingHours": "0700 UTC - 0900 UTC & 1100 UTC - 1300 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No, Customs No",
    "airportType": "Domestic",
    "address": "Chhatarpur District, Khajuraho, Madhya Pradesh",
    "runwayDimensions": "2,286m x 45m (01/19)",
    "latitude": "N 24 49.2",
    "longitude": "E 079 55.1"
  },
  {
    "img": "air50",
    "airportName": "VEPT / PAT / Jay Prakash Narayan International Airport",
    "airportOperatingHours": "0145 UTC – 1630 UTC Daily",
    "airportRestrictions": "Nil",
    "customsImmigration": "NO",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Airport of Entry Yes, Customs Yes",
    "airportType": "International",
    "address": "Shaheed Pir Ali Khan Marg, Near Sheikhpura, Patna, Bihar 800014",
    "runwayDimensions": "2,072m x 45m (07/25)",
    "latitude": "25 35 28.74 N",
    "longitude": "085 05 16.77 E"
  },
  {
    "img": "air51",
    "airportName": "VERC / IXR / Birsa Munda Airport",
    "airportOperatingHours": "0200 UTC - 1610 UTC",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No, Customs No",
    "airportType": "Domestic",
    "address": "Airport Road, Ranchi, Jharkhand",
    "runwayDimensions": "2,748m x 45m (13/31)",
    "latitude": "23 18 51.30 N",
    "longitude": "085 19 18.03 E"
  },
  {
    "img": "air52",
    "airportName": "VIAG / AGR / Agra Air Force Station",
    "airportOperatingHours": "Sunrise to Sunset",
    "airportRestrictions": "Nil",
    "customsImmigration": "YES",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "N/A",
    "airportType": "Military/Public",
    "address": "59/10, VIP Road, Agra, Uttar Pradesh 282001",
    "runwayDimensions": "2,743m x 45m (05/23) & 1,818m x 45m (12/30)",
    "latitude": "27 09 20.99 N",
    "longitude": "077 52 39.21 E"
  },
  {
    "img": "air53",
    "airportName": "VIAR / ATQ / Sri Guru Ram Das Jee International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "1100 UTC – 1300 UTC Daily - No LDG / No TK OFF",
    "customsImmigration": "H24",
    "airportFireCategory": "VIII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Airport of Entry Yes, Customs Yes",
    "airportType": "Joint Civil/Military",
    "address": "Ajnala Rd, Rajasansi, Amritsar, Punjab 143101",
    "runwayDimensions": "3,658m x 45m (16/34)",
    "latitude": "31 42 28 N",
    "longitude": "074 47 57 E"
  },
  {
    "img": "air54",
    "airportName": "VIBR / KUU / Bhuntar Airport",
    "airportOperatingHours": "Daily 0130 UTC - 0630 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No, Customs No",
    "airportType": "Domestic",
    "address": "Bhuntar, Kullu, Himachal Pradesh",
    "runwayDimensions": "1,064m x 30m (16/34)",
    "latitude": "31 52 36.14 N",
    "longitude": "077 09 15.72 E"
  },
  {
    "img": "air55",
    "airportName": "VICG / IXC / Chandigarh Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "1700 UTC – 0030 UTC (Daily)",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Customs Airport",
    "airportType": "Joint Civil/Military",
    "address": "New Civil Air Terminal, Mohali District, Sahibzada Ajit Singh Nagar, Punjab 140306",
    "runwayDimensions": "3,200m x 45m (11/29)",
    "latitude": "30 40 29 N",
    "longitude": "76 47 26 E"
  },
  {
    "img": "air56",
    "airportName": "VIDN / DED / Jolly Grant Airport",
    "airportOperatingHours": "Daily 0200-1450 HR",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "CAT 4/6 (Refer Watch Hrs NOTAM)",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No, Customs No",
    "airportType": "Civil",
    "address": "Airport Road, Dehradun, Uttarakhand",
    "runwayDimensions": "2,140m x 45m (08/26)",
    "latitude": "30 11 22.88 N",
    "longitude": "078 10 48.92 E"
  },
  {
    "img": "air57",
    "airportName": "VIGR / GWL / Gwalior Airport",
    "airportOperatingHours": "24 HR Prior Notice Required",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Joint Military/Public",
    "address": "Maharajpura, Gwalior, Madhya Pradesh",
    "runwayDimensions": "2,743m x 45m (06/24)",
    "latitude": "26 17 36.01 N",
    "longitude": "078 13 39.91 E"
  },
  {
    "img": "air58",
    "airportName": "VIJO / JDH / Jodhpur Airport",
    "airportOperatingHours": "0130-1230 HR",
    "airportRestrictions": "NIL",
    "customsImmigration": "N/A",
    "airportFireCategory": "This is a defence airport, and information is strictly available upon request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Airport of Entry No",
    "airportType": "Civil Enclave",
    "address": "Authority of India Civil Airport, Jodhpur, Rajasthan",
    "runwayDimensions": "2,743m x 45m (05/23)",
    "latitude": "26 15 03.93 N",
    "longitude": "073 02 55.93 E"
  },
  {
    "img": "air59",
    "airportName": "VIJP / JAI / Jaipur International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0900 UTC - 1100 UTC (Mon - Sat)",
    "customsImmigration": "H24",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "International",
    "address": "Airport Road, Sanganer, Jaipur, Rajasthan 302011",
    "runwayDimensions": "3,407m x 45m (09/27)",
    "latitude": "26 49 27.09 N",
    "longitude": "075 48 43.78 E"
  },
  {
    "img": "air60",
    "airportName": "VIJR / JSA / Jaisalmer Airport",
    "airportOperatingHours": "0130 UTC – 1220 UTC Daily",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Air Force School Rd, Shastri Nagar, Jaisalmer, Rajasthan",
    "runwayDimensions": "2,743m x 46m (04/22)",
    "latitude": "26 53 19.15 N",
    "longitude": "070 51 53.88 E"
  },
  {
    "img": "air61",
    "airportName": "VIKG / KQH / Kishangarh Airport",
    "airportOperatingHours": "72 HR Prior Notice Required for Non-Scheduled Flights",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Ajmer Road, Kishangarh, Rajasthan",
    "runwayDimensions": "2,000m x 45m (05/23)",
    "latitude": "26 35 28 N",
    "longitude": "074 48 47 E"
  },
  {
    "img": "air62",
    "airportName": "VILD / LUH / Sahnewal Airport",
    "airportOperatingHours": "WED, THU 0630 UTC - 0830 UTC",
    "airportRestrictions": "NIL (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Sahnewal, Punjab",
    "runwayDimensions": "1,463m x 30m (12/30)",
    "latitude": "30 51 16.85 N",
    "longitude": "075 57 09.33 E"
  },
  {
    "img": "air63",
    "airportName": "VILH / IXL / Kushok Bakula Rimpochee Airport",
    "airportOperatingHours": "0030 UTC – 1530 UTC Daily",
    "airportRestrictions": "Nil as per ATS",
    "customsImmigration": "N/A",
    "airportFireCategory": "This is a defence airport, and information is strictly available upon request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Airport Authority Of India KBR Airport Leh (J&K)",
    "runwayDimensions": "2,755m x 46m (07/25)",
    "latitude": "34 08 09.14 N",
    "longitude": "077 32 47.45 E"
  },
  {
    "img": "air64",
    "airportName": "VILK / LKO / Chaudhary Charan Singh International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0400 UTC – 0730 UTC - No LDG / No TK OFF – Every Wednesday",
    "customsImmigration": "H24",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes, Customs/Immigration",
    "airportType": "International",
    "address": "Amausi, Lucknow, Uttar Pradesh 226009",
    "runwayDimensions": "2,744m x 45m (09/27)",
    "latitude": "26 45 43 N",
    "longitude": "080 53 00 E"
  },
  {
    "img": "air65",
    "airportName": "VIPT / PGH / Pant Nagar Airport",
    "airportOperatingHours": "DLY 0200 UTC - 1450 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "AVBL. As Per Category",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Udham Singh Nagar, Pantnagar, Uttarakhand",
    "runwayDimensions": "1,372m x 30m (10/28)",
    "latitude": "29 02 00.27 N",
    "longitude": "079 28 25.48 E"
  },
  {
    "img": "air66",
    "airportName": "VISR / SXR / Srinagar International Airport",
    "airportOperatingHours": "0030 UTC – 1330 UTC (DLY)",
    "airportRestrictions": "Nil",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "International",
    "address": "Airport Authority Of India Civil Enclave Jammu (J&K)",
    "runwayDimensions": "3,685m x 46m (13/31)",
    "latitude": "33 59 13.70 N",
    "longitude": "074 46 27.30 E"
  },
  {
    "img": "air67",
    "airportName": "VOBG / HAL / HAL Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "N/A",
    "airportType": "Military/Civil",
    "address": "Old Airport Rd, HAL Airport Area, HAL, Bengaluru, Karnataka",
    "runwayDimensions": "3,307m x 61m (09/27)",
    "latitude": "12 56 59.95 N",
    "longitude": "077 40 05.54 E"
  },
  {
    "img": "air68",
    "airportName": "VOBL / BLR / Kempegowda International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "International",
    "address": "KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300",
    "runwayDimensions": "4,000m x 45m (09R/27L)",
    "latitude": "N13 11.5",
    "longitude": "E077 42.2"
  },
  {
    "img": "air69",
    "airportName": "VOBM / IXG / Belgaum Airport",
    "airportOperatingHours": "MON, FRI, SUN 0215-0845 & 1025-1450; TUE & THU 0215-0420 & 0700-1535; WED 0215-0420 & 0700-0905 & 1025-1535; SAT 0215-1450",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "Bagalkot-Belgaum Rd, Belgaum, Sambra, Karnataka",
    "runwayDimensions": "2,300m x 45m (08/26)",
    "latitude": "15 51 33.43 N",
    "longitude": "074 37 05.85 E"
  },
  {
    "img": "air70",
    "airportName": "VOBZ / VGA / Vijayawada Airport",
    "airportOperatingHours": "0135 UTC - 1630 UTC (Daily)",
    "airportRestrictions": "Nil",
    "customsImmigration": "YES",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "International",
    "address": "Krishna District, Gannavaram, Andhra Pradesh 521102",
    "runwayDimensions": "3,360m x 45m (08/26)",
    "latitude": "16 31 44 N",
    "longitude": "80 47 45 E"
  },
  {
    "img": "air71",
    "airportName": "VOCB / CJB / Coimbatore International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Avinashi Road, Coimbatore, Tamil Nadu 641014",
    "runwayDimensions": "2,990 m × 45 m (05/23)",
    "latitude": "11 01 36 N",
    "longitude": "077 02 30 E"
  },
  {
    "img": "air72",
    "airportName": "VOCI / COK / Cochin International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Every 2nd Tuesday RWY Closure 0830 UTC – 1200 UTC",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Airport Rd, Kochi, Kerala 683111",
    "runwayDimensions": "3,400 m × 45 m (09/27)",
    "latitude": "10 09 07.18 N",
    "longitude": "076 24 06.86 E"
  },
  {
    "img": "air73",
    "airportName": "VOCL / CCJ / Calicut International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0930 UTC - 1230 UTC (Tue)",
    "customsImmigration": "H24",
    "airportFireCategory": "VIII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Calicut Airport P.O, Malappuram Dist.",
    "runwayDimensions": "2,850 m × 45 m (10/28)",
    "latitude": "11 08 12.62 N",
    "longitude": "075 57 19.08 E"
  },
  {
    "img": "air74",
    "airportName": "VOGO / GOI / Goa International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0700-1000 Daily; 1000-1100 Mon-Fri; 0200-0600 Sat",
    "customsImmigration": "H24",
    "airportFireCategory": "VIII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "Civil Enclave / Military",
    "address": "Goa International Airport Dabolim -403801",
    "runwayDimensions": "3,458 m × 45 m (08/26)",
    "latitude": "N15 22.8",
    "longitude": "E073 49.4"
  },
  {
    "img": "air75",
    "airportName": "VOHS / HYD / Rajiv Gandhi International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Shamshabad, Hyderabad, Telangana 500409",
    "runwayDimensions": "09L/27R: 3,707m x 45m; 09R/27L: 4,260m x 60m",
    "latitude": "N17 14.4",
    "longitude": "E078 25.5"
  },
  {
    "img": "air76",
    "airportName": "VOHY / BPM / Begumpet Airport",
    "airportOperatingHours": "0830 - 1600 HR",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No (Domestic Airport)",
    "airportType": "Civil Enclave / Military",
    "address": "Begumpet Airport Road, Begumpet, Hyderabad, Telangana 500016",
    "runwayDimensions": "3,230 m × 45 m (09/27)",
    "latitude": "17 27 11.22 N",
    "longitude": "078 28 03.31 E"
  },
  {
    "img": "air77",
    "airportName": "VOMD / IXM / Madurai Airport",
    "airportOperatingHours": "0130-1625 HR",
    "airportRestrictions": "Nil",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Customs Airport)",
    "airportType": "Customs Airport",
    "address": "Airport Road, Madurai, Tamil Nadu",
    "runwayDimensions": "2,285 m × 45 m (09/27)",
    "latitude": "09 50 04.23 N",
    "longitude": "078 05 36.16 E"
  },
  {
    "img": "air78",
    "airportName": "VOML / IXE / Mangalore International Airport",
    "airportOperatingHours": "0000 UTC – 1830 UTC & 2300 UTC-2359 UTC DLY",
    "airportRestrictions": "NIL",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "Civil International",
    "address": "Mangalore Airport, Kenjar Bajpe",
    "runwayDimensions": "06/24: 2,450m; 06/27: 1,600m",
    "latitude": "12 57 40.56 N",
    "longitude": "074 53 24.25 E"
  },
  {
    "img": "air79",
    "airportName": "VOMM / MAA / Chennai International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0830-0930 No LDG Every Tue & Sat; 0930-1130 No LDG/TKOFF for Wide Body ACFT Every Tue & Sat",
    "customsImmigration": "H24",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "GST Rd, Meenambakkam, Chennai, Tamil Nadu 600027",
    "runwayDimensions": "07/25: 3,658 m × 45 m; 12/30: 2,045 m × 45 m",
    "latitude": "12 59 39.89 N",
    "longitude": "080 10 49.86 E"
  },
  {
    "img": "air80",
    "airportName": "VOMY / MYQ / Mysore Airport",
    "airportOperatingHours": "MON-SAT 0430-1500; SUN 0600-0800 & 1230-1430",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Kozhikode Mysore Kollegal Highway, Mysore, Karnataka",
    "runwayDimensions": "1,740 m × 30 m (09/27)",
    "latitude": "N12 13.9",
    "longitude": "E076 39.4"
  },
  {
    "img": "air81",
    "airportName": "VOPB / IXZ / Veer Savarkar International Airport",
    "airportOperatingHours": "DLY 0015-1045 HRS",
    "airportRestrictions": "Nil",
    "customsImmigration": "As Per ATS",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Military / Civil Enclave",
    "address": "Andaman and Nicobar Islands, Port Blair",
    "runwayDimensions": "3,290 m × 45 m (04/22)",
    "latitude": "11 38 28 N",
    "longitude": "092 43 47 E"
  },
  {
    "img": "air82",
    "airportName": "VOPC / PNY / Pondicherry Airport",
    "airportOperatingHours": "0530 UTC – 0730 UTC MON-FRI",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Lawspet, Pondicherry",
    "runwayDimensions": "1,500 m × 30 m (07/25)",
    "latitude": "11 58 07.40 N",
    "longitude": "079 48 36.21 E"
  },
  {
    "img": "air83",
    "airportName": "VORY / RJA / Rajahmundry Airport",
    "airportOperatingHours": "DLY 0155-0745 & 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Madhurapudi, Andhra Pradesh",
    "runwayDimensions": "3,165 m × 45 m (05/23)",
    "latitude": "17 06 37.30 N",
    "longitude": "081 49 05.55 E"
  },
  {
    "img": "air84",
    "airportName": "VOTP / TIR / Tirupati Airport",
    "airportOperatingHours": "DLY 0200-1605 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Renigunta Airport Rd, Tirupati, Andhra Pradesh",
    "runwayDimensions": "2,286 m × 45 m (08/26)",
    "latitude": "13 37 56.97 N",
    "longitude": "079 32 35.72 E"
  },
  {
    "img": "air85",
    "airportName": "VOTR / TRZ / Tiruchirappalli International Airport (TRZ)",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Yes",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Tiruchirappalli, Tamil Nadu, India",
    "runwayDimensions": "~2,750 m × 45 m (09/27)",
    "latitude": "10.7654° N",
    "longitude": "78.7097° E"
  },
  {
    "img": "air86",
    "airportName": "VOTV / TRV / Trivandrum International Airport (TRV)",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Yes",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "Civil International",
    "address": "Airport Rd, Chacka, Thiruvananthapuram, Kerala 695008",
    "runwayDimensions": "3,400 m × 45 m (14/32)",
    "latitude": "8.4822° N",
    "longitude": "76.9201° E"
  },
  {
    "img": "air87",
    "airportName": "VOVZ / VTZ / Visakhapatnam International Airport (VTZ)",
    "airportOperatingHours": "0230-1430 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "Yes (Customs Only)",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "Joint Civil / Military",
    "address": "NH16, opp. Viman Nagar, Visakhapatnam, Andhra Pradesh 530009",
    "runwayDimensions": "10/28: 3,050 m × 45 m; 05/23: 1,829 m × 45 m",
    "latitude": "17.7231° N",
    "longitude": "83.2243° E"
  },
  {
    "img": "air88",
    "airportName": "VOKN / CNN / Kannur International Airport (CNN)",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Yes",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Yes (Customs/Immigration)",
    "airportType": "Civil International",
    "address": "Mattannur, Kannur - 670702, Kerala, India",
    "runwayDimensions": "3,050 m × 45 m (07/25)",
    "latitude": "11.9144° N",
    "longitude": "75.5463° E"
  },
  {
    "img": "air89",
    "airportName": "VOGA / GOX / Manohar International Airport (GOX)",
    "airportOperatingHours": "H24",
    "airportRestrictions": "0900–1130 UTC on 3rd Wednesday",
    "customsImmigration": "Yes",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "Civil International",
    "address": "Mopa, North Goa, Goa, India",
    "runwayDimensions": "3,500 m (Code 'E' compliant)",
    "latitude": "15.7333° N",
    "longitude": "73.8000° E"
  },
  {
    "img": "air90",
    "airportName": "VERP / RPR / Swami Vivekananda Airport (RPR)",
    "airportOperatingHours": "0115-1700 UTC",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "No",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Ramchandi, Naya Raipur, Raipur, Chhattisgarh 492015",
    "runwayDimensions": "2,286 m × 45 m (06/24) [Being extended]",
    "latitude": "21.1804° N",
    "longitude": "81.7388° E"
  },
  {
    "img": "air91",
    "airportName": "VAMA / — / Mundra Airport (MUNDRA)",
    "airportOperatingHours": "0400-1230 UTC MON-SAT",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "III",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "Not Listed",
    "airportType": "Private",
    "address": "Gandhidham, Kutch, Gujarat, India",
    "runwayDimensions": "3,946 m × 60 m (05/23) (Proposed)",
    "latitude": "23.0236° N",
    "longitude": "70.1786° E"
  },
  {
    "img": "air92",
    "airportName": "VOCP / CDP / Kadapa Airport (CDP)",
    "airportOperatingHours": "0400-1230 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Kadapa, Andhra Pradesh, India",
    "runwayDimensions": "2,514 m × 45 m (11/29)",
    "latitude": "14.5119° N",
    "longitude": "78.7728° E"
  },
  {
    "img": "air93",
    "airportName": "VEMN / DIB / Dibrugarh Airport (DIB)",
    "airportOperatingHours": "0930-1530 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Titadimoru Gaon, Assam, India",
    "runwayDimensions": "1,829 m × 45 m (05/23) [Being extended]",
    "latitude": "27.4822° N",
    "longitude": "95.0169° E"
  },
  {
    "img": "air94",
    "airportName": "VELR / IXI / Lilabari Airport (IXI)",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "North Lakhimpur, Assam, India",
    "runwayDimensions": "2,286 m × 45 m (04/22)",
    "latitude": "27.2525° N",
    "longitude": "94.1017° E"
  },
  {
    "img": "air95",
    "airportName": "VAKE / IXY / Kandla Airport (IXY)",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Anjar, Kutch, Gujarat, India",
    "runwayDimensions": "1,524 m × 30 m (05/23)",
    "latitude": "23.1203° N",
    "longitude": "70.1064° E"
  },
  {
    "img": "air96",
    "airportName": "VABV / BHU / Bhavnagar Airport (BHU)",
    "airportOperatingHours": "0930-1800 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Bhavnagar, Gujarat, India",
    "runwayDimensions": "1,920 m × 45 m (07/25)",
    "latitude": "21.7527° N",
    "longitude": "72.1818° E"
  },
  {
    "img": "air97",
    "airportName": "VAKP / KLH / Kolhapur Airport (KLH)",
    "airportOperatingHours": "0930-1800 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Ujalaiwadi, Kolhapur, Maharashtra 416004",
    "runwayDimensions": "1,930 m × 45 m (07/25) (Being extended)",
    "latitude": "16.6553° N",
    "longitude": "74.2847° E"
  },
  {
    "img": "air98",
    "airportName": "VEBI / SHL / Shillong Airport (SHL)",
    "airportOperatingHours": "0930-1800 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Shillong Airport Road, Umroi, Meghalaya 793103",
    "runwayDimensions": "1,829 m × 46 m (04/22)",
    "latitude": "25.7038° N",
    "longitude": "91.9798° E"
  },
  {
    "img": "air99",
    "airportName": "VAJL / JLG / Jalgaon Airport (JLG)",
    "airportOperatingHours": "0930-1800 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "6 km SE of Jalgaon, Maharashtra, India",
    "runwayDimensions": "1,700 m × 45 m (09/27)",
    "latitude": "20.9898° N",
    "longitude": "75.5970° E"
  },
  {
    "img": "air100",
    "airportName": "VEMR / DMU / Dimapur Airport (DMU)",
    "airportOperatingHours": "0930-1800 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Dimapur, Nagaland, India",
    "runwayDimensions": "2,290 m × 45 m (12/30)",
    "latitude": "25.8764° N",
    "longitude": "93.7700° E"
  },
  {
    "img": "air101",
    "airportName": "VEJH / JRG / Veer Surendra Sai Airport (JRG)",
    "airportOperatingHours": "0400-1230 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "SH10, Durlaga, Jharsuguda, Odisha 768204",
    "runwayDimensions": "2,391 m × 45 m (06/24)",
    "latitude": "21.9133° N",
    "longitude": "84.0519° E"
  },
  {
    "img": "air102",
    "airportName": "VEDG / RDP / Kazi Nazrul Islam Airport (RDP)",
    "airportOperatingHours": "0400-1230 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Andal, Durgapur, West Bengal 713363",
    "runwayDimensions": "2,800 m × 45 m (16/34)",
    "latitude": "23.6417° N",
    "longitude": "87.2317° E"
  },
  {
    "img": "air103",
    "airportName": "VISM / SLV / Shimla Airport (SLV)",
    "airportOperatingHours": "0400-1230 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Jubbarhatti, Shimla, Himachal Pradesh, India",
    "runwayDimensions": "1,230 m × 30 m (14/32)",
    "latitude": "31.0818° N",
    "longitude": "77.0680° E"
  },
  {
    "img": "air104",
    "airportName": "VOGB / GBI / Kalaburagi Airport (GBI)",
    "airportOperatingHours": "H24",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "12 km east of Kalaburagi, Karnataka, India",
    "runwayDimensions": "3,175 m × 45 m (09/27)",
    "latitude": "17.3083° N",
    "longitude": "76.8758° E"
  },
  {
    "img": "air105",
    "airportName": "VAHB / HBX / Hubli Airport (HBX)",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Gokul Rd, Gandhi Nagar, Hubballi, Karnataka 580030",
    "runwayDimensions": "2,600 m × 45 m (08/26)",
    "latitude": "15.3598° N",
    "longitude": "75.0848° E"
  },
  {
    "img": "air106",
    "airportName": "VOAT / AGX / Agatti Airport",
    "airportOperatingHours": "M-F 0400-1230Z, OT/OR, 24 Hrs PNR",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Regional Civil",
    "address": "Agatti Island, Lakshadweep",
    "runwayDimensions": "1,204 m × 30 m (04/22)",
    "latitude": "10.8250° N",
    "longitude": "72.1767° E"
  },
  {
    "img": "air107",
    "airportName": "VAOZ / ISK / Nashik Ozar Airport",
    "airportOperatingHours": "Mon-Sat 0230-0900 UTC, OT/OR",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Yes (Customs Only)",
    "airportFireCategory": "IX",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Military / Civil Enclave",
    "address": "Ozar, Nashik, Maharashtra 422207",
    "runwayDimensions": "3,000 m × 45 m (08/26)",
    "latitude": "20.1120° N",
    "longitude": "73.8940° W"
  },
  {
    "img": "air108",
    "airportName": "VOTK / TCR / Tuticorin Airport",
    "airportOperatingHours": "M-F 0400-1200Z, OT/OR, 24 Hrs PNR",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Vagaikulam, Thoothukudi, Tamil Nadu",
    "runwayDimensions": "1,349 m × 45 m (10/28) [Being extended]",
    "latitude": "8.7217° N",
    "longitude": "78.0267° E"
  },
  {
    "img": "air109",
    "airportName": "VELP / AJL / Lengpui Airport",
    "airportOperatingHours": "M-F 0400-1230Z",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Lengpui, Mamit District, Aizawl, Mizoram",
    "runwayDimensions": "2,500 m × 45 m (17/35)",
    "latitude": "23.8383° N",
    "longitude": "92.6267° E"
  },
  {
    "img": "air110",
    "airportName": "VAJJ / — / Juhu Airport",
    "airportOperatingHours": "M-F 0930-1800L",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "General Aviation",
    "address": "Juhu Tara Rd, Juhu, Mumbai, Maharashtra 400056",
    "runwayDimensions": "1,143 m × 30 m (08/26)",
    "latitude": "19.0967° N",
    "longitude": "72.8350° E"
  },
  {
    "img": "air111",
    "airportName": "VECO / COH / Cooch Behar Airport",
    "airportOperatingHours": "M-F 0400-1230Z, OT/OR, 24 Hrs PNR",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Cooch Behar, West Bengal",
    "runwayDimensions": "1,069 m × 30 m (04/22)",
    "latitude": "26.3300° N",
    "longitude": "89.4667° E"
  },
  {
    "img": "air112",
    "airportName": "VIHR / HSS / Hisar Airport",
    "airportOperatingHours": "0330-1130 UTC",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "Not Listed",
    "airportType": "Civil Domestic",
    "address": "Kumharia Rd, Police Line Hisar, Khara Kheri, Hisar, Haryana 125001",
    "runwayDimensions": "3,000 m × 45 m (12/30)",
    "latitude": "29.1775° N",
    "longitude": "75.7548° E"
  },
  {
    "img": "air113",
    "airportName": "VIKO / KTU / Kota Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Kota, Rajasthan",
    "runwayDimensions": "1,242 m × 45 m (08/26)",
    "latitude": "25.1617° N",
    "longitude": "75.8433° E"
  },
  {
    "img": "air114",
    "airportName": "VOJK / — / Jakkur Airfield",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not Listed",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil - General Aviation & Training",
    "address": "Jakkur, Bangalore, Karnataka",
    "runwayDimensions": "900 m × 20 m (08/26)",
    "latitude": "13.0769° N",
    "longitude": "77.5978° E"
  },
  {
    "img": "air115",
    "airportName": "VIBT / BUP / Bathinda Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Military / Civil Enclave",
    "address": "Bathinda, Punjab",
    "runwayDimensions": "2,804 m × 45 m (13/31)",
    "latitude": "30.2690° N",
    "longitude": "74.7550° E"
  },
  {
    "img": "air116",
    "airportName": "VIAX / AIP / Adampur Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Military / Civil Enclave",
    "address": "Adampur, Jalandhar, Punjab",
    "runwayDimensions": "2,755 m × 45 m (13/31)",
    "latitude": "31.4333° N",
    "longitude": "75.7600° E"
  },
  {
    "img": "air117",
    "airportName": "VASL / SSE / Solapur Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Civil Domestic",
    "address": "Solapur, Maharashtra",
    "runwayDimensions": "2,009 m × 45 m (15/33)",
    "latitude": "17.6283° N",
    "longitude": "75.9350° E"
  },
  {
    "img": "air118",
    "airportName": "VIBK / BKB / Nal Airport (BKB)",
    "airportOperatingHours": "24/7 (Check with PPR)",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not Listed",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Military / Public",
    "address": "Nal, Bikaner, Rajasthan 334001",
    "runwayDimensions": "05/23: 2,731m x 45m (Asphalt)",
    "latitude": "28.07060° N",
    "longitude": "73.20720° E"
  },
  {
    "img": "air119",
    "airportName": "VIDX / HDO / Hindon Airport (HDO)",
    "airportOperatingHours": "Daylight hours only (sunrise to sunset)",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Yes",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "Yes (Customs & Immigration)",
    "airportType": "Public / Military (Civil Enclave)",
    "address": "Hindon Air Force Station, Ghaziabad, Uttar Pradesh 201015",
    "runwayDimensions": "09/27: 2,743m x 45m (Asphalt)",
    "latitude": "28.7058° N",
    "longitude": "77.3422° E"
  },
  {
    "img": "air120",
    "airportName": "VOBI / BEP / Bellary Airport (BEP)",
    "airportOperatingHours": "Daylight only (VFR)",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes (coordination available)",
    "ciqAvailability": "No",
    "airportType": "Civil",
    "address": "Bellary, Karnataka",
    "runwayDimensions": "12/30: 1,106m x 15m (Asphalt)",
    "latitude": "15°09'46\"N",
    "longitude": "76°52'58\"E"
  },
  {
    "img": "air121",
    "airportName": "VEKU / IXS / Silchar Airport (IXS)",
    "airportOperatingHours": "0030-1100Z",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes",
    "ciqAvailability": "No",
    "airportType": "Domestic (Civil Enclave)",
    "address": "Kumbhirgram, Assam 788031",
    "runwayDimensions": "06/24: 2,286m x 45m (Asphalt)",
    "latitude": "24.91306° N",
    "longitude": "92.97861° E"
  },
  {
    "img": "air122",
    "airportName": "VAND / NDC / Shri Guru Gobind Singh Ji Airport (NDC)",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Public",
    "address": "Sangvigaon, Hingoli Road, Nanded, Maharashtra 431605",
    "runwayDimensions": "10/28: 2,300m x 45m (Asphalt/Concrete)",
    "latitude": "19°10.9'N",
    "longitude": "77°19.4'E"
  },
  {
    "img": "air123",
    "airportName": "VEGK / GOP / Gorakhpur Airport (GOP)",
    "airportOperatingHours": "2026-07-24 00:00:00",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not Listed",
    "ciqAvailability": "No",
    "airportType": "Military / Public",
    "address": "Airport Area, Gorakhpur, Uttar Pradesh 273001",
    "runwayDimensions": "11/29: 2,743m x 46m (Asphalt)",
    "latitude": "26.73944° N",
    "longitude": "83.44944° E"
  },
  {
    "img": "air124",
    "airportName": "VIJU / IXJ / Jammu Airport (IXJ)",
    "airportOperatingHours": "2026-07-24 00:00:00",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes (restaurants, cafes)",
    "ciqAvailability": "No",
    "airportType": "Public / Military",
    "address": "Civil Airport, Raipur Satwari, Jammu, J&K 180003",
    "runwayDimensions": "18/36: 2,438m x 45m (Asphalt)",
    "latitude": "32.68917° N",
    "longitude": "74.83750° E"
  },
  {
    "img": "air125",
    "airportName": "VIPK / IXP / Pathankot Airport (IXP)",
    "airportOperatingHours": "2026-07-24 00:00:00",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "No",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes (canteen)",
    "ciqAvailability": "No",
    "airportType": "Medium (Joint Civil/Military)",
    "address": "Civil Airport, Pathankot, Punjab",
    "runwayDimensions": "01/19: 2,734m x 46m (Asphalt)",
    "latitude": "32.23361° N",
    "longitude": "75.63444° E"
  },
  {
    "img": "air126",
    "airportName": "VAAK / AKD / Akola Airport (AKD)",
    "airportOperatingHours": "2026-07-24 00:00:00",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not Listed",
    "airportFireCategory": "Not Listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Yes (coordination available)",
    "ciqAvailability": "Not Listed",
    "airportType": "Civil",
    "address": "Akola, Maharashtra",
    "runwayDimensions": "10/28: 1,219m x 46m (Concrete/Asphalt)",
    "latitude": "20.69611° N",
    "longitude": "77.05889° E"
  },
  {
    "img": "air127",
    "airportName": "VADU / DIU / Diu Airport",
    "airportOperatingHours": "2026-07-24 00:00:00",
    "airportRestrictions": "Nil",
    "customsImmigration": "Not a designated Airport of Entry; for international charters, CIQ may be available on request",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Catering available on prior arrangement",
    "ciqAvailability": "Not Listed",
    "remarks": "Verify CIQ and fuel availability for international operations",
    "airportType": "Domestic",
    "address": "Diu, Dadra and Nagar Haveli and Daman and Diu",
    "runwayDimensions": "05/23: 1,823m x 45m (Asphalt)",
    "latitude": "20.7142° N",
    "longitude": "70.9219° E"
  },
  {
    "img": "air128",
    "airportName": "VEBK / N/A / Bokaro Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Catering can be arranged",
    "ciqAvailability": "Not Listed",
    "remarks": "This is a small domestic airport primarily for General Aviation",
    "airportType": "Public",
    "address": "Bokaro, Jharkhand",
    "runwayDimensions": "13/31: 2,100m x 30m (Asphalt)",
    "latitude": "23.6435° N",
    "longitude": "86.1489° E"
  },
  {
    "img": "air129",
    "airportName": "VI40 / N/A / Karnal Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not listed",
    "ciqAvailability": "Not Listed",
    "remarks": "Small airstrip mainly used by a flying club",
    "airportType": "Civil Government",
    "address": "3 km east of Karnal, Haryana",
    "runwayDimensions": "13/31: 914m x 46m (Asphalt)",
    "latitude": "29.7147° N",
    "longitude": "77.0374° E"
  },
  {
    "img": "air130",
    "airportName": "VIPL / N/A / Patiala Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil",
    "customsImmigration": "Not a designated Airport of Entry; may have limited CIQ for chartered international flights",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not listed",
    "ciqAvailability": "No",
    "remarks": "A small airstrip primarily for General Aviation",
    "airportType": "Joint Civil / Military",
    "address": "Patiala, Punjab",
    "runwayDimensions": "15/33: 1,167m x 46m (Asphalt)",
    "latitude": "30.3148° N",
    "longitude": "76.3645° E"
  },
  {
    "img": "air131",
    "airportName": "VETZ / TEZ / Tezpur Airport",
    "airportOperatingHours": "Daylight hours only; other times on request with 6 hours prior notice",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Catering available on prior request",
    "ciqAvailability": "No",
    "remarks": "IAF station, prior permission required for operations",
    "airportType": "Joint Civil / Military",
    "address": "Salonibari, Tezpur, Assam",
    "runwayDimensions": "04/22: 2,746m x 45m (Asphalt)",
    "latitude": "26.7091° N",
    "longitude": "92.7847° E"
  },
  {
    "img": "air132",
    "airportName": "VIST / TNI / Satna Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Catering can be arranged with prior request",
    "ciqAvailability": "No",
    "remarks": "Relatively new airport under UDAN scheme",
    "airportType": "Domestic",
    "address": "Satna, Madhya Pradesh",
    "runwayDimensions": "11/29: 1,200m x 30m (Asphalt)",
    "latitude": "24.5623° N",
    "longitude": "80.8550° E"
  },
  {
    "img": "air133",
    "airportName": "VOPN / PUT / Sri Sathya Sai Airport",
    "airportOperatingHours": "On Request; typically closed for 3 months around Apr-Jun",
    "airportRestrictions": "Nil",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not listed",
    "ciqAvailability": "No",
    "remarks": "Private airport, prior clearance from the trust is mandatory",
    "airportType": "Civil",
    "address": "Puttaparthi, Andhra Pradesh",
    "runwayDimensions": "09/27: 2,224m x 45m (Asphalt)",
    "latitude": "14.1492° N",
    "longitude": "77.7917° E"
  },
  {
    "img": "air134",
    "airportName": "VEPY / PYG / Pakyong Airport",
    "airportOperatingHours": "On Request; 24 hours prior notice for non-scheduled flights, 2 hours for scheduled flights",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "Not a designated Airport of Entry",
    "airportFireCategory": "Not listed",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Not listed",
    "ciqAvailability": "Not Listed",
    "remarks": "High-altitude airport (4,646 ft), seasonal operations",
    "airportType": "Public",
    "address": "Pakyong, near Gangtok, Sikkim",
    "runwayDimensions": "02/20: 1,700m x 30m (Concrete)",
    "latitude": "27.2272° N",
    "longitude": "88.5864° E"
  },
  {
    "img": "air135",
    "airportName": "VETJ / TEI / Tezu Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Civil",
    "address": "W4VQ+QGG, Tezu Lohitpur Rd, Tezu, Arunachal Pradesh 792001",
    "runwayDimensions": "04/22: 1,500m x 30m (Concrete)",
    "latitude": "27.9444 N",
    "longitude": "96.1388 E"
  },
  {
    "img": "air136",
    "airportName": "VEHO / HGI / Donyi Polo Airport",
    "airportOperatingHours": "DLY 0155-0745 & 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "Recommended from Hotel",
    "ciqAvailability": "No",
    "airportType": "Civil",
    "address": "Itanagar, Arunachal Pradesh",
    "runwayDimensions": "08/26: 2,300m x 45m (Concrete)",
    "latitude": "26.9718 N",
    "longitude": "93.6423 E"
  },
  {
    "img": "air137",
    "airportName": "VOKU / KJB / Kurnool Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "Not Listed",
    "airportType": "Domestic",
    "address": "P576+CJF, Kurnool - Nandyal Rd, Highway, Orvakal, Andhra Pradesh 518452",
    "runwayDimensions": "10/28: 2,000m x 30m (Asphalt)",
    "latitude": "15.7136° N",
    "longitude": "78.1615° E"
  },
  {
    "img": "air138",
    "airportName": "VERU / RUP / Rupsi Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Sukatikhata, Assam 783331",
    "runwayDimensions": "05/23: 1,829 m × 46 m (Asphalt)",
    "latitude": "26.1379° N",
    "longitude": "89.9083° E"
  },
  {
    "img": "air139",
    "airportName": "VEMZ / MZU / Muzaffarnagar Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No (Customs not present)",
    "airportType": "Civil (Under Construction)",
    "address": "Muzaffarnagar (MZA), Civil Lines North, Muzaffarnagar, Uttar Pradesh, India",
    "runwayDimensions": "11/29: 1,219 m × 30 m (Hard)",
    "latitude": "29.4833",
    "longitude": "77.7"
  },
  {
    "img": "air140",
    "airportName": "VEBU / PAB / Bilasa Devi Kevat Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public",
    "address": "X4V7+RVJ, Chakarbhatha, Chhattisgarh 495220",
    "runwayDimensions": "17/35: 1,535 m × 30 m (Asphalt)",
    "latitude": "17.728647",
    "longitude": "83.223549"
  },
  {
    "img": "air141",
    "airportName": "VOJV / VDY / Jindal Vijaynagar Airport",
    "airportOperatingHours": "24 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public",
    "address": "5JHH+97P, Kudligi Rd, Toranagallu, Karnataka 583123",
    "runwayDimensions": "13/31: 1,589 m × 30 m (Asphalt)",
    "latitude": "15.1785° N",
    "longitude": "76.6282° E"
  },
  {
    "img": "air142",
    "airportName": "VOVR / VOVR / Vellore Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public",
    "address": "W357+RCG, Abdullah Puram, Vellore, Tamil Nadu 632114",
    "runwayDimensions": "07/25: 850 m × 46 m (PEM)",
    "latitude": "12.9096° N",
    "longitude": "79.0636° E"
  },
  {
    "img": "air143",
    "airportName": "VIBY / BEK / Bareilly Airport",
    "airportOperatingHours": "0500 UTC – 1000 UTC DLY",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "This is a defence airport, and information is strictly available upon request.",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A",
    "airportType": "Domestic / Military",
    "address": "Pilibhit Road, mudiya ahmad nagar, Airport Area, Bareilly, Uttar Pradesh 243002",
    "runwayDimensions": "Not specifically listed, however, it is built at an IAF base and does have an asphalt runway",
    "latitude": "28.4242° N",
    "longitude": "79.4683° E"
  },
  {
    "img": "air144",
    "airportName": "VECX / KNU / Kanpur Airport",
    "airportOperatingHours": "Available on Request",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A",
    "airportType": "Domestic / Military",
    "address": "C9R7+CMJ, Kanpur, Uttar Pradesh",
    "runwayDimensions": "10/28: 1,484 ft (452 m) (Concrete)",
    "latitude": "26.4046° N",
    "longitude": "80.4124° E"
  },
  {
    "img": "air145",
    "airportName": "VIPG / NNS / Pithoragarh Airport",
    "airportOperatingHours": "72 HR PN REQ",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A",
    "airportType": "Public",
    "address": "Ormatha Village Khakhar, Naini, Saini, Uttarakhand 262501",
    "runwayDimensions": "14/32: 1,600 m × 30 m (Asphalt)",
    "latitude": "29.5914° N",
    "longitude": "80.2399° E"
  },
  {
    "img": "air146",
    "airportName": "VEPH / VEPH / Panagarh Airport",
    "airportOperatingHours": "72 HR PN REQ FOR NON SCHEDULE",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "NO",
    "airportFireCategory": "AS PER ATS",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "N/A",
    "airportType": "Military",
    "address": "Panagarh, West Bengal",
    "runwayDimensions": "15/33: 2,743 m × 46 m (Asphalt)",
    "latitude": "23.4743361111° N",
    "longitude": "87.4275083333° E"
  },
  {
    "img": "air147",
    "airportName": "VAKS / IXK / Keshod Airport",
    "airportOperatingHours": "WED, FRI, SUN 0950 UTC - 1115 UTC",
    "airportRestrictions": "NIL",
    "customsImmigration": "NO",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No (Airport of Entry)",
    "airportType": "Civil",
    "address": "General Aviation Lounge Terminal 1 D IGI Airport New Delhi-110037",
    "runwayDimensions": "05/23: 1,371 m × 45 m (Asphalt)",
    "latitude": "21.3180° N",
    "longitude": "70.2670° E"
  },
  {
    "img": "air148",
    "airportName": "VEDH / DBR / Darbhanga Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "Not an official entry point",
    "airportType": "Domestic / Military",
    "address": "Aerodrome Darbhanga, Ranipur, Darbhanga, Basdeopur, Bihar",
    "runwayDimensions": "10/28: 2,743 m × 46 m (Asphalt)",
    "latitude": "26.1928° N",
    "longitude": "85.9026° E"
  },
  {
    "img": "air149",
    "airportName": "VI43 / VI43 / Suratgarh Air Force Station",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Military",
    "address": "Rajasthan",
    "runwayDimensions": "05/23: 2,740 m × 45 m (Concrete)",
    "latitude": "29.3878° N",
    "longitude": "73.9039° E"
  },
  {
    "img": "air150",
    "airportName": "VOSX / VOSX / Sulur Coimbatore Air Force Station",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Military",
    "address": "Tamil Nadu",
    "runwayDimensions": "05/23: 2,516 m × 45 m (Asphalt)",
    "latitude": "11.0136003° N",
    "longitude": "77.1596985° E"
  },
  {
    "img": "air151",
    "airportName": "VOTJ / TJV / Thanjavur Air Force Station",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Military",
    "address": "Thanjavur, Pillaiyarpatti, Tamil Nadu 613005",
    "runwayDimensions": "07/25: 1,731 m × 46 m (Concrete)",
    "latitude": "10.7154° N",
    "longitude": "79.1074° E"
  },
  {
    "img": "air152",
    "airportName": "VIAM / VIAM / Ambala Air Force Station",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Public / Military",
    "address": "AMBALA",
    "runwayDimensions": "12/30: 2,811 m × 45 m (Concrete/Asphalt)",
    "latitude": "45.6092° N",
    "longitude": "1.8833° E"
  },
  {
    "img": "air153",
    "airportName": "VOAR / VOAR / INS Rajali",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Naval Air Station",
    "address": "Tamil Nadu",
    "runwayDimensions": "06/24: 4,103 m × 0 m (Asphalt concrete)",
    "latitude": "13.07120° N",
    "longitude": "79.69120° E"
  },
  {
    "img": "air154",
    "airportName": "VOCX / CBD / Car Nicobar Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Military",
    "address": "Andaman and Nicobar Islands",
    "runwayDimensions": "02/20: 2,717 m × 43 m (Concrete)",
    "latitude": "9.1557° N",
    "longitude": "92.8224° E"
  },
  {
    "img": "air155",
    "airportName": "VOCC / VOCC / INS Garuda Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "On Request",
    "customsImmigration": "NO",
    "airportFireCategory": "On Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A",
    "airportType": "Naval Air Station",
    "address": "Kerala",
    "runwayDimensions": "13/31: 1,414 m × 44 m (Asphalt)",
    "latitude": "9.947386° N",
    "longitude": "76.273081° E"
  },
  {
    "img": "air156",
    "airportName": "VEJR / JGB / Jagdalpur Airport",
    "airportOperatingHours": "On Request",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A",
    "airportType": "Public",
    "address": "Jagdalpur kumharpara, Jagdalpur, Chhattisgarh 494001",
    "runwayDimensions": "06/24: 1,707 m × 30 m (Asphalt)",
    "latitude": "19.0761° N",
    "longitude": "82.0366° E"
  },
  {
    "img": "air157",
    "airportName": "VERH / VERH / Raigarh Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A",
    "airportType": "Private / Domestic",
    "address": "Kodatarai, Chhattisgarh 496100",
    "runwayDimensions": "10/28: 2,020 m × 30 m (Asphalt)",
    "latitude": "21.822222° N",
    "longitude": "83.363889° E"
  },
  {
    "img": "air158",
    "airportName": "VEDO / DGH / Deoghar Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No (Not a designated Airport of Entry)",
    "airportType": "Domestic",
    "address": "Deoghar, Jharkhand",
    "runwayDimensions": "2,500 m × 45 m (Asphalt)",
    "latitude": "24.4466° N",
    "longitude": "86.7014° E"
  },
  {
    "img": "air159",
    "airportName": "VEBM / QBM / Brahmapur Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Domestic / Airstrip",
    "address": "Helipad, Rangeilunda, Korapalli, Odisha 760007",
    "runwayDimensions": "750 m (2,461 ft) long (Asphalt)",
    "latitude": "19.2975° N",
    "longitude": "84.876944° E"
  },
  {
    "img": "air160",
    "airportName": "VEUK / UKE / Utkela Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Airstrip Road, Utkela, Odisha 766011",
    "runwayDimensions": "914 m × 30 m (Asphalt)",
    "latitude": "20.0974° N",
    "longitude": "83.1838° E"
  },
  {
    "img": "air161",
    "airportName": "VEKJ / VEKJ / Kendujhar Airstrip",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public Airstrip",
    "address": "Gopinathapur, Odisha 758013",
    "runwayDimensions": "914 m × 30 m (Asphalt)",
    "latitude": "21.6966667° N",
    "longitude": "85.5816667° E"
  },
  {
    "img": "air162",
    "airportName": "VENP / VENP / Nuapada Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public Airstrip",
    "address": "Nandapur, Odisha 766104",
    "runwayDimensions": "~1,000 m × 15 m (Asphalt)",
    "latitude": "20.86984° N",
    "longitude": "82.51965° E"
  },
  {
    "img": "air163",
    "airportName": "VERK / RRK / Rourkela Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Rourkela, Odisha",
    "runwayDimensions": "09/27: 1,798 m × 30 m (Asphalt)",
    "latitude": "22.25665° N",
    "longitude": "84.8145° E"
  },
  {
    "img": "air164",
    "airportName": "VEHK / VEHK / Sambalpur Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Public Airstrip",
    "address": "Sambalpur Airstrip, Kilasama, Odisha 768212",
    "runwayDimensions": "15/33: ~1,275 m × 17 m (Asphalt)",
    "latitude": "21.5802° N",
    "longitude": "84.0057° E"
  },
  {
    "img": "air165",
    "airportName": "VEMH / LDA / Malda Airport",
    "airportOperatingHours": "DLY 0155-0745 0900-1625 HR",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "N/A",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Malda",
    "runwayDimensions": "11/29: 1,097 m × 30 m (Unpaved)",
    "latitude": "25.0333° N",
    "longitude": "88.15° E"
  },
  {
    "img": "air166",
    "airportName": "VAGD / GDB / Gondia Airport",
    "airportOperatingHours": "0635 UTC – 1440 UTC DLY",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Maharashtra",
    "runwayDimensions": "04/22: 2,290 m × 45 m (Asphalt)",
    "latitude": "21.5261993° N",
    "longitude": "80.2903976° E"
  },
  {
    "img": "air167",
    "airportName": "VAKD / VAKD / Khandwa Airport",
    "airportOperatingHours": "0635 UTC – 1440 UTC DLY",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Public",
    "address": "Madhya Pradesh",
    "runwayDimensions": "10/28: 891 m × 43 m (Asphalt)",
    "latitude": "21.5261993° N",
    "longitude": "84.0464° E"
  },
  {
    "img": "air168",
    "airportName": "VOSH / RQY / Kuvempu Airport",
    "airportOperatingHours": "0635 UTC – 1440 UTC DLY",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Shimoga, Karnataka",
    "runwayDimensions": "08/26: 3,200 m × 45 m (Asphalt)",
    "latitude": "13.8547222222° N",
    "longitude": "75.6105555556° E"
  },
  {
    "img": "air169",
    "airportName": "VOSR / SDW / Sindhudurg Airport",
    "airportOperatingHours": "0635 UTC – 1440 UTC DLY",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Sindhudurg Airport, Near Parule Village, Chipi, Maharashtra",
    "runwayDimensions": "09/27: 2,500 m × 45 m (Asphalt)",
    "latitude": "16.0012133° N",
    "longitude": "73.5278361739° E"
  },
  {
    "img": "air170",
    "airportName": "VEAH / AZH / Azamgarh Airport",
    "airportOperatingHours": "0635 UTC – 1440 UTC DLY",
    "airportRestrictions": "Available on Request",
    "customsImmigration": "NO",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Azamgarh, Uttar Pradesh, India",
    "runwayDimensions": "14/32: 1,485 m × 23 m (Asphalt)",
    "latitude": "26.156389° N",
    "longitude": "83.115556° E"
  },
  {
    "img": "air171",
    "airportName": "VEAY / AYJ / Ayodhya Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Nil",
    "airportFireCategory": "VI",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (International Airport)",
    "airportType": "International",
    "address": "Ayodhya, Uttar Pradesh 224133",
    "runwayDimensions": "11/29: 2,200 m × 45 m (Concrete)",
    "latitude": "26.7477° N",
    "longitude": "82.1506° E"
  },
  {
    "img": "air172",
    "airportName": "VOYK / YLK / Yelahanka Air Force Station",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Not Applicable",
    "airportFireCategory": "Available",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A (Military)",
    "airportType": "Military",
    "address": "Yelahanka, Bengaluru",
    "runwayDimensions": "09/27: 2,197 m × 46 m (Asphalt)",
    "latitude": "13.13550° N",
    "longitude": "77.60600° E"
  },
  {
    "img": "air173",
    "airportName": "VIMB / MZS / Moradabad Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Not Applicable",
    "airportFireCategory": "IV",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "No",
    "airportType": "Domestic",
    "address": "Moradabad Airport, Uttar Pradesh 244902",
    "runwayDimensions": "12/30: 2,112 m × 30 m (Asphalt)",
    "latitude": "28.8175° N",
    "longitude": "78.9219° E"
  },
  {
    "img": "air174",
    "airportName": "VANM / NMI / Navi Mumbai International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "VIII",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "International",
    "address": "Navi Mumbai International Airport",
    "runwayDimensions": "08L/26R: 3,700 m × 60 m (Asphalt)",
    "latitude": "18.991944° N",
    "longitude": "73.061667° E"
  },
  {
    "img": "air175",
    "airportName": "VIND / DXN / Noida International Airport",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "H24",
    "airportFireCategory": "V",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "YES",
    "ciqAvailability": "Yes (Airport of Entry)",
    "airportType": "International",
    "address": "Noida International Airport",
    "runwayDimensions": "11/29: 3,900 m × 45 m (Asphalt/Concrete)",
    "latitude": "28.1741° N",
    "longitude": "77.5992° E"
  },
  {
    "img": "air176",
    "airportName": "VADN / NMB / Daman Airport",
    "airportOperatingHours": "72 HR PN REQ FOR NON SCHEDULE",
    "airportRestrictions": "Nil (As Per ATS)",
    "customsImmigration": "N/A",
    "airportFireCategory": "Available on Request",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "RECOMMENDED FROM HOTEL",
    "ciqAvailability": "N/A (Military)",
    "airportType": "Military",
    "address": "Daman",
    "runwayDimensions": "03/21: 1,801 m × 46 m (Asphalt)",
    "latitude": "20.4325° N",
    "longitude": "72.8384° E"
  },
  {
    "img": "air177",
    "airportName": "VIHX / HWR / Halwara Air Force Station",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Not Applicable",
    "airportFireCategory": "Available",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "N/A (Military)",
    "airportType": "Military",
    "address": "Halwara, Punjab, India",
    "runwayDimensions": "13/31: 2,739 m × 45 m (Concrete)",
    "latitude": "30.7485° N",
    "longitude": "75.6298° E"
  },
  {
    "img": "air178",
    "airportName": "VOTX / NONE / Tambaram Air Force Station",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Not Applicable",
    "airportFireCategory": "Available",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "No",
    "airportType": "Military",
    "address": "Air Force Station, Tambaram, Chennai, Tamil Nadu, 600046, India",
    "runwayDimensions": "05/23: 1,513 m x 45 m; 12/30: 1,818 m x 45 m",
    "latitude": "12.9071999° N",
    "longitude": "80.1219025° E"
  },
  {
    "img": "air179",
    "airportName": "VOHK / VOHK / Hakimpet Air Force Station",
    "airportOperatingHours": "H24",
    "airportRestrictions": "NIL",
    "customsImmigration": "Not Applicable",
    "airportFireCategory": "Available",
    "visa": "https://indianvisaonline.gov.in/",
    "catering": "NO",
    "ciqAvailability": "No",
    "airportType": "Military",
    "address": "Shamirpet Mandal, Medchal-Malkajgiri District, Telangana, 500014, India.",
    "runwayDimensions": "09/27: 2,250 m x 45 m",
    "latitude": "17.391667° N",
    "longitude": "78.530000° E"
  }
];

