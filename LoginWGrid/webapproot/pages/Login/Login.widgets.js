Login.widgets = {
	variable1: ["wm.Variable", {"isList":true,"json":"[{name: \"Alabama\", dataValue: \"AL\"},{name:\"Alaska\", dataValue:\"AK\"},{name:\"American Samoa\", dataValue:\"AS\"},{name:\"Arizona\", dataValue:\"AZ\"},{name:\"Arkansas\", dataValue:\"AR\"},{name:\"California\", dataValue:\"CA\"},{name:\"Colorado\", dataValue:\"CO\"},{name:\"Connecticut\", dataValue:\"CT\"},{name:\"Delaware\", dataValue:\"DE\"},{name:\"District of Columbia\", dataValue:\"DC\"},{name:\"Federated States of Micronesia\", dataValue: \"FM\"},{name: \"Florida\", dataValue:\"FL\"},{name:\"Georgia\", dataValue:\"GA\"},{name:\"Guam\", dataValue:\"GU\"},{name:\"Hawaii\", dataValue:\"HI\"},{name:\"Idaho\", dataValue:\"ID\"},{name:\"Illinois\", dataValue:\"IL\"},{name:\"Indiana\", dataValue:\"IN\"},{name:\"Iowa\", dataValue:\"IA\"},{name:\"Kansas\", dataValue:\"KS\"},{name:\"Kentucky\", dataValue:\"KY\"},{name:\"Louisiana\", dataValue:\"LA\"},{name:\"Maine\", dataValue:\"ME\"},{name:\"Marshall islands\", dataValue:\"MH\"},{name:\"Maryland\", dataValue:\"MD\"},{name:\"Massachusetts\", dataValue:\"MA\"},{name:\"Michigan\", dataValue:\"MI\"},{name:\"Minnesota\", dataValue:\"MN\"},{name:\"Mississippi\", dataValue:\"MS\"},{name:\"Missouri\", dataValue:\"MO\"},{name:\"Montana\", dataValue:\"MT\"},{name:\"Nebraska\", dataValue:\"NE\"},{name:\"Nevada\", dataValue:\"NV\"},{name:\"New Hampshire\", dataValue:\"NH\"},{name:\"New Jersey\", dataValue:\"NJ\"},{name:\"New Mexico\", dataValue:\"NM\"},{name:\"New York\", dataValue:\"NY\"},{name:\"North Carolina\", dataValue:\"NC\"},{name:\"North Dakota\", dataValue:\"ND\"},{name:\"Northern Mariana Islands\", dataValue:\"MP\"},{name:\"Ohio\", dataValue:\"OH\"},{name:\"Oklahoma\", dataValue:\"OK\"},{name:\"Oregon\", dataValue:\"OR\"},{name:\"Palau\", dataValue:\"PW\"},{name:\"Pennsylvania\", dataValue:\"PA\"},{name:\"Puerto Rico\", dataValue:\"PR\"},{name:\"Rhode Island\", dataValue:\"RI\"},{name:\"South Carolina\", dataValue:\"SC\"},{name:\"South Dakota\", dataValue:\"SD\"},{name:\"Tennessee\", dataValue:\"TN\"},{name:\"Texas\", dataValue:\"TX\"},{name:\"Utah\", dataValue:\"UT\"},{name:\"Vermont\", dataValue:\"VT\"},{name:\"Virgin Islands\", dataValue:\"VI\"},{name:\"Virginia\", dataValue:\"VA\"},{name:\"Washington\", dataValue:\"WA\"},{name:\"West Virginia\", dataValue:\"WV\"},{name:\"Wisconsin\", dataValue:\"WI\"},{name:\"Wyoming\", dataValue:\"WY\"}]","type":"EntryData"}, {}],
	layoutBox: ["wm.Layout", {"height":"100%"}, {}, {
		loginMainPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_LightBlue"]},"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			wmTitle: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"align":"center","border":"0","caption":"Welcome to The App","height":"20px","padding":"4","width":"350px"}, {}],
			wmTitle1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"align":"center","border":"0","caption":"Choose your State","height":"20px","padding":"4","width":"350px"}, {}],
			dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"id":"name","title":"Name","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"dataValue","title":"DataValue","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"margin":"4","width":"350px"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"variable1","targetProperty":"dataSet"}, {}]
				}]
			}],
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