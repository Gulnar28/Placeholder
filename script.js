$(document).ready(function () {
  $("#select").change(function () {
    var selectedOption = $(this).val();
    if (selectedOption === "posts") {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>User Id</th><th> ID </th><th>Title</th><th>Body</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.userId +
              "</td><td>" +
              item.id +
              "</td><td>" +
              item.title +
              "</td><td>" +
              item.body +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else if (selectedOption === "comments") {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>Post Id</th><th> ID </th><th>Name</th><th>Email</th><th>Body</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.postId +
              "</td><td>" +
              item.id +
              "</td><td>" +
              item.name +
              "</td><td>" +
              item.email +
              "</td><td>" +
              item.body +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else if (selectedOption === "albums") {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>User Id</th><th> ID </th><th>Title</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.userId +
              "</td><td>" +
              item.id +
              "</td><td>" +
              item.title +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else if (selectedOption === "photos") {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>Album Id</th><th> ID </th><th>Title</th><th>Url</th><th>ThumbnailUrl</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.albumId +
              "</td><td>" +
              item.id +
              "</td><td>" +
              item.title +
              "</td><td>" +
              item.url +
              "</td><td>" +
              item.thumbnailUrl +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else if (selectedOption === "todos") {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>User Id</th><th> ID </th><th>Title</th><th>Completed</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.userId +
              "</td><td>" +
              item.id +
              "</td><td>" +
              item.title +
              "</td><td>" +
              item.completed +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else if (selectedOption === "users") {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          var tableHtml =
            "<table><thead><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Street</th><th>Suite</th><th>City</th><th>Zipcode</th><th>Lat</th><th>Lng</th><th>Phone</th><th>Website</th><th>Company name</th><th>CatchPhrase</th><th>Bs</th></tr></thead><tbody>";
          data.forEach(function (item) {
            tableHtml +=
              "<tr><td>" +
              item.id +
              "</td><td>" +
              item.name +
              "</td><td>" +
              item.username +
              "</td><td>" +
              item.email +
              "</td><td>" +
              item.address.street +
              "</td><td>" +
              item.address.suite +
              "</td><td>" +
              item.address.city +
              "</td><td>" +
              item.address.zipcode +
              "</td><td>" +
              item.address.geo.lat +
              "</td><td>" +
              item.address.geo.lng +
              "</td><td>" +
              item.phone +
              "</td><td>" +
              item.website +
              "</td><td>" +
              item.company.name +
              "</td><td>" +
              item.company.catchPhrase +
              "</td><td>" +
              item.company.bs +
              "</td></tr>";
          });
          tableHtml += "</tbody></table>";
          $("#content").html(tableHtml);
        });
    } else {
      $("#content").empty();
    }
  });
});
