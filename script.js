$(document).ready(function () {
  $("#select").change(function () {
    var selectedOption = $(this).val();
    var url = "https://jsonplaceholder.typicode.com/" + selectedOption;
    if (selectedOption === "posts") {
      api(url);
    } else if (selectedOption === "comments") {
      api(url);
    } else if (selectedOption === "albums") {
      api(url);
    } else if (selectedOption === "photos") {
      api(url);
    } else if (selectedOption === "todos") {
      api(url);
    } else if (selectedOption === "users") {
      api(url);
    } else {
      $("#content").empty();
    }
  });
});

const api = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var table = $("<table>");
      var thead = $("<thead>");
      var headers = Object.keys(data[0]);
      var headerRow = $("<tr>");
      headers.forEach(function (header) {
        var th = $("<th>").text(header);
        if (header === "address" || header === "company") {
          var addressHeaders = Object.keys(data[0][header]);
          addressHeaders.forEach(function (addressHeader) {
            var addressTh = $("<th>").text(addressHeader);
            if (addressHeader === "geo") {
              var geoHeaders = Object.keys(data[0][header][addressHeader]);
              geoHeaders.forEach(function (geoHeader) {
                var geoTh = $("<th>").text(geoHeader);
                headerRow.append(geoTh);
              });
            } else {
              headerRow.append(addressTh);
            }
          });
        } else {
          headerRow.append(th);
        }
      });
      thead.append(headerRow);
      table.append(thead);

      var tbody = $("<tbody>");
      data.forEach(function (item) {
        var dataRow = $("<tr>");
        headers.forEach(function (header) {
          var td = $("<td>").text(item[header]);
          if (header === "address" || header === "company") {
            var addressHeaders = Object.keys(item[header]);
            addressHeaders.forEach(function (addressHeader) {
              var addressTd = $("<td>").text(item[header][addressHeader]);
              if (addressHeader === "geo") {
                var geoHeaders = Object.keys(item[header][addressHeader]);
                geoHeaders.forEach(function (geoHeader) {
                  var geoTd = $("<td>").text(
                    item[header][addressHeader][geoHeader]
                  );
                  dataRow.append(geoTd);
                });
              } else {
                dataRow.append(addressTd);
              }
            });
          } else {
            dataRow.append(td);
          }
        });
        tbody.append(dataRow);
      });
      table.append(tbody);

      $("#content").html(table);
    });
};
