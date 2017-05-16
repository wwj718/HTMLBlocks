var ScratchBlocks = window.ScratchBlocks;
ScratchBlocks.Categories.css = "css";

ScratchBlocks.Blocks['css'] = {
    init: function () {
        this.jsonInit({
            "id": "css",
            "message0": "CSS",
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "inputsInline": true,
            "category": ScratchBlocks.Categories.css,
            "colour": ScratchBlocks.Colours.css.primary,
            "colourSecondary": ScratchBlocks.Colours.css.secondary,
            "colourTertiary": ScratchBlocks.Colours.css.tertiary
        });
    }
};

ScratchBlocks.JavaScript['css'] = function (block) {
    return "var style = document.createElement('STYLE');" + 
        ScratchBlocks.JavaScript.statementToCode(block, 'SUBSTACK');
};

ScratchBlocks.Blocks['css_selector'] = {
    init: function () {
        this.jsonInit({
            "id": "css_selector",
            "message0": "selector %1",
            "message1": "%1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "SELECTOR"
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
            "category": ScratchBlocks.Categories.css,
            "colour": ScratchBlocks.Colours.css.primary,
            "colourSecondary": ScratchBlocks.Colours.css.secondary,
            "colourTertiary": ScratchBlocks.Colours.css.tertiary
        });
    },
    onchange: function () {
        function getTop(block) {
            if (block.getSurroundParent()) {
                return getTop(block.getSurroundParent());
            }
            return block;
        }
        var realTop = getTop(this);
        var top = this.getSurroundParent() || this;
        if (this.getSurroundParent() && this.getSurroundParent().disabled) {
            this.setDisabled(true);
        } else if (!realTop.previousConnection && top.type === "css" && realTop.type === "css") {
            this.setDisabled(false);
        } else if (realTop.previousConnection) {
            this.setDisabled(false);
        } else {
            this.setDisabled(true);
        }
        var inputs = this.inputList;
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== 3 && inputs[i].connection) {
                if (inputs[i].connection.targetBlock()) {
                    if (inputs[i].connection.targetBlock().disabled) {
                        this.setDisabled(true);
                    }
                }
            }
        }
        if (this.disabled) {
            if (!this.isInsertionMarker()) this.setOpacity(0.45);
        } else {
            if (!this.isInsertionMarker()) this.setOpacity(1);
        }
    }
};

ScratchBlocks.JavaScript['css_selector'] = function (block) {
    return "style.appendChild(document.createTextNode('" + 
        ScratchBlocks.JavaScript.valueToCode(block, 'SELECTOR') + 
        " {" + 
        ScratchBlocks.JavaScript.statementToCode(block, 'SUBSTACK') + 
        "}'));";
};

ScratchBlocks.Blocks['css_attribute'] = {
    init: function () {
        this.jsonInit({
            "id": "css_attribute",
            "message0": "set attribute %1 to %2",
            "args0": [
                {
                    "type": "input_value",
                    "name": "ATTRIBUTE"
                },
                {
                    "type": "input_value",
                    "name": "VALUE"
                }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "category": ScratchBlocks.Categories.css,
            "colour": ScratchBlocks.Colours.css.primary,
            "colourSecondary": ScratchBlocks.Colours.css.secondary,
            "colourTertiary": ScratchBlocks.Colours.css.tertiary
        });
    },
    onchange: function () {
        function getTop(block) {
            if (block.getSurroundParent()) {
                return getTop(block.getSurroundParent());
            }
            return block;
        }
        var realTop = getTop(this);
        var top = this.getSurroundParent() || this;
        if (this.getSurroundParent() && this.getSurroundParent().disabled) {
            this.setDisabled(true);
        } else if (!realTop.previousConnection && top.type === "css_selector" && realTop.type === "css") {
            this.setDisabled(false);
        } else if (realTop.previousConnection) {
            this.setDisabled(false);
        } else {
            this.setDisabled(true);
        }
        var inputs = this.inputList;
        for (i = 0; i < inputs.length; i++) {
            if (inputs[i].type !== 3 && inputs[i].connection) {
                if (inputs[i].connection.targetBlock()) {
                    if (inputs[i].connection.targetBlock().disabled) {
                        this.setDisabled(true);
                    }
                }
            }
        }
        if (this.disabled) {
            if (!this.isInsertionMarker()) this.setOpacity(0.45);
        } else {
            if (!this.isInsertionMarker()) this.setOpacity(1);
        }
    }
};

ScratchBlocks.JavaScript['css_attribute'] = function (block) {
    return "  " + 
        ScratchBlocks.JavaScript.valueToCode(block, 'ATTRIBUTE') + 
        ": " + 
        ScratchBlocks.JavaScript.valueToCode(block, 'VALUE') + 
        ";";
};
