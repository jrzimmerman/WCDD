/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.config");
dojo.declare("js.config", null, {

    // This file contains various configuration settings for "Service Request" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application Name                   - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    // 5.  Specify URLs for base maps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]

    // 7.  Tags for using map services:
    // 7a. Specify URLs for operational layers        - [ Tag(s) to look for: serviceRequestLayerURL, serviceRequestmobileLayerURL, serviceRequestCommentsLayerURL,RequestId,CommentId ]
    //
    // 7b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 7c. Customize info-Popup settings              - [ Tag(s) to look for: infoWindowData, ShowCommentsTab, AllowAttachments ]
    // 7d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 7e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    // 8. Customize address search settings           - [ Tag(s) to look for: LocatorURL, LocatorNameFields, , LocatorDefaultAddress,LocatorDefaultPark, LocatorMarkupSymbolPath, AddressMatchScore,LocatorRippleSize ]
    //LocatorFields
    // 9. Set URL for geometry service                - [ Tag(s) to look for: GeometryService ]
    // 10.Set for uploading images into iOS devices   - [ Tag(s) to look for: enablePhotoUploadiOS,photoUploadText ]
    // 11.Specify URLs for map sharing               - [ Tag(s) to look for: MapSharingOptions,TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]



    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Wellsboro, Charleston, Delmar and Duncan Multi-Municipal Comprehensive Plan",

    // Set application icon path
    ApplicationIcon: "images/logo.png",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "<br/><b>Public Comment Request:</b><br/><br/>To find a location on the map, either search for an address using the Magnifying Glass Icon on the upper right corner of the map or hold down the left click button on your mouse and drag the pointer to a particular location.  You can Zoom in and out using the + - tabs on the left side of the map. You may need to zoom out if a map image is not available.  You can switch the base map image using the Switch Basemap Icon located on the upper right corner of the map.<br/><br/>Left click your mouse to make a comment on a location.  A Comment screen will then appear.  Provide the information requested in the Comment screen.  You can attach one photograph or document by clicking the Select tab near the Attachment: section.  Click the Submit button to submit your comment.  Select Cancel to exit out of the Comment Screen.<br/><br/>Comments will be reviewed by members of the WCDD Planning Committee and our Planning Consultant, the EADS Group, as part of the comprehensive planning process.",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first basemap will be loaded

    BaseMapLayers: [{
        Key: "parcelMap",
        ThumbnailSource: "images/parcelmap.png",
        Name: "Streets",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
        
    
    }, {
        Key: "hybridMap",
        ThumbnailSource: "images/imageryhybrid.png",
        Name: "Imagery",
        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
    }],

    // Initial map extent. Use comma (,) to separate values and don t delete the last comma
    DefaultExtent: "-8637842.8183925,5102821.352774654,-8573635.71463304,5139090.722695921",


    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Configure operational layers:

    OperationalLayers: {
        //URL used for doing query task on the ServiceRequest layer
        ServiceRequestLayerURL: "http://207.255.7.12/eadsgroupgis/rest/services/WCDD/IssueServiceRequest/FeatureServer/0",
        //Set the primary key attribute for servicerequest
        RequestId: "${REQUESTID}",

        ServiceRequestMobileLayerURL: "http://207.255.7.12/eadsgroupgis/rest/services/WCDD/IssueServiceRequest/FeatureServer/0",

        //URL used for doing query task on the comments layer
        ServiceRequestCommentsLayerURL: "http://207.255.7.12/eadsgroupgis/rest/services/WCDD/ServiceRequest/FeatureServer/1",
        //Set the primary key attribute for the comments
        CommentId: "${REQUESTID}"

    },

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: "Request ID: ${REQUESTID}",

    // Choose content/fields for the info window
    InfoWindowContent: "${REQUESTTYPE}",

    //Define Service request layer name
    RequestLayerName: "REQUESTTYPE",

    //Define Service Location request layer name
    RequestLocationLayerName: "REQUESTLOCATION",

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoWindowData: [{
        DisplayText: "Type:",
        AttributeValue: "${REQUESTTYPE}",
        DataType: "string"
    }, {
        DisplayText: "Location:",
        AttributeValue: "${REQUESTLOCATION}",
        DataType: "string"
    }, {
        DisplayText: "Comment:",
        AttributeValue: "${COMMENTS}",
        DataType: "string"
    }, {
        DisplayText: "Date Submitted:",
        AttributeValue: "${REQUESTDATE}",
        DataType: "date"
    }, {
        DisplayText: "Status:",
        AttributeValue: "${STATUS}",
        DataType: "string"
    }],

    // Set this to true to show "Comments" tab in the info-Popup
    ShowCommentsTab: false,

    // Set this to true to show the Attach portion of the info-popup
    AllowAttachments: true,

    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popup)
    //minimum height should be 270 for the info-popup in pixels
    InfoPopupHeight: 400,

    //minimum width should be 330 for the info-popup in pixels
    InfoPopupWidth: 330,

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",

    //Set the locator ripple size
    LocatorRippleSize: 30,

    //set ripple color for selected feature
    RippleColor: [60, 72, 36],

    //Set the attribute for displaying status of serviceRequest
    Status: "${STATUS}",



    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set locator settings such as locator symbol, size, zoom level, display fields, match score

    LocatorSettings: {
        DefaultLocatorSymbol: "images/redpushpin.png",
        MarkupSymbolSize: {
            width: 35,
            height: 35
        },
        Locators: [{
            DisplayText: "Address",
            DefaultValue: "450 Aberdeen Drive Somerset, PA 15501",
            LocatorParamaters: ["SingleLine"],
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            CandidateFields: "Loc_name, Score, Match_addr",
            DisplayField: "${Match_addr}",
            ZoomLevel: 7,
            AddressMatchScore: 80,
            LocatorDefaultRequest: "77257",
            LocatorFieldName: 'Loc_name',
            LocatorFieldValues: ["USA.StreetName" , "USA.PointAddress", "USA.StreetAddress"]
        }, {
            DisplayText: "Request ID",
            DefaultValue: "Wellsboro",
            QueryString: "REQUESTID LIKE '${0}%'",
            DisplayField: "${REQUESTID}"
        }]
    },

    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        RequestIdFieldName: "REQUESTID",
        CommentsFieldName: "COMMENTS",
        DateFieldName: "SUBMITDT",
        RankFieldName: "RANK"
    },

    //Define service request input fields for submitting a new request
    ServiceRequestFields: {
        RequestIdFieldName: "REQUESTID",
        RequestTypeFieldName: "REQUESTTYPE",
        RequestLocationFieldName: "REQUESTLOCATION",
        CommentsFieldName: "COMMENTS",
        NameFieldName: "NAME",
        PhoneFieldName: "PHONE",
        EmailFieldName: "EMAIL",
        AddressFieldName: "ADDRESS",
        StatusFieldName: "STATUS",
        RequestDateFieldName: "REQUESTDATE"
    },

    // Set info-pop fields for adding and displaying comment
    CommentsInfoPopupFieldsCollection: {
        Rank: "${RANK}",
        SubmitDate: "${SUBMITDT}",
        Comments: "${COMMENTS}"
    },
    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set geometry service URL
    GeometryService: "http://75.151.252.249/eadsgroupgis/rest/services/Utilities/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------

    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions: {
        TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
        TinyURLResponseAttribute: "data.url",
        FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=WCDD%20Service%20Request",
        TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=WCDD%20Service%20Request ${0}",
        ShareByMailLink: "mailto:%20?subject=Service%20Request&body=${0}"
    },

    // set this flag to true to enable uploading images into iOS devices (uses 3rd party application to upload pictures)
    EnablePhotoUploadiOS: true,
    //Message displayed for 3rd party software. This is a HTML text
    PhotoUploadText: "Add attachment."

});
