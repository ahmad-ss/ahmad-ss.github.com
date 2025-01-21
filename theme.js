// change link atribute when subject and body change value
function generateSentto(){
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    const mailto = "mailto:ahmadsetiyono2597@gmail.com?subject="+subject+"&body="+body;
    const element = document.getElementById('mailto');
    element.setAttribute('href', mailto);
    console.log(document.getElementById('mailto').getAttribute('href'));
}