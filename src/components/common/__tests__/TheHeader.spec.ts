import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { RouterLinkStub } from "@vue/test-utils";
import TheHeader from "../TheHeader.vue";

describe("TheHeader", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(TheHeader, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
  });

  describe("Component Structure", () => {
    it("renders the component", () => {
      expect(wrapper.exists()).toBe(true);
    });

    it("contains navigation element", () => {
      expect(wrapper.find("nav").exists()).toBe(true);
    });
  });

  describe("Navigation Links", () => {
    it("renders all navigation links", () => {
      const links = wrapper.findAllComponents(RouterLinkStub);
      expect(links).toHaveLength(3); // Logo + Home + About
    });

    it("has correct link destinations", () => {
      const links = wrapper.findAllComponents(RouterLinkStub);
      const paths = links.map((link: any) => link.props().to);

      expect(paths).toContain("/");
      expect(paths).toContain("/about");
    });
  });
});
