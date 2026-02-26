import {
  banner,
  banner2,
  banner3,
  banner4,
  cl1,
  cl2,
  cl3,
  cl4,
  logo2,
  dlf911,
  dlf912,
  dlf913,
  dlf914,
  dlf931,
  dlf932,
  dlf933,
  dlf934,
  sewer,
  sewer2,
  sewer3,
  sewer4,
  sewer5,
  sewer6,
  sewer7,
  sewer8,
  sewer9,
  sewer10,
  sewer11,
  sewer13,
  dlf935,
  dlf936,
  dlf937,
  enclave931,
  enclave932,
  enclave933,
  gmda1,
  gmda2,
  gmda3,
  gmda4,
  other1,
  other2,
  other3,
  sco841,
  sco842,
  sec681,
  sec682,
  sec683,
  sec684,
  sec685,
  sec686,
  sec687,
  sec688,
  sec689,
  sec6810,
  sco843,
  dlf915,
  pipe,
  drainage,
  road,
  civil,
  horiculture,
  bg,
  bhk,
} from "@/assets";

import { FaEye, FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiPipes } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { IoIosLeaf } from "react-icons/io";
import { LiaRoadSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import { MdOutlineAltRoute } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { RiMailSendLine, RiSofaFill } from "react-icons/ri";

// homepage
export const navItemsArray = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "/about-us" },
  {
    id: 3,
    label: "Services",
    href: "/services",
    subNav: [
      {
        id: 1,
        label: "Pipeline Networks",
        href: "/services/pipeline-networks",
      },
      {
        id: 2,
        label: "Drainage & Utility Diversions",
        href: "/services/drainage-&-utility-diversions",
      },
      { id: 3, label: "Roads & Footpaths", href: "/services/roads-footpaths" },
      {
        id: 4,
        label: "Civil Structure & Finishing Works",
        href: "/services/civil-structure-&-finishing-works",
      },
      {
        id: 5,
        label: "Horticulture & Landscaping",
        href: "/services/horticulture-landscaping",
      },
    ],
  },
  { id: 4, label: "Projects", href: "/projects" },
  { id: 5, label: "Privacy Policy", href: "/privacy-policy" },
  { id: 6, label: "Blogs", href: "/blogs" },
  { id: 7, label: "Contact Us", href: "/contact-us" },
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
    title:"About us",
    title1: "Best Builders In ",
    title2:"Delhi NCR",
    para: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
    vision: [
      {
        heading: "Our Vision",
        icon:<FaEye />
,
        text: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We envision a skyline that reflects our commitment to excellence.",
      },
      {
        heading: "Our Mission",
        icon: <GoGoal />,
        text: "Delivering safe, precise infrastructure through ethical practices and modern project management. Every project is a promise kept to our clients and communities.",
      },
    ],
    count:[    { value: "500+", label: "Projects Done" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "42+", label: "Years Active" },]
  };

