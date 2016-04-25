// Counter-Strike: Global Offensive

$(function() {

	// Creates common subtitle where only difference is player count.
	function CreateSubtitle(players){
		var subtitle = "The client will also join a number of general (not " + players + " specific) CS:GO war finding channels, also good for finding games."
		return subtitle;
	}

	// 5v5.
    $("#aCsGo5v5").click(function () {
    	SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw.csgo%2Ccsgo.europe%2Ccsgo.cadred%2CESEA%2Cskilled.go%2Ccs:go%2Cskilled.csgo%2C5on5.csgo")
		WriteTitles (
			"Counter-Strike: Global Offensive - 5v5 Channels",
			CreateSubtitle("5v5")
		);
		WriteHelp (			
			"5 v 5 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 5v5 | Server Off | Medium | de_dust2"
		);
	});	

    // 4v4.
	$("#aCsGo4v4").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw.csgo%2Ccsgo.europe%2Ccsgo.cadred%2CESEA%2Cskilled.go%2Ccs:go%2Cskilled.csgo%2C4on4.csgo")
		WriteTitles (
			"Counter-Strike: Global Offensive - 4v4 Channels",
			CreateSubtitle("4v4")
		);
		WriteHelp (
			
			"4 v 4 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 4v4 | Server Off | Medium | de_dust2"
		);
	});	

	// 3v3.
	$("#aCsGo3v3").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw.csgo%2Ccsgo.europe%2Ccsgo.cadred%2CESEA%2Ccs:go%2Cskilled.csgo%2C3on3.csgo")
		WriteTitles (
			"Counter-Strike: Global Offensive - 3v3 Channels",
			CreateSubtitle("3v3")
		);
		WriteHelp (
			"3 v 3 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 3v3 | Server Off | Medium | de_dust2"
		);
	});	

	// 2v2.
	$("#aCsGo2v2").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw.csgo%2Ccsgo.europe%2Ccsgo.cadred%2CESEA%2Ccs:go%2Cskilled.csgo%2C2on2.csgo")
		WriteTitles (
			"Counter-Strike: Global Offensive - 2v2 Channels",
			CreateSubtitle("2v2")
		);
		WriteHelp (
			"2 v 2 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 2v2 | Server Off | Medium | de_dust2"
		);
	});	

	// 1v1.
	$("#aCsGo1v1").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=pcw.csgo%2Ccsgo.europe%2Ccsgo.cadred%2CESEA%2Ccs:go%2Cskilled.csgo%2C1on1.csgo")
		WriteTitles (
			"Counter-Strike: Global Offensive - 1v1 Channels",
			CreateSubtitle("1v1")
		);
		WriteHelp (
			"1 v 1 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 1v1 | Server Off | Medium | de_dust2"
		);
	});	

	// Ringer.
	$("#aCsGoRinger").click(function () {
		SwitchView("viewer");
		WriteViewer("http://webchat.quakenet.org/?nick=PCWFinderCom...&channels=ringer")
		WriteTitles (
			"Counter-Strike: Ringer (CS:GO, CS:Source, CS:1.6)",
			"The client will join a ringer channel that is used for all Counter-Strike games."
		);
		WriteHelp (
			"1 v 1 | Server [ON / OFF] | Skill Level [Low/Medium/High] | Map",
			"e.g. 1v1 | Server Off | Medium | de_dust2"
		);
	});	

});

