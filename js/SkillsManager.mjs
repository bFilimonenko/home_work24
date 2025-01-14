export class SkillsManager {
  #skills;

  constructor() {
    this.#skills = [];
  }

  addSkill(skill) {
    if (typeof skill === "string" && skill.length > 1) {
      this.#skills.push(skill);
      return skill;
    }
    return null;
  }

  getAllSkills() {
    return this.#skills;
  }
}
