// 定时器，每隔 1 秒执行 1 次
setInterval(() => {
    var dt = new Date()
    var HH = dt.getHours()
    var mm = dt.getMinutes()
    var ss = dt.getSeconds()

    // 为页面上的元素赋值
    document.querySelector('#HH').innerHTML = padZero(HH)
    document.querySelector('#mm').innerHTML = padZero(mm)
    // document.querySelector('#ss').innerHTML = padZero(ss)
}, 1000);

// 补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}






window.onload = function () {


    //生成一句话
    fetch('https://v1.hitokoto.cn')
        .then(function (res) {
            //成功返回json数据
            return res.json();
        }).then(function (data) {


            //数据渲染到页面
            document.getElementById('hitokoto-text').innerHTML = data.hitokoto;

            var from_who = data.from_who;
            var from = data.from;

            //判断作者和来源是否为空
            if (from_who == null) {
                from_who = "";
            }
            if (from == null) {
                from = "";
            }

            //如果都为空就不显示
            if (from || from_who) {
                document.getElementById('hitokoto-author').innerHTML = "—— " + from_who + "    [" + from +
                    "]";
            }
        })
        .catch(function (err) {
            //发生错误打印错误信息
            console.error(err);
        })



    //将搜索引擎封装再一个对象里
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

    //默认使用bing搜索引擎
    let sName = searchs.Bing;
    //显示搜索引擎列表
    const selectSearchDisplay = function () {
        selectSearch.style.display = 'flex';
    }

    //隐藏搜索引擎列表
    const selectSearchHidden = function () {
        selectSearch.style.display = 'none';
    }

    //提交搜索功能
    const smtbSearch = function () {
        let s = input.value;
        let url = sName.url + s;
        // location.replace(url);
        location.href = url;
    }

    //搜索引擎列表dom对象
    let searchSelect = document.querySelector('.search-select');
    //选择搜索引擎dom对象
    let selectSearch = document.querySelector('.select-search');
    //body dom对象
    let body = document.querySelector('body');
    //输入框dom对象
    let input = document.querySelector('input');
    //提交按钮对象
    let submit = document.querySelector('.submit');


    //点击body元素隐藏搜索引擎列表
    body.addEventListener('click', () => {
        selectSearchHidden();
    })

    //输入回车键提交搜索
    body.addEventListener('keyup', (e) => {
        if ((e.keyCode || e.which) == 13) {
            smtbSearch();
        }
    })

    //点击提交搜索
    submit.addEventListener('click', () => {

        smtbSearch();
    })


    //点击选择搜索引擎功能
    searchSelect.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectSearch.style.display != 'flex') {
            selectSearchDisplay();
        } else {
            selectSearchHidden();
        }
    });


    //搜索引擎切换功能
    //这里使用事件委托,将点击事件交给selectSearch进行
    selectSearch.addEventListener('click', (e) => {

        //点击的搜索引擎的类名
        let className = e.target.children[0].className;
        //将类名截取获得搜索引擎的名字
        let searchName = `${className}`.split('-')[1];

        //如果名字不为空将执行
        if (searchName) {
            searchSelect.innerHTML = `<div class="iconfont icon-${searchName}"></div>`;
            sName = searchs[searchName];
            console.log(searchs[searchName].icon);
        }

    })




}