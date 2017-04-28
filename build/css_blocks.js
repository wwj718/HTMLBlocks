var ScratchBlocks = window.ScratchBlocks;
ScratchBlocks.Categories.css = "css";

ScratchBlocks.Blocks['css'] = {
    init: function () {
        this.jsonInit({
            "id": "css",
            "message0": "CSS",
            "inputsInline": true,
            "nextStatement": null,
            "category": ScratchBlocks.Categories.css,
            "colour": ScratchBlocks.Colours.looks.primary,
            "colourSecondary": ScratchBlocks.Colours.looks.secondary,
            "colourTertiary": ScratchBlocks.Colours.looks.tertiary
        });
    }
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
            "colour": ScratchBlocks.Colours.looks.primary,
            "colourSecondary": ScratchBlocks.Colours.looks.secondary,
            "colourTertiary": ScratchBlocks.Colours.looks.tertiary
        });
    },
    onchange: function () {
        function getTop(block) {
            if (block.getParent()) {
                return getTop(block.getParent());
            }
            return block;
        }
        var realTop = getTop(this);
        var top = this.getParent() || this;
        if (!top.previousConnection && top.type === "css" && realTop.type === "css") {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.looks.primary,
                ScratchBlocks.Colours.looks.secondary,
                ScratchBlocks.Colours.looks.tertiary
            );
        } else if (realTop.previousConnection) {
            this.setDisabled(false);
            if (!this.isInsertionMarker()) this.setColour(
                ScratchBlocks.Colours.looks.primary,
                ScratchBlocks.Colours.looks.secondary,
                ScratchBlocks.Colours.looks.tertiary
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
