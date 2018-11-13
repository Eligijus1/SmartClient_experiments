let bootstrap;
(function (bootstrap) {
    function initialize() {
        console.log("bootstrap.initialize invoked.");

        // Button:
        isc.Button.create({
            title: "Click me",
            width: 200,
            click: "isc.say('Hello World')"
        });
        /*
        isc.Button.create({
         title: "middle item",
         position: "relative"
         })
         </SC
         */

        // Label:
        let helloWorldLabel = isc.Label.create({
            left: 200,
            top: 0,
            width: 100,
            contents: "Hello Label",
            overflow: "hidden" //"hidden" (clip), "scroll" (always show scrollbars), or "auto" (show scrollbars only when needed).
        });

        // Hidden button:
        let hiddenBtn = isc.Button.create({
            ID: "hiddenBtn",
            title: "Hidden",
            left: 0,
            top: 20,
            autoDraw: false
        });
        hiddenBtn.show();

        // Warning button:
        isc.Button.create({
            ID: "clickBtn",
            title: "click me",
            left: 0,
            top: 40,
            click: function () {
                isc.warn('button was clicked');
            }
        });

        // Using function:
        isc.Button.create({
            ID: "clickBtn2",
            title: "click me",
            left: 0,
            top: 60,
            click: "clickBtnClicked()"
        });

        // List grid:
        isc.ListGrid.create({
            ID: "contactsList",
            left: 0, top: 80,
            width: 300,
            data: [
                {salutation:"Ms", firstname:"Kathy", lastname:"Whitting"},
                {salutation:"Mr", firstname:"Chris", lastname:"Glover"},
                {salutation:"Mrs", firstname:"Gwen", lastname:"Glover"}
            ],
            fields: [
                {name:"salutation", title:"Title"},
                {name:"firstname", title:"First Name"},
                {name:"lastname", title:"Last Name"}
            ]
        });

        // Form:
        isc.DynamicForm.create({
            ID: "contactsForm",
            left: 0, top: 200,
            width: 300,
            fields: [
                {name:"salutation", title:"Title"},
                {name:"firstname", title:"First Name"},
                {name:"lastname", title:"Last Name"}
            ]
        });

        isc.DynamicForm.create({
            ID: "contactsForm2", left: 0, top: 300, width: 300,
            fields: [
                {name:"salutation", title:"Title", editorType: "select",
                    valueMap:["Ms", "Mr", "Mrs"]
                },
                {name:"firstname", title:"First Name"},
                {name:"lastname", title:"Last Name"},
                {name:"birthday", title:"Birthday", editorType:"date"},
                {name:"employment", title:"Status", editorType:"radioGroup",
                    valueMap:["Employed", "Unemployed"]
                },
                {name:"bio", title:"Biography", editorType:"textArea"},
                {name:"followup", title:"Follow up", editorType:"checkbox"}
            ]
        })
    }

    bootstrap.initialize = initialize;
})(bootstrap || (bootstrap = {}));

function clickBtnClicked() {
    isc.warn('button was clicked');
}
