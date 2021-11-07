var config = {
  apiKey: "AIzaSyBa3aFR0m4ejMzMv2WAUaV52YJ-HxqxxVI",
  authDomain: "mihararyosuke.com",
  projectId: "gesuido-f1ab6"
};
firebase.initializeApp(config);

var strings = {
  en: {
    "class-investigator": "Investigator",
    "class-ronin": "Ronin",
    "class-programmer": "Programmer",
    "level": "Lv. ",
    "elapsed-time-1" : "Elapsed time: approx. ",
    "elapsed-time-2" : " turns",
    "build": "Build: ",
    "id": "ID: "
  },
  ja: {
    "class-investigator": "調査員",
    "class-ronin": "浪人",
    "class-programmer": "プログラマー",
    "level": "Lv. ",
    "elapsed-time-1" : "生存時間: 約 ",
    "elapsed-time-2" : " ターン",
    "build": "ビルド: ",
    "id": "ID: "
  },
}

function l(key) {
  return strings[languageCode][key];
}

function addCOD(data) {
  if (languageCode == undefined || data.player_id == "dev") return;
  let cause_of_death = data['cause_of_death_' + languageCode];
  if (cause_of_death == undefined) cause_of_death = data.cause_of_death;
  if (cause_of_death == undefined) return;
  let row = "<li>" + cause_of_death + "&nbsp;<span>" + data.created_at.toDate().toTwitterRelativeTime(languageCode) + "</span>";
  row += "<ul class=\"sub_list\"><li>";
  if (data.class_name != undefined) {
    row += l("class-" + data.class_name) + " / ";
  }
  row += l("level") + data.survival_level + " / ";
  row += l("elapsed-time-1") + data.elapsed_time / 8 + l("elapsed-time-2") + " / ";
  row += l("build") + data.build + " / ";
  row += l("id") + data.player_id.substring(0, 4) + "********</li></ul></li>";
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