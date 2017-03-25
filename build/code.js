function exportToHTML(workspace) {
    var xml = window.ScratchBlocks.Xml.workspaceToDom(workspace);
    var html = null;
    for (i = 0; i < xml.childNodes; i++) {
        console.log(xml.childNodes[i]);
        if (xml.childNodes[i].getAttribute('type') === 'html') {
            html = xml.childNodes[i];
        }
    }
    return html;
}

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
        project.blocks = window.ScratchBlocks.Xml.domToPrettyText(xml);
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
                    var text = reader.result;
                    workspace.clear();
                    var project = JSON.parse(text);
                    document.getElementById('name').value = project.name;
                    var xml = window.ScratchBlocks.Xml.textToDom(project.blocks);
                    window.ScratchBlocks.Xml.domToWorkspace(xml, workspace);
                };
                reader.readAsText(input.files[0]);
            }
        };
        input.click();
    };
};
