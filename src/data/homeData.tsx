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
    href: "https://www.facebook.com/FreedomeAirServicesdelhi",
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
      "https://www.instagram.com/FreedomeAirServices.contracts?igsh=MXh6Y2Q5dWJ6c3pzOA==",
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
        label: "Crew Accomodation and Support",
        href: "/services/crew-accomodation-and-support",
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
    "Leading and reliable aviation support, possesses in-dept knowledge of local regulations and procedures, ensuring a smooth process towards  comprehensive ground handling services with our extensive network and experience, designed to elevate experiences with precision, safety and responsibility, ensuring seamless flight operations. ",
  vision: [
    {
      heading: "Our Vision",
      icon: <FaEye />,
      text:
        "To be a globally trusted aviation partner, recognized for safety and service quality. We envision connecting people and businesses globally while setting new benchmarks in operational excellence, innovation, and reliability, while strengthening our presence in the international aviation ecosystem, as a responsible and sustainable trip support agency.",
    },
    {
      heading: "Our Mission",
      icon: <GoGoal />,
      text:
        "To deliver safe, reliable, and efficient aviation support services while maintaining the highest standards of professionalism. ",
    },
    {
      heading: "Our Goals",
      icon: <GoGoal />,
      text:
        "We aim to grow responsibly, innovate continuously, our commitment to excellence and customer satisfaction, ensuring a seamless and hassel-free experience, maintaining the highest standards of safety and service. ",
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
  title: "Reasons to Choose Freedom Air Services",
  points: [
    {
      id: 1,
      text:
        "Each project receives unique designs made of premium materials at our company to create modern spaces with lasting elegance.",
    },
    {
      id: 2,
      text:
        "Our experienced team has multiple years of expertise in both home designs and construction operations to deliver projects that fulfill all high criteria.",
    },
    {
      id: 3,
      text:
        "We conduct detailed client interaction, which allows us to transform vision into personalized designs compatible with their lifestyle demands.",
    },
    {
      id: 4,
      text:
        "We employ innovative technology along with strategic planning to create living environments that function perfectly while being beautiful and creating comfort.",
    },
    {
      id: 5,
      text:
        "We take full responsibility for planning along with execution to deliver an entirely smooth design and building process that requires no stress and has perfect management.",
    },
    {
      id: 6,
      text:
        "We deliver impressive project outcomes through creative designs with professionalism and strong dedication to building stunning projects that stand out from others in quality and detailed craftsmanship.",
    },
  ],
  details: [
    {
      id: 1,
      icon: <LuPhone />,
      para: "Contact No.",
      data: [
        {
          text: "+91 8826 2929 51",
          slug: "tel:+91 8826 2929 51",
        },
        // {
        //   text: "+91 8826 2929 51",
        //   slug: "tel:+91 8826 2929 51",
        // },
      ],
    },
    {
      id: 2,
      icon: <RiMailSendLine />,
      para: "E-mail Address",
      data: [
        {
          text: "admin@freedomair.aero ",
          slug: "mailto:admin@freedomair.aero ",
        },
      ],
    },
    {
      id: 3,
      icon: <GrLocation />,
      para: "Office Address",
      data: [
        {
          text: "Third floor, C-49, Main Road, Block C, Lajpat Nagar II, Defence Colony, New Delhi, Delhi 110024",
          slug:
            "https://www.google.com/maps/place/Freedom+Air+Services/@28.5724888,77.2314122,15z/data=!4m10!1m2!2m1!1sC-49,+3rd+Floor,+Lajpat+nagar+%E2%80%93+II,+New+Delhi+%E2%80%93+110024!3m6!1s0x390ce30077e0858d:0xc798ac10cb1c9112!8m2!3d28.5714385!4d77.2383556!15sCjpDLTQ5LCAzcmQgRmxvb3IsIExhanBhdCBuYWdhciDigJMgSUksIE5ldyBEZWxoaSDigJMgMTEwMDI0kgETYXZpYXRpb25fY29uc3VsdGFudOABAA!16s%2Fg%2F11x6wn3qz3?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
        },
      ],
    },
  ],
};

export const airport = [
  {
    img: air1,
    airportName: "VIAR / ATQ / Sri Guru Ram Das Jee International Airport",
    city: "Amritsar",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "Runway closure everyday 1100 - 1300 UTC",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "VIII",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air2,
    airportName:
      "VEGT / GAU / Lokpriya Gopinath Bordoloi International Airport",
    city: "Guwahati",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "Runway closure on Monday and Friday 0750 - 0920 UTC",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air3,

    airportName: "VILK / LKO / Chaudhary Charan Singh International Airport",
    city: "Lucknow",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "Runway closure every Wednesday 0915 - 1115 UTC",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air4,

    airportName: "VIAG / AGR / Pandit Deen Dayal Upadhyay Airport",
    city: "Agra",
    airportOperatingHours:
      "Mon Fri Sun 0730-1000 UTC, Wed 0800-1000 UTC, Tue Thu Sat 0650-0900 UTC",
    airportRestrictions:
      "Watch hours of civil air terminal. 4hr prior intimation required for watch extension for emergency/evacuation flight ops and 24hr prior intimation required for other flights.",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "VII",
    fuelJetA1Availability: "Available",
    customsImmigration: "On call",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air5,

    airportName: "VANP / NAG / Dr. Babasaheb Ambedkar International Airport",
    city: "Nagpur",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "NIL",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air6,

    airportName: "VOCI / COK / Cochin International Airport",
    city: "Kochi",
    airportOperatingHours: "24 HRS",
    airportRestrictions:
      "NOTAM for runway closure from 0830 - 1230 UTC on all Tuesdays",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air7,

    airportName: "VOBL / BLR / Kempegowda International Airport",
    city: "Bengaluru",
    airportOperatingHours: "24H",
    airportRestrictions: "NIL",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air8,

    airportName: "VOHS / HYD / Rajiv Gandhi International Airport",
    city: "Hyderabad",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "NIL",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air9,

    airportName: "VOPB / IXZ / Veer Savarkar International Airport",
    city: "Port Blair",
    airportOperatingHours: "Daily 0015-1045 HRS",
    airportRestrictions: "NIL",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star",
  },
  {
    img: air10,

    airportName: "VOCL / CCJ / Calicut International Airport",
    city: "Kozhikode",
    airportOperatingHours: "24H",
    airportRestrictions: "0930 UTC - 1230 UTC (Tue)",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from nearest 5 star hotel",
  },
  {
    img: air11,

    airportName: "VIJP / JAI / Jaipur International Airport",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "0900-1100 UTC closure",
    slotsRequired: "YES",
    airportFireCategory: "VIII",
    fuelJetA1Availability: "YES",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from Casino flight catering",
  },
  {
    img: air12,

    airportName:
      "VISR / SXR / Srinagar International Airport (Defence Airfield)",
    airportOperatingHours: "0230-1600 UTC",
    airportRestrictions: "Defence clearance required",
    slotsRequired: "YES",
    airportFireCategory: "VII",
    fuelJetA1Availability: "Available",
    customsImmigration: "On Call",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Can be arranged from the nearest 5 star hotel",
  },
  {
    img: air13,

    airportName: "VOGA / GOX / Manohar International Airport (Civil Airfield)",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "Every Wednesday 0915-1115 UTC closure",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available from the nearest 5 star",
  },
  {
    img: air14,

    airportName: "VOGO / GOI / Goa International Airport (Defence Airfield)",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "Every Wednesday 0915-1100 UTC closure",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available",
  },
  {
    img: air15,

    airportName: "VAAH / AMD / Sardar Vallabhbhai Patel International Airport",
    airportOperatingHours: "24 HR",
    airportRestrictions: "0530-0930 UTC Wednesdays",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/evisa/tvoa.html",
    catering: "Available",
  },
  {
    img: air16,

    airportName: "VOTV / TRV / Thiruvananthapuram International Airport",
    airportOperatingHours: "24 HOURS",
    airportRestrictions:
      "NOTAM runway closure: Mon, Wed, Thu, Fri 0830-1030 UTC",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/",
    catering: "Available",
  },
  {
    img: air17,

    airportName: "VOMM / MAA / Chennai International Airport",
    airportOperatingHours: "24 HOURS",
    airportRestrictions:
      "Arrival not allowed 1400-1500 IST Tue & Sat. Arrival/Departure not allowed 1500-1700 IST Tue & Sat for wide body aircraft.",
    slotsRequired: "Prior slots approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/",
    catering: "Available",
  },
  {
    img: air18,

    airportName:
      "VECC / CCU / Netaji Subhash Chandra Bose International Airport",
    airportOperatingHours: "24 HR",
    airportRestrictions: "NIL",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "YES",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/",
    catering: "Available from Taj SATS",
  },
  {
    img: air19,

    airportName: "VABB / BOM / Chhatrapati Shivaji International Airport",
    airportOperatingHours: "24 HR",
    airportRestrictions:
      "0800-1100 closure, 1700-2000 & 2115-2315 (General aviation flights not permitted during these hours)",
    slotsRequired: "YES",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Jet A1 fuel available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/",
    catering: "YES",
  },
  {
    img: air20,

    airportName: "VIDP / DEL / Indira Gandhi International Airport",
    airportOperatingHours: "24 Hours",
    airportRestrictions: "NIL",
    slotsRequired: "Prior ETA/ETD slot approval required",
    airportFireCategory: "IX",
    fuelJetA1Availability: "Jet A1 fuel available",
    customsImmigration: "H24",
    visa: "https://indianvisaonline.gov.in/",
    catering: "YES",
  },
];
