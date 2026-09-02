import { describe, expect, it } from "vitest";
import {
  portfolioData,
  getAllSkills,
  getSkillById,
  getSkillsByCategory,
} from "./index.js";

describe("portfolio data layer", () => {
  it("exposes skills as a simple flat array to keep the data layer easy to maintain", () => {
    expect(Array.isArray(portfolioData.skills)).toBe(true);
    expect(portfolioData.skills.length).toBeGreaterThan(0);
    expect(getAllSkills().length).toBe(portfolioData.skills.length);
    expect(getSkillsByCategory("frontend").length).toBeGreaterThan(0);
    expect(getSkillById("react")?.category).toBe("frontend");
  });
});
