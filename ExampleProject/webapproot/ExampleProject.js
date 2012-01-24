dojo.declare("ExampleProject", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"i18n": false, 
	"main": "Main", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"saveCounter": 5, 
	"studioVersion": "6.4.4GA", 
	"theme": "wm_coolblue", 
	"toastPosition": "br",
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		addressLiveView1: ["wm.LiveView", {"dataType":"com.sakiladb.data.Address","related":["city","city.country"],"service":"sakilaDB","view":[{"caption":"AddressId","sortable":true,"dataIndex":"addressId","type":"java.lang.Short","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3000,"subType":null,"widthUnits":"px"},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3001,"subType":null,"widthUnits":"px"},{"caption":"Address2","sortable":true,"dataIndex":"address2","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3002,"subType":null,"widthUnits":"px"},{"caption":"District","sortable":true,"dataIndex":"district","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3003,"subType":null,"widthUnits":"px"},{"caption":"PostalCode","sortable":true,"dataIndex":"postalCode","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3004,"subType":null,"widthUnits":"px"},{"caption":"Phone","sortable":true,"dataIndex":"phone","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3005,"subType":null,"widthUnits":"px"},{"caption":"LastUpdate","sortable":true,"dataIndex":"lastUpdate","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3006,"subType":null,"widthUnits":"px"},{"caption":"CityId","sortable":true,"dataIndex":"city.cityId","type":"java.lang.Short","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4000,"subType":null,"widthUnits":"px"},{"caption":"City","sortable":true,"dataIndex":"city.city","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4001,"subType":null,"widthUnits":"px"},{"caption":"LastUpdate","sortable":true,"dataIndex":"city.lastUpdate","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4002,"subType":null,"widthUnits":"px"},{"caption":"CountryId","sortable":true,"dataIndex":"city.country.countryId","type":"java.lang.Short","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5000},{"caption":"Country","sortable":true,"dataIndex":"city.country.country","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5001},{"caption":"LastUpdate","sortable":true,"dataIndex":"city.country.lastUpdate","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5002}]}, {}]
	},
	_end: 0
});

ExampleProject.extend({

	_end: 0
});