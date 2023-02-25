//Render_KRW800Mc.js  by unlock [����/�R�s�y/�]�ڂ��ւ���]

//Please do not duplicate or copy.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

importPackage(Packages.jp.ngt.rtm.util);
importPackage(Packages.jp.ngt.ngtlib.util);
importPackage(Packages.jp.ngt.ngtlib.renderer);
importPackage(Packages.jp.ngt.ngtlib.io);
importPackage(Packages.jp.ngt.ngtlib.math);
importPackage(Packages.org.lwjgl.input);
importPackage(Packages.org.lwjgl.util.vector);

importPackage(Packages.jp.kaiz.atsassistmod.api);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//###################################################################

//doorOpn(Cls)Sec�F�h�A���J��(����)�̂ɕK�v�ȕb��
//doorOpn(Cls)Spd�F�h�A���J��(����)�Ƃ��̎菇
//[�b��,����������(Ұ�ي(������̐��l/100))]

var doorOpnSec = 2.3;
var doorOpnSpd = [
	[0.04, 0.0],
	[0.18, 0.05],
	[1.68, 0.52],
	[0.12, 0.02],
	[0.22, 0.06],
	[0.06, 0.0]
];

var doorClsSec = 3.1;
var doorClsSpd = [
	[0.045, 0.0],
	[0.15, -0.05],
	[2.165, -0.55],
	[0.31, -0.01],
	[0.34, -0.04],
	[0.09, 0.0]
];

//�쓮�����F[ 0.65(65) ]
//�g�p�����F[  ]

//###################################################################

var entityID = 0;
var prevTickID = 0;

var doorMovementID = 1;
var doorStateID = 2;
var doorMovingTickID = 3;
var doorTargetMovementID = 4;
var countupID = 5;

var doorMovement;

var doorState;

var doorStateInTrain;

