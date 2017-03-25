var ScratchBlocks = window.ScratchBlocks;

ScratchBlocks.Categories.html = {};

ScratchBlocks.Blocks['html'] = {
    init: function() {
        this.jsonInit({
            "id": "html",
            "message0": "HTML",
            "inputsInline": true,
            "nextStatement": null,
            "category": ScratchBlocks.Categories.html,
            "colour": ScratchBlocks.Colours.control.primary,
            "colourSecondary": ScratchBlocks.Colours.control.secondary,
            "colourTertiary": ScratchBlocks.Colours.control.tertiary
        });
    }
};

ScratchBlocks.Blocks['html_element'] = {
    init: function() {
        this.jsonInit({
            "id": "html_element",
            "message0": "element %1",
            "message1": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "ELEMENT"
                }
            ],
            "args1": [
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "category": ScratchBlocks.Categories.html,
            "colour": ScratchBlocks.Colours.control.primary,
            "colourSecondary": ScratchBlocks.Colours.control.secondary,
            "colourTertiary": ScratchBlocks.Colours.control.tertiary
        });
    }
};

ScratchBlocks.Blocks['html_text'] = {
    init: function() {
        this.jsonInit({
            "id": "html_element",
            "message0": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "TEXT"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "category": ScratchBlocks.Categories.html,
            "colour": ScratchBlocks.Colours.control.primary,
            "colourSecondary": ScratchBlocks.Colours.control.secondary,
            "colourTertiary": ScratchBlocks.Colours.control.tertiary
        });
    }
};
