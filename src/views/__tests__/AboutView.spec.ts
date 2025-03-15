import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "../AboutView.vue";
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";

// Mock the header and footer components
vi.mock("@/components/common/TheHeader.vue", () => ({
  default: {
    name: "TheHeader",
    template: '<div data-test="header"></div>',
  },
}));

vi.mock("@/components/common/TheFooter.vue", () => ({
  default: {
    name: "TheFooter",
    template: '<div data-test="footer"></div>',
  },
}));

describe("AboutView", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AboutView);
  });

  describe("Component Structure", () => {
    it("renders the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("includes header and footer components", () => {
      expect(wrapper.findComponent(TheHeader).exists()).toBe(true);
      expect(wrapper.findComponent(TheFooter).exists()).toBe(true);
    });

    it("has the correct page title", () => {
      const title = wrapper.find("h1");
      expect(title.text()).toBe("About Us");
    });
  });

  describe("Content Sections", () => {
    it("renders Our Story section", () => {
      const sections = wrapper.findAll("section");
      const storySection = sections[0];

      expect(storySection.find("h2").text()).toBe("Our Story");
      expect(storySection.find("p").exists()).toBe(true);
    });

    it("renders Our Mission section", () => {
      const sections = wrapper.findAll("section");
      const missionSection = sections[1];

      expect(missionSection.find("h2").text()).toBe("Our Mission");
      expect(missionSection.find("p").exists()).toBe(true);
    });

    it("renders Our Team section", () => {
      const sections = wrapper.findAll("section");
      const teamSection = sections[2];

      expect(teamSection.find("h2").text()).toBe("Our Team");
    });
  });

  describe("Team Members", () => {
    it("renders correct number of team members", () => {
      const teamMembers = wrapper.findAll(".grid > div");
      expect(teamMembers).toHaveLength(3);
    });

    it("displays correct team member information", () => {
      const teamMembers = wrapper.findAll(".grid > div");
      const firstMember = teamMembers[0];

      expect(firstMember.find("h3").text()).toBe("John Doe");
      expect(firstMember.find("p").text()).toBe("CEO");
    });

    it("has correct image attributes for team members", () => {
      const memberImages = wrapper.findAll(".grid img");
      const firstImage = memberImages[0];

      expect(firstImage.attributes("src")).toBe("https://via.placeholder.com/150");
      expect(firstImage.attributes("alt")).toBe("John Doe");
    });
  });

  describe("Component Data", () => {
    it("initializes with correct team members data", () => {
      const { teamMembers } = wrapper.vm;

      expect(teamMembers).toHaveLength(3);
      expect(teamMembers[0]).toEqual({
        id: 1,
        name: "John Doe",
        role: "CEO",
        avatar: "https://via.placeholder.com/150",
      });
    });

    it("updates team members when data changes", async () => {
      const newTeamMembers = [
        {
          id: 1,
          name: "New Member",
          role: "New Role",
          avatar: "https://via.placeholder.com/150",
        },
      ];

      await wrapper.setData({ teamMembers: newTeamMembers });
      const teamMembers = wrapper.findAll(".grid > div");

      expect(teamMembers).toHaveLength(1);
      expect(teamMembers[0].find("h3").text()).toBe("New Member");
      expect(teamMembers[0].find("p").text()).toBe("New Role");
    });
  });

  describe("Styling and Classes", () => {
    it("has correct layout classes", () => {
      expect(wrapper.classes()).toContain("min-h-screen");
      expect(wrapper.classes()).toContain("flex");
      expect(wrapper.classes()).toContain("flex-col");
    });

    it("applies hover effect class to team member cards", () => {
      const teamMember = wrapper.find(".grid > div");
      expect(teamMember.classes()).toContain("hover:-translate-y-[5px]");
    });

    it("has correct image styling for team members", () => {
      const memberImage = wrapper.find(".grid img");
      expect(memberImage.classes()).toContain("rounded-full");
      expect(memberImage.classes()).toContain("w-[150px]");
      expect(memberImage.classes()).toContain("h-[150px]");
    });
  });

  describe("Accessibility", () => {
    it("has accessible images with alt text", () => {
      const images = wrapper.findAll("img");
      images.forEach((img: any) => {
        expect(img.attributes("alt")).toBeTruthy();
      });
    });

    it("uses semantic HTML structure", () => {
      expect(wrapper.find("main").exists()).toBe(true);
      expect(wrapper.findAll("section").length).toBe(3);
      expect(wrapper.find("h1").exists()).toBe(true);
      expect(wrapper.findAll("h2").length).toBe(3);
    });
  });
});