var shouldUpdate;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function init(par1, par2) {

	//�O�� �O��
	body1 = renderer.registerParts(new Parts("�O��", "�O��2", "�O��3", "4Q", "���e", "�O�ʃX�e�b�v", "�����g", "�肷��", "�O�Ɠ�", "�����", "�O�ʑ���",
		"�O�ʑ�H�S��"));

	//�O��
	body2 = renderer.registerParts(new Parts("����", "�ԑ���", "�斱�����O", "�J��", "�ˑܑ����V���h�E����", "����H�S��", "�ԊO", "���g�O",
		"���ʑ��O", "�h�A��", "����", "��[", "�A���e�i", "�p���^���", "�ȖʊO", "�ђʔ��O", "�ђʖy"));

	//�O�� ���� (�^�]��)
	cab_body = renderer.registerParts(new Parts("�斱�����d�؂�_�斱����", "�O�ʓ���", "H�S���斱������", "�斱������", "�斱��������", "�斱������", "�斱�����V��",
		"�斱�����@���_�~���[", "�斱�����@���",
		"�^�]��➑�", "���[�^�["));

	//���K���X
	bodyGlass = renderer.registerParts(new Parts("�ˑܑ�", "���ʑ�", "�ђʑ�"));
	cabGlass = renderer.registerParts(new Parts("�O�ʑ�"));

	//�ԑ���
	doorLampL_ON = renderer.registerParts(new Parts("L_On"));
	doorLampL_OFF = renderer.registerParts(new Parts("L_Off"));
	doorLampR_ON = renderer.registerParts(new Parts("R_On"));
	doorLampR_OFF = renderer.registerParts(new Parts("R_Off"));

	//�p���^�O���t
	pantaUp = renderer.registerParts(new Parts("�p���^�㏸"));
	pantaDawn = renderer.registerParts(new Parts("�p���^���~"));

	//�^�]��˕ߓ�
	cabDoorLampON = renderer.registerParts(new Parts("�˕_"));
	cabDoorLampOFF = renderer.registerParts(new Parts("�˕�"));

	//�}�X�R����
	mcH = renderer.registerParts(new Parts("�}�X�R��"));
	brH = renderer.registerParts(new Parts("�u���[�L�n���h��"));
	revH = renderer.registerParts(new Parts("���o�[�T�["));

	//���[�^�[��
	needleSpd = renderer.registerParts(new Parts("���x�v�j"));
	needlekV = renderer.registerParts(new Parts("�d���v�j"));

	//�x�J�y�_��
	hornPedalON = renderer.registerParts(new Parts("�x�J�y�_��_On"));
	hornPedalOFF = renderer.registerParts(new Parts("�x�J�y�_��_Off"));

	//ATS�\���@
	atsPanel = renderer.registerParts(new Parts("ATS�\����", "��", "��"));
	ats_12x = renderer.registerParts(new Parts("12"));
	ats_11x = renderer.registerParts(new Parts("11"));
	ats_10x = renderer.registerParts(new Parts("10"));
	ats_9x = renderer.registerParts(new Parts("9"));
	ats_8x = renderer.registerParts(new Parts("8"));
	ats_7x = renderer.registerParts(new Parts("7"));
	ats_6x = renderer.registerParts(new Parts("6"));
	ats_5x = renderer.registerParts(new Parts("5"));
	ats_4x = renderer.registerParts(new Parts("4"));
	ats_3x = renderer.registerParts(new Parts("3"));
	ats_2x = renderer.registerParts(new Parts("2"));
	ats_1x = renderer.registerParts(new Parts("1"));
	ats_x0 = renderer.registerParts(new Parts("_0"));
	ats_x5 = renderer.registerParts(new Parts("_5"));
	atsON = renderer.registerParts(new Parts("����_�_"));
	atsOFF = renderer.registerParts(new Parts("����_��"));

	//����
	interior = renderer.registerParts(new Parts("��", "���g��", "���ʑ���", "����", "�g��", "����", "�|�[��",
		"�_�N�g", "�d�؂�q����", "�Ȗʓ�", "�։�", "�ђʔ���", "�����", "�V��", "��", "�斱�����d�؂�_�q��", "�u����", "�݂�v", "�X�s�[�J�["));

	//����
	body3 = renderer.registerParts(new Parts("����", "��", "�e", "�z��", "��q", "�A����", "�W�����p��", "ATS�ԏ�q"));

	//�O�Ɠ�
	headlighton = renderer.registerParts(new Parts("�O�Ɠ��_"));
	headlightoff = renderer.registerParts(new Parts("�O�Ɠ���"));

	//����
	taillighton = renderer.registerParts(new Parts("�����_"));
	taillightoff = renderer.registerParts(new Parts("������"));

	//�h�A�O
	doorLFo = renderer.registerParts(new Parts("door_LF"));
	doorLBo = renderer.registerParts(new Parts("door_LB"));
	doorRFo = renderer.registerParts(new Parts("door_RF"));
	doorRBo = renderer.registerParts(new Parts("door_RB"));

	//�h�A��
	doorLFi = renderer.registerParts(new Parts("door_LFN"));
	doorLBi = renderer.registerParts(new Parts("door_LBN"));
	doorRFi = renderer.registerParts(new Parts("door_RFN"));
	doorRBi = renderer.registerParts(new Parts("door_RBN"));

	//���
	bogieF = renderer.registerParts(new Parts("bogieF")); //�O���
	bogieB = renderer.registerParts(new Parts("bogieB")); //����
	wheelF1 = renderer.registerParts(new Parts("wheelF1")); //�ԗ�
	wheelF2 = renderer.registerParts(new Parts("wheelF2"));
	wheelB1 = renderer.registerParts(new Parts("wheelB1"));
	wheelB2 = renderer.registerParts(new Parts("wheelB2"));

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderPreview(pass) {

	if (pass == 0) {
		body1.render(renderer);
		body2.render(renderer);
		cab_body.render(renderer);
		doorLampL_OFF.render(renderer);
		doorLampR_OFF.render(renderer);
		pantaUp.render(renderer);
		atsPanel.render(renderer);
		interior.render(renderer);
		body3.render(renderer);
		headlightoff.render(renderer);
		taillightoff.render(renderer);
		doorLFo.render(renderer);
		doorLBo.render(renderer);
		doorRFo.render(renderer);
		doorRBo.render(renderer);
		doorLFi.render(renderer);
		doorLBi.render(renderer);
		doorRFi.render(renderer);
		doorRBi.render(renderer);
		bogieF.render(renderer);
		bogieB.render(renderer);
		wheelF1.render(renderer);
		wheelF2.render(renderer);
		wheelB1.render(renderer);
		wheelB2.render(renderer);
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateTick(entity) {

	if(entity == null) return false;

	var dataMap = entity.getResourceState().getDataMap();
	var tick = renderer.getTick(entity);

	var prevTick = dataMap.getInt("prevTick");

	dataMap.setInt("prevTick", tick, false);

	if (tick != prevTick) return true;

	return false;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function xorshift(seed) {

	var minDigits = 5;

	if (seed === 0) seed = 76314;

	seed = seed ^ seed << 13;
	seed = seed ^ seed >> 17;
	seed = seed ^ seed << 15;

	if (String(seed).length < minDigits) seed = xorshift(seed + 1);

	return seed;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderRotatePartFromPos(part, rotate, x, y, z, vecX, vecY, vecZ) {
	GL11.glPushMatrix();
	GL11.glTranslatef(x, y, z);
	GL11.glRotatef(rotate, vecX, vecY, vecZ);
	GL11.glTranslatef(-x, -y, -z);
	part.render(renderer);
	GL11.glPopMatrix();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createVector3f(x1, y1, z1, x2, y2, z2) {
	var x = x2 - x1;
	var y = y2 - y1;
	var z = z2 - z1;
	return new Vector3f(x, y, z);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getArrayFromData(ID, amount) {

	var ret = renderer.getData(ID);
	if (ret == 0) {
		ret = [];
		for (var i = 0; i < amount; i++) {
			ret[ret.length] = 0;
		}
	}
	return ret;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var HashMap = Java.type("java.util.HashMap");
var isBreaking = new HashMap();

function renderATS(entity) {

	atsPanel.render(renderer);//➑�

	var dataMap = entity.getResourceState().getDataMap();
	var Signal = entity.getSignal();
	var isControlCar = entity.isControlCar();
	var ATSspeed = entity.getSpeed() * 72.0;

	if (!isControlCar) return;

	function renderATSHelper(int) {

		if (ATSspeed > (int + 20)) {

			//ATS_Emr.render(renderer);

			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', true, 1);

			ControlTrain.setNotch(-8);
			isBreaking.put(entity, true);

		} else if (ATSspeed > (int + 15)) {

			//ATS_Emr.render(renderer);

			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', true, 1);

			ControlTrain.setNotch(-7);
			isBreaking.put(entity, true);

		} else if (ATSspeed > (int + 10)) {

			//ATS_Emr.render(renderer);

			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', true, 1);

			ControlTrain.setNotch(-4);
			isBreaking.put(entity, true);

		} else if (ATSspeed > (int + 1)) {

			//ATS_Arr.render(renderer);

			dataMap.setBoolean('isOver5', true, 1);
			dataMap.setBoolean('isOver10', false, 1);

			if (isBreaking.get(entity)) {
				ControlTrain.setNotch(0);
				isBreaking.put(entity, false);
			}

		} else {
			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', false, 1);

			if (isBreaking.get(entity)) {
				ControlTrain.setNotch(0);
				isBreaking.put(entity, false);
			}
		}
	}

	if(Signal != 20){
		if (dataMap.getBoolean('isOver10')) {
			atsON.render(renderer);
		}

		else if (dataMap.getBoolean('isOver5')) {
			var tick = renderer.getTick(entity);
			var flash = tick % 20;
		
			if (flash <= 10) {
				atsON.render(renderer);
			}
		
			else {
				atsOFF.render(renderer);
			}
		}

		else atsOFF.render(renderer);
	}


	switch (Signal) {
		case 10:
			renderATSHelper(810);
			break;

		case 11:
			renderATSHelper(15);
			ats_1x.render(renderer);
			ats_x5.render(renderer);
			break;

		case 12:
			renderATSHelper(25);
			ats_2x.render(renderer);
			ats_x5.render(renderer);
			break;

		case 13:
			renderATSHelper(30);
			ats_3x.render(renderer);
			ats_x0.render(renderer);
			break;

		case 14:
			renderATSHelper(45);
			ats_4x.render(renderer);
			ats_x5.render(renderer);
			break;

		case 15:
			renderATSHelper(65);
			ats_6x.render(renderer);
			ats_x5.render(renderer);
			break;

		case 16:
			renderATSHelper(90);
			ats_9x.render(renderer);
			ats_x0.render(renderer);
			break;

		case 17:
			renderATSHelper(100);
			ats_10x.render(renderer);
			ats_x0.render(renderer);
			break;

		case 18:
			renderATSHelper(110);
			ats_11x.render(renderer);
			ats_x0.render(renderer);
			break;

		case 19:
			renderATSHelper(120);
			ats_12x.render(renderer);
			ats_x0.render(renderer);
			break;

		case 20:
			renderATSHelper(65);
			break;

		case 21:
			renderATSHelper(45);
			ats_4x.render(renderer);
			ats_x5.render(renderer);
			break;

		case 22:
			renderATSHelper(0);
			ats_x0.render(renderer);
			break;

		default:
			break;

	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function atsConfirmation(entity) {

	//riddenByEntity = entity.field_70153_n;
	var dataMap = entity.getResourceState().getDataMap();
	var notch = entity.getNotch();

	/*if (riddenByEntity === NGTUtil.getClientPlayer()) { //ATS�m�F �L�[���͂œ����Ȃ��̂Ŗ�����
		if (Keyboard.isKeyDown(Keyboard.KEY_U)) {
			dataMap.setBoolean('isATSRun', true, 1);
		}
	} else if (riddenByEntity == null) {
		dataMap.setBoolean('isATSRun', false, 1);
	} */
/*
	if (notch < 0) { //�m�b�`��0�����̎�
		dataMap.setBoolean('isATSRun', true, 1);
	} else {
		dataMap.setBoolean('isATSRun', false, 1);
	}
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function atsTimer(entity) {
	var dataMap = entity.getResourceState().getDataMap();
	var delaySeconds = 5; //�����ɕb��

	var timerCount = dataMap.getInt('timerCount');

	if (entity.getSpeed() == 0) {
		dataMap.setBoolean('atsWarnOn0', false, 1);
		dataMap.setBoolean('atsWarnOn1', false, 1);
		timerCount = -3;
	} else if (timerCount == -2) {
		dataMap.setBoolean('atsWarnOn0', false, 1);
		return;
	} else if (dataMap.getBoolean('atsWarnEmr') || timerCount == -3) {
		return;
	} else if (timerCount == -1) {
		dataMap.setBoolean('atsWarnOn0', true, 1);
		dataMap.setBoolean('atsWarnOn1', true, 1);
		timerCount = delaySeconds * 20;
	} else if (entity.getNotch() < 0) {
		timerCount = -2;
	} else if (timerCount == 0) {
		dataMap.setBoolean('atsWarnEmr', true, 1);
		timerCount = -3;
	} else {
		timerCount--;
	}

	dataMap.setInt("timerCount", timerCount, 1);
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sATSAlert(entity, pass) {
	
	if (!entity.isControlCar()) {
		return;
	}

	riddenByEntity = entity.field_70153_n;

	var signal = entity.getSignal();
	var speed = entity.getSpeed() * 72;
	var dataMap = entity.getResourceState().getDataMap();
	var isCfm = dataMap.getBoolean('isCfm');
	var atsWarnOn0 = dataMap.getBoolean('atsWarnOn0');
	var atsWarnOn1 = dataMap.getBoolean('atsWarnOn1');

	if (signal == 20) {
		dataMap.setBoolean('isCfm', false, 1);
		dataMap.setBoolean('isStopCfm', false, 1);
	}
	
    if (riddenByEntity === NGTUtil.getClientPlayer()) {
		if (Keyboard.isKeyDown(Keyboard.KEY_SPACE)) {
			dataMap.setBoolean('isCfm', true, 1);
		}
		if (speed == 0 && Keyboard.isKeyDown(Keyboard.KEY_SPACE)) {
			dataMap.setBoolean('isStopCfm', true, 1);
		}
    }

/*	if (atsWarnEmr) {
		if (speed > 0) {
			ControlTrain.setNotch(-8);
		} else {
			dataMap.setBoolean('atsWarnEmr', false, 1);
			ControlTrain.setNotch(0);
		}
	}

	if (signal == 20) {
		dataMap.setBoolean('atsRunning', true, 1);
		atsConfirmation(entity);
		atsTimer(entity);

		if (isATSRun) return;

	} else {
		dataMap.setInt("timerCount", -1, 1);
		dataMap.setBoolean('atsRunning', false, 1);
		dataMap.setBoolean('atsWarnOn0', false, 1);
		dataMap.setBoolean('atsWarnOn1', false, 1);
		dataMap.setBoolean('atsWarnEmr', false, 1);
	} */
	
	if (signal == 20 && atsWarnOn0) {
		var tick = renderer.getTick(entity);
		var flash = tick % 20;
	
		if (flash <= 10) {
			atsON.render(renderer);
		}
	
		else {
			atsOFF.render(renderer);
		}
	}
	
	else if (atsWarnOn0) {
		atsON.render(renderer);
	}

	else if (atsWarnOn1) {
		atsOFF.render(renderer);
	}

	else if (signal == 20) {
		atsOFF.render(renderer);
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function kitadenATS(entity) {

	if(entity == null) return;

	var isControlCar = entity.isControlCar();
	var Signal = entity.getSignal();
	var ATSspeed = entity.getSpeed() * 72;

	if(!isControlCar) return;

	//-----------------------------------------------------------

		function renderATSHelper(int) {

			if(ATSspeed > (int + 5)) {
				ControlTrain.setNotch(-8);
				isBreaking.put(entity, true);
				atsON.render(renderer);

			} else {
				if(isBreaking.get(entity)) {
					if(ATSspeed <= 0) {
						ControlTrain.setNotch(0);
						isBreaking.put(entity, false);
					}
				}
			}
		}

	//-----------------------------------------------------------

	switch (Signal) {

		case 1: renderATSHelper(15); break;

		case 2: renderATSHelper(45); break;

		case 3: renderATSHelper(45); break;

		case 4: renderATSHelper(65); break;

		case 5: renderATSHelper(100); break;

		default: break;

	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function sendHornKey(entity) {
	var dataMap = entity.getResourceState().getDataMap(); //dataMap�擾
	riddenByEntity = entity.field_70153_n;

    //�N������Ă���Ƃ�
    if (riddenByEntity === NGTUtil.getClientPlayer()) {
		dataMap.setBoolean('isPushHorn', Keyboard.isKeyDown(Keyboard.KEY_P), 1);
		dataMap.setBoolean('isPushEmr', Keyboard.isKeyDown(Keyboard.KEY_O), 1);
		
    } else if (riddenByEntity == null) {
        //�N������Ă��Ȃ��Ƃ�
        dataMap.setBoolean('isPushHorn', false, 1);
		dataMap.setBoolean('isPushEmr', false, 1);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//�h�A�̊J�𔻒肵�AdoorOpnSec�Ŏw�肳�ꂽ�b������doorOpnSpd�ɂĎw�肳�ꂽ�X�e�b�v�̏��Ƀh�A���ړ����܂�
//���܂����΁A�������𓮂��������Ƃ��ɗ��p�ł��܂�

function updateDoors(entity) {
	if (entityID == -1) return;
	var movingTick = getArrayFromData(entityID << doorMovingTickID, 2);
	var updated = false;
	for (var i = 0; i <= 1; i++) {
		var b0 = doorStateInTrain == 3 ? true : (i == 0 ? doorStateInTrain == 2 : doorStateInTrain == 1);
		var b1 = doorStateInTrain == 0 ? true : (i == 0 ? doorStateInTrain == 1 : doorStateInTrain == 2);
		if (b0 && doorState[i] == 0) {
			doorState[i] = 1;
		}
		if (b1 && doorState[i] == 2) {
			doorState[i] = 3;
		}

		//doorState[i]��1(�h�A���J���Ă�r��)�̏ꍇdoorOpnSpd���AdoorState[i]��3(�h�A��߂Ă�r��)�̏ꍇdoorClsSpd��spd�ɑ�����܂��B
		//�ǂ���ł��Ȃ��ꍇ �́Aif(spd != -1)�u���b�N���̃h�A���ړ����鏈�����X�L�b�v���邽��-1�������܂��B
		var spd = doorState[i] == 1 ? doorOpnSpd : (doorState[i] == 3 ? doorClsSpd : -1);
		if (spd != -1) {
			var altick = 0;
			for (var j = 0; j < spd.length; j++) {
				if (movingTick[i] == 0) {
					var doorTargetMovement = getArrayFromData(entityID << doorTargetMovementID, 2);
					var almove = 0;
					for (var l = 0; l < spd.length; l++) {
						almove += spd[l][1];
					}
					doorTargetMovement[i] = doorMovement[i] + almove;
					renderer.setData(entityID << doorTargetMovementID, doorTargetMovement);
				}

				var opnSpeed = spd[j][0];
				var movement = spd[j][1];
				//20 ticks per second
				//20tick���b
				if (movingTick[i] <= (altick + (opnSpeed * 20))) {
					if (!shouldUpdate) break;

					doorMovement[i] += movement / opnSpeed / 20.0;

					var sec = doorState[i] == 1 ? doorOpnSec : doorClsSec;
					if (movingTick[i] == (sec * 20) - 1) {
						doorState[i] = (doorState[i] + 1) % 4;
						movingTick[i] = 0;
						var doorTargetMovement = renderer.getData(entityID << doorTargetMovementID);
						doorMovement[i] = doorTargetMovement[i];
					} else {
						movingTick[i]++;
					}
					updated = true;
					break;
				} else {
					altick += (opnSpeed * 20);
				}
			}
		}
	}

	if (updated) {
		renderer.setData(entityID << doorMovementID, doorMovement);
		renderer.setData(entityID << doorMovingTickID, movingTick);
		renderer.setData(entityID << doorStateID, doorState);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderDoor_i(entity) {

	GL11.glPushMatrix();
	GL11.glTranslatef(0, 0, doorMovement[0]);
	doorLFi.render(renderer);
	GL11.glTranslatef(0, 0, -(doorMovement[0] * 2));
	doorLBi.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
	GL11.glTranslatef(0, 0, doorMovement[1]);
	doorRFi.render(renderer);
	GL11.glTranslatef(0, 0, -(doorMovement[1] * 2));
	doorRBi.render(renderer);
	GL11.glPopMatrix();

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderDoor_o(entity) {

	GL11.glPushMatrix();
	GL11.glTranslatef(0, 0, doorMovement[0]);
	doorLFo.render(renderer);
	GL11.glTranslatef(0, 0, -(doorMovement[0] * 2));
	doorLBo.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
	GL11.glTranslatef(0, 0, doorMovement[1]);
	doorRFo.render(renderer);
	GL11.glTranslatef(0, 0, -(doorMovement[1] * 2));
	doorRBo.render(renderer);
	GL11.glPopMatrix();

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderDoorLamp(entity) {

	if (entity == null) return;

	var random = String(Math.abs(xorshift(entity.func_145782_y()))).substr(0, 3) / 10000;

	if (entity.doorMoveL / 60 > random) {
		doorLampL_ON.render(renderer);
	} else if (entity.doorMoveL / 60 < random) {
		doorLampL_OFF.render(renderer);
	}

	if (entity.doorMoveR / 60 > random) {
		doorLampR_ON.render(renderer);
	} else if (entity.doorMoveR / 60 < random) {
		doorLampR_OFF.render(renderer);
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderController(entity, onUpdateTick) {

	var dataMap = entity.getResourceState().getDataMap(); //dataMap�擾
	var notch = entity.getNotch(); //�m�b�`�擾
	var direction = entity.getTrainStateData(10); //���o�[�T�擾
	var isControlCar = entity.isControlCar();

	roMc = dataMap.getDouble("roMcData"); //�f�[�^�ێ�
	roBr = dataMap.getDouble("roBrData"); //
	roRev = dataMap.getDouble("roRevData"); //

	var mcAngle = 16.0; //�}�X�R������p
	var brAngle = 15.0; //�u���[�L����p 0������20��
	var revAngle = 40.0; //���o�[�T����p

	if (onUpdateTick) {

		//-----------------------------------------------------------------------

		//�}�X�R��
		if (notch >= 0) { //�m�b�`��0�ȏ�Ȃ�
			var roMcAngle = notch * -mcAngle; //�}�X�R������p =�m�b�` x -20��
		} else {
			var roMcAngle = 0; //�u���[�L����p = 0
		}

		//������
		if (roMc > roMcAngle) {
			roMc = roMc - (mcAngle / 2);
		} else if (roMc < roMcAngle) {
			roMc = roMc + (mcAngle / 2);
		}

		//-----------------------------------------------------------------------

		//�u���[�L
		if (notch <= 0) { //�m�b�`��0�ȉ��Ȃ�
			var roBrAngle = notch * -brAngle; //�}�X�R������p =�m�b�` x -13��
		} else {
			var roBrAngle = 0; //�u���[�L����p = 0
		}

		//������
		if (roBr > roBrAngle) {
			roBr = roBr - (brAngle / 2);
		} else if (roBr < roBrAngle) {
			roBr = roBr + (brAngle / 2);
		}

		//-----------------------------------------------------------------------

		//���o�[�T
		if(direction == 0) {
			var roRevAngle = revAngle;
		} else if(direction == 1) {
			var roRevAngle = 0;
		} else if(direction == 2) {
			var roRevAngle = -revAngle;
		}

		//������
		if (roRev > roRevAngle) {
			roRev = roRev - (revAngle / 2);
		} else if (roRev < roRevAngle) {
			roRev = roRev + (revAngle / 2);
		}

		//-----------------------------------------------------------------------

	}

	dataMap.setDouble("roMcData", roMc, false); //�f�[�^�ێ�
	dataMap.setDouble("roBrData", roBr, false); //
	dataMap.setDouble("roRevData", roRev, false); //


		//�}�X�R��
	GL11.glPushMatrix();
	renderer.rotate(roMc, 'X', 0.0, 0.8499, 9.196); //��]��
	mcH.render(renderer);
	GL11.glPopMatrix();


	if(isControlCar) {
		//�u���[�L
		GL11.glPushMatrix();
		renderer.rotate(roBr, 'Y', 0.3651, 0.0, 9.2528); //��]��
		brH.render(renderer);
		GL11.glPopMatrix();
	}

	//���o�[�T
	GL11.glPushMatrix();
	renderer.rotate(roRev, 'X', 0.0000, 0.8993, 9.3183); //��]��
	revH.render(renderer);
	GL11.glPopMatrix();

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderCab(entity, onUpdateTick) {

	var dataMap = entity.getResourceState().getDataMap();
	var isControlCar = entity.isControlCar();
	var interiorLightState = entity.getTrainStateData(11);
	var pantaState = entity.getTrainStateData(6);
	var speed = entity.getSpeed() * 72;

	//��]���v�Z
	var vecY = createVector3f(0.776, 1.0136, 9.4613, 0.776, 1.1342, 9.4913); //���[�^�[�E����xyz���W, �E���xyz���W
	var vecZ = createVector3f(0.776, 1.0136, 9.4613, 0.8967, 1.0136, 9.4613); //���[�^�[�E����xyz���W, ������xyz���W
	var axisVec = Vector3f.cross(vecY, vecZ, null).normalise(null);

	var roSp = 0 + 241.8 / 120 * speed;
	//��]�ϐ� = �����ʒu����ڐ���0km�̈ʒu�܂ł̊p�x + 0km����ڐ���ő�܂ł̊p�x / �ڐ���ő�̑��x * speed

	if(pantaState == 1) {
		setVoltage = 188;
	} else {
		setVoltage = 0;
	}

	var roVlt = dataMap.getDouble("roVlt");

	if(onUpdateTick) {

		if(roVlt < setVoltage) {
			roVlt = roVlt++;
		// } else if(roVlt == setVoltage) {
		// 	roVlt = setVoltage;
		} else if(roVlt > setVoltage) {
			roVlt = roVlt--;
		}

	}

	dataMap.setDouble("roVlt", roVlt, false);

	if (!isControlCar && interiorLightState > 0) { //��������ON�ł���ꍇ
		NGTUtilClient.getMinecraft().field_71460_t.func_78483_a(0.0); //���������[�h��L���ɂ���
			GLHelper.setLightmapMaxBrightness();
	}

	//���x�v
	renderRotatePartFromPos(needleSpd, -roSp, 0.8363, 1.0739, 9.4778, axisVec.getX(), axisVec.getY(), axisVec.getZ());
	//(�I�u�W�F�N�g, ��]�ϐ�, ���Wx, ���Wy, ���Wz, axisVec.getX(), axisVec.getY(), axisVec.getZ())

	//�d���v
	renderRotatePartFromPos(needlekV, -roVlt, 0.3787, 1.0739, 9.4778, axisVec.getX(), axisVec.getY(), axisVec.getZ());

	//�x�J�y�_��
	if (Keyboard.isKeyDown(Keyboard.KEY_P)) {
		hornPedalON.render(renderer);
	} else {
		hornPedalOFF.render(renderer);
	}

	cab_body.render(renderer); //���t�]�n���h�����O�ȊO�̏ꍇ�ɔ���������I�u�W�F�N�g���w��
	renderController(entity, onUpdateTick);
	renderATS(entity);

	if (interiorLightState > 0 && !isControlCar) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0); //���������[�h�𖳌��ɂ���
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderBodyGlass(entity, pass) {

	var interiorLightState = entity.getTrainStateData(11);

	if(pass == 1 && interiorLightState > 0) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78483_a(0.0); //���������[�h��L���ɂ���
		GLHelper.setLightmapMaxBrightness();
	}

	bodyGlass.render(renderer);

	if(pass == 1 && interiorLightState > 0) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0); //���������[�h�𖳌��ɂ���
	}

	cabGlass.render(renderer);

	if(pass == 1 && interiorLightState > 0) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0);//���������[�h�𖳌��ɂ���
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderCabGlass(entity, pass) {

	var isControlCar = entity.isControlCar();
	var interiorLightState = entity.getTrainStateData(11);

	if(!isControlCar) {
		if(pass >= 2 && interiorLightState > 0) {
			NGTUtilClient.getMinecraft().field_71460_t.func_78483_a(0.0); //���������[�h��L���ɂ���
			GLHelper.setLightmapMaxBrightness();
		}

		cabGlass.render(renderer);

		if(pass >= 2 && interiorLightState > 0) {
			NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0);//���������[�h�𖳌��ɂ���
		}
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderInterior(entity) {

	var interiorLightState = entity.getTrainStateData(11);

	if (interiorLightState > 0) { //��������ON�ł���ꍇ
		NGTUtilClient.getMinecraft().field_71460_t.func_78483_a(0.0); //���������[�h��L���ɂ���
		GLHelper.setLightmapMaxBrightness();
	}

	GL11.glPushMatrix();

	interior.render(renderer); //����������I�u�W�F�N�g���w��(�֐�����)
	renderDoor_i(entity);

	if (interiorLightState > 0) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0); //���������[�h�𖳌��ɂ���
	}

	GL11.glPopMatrix();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderBogie(entity) {

	var roWh = renderer.getWheelRotationR(entity);
	var trainYaw = entity.field_70177_z;
	var trainPitch = entity.field_70125_A;
	var entityBogieF = entity.getBogie(0);
	var entityBogieB = entity.getBogie(1);

	if (!entityBogieF || !entityBogieB) return;

	var bogieYawF = (trainYaw - entityBogieF.field_70177_z) * -1;
	var bogieYawB = (trainYaw - entityBogieB.field_70177_z) * -1 - 180;
	var bogiePitchF = trainPitch - entityBogieF.field_70125_A;
	var bogiePitchB = trainPitch - entityBogieB.field_70125_A * -1;

	var bogiePosZ = [6.5, -6.5]; //Z���O����bogiePosZ[0],[1]
	var wheelPosY = -0.527; //�ԗ։�]��Y
	var wheelPosZ = [7.55, 5.45, -5.45, -7.55]; //Z���O����wheelPosZ[0],[1],[2],[3]

	//�O���
	GL11.glPushMatrix();
	renderer.rotate(bogieYawF, 'Y', 0.0, 0.0, bogiePosZ[0]);
	renderer.rotate(bogiePitchF, 'X', 0.0, 0.0, bogiePosZ[0]);
	bogieF.render(renderer);
	GL11.glPushMatrix();
	renderer.rotate(roWh, 'X', 0.0, wheelPosY, wheelPosZ[0]);
	wheelF1.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(roWh, 'X', 0.0, wheelPosY, wheelPosZ[1]);
	wheelF2.render(renderer);
	GL11.glPopMatrix();
	GL11.glPopMatrix();

	//����
	GL11.glPushMatrix();
	renderer.rotate(bogieYawB, 'Y', 0.0, 0.0, bogiePosZ[1]);
	renderer.rotate(bogiePitchB, 'X', 0.0, 0.0, bogiePosZ[1]);
	bogieB.render(renderer);
	GL11.glPushMatrix();
	renderer.rotate(roWh, 'X', 0.0, wheelPosY, wheelPosZ[2]);
	wheelB1.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(roWh, 'X', 0.0, wheelPosY, wheelPosZ[3]);
	wheelB2.render(renderer);
	GL11.glPopMatrix();
	GL11.glPopMatrix();

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderOtherParts(entity) {

	var trainDir = entity.getTrainStateData(0);
	var pantaState = entity.getTrainStateData(6);
	var doorClsL = entity.doorMoveL / 60;
	var doorClsR = entity.doorMoveR / 60;

	//�O�Ɠ�
	if (trainDir == 0) { //�i�s
		GL11.glPushMatrix();
		headlighton.render(renderer);
		taillightoff.render(renderer);
		GL11.glPopMatrix();
	} else { //���
		GL11.glPushMatrix();
		headlightoff.render(renderer);
		taillighton.render(renderer);
		GL11.glPopMatrix();
	}

	//�^�]��˕ߓ�
	if(doorClsL > 0 || doorClsR > 0) { //�E�����ǂ��炩�̃h�A���J���Ă���Ƃ�
		cabDoorLampOFF.render(renderer);
	} else { //�ǂ�������Ă���Ƃ�
		cabDoorLampON.render(renderer);
	}

	//�p���^�O���t
	if(pantaState == 0) {
		pantaDawn.render(renderer);
	} else {
		pantaUp.render(renderer);
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function render(entity, pass, par3) {

	//-----------------------------------------------------------------------------------

	if (entity == null) {

		renderPreview(pass);
		return;

	}

	//-----------------------------------------------------------------------------------

	var onUpdateTick = false;

	if (pass == 0) onUpdateTick = updateTick(entity);

	//-----------------------------------------------------------------------------------

	GL11.glPushMatrix();

	if (entity == null) {
		entityID = -1;
	} else {
		entityID = entity.func_145782_y();

		var prevTick = renderer.getData(entityID << prevTickID);
		var currentTick = renderer.getTick(entity);
		shouldUpdate = ((prevTick != currentTick) && (pass == 0));

		if (shouldUpdate) renderer.setData(entityID << prevTickID, currentTick);

		doorState = getArrayFromData(entityID << doorStateID, 2);
		doorMovement = getArrayFromData(entityID << doorMovementID, 2);
		doorStateInTrain = entity.getTrainStateData(4);

		updateDoors(entity);

	}

	//-----------------------------------------------------------------------------------

	if (pass >= 0) {

		body1.render(renderer);
		body2.render(renderer);
		body3.render(renderer);

		sATSAlert(entity, pass);
		kitadenATS(entity);
		
		renderBogie(entity);
		renderOtherParts(entity);
		sendHornKey(entity);

		renderDoor_o(entity);
		renderDoorLamp(entity);
		renderCab(entity, onUpdateTick);
		renderCabGlass(entity, pass);

	}

	//-----------------------------------------------------------------------------------

	if (pass >= 2) {
		NGTUtilClient.getMinecraft().field_71460_t.func_78483_a(0.0);
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
		GL11.glColor4f(1.0, 1.0, 1.0, 1.0);
		GLHelper.setLightmapMaxBrightness();
	}

	renderInterior(entity);
	renderBodyGlass(entity, pass);
	
	if (pass >= 2) {
		GL11.glDisable(GL11.GL_BLEND);
		GL11.glEnable(GL11.GL_ALPHA_TEST);
		NGTUtilClient.getMinecraft().field_71460_t.func_78463_b(0.0);
	}

	//-----------------------------------------------------------------------------------

	GL11.glPopMatrix();

}