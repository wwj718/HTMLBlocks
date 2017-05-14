var ScratchBlocks = window.ScratchBlocks;

ScratchBlocks.Colours.html = ScratchBlocks.Colours.control;
ScratchBlocks.Colours.css = ScratchBlocks.Colours.looks;

ScratchBlocks.JavaScript.INDENT = "";

ScratchBlocks.JavaScript["text"] = function (block) {
    return [block.getFieldValue('TEXT')];
};

var newNameBlock = function (internalName, attributeName, category) {
    var ScratchBlocks = window.ScratchBlocks;
    ScratchBlocks.Blocks[internalName] = {
        init: function() {
            this.jsonInit({
                "id": internalName,
                "message0": attributeName,
                "inputsInline": true,
                "category": ScratchBlocks.Categories[category],
                "colour": ScratchBlocks.Colours[category].primary,
                "colourSecondary": ScratchBlocks.Colours[category].secondary,
                "colourTertiary": ScratchBlocks.Colours[category].tertiary,
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "output": "String"
            });
        }
    };
    ScratchBlocks.JavaScript[internalName] = function (block) {
        return [attributeName];
    };
};