export const Servicedata = {
  title: "Easy Way To Book (Services)",
  para:"lorem ipsum and stormwater systems are executed through open-cut and advanced trenchless technologies. sewer, and stormwater systems are executed through open-cut and advanced trenchless technologies.",
  service: [
    {
      title: "Pipeline Networks",
      text:
        "Water, sewer, and stormwater systems are executed through open-cut and advanced trenchless technologies.",

      img: pipe,

      icon: <GiPipes />,
      description:
        "Our in-house engineering team delivers robust pipeline networks designed for efficiency, safety, and long-term reliability. From planning to commissioning, we manage every stage with precision. Each network is executed using proven materials, accurate alignment, and modern methods to ensure uninterrupted flow and durability.",

      how_we_work: [
        {
          id: 1,
          heading: "Planning & Feasibility",
          para:
            " We study site conditions, utility requirements, and technical parameters to plan efficient and compliant pipeline routes.",
        },
        {
          id: 2,
          heading: "Design & Engineering",
          para:
            "Detailed pipeline designs are prepared, ensuring correct sizing, alignment, depth, and regulatory compliance.",
        },
        {
          id: 3,
          heading: "Execution & Installation",
          para:
            " Pipelines are installed using open-cut or trenchless methods with strict quality and safety controls.",
        },
        {
          id: 4,
          heading: "Testing & Commissioning",
          para:
            " Each pipeline is pressure-tested and inspected to ensure leak-free performance before final commissioning.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "How are pipeline networks different from regular construction?",
          ans:
            " They require precise engineering, depth control, safety planning, and continuous quality checks to ensure long-term performance.",
        },
        {
          id: 2,
          que: "Can services continue during pipeline installation?",
          ans:
            " Yes, proper planning and phased execution help minimise disruption to existing utilities.",
        },
        {
          id: 3,
          que: "Are modern construction methods used?",
          ans:
            " Yes, we use advanced trenchless and mechanised techniques where required for efficient execution.",
        },
        {
          id: 4,
          que: "What ensures the long-term durability of pipelines?",
          ans:
            "Quality materials, accurate installation, testing procedures, and adherence to engineering standards.",
        },
        {
          id: 5,
          que: "Does in-house execution improve timelines?",
          ans:
            "Yes, internal coordination enables faster decision-making and smoother project completion.",
        },
      ],
    },

    {
      title: "Drainage & Utility Diversions",
      text:
        "Strategic diversion, rerouting, and restoration of complex urban utility networks with minimal disruptio.",
      img: drainage,
      icon: <MdOutlineAltRoute />,
      description:
        "Our in-house team delivers well-planned drainage systems and utility diversions designed to support urban infrastructure without interrupting daily operations. From analysis to execution, every stage is managed carefully to ensure safety, accuracy, and long-term reliability of diverted networks.",
      how_we_work: [
        {
          id: 1,
          heading: "Site Assessment & Planning",
          para:
            "We study existing utilities, drainage flows, and site constraints to plan safe and efficient diversion strategies.",
        },
        {
          id: 2,
          heading: "Engineering & Coordination",
          para:
            "Detailed designs are prepared while coordinating with relevant authorities to ensure compliance and necessary approvals.",
        },
        {
          id: 3,
          heading: "Diversion & Installation",
          para:
            "Utilities and drainage lines are diverted using controlled methods that reduce disruption and maintain service continuity.",
        },
        {
          id: 4,
          heading: "Testing & Restoration",
          para:
            "Systems are tested thoroughly, and surfaces are restored to original or improved conditions after completion.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "Why are utility diversions important?",
          ans:
            "They allow infrastructure development without damaging existing drainage and utility networks.",
        },
        {
          id: 2,
          que: "How is disruption to services minimised?",
          ans:
            "Through phased execution, careful planning, and temporary service arrangements.",
        },
        {
          id: 3,
          que: "Are complex urban areas handled safely?",
          ans:
            "Yes, careful mapping and modern techniques ensure safe execution in congested environments.",
        },
        {
          id: 4,
          que: "What ensures drainage efficiency after diversion?",
          ans:
            "Proper gradient design, quality materials, and detailed testing processes.",
        },
        {
          id: 5,
          que: "Does in-house management improve results?",
          ans:
            "Yes, it ensures faster coordination, better control, and reliable project delivery.",
        },
      ],
    },

    {
      title: "Roads and Footpaths",
      text:
        "Durable surface infrastructure seamlessly coordinated with underlying utility and service networks.",
      img: road,
      icon: <LiaRoadSolid />,
      description:
        "We develop high-quality roads and pedestrian pathways designed for safety, durability, and smooth movement. Our team ensures proper coordination between surface works and underlying utilities, delivering infrastructure that performs reliably under daily traffic and long-term usage conditions.",
      how_we_work: [
        {
          id: 1,
          heading: "Site Study & Planning",
          para:
            "We assess traffic patterns, ground conditions, and service networks to plan durable and efficient road layouts.",
        },
        {
          id: 2,
          heading: "Design & Material Selection",
          para:
            "Appropriate materials and construction methods are selected to match load requirements and usage intensity.",
        },
        {
          id: 3,
          heading: "Construction & Surface Works",
          para:
            "Roads and footpaths are constructed with accurate layering, proper drainage, and finishing for long-lasting performance.",
        },
        {
          id: 4,
          heading: "Quality Checks & Completion",
          para:
            "Final inspections ensure smooth surfaces, safety standards, and readiness for public use.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "How do you ensure long-term surface durability?",
          ans:
            "Durability is ensured through proper ground preparation, quality materials, accurate layering, controlled compaction, and strict quality checks designed to withstand traffic loads and varying weather conditions.",
        },
        {
          id: 2,
          que: "Are underground utilities considered during construction?",
          ans:
            "Yes, existing and planned utilities are carefully mapped and coordinated before construction to avoid damage, ensure accessibility, and maintain seamless integration with surface infrastructure.",
        },
        {
          id: 3,
          que: "What measures improve pedestrian safety?",
          ans:
            "Pedestrian safety is enhanced through well-defined walkways, non-slip surfaces, proper kerb heights, clear markings, adequate drainage, and designs aligned with local safety standards.",
        },
        {
          id: 4,
          que: "Can projects be completed in high-traffic areas?",
          ans:
            "Yes, phased execution, traffic management plans, and efficient scheduling are used to minimise disruption while maintaining safety and accessibility in busy zones.",
        },
        {
          id: 5,
          que: "What defines the final quality of roads and footpaths?",
          ans:
            "Final quality depends on precision execution, proper drainage design, material consistency, finishing accuracy, and continuous monitoring for smooth, durable, and user-friendly infrastructure.",
        },
      ],
    },

    {
      title: "Civil Structures & Finishing Works",
      text:
        "Structural construction combined with precise finishing for functional and visually refined outcomes.",
      img: civil,
      icon: <PiCityBold />,
      description:
        "We deliver reliable civil structures supported by high-quality finishing that enhances both functionality and appearance. From structural execution to final detailing, every stage is handled with precision, ensuring long-lasting performance and clean, refined outcomes.",
      how_we_work: [
        {
          id: 1,
          heading: "Planning & Structural Assessment",
          para:
            "We evaluate design requirements, load conditions, and site constraints to plan safe and efficient structural solutions.",
        },
        {
          id: 2,
          heading: "Engineering & Detailing",
          para:
            "Accurate drawings and specifications are prepared to ensure structural stability and seamless finishing execution.",
        },
        {
          id: 3,
          heading: "Construction & Structural Works",
          para:
            "Structures are executed using quality materials, skilled workmanship, and strict quality control practices.",
        },
        {
          id: 4,
          heading: "Finishing & Quality Review",
          para:
            "Finishing works are completed with attention to detail, followed by inspections to ensure durability and visual consistency.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "What types of civil structures do you execute?",
          ans:
            "We handle a wide range of civil works, including foundations, retaining structures, chambers, boundary walls, and associated structural elements.",
        },
        {
          id: 2,
          que: "How is structural safety ensured?",
          ans:
            "Safety is ensured through proper design calculations, approved materials, skilled execution, and continuous quality and safety inspections.",
        },
        {
          id: 3,
          que: "How do finishing works add value to structures?",
          ans:
            "Finishing enhances usability, protects structural elements, improves appearance, and ensures long-term performance.",
        },
        {
          id: 4,
          que: "Are finishing works coordinated with structural execution?",
          ans:
            "Yes, finishing works are planned alongside structural construction to avoid rework and ensure smooth project flow.",
        },
        {
          id: 5,
          que: "What ensures the long-term performance of completed works?",
          ans:
            "Quality materials, accurate execution, protective finishes, and adherence to engineering standards ensure long-term structural performance.",
        },
      ],
    },

    {
      title: "Horticulture & Landscaping",
      text:
        "Sustainable landscaping solutions that enhance environmental value and create aesthetically pleasing green spaces.",
      img: horiculture,
      icon: <IoIosLeaf />,
      description:
        "We create functional and visually pleasing green spaces that enhance the environment and complement surrounding infrastructure. Our approach focuses on sustainable planting, efficient water use, and long-term maintenance, ensuring landscapes remain healthy and attractive over time.",
      how_we_work: [
        {
          id: 1,
          heading: "Site Analysis & Soil Preparation",
          para:
            "We assess soil quality, sunlight, and drainage to prepare the site for healthy plant growth.",
        },
        {
          id: 2,
          heading: "Landscape Design & Plant Selection",
          para:
            "Plant species are selected based on climate suitability, aesthetics, and long-term sustainability.",
        },
        {
          id: 3,
          heading: "Execution & Plantation",
          para:
            "Planting and landscaping are carried out with proper spacing, irrigation planning, and soil treatment.",
        },
        {
          id: 4,
          heading: "Maintenance Planning & Handover",
          para:
            "We provide guidance for upkeep to ensure lasting greenery and consistent landscape performance.",
        },
      ],
      faqs: [
        {
          id: 1,
          que: "How do landscaped areas support sustainability?",
          ans:
            "They improve air quality, manage water runoff, reduce heat, and support ecological balance through thoughtful plant selection and layout.",
        },
        {
          id: 2,
          que: "Are plants chosen based on local conditions?",
          ans:
            "Yes, species are selected based on local climate and soil conditions to ensure healthy growth and minimal maintenance.",
        },
        {
          id: 3,
          que: "How is water usage managed efficiently?",
          ans:
            "Efficient irrigation methods and proper soil preparation help optimise water use and reduce wastage.",
        },
        {
          id: 4,
          que: "Can landscaping be integrated with infrastructure projects?",
          ans:
            "Yes, landscaping is planned to align with built structures without affecting utilities or access.",
        },
        {
          id: 5,
          que: "What ensures long-term landscape health?",
          ans:
            "Proper soil treatment, suitable plant selection, and maintenance planning ensure greenery remains healthy and sustainable.",
        },
      ],
    },
  ],
};

