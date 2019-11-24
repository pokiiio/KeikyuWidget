'use strict';
const request = require('request-promise');
const infoBadge = document.getElementById('info');
const INTERVAL_TIME_MILLI_SEC = 5 * 60 * 1000;

function updateInfo() {
    getInfo()
        .then(function (info) {
            if (info.includes('平常')) {
                infoBadge.style.opacity = 0;
            } else {
                infoBadge.style.opacity = 1;
                infoBadge.innerHTML = info;
            }

            setTimeout(updateInfo, INTERVAL_TIME_MILLI_SEC);
        });
}

function getInfo() {
    const options = {
        url: 'http://unkou.keikyu.co.jp/',
        method: 'GET'
    };

    return request(options)
        .then(function (body) {
            let info = body;
            info = info.split('<a href="https://unkou.keikyu.co.jp/" target=_blank>')[1];
            info = info.split('</a>')[0];
            info = info.trim();
            return info;
        });
}

updateInfo();
