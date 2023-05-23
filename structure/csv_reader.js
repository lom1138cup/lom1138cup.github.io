window.onload = function() {
    // Path to the CSV file
    var csvFile = 'structure/leaguecontent.csv';
  
    // Row and column indices of the desired cell
    var desiredRow = 2; // First row
    var desiredColumn = 1; // First column
  
    // Read the CSV file
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var csvData = xhr.responseText;
        var csvRows = csvData.split('\n');
  
        if (desiredRow < csvRows.length) {
          var rowData = csvRows[desiredRow].split(',');
  
          if (desiredColumn < rowData.length) {
            var desiredCell = rowData[desiredColumn];
  
            // Use the content of the desired cell as desiredText
            var desiredText = desiredCell;
  
            // Find the HTML element with the ID "textContainer"
            var textContainer = document.getElementById("calendar");
  
            // Set the desired text as the HTML content of the element
            textContainer.innerHTML = desiredText;
          }
        }
      }
    };
    xhr.open('GET', csvFile, true);
    xhr.send();
  };
  