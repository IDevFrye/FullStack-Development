function getForm()  {
    let inputs = document.getElementsByTagName("input");
    let result = {};
    let index = 0;
    let radioItem = {};
    for (let i = 0; i < inputs.length-1; i++) {
        let inpVal = inputs[i].id;
        switch(inputs[i].type) {
            case "text":
                result[`${inpVal}`] = inputs[i].value;
                continue;
            case "radio":
                let status = (inputs[i].checked) ? ("checked") : ("false");
                radioItem[`${index}`] = {
                    "value" : `${inputs[i].id}`,
                    "status" : `${status}`
                }
                index++;
                result[`${inputs[i].name}`] = radioItem;
        }
    }
    console.log(result);
    return result;
}