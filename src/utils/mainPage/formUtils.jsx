

export const handleChange = (e,setFormData,formData) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


export const isFormDataEmpty = (formData) => {
    for (const key in formData) {
        if (formData[key].trim() !== '') {
            return true;
        }
    }
  
    return false;

}

export  const handleSubmit = (e,formData) => {
    e.preventDefault();
    var isDataEmpty = isFormDataEmpty(formData);
    if(isDataEmpty){
        console.log('Form Data:', formData);
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Mesaj Gönderildi.");

    }
    else{
        alert("Formda boş alan olamaz.");
    }
};


