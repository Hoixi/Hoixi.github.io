$(document).ready(function(){
    $.getJSON("https://hoixi.github.io/js/data.json", function(data){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for(let datas of data) {
            out = `
            <tr>
            <td>${datas.İsim}</td>
            <td>${datas.İsim}</td>
            <td>${datas.İsim}</td>
            <td>${datas.İsim}</td>
            <td>${datas.İsim}</td>
            </tr>
            `;
        }

        placeholder.innerHTML = out;
    }).fail(function(){
        console.log("An error has occurred.");
    });
});