// section3
export const crafting = {
  title1: "BUILDING THE FUTURE",
  title2: "Designing Innovation with Modern Expertise",

  slides: [
    {
      id: 1,
      heading: "Credibility & Commitment",
      img: banner,
      text:
        "Building confidence through honesty, consistency, and dependable project delivery",
    },
    {
      id: 2,
      heading: "Relationship That Lasts",
      img: banner2,
      text:
        "Strengthening relationships through integrity, transparency, and mutual respect",
    },
    {
      id: 3,
      heading: "Structural Excellence",
      img: banner4,
      text:
        "Creating strong, safe structures with quality materials and expert execution",
    },
    {
      id: 4,
      heading: "Smart City Solutions",
      img: banner3,
      text:
        "Planning sustainable urban spaces for efficient, future-ready communities",
    },
  ],
};

export const testimonialData = {
  title1: "TESTIMONIALS",
  title2: "Here's what our satisfied clients are saying",

  testimonials: [
    {
      id: 1,
      title: "R.M. Mathur",
      text:
        "Working with OM Engineering Constructions Pvt. Ltd. was a smooth experience from start to finish. The team was professional, transparent, and always available to answer our queries. The quality of work and timely delivery truly impressed us. We felt confident throughout the entire construction process.",
      img: cl1,
    },
    {
      id: 2,
      title: "Shivam Goyal",
      text:
        "We were looking for the best builders in Delhi for our commercial project, and choosing OM Engineering was the right decision. Their planning, coordination, and execution were excellent. The final outcome matched exactly what was promised, with no compromise on quality or deadlines.",
      img: cl2,
    },
    {
      id: 3,
      title: "Sageer Ansari",
      text:
        "What I appreciated most was their honesty and attention to detail. Every stage of construction was clearly explained, and updates were shared regularly. The team handled challenges calmly and professionally. It felt reassuring to work with a company that truly values trust and commitment.",
      img: cl3,
    },
    {
      id: 4,
      title: "Prashant",
      text:
        "After comparing several companies, we chose OM Engineering because of their reputation as one of the best builders in Delhi. They delivered high standards, maintained safety at the site, and completed the project on time. We are extremely satisfied with the overall experience.",
      img: cl4,
    },
  ],
};

