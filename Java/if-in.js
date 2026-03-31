const searchData = [
  {
    title: "Events",
    keywords: ["event", "events", "celebration", "Trunk", "Treat", "Red Rock Balloon", "Indian Ceremonial"],
    link: "../cat/Events.html"
  },
  {
    title: "History of Gallup",
    keywords: ["history", "gallup history", "Ancestral Puebloans", "Trading Posts", "Inter-Tribal Indian Ceremonial"],
    link: "../cat/History.html"
  },
  {
    title: "Public Library",
    keywords: ["library", "books", "Zollinger library", "Computer Lab", "Conference Room", "Study Rooms"],
    link: "../Services/Library.html"
  },
  {
    title: "Educational Services",
    keywords: ["education", "school", "child care", "GMCS School", "High School", "Middle School", "Elementry School"],
    link: "../Services/Education.html"
  },
  {
    title: "Transportation",
    keywords: ["transport", "bus", "travel", "airplane", "Gallup Express", "Navajo Transit", "GreyHound"],
    link: "../Services/Transportation.html"
  },
  {
    title: "Contact Us",
    keywords: ["contact", "email", "phone", "address"],
    link: "../index.html"
  },
  {
    title: "About Us",
    keywords: ["about", "community"],
    link: "../index.html"
  },
  {
    title: "Home",
    keywords: ["home", "welcome"],
    link: "../index.html"
  },
  {
    title: "Reference",
    keywords: ["reference", "Reference", "Cite"],
    link: "../Ref/Reference.html"
  },
  {
    title: "Get Help",
    keywords: ["get help", "Police", "Help", "Lines", "help", "Urgent"],
    link: "../Services/Get-Help.html"
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

function toggleNav(){
document.getElementById("sidebar").classList.toggle("active");
}

function toggleFolder(e,el){
e.preventDefault();
el.parentElement.classList.toggle("open");
}

const cards = document.querySelectorAll('.card-home');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -25;
    const rotateY = ((x - centerX) / centerX) * 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
