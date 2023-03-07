importPackage(Packages.jp.ngt.rtm);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.util);
importPackage(Packages.jp.ngt.ngtlib.io);
importPackage(Packages.jp.kaiz.atsassistmod.api);

//自動実行
function onUpdate(su) {

	var entity = su.getEntity();
	var signal = su.getEntity().getSignal();
	var isControlCar = su.getEntity().isControlCar();
	var dataMap = entity.getResourceState().getDataMap();
	var jointRailStatus = dataMap.getInt("jointRailStatus");
	var isPointStatus = dataMap.getInt("isPointStatus");
	var speed = su.getSpeed();
	var notch = su.getNotch();
	var soundAddress = 'sound_reikyu';

	//ControlCarの時
	if (isControlCar) {
		var isOver5 = dataMap.getBoolean('isOver5');
		var isOver10 = dataMap.getBoolean('isOver10');
		var isPushHorn = dataMap.getBoolean("isPushHorn");
		var isPushEmr = dataMap.getBoolean("isPushEmr");

		var isCfm = dataMap.getBoolean("isCfm");
		var isStopCfm = dataMap.getBoolean("isStopCfm");

		//ATS Over Sounds
		if (isOver5) {
			su.playSound(soundAddress, 'RKATS_Pattern_Arr', 1, 1);
		} else {
			su.stopSound(soundAddress, 'RKATS_Pattern_Arr');
		}

		if (isOver10) {
			su.playSound(soundAddress, 'RKATS_Pattern_Emr', 1, 1);
		} else {
			su.stopSound(soundAddress, 'RKATS_Pattern_Emr');
		}


		//ATS-Signal Sounds
		if (signal == 10) {
			su.playSound(soundAddress, 'Pattern_Action10', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action10');
		}

		if (signal == 11) {
			su.playSound(soundAddress, 'Pattern_Action11', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action11');
		}

		if (signal == 12) {
			su.playSound(soundAddress, 'Pattern_Action12', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action12');
		}

		if (signal == 13) {
			su.playSound(soundAddress, 'Pattern_Action13', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action13');
		}

		if (signal == 14) {
			su.playSound(soundAddress, 'Pattern_Action14', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action14');
		}

		if (signal == 15) {
			su.playSound(soundAddress, 'Pattern_Action15', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action15');
		}

		if (signal == 16) {
			su.playSound(soundAddress, 'Pattern_Action16', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action16');
		}

		if (signal == 17) {
			su.playSound(soundAddress, 'Pattern_Action17', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action17');
		}

		if (signal == 18) {
			su.playSound(soundAddress, 'Pattern_Action18', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action18');
		}

		if (signal == 19) {
			su.playSound(soundAddress, 'Pattern_Action19', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action19');
		}

		if (signal == 21) {
			su.playSound(soundAddress, 'Pattern_Action21', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action21');
		}

		if (signal == 22) {
			su.playSound(soundAddress, 'Pattern_Action22', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'Pattern_Action22');
		}


		//S-Alert Sounds
		if (signal == 20 && !isCfm) {
			su.playSound(soundAddress, 'RKATS_S_Alert_Emr', 1, 1);
		} else {
			su.stopSound(soundAddress, 'RKATS_S_Alert_Emr');
		}

		if (signal == 20 && !isStopCfm) {
			su.playSound(soundAddress, 'RKATS_S_Alert_Cfm', 1, 1);
		} else {
			su.stopSound(soundAddress, 'RKATS_S_Alert_Cfm');
		}

		//ORP Sounds
		if (signal == 21) {
			su.playSound(soundAddress, 'ATS_Stopping', 1, 1, false);
		} else {
			su.stopSound(soundAddress, 'ATS_Stopping');
		}

		if (signal == 21 && speed > 1 && speed < 25) {
			su.playSound(soundAddress, 'ATS_ORP', 1, 1);
		} else {
			su.stopSound(soundAddress, 'ATS_ORP');
		}

		//Horn
		if (isPushHorn) {
			su.playSound(soundAddress, 'RK1800Horn_A', 1, 1, false);
			su.stopSound(soundAddress, 'RK1800Horn_B');
		} else {
			su.stopSound(soundAddress, 'RK1800Horn_A');
			su.playSound(soundAddress, 'RK1800Horn_B', 1, 1, false);
		}

		if (isPushEmr) {
			su.playSound(soundAddress, 'RKEmrHorn_A', 1, 1, false);
			su.stopSound(soundAddress, 'RKEmrHorn_B');
		} else {
			su.stopSound(soundAddress, 'RKEmrHorn_A');
			su.playSound(soundAddress, 'RKEmrHorn_B', 1, 1, false);
		}
	}


	//CP音
	var CpName = "RTMLib.CP.CPloop16";
	var CpStartName = "RTMLib.CP.CPstart16";
	var CpEndName = "RTMLib.CP.CPend16";

	PlayCompressor(su, CpName, CpStartName, CpEndName);
	//loop
	su.playSound('sound_mhnlib', 'RTMLib.loop.loop_16', 1.0, 1.0);

	//EB_Air
	if (notch === -8) {
		su.playSound(soundAddress, 'RK1800EB', 1.0, 1.0, false);
	} else {
		su.stopSound(soundAddress, 'RK1800EB');
	}

	//Shock_On
	if (speed > 0 && speed < 90 && notch > 0) {
		su.playSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Uniton', 1.0, 1.0, false);
	} else {
		su.stopSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Uniton');
	}

	//Shock_Off
	if (speed > 0 && speed < 90 && notch === 0) {
		su.playSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Unitoff', 1.0, 1.0, false);
	} else {
		su.stopSound('sound_mhnlib', 'RTMLib.Sounds.201_Shock_Unitoff');
	}

	if (speed > 0.01) {

		//run5
		if (speed > 0 && speed < 90) {
			var pit5 = fadeCon(0, 0.5, 90, 1.2, su);
			var vol5 = 1.0;
			if (speed < 12) {
				vol5 = fadeCon(0, 0.0, 12, 1.0, su);
			} else if (speed > 70) {
				vol5 = fadeCon(70, 1.0, 90, 0.0, su);
			} else {
				vol5 = 1;
			}

			su.playSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2', vol5, pit5);
		} else {
			su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
		}

		//run6
		if (speed > 70 && speed < 160) {
			var pit6 = fadeCon(70, 0.7, 160, 1.9, su);
			var vol6 = 1.0;
			if (speed < 70) vol6 = fadeCon(70, 0.0, 90, 1.0, su);
			su.playSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3', vol6, pit6);
		} else {
			su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');
		}
	}

	//EB投入時stop
	if (notch == -8) {
		su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');
	}

	if (speed > 0.01) {
		if (isPointStatus == 1) {
			if (speed > 0.1 && speed < 40) {
				var pitPoint30 = fadeCon(0, 0.8, 40, 1.3, su),
					volPoint30 = 1.0;
				if (speed < 10) volPoint30 = fadeCon(0, 0.5, 10, 1.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Point30km', pitPoint30, volPoint30, false);
			}

			if (speed > 40 && speed < 90) {
				var pitPoint60 = fadeCon(40, 0.7, 90, 1.3, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Point60km', pitPoint60, 1.0, false);
			}

			if (speed > 90 && speed < 165) {
				var pitPoint120 = fadeCon(90, 0.8, 165, 1.5, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Point120km', pitPoint120, 1.0, false);
			}
		}

		if (isPointStatus == 0) {
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point30km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point60km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point120km');
		}

		if (jointRailStatus == 1) {
			//Run30km_Longrail
			if (speed > 0.1 && speed < 60) {
				var pitLong30 = fadeCon(0, 0.8, 60, 1.2, su),
					volLong30 = 1.0;
				if (speed < 10) volLong30 = fadeCon(0, 0.0, 10, 1.0, su);
				if (speed > 40) volLong30 = fadeCon(40, 1.0, 60, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Long30km', volLong30, pitLong30);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long30km');
			}

			//Run60km_Longrail
			if (speed > 40 && speed < 90 && !su.inTunnel()) {
				var pitLong60 = fadeCon(40, 0.8, 90, 1.1, su),
					volLong60 = 1.0;
				if (speed < 50) volLong60 = fadeCon(40, 0.0, 50, 1.0, su);
				if (speed > 70) volLong60 = fadeCon(70, 1.0, 90, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Long60km', volLong60, pitLong60);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long60km');
			}

			//Run120km_Longrail
			if (speed > 70 && speed < 165 && !su.inTunnel()) {
				var pitLong120 = fadeCon(70, 0.8, 165, 1.3, su),
					volLong120 = 1.0;
				if (speed < 80) volLong120 = fadeCon(70, 0.0, 80, 1.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Long120km', volLong120, pitLong120);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long120km');
			}

			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge30km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge60km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge120km');

		} else if (jointRailStatus == 2) {
			//Run30km_Bridge
			if (speed > 0.1 && speed < 60) {
				var pitBridge30km = fadeCon(0, 0.5, 30, 1.0, su),
					volBridge30km = 1.0;
				if (speed < 10) volBridge30km = fadeCon(0, 0.0, 10, 1.0, su);
				if (speed > 40) volBridge30km = fadeCon(40, 1.0, 60, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge30km', volBridge30km, pitBridge30km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge30km');
			}

			//Run60km_Bridge
			if (speed > 40 && speed < 90 && !su.inTunnel()) {
				var pitBridge60km = fadeCon(40, 0.7, 90, 1.3, su);
				var volBridge60km = 1.0;
				if (speed < 50) volBridge60km = fadeCon(40, 0.0, 50, 1.0, su);
				if (speed > 70) volBridge60km = fadeCon(70, 1.0, 90, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge60km', volBridge60km, pitBridge60km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge60km');
			}

			//Run120km_Bridge
			if (speed > 70 && speed < 165 && !su.inTunnel()) {
				var pitBridge120km = fadeCon(70, 0.7, 165, 1.6, su);
				var volBridge120km = 1.0;
				if (speed < 80) volBridge120km = fadeCon(70, 0.0, 80, 1.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge120km', volBridge120km, pitBridge120km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge120km');
			}

			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long30km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long60km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long120km');

		} else {

			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long30km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long60km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long120km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge30km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge60km');
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge120km');

			//Run30km
			if (speed > 0.1 && speed < 60) {
				var pit30km = fadeCon(0, 0.5, 30, 1.0, su),
					vol30km = 1.0;
				if (speed < 10) vol30km = fadeCon(0, 0.0, 10, 1.0, su);
				if (speed > 40) vol30km = fadeCon(40, 1.0, 60, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2', vol30km, pit30km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');
			}

			//Run60km
			if (speed > 40 && speed < 90 && !su.inTunnel()) {
				var pit60km = fadeCon(60, 1.0, 90, 1.5, su);
				var vol60km = 1.0;
				if (speed < 50) vol60km = fadeCon(40, 0.0, 50, 1.0, su);
				if (speed > 70) vol60km = fadeCon(70, 1.0, 90, 0.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2', vol60km, pit60km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
			}

			//Run120km
			if (speed > 70 && speed < 165 && !su.inTunnel()) {
				var pit120km = fadeCon(60, 0.5, 165, 1.6, su);
				var vol120km = 1.0;
				if (speed < 80) vol120km = fadeCon(70, 0.0, 80, 1.0, su);
				su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2', vol120km, pit120km);
			} else {
				su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');
			}

		}
		//Run60kmT
		if (speed > 40 && speed < 90 && su.inTunnel()) {
			var pit60kmT = fadeCon(60, 1.0, 90, 1.5, su);
			var vol60kmT = 1.0;
			if (speed < 50) vol60kmT = fadeCon(40, 0.0, 50, 1.0, su);
			if (speed > 70) vol60kmT = fadeCon(70, 1.0, 90, 0.0, su);
			su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3', vol60kmT, pit60kmT);
		} else {
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3');
		}

		//Run120kmT
		if (speed > 70 && speed < 165 && su.inTunnel()) {
			var pit120kmT = fadeCon(60, 0.5, 165, 1.6, su);
			var vol120kmT = 1.0;
			if (speed < 80) vol120kmT = fadeCon(70, 0.0, 80, 1.0, su);
			su.playSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT', vol120kmT, pit120kmT);
		} else {
			su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT');
		}

	} else {
		//0kmの時、全ての音を消す構文
		su.stopSound(soundAddress, '800BcOn');
		su.stopSound(soundAddress, '800BcOff');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_2');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.201_Chopper.201_3');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point30km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point60km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Point120km');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run30km2');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60km2');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120km2');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run60kmT3');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Run120kmT');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long30km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long60km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Long120km');

		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge30km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge60km');
		su.stopSound('sound_mhnlib', 'RTMLib.Run.Common.Bridge120km');
	}
}

function PlayCompressor(su, Cp, CpStart, CpEnd) {
	if (su.isComplessorActive()) {
		su.playSound('sound_mhnlib', CpStart, 0.6, 1, false);
		su.playSound('sound_mhnlib', Cp, 0.6, 1);
		su.stopSound('sound_mhnlib', CpEnd);
	} else {
		su.stopSound('sound_mhnlib', CpStart);
		su.stopSound('sound_mhnlib', Cp);
		su.playSound('sound_mhnlib', CpEnd, 0.6, 1, false);
	}
}

function fadeCon(speed1, fade1, speed2, fade2, su) {
	var speed = su.getSpeed();
	return (((fade2 - fade1) / (speed2 - speed1)) * (speed - speed1)) + fade1;
}