export const blogData = {
  title1: "Blogs & News",
  title2: "Stay Updated With our",
  title3:" Latest News",
  blogs: [
    {
      id: 1,
      title: "Best Builders in Delhi NCR",
      text:
        "The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and increasing demand for modern housing and commercial spaces, the need for reliable and high-quality builders has never been greater. Choosing the right builder is critical—not only for securing a property but for...",
      text2: `<div class="blog-content">

  <h1 style="color: #2c3e50;">Best Builders in Delhi NCR</h1>

  <p>The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and increasing demand for modern housing and commercial spaces, the need for reliable and high-quality builders has never been greater. Choosing the right builder is critical—not only for securing a property but for ensuring that your investment is safe, and your dream home or project is delivered on time with the highest standards.</p>

  <p>Among the many players in this competitive market, OM Engineers stands out as a leading name in the infrastructure and real estate development space in Delhi NCR. Backed by over four decades of engineering legacy, OM Engineers combines experience, innovation, and a client-focused approach to deliver exceptional projects that set benchmarks for quality, safety, and sustainability.</p>

  <h2 style="color: #34495e;">Why OM Engineers is One of the Best Builders in Delhi NCR</h2>

  <p>OM Engineers has carved a niche in the region with its commitment to precision, transparency, and forward-thinking project management. Here's why they are considered among the best:</p>

  <h3 style="color: #3b556e;">1. Legacy and Experience</h3>
  <p>With 42 years of rich legacy in engineering and infrastructure, OM Engineers brings unmatched expertise to every project. This long-standing experience translates into a deep understanding of complex site conditions, regulatory requirements, and advanced construction technologies.</p>

  <h3 style="color: #3b556e;">2. Quality and Safety</h3>
  <p>Quality assurance and safety are non-negotiable pillars at OM Engineers. They strictly adhere to rigorous quality standards and environmental safety norms, ensuring that each project is structurally sound, durable, and environmentally responsible.</p>

  <h3 style="color: #3b556e;">3. Innovative Construction Practices</h3>
  <p>OM Engineers leverage modern engineering techniques and technologies such as trenchless pipeline installation and mechanized construction methods. These innovations enable efficient, less disruptive, and cost-effective project execution even in challenging urban environments.</p>

  <h3 style="color: #3b556e;">4. Client-Centric Approach</h3>
  <p>Understanding client needs and maintaining transparent communication is central to OM Engineers’ philosophy. From planning to execution and post-delivery support, they prioritize customer satisfaction, building long-term trust and relationships.</p>

  <h3 style="color: #3b556e;">5. Diverse Infrastructure Expertise</h3>
  <p>OM Engineers offers comprehensive infrastructure solutions across various verticals:</p>

  <ul>
    <li>Pipeline networks (water, sewer, stormwater)</li>
    <li>Drainage and utility diversions</li>
    <li>Roads and footpaths</li>
    <li>Civil structures and finishing works</li>
    <li>Horticulture and landscaping</li>
  </ul>

  <p>This broad expertise allows them to manage complex, multi-disciplinary projects with precision.</p>

  <h2 style="color: #34495e;">What Sets OM Engineers Apart</h2>

  <p>OM Engineers is not just another builder; they are your strategic partner in building sustainable and future-ready infrastructure. Here's how they add value:</p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
    <thead>
      <tr>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f6f8;">Feature</th>
        <th style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #f4f6f8;">OM Engineers’ Strength</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Project Delivery</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Proven track record of timely and on-budget project completions</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Sustainability Focus</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Commitment to green infrastructure and eco-friendly construction methods</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Technological Edge</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Use of advanced machinery and trenchless technology for efficient execution</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Safety Standards</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Comprehensive safety protocols ensuring zero compromise on worker and public safety</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px;">Client Engagement</td>
        <td style="border: 1px solid #ddd; padding: 10px;">Transparent communication and dedicated support throughout the project lifecycle</td>
      </tr>
    </tbody>
  </table>

  <h2 style="color: #34495e;">How OM Engineers Ensure Successful Project Execution</h2>

  <p>OM Engineers follows a structured work process to guarantee excellence at every stage:</p>

  <h3 style="color: #3b556e;">1. Planning and Design</h3>
  <p>Careful assessment of project requirements, site conditions, and client expectations to create detailed and feasible plans.</p>

  <h3 style="color: #3b556e;">2. Engineering and Technology</h3>
  <p>Applying innovative engineering methods and leveraging mechanized equipment to optimize construction efficiency and quality.</p>

  <h3 style="color: #3b556e;">3. Execution and Supervision</h3>
  <p>Strict adherence to quality controls, safety protocols, and regular monitoring to ensure timely, error-free delivery.</p>

  <h3 style="color: #3b556e;">4. Completion and Support</h3>
  <p>Final inspections, handovers, and ongoing client support to maintain lasting relationships and satisfaction.</p>

  <h2 style="color: #34495e;">Why Investing in Quality Builders Matters in Delhi NCR</h2>

  <p>The real estate market in Delhi NCR offers many opportunities, but it also has challenges like delayed projects, substandard construction, and legal hassles with some developers. Choosing a reputed and experienced builder like OM Engineers minimizes these risks.</p>

  <p>Benefits of choosing OM Engineers include:</p>

  <ul>
    <li>Assurance of RERA-compliant projects that protect buyer interests</li>
    <li>Transparent pricing with no hidden costs</li>
    <li>Use of premium-quality materials and modern construction standards</li>
    <li>Projects designed to offer excellent connectivity and amenities</li>
    <li>Emphasis on sustainability and environmental safety</li>
  </ul>

  <h2 style="color: #34495e;">The Growing Real Estate Landscape in Delhi NCR</h2>

  <p>Delhi NCR continues to expand with new infrastructure developments such as metro connectivity, expressways, and commercial hubs. This growth fuels demand for reliable builders who can deliver smart, eco-friendly, and well-planned communities.</p>

  <p>OM Engineers aligns with this vision by embracing sustainability, innovation, and quality as their core values, making them the ideal choice for homebuyers, investors, and government projects alike.</p>

  <h2 style="color: #34495e;">OM Engineers — Building the Future of Delhi NCR</h2>

  <p>When looking for the best builders in Delhi NCR, OM Engineers represents a perfect blend of tradition, innovation, and professionalism. Their decades of experience, client-first approach, and technical expertise make them a trusted partner for infrastructure projects that define modern urban living.</p>

  <p>Whether it’s residential complexes, commercial buildings, or large infrastructure ventures, OM Engineers consistently delivers projects that meet the highest standards of safety, quality, and sustainability.</p>

  <p>Choosing OM Engineers means choosing peace of mind, timely delivery, and a future-ready investment in the heart of India’s most vibrant region.</p>

</div>
`,
      date: "13 Feb 2026",
      img: civil,
      author: "Admin",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Property in the Ideal Location",
      text:
        "Buying a property is one of the biggest decisions you’ll make, whether it’s for your home, investment, or business. Choosing the perfect property means more than just liking...",
      text2: `<div class="blog-content">

  <h1>How to Choose the Perfect Property in the Ideal Location</h1>

  <p>Buying a property is one of the biggest decisions you’ll make, whether it’s for your home, investment, or business. Choosing the perfect property means more than just liking the building itself — location plays a crucial role in determining your comfort, convenience, and the property’s future value.</p>

  <p>In this blog, we will guide you through the essential factors to consider when selecting a property and provide insights on how to find the right place that fits your needs and budget.</p>

  <h2>Why Location Matters in Property Buying</h2>

  <p>Location affects:</p>

  <ul>
    <li><strong>Resale Value:</strong> Properties in prime locations tend to appreciate faster.</li>
    <li><strong>Lifestyle:</strong> Proximity to work, schools, hospitals, and recreational spots.</li>
    <li><strong>Accessibility:</strong> Ease of commute and availability of public transport.</li>
    <li><strong>Safety:</strong> Neighborhood security and infrastructure.</li>
    <li><strong>Future Development:</strong> Planned infrastructure can boost property value.</li>
  </ul>

  <h2>Key Factors to Consider When Choosing a Property Location</h2>

  <h3>1. Neighborhood and Community</h3>
  <p>Understand the vibe and demographic of the area. Visit at different times to observe noise levels, traffic, and cleanliness. A good neighborhood improves quality of life.</p>

  <h3>2. Connectivity</h3>
  <p>Check accessibility to major roads, highways, metro stations, and public transport. Consider your daily commute and the convenience for family members.</p>

  <h3>3. Amenities and Facilities</h3>
  <p>Look for nearby schools, hospitals, shopping centers, parks, and entertainment options. These amenities add comfort and increase property demand.</p>

  <h3>4. Safety and Security</h3>
  <p>Research crime rates and safety measures in the locality. Gated communities or areas with active neighborhood groups often offer better security.</p>

  <h3>5. Future Growth Potential</h3>
  <p>Investigate upcoming projects like new infrastructure, commercial hubs, or government developments. These can enhance your property’s value.</p>

  <h3>6. Budget and Affordability</h3>
  <p>Balance your dream location with your budget. Sometimes, slightly offbeat areas offer better value for money and good growth prospects.</p>

  <h2>Popular Property Types and Their Suitability</h2>

  <p>Choosing the property type is as important as choosing the location. Below is a table that summarizes common property types, their key specialties, and average price ranges in Delhi NCR. Prices can vary widely based on exact location, size, and amenities.</p>

  <table>
    <thead>
      <tr>
        <th>Property Type</th>
        <th>Specialty</th>
        <th>Price Range (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Apartments</td>
        <td>Security, amenities, and community living</td>
        <td>₹50 Lakh – ₹3 Crore</td>
      </tr>
      <tr>
        <td>Independent Houses</td>
        <td>Privacy, space, customization</td>
        <td>₹1 Crore – ₹10 Crore+</td>
      </tr>
      <tr>
        <td>Villas</td>
        <td>Luxury, exclusivity, gated community</td>
        <td>₹2 Crore – ₹15 Crore+</td>
      </tr>
      <tr>
        <td>Plots / Land</td>
        <td>Custom construction, investment</td>
        <td>₹30 Lakh – ₹5 Crore+</td>
      </tr>
      <tr>
        <td>Commercial Spaces</td>
        <td>Business use, high visibility</td>
        <td>₹1 Crore – ₹20 Crore+</td>
      </tr>
      <tr>
        <td>Studio Apartments</td>
        <td>Affordable, easy maintenance</td>
        <td>₹25 Lakh – ₹70 Lakh</td>
      </tr>
    </tbody>
  </table>

  <h2>How to Narrow Down Your Property Search</h2>

  <ul>
    <li><strong>Set Clear Priorities:</strong> List what matters most — location, price, property type, amenities.</li>
    <li><strong>Research Extensively:</strong> Use online portals, visit sites, and check reviews.</li>
    <li><strong>Consult Real Estate Experts:</strong> Trusted consultants provide insights and verified listings.</li>
    <li><strong>Visit Multiple Properties:</strong> Don’t settle for the first option. Compare locations and features.</li>
    <li><strong>Check Legalities:</strong> Ensure clear titles, no disputes, and compliance with local regulations.</li>
  </ul>

  <h2>Tips for Smart Property Selection</h2>

  <ul>
    <li>Always keep future resale and rental potential in mind.</li>
    <li>Don’t overlook hidden costs like maintenance, property taxes, and association fees.</li>
    <li>Factor in lifestyle needs for all family members.</li>
    <li>Keep an eye on government policies that may impact property prices.</li>
    <li>Trust your instincts, but back decisions with solid research.</li>
  </ul>

  <p>Choosing the perfect property in the ideal location is a balance of smart research, understanding your priorities, and careful planning. Whether you want a cozy apartment near your workplace or a spacious villa in a serene locality, investing time upfront will save you headaches later.</p>

  <p>If you need expert advice or assistance in finding your ideal property, feel free to connect with trusted professionals who understand the Delhi NCR real estate market well and can guide you every step of the way.</p>

</div>
`,
      date: "13 Feb 2026",
      author: "Developer",
      img: banner4,
    },
    {
      id: 3,
      title: "Why People Are Choosing 4BHK Flats in Delhi",
      text:
        "Delhi’s homebuyers are thinking bigger—and smarter. Over the last few years, the demand for 4BHK flats in Delhi has grown steadi...",
      text2: `<div class="blog-content">

  <h1>Why People Are Choosing 4BHK Flats in Delhi</h1>

  <p>Delhi’s homebuyers are thinking bigger—and smarter. Over the last few years, the demand for 4BHK flats in Delhi has grown steadily, transforming what was once seen as pure luxury into a practical lifestyle choice. Today, space is no longer a privilege; it’s a necessity shaped by evolving family dynamics, work culture, and long-term planning.</p>

  <p>So, what’s driving this shift? Let’s explore why 4BHK flats are becoming the preferred choice for modern Delhi families.</p>

  <h2>Bigger Families, Better Living</h2>

  <p>Family structures in Delhi are changing. Many households now include multiple generations living under one roof. Parents, children, and grandparents sharing a home need space that supports privacy as well as togetherness.</p>

  <p>A 4BHK flat provides that balance. Each member gets a private room, while shared spaces encourage family bonding. This setup makes everyday living smoother and more harmonious—especially for joint families.</p>

  <h2>Homes That Work as Hard as You Do</h2>

  <p>The rise of work-from-home and hybrid work models has completely redefined residential needs. Homes are no longer just places to relax; they are also offices, classrooms, and creative spaces.</p>

  <p>With a 4BHK flat, one room can easily be dedicated as a home office or study without disturbing daily routines. This flexibility is one of the biggest reasons professionals in Delhi are upgrading to larger homes.</p>

  <h2>Privacy Is the New Luxury</h2>

  <p>In a fast-paced city like Delhi, privacy has become invaluable. A 4BHK flat allows family members to maintain individual schedules, hobbies, and lifestyles without constant interruptions.</p>

  <p>Whether it’s hosting guests, managing different work timings, or simply enjoying quiet personal time, larger homes offer freedom that smaller apartments cannot match.</p>

  <h2>A Clear Upgrade in Lifestyle</h2>

  <p>4BHK flats are usually part of premium residential developments. These projects often come with better planning, modern architecture, and thoughtfully designed layouts.</p>

  <p>Residents enjoy benefits such as:</p>

  <ul>
    <li>Spacious living and dining areas</li>
    <li>Better ventilation and natural light</li>
    <li>Dedicated servant or utility rooms</li>
    <li>Enhanced security and parking facilities</li>
  </ul>

  <p>All these features contribute to a more comfortable and refined lifestyle.</p>

  <h2>A Smart Long-Term Investment</h2>

  <p>From an investment perspective, 4BHK flats in Delhi make strong financial sense. Larger homes tend to appreciate better over time, especially in well-connected and established localities.</p>

  <p>They are also highly attractive to:</p>

  <ul>
    <li>Corporate tenants</li>
    <li>Senior executives</li>
    <li>Expatriate families</li>
  </ul>

  <p>This results in higher rental yields and better long-term returns compared to smaller configurations.</p>

  <h2>Planning for the Future, Not Just Today</h2>

  <p>Modern homebuyers are thinking long term. Instead of upgrading every few years, many prefer investing once in a home that can adapt to changing needs.</p>

  <p>A 4BHK flat provides room for:</p>

  <ul>
    <li>Growing families</li>
    <li>Elderly parents</li>
    <li>Home offices or hobby rooms</li>
    <li>Occasional guests</li>
  </ul>

  <p>This future-ready approach makes 4BHK homes a sensible and forward-looking choice.</p>

  <h2>3BHK vs 4BHK: Why Buyers Are Upgrading</h2>

  <table>
    <thead>
      <tr>
        <th>Aspect</th>
        <th>3BHK Flat</th>
        <th>4BHK Flat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Living Space</td>
        <td>Adequate</td>
        <td>Expansive</td>
      </tr>
      <tr>
        <td>Privacy</td>
        <td>Limited for large families</td>
        <td>High</td>
      </tr>
      <tr>
        <td>Work-from-Home</td>
        <td>Shared arrangements</td>
        <td>Dedicated room</td>
      </tr>
      <tr>
        <td>Guest Comfort</td>
        <td>Restricted</td>
        <td>Comfortable</td>
      </tr>
      <tr>
        <td>Long-Term Value</td>
        <td>Stable</td>
        <td>Strong appreciation</td>
      </tr>
    </tbody>
  </table>

  <h2>Better Design, Smarter Layouts</h2>

  <p>Today’s developers are designing 4BHK flats with intelligent layouts that maximize usable space. Open floor plans, smart storage solutions, and efficient room placement ensure that homes feel spacious yet cozy—not overwhelming.</p>

  <p>Modern architecture has made large homes more functional, elegant, and easy to maintain.</p>

  <h2>Less Clutter, More Calm</h2>

  <p>More space naturally means better organization. With extra rooms and storage, homes feel less crowded and more peaceful. Families can maintain cleaner, calmer environments that positively impact daily life.</p>

  <p>This mental and emotional comfort is a major reason why people are willingly choosing larger homes.</p>

  <h2>More Than a Home, a Statement</h2>

  <p>For many buyers in Delhi, a 4BHK flat represents stability, success, and thoughtful living. It reflects careful planning, lifestyle growth, and a desire for long-term comfort rather than short-term compromises.</p>

  <p>It’s not just about square footage—it’s about how life feels within that space.</p>

  <h2>Key Highlight</h2>

  <p>The rising popularity of 4BHK flats in Delhi is a reflection of changing priorities. With benefits like enhanced privacy, work-from-home flexibility, premium living standards, and strong investment potential, these homes perfectly align with modern urban living.</p>

  <p>As Delhi continues to grow and lifestyles continue to evolve, spacious and well-designed homes like 4BHK flats are no longer an exception—they are becoming the new standard.</p>

</div>
`,
      date: "13 Feb 2026",
      img: bhk,
      author: "Admin",
    },
    {
      id: 4,
      title: "Vastu-Compliant Homes: Are They Worth Investing In?",
      text:
        "In India, buying a home is not just a financial decision—it’s an emotional one. Along with location, budget, and desig...",
      text2: `<div class="blog-content">

  <h1>Vastu-Compliant Homes: Are They Worth Investing In?</h1>

  <p>In India, buying a home is not just a financial decision—it’s an emotional one. Along with location, budget, and design, many homebuyers also consider Vastu Shastra before investing. This ancient Indian science of architecture continues to influence modern real estate, especially in cities like Delhi NCR.</p>

  <p>But the real question is: Are Vastu-compliant homes actually worth investing in, or is it just a belief-driven choice? Let’s explore this in a practical and balanced way.</p>

  <h2>What Does a Vastu-Compliant Home Mean?</h2>

  <p>A Vastu-compliant home is designed according to principles that focus on the balance of natural elements—earth, water, fire, air, and space. These principles guide the placement of rooms, entrances, kitchens, bedrooms, and even windows to promote harmony and positive energy.</p>

  <p>For many buyers, Vastu compliance provides peace of mind and a sense of well-being, even if they don’t strictly follow every rule.</p>

  <h2>Why Vastu Still Matters to Homebuyers</h2>

  <p>Despite modern construction techniques and urban planning, Vastu remains relevant for several reasons:</p>

  <ul>
    <li>Cultural and traditional beliefs</li>
    <li>Emotional comfort and mental satisfaction</li>
    <li>Influence on resale and rental demand</li>
    <li>Perception of positivity and stability</li>
  </ul>

  <p>For many families, a Vastu-compliant home feels “right” from the moment they step in—and that emotional connection plays a big role in decision-making.</p>

  <h2>Impact on Property Value and Demand</h2>

  <p>One of the strongest reasons people consider Vastu-compliant homes is their market demand. In many Indian cities, properties aligned with Vastu principles often attract more buyers and tenants.</p>

  <p>Homes with favorable orientations—such as east-facing entrances or well-placed kitchens—are usually easier to sell and rent. This doesn’t mean non-Vastu homes lack value, but Vastu compliance can offer an added advantage.</p>

  <h2>Practical Benefits Beyond Belief</h2>

  <p>While Vastu is often associated with spiritual beliefs, many of its principles align with practical design logic:</p>

  <ul>
    <li>Better natural light and ventilation</li>
    <li>Efficient space planning</li>
    <li>Comfortable room placements</li>
    <li>Improved airflow and openness</li>
  </ul>

  <p>These factors naturally improve living comfort, energy efficiency, and overall home experience—benefits that even non-believers can appreciate.</p>

  <h2>Common Vastu Features Buyers Look For</h2>

  <p>Here are some Vastu aspects that are commonly preferred and easy to follow in modern homes:</p>

  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Preferred Placement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Main Entrance</td>
        <td>East or North</td>
      </tr>
      <tr>
        <td>Kitchen</td>
        <td>Southeast</td>
      </tr>
      <tr>
        <td>Master Bedroom</td>
        <td>Southwest</td>
      </tr>
      <tr>
        <td>Living Room</td>
        <td>North or East</td>
      </tr>
      <tr>
        <td>Bathrooms</td>
        <td>Northwest or West</td>
      </tr>
    </tbody>
  </table>

  <p>Many developers now design homes keeping these basics in mind, making it easier for buyers to find partially or fully Vastu-compliant options.</p>

  <h2>Is Vastu a Must or a Preference?</h2>

  <p>It’s important to understand that Vastu is not mandatory for a good home. Many successful, happy families live in homes that don’t strictly follow Vastu guidelines.</p>

  <p>However, for buyers who believe in it, Vastu compliance offers:</p>

  <ul>
    <li>Mental peace</li>
    <li>Emotional assurance</li>
    <li>Greater confidence in their investment</li>
  </ul>

  <p>The key is balance—choosing a home that meets practical needs while respecting personal beliefs.</p>

  <h2>Vastu and Modern Real Estate Projects</h2>

  <p>Today’s builders and architects often integrate Vastu principles without compromising modern design. Instead of rigid rules, they focus on adaptable layouts that suit urban living.</p>

  <p>This approach allows buyers to enjoy the benefits of Vastu while still getting:</p>

  <ul>
    <li>Modern aesthetics</li>
    <li>Efficient floor plans</li>
    <li>Smart use of space</li>
    <li>Contemporary amenities</li>
  </ul>

  <p>As a result, Vastu compliance has become more flexible and buyer-friendly.</p>

  <h2>Investment Perspective: Is It Worth It?</h2>

  <p>From an investment point of view, Vastu-compliant homes can offer certain advantages:</p>

  <ul>
    <li>Higher buyer interest</li>
    <li>Faster resale potential</li>
    <li>Better rental demand</li>
    <li>Wider audience appeal</li>
  </ul>

  <p>However, Vastu alone should never be the sole deciding factor. Location, construction quality, connectivity, and builder credibility remain far more important for long-term returns.</p>

  <h2>Things to Keep in Mind Before Investing</h2>

  <p>Before choosing a Vastu-compliant home, consider these points:</p>

  <ul>
    <li>Don’t compromise on location for Vastu</li>
    <li>Avoid excessive modification costs</li>
    <li>Focus on basic Vastu principles, not extremes</li>
    <li>Choose functionality over superstition</li>
  </ul>

  <p>A well-planned home that feels comfortable and practical will always hold value—Vastu or not.</p>

  <h2>Is It a Good Choice?</h2>

  <p>So, are Vastu-compliant homes worth investing in? The answer depends on personal belief and investment goals. For many buyers, Vastu adds emotional comfort and improves market appeal. For others, good design and location matter more.</p>

  <p>Ideally, the best investment is a home that balances practical living, modern design, and personal peace of mind. When those elements come together, Vastu becomes a value addition—not a limitation.</p>

</div>
`,
      date: "13 Feb 2026",
      img: bg,
      author: "Admin",
    },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "OM Engineers deliver innovative infrastructure solutions with decades of expertise, committed to quality, safety, and client satisfaction.",
  socials: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    instagram:
      "https://www.instagram.com/FreedomeAirServices.contracts?igsh=MXh6Y2Q5dWJ6c3pzOA==",
    linkedin: "https://www.linkedin.com/school//",
    youtube: "https://www.youtube.com/c/",
  },
  copyrightText: "Copyrights © 2026 . Designed and Manage by ",
  list1: {
    title: "Quick Links",
    links: [
      { id: 1, label: "About", href: "/about-us" },
      { id: 2, label: "Services & Techs", href: "/services" },
      { id: 3, label: "Projects", href: "/projects" },
      { id: 4, label: "Blogs", href: "/blogs" },
      { id: 5, label: "Contact Us", href: "/contact-us" },
    ],
  },

  list2: {
    title: "Services",
    links: [
      {
        id: 1,
        label: "Pipeline Networks",
        href: "/services/pipeline-networks",
      },
      {
        id: 2,
        label: "Drainage & Utility Diversions",
        href: "/services/drainage-&-utility-diversions",
      },
      { id: 3, label: "Roads & Footpaths", href: "/services/roads-footpaths" },
      {
        id: 4,
        label: "Civil Structure & Finishing Works",
        href: "/services/civil-structure-&-finishing-works",
      },
      {
        id: 5,
        label: "Horticulture & Landscaping",
        href: "/services/horticulture-landscaping",
      },
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
    img:banner3,
    img2: banner,
    title:"About us",
    title1: "Best Builders In ",
    title2:"Delhi NCR",
    para: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We craft spaces that inspire, endure, and elevate communities for generations.",
    vision: [
      {
        heading: "Our Vision",
        icon:<FaEye />
,
        text: "Leading innovative, sustainable infrastructure development supporting India's future growth responsibly. We envision a skyline that reflects our commitment to excellence.",
      },
      {
        heading: "Our Mission",
        icon: <GoGoal />,
        text: "Delivering safe, precise infrastructure through ethical practices and modern project management. Every project is a promise kept to our clients and communities.",
      },
       {
        heading: "Our Goals",
        icon: <GoGoal />,
        text: "Delivering safe, precise infrastructure through ethical practices and modern project management. Every project is a promise kept to our clients and communities.",
      },
    ],
    process:[    { value: 99, label: "Success Rate" },
              { value: 97, label: "Client Satisfaction" },
              { value: 68, label: "Transparecy" },]
  };

export const WhychooseData2 = {
  img2: civil,
  img: banner4,

  title1: " WHY CHOOSE US",
  title2: "Smart Design That Matters ",
  para:
    "We design comfortable environments that look beautiful and serve their purpose to enhance the functional aspects of daily living.",
  faqs: [
    {
      id: 1,
      que: "Unmatched Experience",
      ans:
        "With 30 years of industry expertise, FreedomeAirServices Contracts brings a wealth of knowledge to every project, ensuring seamless construction and exceptional results.",
    },
    {
      id: 2,
      que: "Tailored Solutions",
      ans:
        "The company specializes in customizing homes to suit individual tastes, creating spaces that feel uniquely yours.",
    },
    {
      id: 3,
      que: "Customer-Centric Approach",
      ans:
        "FreedomeAirServices Contracts prides itself on delivering not just a service but a partnership, ensuring that every client is heard and their needs are met.",
    },
  ],
};

// export const thoughts = {
//   img: cl1,
//   title1: " WHY CHOOSE US",
//   title2: "Smart Design That Matters ",
//   para:
//     "We design comfortable environments that look beautiful and serve their purpose to enhance the functional aspects of daily living.",
//   faqs: [
//     {
//       id: 1,
//       que: "Unmatched Experience",
//       ans:
//         "With 30 years of industry expertise, FreedomeAirServices Contracts brings a wealth of knowledge to every project, ensuring seamless construction and exceptional results.",
//     },
//     {
//       id: 2,
//       que: "Tailored Solutions",
//       ans:
//         "The company specializes in customizing homes to suit individual tastes, creating spaces that feel uniquely yours.",
//     },
//     {
//       id: 3,
//       que: "Customer-Centric Approach",
//       ans:
//         "FreedomeAirServices Contracts prides itself on delivering not just a service but a partnership, ensuring that every client is heard and their needs are met.",
//     },
//   ],
// };
// service page

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
    "Designing Spaces With Expert Building and Interior Designs. Experience The Best Builders in Delhi!",
  slug: "contact-us",
  img: banner,
};

export const contactData = {
  title: "Reasons to Choose OM Engineers",
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
          text: "+91 1234567890",
          slug: "tel:+911234567890",
        },
        {
          text: "+91 1234567890",
          slug: "tel:+911234567890",
        },
      ],
    },
    {
      id: 2,
      icon: <RiMailSendLine />,
      para: "E-mail Address",
      data: [
        {
          text: "info@FreedomeAirServices.com",
          slug: "mailto:info@FreedomeAirServices.com",
        },
      ],
    },
    {
      id: 3,
      icon: <GrLocation />,
      para: "Office Address",
      data: [
        {
          text: "2nd Floor, M Block Market, Greater Kailash 2, M 32,",
          slug:
            "https://www.google.com/maps/place/FreedomeAirServices/@28.5330789,77.2413416,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce1905d089649:0x1b43338513750efe!8m2!3d28.5330789!4d77.2413416!16s%2Fg%2F11wxqn0h78",
        },
      ],
    },
  ],
};

