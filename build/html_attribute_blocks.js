var newHtmlAttributeBlock = function (internalName, displayName, attributeName) {
    var ScratchBlocks = window.ScratchBlocks;
    ScratchBlocks.Blocks[internalName] = {
        init: function() {
            this.jsonInit({
                "id": internalName,
                "message0": displayName,
                "inputsInline": true,
                "category": ScratchBlocks.Categories.html,
                "colour": ScratchBlocks.Colours.control.primary,
                "colourSecondary": ScratchBlocks.Colours.control.secondary,
                "colourTertiary": ScratchBlocks.Colours.control.tertiary,
                "outputShape": ScratchBlocks.OUTPUT_SHAPE_ROUND
            });
        },
        onchange: function () {
            var top = this.getParent();
            if (top && top.disabled) {
                this.setDisabled(true);
                if (!this.isInsertionMarker()) this.setOpacity(0.45);
            } else if (top && top.type === "html_attribute") {
                this.setDisabled(false);
                if (!this.isInsertionMarker()) this.setOpacity(1);
            } else if (!top) {
                this.setDisabled(false);
                if (!this.isInsertionMarker()) this.setOpacity(1);
            } else {
                this.setDisabled(true);
                if (!this.isInsertionMarker()) this.setOpacity(0.45);
            }
        }
    };
};

newHtmlAttributeBlock("html_attribute_href", "href", "href");
