function sendBirthdayWishes() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var dataRange = sheet.getDataRange();
    var data = dataRange.getValues();
    
    // Array mapping month numbers to month names
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var todayDayMonth = today.getDate() + " " + months[today.getMonth()];
  
    Logger.log("Today's Date: " + todayDayMonth); // Log today's date for debugging
  
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] === '') {
        continue; // Skip empty rows
      }
      
      var name = data[i][1]; // Adjust column index based on your sheet
      var dobCell = data[i][2]; // Date of Birth column
      var dob;
      
      // Check if dobCell is of type Date
      if (dobCell instanceof Date) {
        dob = dobCell.getDate() + " " + months[dobCell.getMonth()]; // Format DD Month
      } 
      // Check if dobCell is of type string and not empty
      else if (typeof dobCell === 'string' && dobCell !== '') {
        var dobParts = dobCell.split("/");
        if (dobParts.length >= 2) {
          dob = dobParts[0] + " " + months[parseInt(dobParts[1], 10) - 1]; // Format DD Month
        } else {
          continue; // Skip rows with invalid Date of Birth
        }
      } 
      
      else {
        continue;
      }
  
      Logger.log("Checking row " + i + ": " + dob); // Log the date of birth being checked
  
        // Send email if date matches
      if (dob === todayDayMonth) {
        var email = 'bolasax16@gmail.com';  // Email address to send the mail
        var subject = "Happy Birthday " + name + "!";
        var message = "Dear " + name + ",\n\nWishing you a very Happy Birthday! Have a fantastic day!\n\nBest Regards,\nAjay Anand";
  
        //error handling
        Logger.log("Sending email to: " + email + " with subject: " + subject);
  
        // Send email if date matches
        MailApp.sendEmail(email, subject, message);
      }
    }
  }