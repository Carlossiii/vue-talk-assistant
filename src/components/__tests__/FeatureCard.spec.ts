import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import FeatureCard from "../FeatureCard.vue";

describe("FeatureCard", () => {
  const defaultProps = {
    title: "Test Feature",
    description: "Test Description",
  };

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(FeatureCard, {
      props: defaultProps,
    });
  });

  describe("Component Structure", () => {
    it("renders the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("renders title and description", () => {
      expect(wrapper.find("h3").text()).toBe(defaultProps.title);
      expect(wrapper.find("p").text()).toBe(defaultProps.description);
    });
  });
});
