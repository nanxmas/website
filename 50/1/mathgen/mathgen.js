Array.prototype.removeIndex = function(index) {
    this.splice(index, 1);
};
String.prototype.afterLast = function(separator) {
    const index = this.lastIndexOf(separator);
    if (index !== -1) {
        return this.slice(index + 1);
    }
    else {
        return null;
    }
};
String.prototype.trimEnd = function(char) {
    return this.replace(new RegExp('\\'+char+'+$', 'g'), '');
};

function uploadJSON(json, callback = console.log) {
    let data = JSON.stringify(json);
    data = JSON.stringify({
        "language": "javascript",
        "title": "https://github.com/Why7090/mathgen",
        "public": true,
        "files": [{
            "name": "data.json",
            "content": data
         }]
    })
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            callback(JSON.parse(this.responseText).id);
        }
    });
    xhr.open('POST', 'https://snippets.glot.io/snippets');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
}
function downloadJSON(id, callback = console.log) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            callback(JSON.parse(this.responseText).files[0].content);
        }
    });
    xhr.open('GET', 'https://snippets.glot.io/snippets/' + id);
    xhr.send();
}

const ts = new Typeson().register({
    Operator:Operator,
    Addition:Addition,
    Subtraction:Subtraction,
    Multiplication:Multiplication,
    Division:Division,
    RandRange:RandRange,
    RandRangeAdv:RandRangeAdv,
    OperatorGen:OperatorGen,
    Generator:Generator,
    Expression: [
        x => x instanceof Expression,
        expr => expr.source,
        source => new Expression(source)
    ],
    Rule: [
        x => x instanceof Rule,
        rule => rule.source,
        source => new Rule(source)
    ]
});

let generator = new Generator(1, 1, 10);
let hist = [];

const app = new Vue({
    el: '#app',
    data: {
        generator: generator,
        hist: hist,
        showHelp: false
    },
    methods: {
        addOperator: function (operator) {
            generator.operators.push(new OperatorGen(operator, new RandRange(0, 100, 0, 100, false)));
        },
        generate: function () {
            let results = generator.generate();
            this.hist.push(results);
            this.$Message.success(`成功生成${results.length}个算式`)
        },
        save: function () {
            let json = ts.stringify(generator);
            this.$copyText(json);
            this.$Notice.open({
                title: 'JSON数据 - 已复制到剪贴板',
                desc: json,
            });
        },
        load: function (json) {
            generator = this.generator = ts.parse(json);
            this.$Message.success('已加载JSON');
        },
        download: function(id) {
            downloadJSON(id, (json) => this.load(json));
        },
        showLoadModal: function () {
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: 'JSON数据',
                            type: 'textarea',
                            autosize: true
                        },
                        on: {
                            input: (val) => {
                                this.value = val;
                            }
                        }
                    })
                },
                width: 800,
                scrollable: true,
                onOk: () => this.load(this.value)
            })
        },
        share: function () {
            uploadJSON(ts.encapsulate(generator), id => Vue.nextTick(() => {
                const link = 'https://wenghy.me/mathgen/?' + id;
                this.$Modal.confirm({
                    title: '分享成功!',
                    content: link,
                    okText: '复制链接',
                    onOk: () => {
                        this.$copyText(link);
                    }
                });
            }));
        },
        removeDecimal: str => str.substr(0, str.indexOf('.')),
        print: function (index) {
            printJS({
                printable: 'history' + index.toString(),
                type: 'html',
                scanStyles: false,
                css: 'print.css'
            })
        },
        firstHalf: (list) => list.slice(0, Math.floor(list.length / 2)),
        lastHalf: (list) => list.slice(Math.floor(list.length / 2)),
        prettify: x => x.replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−'),
    }
});

const params = window.location.href.afterLast('?');
if (params != null) {
    app.download(params);
}
