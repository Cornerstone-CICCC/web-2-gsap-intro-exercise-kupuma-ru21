document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const windowInnerWidth = window.innerWidth;
  const windowInnerHeight = window.innerHeight;
  expandBox(tl, "red");
  expandBox(tl, "green");
  expandBox(tl, "blue");
  expandBox(tl, "yellow");
  tl.fromTo(
    ".red",
    { x: "0px" },
    {
      x: `${windowInnerWidth - WIDTH_HEIGHT}px`,
      borderRadius: "50%",
      backgroundColor: "green",
      duration: 1,
    }
  );
  tl.fromTo(
    ".green",
    { y: 0 },
    {
      y: `${windowInnerHeight - WIDTH_HEIGHT}px`,
      borderRadius: "50%",
      backgroundColor: "blue",
      duration: 1,
    },
    "<"
  );
  tl.fromTo(
    ".blue",
    { x: "0px" },
    {
      x: `${WIDTH_HEIGHT - windowInnerWidth}px`,
      borderRadius: "50%",
      backgroundColor: "yellow",
      duration: 1,
    },
    "<"
  );
  tl.fromTo(
    ".yellow",
    { y: 0 },
    {
      y: `${WIDTH_HEIGHT - windowInnerHeight}px`,
      borderRadius: "50%",
      backgroundColor: "red",
      duration: 1,
    },
    "<"
  );
  tl.to(".red, .green", {
    x: `${windowInnerWidth + WIDTH_HEIGHT}px`,
    duration: 1,
  });
  tl.to(
    ".blue, .yellow",
    {
      x: `${-(windowInnerWidth + WIDTH_HEIGHT)}px`,
      duration: 1,
    },
    "<"
  );
});

const WIDTH_HEIGHT = 200;

const expandBox = (tl, className) => {
  tl.fromTo(
    `.${className}`,
    { height: "0px", width: "0px" },
    { height: `${WIDTH_HEIGHT}PX`, width: `${WIDTH_HEIGHT}PX`, duration: 1 }
  );
};
