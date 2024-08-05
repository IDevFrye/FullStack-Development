function getForm()  {
    let inputs = document.getElementsByName("pol");
    let result = {}
    for (let i = 0; i < inputs.length; i++) {
        let inpVal = inputs[i].id;
        let status = {};
        status.status = (inputs[i].checked) ? ("checked") : ("false");
        result[`${inpVal}`] = status;
    }
    return result;
}