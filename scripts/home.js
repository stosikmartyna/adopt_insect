const displayAdoptionStats = (insect) => {
    const adoptionStatsBox = document.querySelector(".adoption-stats__container")
    const insectBox = document.createElement('div');
    const insectName = document.createElement('p');
    const insectIcon = document.createElement('img');
    const insectAdoptions = document.createElement('p');
    
    insectIcon.setAttribute('src', insect.svg);
    insectIcon.setAttribute('alt', insect.name);

    insectBox.classList.add('adoption-stats__container__box');
    
    insectAdoptions.classList.add('adoption-stats__container__box__stat')

    insectName.textContent = `${insect.name}s`
    insectAdoptions.textContent = insect.value.all

    adoptionStatsBox.appendChild(insectBox)
    insectBox.appendChild(insectName)
    insectBox.appendChild(insectIcon)
    insectBox.appendChild(insectAdoptions)
}

const getAdoptionStats = () => {
    fetch('./adopt_stats.json')
        .then(response => response.json())
        .then(response => {
            response.adoptedInsects.forEach((insect) => {
                displayAdoptionStats(insect);
            });
        })
        .catch(err => console.warn(err))
}

getAdoptionStats();