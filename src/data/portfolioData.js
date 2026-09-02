import projectsData from "./content/projects.json";
import skillsData from "./content/skill.json";
import experienceData from "./content/experience.json";
import educationData from "./content/education.json";

const normalizeSkills = () => {
  if (Array.isArray(skillsData.skills)) {
    return skillsData.skills;
  }

  return Object.values(skillsData.skills || {}).flat();
};

const validateData = () => {
  const errors = [];
  const skills = normalizeSkills();

  if (!projectsData.projects || projectsData.projects.length === 0) {
    errors.push("No hay proyectos disponibles");
  }

  if (!skills.length) {
    errors.push("No hay habilidades disponibles");
  }

  const allTechs = new Set(skills.map((skill) => skill.id));

  projectsData.projects?.forEach((project) => {
    project.technologies?.forEach((techId) => {
      if (!allTechs.has(techId)) {
        errors.push(
          `⚠️ Proyecto "${project.title}" usa tecnología "${techId}" no definida`,
        );
      }
    });
  });

  if (errors.length > 0) {
    console.warn("⚠️ Advertencias en los datos:", errors);
  }

  return errors;
};

validateData();

export const portfolioData = {
  projects: projectsData.projects || [],
  skills: normalizeSkills(),
  experience: experienceData.experience || [],
  education: educationData.education || [],
};

export const getProjectById = (id) => {
  return portfolioData.projects.find((project) => project.id === id);
};

export const getFeaturedProjects = () => {
  return portfolioData.projects.filter((project) => project.featured);
};

export const getProjectsByTechnology = (techId) => {
  return portfolioData.projects.filter((project) =>
    project.technologies?.includes(techId),
  );
};

export const getProjectsByCategory = (category) => {
  return portfolioData.projects.filter((project) =>
    project.category?.includes(category),
  );
};

export const getAllSkills = () => {
  return portfolioData.skills;
};

export const getSkillsByCategory = (category) => {
  return portfolioData.skills.filter((skill) => skill.category === category);
};

export const getSkillById = (id) => {
  return portfolioData.skills.find((skill) => skill.id === id) || null;
};

export const getCurrentExperience = () => {
  return portfolioData.experience.filter((item) => item.current);
};

export const getCurrentEducation = () => {
  return portfolioData.education.filter((item) => item.current);
};

export const getStats = () => ({
  totalProjects: portfolioData.projects.length,
  featuredProjects: portfolioData.projects.filter((project) => project.featured)
    .length,
  totalSkills: portfolioData.skills.length,
  totalExperience: portfolioData.experience.length,
  totalEducation: portfolioData.education.length,
  categories: [
    ...new Set(
      portfolioData.projects.flatMap((project) => project.category || []),
    ),
  ],
  technologies: [
    ...new Set(
      portfolioData.projects.flatMap((project) => project.technologies || []),
    ),
  ],
});

export default portfolioData;
