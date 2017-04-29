window.onload = function () {
    var workspace = window.ScratchBlocks.inject('blocks', {
        media: './media/',
        toolbox: document.getElementById('toolbox'),
        zoom: {
            controls: true,
            wheel: true,
            startScale: 0.75
        },
        colours: {
            fieldShadow: 'rgba(255, 255, 255, 0.3)',
            dragShadowOpacity: 0.6
        }
    });
    window.workspace = workspace;
    
    window.ScratchBlocks.Xml.domToWorkspace(document.getElementById('workspace'), workspace);
    workspace.scrollCenter();
    
    document.getElementById('save').onclick = function () {
        var name = document.getElementById('name').value;
        if (!name || name === '') {
            name = 'Untitled';
        }
        var project = {};
        project.name = name;
        var xml = window.ScratchBlocks.Xml.workspaceToDom(window.workspace);
        project.blocks = window.xml_js.xml2js(window.ScratchBlocks.Xml.domToText(xml), {compact: true});
        var json = JSON.stringify(project, null, 4);
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:attachment/text,' + encodeURI(json);
        hiddenElement.target = '_blank';
        hiddenElement.download = name + '.json';
        hiddenElement.click();
    };
    
    document.getElementById('load').onclick = function () {
        var input = document.createElement('INPUT');
        input.type = 'file';
        input.onchange = function () {
            if (input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(){
                    try {
                        var text = reader.result;
                        workspace.clear();
                        var project = JSON.parse(text);
                        document.getElementById('name').value = project.name;
                        var xml = window.ScratchBlocks.Xml.textToDom(window.xml_js.js2xml(project.blocks, {compact: true, spaces: 2}));
                        window.ScratchBlocks.Xml.domToWorkspace(xml, workspace);
                    } catch(e) {
                        throw "Error Parsing";
                        workspace.clear();
                        window.ScratchBlocks.Xml.domToWorkspace(document.getElementById('workspace'), window.workspace);
                    }
                };
                reader.readAsText(input.files[0]);
            }
        };
        input.click();
    };
    
    document.getElementById('export').onclick = function () {
        var workspace = window.workspace;
        var top = workspace.getTopBlocks();
        var html = null;
        for (i = 0; i < top.length; i++) {
            if (top[i].type === 'html') {
                html = top[i];
            }
        }
        var css = null;
        for (i = 0; i < top.length; i++) {
            if (top[i].type === 'css') {
                css = top[i];
            }
        }
        if (html) {
            eval(window.ScratchBlocks.JavaScript.blockToCode(html));
            if (element) {
                if (css) {
                    eval(window.ScratchBlocks.JavaScript.blockToCode(css));
                    if (style) {
                        element.appendChild(style);
                    } else {
                        console.warn("No CSS Code Generated!");
                    }
                } else {
                    console.warn("No CSS Block!");
                }
                var div = document.createElement("DIV");
                div.appendChild(element);
                var html = window.html_beautify(div.innerHTML, { indent_size: 2 });
                var name = document.getElementById('name').value;
                if (!name || name === '') {
                   name = 'Untitled';
                }
                var hiddenElement = document.createElement('a');
                hiddenElement.href = 'data:attachment/text,' + encodeURI(html);
                hiddenElement.target = '_blank';
                hiddenElement.download = name + '.html';
                hiddenElement.click();
            } else {
                throw "No HTML Code Generated";
            }
        } else {
            throw "No HTML Block!";
        }
    };
};
