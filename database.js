import mongoose from "mongoose";
import Project from "./models/projectsModel.js";

const conn = async () => {
  try {
    await mongoose.connect(process.env.db_URI, {
      dbName: "Voting-System-Project",
    });

    console.log("Successfully connected to the Voting-System-Project Database");

    // Seed projects
    await seedProjects();

  } catch (err) {
    console.log(`Connection failed: ${err}`);
  }
};

const seedProjects = async () => {
  try {
    const projectsData = [
      { projectid: 1, totalVotes: 0, starsGiven: 0 },
      { projectid: 2, totalVotes: 0, starsGiven: 0 },
      { projectid: 3, totalVotes: 0, starsGiven: 0 },
      { projectid: 4, totalVotes: 0, starsGiven: 0 },
      { projectid: 5, totalVotes: 0, starsGiven: 0 },
      { projectid: 6, totalVotes: 0, starsGiven: 0 },
      { projectid: 7, totalVotes: 0, starsGiven: 0 },
      { projectid: 8, totalVotes: 0, starsGiven: 0 },
      { projectid: 9, totalVotes: 0, starsGiven: 0 },
      { projectid: 10, totalVotes: 0, starsGiven: 0 },
      { projectid: 11, totalVotes: 0, starsGiven: 0 },
      { projectid: 12, totalVotes: 0, starsGiven: 0 },
      { projectid: 13, totalVotes: 0, starsGiven: 0 },
      { projectid: 14, totalVotes: 0, starsGiven: 0 },
      { projectid: 15, totalVotes: 0, starsGiven: 0 },
      { projectid: 16, totalVotes: 0, starsGiven: 0 },
      { projectid: 17, totalVotes: 0, starsGiven: 0 },
      { projectid: 18, totalVotes: 0, starsGiven: 0 },
      { projectid: 19, totalVotes: 0, starsGiven: 0 },
      { projectid: 20, totalVotes: 0, starsGiven: 0 },
      { projectid: 21, totalVotes: 0, starsGiven: 0 },
      { projectid: 22, totalVotes: 0, starsGiven: 0 },
      { projectid: 23, totalVotes: 0, starsGiven: 0 },

    ];

    // Check if projects already exist
    const existingProjects = await Project.find();
    //console.log('Existing Projects:', existingProjects);
    
    if (existingProjects.length === 0) {
      // Insert the initial projects
      await Project.insertMany(projectsData);
      console.log('Projects seeded successfully.');
    } else {
      console.log('No projects found or projects already exist. Skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding projects:', error);
  }
};

export default conn;
