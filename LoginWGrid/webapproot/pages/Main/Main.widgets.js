Main.widgets = {
	logoutVariable1: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"border":"0","caption":"[Application Name]","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"140px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {"borderColor":"#999999","clientBorder":"1","clientBorderColor":"#999999","headerHeight":"29px","margin":"0,2,0,2"}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 1","horizontalAlign":"left","margin":"2,0,2,0","padding":"10","verticalAlign":"top"}, {}, {
						button1: ["wm.Button", {"caption":"Logout","margin":"4"}, {"onclick":"logoutVariable1"}]
					}],
					layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 2","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}],
					layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tab 3","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}]
				}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"border":"0","height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright [company name] 2011","height":"100%","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}