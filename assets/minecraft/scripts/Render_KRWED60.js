
//Render_KRWED60.js  by unlock [����/�R�s�y/�]�ڂ��ւ���]

//Don't duplicate or copy.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

importPackage(Packages.jp.ngt.ngtlib.util);
importPackage(Packages.jp.ngt.ngtlib.math);
importPackage(Packages.org.lwjgl.input);
importPackage(Packages.org.lwjgl.util.vector);

importPackage(Packages.jp.kaiz.atsassistmod.api);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function init(par1, par2) {

	//�ԑ�1
	body0 = renderer.registerParts(new Parts("�ԑ�", "�ђʔ�", "�斱����"));

	//�ԑ�?????
	bodyR0 = renderer.registerParts(new Parts("���C���{�ԑ�", "���C���{�ђʔ�", "���C���{�斱����"));

	//�ԑ�2
	body1 = renderer.registerParts(new Parts("�Ԕԃv���[�g", "�ђʔ�H�S��", "�ђʔ���", "�O�ʃX�e�b�v", "�O�Ɠ�", "����", "�^�]����葋", "��", "�肷��", "�O�ʑ�H�S��", "���ʑ�H�S��"));

	//����
	body2 = renderer.registerParts(new Parts("����", "�z�C�b�X��", "�^�C�t�H��", "�N�[���[", "�p���^���", "������"));

	//��
	body3 = renderer.registerParts(new Parts("��", "����1", "����2", "�X�e�b�v", "�X�J�[�g1", "�X�J�[�g2", "�J���e�R", "�z��", "�z��2", "�^���e"));

	//�A����
	coupler1 = renderer.registerParts(new Parts("�����A����"));
	coupler2 = renderer.registerParts(new Parts("�����A����"));

	//����
	interior = renderer.registerParts(new Parts("����", "�^�]��", "���[�^�[", "�^�]��@���", "�u���[�L", "�}�X�R��"));

	//�Ԕ�
	number00 = renderer.registerParts(new Parts("�Ԕ�00"));
	number10 = renderer.registerParts(new Parts("�Ԕ�10"));
	number20 = renderer.registerParts(new Parts("�Ԕ�20"));
	number30 = renderer.registerParts(new Parts("�Ԕ�30"));
	number40 = renderer.registerParts(new Parts("�Ԕ�40"));
	number50 = renderer.registerParts(new Parts("�Ԕ�50"));
	number60 = renderer.registerParts(new Parts("�Ԕ�60"));
	number70 = renderer.registerParts(new Parts("�Ԕ�70"));
	number80 = renderer.registerParts(new Parts("�Ԕ�80"));
	number90 = renderer.registerParts(new Parts("�Ԕ�90"));

	number0 = renderer.registerParts(new Parts("�Ԕ�0"));
	number1 = renderer.registerParts(new Parts("�Ԕ�1"));
	number2 = renderer.registerParts(new Parts("�Ԕ�2"));
	number3 = renderer.registerParts(new Parts("�Ԕ�3"));
	number4 = renderer.registerParts(new Parts("�Ԕ�4"));
	number5 = renderer.registerParts(new Parts("�Ԕ�5"));
	number6 = renderer.registerParts(new Parts("�Ԕ�6"));
	number7 = renderer.registerParts(new Parts("�Ԕ�7"));
	number8 = renderer.registerParts(new Parts("�Ԕ�8"));
	number9 = renderer.registerParts(new Parts("�Ԕ�9"));

	//�p���^�O���t
	pantaUpF = renderer.registerParts(new Parts("�p���^�㏸�O"));
	pantaUpB = renderer.registerParts(new Parts("�p���^�㏸��"));
	pantaDownF = renderer.registerParts(new Parts("�p���^���~�O"));
	pantaDownB = renderer.registerParts(new Parts("�p���^���~��"));

	//�}�X�R����
	mcHF = renderer.registerParts(new Parts("�}�X�R���n���h���O"));
	mcHB = renderer.registerParts(new Parts("�}�X�R���n���h����"));
	brHF = renderer.registerParts(new Parts("�u���[�L�n���h���O"));
	brHB = renderer.registerParts(new Parts("�u���[�L�n���h����"));
	revHF = renderer.registerParts(new Parts("���o�[�T�[�O"));
	revHB = renderer.registerParts(new Parts("���o�[�T�[��"));

	//���[�^�[��
	needleSpdF = renderer.registerParts(new Parts("���x�v�j�O"));
	needleSpdB = renderer.registerParts(new Parts("���x�v�j��"));
	needlekPaBF = renderer.registerParts(new Parts("���͌v�j���O"));
	needlekPaBB = renderer.registerParts(new Parts("���͌v�j����"));
	needlekPaRF = renderer.registerParts(new Parts("���͌v�j�ԑO"));
	needlekPaRB = renderer.registerParts(new Parts("���͌v�j�Ԍ�"));

	//ATS�\���@
	atsPanel = renderer.registerParts(new Parts("ATS➑�", "��", "��"));
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

	//�O�Ɠ�
	headlightOnF = renderer.registerParts(new Parts("�O�Ɠ��_�O"));
	headlightOnB = renderer.registerParts(new Parts("�O�Ɠ��_��"));
	headlightOffF = renderer.registerParts(new Parts("�O�Ɠ��őO"));
	headlightOffB = renderer.registerParts(new Parts("�O�Ɠ��Ō�"));

	//����
	taillightOnF = renderer.registerParts(new Parts("�����_�O"));
	taillightOnB = renderer.registerParts(new Parts("�����_��"));
	taillightOffF = renderer.registerParts(new Parts("�����őO"));
	taillightOffB = renderer.registerParts(new Parts("�����Ō�"));
	shuntinglightOnF = renderer.registerParts(new Parts("�������_�O"));
	shuntinglightOnB = renderer.registerParts(new Parts("�������_��"));

	//���
	bogieF = renderer.registerParts(new Parts("���F1", "���F2")); //�O���
	bogieB = renderer.registerParts(new Parts("���R1", "���R2")); //����
	wheelF1 = renderer.registerParts(new Parts("�ԗ�FF")); //�ԗ�
	wheelF2 = renderer.registerParts(new Parts("�ԗ�FR"));
	wheelB1 = renderer.registerParts(new Parts("�ԗ�RF"));
	wheelB2 = renderer.registerParts(new Parts("�ԗ�RR"));

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderPreview(pass) {

	if (pass <= 1) {
		body0.render(renderer);
		body1.render(renderer);
		body2.render(renderer);
		body3.render(renderer);
		interior.render(renderer);
		pantaUpF.render(renderer);
		pantaUpB.render(renderer);
		atsPanel.render(renderer);
		brHF.render(renderer);
		headlightOffF.render(renderer);
		taillightOffF.render(renderer);
		bogieF.render(renderer);
		bogieB.render(renderer);
		wheelF1.render(renderer);
		wheelF2.render(renderer);
		wheelB1.render(renderer);
		wheelB2.render(renderer);
	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function updateTick(entity, pass) {

	if(entity == null) return false;

	var dataMap = entity.getResourceState().getDataMap();
	var tick = renderer.getTick(entity);
	var matID = renderer.currentMatId;

	var prevTick = dataMap.getInt("prevTick");

	dataMap.setInt("prevTick", tick, false);

	if(tick != prevTick && pass == 0 && matID == 0) return true; //1�t���[���ň����s�����

	return false;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderRotatePart(part, rotate, x, y, z, vecX, vecY, vecZ) {
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

var HashMap = Java.type("java.util.HashMap");
var isBreaking = new HashMap();

function renderATS(entity) {

	var dataMap = entity.getResourceState().getDataMap();
	var Signal = entity.getSignal();
	var isControlCar = entity.isControlCar();
	var ATSspeed = entity.getSpeed() * 72.0;

	if (!isControlCar) return;

	function renderATSHelper(int) {

		if (ATSspeed > (int + 15)) {

			//ATS_Emr.render(renderer);

			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', true, 1);

			ControlTrain.setNotch(-8);
			isBreaking.put(entity, true);

		} else if (ATSspeed > (int + 10)) {

			//ATS_Emr.render(renderer);

			dataMap.setBoolean('isOver5', false, 1);
			dataMap.setBoolean('isOver10', true, 1);

			ControlTrain.setNotch(-7);
			isBreaking.put(entity, true);

		} else if (ATSspeed > (int + 5)) {

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

function�@renderRainbow(entity) {

	if(entity == null) return;

	var dataMap = entity.getResourceState().getDataMap();
	var nc10 = dataMap.getInt("Button9");
	var nc01 = dataMap.getInt("Button10");

	if (nc10 == 9 && nc01 == 9) {
		bodyR0.render(renderer);
	}
	else {
		body0.render(renderer);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
function renderNumber(entity) {

	if(entity == null) return;

	var dataMap = entity.getResourceState().getDataMap();
	var nc10 = dataMap.getInt("Button9");
	var nc01 = dataMap.getInt("Button10");

	switch (nc10) {
		case 0: number00.render(renderer);
			break;
			
		case 1: number10.render(renderer);
			break;

		case 2: number20.render(renderer);
			break;

		case 3: number30.render(renderer);
			break;
			
		case 4: number40.render(renderer);
			break;

		case 5: number50.render(renderer);
			break;

		case 6: number60.render(renderer);
			break;
			
		case 7: number70.render(renderer);
			break;

		case 8: number80.render(renderer);
			break;

		case 9: number90.render(renderer);
			break;

		default:
			break;
	}

	switch (nc01) {
		case 0: number0.render(renderer);
			break;
			
		case 1: number1.render(renderer);
			break;

		case 2: number2.render(renderer);
			break;

		case 3: number3.render(renderer);
			break;
			
		case 4: number4.render(renderer);
			break;

		case 5: number5.render(renderer);
			break;

		case 6: number6.render(renderer);
			break;
			
		case 7: number7.render(renderer);
			break;

		case 8: number8.render(renderer);
			break;

		case 9: number9.render(renderer);
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

function longATSAlert(entity) {
	
	if (!entity.isControlCar()) {
		return;
	}

	var signal = entity.getSignal();
	//var speed = entity.getSpeed() * 72;
	var dataMap = entity.getResourceState().getDataMap();
	//var isATSRun = dataMap.getBoolean('isATSRun');
	//var atsWarnEmr = dataMap.getBoolean('atsWarnEmr');
	var atsWarnOn0 = dataMap.getBoolean('atsWarnOn0');
	var atsWarnOn1 = dataMap.getBoolean('atsWarnOn1');

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
		
    } else if (riddenByEntity == null) {
        //�N������Ă��Ȃ��Ƃ�
        dataMap.setBoolean('isPushHorn', false, 1);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderController(entity, onUpdateTick) {

	var dataMap = entity.getResourceState().getDataMap(); //dataMap�擾
	var notch = entity.getNotch(); //�m�b�`�擾
	var direction = entity.getTrainStateData(10); //���o�[�T�擾
	var trainDir = entity.getTrainStateData(0); //�ԗ������擾
	var isControlCar = entity.isControlCar();

	var roMc = dataMap.getDouble("roMcData"); //�f�[�^�ێ�
	var roBr = dataMap.getDouble("roBrData"); //
	var roRev = dataMap.getDouble("roRevData"); //

	var mcAngle = 6.0; //�}�X�R������p 14�i���v84��
	var mcOffset = -42.0; //�}�X�R���I�t�Z�b�g�p
	var brAngle = 10.0; //�u���[�L����p 8�i���v80��
	var revAngle = 30.0; //���o�[�T����p 20��

	//-----------------------------------------------------------------------------------------

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

	//-----------------------------------------------------------------------------------------

	if (trainDir == 0 && isControlCar) {

		//�}�X�R��
		GL11.glPushMatrix();
			renderer.rotate(-roMc + mcOffset, 'Y', 0.3054, 0.0, 6.582); //��]��
			mcHF.render(renderer);
		GL11.glPopMatrix();

		GL11.glPushMatrix();
			renderer.rotate(mcOffset, 'Y', -0.3054, 0.0, -6.582); //��]��
			mcHB.render(renderer);
		GL11.glPopMatrix();

		//�u���[�L
		GL11.glPushMatrix();
			renderer.rotate(roBr, 'Y', 1.1856, 0.0, 6.7088); //��]��
			brHF.render(renderer);
		GL11.glPopMatrix();

		//���o�[�T
		GL11.glPushMatrix();
			renderer.rotate(-roRev, 'Y', 0.4091, 0.8993, 6.5744); //��]��
			revHF.render(renderer);
		GL11.glPopMatrix();

		revHB.render(renderer);

	} else if (trainDir == 1 && isControlCar) {

		//�}�X�R��
		GL11.glPushMatrix();
			renderer.rotate(mcOffset, 'Y', 0.3054, 0.0, 6.582); //��]��
			mcHF.render(renderer);
		GL11.glPopMatrix();

		GL11.glPushMatrix();
			renderer.rotate(-roMc + mcOffset, 'Y', -0.3054, 0.0, -6.582); //��]��
			mcHB.render(renderer);
		GL11.glPopMatrix();

		//�u���[�L
		GL11.glPushMatrix();
			renderer.rotate(roBr, 'Y', -1.1856, 0.0, -6.7088); //��]��
			brHB.render(renderer);
		GL11.glPopMatrix();

		//���o�[�T
		revHF.render(renderer);

		GL11.glPushMatrix();
			renderer.rotate(-roRev, 'Y', -0.4091, -0.8993, -6.5744); //��]��
			revHB.render(renderer);
		GL11.glPopMatrix();

	} else {

		GL11.glPushMatrix();
			renderer.rotate(mcOffset, 'Y', 0.3054, 0.0, 6.582); //��]��
			mcHF.render(renderer);
		GL11.glPopMatrix();

		GL11.glPushMatrix();
			renderer.rotate(mcOffset, 'Y', -0.3054, 0.0, -6.582); //��]��
			mcHB.render(renderer);
		GL11.glPopMatrix();

		revHF.render(renderer);

		revHB.render(renderer);

	}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderCab(entity) {

	var speed = entity.getSpeed() * 72;
	var bc = entity.brakeCount / 144;
	var mr = entity.brakeAirCount / 2880;

	var roSp = -115 + 230 / 120 * speed; //��]�ϐ� = �����ʒu����ڐ���0km�̈ʒu�܂ł̊p�x + 0km����ڐ���ő�܂ł̊p�x / �ڐ���ő�̑��x * speed
	var rotateNdlBC = -135 + 80 * bc; //���͌v�� 
	var rotateNdlMR = -135 + 108 * mr; //���͌v��
	

	//���x�v
	GL11.glPushMatrix();
		renderer.rotate(roSp, 'Z', 0.82, 1.485, 0.0);
		needleSpdF.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
		renderer.rotate(-roSp, 'Z', -0.82, 1.485, 0.0);
		needleSpdB.render(renderer);
	GL11.glPopMatrix();

	//���͌v��
	GL11.glPushMatrix();
		renderer.rotate(rotateNdlBC, 'Z', 0.93, 1.485, 0.0);
		needlekPaBF.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
		renderer.rotate(-rotateNdlBC, 'Z', -0.93, 1.485, 0.0);
		needlekPaBB.render(renderer);
	GL11.glPopMatrix();

	//���͌v��
	GL11.glPushMatrix();
		renderer.rotate(rotateNdlMR, 'Z', 0.93, 1.485, 0.0);
		needlekPaRF.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
		renderer.rotate(-rotateNdlMR, 'Z', -0.93, 1.485, 0.0);
		needlekPaRB.render(renderer);
	GL11.glPopMatrix();

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderWiper(entity){

	//����

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderLight(entity) {

	if(entity == null) return;

	var dataMap = entity.getResourceState().getDataMap();
	var headlightStateF = dataMap.getInt("Button2");
	var taillightStateF = dataMap.getInt("Button3");
	var headlightStateB = dataMap.getInt("Button4");
	var taillightStateB = dataMap.getInt("Button5");

	if(headlightStateF == 0) headlightOnF.render(renderer);
	else headlightOffF.render(renderer);

	if(taillightStateF == 0) {
		taillightOnF.render(renderer);
	} else if(taillightStateF == 1) {
		shuntinglightOnF.render(renderer);
	} else {
		taillightOffF.render(renderer);
	}

	if(headlightStateB == 0) headlightOnB.render(renderer);
	else headlightOffB.render(renderer);
	
	if(taillightStateB == 0) {
		taillightOnB.render(renderer);
	} else if(taillightStateB == 1) {
		shuntinglightOnB.render(renderer);
	} else {
		taillightOffB.render(renderer);
	}
	

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderPantograph(entity) {

	if(entity == null) return;

	var dataMap = entity.getResourceState().getDataMap();
	var pantaState = entity.getTrainStateData(6);
	var pantaStateF = dataMap.getInt("Button6");
	var pantaStateB = dataMap.getInt("Button7");

	if(pantaState == 1 && pantaStateF == 0) pantaUpF.render(renderer);
	else pantaDownF.render(renderer);

	if(pantaState == 1 && pantaStateB == 0) pantaUpB.render(renderer);
	else pantaDownB.render(renderer);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function renderCoupler(entity) {

	if(entity == null) return;

	var dataMap = entity.getResourceState().getDataMap();
	var couplerState = dataMap.getInt("Button8");

	if(couplerState == 0) {
		coupler1.render(renderer);
	} else if(couplerState == 1) {
		coupler2.render(renderer);
	}
	else {
		coupler1.render(renderer);
	}
	
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

	var bogiePosZ = [3.9, -3.9]; //Z���O����bogiePosZ[0],[1]
	var wheelPosY = -0.4509; //�ԗ։�]��Y
	var wheelPosZ = [5.2, 2.6, -2.6, -5.2]; //Z���O����wheelPosZ[0],[1],[2],[3]

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

function render(entity, pass, par3) {

	//-----------------------------------------------------------------------------------

	if (entity == null) {

		renderPreview(pass);
		return;

	}

	//-----------------------------------------------------------------------------------

	var onUpdateTick = false;

	onUpdateTick = updateTick(entity, pass);

	//-----------------------------------------------------------------------------------

	GL11.glPushMatrix();

	renderController(entity, onUpdateTick);

	if(pass >= 0) {

		body1.render(renderer);
		body2.render(renderer);
		body3.render(renderer);
		interior.render(renderer);

		atsPanel.render(renderer);

		renderNumber(entity);
		renderRainbow(entity);

		renderATS(entity);
		longATSAlert(entity);
		kitadenATS(entity);

		renderCab(entity);
		renderLight(entity);
		renderPantograph(entity);
		renderCoupler(entity);
		
		renderBogie(entity);
		sendHornKey(entity);

	}

	GL11.glPopMatrix();

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

�J�X�^���{�^���Ώƕ\

Button0�F�u�����[
Button1�F���C�p�[
Button2�F1�G���h���O�Ɠ�
Button3�F1�G���h������/������
Button4�F2�G���h���O�Ɠ�
Button5�F2�G���h������/������
Button6�F1�G���h���p���^����
Button7�F2�G���h���p���^����
Button8�F�A����؂�ւ�
Button9�F10�̈�
Button10�F1�̈�

*/