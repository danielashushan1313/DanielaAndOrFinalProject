let myDestination = "";

function chooseDest(imgId, destName) {
    myDestination = destName;
    document.getElementById("selectedDestText").innerHTML = destName;

    let imgList = ["imgAmerica", "imgEurope", "imgJapan", "imgThailand"];
    for (let i = 0; i < imgList.length; i++) {
        document.getElementById(imgList[i]).style.display = "none";
    }
    document.getElementById(imgId).style.display = "block";

    checkForm();
}

function checkForm() {
    let nameVal = document.getElementById("userName").value;
    let myBtn = document.getElementById("sendBtn");

    if (nameVal !== "" && myDestination !== "") {
        myBtn.disabled = false;
    } else {
        myBtn.disabled = true;
    }
}

function changeOpacity(chkId, imgId) {
    let isChecked = document.getElementById(chkId).checked;
    let myImg = document.getElementById(imgId);

    if (isChecked) {
        myImg.style.opacity = "1.0";
    } else {
        myImg.style.opacity = "0.4";
    }

}

function submitTour() {
    let nameVal = document.getElementById("userName").value;
    let noteVal = document.getElementById("userNotes").value;

    let myAddons = [];
    let count = 0;

    if (document.getElementById("chkCulinary").checked) {
        myAddons[count] = "סיור קולינרי בשוק";
        count = count + 1;
    }
    if (document.getElementById("chkHotel").checked) {
        myAddons[count] = "שדרוג למלון 5 כוכבים";
        count = count + 1;
    }
    if (document.getElementById("chkCar").checked) {
        myAddons[count] = "הוספת רכב שכור צמוד";
        count = count + 1;
    }

    let addonsStr = "";
    if (count === 0) {
        addonsStr = "לא סומנו שדרוגים נוספים";
    } else {
        for (let i = 0; i < count; i++) {
            addonsStr = addonsStr + myAddons[i] + ", ";
        }
    }

    let summary = "<strong>שם הנוסע:</strong> " + nameVal + " <br>" +
        "<strong>יעד נבחר:</strong> " + myDestination + " <br>" +
        "<strong>שדרוגים ואטרקציות:</strong> " + addonsStr + " <br>" +
        "<strong>הערות:</strong> " + (noteVal !== "" ? noteVal : "אין הערות");

    document.getElementById("summaryText").innerHTML = summary;
    document.getElementById("summaryBox").style.display = "block";
}