window.onload = function () {

    const searchs = {
        baidu: {
            icon: 'icon-baidu',
            url: 'https://www.baidu.com/s?ie=utf-8&wd='
        },
        Bing: {
            icon: 'icon-Bing',
            url: 'https://cn.bing.com/search?q='
        },
        Google: {
            icon: 'icon-Google',
            url: 'http://www.google.cn/search?q=',
        }
    };

    let sName = searchs.baidu;
    const selectSearchDisplay = function () {
        selectSearch.style.display = 'flex';
    }

    const selectSearchHidden = function () {
        selectSearch.style.display = 'none';
    }

    const smtbSearch = function () {
        let s = input.value;
        let url = sName.url + s;
        // location.replace(url);
        location.href = url;
    }

    let searchSelect = document.querySelector('.search-select');
    let selectSearch = document.querySelector('.select-search');
    let body = document.querySelector('body');
    let input = document.querySelector('input');
    let submit = document.querySelector('.submit');

    body.addEventListener('click', () => {
        selectSearchHidden();
    })


    body.addEventListener('keyup', (e) => {
        if ((e.keyCode || e.which) == 13) {
            smtbSearch();
        }
    })


    submit.addEventListener('click', () => {
        console.log(sName);
        smtbSearch();
    })

    // console.log(searchSelect, selectSearch);
    searchSelect.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectSearch.style.display != 'flex') {
            selectSearchDisplay();
        } else {
            selectSearchHidden();
        }
    });


    selectSearch.addEventListener('click', (e) => {
        // console.log(e.target.children[0].className);
        let className = e.target.children[0].className;
        let searchName = `${className}`.split('-')[1];
        // console.log(searchName);

        if (searchName) {
            searchSelect.innerHTML = `<div class="iconfont icon-${searchName}"></div>`;
            sName = searchs[searchName];
            console.log(searchs[searchName].icon);
        }

    })




}