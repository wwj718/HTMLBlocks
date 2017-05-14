var ScratchBlocks = window.ScratchBlocks;

ScratchBlocks.JavaScript.INDENT = "";

ScratchBlocks.JavaScript["text"] = function (block) {
    return [block.getFieldValue('TEXT')];
};

var newNameBlock = function (internalName, attributeName) {
    var ScratchBlocks = window.ScratchBlocks;
    ScratchBlocks.Blocks[internalName] = {
        init: function() {
            this.jsonInit({
                "id": internalName,
                "message0": attributeName,
                "inputsInline": true,
                "category": ScratchBlocks.Categories.html,
                "colour": ScratchBlocks.Colours.control.primary,
                "colourSecondary": ScratchBlocks.Colours.control.secondary,
                "colourTertiary": ScratchBlocks.Colours.control.tertiary,
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND,
                "output": "String"
            });
        }
    };
    ScratchBlocks.JavaScript[internalName] = function (block) {
        return [attributeName];
    };
};
