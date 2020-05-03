const adoptionStatsSection = document.querySelector(".adoption-stats");

const displayAdoptionStats = (insect) => {
    const paragraph = document.createElement('p');
    // paragraph.classList.add('nazwa-tej-klasy');
    paragraph.textContent = `Adopted ${insect.name}s: ${insect.value.all}`
    adoptionStatsSection.appendChild(paragraph)
}

const getAdoptionStats = () => {
    fetch('../data_api/adopt_stats.json')
        .then(response => response.json())
        .then(response => {
            response.adoptedInsects.forEach(insect => {
                displayAdoptionStats(insect);
            });
        })
        .catch(err => console.warn(err))
}

getAdoptionStats();