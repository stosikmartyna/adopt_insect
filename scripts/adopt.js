const adoptionPrices = {
    bee: {amount: 0.50, currency: 'EUR'},
    ladybug: {amount: 0.60, currency: 'EUR'},
    bumblebee: {amount: 0.70, currency: 'EUR'},
}

const getTotalAmount = () => {
    const adoptedBeesInput = document.getElementById("adopt__form__insects__label-bee");
    const adoptedLadybugInput = document.getElementById("adopt__form__insects__label-ladybug");
    const adoptedBumblebeeInput = document.getElementById("adopt__form__insects__label-bumblebee");

    const priceForAdoptedBeesElement = document.querySelector('.adopt__form__insects__label__amount-bee');
    const priceForAdoptedLadybugElement = document.querySelector('.adopt__form__insects__label__amount-ladybug');
    const priceForAdoptedBumblebeeElement = document.querySelector('.adopt__form__insects__label__amount-bumblebee');

    priceForAdoptedBeesElement.textContent = `x €${adoptionPrices.bee.amount.toFixed(2)}`;
    priceForAdoptedLadybugElement.textContent = `x €${adoptionPrices.ladybug.amount.toFixed(2)}`;
    priceForAdoptedBumblebeeElement.textContent = `x €${adoptionPrices.bumblebee.amount.toFixed(2)}`;
    
    const sum = () => {
        let adoptedBeesAmount = adoptedBeesInput.value * adoptionPrices.bee.amount;
        let adoptedLadybugsAmount = adoptedLadybugInput.value * adoptionPrices.ladybug.amount;
        let adoptedBumblebeesAmount = adoptedBumblebeeInput.value * adoptionPrices.bumblebee.amount;
    
        let sum = Number(adoptedBeesAmount) + Number(adoptedLadybugsAmount) + Number(adoptedBumblebeesAmount);

        const totalAmount = document.querySelector(".adopt__form__summary__total__sum");    
        totalAmount.textContent = sum > 0 ? sum.toFixed(2) : 0;
    }

    adoptedBeesInput.addEventListener('change', sum);
    adoptedLadybugInput.addEventListener('change', sum);
    adoptedBumblebeeInput.addEventListener('change', sum);
}

getTotalAmount();