const projects = [
  {
    title: "Coffee Website (Webflow)",
    desc: "Coffee Roasters website built with Webflow..",
    image: "images/coffee.png",
    live: "https://sshayo.github.io/CoffeeRoasters/"
  },
  {
    title: "Awards View Page (Webflow)",
    desc: "Responsive Awards showcase page built with Webflow.",
    image: "images/kudos award.png",
    github: "https://check-awards.webflow.io/"
  },
  {
    title: "Product Card Item (HTML/CSS)",
    desc: "Card Item challenge using HTML and CSS for e-commerce.",
    image: "images/image-product-desktop.jpg",
    live: "https://sshayo.github.io/frontend_mentor_17days_challenge_day2/"
  }
];

function ProjectCard({ title, desc, image, live, github }) {
  return React.createElement(
    "div",
    { className: "project-card animate-on-scroll" },
    React.createElement("img", { src: image, className: "project-image", alt: title }),
    React.createElement(
      "div",
      { className: "project-content" },
      React.createElement("h3", null, title),
      React.createElement("p", null, desc),
      React.createElement(
        "div",
        { className: "project-buttons" },
        live && React.createElement("a", { href: live, target: "_blank", className: "project-btn primary" }, "View Live"),
        github && React.createElement("a", { href: github, target: "_blank", className: "project-btn" }, "View Code")
      )
    )
  );
}

function Projects() {
  return React.createElement(
    "div",
    { className: "project-grid" },
    projects.map((p,i) => React.createElement(ProjectCard,{key:i,...p}))
  );
}

ReactDOM.createRoot(document.getElementById("projects"))
  .render(React.createElement(Projects));
