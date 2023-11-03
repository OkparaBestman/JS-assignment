
window.addEventListener("load", (e) => {
    let form = document.getElementById("form");
    let name = document.getElementById("name");
    let num = document.getElementById("number");
    let city = document.getElementById("city");
    let table = document.getElementById("table")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let item1 = name.value;
        let item2 = num.value;
        let item3 = city.value;
        // console.log (item1, item2, item3,)

        if (!item1 || !item2 || !item3) {
            alert("Pls fill in all field");
        }
        else {
            let row = document.createElement("tr");
            row.classList.add("row");

            let data1 = document.createElement("td");
            let rowArray = document.getElementsByClassName("row");
            let SerialNum = rowArray.length + 1;
            data1.textContent = SerialNum;
            let data2 = document.createElement("td");

            function nameEditor() {
                let name = item1.trim();

                let nameArray = name.split(" ");

                let filteredNames = nameArray.filter(value => {
                    return value != "";
                })
                filteredNames.splice(3, (nameArray.length - 3));

                filteredNames.forEach((element, index, arr) => {
                    let initial = element.slice(0, 1);
                    let remainder = element.slice(1);
                    let initialCap = initial.toUpperCase();
                    let newName = initialCap + remainder;
                    arr[index] = newName;
                });

                let fullname = filteredNames.join(" ");
                return fullname;
            }

            data2.textContent = nameEditor();

            let data3 = document.createElement("td");
            data3.textContent = item2;

            let data4 = document.createElement("td");

            function cityEditor() {
                let city = item3.trim();

                let cityArray = city.split(" ");

                let filteredCity = cityArray.filter(value => {
                    return value != "";
                })

                filteredCity.forEach((element, index, arr) => {
                    let initial = element.slice(0, 1);
                    let remainder = element.slice(1);
                    let initialCap = initial.toUpperCase();
                    let newName = initialCap + remainder;
                    arr[index] = newName;
                });

                let cityName = filteredCity.join(" ");
                return cityName;
            }

            data4.textContent = cityEditor();

            // let data5 = document.createElement("td");
            // data5.textContent = item4;
            let data5 = document.createElement("td");
            data5.classList.add("attbtn");
            let presBtn = document.createElement("input");
            presBtn.type = "button";
            presBtn.setAttribute("id", "presbtn");
            presBtn.value = "P";
            let absBtn = document.createElement("input");
            absBtn.type = "button";
            absBtn.setAttribute("id", "absbtn")
            absBtn.value = "A";

            table.appendChild(row);
            row.append(data1, data2, data3, data4, data5)
            data5.append(presBtn, absBtn)

            name.value = "";
            num.value = "";
            city.value = "";

            presBtn.addEventListener("click", (e) => {
                if (presBtn.value.toLowerCase() === "p") {
                    absBtn.remove();
                    presBtn.value = "Present";
                }
            })

            absBtn.addEventListener("click", (e) => {
                if (absBtn.value.toLowerCase() === "a") {
                    presBtn.remove();
                    absBtn.value = "Absent"
                }
            })
        }
    })
})