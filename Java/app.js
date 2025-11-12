document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("Your text has been submitted");
  location.reload();
});

const searchData = [
  {
    title: "Events",
    keywords: ["event", "events", "celebration"],
    link: "./cat/Event.html"
  },
  {
    title: "History of Gallup",
    keywords: ["history", "gallup history"],
    link: "./cat/History.html"
  },
  {
    title: "Public Library",
    keywords: ["library", "books"],
    link: "#services"
  },
  {
    title: "Educational Services",
    keywords: ["education", "school", "child care"],
    link: "#services"
  },
  {
    title: "Transportation",
    keywords: ["transport", "bus", "travel"],
    link: "#services"
  },
  {
    title: "Contact Us",
    keywords: ["contact", "email", "phone"],
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
          top: target.offsetTop - 70, // offset for fixed top-bar
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
}
