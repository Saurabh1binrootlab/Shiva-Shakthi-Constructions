
src="https://smtpjs.com/v3/smtp.js"

// footer contact us working
function sendEmail() {
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "saurabhchaudhary@binrootlab.com",//company mail 
  Password : "11AE3C5859698EC78086F733403C72E57C2B",// and there password or the smtp credentials
  To : "saurabhchaudhary@binrootlab.com",
  From : document.getElementById("email").value,
  Subject : "Enquiry",
  Body : "name:" + document.getElementById("name").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("massage sent successfully")
);
}