export const projectData = {
  projects: [
    {
      id: 1,
      title: "ENCLAVE 93 FLOORS",
      text:
        "CONSTRUCTION OF FLOORS & ROUGH FINISHING WORKS – DLF GARDENCITY ENCLAVE, SECTOR 93",
      imgs: [enclave931, enclave932, enclave933],
      para: [
        "Construction of residential Cluster 19 & 20 floors and rough finishing works, contributing to township-scale housing development.",

        "The execution contributes directly to the structural readiness and functional framework of the residential units, enabling subsequent finishing, MEP, and interior works, while supporting the overall development objectives of the DLF Gardencity Enclave township.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 2.00 CR" },
        { heading: "COMPLETION", info: "2025" },
        { heading: "CLIENT", info: "DLF LIMITED" },
      ],
      cat: "DLF",
    },

    {
      id: 2,
      title: "1000MM DIA SEWER & 1200MM DIA STORM DIVERSION",
      text: "DIVERSION OF 1000MM DIA SEWER LINE – SHANKAR CHOWK, GURUGRAM",
      imgs: [
        sewer,
        sewer2,
        sewer3,
        sewer4,
        sewer5,
        sewer6,
        sewer7,
        sewer8,
        sewer9,
        sewer10,
        sewer11,
        sewer13,
      ],
      para: [
        "Diversion of GMDA master sewer line at a depth of 7m using the manual jacking trenchless method, executed under live traffic conditions for subway underpass construction.",

        "The successful execution of this ensures seamless sewer flow continuity, minimal public inconvenience, and timely support for the subway underpass infrastructure development at Shankar Chowk.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 3.28 CR" },
        { heading: "COMPLETION", info: "2025" },
        { heading: "CLIENT", info: "DLF FOUNDATION " },
      ],
      cat: "DLF",
    },

    {
      id: 3,
      title: "GMDA PROJECT",
      text: "EMERGENCY REHABILITATION OF COLLAPSED SEWER LINES – GURUGRAM",
      imgs: [gmda1, gmda2, gmda3, gmda4],
      para: [
        " Immediate rectification of collapsed master sewer lines across multiple high risk zones, restoring functionality under emergency response timelines.",

        "The execution of this emergency ensures the swift restoration of sewer functionality, minimized public inconvenience, and safeguarded surrounding infrastructure, reinforcing system reliability under critical conditions.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 35 LAKHS" },
        { heading: "COMPLETION", info: "2025" },
        { heading: "CLIENT", info: "GMDA" },
      ],
      cat: "GMDA",
    },

    {
      id: 4,
      title: "SECTOR-68",
      text:
        "INTEGRATED DEVELOPMENT WORKS – DLF ARCADE 68, SCO SECTOR 68, GURUGRAM",
      imgs: [
        sec681,
        sec682,
        sec683,
        sec684,
        sec685,
        sec686,
        sec687,
        sec688,
        sec689,
        sec6810,
      ],
      para: [
        "End-to-end infrastructure creation comprising roads, footpaths, PHE networks, UGT, STP, LT/HT rooms, and horticulture works, transforming SCO plots into a fully developed commercial hub.",

        "The successful execution results in a fully developed, service-ready commercial ecosystem with integrated infrastructure, utilities, and landscape elements. It effectively supports retail and office operations while enhancing functionality, accessibility, and the overall urban character of DLF Arcade 68.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 8.50 CR" },
        { heading: "COMPLETION", info: "2025" },
        { heading: "CLIENT", info: "DLF HOME DEVELOPERS LTD." },
      ],
      cat: "DLF",
    },

    {
      id: 5,
      title: "SCO-84",
      text: "BALANCE CIVIL & FINISHING WORKS – DLF SCO 84, SECTOR 84, GURUGRAM",
      imgs: [sco841, sco842, sco843],
      para: [
        "Completion of civil, UGT, STP, meter room structures, along with finishing works and landscape development.",

        "The execution ensures completion of all balance civil, utility, and finishing works, delivering a ready-to-operate commercial environment. The development aligns with DLF’s design intent, functional planning, and quality benchmarks, ensuring operational efficiency, safety, and long-term asset value.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 3.50 CR" },
        { heading: "COMPLETION", info: "2024" },
        { heading: "CLIENT", info: "DLF HOME DEVELOPERS LTD." },
      ],
      cat: "DLF",
    },

    {
      id: 6,
      title: "DLF SEC-93",
      text: "PHE WORKS – DLF GARDENCITY ENCLAVE, SECTOR 93, GURUGRAM",
      imgs: [dlf931, dlf932, dlf933, dlf934, dlf935, dlf936, dlf937],
      para: [
        "Installation of complete PHE service networks, RCC boundary walls, feeder pillars, and CSS systems for township expansion.",

        "The execution ensures robust, reliable, and scalable PHE infrastructure, facilitating uninterrupted water supply, sewerage, and drainage services. This enables efficient service delivery, supports sustainable growth, and ensures long-term operational sustainability for the expanding DLF Gardencity Enclave township.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 13.00 CR" },
        { heading: "COMPLETION", info: "2025" },
        { heading: "CLIENT", info: "DLF LIMITED" },
      ],
      cat: "DLF",
    },

    {
      id: 7,
      title: "DLF SEC-91 & SEC-92",
      text:
        "PHE AND INFRASTRUCTURE DEVELOPMENT – DLF GARDENCITY,    SECTOR 91 & 92",
      imgs: [dlf911, dlf912, dlf913, dlf914, dlf915],
      para: [
        "Comprehensive PHE works including sewer, stormwater, water supply, and treated water lines, executed through a combination of open-cut excavation and  trenchless techniques across ",

        "The successful execution delivers a robust, efficient, and future-ready PHE network with reliable water supply, sewerage, and stormwater systems. It supports sustainable urban living through efficient resource management and reduced environmental impact. This infrastructure enhances long-term service reliability across DLF Gardencity, Sector 91 & 92.",
      ],
      detail: [
        { heading: "VALUE", info: "RS. 7.48 CR" },
        { heading: "COMPLETION", info: "2024" },
        { heading: "CLIENT", info: "DLF LIMITED" },
      ],
      cat: "DLF",
    },

    {
      id: 8,
      title: "MORE PROJECTS",
      text: "",
      imgs: [other1, other2, other3],
      para: [""],
      detail: [],
      cat: "More",
    },
  ],
};
