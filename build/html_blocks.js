var ScratchBlocks = window.ScratchBlocks;

ScratchBlocks.Categories.html = "html";

ScratchBlocks.Blocks['html'] = {
    init: function() {
        this.jsonInit({
            "id": "html",
            "message0": "HTML",
            "message1": "%1",
            "args1": [
                {
                    "type": "input_statement",
                    "name": "SUBSTACK"
                }
            ],
            "inputsInline": true,
            "category": ScratchBlocks.Categories.html,
            "colour": ScratchBlocks.Colours.control.primary,
            "colourSecondary": ScratchBlocks.Colours.control.secondary,
            "colourTertiary": ScratchBlocks.Colours.control.tertiary
        });
    }
};

ScratchBlocks.JavaScript['html'] = function (block) {
    return "var element = document.createElement('HTML');" + 
        ScratchBlocks.JavaScript.statementToCode(block, 'SUBSTACK');
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
    },
    onchange: function () {
        function getTop(block) {
            if (block.getSurroundParent()) {
                return getTop(block.getSurroundParent());
            }
            return block;
        }
        var top = getTop(this);
        if (this.getSurroundParent() && this.getSurroundParent().disabled) {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        } else if (!top.previousConnection && top.type === "html") {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else if (top.previousConnection) {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        }
    }
};

ScratchBlocks.JavaScript['html_element'] = function (block) {
    var code = "element.appendChild((function (element) {" + 
        ScratchBlocks.JavaScript.statementToCode(block, 'SUBSTACK') + 
        "return element;})(document.createElement('" + 
        ScratchBlocks.JavaScript.valueToCode(block, 'ELEMENT') + 
        "')));";
    return code;
};

ScratchBlocks.Blocks['html_text'] = {
    init: function() {
        this.jsonInit({
            "id": "html_text",
            "message0": "text %1",
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
    },
    onchange: function () {
        function getTop(block) {
            if (block.getSurroundParent()) {
                return getTop(block.getSurroundParent());
            }
            return block;
        }
        var top = getTop(this);
        if (this.getSurroundParent() && this.getSurroundParent().disabled) {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        } else if (!top.previousConnection && top.type === "html") {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else if (top.previousConnection) {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        }
    }
};

ScratchBlocks.JavaScript['html_text'] = function (block) {
    return "element.appendChild(document.createTextNode('" + 
        ScratchBlocks.JavaScript.valueToCode(block, 'TEXT') + 
        "'));";
};

ScratchBlocks.Blocks['html_attribute'] = {
    init: function() {
        this.jsonInit({
            "id": "html_attribute",
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
            "category": ScratchBlocks.Categories.html,
            "colour": ScratchBlocks.Colours.control.primary,
            "colourSecondary": ScratchBlocks.Colours.control.secondary,
            "colourTertiary": ScratchBlocks.Colours.control.tertiary
        });
    },
    onchange: function () {
        function getTop(block) {
            if (block.getSurroundParent()) {
                return getTop(block.getSurroundParent());
            }
            return block;
        }
        var top = getTop(this);
        if (this.getSurroundParent() && this.getSurroundParent().disabled) {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        } else if (!top.previousConnection && top.type === "html") {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else if (top.previousConnection) {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.control.primary,
                ScratchBlocks.Colours.control.secondary,
                ScratchBlocks.Colours.control.tertiary
            );
        } else {
            this.setDisabled(true);
            if (!this.isInsertionMarker()) this.setColour(
                "#CCCCAE",
                "#CCCCAE",
                "#CCCCAE"
            );
        }
    }
};

ScratchBlocks.JavaScript['html_attribute'] = function (block) {
    return "element.setAttribute('" + 
        ScratchBlocks.JavaScript.valueToCode(block, 'ATTRIBUTE') + 
        "','" + 
        ScratchBlocks.JavaScript.valueToCode(block, 'VALUE') + 
        "');";
};
