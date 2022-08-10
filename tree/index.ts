const experience_item = {
  id: 1,
  company: "Company name",
  profesion: "Profesion",
  date: {
    start: "2012",
    end: "2014",
  },
  summary: "Summary",
  tecnologies: ["tecnologie", "tecnologie", "tecnologie"],
}

const education_item = {
  id: 1,
  company: "Education company name",
  profesion: "Profesion title",
  date: {
    start: "2012",
    end: "2014",
  },
  summary: "Summary",
  tecnologies: ["tecnologie", "tecnologie", "tecnologie"],
}

const project_item = {
  id: 1,
  link: {
    icon: "icon_link",
    name: "Project name",
    path: "path_url",
  },
  summary: "Summary",
  tecnologies: ["tecnologie", "tecnologie", "tecnologie"],
}

const skill_item = {
  id: 1,
  name: "Skill name",
  years: 3,
}

const social_item = {
  id: 1,
  icon: "icon_url",
  name: "Social name",
  path: "path_url",
}

export const template_structure = {
  business_card: {
    name: "Name person",
    profesion: "Profesion",
    phone: "00000",
    email: "email@email.email",
  },
  resumen: {
    about: "about",
    experiences: [experience_item, experience_item],
    education: [education_item, education_item],
    projects: [project_item, project_item],
    skills: [skill_item, skill_item, skill_item],
    social: [social_item, social_item],
  },
}
