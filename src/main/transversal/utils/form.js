export function getJsonOfForm(form, data = {}, validateInput = false) {
    const formData = new FormData(form);
    Array.from(formData.keys()).reduce((acc, key) => {
        let val = "";
        if (form.elements[key].type === "select-one") {
            val = form.elements[key].value;
        } else if (form.elements[key].type === "checkbox") {
            val = form.elements[key].value && form.elements[key].value === "on" ? true : false;
        } else {
            val = form.elements[key].value;
        }
        if (validateInput === true) {
            if (Object.keys(data).includes(key)) {
                data[key] = val;
                acc[key] = val;
            }
        } else {
            data[key] = val;
            acc[key] = val;
        }
        return acc
    }, {});
    return data;
}