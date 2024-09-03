function show_result() {
  let K = parseFloat(document.getElementById("K").value) || 0;
  let M = parseFloat(document.getElementById("M").value) || 0;
  let P = parseFloat(document.getElementById("P").value) || 0;
  let C = parseFloat(document.getElementById("C").value) || 0;
  let B = parseFloat(document.getElementById("B").value) || 0;
  let H = parseFloat(document.getElementById("H").value) || 0;
  let E = parseFloat(document.getElementById("E").value) || 0;

  let total = K + M + P + C + B + H + (E - 25);
  document.getElementById("total").innerText = total;

  let mention;
  if (total >= 427) {
    mention = "A";
  } else if (total >= 380) {
    mention = "B";
  } else if (total >= 332) {
    mention = "C";
  } else if (total >= 286) {
    mention = "D";
  } else if (total >= 237) {
    mention = "E";
  } else {
    mention = "F";
  }
  document.getElementById("mention").innerText = mention;

  let result = total >= 237 ? "បានជាប់" : "បានធ្លាក់";
  document.getElementById("final_result").innerText = result;
}
