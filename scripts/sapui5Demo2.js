var wideTile = new sap.ui.core.HTML({
    content: '<div class="wideTile">The wide one</div>',
    width: "100%",
    layoutData: new sap.ui.layout.GridData({
        span: "L12 M12 S12"
    })
});

var oGridTiles = new sap.ui.layout.Grid({
    hSpacing: 1,
    vSpacing: 1,
    content: [
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }), new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }), new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Some responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M4 S6"
            })
        }),

        wideTile,

        new sap.ui.core.HTML({
            content: '<p>Other responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M6 S3"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Other responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M6 S3"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Other responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M6 S3"
            })
        }),
        new sap.ui.core.HTML({
            content: '<p>Other responsive blocks</p>',
            width: "100%",
            layoutData: new sap.ui.layout.GridData({
                span: "L3 M6 S3"
            })
        })
    ]
});

oGridTiles.placeAt("content");