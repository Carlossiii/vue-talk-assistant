import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../HomeView.vue";
import TheHeader from "@/components/common/TheHeader.vue";
import TheFooter from "@/components/common/TheFooter.vue";
import FeatureCard from "@/components/FeatureCard.vue";

// Mock child components to simplify testing
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

vi.mock("@/components/FeatureCard.vue", () => ({
  default: {
    name: "FeatureCard",
    template: '<div data-test="feature-card"><slot></slot></div>',
    props: ["title", "description"],
  },
}));

describe("HomeView", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(HomeView);
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("includes header and footer components", () => {
    expect(wrapper.findComponent(TheHeader).exists()).toBe(true);
    expect(wrapper.findComponent(TheFooter).exists()).toBe(true);
  });

  it("renders correct number of feature cards", () => {
    const featureCards = wrapper.findAllComponents(FeatureCard);
    expect(featureCards).toHaveLength(4); // Based on the features array in data
  });

  describe("Component reactivity", () => {
    it("updates features when data changes", async () => {
      const newFeatures = [
        {
          id: 1,
          title: "New Feature",
          description: "New Description",
        },
      ];

      await wrapper.setData({ features: newFeatures });
      const featureCards = wrapper.findAllComponents(FeatureCard);

      expect(featureCards).toHaveLength(1);
      expect(featureCards[0].props("title")).toBe("New Feature");
      expect(featureCards[0].props("description")).toBe("New Description");
    });
  });
});
