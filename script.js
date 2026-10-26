const searchInput = document.querySelector("#event-search-input");
const clearButton = document.querySelector("#clear-search");
const eventCards = document.querySelectorAll("#event-list article");
const eventCount = document.querySelector("#event-count");
const noEventsMessage = document.querySelector("#no-events");

function filterEvents() {
  const searchText = searchInput.value.trim().toLocaleLowerCase("tr-TR");
  let visibleCount = 0;

  eventCards.forEach((card) => {
    const title = card.querySelector("h2").textContent.trim().toLocaleLowerCase("tr-TR");
    const isVisible = title.includes(searchText);

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  eventCount.textContent = `${visibleCount} etkinlik gösteriliyor.`;
  noEventsMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterEvents);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterEvents();
  searchInput.focus();
});

filterEvents();