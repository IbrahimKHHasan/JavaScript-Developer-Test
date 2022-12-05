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
    var data = jsonData;
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
