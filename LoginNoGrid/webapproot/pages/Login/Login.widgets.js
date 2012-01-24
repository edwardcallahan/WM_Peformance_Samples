Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%"}, {}, {
		loginMainPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue"]},"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			wmTitle: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"align":"center","border":"0","caption":"Welcome to The App","height":"20px","padding":"4","width":"350px"}, {}],
			loginInputPanel: ["wm.EmphasizedContentPanel", {"border":"2","height":"140px","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"350px"}, {}, {
				usernameInput: ["wm.Text", {"caption":"Username","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
				passwordInput: ["wm.Text", {"caption":"Password","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true}, {}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","border":"0","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"caption":"Login","height":"100%","margin":"4","width":"90px"}, {"onclick":"loginButtonClick"}]
				}]
			}]
		}]
	}]
}