let VehicleSelect = ["FordTaurus_7526", "JeepLiberty_2103", "IsuzuRodeo_3573"];

let SlideSelect = [0, 0, 0, 0]

let FordTaurus_7526_Array = [];
FordTaurus_7526_Array[0] = "FordTaurus_7526_1.jpg";
FordTaurus_7526_Array[1] = "FordTaurus_7526_2.jpg";
FordTaurus_7526_Array[2] = "FordTaurus_7526_3.jpg";
FordTaurus_7526_Array[3] = "FordTaurus_7526_4.jpg";
FordTaurus_7526_Array[4] = "FordTaurus_7526_5.jpg";

let JeepLiberty_2103_Array = [];
JeepLiberty_2103_Array[0] = "JeepLiberty_2103_1.jpg";
JeepLiberty_2103_Array[1] = "JeepLiberty_2103_2.jpg";
JeepLiberty_2103_Array[2] = "JeepLiberty_2103_3.jpg";
JeepLiberty_2103_Array[3] = "JeepLiberty_2103_4.jpg";
JeepLiberty_2103_Array[4] = "JeepLiberty_2103_5.jpg";

let IsuzuRodeo_3573_Array = [];
IsuzuRodeo_3573_Array[0] = "IsuzuRodeo_3573_1.jpg";
IsuzuRodeo_3573_Array[1] = "IsuzuRodeo_3573_2.jpg";
IsuzuRodeo_3573_Array[2] = "IsuzuRodeo_3573_3.jpg";
IsuzuRodeo_3573_Array[3] = "IsuzuRodeo_3573_4.jpg";
IsuzuRodeo_3573_Array[4] = "IsuzuRodeo_3573_5.jpg";


function Left(i, Arrays, j) {
    console.log(SlideSelect[j])
    if (SlideSelect[j]) {
        SlideSelect[j]--;
        document.getElementById(VehicleSelect[i]).src = Arrays[SlideSelect[j]];
    }
}
function Right(i, Arrays, j) {
    console.log(SlideSelect[j])
    if (SlideSelect[j] === (Arrays.length-1)) {
        return;
    } else {
        SlideSelect[j]++;
        document.getElementById(VehicleSelect[i]).src = Arrays[SlideSelect[j]];
    }
}