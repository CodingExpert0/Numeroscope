const items = document.querySelectorAll(".sidebar li");
const title = document.getElementById("page-title");
const text = document.getElementById("page-text");

// Only run if sidebar exists (prevents errors on index.html)
if (items.length > 0 && title && text) {
  const content = {
    dashboard: {
      title: "Dashboard Overview",
      text: "Welcome to your dashboard. Here you can view your numerology insights and activity.",
    },
    insights: {
      title: "Your Insights",
      text: "Deep numerological insights based on your life path and personal numbers.",
    },
    compatibility: {
      title: "Compatibility",
      text: "Explore how your numbers connect with others in your life.",
    },
    chat: {
      title: "AI Chat",
      text: "Ask questions and receive personalized numerology guidance.",
    },
    sessions: {
      title: "Sessions",
      text: "Book 1-on-1 sessions with expert numerologists.",
    },
    pricing: {
      title: "Pricing Plans",
      text: "Choose a plan that fits your journey and unlock premium features.",
    },
    profile: {
      title: "Your Profile",
      text: "Manage your account and personal information.",
    },
  };

  const setPage = (page) => {
    items.forEach((i) =>
      i.classList.toggle("active", i.getAttribute("data-page") === page),
    );

    if (content[page]) {
      title.textContent = content[page].title;
      text.textContent = content[page].text;
    }

    const activeItem = document.querySelector(
      `.sidebar li[data-page="${page}"]`,
    );
    if (activeItem) {
      activeItem.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  };

  items.forEach((item) => {
    item.addEventListener("click", () =>
      setPage(item.getAttribute("data-page")),
    );
  });

  const hashPage = window.location.hash.slice(1).toLowerCase();
  if (hashPage && content[hashPage]) {
    setPage(hashPage);
  }
}
