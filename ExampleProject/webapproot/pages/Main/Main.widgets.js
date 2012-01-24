Main.widgets = {
	addressLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.addressLiveView1"}, {}],
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
						addressLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							addressGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Address"}, {}, {
								addressDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"addressId","title":"AddressId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"address","title":"Address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"address2","title":"Address2","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"district","title":"District","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"postalCode","title":"PostalCode","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"phone","title":"Phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"city.cityId","title":"City.cityId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"city.city","title":"City.city","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"city.lastUpdate","title":"City.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"city.country.countryId","title":"City.country.countryId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"city.country.country","title":"City.country.country","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"city.country.lastUpdate","title":"City.country.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}]
							}],
							addressDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"268px","title":"Details"}, {}, {
								addressLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"238px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"addressLiveVariable1"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"addressDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
									}],
									addressIdEditor1: ["wm.Number", {"caption":"AddressId","captionSize":"200px","emptyValue":"zero","formField":"addressId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"address","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									address2Editor1: ["wm.Text", {"caption":"Address2","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"address2","height":"26px","readonly":true,"width":"100%"}, {}],
									districtEditor1: ["wm.Text", {"caption":"District","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"district","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									postalCodeEditor1: ["wm.Text", {"caption":"PostalCode","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"postalCode","height":"26px","readonly":true,"width":"100%"}, {}],
									phoneEditor1: ["wm.Text", {"caption":"Phone","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"phone","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									lastUpdateEditor1: ["wm.DateTime", {"caption":"LastUpdate","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"lastUpdate","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
									cityLookup1: ["wm.Lookup", {"caption":"City","captionSize":"200px","displayField":"city","formField":"city","readonly":true,"required":true,"width":"100%"}, {}],
									addressLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"addressLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
										savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
											saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"addressLiveForm1EditPanel.saveData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
												}]
											}],
											cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"addressLiveForm1EditPanel.cancelEdit"}]
										}],
										operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"addressLiveForm1EditPanel.beginDataInsert"}],
											updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"addressLiveForm1EditPanel.beginDataUpdate"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
												}]
											}],
											deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"addressLiveForm1EditPanel.deleteData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"addressLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
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