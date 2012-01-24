dojo.declare("OnePageApp_TenPages", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"i18n": false, 
	"main": "Main", 
	"projectSubVersion": "Alpha7", 
	"projectVersion": 1, 
	"saveCounter": 34, 
	"studioVersion": "6.4.4GA", 
	"theme": "wm_coolblue", 
	"toastPosition": "br",
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		variable1: ["wm.Variable", {"isList":true,"json":"[{dataValue:\"United States\"},{dataValue:\"United Kingdom\"},{dataValue:\"Afghanistan\"},{dataValue:\"Albania\"},{dataValue:\"Algeria\"},{dataValue:\"American Samoa\"},{dataValue:\"Andorra\"},{dataValue:\"Angola\"},{dataValue:\"Anguilla\"},{dataValue:\"Antarctica\"},{dataValue:\"Antigua and Barbuda\"},{dataValue:\"Argentina\"},{dataValue:\"Armenia\"},{dataValue:\"Aruba\"},{dataValue:\"Australia\"},{dataValue:\"Austria\"},{dataValue:\"Azerbaijan\"},{dataValue:\"Bahamas\"},{dataValue:\"Bahrain\"},{dataValue:\"Bangladesh\"},{dataValue:\"Barbados\"},{dataValue:\"Belarus\"},{dataValue:\"Belgium\"},{dataValue:\"Belize\"},{dataValue:\"Benin\"},{dataValue:\"Bermuda\"},{dataValue:\"Bhutan\"},{dataValue:\"Bolivia\"},{dataValue:\"Bosnia and Herzegovina\"},{dataValue:\"Botswana\"},{dataValue:\"Bouvet Island\"},{dataValue:\"Brazil\"},{dataValue:\"British Indian Ocean Territory\"},{dataValue:\"Brunei Darussalam\"},{dataValue:\"Bulgaria\"},{dataValue:\"Burkina Faso\"},{dataValue:\"Burundi\"},{dataValue:\"Cambodia\"},{dataValue:\"Cameroon\"},{dataValue:\"Canada\"},{dataValue:\"Cape Verde\"},{dataValue:\"Cayman Islands\"},{dataValue:\"Central African Republic\"},{dataValue:\"Chad\"},{dataValue:\"Chile\"},{dataValue:\"China\"},{dataValue:\"Christmas Island\"},{dataValue:\"Cocos (Keeling) Islands\"},{dataValue:\"Colombia\"},{dataValue:\"Comoros\"},{dataValue:\"Congo\"},{dataValue:\"Congo, The Democratic Republic of The\"},{dataValue:\"Cook Islands\"},{dataValue:\"Costa Rica\"},{dataValue:\"Cote D'ivoire\"},{dataValue:\"Croatia\"},{dataValue:\"Cuba\"},{dataValue:\"Cyprus\"},{dataValue:\"Czech Republic\"},{dataValue:\"Denmark\"},{dataValue:\"Djibouti\"},{dataValue:\"Dominica\"},{dataValue:\"Dominican Republic\"},{dataValue:\"Ecuador\"},{dataValue:\"Egypt\"},{dataValue:\"El Salvador\"},{dataValue:\"Equatorial Guinea\"},{dataValue:\"Eritrea\"},{dataValue:\"Estonia\"},{dataValue:\"Ethiopia\"},{dataValue:\"Falkland Islands (Malvinas)\"},{dataValue:\"Faroe Islands\"},{dataValue:\"Fiji\"},{dataValue:\"Finland\"},{dataValue:\"France\"},{dataValue:\"French Guiana\"},{dataValue:\"French Polynesia\"},{dataValue:\"French Southern Territories\"},{dataValue:\"Gabon\"},{dataValue:\"Gambia\"},{dataValue:\"Georgia\"},{dataValue:\"Germany\"},{dataValue:\"Ghana\"},{dataValue:\"Gibraltar\"},{dataValue:\"Greece\"},{dataValue:\"Greenland\"},{dataValue:\"Grenada\"},{dataValue:\"Guadeloupe\"},{dataValue:\"Guam\"},{dataValue:\"Guatemala\"},{dataValue:\"Guinea\"},{dataValue:\"Guinea-bissau\"},{dataValue:\"Guyana\"},{dataValue:\"Haiti\"},{dataValue:\"Heard Island and Mcdonald Islands\"},{dataValue:\"Holy See (Vatican City State)\"},{dataValue:\"Honduras\"},{dataValue:\"Hong Kong\"},{dataValue:\"Hungary\"},{dataValue:\"Iceland\"},{dataValue:\"India\"},{dataValue:\"Indonesia\"},{dataValue:\"Iran, Islamic Republic of\"},{dataValue:\"Iraq\"},{dataValue:\"Ireland\"},{dataValue:\"Israel\"},{dataValue:\"Italy\"},{dataValue:\"Jamaica\"},{dataValue:\"Japan\"},{dataValue:\"Jordan\"},{dataValue:\"Kazakhstan\"},{dataValue:\"Kenya\"},{dataValue:\"Kiribati\"},{dataValue:\"Korea, Democratic People's Republic of\"},{dataValue:\"Korea, Republic of\"},{dataValue:\"Kuwait\"},{dataValue:\"Kyrgyzstan\"},{dataValue:\"Lao People's Democratic Republic\"},{dataValue:\"Latvia\"},{dataValue:\"Lebanon\"},{dataValue:\"Lesotho\"},{dataValue:\"Liberia\"},{dataValue:\"Libyan Arab Jamahiriya\"},{dataValue:\"Liechtenstein\"},{dataValue:\"Lithuania\"},{dataValue:\"Luxembourg\"},{dataValue:\"Macao\"},{dataValue:\"Macedonia, The Former Yugoslav Republic of\"},{dataValue:\"Madagascar\"},{dataValue:\"Malawi\"},{dataValue:\"Malaysia\"},{dataValue:\"Maldives\"},{dataValue:\"Mali\"},{dataValue:\"Malta\"},{dataValue:\"Marshall Islands\"},{dataValue:\"Martinique\"},{dataValue:\"Mauritania\"},{dataValue:\"Mauritius\"},{dataValue:\"Mayotte\"},{dataValue:\"Mexico\"},{dataValue:\"Micronesia, Federated States of\"},{dataValue:\"Moldova, Republic of\"},{dataValue:\"Monaco\"},{dataValue:\"Mongolia\"},{dataValue:\"Montserrat\"},{dataValue:\"Morocco\"},{dataValue:\"Mozambique\"},{dataValue:\"Myanmar\"},{dataValue:\"Namibia\"},{dataValue:\"Nauru\"},{dataValue:\"Nepal\"},{dataValue:\"Netherlands\"},{dataValue:\"Netherlands Antilles\"},{dataValue:\"New Caledonia\"},{dataValue:\"New Zealand\"},{dataValue:\"Nicaragua\"},{dataValue:\"Niger\"},{dataValue:\"Nigeria\"},{dataValue:\"Niue\"},{dataValue:\"Norfolk Island\"},{dataValue:\"Northern Mariana Islands\"},{dataValue:\"Norway\"},{dataValue:\"Oman\"},{dataValue:\"Pakistan\"},{dataValue:\"Palau\"},{dataValue:\"Palestinian Territory, Occupied\"},{dataValue:\"Panama\"},{dataValue:\"Papua New Guinea\"},{dataValue:\"Paraguay\"},{dataValue:\"Peru\"},{dataValue:\"Philippines\"},{dataValue:\"Pitcairn\"},{dataValue:\"Poland\"},{dataValue:\"Portugal\"},{dataValue:\"Puerto Rico\"},{dataValue:\"Qatar\"},{dataValue:\"Reunion\"},{dataValue:\"Romania\"},{dataValue:\"Russian Federation\"},{dataValue:\"Rwanda\"},{dataValue:\"Saint Helena\"},{dataValue:\"Saint Kitts and Nevis\"},{dataValue:\"Saint Lucia\"},{dataValue:\"Saint Pierre and Miquelon\"},{dataValue:\"Saint Vincent and The Grenadines\"},{dataValue:\"Samoa\"},{dataValue:\"San Marino\"},{dataValue:\"Sao Tome and Principe\"},{dataValue:\"Saudi Arabia\"},{dataValue:\"Senegal\"},{dataValue:\"Serbia and Montenegro\"},{dataValue:\"Seychelles\"},{dataValue:\"Sierra Leone\"},{dataValue:\"Singapore\"},{dataValue:\"Slovakia\"},{dataValue:\"Slovenia\"},{dataValue:\"Solomon Islands\"},{dataValue:\"Somalia\"},{dataValue:\"South Africa\"},{dataValue:\"South Georgia and The South Sandwich Islands\"},{dataValue:\"Spain\"},{dataValue:\"Sri Lanka\"},{dataValue:\"Sudan\"},{dataValue:\"Suriname\"},{dataValue:\"Svalbard and Jan Mayen\"},{dataValue:\"Swaziland\"},{dataValue:\"Sweden\"},{dataValue:\"Switzerland\"},{dataValue:\"Syrian Arab Republic\"},{dataValue:\"Taiwan, Province of China\"},{dataValue:\"Tajikistan\"},{dataValue:\"Tanzania, United Republic of\"},{dataValue:\"Thailand\"},{dataValue:\"Timor-leste\"},{dataValue:\"Togo\"},{dataValue:\"Tokelau\"},{dataValue:\"Tonga\"},{dataValue:\"Trinidad and Tobago\"},{dataValue:\"Tunisia\"},{dataValue:\"Turkey\"},{dataValue:\"Turkmenistan\"},{dataValue:\"Turks and Caicos Islands\"},{dataValue:\"Tuvalu\"},{dataValue:\"Uganda\"},{dataValue:\"Ukraine\"},{dataValue:\"United Arab Emirates\"},{dataValue:\"United Kingdom\"},{dataValue:\"United States\"},{dataValue:\"United States Minor Outlying Islands\"},{dataValue:\"Uruguay\"},{dataValue:\"Uzbekistan\"},{dataValue:\"Vanuatu\"},{dataValue:\"Venezuela\"},{dataValue:\"Viet Nam\"},{dataValue:\"Virgin Islands, British\"},{dataValue:\"Virgin Islands, U.S.\"},{dataValue:\"Wallis and Futuna\"},{dataValue:\"Western Sahara\"},{dataValue:\"Yemen\"},{dataValue:\"Zambia\"},{dataValue:\"Zimbabwe\"}]","type":"StringData"}, {}]
	},
	_end: 0
});

OnePageApp_TenPages.extend({

	_end: 0
});