//Render_KRW800M.js  by unlock [����/�R�s�y/�]�ڂ��ւ���]

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

	//���K���X
	bodyGlass = renderer.registerParts(new Parts("�ˑܑ�", "���ʑ�", "�ђʑ�"));

	//�ԑ���
	doorLampL_ON = renderer.registerParts(new Parts("L_On"));
	doorLampL_OFF = renderer.registerParts(new Parts("L_Off"));
	doorLampR_ON = renderer.registerParts(new Parts("R_On"));
	doorLampR_OFF = renderer.registerParts(new Parts("R_Off"));

	//�p���^�O���t
	pantaUp = renderer.registerParts(new Parts("�p���^�㏸"));
	pantaDawn = renderer.registerParts(new Parts("�p���^���~"));

	//����
	interior = renderer.registerParts(new Parts("��", "���g��", "���ʑ���", "����", "�g��", "����", "�|�[��",
		"�_�N�g", "�d�؂�q����", "�Ȗʓ�", "�։�", "�ђʔ���", "�����", "�V��", "��", "�斱�����d�؂�_�q��", "�u����", "�݂�v", "�X�s�[�J�["));

	//����
	body3 = renderer.registerParts(new Parts("����", "��", "�e", "�z��", "��q", "�A����", "�W�����p��", "ATS�ԏ�q"));

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
		doorLampL_OFF.render(renderer);
		doorLampR_OFF.render(renderer);
		pantaUp.render(renderer);
		interior.render(renderer);
		body3.render(renderer);
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

	var pantaState = entity.getTrainStateData(6);

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
		
		renderBogie(entity);
		renderOtherParts(entity);

		renderDoor_o(entity);
		renderDoorLamp(entity);

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