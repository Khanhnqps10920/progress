// function handleShowData() {
//     document.querySelector('.loading-wrapper').style.display = 'none';
//     document.querySelector('.content-wrapper').style.display = 'block';
// }


// setTimeout(handleShowData, 3000);

const progressContent = document.querySelector('.progress-content');

let progressCount = 1;

function showProgressBar() {
    if (progressCount === 100) {
        clearInterval(progressInterval);
        document.querySelector('.loading-wrapper').style.display = 'none';
        document.querySelector('.content-wrapper').style.display = 'block';
        return;
    }
    progressCount++;
    document.querySelector('.percentage').innerText = progressCount + '%';
    progressContent.style.width = progressCount + '%';
}

const progressInterval = setInterval(showProgressBar, 50);

const promiseA = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(['Vũ', 'Nam', 'Lộc', 'Anh', 'Chiến']);
    }, 2000)
});

promiseA.then(function (data) {
    let result = '';
    for (const element of data) {
        result += `<li>${element}</li>`;
        document.querySelector('.name-list').innerHTML = result;
    }
});