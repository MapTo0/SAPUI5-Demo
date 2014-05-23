		var oNavigationItem3 = new sap.ui.ux3.NavigationItem({
		    key: "item3",
		    text: "Item with some text 3"
		});
		var oNavigationBar2 = new sap.ui.ux3.NavigationBar({
		    items: [
		        new sap.ui.ux3.NavigationItem({
		            key: "item1",
		            text: "Item with some text 1"
		        }),
		        new sap.ui.ux3.NavigationItem({
		            key: "item2",
		            text: "Item with some text 2"
		        }),
		        oNavigationItem3,
		        new sap.ui.ux3.NavigationItem({
		            key: "item4",
		            text: "Item with some text 4"
		        }),
		        new sap.ui.ux3.NavigationItem({
		            key: "item5",
		            text: "Item with some text 5 CLICK HERE :D "
		        }),
		        new sap.ui.ux3.NavigationItem({
		            key: "item6",
		            text: "Item with some text 6"
		        }),
		        new sap.ui.ux3.NavigationItem({
		            key: "item7",
		            text: "Item with some text 7"
		        })
		    ],
		    selectedItem: oNavigationItem3,
		    select: function(oEvent) {
		        if (oEvent.getParameter("item").getKey() == "item5") {

		            function openConfirm() {
		                sap.ui.commons.MessageBox.confirm("Do you know what is the answer to life the universe and everything ?", fnCallbackConfirm, "A Question");
		            }
		            openConfirm();

		            function fnCallbackConfirm(bResult) {
		                if (bResult == true) {
		                    alert("Keep calm and drink beer then !");
		                } else {
		                    alert("The just ...\n http://goo.gl/qt3wI8")
		                }
		            }

		        }
		    }
		});

		oNavigationBar2.placeAt("content");

		var oData = {
		    items: [{
		        key: "overview",
		        text: "Overview"
		    }, {
		        key: "contacts",
		        text: "Contacts",
		        quantity: 3
		    }, {
		        key: "item3",
		        text: "Item w/o Count"
		    }, {
		        key: "item4",
		        text: "Item with Count",
		        quantity: 12
		    }, {
		        key: "item5",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item6",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item7",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item8",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item9",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item10",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item11",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item12",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item13",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item14",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item15",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item16",
		        text: "Random text",
		        quantity: 12
		    }, {
		        key: "item17",
		        text: "Custom Tooltip Item",
		        quantity: 7,
		        tooltip: "Custom tooltip text is provided for this item"
		    }]
		};

		 // Create a navigation item template as instance of CountingNavigationItem control
		var oNavBarItemTemplate = new sap.suite.ui.commons.CountingNavigationItem({
		    key: "{key}",
		    text: "{text}",
		    quantity: "{quantity}",
		    tooltip: "{tooltip}"
		});

		 // Create a VerticalNavigationBar instance
		var oNavBar = new sap.suite.ui.commons.VerticalNavigationBar({
		    id: "navBar",
		    items: {
		        path: "/items",
		        template: oNavBarItemTemplate
		    },
		    select: function(oEvent) {
		        alert("You have selected an element with key " + oEvent.getParameters().item.getKey());
		    }
		});

		 // Apply model to Navigation Bar and select second item by default
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData);
		oNavBar.setModel(oModel);
		oNavBar.setSelectedItem(oNavBar.getItems()[1]);
		var oBorderLayout1 = new sap.ui.commons.layout.BorderLayout("BorderLayout1", {
		    width: "500px",
		    height: "500px",
		    begin: new sap.ui.commons.layout.BorderLayoutArea({
		        size: "250px",
		        visible: true,
		        content: [oNavBar]
		    })
		});
		oBorderLayout1.placeAt("content");


		 //Create the Accordion control
		var oAccordion = new sap.ui.commons.Accordion("accordionA");

		 //Building Section 1
		var oSection1 = new sap.ui.commons.AccordionSection("section1");
		oSection1.setTitle("Section 1");
		oSection1.setTooltip("Section 1");
		oSection1.setMaxHeight("100px");
		for (var i = 0; i < 5; i++) {
		    var oCheckBox1 = new sap.ui.commons.CheckBox("CheckBox1" + i);
		    oCheckBox1.setText("CheckBox1 " + i);
		    oSection1.addContent(oCheckBox1);
		    var oLabel1 = new sap.ui.commons.Label("Label1" + i);
		    oLabel1.setText("Label 1 " + i);
		    oSection1.addContent(oLabel1);
		}
		oAccordion.addSection(oSection1);

		 //Building Section 2
		var oSection2 = new sap.ui.commons.AccordionSection("section2");
		oSection2.setTitle("Section 2");
		for (var i = 0; i < 5; i++) {
		    var oCheckBox2 = new sap.ui.commons.CheckBox("CheckBox2" + i);
		    oCheckBox2.setText("CheckBox2 " + i);
		    oSection2.addContent(oCheckBox2);
		}
		oAccordion.addSection(oSection2);
		var oSection3 = new sap.ui.commons.AccordionSection("section3");
		oSection3.setTitle("Section 3");
		oSection3.setEnabled(false);
		var oCheckBox3 = new sap.ui.commons.CheckBox("CheckBox3");
		oSection3.addContent(oCheckBox3);
		oAccordion.addSection(oSection3);
		var oSection4 = new sap.ui.commons.AccordionSection("section4");
		oSection4.setTitle("Section 4");
		var oCheckBox4 = new sap.ui.commons.CheckBox("CheckBox4");
		oSection4.addContent(oCheckBox4);
		oAccordion.addSection(oSection4);
		oAccordion.setWidth("200px");

		oAccordion.placeAt("content");