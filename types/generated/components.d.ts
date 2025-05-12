import type { Schema, Struct } from '@strapi/strapi';

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    degree: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    gpa: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperieneExperience extends Struct.ComponentSchema {
  collectionName: 'components_experiene_experiences';
  info: {
    displayName: 'Experience';
    icon: 'briefcase';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.Text;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    description: '';
    displayName: 'Projects';
    icon: 'chartCircle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    technologies: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SkillsGroupSkillsGroup extends Struct.ComponentSchema {
  collectionName: 'components_skills_group_skills_groups';
  info: {
    description: '';
    displayName: 'SkillsGroup';
    icon: 'alien';
  };
  attributes: {
    databases: Schema.Attribute.Text;
    languages: Schema.Attribute.Text;
    softSkills: Schema.Attribute.Text;
    tools: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'education.education': EducationEducation;
      'experiene.experience': ExperieneExperience;
      'projects.projects': ProjectsProjects;
      'skills-group.skills-group': SkillsGroupSkillsGroup;
    }
  }
}
