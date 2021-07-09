// get value of form input
function serializeArrayToJSON(form) {
    var res = {};
    // console.log($(this).serializeArray());
    form.serializeArray().forEach((item) => {
        res[item.name] = item.value;
    });
    console.log(res);
    return res;
}