         var oNavigationBar1 = new sap.ui.ux3.NavigationBar({
             items: [
                 new sap.ui.ux3.NavigationItem({
                     key: "Objects",
                     text: "Using Objects"
                 }),
                 new sap.ui.ux3.NavigationItem({
                     key: "Clojure",
                     text: "Clojure"
                 }),
                 new sap.ui.ux3.NavigationItem({
                     key: "OOP",
                     text: "OOP"
                 }),
                 new sap.ui.ux3.NavigationItem({
                     key: "Inheritance",
                     text: "Inheritance"
                 }),
                 new sap.ui.ux3.NavigationItem({
                     key: "DesignPatterns",
                     text: "Design Patterns"
                 })
             ]
         });

         oNavigationBar1.placeAt("menu-div");