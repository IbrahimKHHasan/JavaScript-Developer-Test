// fetching JSON data
jsonURL =
  'https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true';
fetch(jsonURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then((jsonData) => {
    var filter = "all";
    var data = jsonData;
    var dataDiv = document.getElementById("data");
    var cat1Button = document.getElementById("cat-1");
    var cat2Button = document.getElementById("cat-2");
    var cat3Button = document.getElementById("cat-3");
    var allButton = document.getElementById("all");
    var dataArray = [];
    // rendering data after filter it based on the category
    cat1Button.onclick = () => {
      dataDiv.innerHTML = "";
      data.map((ele) => {
        if (ele["category"] == "category1") {
          dataArray.push(ele);
        }
      });
      dataArray.map((ele) => {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var hr = document.createElement("hr");
        p1.innerText = ele["fname"] + " " + ele["lname"];
        p2.innerText = ele["category"];
        p2.style.color = "red";
        dataDiv.appendChild(p1);
        dataDiv.appendChild(p2);
        dataDiv.appendChild(hr);
      });
      dataArray = [];
    };
    cat2Button.onclick = () => {
      dataDiv.innerHTML = "";
      data.map((ele) => {
        if (ele["category"] == "category2") {
          dataArray.push(ele);
        }
      });
      dataArray.map((ele) => {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var hr = document.createElement("hr");
        p1.innerText = ele["fname"] + " " + ele["lname"];
        p2.innerText = ele["category"];
        p2.style.color = "green";
        dataDiv.appendChild(p1);
        dataDiv.appendChild(p2);
        dataDiv.appendChild(hr);
      });
      dataArray = [];
    };
    cat3Button.onclick = () => {
      dataDiv.innerHTML = "";
      data.map((ele) => {
        if (ele["category"] == "category3") {
          dataArray.push(ele);
        }
      });
      dataArray.map((ele) => {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var hr = document.createElement("hr");
        p1.innerText = ele["fname"] + " " + ele["lname"];
        p2.innerText = ele["category"];
        p2.style.color = "blue";
        dataDiv.appendChild(p1);
        dataDiv.appendChild(p2);
        dataDiv.appendChild(hr);
      });
      dataArray = [];
    };
    allButton.onclick = () => {
      data.map((ele) => {
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var hr = document.createElement("hr");
        p1.innerText = ele["fname"] + " " + ele["lname"];
        p2.innerText = ele["category"];
        switch (ele["category"]) {
          case "category1":
            p2.style.color = "red";
            break;

          case "category2":
            p2.style.color = "green";
            break;

          case "category3":
            p2.style.color = "blue";
            break;

          default:
            break;
        }
        dataDiv.appendChild(p1);
        dataDiv.appendChild(p2);
        dataDiv.appendChild(hr);
      });
    };
  })
  .catch((err) => {
    console.log(err);
  });
