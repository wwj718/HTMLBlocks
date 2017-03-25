var ScratchBlocks = window.ScratchBlocks;

ScratchBlocks.Categories.html = {};

ScratchBlocks.Blocks['control_repeat'] = {
    init: function() {
        this.jsonInit({
            "id": "control_repeat",
            "message0": "element %1",
            "message1": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "TIMES"
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
