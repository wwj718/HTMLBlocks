Blockly.Blocks['control_repeat'] = {
    /**
     * Block for repeat n times (external number).
     * https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#so57n9
     * @this Blockly.Block
     */
    init: function() {
        this.jsonInit({
            "id": "control_repeat",
            "message0": "element %1",
            "message1": "%1", // Statement
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
            "category": Blockly.Categories.html,
            "colour": Blockly.Colours.control.primary,
            "colourSecondary": Blockly.Colours.control.secondary,
            "colourTertiary": Blockly.Colours.control.tertiary
        });
    }
};
