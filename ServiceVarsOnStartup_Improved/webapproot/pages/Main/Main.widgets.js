Main.widgets = {
	lvarCity: ["wm.LiveVariable", {"autoUpdate":false,"designMaxResults":10,"liveSource":"com.worlddb.data.City","maxResults":10,"startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"selectMenu1.selectedItem","targetProperty":"filter"}, {}]
		}]
	}],
	filmDialog: ["wm.DesignableDialog", {"height":392,"title":"film","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			filmLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"318px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"filmLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"filmDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				filmIdEditor1: ["wm.Number", {"caption":"FilmId","captionSize":"200px","emptyValue":"zero","formField":"filmId","height":"26px","required":true,"width":"100%"}, {}],
				titleEditor1: ["wm.Text", {"border":"0","caption":"Title","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"title","height":"26px","required":true,"width":"100%"}, {}],
				descriptionEditor1: ["wm.Text", {"caption":"Description","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"description","height":"26px","width":"100%"}, {}],
				releaseYearEditor1: ["wm.DateTime", {"caption":"ReleaseYear","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"releaseYear","height":"26px","width":"100%"}, {}],
				rentalDurationEditor1: ["wm.Number", {"caption":"RentalDuration","captionSize":"200px","emptyValue":"zero","formField":"rentalDuration","height":"26px","required":true,"width":"100%"}, {}],
				rentalRateEditor1: ["wm.Number", {"caption":"RentalRate","captionSize":"200px","emptyValue":"zero","formField":"rentalRate","height":"26px","required":true,"width":"100%"}, {}],
				lengthEditor1: ["wm.Number", {"caption":"Length","captionSize":"200px","emptyValue":"zero","formField":"length","height":"26px","width":"100%"}, {}],
				replacementCostEditor1: ["wm.Number", {"caption":"ReplacementCost","captionSize":"200px","emptyValue":"zero","formField":"replacementCost","height":"26px","required":true,"width":"100%"}, {}],
				ratingEditor1: ["wm.Text", {"caption":"Rating","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rating","height":"26px","width":"100%"}, {}],
				specialFeaturesEditor1: ["wm.Text", {"caption":"SpecialFeatures","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"specialFeatures","height":"26px","width":"100%"}, {}],
				lastUpdateEditor1: ["wm.DateTime", {"caption":"LastUpdate","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"lastUpdate","height":"26px","required":true,"width":"100%"}, {}],
				languageByLanguageIdLookup1: ["wm.Lookup", {"caption":"LanguageByLanguageId","captionSize":"200px","displayField":"name","formField":"languageByLanguageId","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			filmSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"filmLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"filmLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			filmCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"filmDialog.hide"}]
		}]
	}],
	filmLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.filmLiveView1"}, {}],
	svarActorsByFilm: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"filmsActors","service":"sakilaDB"}, {}, {
		input: ["wm.ServiceInput", {"type":"filmsActorsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"filmIdEditor2.dataValue","targetProperty":"fID"}, {}]
			}]
		}]
	}],
	svarFilmInv: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"filmInventory","service":"sakilaDB"}, {}, {
		input: ["wm.ServiceInput", {"type":"filmInventoryInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"filmIdEditor2.dataValue","targetProperty":"fId"}, {}]
			}]
		}]
	}],
	staffDialog: ["wm.DesignableDialog", {"height":364,"title":"staff","width":"500px","containerWidgetId":"containerWidget1","buttonBarId":"buttonBar"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			staffLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"290px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"staffLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"staffDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				staffIdEditor1: ["wm.Number", {"caption":"StaffId","captionSize":"200px","emptyValue":"zero","formField":"staffId","height":"26px","required":true,"width":"100%"}, {}],
				firstNameEditor1: ["wm.Text", {"caption":"FirstName","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"firstName","height":"26px","required":true,"width":"100%"}, {}],
				lastNameEditor1: ["wm.Text", {"caption":"LastName","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"lastName","height":"26px","required":true,"width":"100%"}, {}],
				pictureEditor1: ["wm.Number", {"caption":"Picture","captionSize":"200px","emptyValue":"zero","formField":"picture","height":"26px","width":"100%"}, {}],
				emailEditor1: ["wm.Text", {"caption":"Email","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"email","height":"26px","width":"100%"}, {}],
				activeEditor1: ["wm.Checkbox", {"caption":"Active","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"active","height":"26px","width":"100%"}, {}],
				usernameEditor1: ["wm.Text", {"caption":"Username","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"username","height":"26px","required":true,"width":"100%"}, {}],
				passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"password","height":"26px","width":"100%"}, {}],
				lastUpdateEditor3: ["wm.DateTime", {"caption":"LastUpdate","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"lastUpdate","height":"26px","required":true,"width":"100%"}, {}],
				storeLookup1: ["wm.Lookup", {"caption":"Store","captionSize":"200px","displayField":"lastUpdate","formField":"store","required":true,"width":"100%"}, {}],
				addressLookup1: ["wm.Lookup", {"caption":"Address","captionSize":"200px","displayField":"district","formField":"address","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			staffSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"staffLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"staffLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			staffCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"staffDialog.hide"}]
		}]
	}],
	staffLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.staffLiveView1","startUpdate":false}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"border":"0","height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"border":"0","caption":"Movies A Go-Go","height":"35px","padding":"4","width":"100%"}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					selectMenu1: ["wm.SelectMenu", {"caption":"Find a Store:","displayField":"name","displayValue":"","hasDownArrow":false,"placeHolder":"Enter City Name"}, {"onchange":"lvarCity"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"lvarCity","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Find a Film","horizontalAlign":"left","margin":"2,0,2,0","padding":"10","verticalAlign":"top"}, {}, {
						filmLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"filmDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"filmLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"filmDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"filmSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							filmDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"filmId","title":"FilmId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"title","title":"Title","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"description","title":"Description","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"releaseYear","title":"ReleaseYear","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"rentalDuration","title":"RentalDuration","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rentalRate","title":"RentalRate","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"length","title":"Length","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"replacementCost","title":"ReplacementCost","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"rating","title":"Rating","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"specialFeatures","title":"SpecialFeatures","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"languageByLanguageId.languageId","title":"LanguageByLanguageId.languageId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"languageByLanguageId.name","title":"LanguageByLanguageId.name","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"languageByLanguageId.lastUpdate","title":"LanguageByLanguageId.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"filmLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							filmGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								filmNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"filmLivePanel1.popupLivePanelInsert"}],
								filmUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"filmLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"filmDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								filmDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"filmLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"filmDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}],
					layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Film Details","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {}, {
						label4: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Selected Film","padding":"4"}, {}],
						liveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"310px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"filmDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
							}],
							filmIdEditor2: ["wm.Number", {"caption":"FilmId","captionSize":"200px","emptyValue":"zero","formField":"filmId","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							titleEditor2: ["wm.Text", {"caption":"Title","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"title","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							descriptionEditor2: ["wm.Text", {"caption":"Description","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"description","height":"26px","readonly":true,"width":"100%"}, {}],
							releaseYearEditor2: ["wm.DateTime", {"caption":"ReleaseYear","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"releaseYear","height":"26px","readonly":true,"width":"100%"}, {}],
							rentalDurationEditor2: ["wm.Number", {"caption":"RentalDuration","captionSize":"200px","emptyValue":"zero","formField":"rentalDuration","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							rentalRateEditor2: ["wm.Number", {"caption":"RentalRate","captionSize":"200px","emptyValue":"zero","formField":"rentalRate","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							lengthEditor2: ["wm.Number", {"caption":"Length","captionSize":"200px","emptyValue":"zero","formField":"length","height":"26px","readonly":true,"width":"100%"}, {}],
							replacementCostEditor2: ["wm.Number", {"caption":"ReplacementCost","captionSize":"200px","emptyValue":"zero","formField":"replacementCost","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							ratingEditor2: ["wm.Text", {"caption":"Rating","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"rating","height":"26px","readonly":true,"width":"100%"}, {}],
							specialFeaturesEditor2: ["wm.Text", {"caption":"SpecialFeatures","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"specialFeatures","height":"26px","readonly":true,"width":"100%"}, {}],
							lastUpdateEditor2: ["wm.DateTime", {"caption":"LastUpdate","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"lastUpdate","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							languageByLanguageIdLookup2: ["wm.Lookup", {"caption":"LanguageByLanguageId","captionSize":"200px","displayField":"name","formField":"languageByLanguageId","readonly":true,"required":true,"width":"100%"}, {}],
							liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"liveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1","showing":false}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
									saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
										}]
									}],
									cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
									updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}],
									deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"liveForm1EditPanel.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}],
						panel7: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label5: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Starring","padding":"4","width":"50%"}, {}],
							label6: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"border":"0","caption":"Available at","padding":"4","width":"50%"}, {}]
						}],
						panel4: ["wm.Panel", {"height":"300px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"id":"c0","title":"First Name","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"c1","title":"Last Name","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4","width":"50%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svarActorsByFilm","targetProperty":"dataSet"}, {}]
								}]
							}],
							dojoGrid2: ["wm.DojoGrid", {"columns":[{"show":true,"id":"c0","title":"Address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"c1","title":"City","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4","width":"50%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svarFilmInv","targetProperty":"dataSet"}, {}]
								}]
							}]
						}]
					}],
					layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Meet the Team","horizontalAlign":"left","margin":"2,0,2,0","verticalAlign":"top"}, {"onShow":"staffLiveVariable1"}, {
						staffLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"staffDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"staffLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"staffDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"staffSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							staffDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"staffId","title":"StaffId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"firstName","title":"FirstName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"lastName","title":"LastName","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"email","title":"Email","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"active","title":"Active","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"username","title":"Username","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"password","title":"Password","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"lastUpdate","title":"LastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"store.storeId","title":"Store.storeId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"store.lastUpdate","title":"Store.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"address.addressId","title":"Address.addressId","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"address.address","title":"Address.address","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.address2","title":"Address.address2","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"address.district","title":"Address.district","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"address.postalCode","title":"Address.postalCode","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"address.phone","title":"Address.phone","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"address.lastUpdate","title":"Address.lastUpdate","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","margin":"4"}, {"onCellDblClick":"staffLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"staffLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							staffGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								staffNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"staffLivePanel1.popupLivePanelInsert"}],
								staffUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"staffLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"staffDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								staffDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"staffLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"staffDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}]
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