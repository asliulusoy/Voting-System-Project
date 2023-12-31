// Proje bilgilerini içeren nesneleri oluşturun (örneğin, projenin adı, resmi, metin dosyası URL'si vs.)
const projects = {
    project1: {
        id: 1,
        name: "SMA Connect",
        aim: "Nowadays, the number of SMA patients in Turkey has increased a lot. Hopeless families are working to collect money for the treatment of their child. Medicine and surgery prices are too expensive for the families to effort. That is the reason we witness that people are trying to find volunteers at donation points, social media and public transportation vehicles. Unfortunately, there are some poisonous mentalities acting like patients’ parents to steal volunteers’ money. This situation makes volunteers feel uncomfortable and turn their donating desire off. Our project aims to minimize the doubt of the volunteers while creating a new and safe area for the patients to collect their donations more easily.",
        importance: "According to the data of the ministry of health, approximately 150 babies are born with SMA disease. Every single baby can change the world in a good way, if we give them the opportunity to grow up healthy. Since the medicine prices are too high, donations are taking up an important space in the treatment process. In order to increase the number of donations, this project will make people more willing to donate. This mobile application will be a safety place with certificated IBAN numbers and the approvements of doctors. Therefore, the volunteers are able to make their donation with peace of mind. This official donation application will destroy donators’ hesitations of giving their money to a possible fake patient. So that, after breaking the question marks of the volunteers, this project has the potential to save thousands of lives.",
        imageSrc:  [ "/images/prj_img/project_1/project1_1.jpg",
          "/images/prj_img/project_1/project1_2.jpg",
          "/images/prj_img/project_1/project1_3.jpg",
          "/images/prj_img/project_1/project1_4.jpg",
          "/images/prj_img/project_1/project1_5.jpg",
          "/images/prj_img/project_1/project1_6.jpg",
          "/images/prj_img/project_1/project1_7.jpg",
          "/images/prj_img/project_1/project1_8.jpg",
          "/images/prj_img/project_1/project1_9.jpg",
          "/images/prj_img/project_1/project1_10.jpg"
    ]
      },
    project2: {
        id: 2,
        name: "Employee Attrition Analysis",
        aim: "Employee attrition is defined as the departure of employees from their organization for unpredictable and uncontrollable reasons. This project aims to predict employee attrition for a company or an organization within a few months using machine learning algorithms and give feedback to the human resources of that company or organization. The dataset contains several features such as employee age, monthly income, work-life balance, business travel, years at the company, etc.",
        importance: " This project is crucial for companies so that human resources can adjust hiring strategies and turnovers. Turnover might be costly due to recruitment, training, and lost productivity. The risk of employees leaving can be identified with this project, allowing proactive measures to retain valuable talent and reduce the financial impact of turnovers. The project can help identify factors that lead to employee attrition. Understanding these factors can enable companies or organizations to implement targeted retention strategies such as improving work conditions, and offering career development opportunities.",
        imageSrc:  "/images/prj_img/project_2/project2_1.jpg",
        //  "/images/prj_img/project_2/project2_2.jpg",
        //  "/images/prj_img/project_2/project2_3.jpg",
        //  "/images/prj_img/project_2/project2_4.jpg",
        //  "/images/prj_img/project_2/project2_5.jpg",
        //  "/images/prj_img/project_2/project2_6.jpg",
        //  "/images/prj_img/project_2/project2_7.jpg",
        //  "/images/prj_img/project_2/project2_8.jpg"

      },
    project3:  {
        id: 3,
        name: "LearnBook - A Community Page for Bilgi Students",
        aim: "The primary goal of this project is to develop a website that enables students to create personal profiles and engage in social interactions. Users can connect with students by following various communities, such as “Chess Club” or “Robotics Club”. Moreover, they can join to seek assistance and ask questions regarding their courses or maybe even a university issue in a group chat. Lastly, the project will allow students to post diverse types of media on a centralized feed page. While the project resembles platforms such as “Facebook” in concept, it is specifically designed for the use of Bilgi students.",
        importance: "The significance of this project is its potential to provide support for students in need of help, especially first-year students. First-year students often require help and a community page can serve as a platform to connect students. The project will facilitate the establishment of new connections with other students from other departments. For instance, it can connect students with shared interests, such as students with an interest in machine learning. And they can start helping each other or even start projects. Also, for every course given at Bilgi tends to have a certain 'WhatsApp' group created by a random student, and there exists hundreds of them. It would be very convenient if all those groups can be found in one place, So whenever a student is in need of help in any certain course they could simply search for such group on the platform.",
        imageSrc:  "/images/prj_img/project_3/project3_1.jpg",
        //  "/images/prj_img/project_3/project3_2.jpg",
        //  "/images/prj_img/project_3/project3_3.jpg",
        //  "/images/prj_img/project_3/project3_4.jpg",
        //  "/images/prj_img/project_3/project3_5.jpg"
      },
    project4: {
        id: 4,
        name: "Interactive SantralCampus Map",
        aim: "The primary aim of this project is to develop a comprehensive and user-friendly campus map for Istanbul Bilgi University . The campus map will serve as a valuable tool for students, faculty, and visitors to navigate the university grounds efficiently. The system will be designed to provide real-time information about the locations of various departments, classrooms, offices, recreational areas, and other points of interest within the campus.",
        importance: "The importance of the Bilgi University Campus Map project lies in: Enhanced Navigation: A well-designed campus map will facilitate easy navigation for students, staff, and visitors, saving time and reducing confusion. Improved Accessibility: The map will include features that enhance accessibility for individuals with special needs, promoting inclusivity within the university community. Efficient Resource Utilization: The map will optimize resource utilization by providing information on the availability of facilities and spaces, helping in better planning and scheduling.",
        imageSrc: "/images/prj_img/project_4/project4_1.jpg",
        //  "/images/prj_img/project_4/project4_2.jpg",
        //  "/images/prj_img/project_4/project4_3.jpg",
        //  "/images/prj_img/project_4/project4_4.jpg",
        //  "/images/prj_img/project_4/project4_5.jpg"
      },
    project5: {
        id: 5,
        name: "Lost and Found Website for Santral Campus (Santral's L&F)",
        aim: "The website offers the campus community a secure platform to report and view missing items, and communicate directly with the lost and found office through a chatting system.",
        importance: "The website creates a centralized system for the lost and found items, which makes the process of retrieval less of a hassle and more efficient for both users and staff. The digital accessibility of the website helps raise awareness about the missing items and keeps the users up to date easily and instantly.",
        imageSrc: "/images/prj_img/project_5/project5_1.jpg",
        //  "/images/prj_img/project_5/project5_2.jpg",
        //  "/images/prj_img/project_5/project5_3.jpg",
        //  "/images/prj_img/project_5/project5_4.jpg"
      },
    project6: {
        id: 6,
        name: "RFID Door Lock with Appointment System Integration",
        aim: "This project is aimed to increase security and patient privacy in the chaotic nature of real world hospitals. By allowing only the relevant people in the room in a hospital setting, patient examinations and various procedures will not be disturbed by irrelevant people.",
        importance: "This innovative solution aims to enhance security and privacy in mainly hospitals and other environments where access queues are needed.",
        imageSrc: "/images/prj_img/project_6/project6_1.jpg",
        //  "/images/prj_img/project_6/project6_2.jpg"
      },
    project7: {
        id: 7,
        "name": "Proje 7",
        "aim": "None",
        "importance": "None",
        "imagePaths": [ ]
      },
    project8: {
        id: 8,
        "name": "Proje 8",
        "aim": "None",
        "importance": "None",
        "imagePaths": [ ]
      },
    project9: {
        id: 9,
        name: "Where Should I Go?",
        aim: "Nowadays, planning a trip abroad can be a challenging process for many people. Not knowing the characteristics of cities in foreign countries, what they are famous for, budget availability and vacation experience can lead people to indecision and difficulty. A website has been developed that offers a practical solution to this problem. The main goal is to provide users with cities from around the world for vacations with the desired characteristics. At the same time, it allows the user to get advance information about the city they will be traveling to. The website provides the user with a choice of cities to choose from and helps them determine their vacation preferences. It allows users to make more informed decisions by providing information about the prominent features, cultural richness, natural beauties, and entertainment options of the cities. In conclusion, it helps users discover cities that fit their financial situation by providing suggestions for budget-friendly travel. This reduces the uncertainties encountered during the vacation planning process and allows users to make travel plans with more confidence.",
        importance: "The website guides users in exploring various cities around the world and determining their vacation preferences so that they can enjoy the travel planning process more, have more control over experiencing the kind of vacation they want, and return from their vacation with the satisfaction they want, having a travel experience full of unforgettable memories.",
        imageSrc: "/images/prj_img/project_9/project9_1.jpg", 
        //  "/images/prj_img/project_9/project9_2.jpg",
        //  "/images/prj_img/project_9/project9_3.jpg",
        //  "/images/prj_img/project_9/project9_4.jpg",
        //  "/images/prj_img/project_9/project9_5.jpg",
        //  "/images/prj_img/project_9/project9_6.jpg",
        //  "/images/prj_img/project_9/project9_7.jpg"
      },
    project10:     {
        id: 10,
        name: "Disaster Management and Emergency Response Application",
        aim: "In this project, by working in cooperation with non-governmental organizations, trying to develop a central application that will help their volunteering system. The basic training of volunteers, it is aimed to accurately detect the damage after the disaster and facilitate the distribution of resources and manpower by entering the data into the system and collecting it through a single application. Reducing misinformation and making communication easier in the aftermath of natural disasters, collecting volunteer information into a single source and making sure volunteers can pass in data to the system.",
        importance: "Turkey is one of the most important seismic active countries in the world. Turkey is between three major tectonic plates and compressed towards the north by Arabian and African plates. This region is the most active area of the Mediterranean region in terms of earthquake activity. The observed earthquakes are generated as a result of the collision of the Arabian and African plates with Eurasia. Many disasters happened in Turkey through the time, and regardless of their severity, most of the time telecommunications networks collapse, and communication is disrupted as the capacity of telephone providers is exceeded. Communication is attempted to be carried out over internet, through social media, and in the meantime, problems such as misinformation and manipulation are encountered during the dissemination of information. Problems that arise and hinder rescue efforts after natural disasters such as corruption of information and incorrect information being sent to professional help teams. One of the main importance of this project is enhanced communication, even for the small scale of emergency events, it is possible for to collapse of telecommunications networks to occur due to high demand. It is beneficial to collect inquiries via an internet connection and collect them on a single centralised platform to have better management of the resources and allocate supplies and equipment.",
        imageSrc:  "/images/prj_img/project_10/project10_1.jpg",
        //  "/images/prj_img/project_10/project10_2.jpg",
        //  "/images/prj_img/project_10/project10_3.jpg",
        //  "/images/prj_img/project_10/project10_4.jpg"
      },
    project11: {
        id: 11,
        "name": "Proje 11",
        "aim": "None",
        "importance": "None",
        "imagePaths": [ ]
      },
    project12: {
        id: 12,
        name: "Labyrinth Of The Damned",
        aim: "Labyrinth of the Damned is a 3D interactive horror exploration game set in an abandoned research facility infested with zombies. As a lone survivor, your goal is to navigate haunted corridors, solve puzzles, shoot zombies, and escape the facility. Armed with little to no resources, your ultimate objective is to make it out of there alive. This will be implemented in Unity Engine, utilizing C-Sharp for the scripts, as well as free assets sourced online. The aim is to develop a compelling, fully functional game demo that not only showcases outstanding capabilities as game developers but also captivates the player base. Subsequently, one of the goals is to release the completed game to a wide audience, providing an immersive gaming experience for all.",
        importance: "Labyrinth of the Damned will be a highly immersive game that provides players with unforgettable experiences, and some truly horrifying moments. The horrific nature of the game alongside the environmental story-telling that occurs throughout well-designed areas in the game are one of many selling points. This experience will also be accessible to all sorts of players, whether they play through a keyboard and mouse, or a controller.",
        imageSrc: []
    },
    project13: {
        id: 13,
        name: "Hotel Automation",
        aim: "The aim of the project is to develop a web application that can be used by customers and employees of the hotel for faster, more consistent guest service. Using the application, guests will be able to request a spa appointment, order any product from the hotel stocks, apply for extra accommodation, and request an extension of their stay without speaking to the reception. Employees will be able to see requests from guests, check the product stocks and guide them accordingly. Application will enable new guests to access hotel rooms more easily and make reservations directly at the hotel price.",
        importance: "As hotels struggle with labor shortages, automation is essential to delivering a great guest experience. By handling what were traditionally manual tasks, like check-in, hotel technology reduces pressure on staff, helps minimize errors, and improves guest experience.",
        imageSrc: "/images/prj_img/project_13/project13_1.jpg",
        //  "/images/prj_img/project_13/project13_2.jpg",
        //  "/images/prj_img/project_13/project13_3.jpg",
        //  "/images/prj_img/project_13/project13_4.jpg",
        //  "/images/prj_img/project_13/project13_5.jpg"
      },
    project14: {
        id: 14,
        name: "E-Paw",
        aim: "First of the two main aim of the project is to gather the vets and the pet owners together for synchronized flow of information of the pets. The other object is to be a help to street animals by providing a donation system. Our motto is 'Paws for Hands'. We want to bring our hands together for the well-being of all paws.",
        importance: "As humans we deal with a lot of tasks daily and inbetween them, even though we put our pets in the centre of our lives, we might end up delaying some of their routine checks or healthcare appointments. This project aims to be a solution to that. Also, it is a known fact that the street animals do not have the same opportunities as owned animals, especially in terms of healthcare services, so we want to raise awareness in behalf of them and be a help to them.",
        imageSrc:  "/images/prj_img/project_14/project14_1.jpg",
        //  "/images/prj_img/project_14/project14_2.jpg",
        //  "/images/prj_img/project_14/project14_3.jpg",
        //  "/images/prj_img/project_14/project14_4.jpg",
        //  "/images/prj_img/project_14/project14_5.jpg",
        //  "/images/prj_img/project_14/project14_6.jpg",
        //  "/images/prj_img/project_14/project14_7.jpg",
        //  "/images/prj_img/project_14/project14_8.jpg",
        //  "/images/prj_img/project_14/project14_9.jpg",
        //  "/images/prj_img/project_14/project14_10.jpg"
      },
    project15: {
        id: 15,
        name: "Pıtırık Tarifler",
        aim: "This project aims to facilitate users finding recipes easily with the ingredients they have at home, enabling quick access to desired recipes while also preventing ingredient wastage. Additionally, it aims to simplify meal choices for indecisive users by providing daily menu suggestions. Pıtırık Tarifler is designed with a simple interface that users of all ages can comfortably navigate. This way, anyone, regardless of their level of experience in the kitchen, can quickly access recipes online and prepare fantastic meals with the ingredients available at home. This platform aims to make the cooking process more enjoyable while minimizing ingredient wastage, providing a more sustainable kitchen experience.",
        importance: "This project allows users to create customized recipe lists based on their kitchen inventory with a different approach from its counterparts. When users input the ingredients in their pantries into the system, they'll be able to easily generate recipes that can be prepared with those ingredients. Moreover, upon entering a specific recipe, they can view the missing ingredients, thus efficiently creating their shopping lists. Its web- based nature enables users to access the platform from any device, anytime, reducing paper consumption and offering an eco-friendly approach. By digitizing our users' kitchen experiences, we enhance their convenience while enabling them to act in an environmentally conscious manner.",
        imageSrc:  "/images/prj_img/project_15/project15_1.jpg",
        //  "/images/prj_img/project_15/project15_2.jpg",
        //  "/images/prj_img/project_15/project15_3.jpg",
        //  "/images/prj_img/project_15/project15_4.jpg",
        //  "/images/prj_img/project_15/project15_5.jpg",
        //  "/images/prj_img/project_15/project15_6.jpg",
        //  "/images/prj_img/project_15/project15_7.jpg",
        //  "/images/prj_img/project_15/project15_8.jpg",
        //  "/images/prj_img/project_15/project15_9.jpg"
      },
    project16:  {
        id: 16,
        name: "Medication Review System",
        aim: "The goal of our Medication Review website is to help people share and find information about different medicines. Users can write about their experiences and read what others have to say. This way, we aim to make it easier for everyone to learn more about medications, their effects, and what people think about them. The main idea is to create a simple and helpful space where users can support each other in making informed decisions about their health.",
        importance: "The project is important because it helps people learn from each other's experiences with medications. By sharing reviews and comments, users can make more informed decisions about their health. It creates a helpful community where individuals can support one another in understanding the effects and satisfaction levels associated with different medicines. Ultimately, the project aims to empower users to take control of their health by providing access to valuable insights and knowledge from real-life experiences.",
        imageSrc:   "/images/prj_img/project_16/project16_1.jpg",
        //  "/images/prj_img/project_16/project16_2.jpg",
        //  "/images/prj_img/project_16/project16_3.jpg",
        //  "/images/prj_img/project_16/project16_4.jpg",
        //  "/images/prj_img/project_16/project16_5.jpg"
      },
    project17: {
        id: 17,
        name: "WordCraft",
        aim: "WordCraft is an innovative mobile app designed to empower language learners of all levels to learn a new language effectively and with confidence. Whether you're a beginner looking to grasp the basics or an advanced learner aiming for fluency.",
        importance: "A new app could offer unique features or content that other apps do not have, or it could improve upon existing features to provide a better user experience. Ultimately, the goal of any language learning app should be to help learners achieve their language learning goals in an effective and enjoyable way.",
        imageSrc: "/images/prj_img/project_17/project17_1.jpg",
        //  "/images/prj_img/project_17/project17_2.jpg",
        //  "/images/prj_img/project_17/project17_3.jpg",
        //  "/images/prj_img/project_17/project17_4.jpg",
        //  "/images/prj_img/project_17/project17_5.jpg",
        //  "/images/prj_img/project_17/project17_6.jpg",
        //  "/images/prj_img/project_17/project17_7.jpg"
      },
    project18: {
        id: 18,
        name: "TeknoHome",
        aim: "The primary aim of this project is to revolutionize the concept of home living by implementing a simple and personalized smart home automation system. Through intricate integration of the Tekno-Home system and IOT devices, the goal here is to create a place that suits the unique preferences and daily routines of the house residents. This project aims to redefine the way people feel and interact in their living spaces, offering not just convenience but an unparalleled level of enhancements that boosts comfort, energy efficiency, and overall well-being.",
        importance: "In an era that’s affected heavily by rapid technological advancement, this project addresses the fundamental need for homes to evolve beyond just basic home needs. The importance lies in the creation of an intelligent yet easy living space that not only simplifies daily tasks through automation, but it also assures suitability to the dynamic lifestyles of its residents. By providing customized experiences like luminous varying lightings, environmental conditions, and automation settings, Tekno-Home seeks to enhance the quality of life, promote energy efficiency, and overall create the perfect home for modern living. This venture is not just about technology, it’s about creating homes that resonate with the individuality of each occupant, ultimately redefining the concept of home in the 21st century.",
        imageSrc: "/images/prj_img/project_18/project18_1.jpg"
      },
    project19: {
        id: 19,
        name: "Proje 19",
        aim: "None",
        importance: "None",
        imageSrc: [ ]
      },
    project20: {
        id: 20,
        name: "Proje 20",
        aim: "None",
        importance: "None",
        imageSrc: []
      },
    project21: {
        id: 21,
        name: "Smart Home With App",
        aim: "The aim of this project is to construct a miniature replica of a smart home controllable through a mobile app to display IoT functionality and home automation. This project aims to highlight how home automation can enhance the general way of doing things.",
        importance: "The importance of this project lies in the fact that it serves as a means to comprehend and illustrate the potential of IoT technology. Creating a small-scale replica of a smart home controllable through a mobile app allows for a practical display of how automation can enhance daily life beyond traditional methods.",
        imageSrc:  "/images/prj_img/project_21/project21_1.jpg",
        //  "/images/prj_img/project_21/project21_2.jpg",
        //  "/images/prj_img/project_21/project21_3.jpg"
      },
    project22: {
        id: 22,
        name: "Engineers Community Website",
        aim: "The project wants to create a friendly online space for engineers worldwide to work together on projects, encourage project management skills, build a supportive community, help engineers showcase their work, and have a big impact on engineering education.",
        importance: "The project is very important for engineers as it encourages teamwork across different areas, lets students use what they learn in real projects, promotes creative thinking, prepares for real work situations, connects engineers from various fields, allows global collaboration, boosts career skills, introduces relevant technologies, contributes to research, and improves the overall quality of engineering education.",
        imageSrc:  "/images/prj_img/project_22/project22_1.jpg",
        //  "/images/prj_img/project_22/project22_2.jpg",
        //  "/images/prj_img/project_22/project22_3.jpg",
        //  "/images/prj_img/project_22/project22_4.jpg",
        //  "/images/prj_img/project_22/project22_5.jpg",
        //  "/images/prj_img/project_22/project22_6.jpg",
        //  "/images/prj_img/project_22/project22_7.jpg",
        //  "/images/prj_img/project_22/project22_8.jpg"
      },
    project23: {
        id: 23,
        name: "Proje 23",
        aim: "None",
        importance: "None",
        imageSrc: [ ]
      },
    project24: {
        id: 24,
        name: "Proje 24",
        aim: "None",
        importance: "None",
        imageSrc: [ ]
      }

    // Diğer projeler...
};

// Her bir buton için olay dinleyicisi ekleme
Object.keys(projects).forEach(projectId => {
    const button = document.getElementById(projectId);
    button.addEventListener("click", () => displayProjectInfo(projects[projectId]));
});

// Proje bilgilerini gösteren fonksiyon
function displayProjectInfo(project) {
    const projectImage = document.getElementById("projectImage");
    const projectText = document.getElementById("projectText");
    const projectInfoContainer = document.getElementById("projectInfoContainer");

    // Proje bilgilerini güncelle
    projectImage.src = project.imageSrc;
    projectText.textContent = project.name;

    // Ekranı göster
    projectInfoContainer.style.display = "block";
}

// Sayfa yüklendiğinde proje ekranını gizle
document.addEventListener("DOMContentLoaded", () => {
    const projectInfoContainer = document.getElementById("projectInfoContainer");
    projectInfoContainer.style.display = "none";
});
