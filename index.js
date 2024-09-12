var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stuDBName = "SCHOOL-DB";
var stuRelationName = "STUDENT-TABLE";
var connToken = "90932024|-31949219790636603|90962254";

function saveRecNo2LS(jsonObj){
    var lvData = JSON.parse(jsonObj.data); // Fix the object name to jsonObj
    localStorage.setItem("recno", lvData.rec_no);
}

function validateAndGetFormData() {
    var stuIdVar = $("#rollNo").val(); // Match with correct 'id' names
    if (stuIdVar === "") {
        alert("Student Roll-No Required");
        $("#rollNo").focus();
        return "";
    }
    var stuNameVar = $("#fullName").val();
    if (stuNameVar === "") {
        alert("Student Name is Required");
        $("#fullName").focus();
        return "";
    }
    var stuClassVar = $("#class").val();
    if (stuClassVar === "") {
        alert("Student Class is Required");
        $("#class").focus();
        return "";
    }
    var stuDOBVar = $("#birthDate").val();
    if (stuDOBVar === "") {
        alert("Student Birth-Date is Required");
        $("#birthDate").focus();
        return "";
    }
    var stuAddressVar = $("#address").val();
    if (stuAddressVar === "") {
        alert("Student Address is Required");
        $("#address").focus();
        return "";
    }
    var stuEnrollDateVar = $("#enrollmentDate").val(); // Fix the selector
    if (stuEnrollDateVar === "") {
        alert("Student Enrollment-Date is Required");
        $("#enrollmentDate").focus();
        return "";
    }

    var jsonStrObj = {
        stuId: stuIdVar,
        stuName: stuNameVar,
        stuClass: stuClassVar,
        stuDOB: stuDOBVar,
        stuAddress: stuAddressVar,
        stuEnrollDate: stuEnrollDateVar
    };
    return JSON.stringify(jsonStrObj);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#fullName").val(record.stuName);
    $("#class").val(record.stuClass);
    $("#birthDate").val(record.stuDOB);
    $("#address").val(record.stuAddress);
    $("#enrollmentDate").val(record.stuEnrollDate);
}

function getstuIdASJsonObj() {
    var stuid = $("#rollNo").val(); // Match 'id' to HTML form
    var jsonStr = { id: stuid };
    return JSON.stringify(jsonStr);
}

function getStu() {
    var stuIdJsonObj = getstuIdASJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, stuDBName, stuRelationName, stuIdJsonObj);
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });

    if (resJsonObj.status === 400) {
        $("#saveBtn").prop("disabled", false); // Updated button IDs
        $("#resetBtn").prop("disabled", false);
        $("#fullName").focus();
    } else if (resJsonObj.status === 200) {
        $("#rollNo").prop("disabled", true);
        fillData(resJsonObj);
        $("#updateBtn").prop("disabled", false);
        $("#resetBtn").prop("disabled", false);
        $("#fullName").focus();
    }
}

function resetForm() {
    $("#rollNo").val("");
    $("#fullName").val("");
    $("#class").val("");
    $("#birthDate").val("");
    $("#address").val("");
    $("#enrollmentDate").val("");
    $("#rollNo").focus();
}

function changeData() {
    $("#updateBtn").prop("disabled", true);
    var jsonChg = validateAndGetFormData(); // Fixed function call
    if (jsonChg === "") {
        return;
    }
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, stuDBName, stuRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    console.log(resJsonObj);
    resetForm();
    $("#rollNo").focus();
}

function saveData() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connToken, jsonStr, stuDBName, stuRelationName);
    alert(putReqStr);

    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });

    alert(JSON.stringify(resultObj));
    resetForm();
}
