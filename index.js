
window.addEventListener("load", function () {
    button = document.getElementById("submit")

    button.addEventListener("click", getData)
})


function getData() {

    var search = document.getElementById("search").value
    console.log(search)

    // details = JSON.stringify(details)

    search = JSON.stringify(search)

    var xhr = new XMLHttpRequest()

    var url = "http://www.omdbapi.com/?s=" + search + "&apikey=5d18c3cd";

    xhr.open("GET", url);

    xhr.send()

    xhr.onload = function () {
        if (xhr.status == 200) {
            result = null
            console.log(xhr.response)
            result = xhr.response
            result = JSON.parse(result)
            showdata(result);
            console.log(result)

        }
        else {
            console.log("Error Code is:" + xhr.status)
        }
    }
}



function showdata(data) {
    console.log(data.Search.length)
    var details = []
    details.push(data.Search)

    // var detlset=localStorage.setItem(details)
    // localStorage.setItem("user", JSON.stringify(details))

    // console.log(localStorage)
    // console.log(detlget)
    // console.log(data.Search)
    // console.log(details)
    // console.log(details.length)


    var cardDiv = document.getElementById("mCard")
    cardDiv.setAttribute("class", "container-fluid row  mt-5 mb-5")
    // var div1 =document.createElement("container container-fluid mt-5 mb-5")
    cardDiv.innerHTML = ""
    for (var i = 0; i < data.Search.length; i++) {

        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var h1 = document.createElement("p");
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var img1 = document.createElement('img');
        var div3 = document.createElement("div");
        var btn = document.createElement("button")
        // img1.setAttribute('class', 'images1 ')

        btn.setAttribute("class", "btn btn-primary  btn-lg border-white rounded-pill")
        btn.innerText = "MoreDetails"
        div1.setAttribute("class", "card col-3 ");
        div2.setAttribute("class", "card-body");
        h1.setAttribute("class", "card-text");
        h1.textContent = data["Search"][i]["Title"];

        img1.setAttribute("src", data["Search"][i]["Poster"]);


        div3.setAttribute("class", "card-body");
        p1.setAttribute("class", "card-text");
        p2.setAttribute("class", "card-text")
        p1.textContent = data["Search"][i]["Year"];
        p2.textContent = data["Search"][i]["Type"];

        div2.appendChild(h1);
        div1.appendChild(div2);
        div1.appendChild(img1);
        div3.appendChild(p1);
        div3.appendChild(p2)
        div3.appendChild(btn)
        div1.appendChild(div3);
        cardDiv.appendChild(div1);




        button.setAttribute("value", i)
        button.onclick = x


        // btn.addEventListener(click, more)
        //
        // var title = details[i][0].Title
        // var poster=details[i][0].Poster
        // var year=details[i][0].Year
        // var imbdid=details[i][0].imdbID
        //     data[i].search
    }

}


var x = function displaydetails(e) {
    var y = e.target.value
    console.log(y)
    // console.log(data["meals"][y]["strMeal"])
    //  localStorage.setItem("index",y)
    //  localStorage.setItem("data",JSON.stringify(data))

}