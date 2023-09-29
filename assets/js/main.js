const inputEl = document.querySelector('input');

async function getJSONData() {
    const response = await fetch('./assets/json/data.json');
    return await response.json();
}

const searchRecord = async (value) => {
    console.log('I have got this value!', value.toUpperCase());

    const jsonData = await getJSONData();

    const data = jsonData.find((record) => {
        return record.code === value.toUpperCase() || value.toUpperCase().startsWith(record.code)
    })

    console.log(data)

    const resultSelection = document.querySelector('#resultSection')

    if (data) {
        resultSelection.classList.remove('hidden');
    } else {
        resultSelection.classList.add('hidden')
    }
    resultSelection.querySelector("#query").innerText = value.toUpperCase()
    resultSelection.querySelector("#rto_id").innerText = data.id
    resultSelection.querySelector("#rto_code").innerText = data.code
    resultSelection.querySelector("#rto_loc").innerText = data.location
    resultSelection.querySelector("#type").innerText = data.type
    resultSelection.querySelector("#district").innerText = data.district
    console.log(resultSelection)
};

inputEl.addEventListener('keyup', (e) => {
    // check my validation here
    if (e.key === 'Enter') {
        if (inputEl.value.length > 3) {
            searchRecord(inputEl.value);
        }
    }
});