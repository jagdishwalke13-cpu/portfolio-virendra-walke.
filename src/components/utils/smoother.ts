/**
 * Lightweight smooth scroll API replacing GSAP ScrollSmoother.
 * Exported from a separate file to avoid React fast refresh warnings.
 */
export const smoother = {
  scrollTop: (val: number) => {
    window.scrollTo({ top: val, behavior: "instant" as ScrollBehavior });
  },
  paused: (state: boolean) => {
    document.body.style.overflowY = state ? "hidden" : "auto";
  },
  scrollTo: (target: string, smooth: boolean) => {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: smooth ? "smooth" : "instant" });
    }
  },
};
