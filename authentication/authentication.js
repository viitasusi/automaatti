function navigateToATM() {
  console.log('moi');
  if (document.getElementById('pin-input').value === '1234') {
    window.location.href = "../index.html";
  } else {
    window.alert('invalid PIN');
  }
}