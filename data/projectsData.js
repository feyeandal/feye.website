const projectsData = [
  {
    title: 'Automated Basic Resource Recognition and Allocation Model (ABRRAM)',
    description: `The Automated Basic Resource Recognition and Allocation Model (ABRRAM) is an interdisciplinary initiative dedicated to enhancing disaster risk reduction and management (DRRM) through resource identification, allocation, and optimized distribution. Our model integrates cutting-edge technologies from various disciplines to assist local government units (LGUs) in effectively managing and distributing essential resources during times of crisis.`,
    imgSrc: '/static/images/abrram.png',
    href: 'https://abrram.up.edu.ph/',
  },
  {
    title: 'State of the Map 2025',
    description: `State of the Map is the annual event for all mappers and OpenStreetMap users. In 2025, the State of the Map conference will be taking place in Manila, Philippines and online. It will be a three day conference packed with talks, workshops, discussion rounds and more.`,
    imgSrc: '/static/images/sotm2025.png',
    href: 'https://2025.stateofthemap.org/',
  },
  {
    title:
      'Toolkit for Assessing the Impact of Typhoons to Fishing Activities  in the Philippines​',
    description: `This open-source, automated, and scalable pilot solution developed under the Asian Development Bank is designed to measure and predict the impact of tropical cyclones on fishing activities. Using publicly available remote sensing data, the toolkit tracks changes in the number of fishing boats before, during, and after cyclones.`,
    imgSrc: '/static/images/adb_fishing.gif',
    href: 'https://www.sciencedirect.com/science/article/pii/S0165783624002856#sec0035',
  },
  {
    title: 'Impact-Based Flood Forecasting System in the Philippines',
    description: `The Impact-Based Flood Forecasting System is developed by the UP Resilience Institute NOAH-Center and Weather Manila, in collaboration with the Academic Alliance for Anticipatory Action (4As) and was funded by the United States Agency for International Development's Bureau for Humanitarian Assistance (USAID/BHA). It allows users to determine how many people per barangay will be affected by a large flood event, 24 hours from the timestamp of the displayed rain forecast. The results can be viewed in tabular format where specific information can be searched.`,
    imgSrc: '/static/images/impact-based.jpg',
    href: 'https://noah.up.edu.ph/noah-studio',
  },
  {
    title: 'Quake Quest 2024',
    description: `Quake Quest is a three-month scientific research competition hosted by the University of the Philippines Resilience Institute (UPRI), together with the University of the Philippines Intelligent Systems Center (UP ISC), aiming to utilize the UPRI's archived seismic data.`,
    imgSrc: '/static/images/qq2024.jpg',
    href: 'https://upri-earthquake.github.io/quake-quest/src/index.html',
  },
  {
    title: 'Data Collection on Urban Heat in Pasig City, Philippines',
    description: `The World Bank, in collaboration with the UPRI YouthMappers team, conducted an urban heat data collection in Pasig City, expanding beyond traditional infrastructure mapping to integrate temperature measurements in public schools and parks. This initiative builds on Arizona State University YouthMappers’ expertise, marking UPRIYM’s first specialized effort in urban heat assessment for disaster resilience.`,
    imgSrc: '/static/images/kestrel.jpg',
    href: 'https://feyeandal.me/blog/exploring-urban-heat-pasig-city',
  },
  {
    title: 'Building the YouthMappers Regional Validation Hub: Philippine Camp',
    description: `The YouthMappers Regional Validation Hub: Philippine Camp is an immersive four-session experience crafted to elevate YouthMappers' OpenStreetMap validation skills.`,
    imgSrc: '/static/images/phcamp_proj.jpg',
    href:
      'https://feyeandal.notion.site/YouthMappers-Regional-Validation-Hub-Philippine-Camp-4703d26693a941b5a89e3b98d9c82ec0?pvs=74',
  },
  {
    title: '7th Annual International Humanitarian Mapathon 2024',
    description: `I, through my team at the UP Resilience Institute YouthMappers, co-hosted the 7th International Humanitarian Mapathon (IHM) with the UN Smart Maps alongside partners such as UCLA, USC, Reitaku University, Aoyama Gakuin University, MapTime LA, University of Hawai’i, and more. Participants joined from all over the world – Japan, Mexico, the Philippines, and the US – to learn how to contribute to humanitarian mapping efforts and craft maps that tell a story.`,
    imgSrc: '/static/images/mapathon_la.jpg',
    href: 'https://mapathon.la/en/',
  },
  {
    title:
      'PedalMap: Engaging biking communities in open mapping initiatives for UN Sustainable Development Goals (SDG) ',
    description: `During Open Data Day 2024, we, the UP Resilience Institute YouthMappers (UPRIYM) started collaborating with Tiklop Society of the Philippines (TSP) to engage biking communities in open mapping initiatives for Sustainable Development Goals (SDG).TSP is a non-government organization that promotes bi-modal transportation through folding bikes.`,
    imgSrc: '/static/images/pedal_map_proj.jpg',
    href: 'https://blog.okfn.org/2024/03/26/oddstories-2024-quezon-city-philippines/',
  },
  {
    title:
      "BATAlert: Capacitating Children's DRRM Skills through the development of Community-Based Modules",
    description: `BATAlert aims to engage children with Disaster Risk Reduction and Management (DRRM) concepts and disaster reporting using age-appropriate methods like interactive and fun games.`,
    imgSrc: '/static/images/batalert_proj.jpg',
    href:
      'https://resilience.up.edu.ph/upri-youthmappers-launches-batalert-capacitating-childrens-drrm-skills-through-the-development-of-community-based-modules/',
  },
  {
    title: 'State of the Map Asia 2023',
    description: `State of the Map Asia (SotM-Asia) is a regional SotM conference for the continent of Asia. We hope to serve and gather 300-500 participants from Asia and beyond to connect and discuss not only OpenStreetMap and open data tools, projects and challenges, but also showcase diverse Asian cultures.`,
    imgSrc: '/static/images/sotmasia2023.png',
    href: 'https://stateofthemap.asia/',
  },
  {
    title: 'Pista ng Mapa 2023',
    description: `Pista ng Mapa (Festival of Maps) is the pioneer and premier free (as to cost and as in freedom) and open conference in the Philippines made for and by people who have a passion for open mapping, open data, and open source. Pista ng Mapa 2023 is happening in Tacloban City, Leyte, and is hosted by UP Visayas Tacloban YouthMappers.`,
    imgSrc: '/static/images/pnm2023.png',
    href: 'https://stateofthemap.asia/',
  },
  {
    title: 'YouthMappers Asia UpSkilling Series',
    description: `Over the years, our mission has been bringing universities/student organizations into the YouthMappers network, igniting their passion for open mapping, and supercharging their community impact. But this year, we're cranking it up a notch! We are now focusing our efforts in elevating their technical skills, especially in the field of open mapping.`,
    imgSrc: '/static/images/project_upskilling.jpg',
    href: 'https://feyeandal.me/blog/youthmappers-asia-upskilling-series',
  },
  {
    title: 'Pista ng Mapa x State of the Map Asia 2022',
    description: `Pista ng Mapa (Festival of Maps) is the pioneer and premier free (as to cost and as in freedom) and open conference in the Philippines made for and by people who have a passion for open mapping, open data, and open source. Meanwhile, State of the Map Asia is the regional OpenStreetMap conference for the continent of Asia, that brings together participants from around the world to discuss challenges, learn, and celebrate many years of mapping together.`,
    imgSrc: '/static/images/pnmxsotma.png',
    href: 'https://pistangmapa.org/2022/',
  },
  {
    title: "OSM-Philippines' Booster Grant Program",
    description: `OSM Philippines Community was one of the recipients of the Booster Grants by the Open Mapping Hub - Asia Pacific last October 2021. This project is partnered with Smart CT and aims to boost the activities of the local OSM community in the Philippines. The total amount of the Booster Grant is $25,000.00 which will be divided into four (4) tranches.`,
    imgSrc: '/static/images/osmph_booster.png',
    href: 'https://wiki.openstreetmap.org/wiki/OSM_Philippines_Booster_Grants_2022',
  },
  {
    title: 'The Revamped NOAH Website',
    description: `The revamped NOAH website is a project of UP Resilience Institute - NOAH Center in partnership with Mapbox. It builds upon and improves NOAH's exsiting features using Mapbox technologies! It is geared to allow users to be more informed and better prepared to deal with hazards that may affect the areas they live and work in.`,
    imgSrc: '/static/images/revamped_noah.jpg',
    href: 'https://noah.up.edu.ph/',
  },
  {
    title: 'HOT Philippines - PhilAWARE',
    description: `HOT-Philippines, together with the Pacific Disaster Center (PDC), Office of Civil Defense, PetaBencana.id, and USAID started the PhilAWARE Project last July 2019. The project aims to collect the local critical lifeline infrastructures based on the PhilAWARE Data Model and complete the building footprints and road network of Pampanga, Quezon City, and Marikina City.`,
    imgSrc: '/static/images/hotph.png',
    href: 'https://feyeandal.github.io/hotphmappingteam/',
  },
  {
    title: 'Development of a Web-based Awareness & Decision Support System (endcov.ph) on COVID-19',
    description: `The web portal endcov.ph was released late of March 2020 to provide the UP community and the general public with vital information for fighting COVID-19 in the country.`,
    imgSrc: '/static/images/endcov.png',
    href: 'https://endcov.up.edu.ph/',
  },
  {
    title: 'Building Resilient Communities in Bohol',
    description: `The UP Resilience Institute Youth Mappers (UPRIYM) was awarded a grant by the TELUS Community Board to implement this project. Building footprints and road network were mapped and municipal-level risk maps were produced for the province of Bohol using open-source tools such as OpenStreetMap (OSM), QGIS, and WebSAFE that can be used for disaster risk planning and mitigation of the province.`,
    imgSrc: '/static/images/bohol_ym.jpg',
    href:
      'https://wiki.openstreetmap.org/wiki/Philippines/Building_Resilient_Communities_in_Bohol_Through_the_Use_of_OpenStreetMap',
  },
  {
    title: 'Project NOAH - ISAIAH ',
    description: `Project NOAH finished mapping the building footprints of ISAIAH’s 15 target provinces through OpenStreetMap. The translated building footprints data mapped by NOAH through OSM is integrated into the WebSAFE application of Project NOAH.`,
    imgSrc: '/static/images/PH_ISAIAH.gif',
    href: 'https://www.openstreetmap.org/user/feyeandal/diary/40567',
  },
  {
    title:
      'Community Mapping for Disaster Risk Reduction and Management: Harnessing Local Knowledge to Build Resilience',
    description: `In 2013, the World Bank, the Department of Interior and Local Government, and the Institute of Environmental Science for Social Change launched a project on Community Mapping and LGU Decision Support Tools for Disaster Risk Reduction and Management.`,
    imgSrc: '/static/images/essc_osm.png',
    href:
      'https://www.gfdrr.org/sites/default/files/publication/Community-Mapping-for-Disaster-Risk-Reduction-and-Management_0.pdf',
  },
]

export default projectsData
