var config = {
  apiKey: "AIzaSyBa3aFR0m4ejMzMv2WAUaV52YJ-HxqxxVI",
  authDomain: "mihararyosuke.com",
  projectId: "gesuido-f1ab6"
};
firebase.initializeApp(config);

function addCOD(data) {
  if (data.player_id == "dev") { return }
  let row = "<li>" + data.cause_of_death + "&nbsp;<span>" + data.created_at.toDate().toTwitterRelativeTime('ja') + "</span>";
  row += "<ul class=\"sub_list\"><li>Lv. " + data.survival_level + " / ";
  row += "生存時間: 約 " + data.elapsed_time / 8 + " ターン / ";
  row += "ID: " + data.player_id.substring(0, 4) + "********</li></ul></li>";
  $("#list").append(row);
}

function onLoad() {
  let db = firebase.firestore();
  let list = new Array();
  db.collection("records").orderBy("created_at", "desc").limit(30).get().then(function (querySnapshot) {
    querySnapshot.forEach( doc => addCOD(doc.data()) )
  })
}

function login() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("logged in");
      onLoad();
    } else {
      firebase.auth().signInAnonymously().catch(function (error) {
        if (error) {
          console.log(error.message);
        }
      });
    }
  });
}

$(document).ready(function () {
  login();
});