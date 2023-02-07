$(document).ready(function(){
    $.getJSON("https://hoixi.github.io/js/data.json", function(data){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let datas of data) {
            if(datas.Durum != "Çözüldü") {            
            out += `
            <tr>
            <td>${datas.İsim}</td>
            <td>${datas.Soyisim}</td>
            <td>${datas.Tel}</td>
            <td>${datas.Adres}</td>
            <td>${datas.Durum}</td>
            </tr>
            `;}
        }

        placeholder.innerHTML = out;
    }).fail(function(){
        console.log("An error has occurred.");
    });
});

