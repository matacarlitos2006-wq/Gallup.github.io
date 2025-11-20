
const searchData = [
  {
    title: "Events",
    keywords: ["event", "events", "celebration"],
    link: "https://matacarlitos2006-wq.github.io/Gallup.github.io/cat/Event.html"
  },
  {
    title: "History of Gallup",
    keywords: ["history", "gallup history"],
    link: "../cat/History.html"
  },
  {
    title: "Public Library",
    keywords: ["library", "books"],
    link: "../Services/Library.html"
  },
  {
    title: "Educational Services",
    keywords: ["education", "school", "child care"],
    link: "../Services/Education.html"
  },
  {
    title: "Transportation",
    keywords: ["transport", "bus", "travel", "airplane"],
    link: "../Services/Transportation.html"
  },
  {
    title: "Contact Us",
    keywords: ["contact", "email", "phone", "address"],
    link: "#contact"
  },
  {
    title: "About Us",
    keywords: ["about", "community"],
    link: "#about"
  },
  {
    title: "Home",
    keywords: ["home", "welcome"],
    link: "#home"
  }
];


document.getElementById("searchBtn").addEventListener("click", handleSearch);
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (!query) return;

  const result = searchData.find(item =>
    item.title.toLowerCase().includes(query) ||
    item.keywords.some(keyword => keyword.includes(query))
  );

  if (result) {
    if (result.link.startsWith("#")) {
      const target = document.querySelector(result.link);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, 
          behavior: "smooth"
        });
      }
    }
    else {
      window.location.href = result.link;
    }
  } else {
    alert(`No results found for "${query}".`);
  }
}
