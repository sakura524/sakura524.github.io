var g1 = "https://drive.google.com/folderview?id=1iwTHdrwy6ViuNEap--avnfP47zRhguxv";
var g2 = "https://drive.google.com/drive/u/0/folders/14ScTlmV_LdSEre3gW4TTtU2Qtcxxg-ss";
function go(i) {
  if (confirm("Xác nhận chuyển hướng ?")) {
    window.location.assign(i);
    alert('Đang chuyển hướng...')
  } else {
    alert('Đã hủy chuyển hướng.');
  }
}
