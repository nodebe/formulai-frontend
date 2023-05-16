let excelText = document.getElementById("excelText")
const submitTextLink = document.getElementById("submitTextLink")
const playBtn = document.getElementById("playButton")
const loadingBtn = document.getElementById("loadingButton")

const submitText = e => {
    let inputText = document.getElementById("promptText").value;
    playBtn.style.display = 'none'
    loadingBtn.style.display = 'block'

    e.preventDefault();
    
    const url = "https://formulai-backend-flask-staging.up.railway.app/api/v1"

    const data = JSON.stringify({
    "text": inputText
    });

    const request = {
    method: 'POST',
    body: data,
    };

    fetch(`${url}/text_to_formula`, request)
    .then(response => response.text())
    .then(result => showResult(result))
    .catch(error => console.log('error', error));
}

const showResult = (result) => {
    result = JSON.parse(result)

    if (result.code == '01'){
        excelText.innerHTML = result.data.content
    }
    else if(result.code == 'E00'){
        alert(result.msg)
    }
    playBtn.style.display = 'block'
    loadingBtn.style.display = 'none'
}

const copyFormula = e => {
    e.preventDefault()

    // Select the text field
    let copyText = document.getElementById("excelText");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

submitTextLink.addEventListener("click", submitText)
copyExcelFormula.addEventListener("click", copyFormula)