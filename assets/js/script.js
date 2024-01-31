// Start screen to Question screen
document.getElementById('start_game').addEventListener('click', function(){
  document.getElementById('start_screen').style.display = "none"
  document.getElementById('main').style.display = 'flex'
}) 
const questions = [
    {
      question: "What house is Harry in?",
      choices: ["Griffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
      answer: "Griffindor",
    },

    {
      question: "Name the killing curse?",
      choices: ["Lumos", "Expelliarmus", "Avada Kedavra", "Levioso"],
      answer: "Avada Kedavra",
    },

    {
      question: "What is Harrys owl called?",
      choices: ["Hedwig", "Scabbers", "Nagini", "Ted"],
      answer: "Hedwig",
    },

    {
      question: "Who is Draco malfoys dad?",
      choices: ["Sirius", "Dumbledore", "Voldemort", "Lucius"],
      answer: "Lucius",
      },

      {
      question: "what relation was sirius black to Harry?",
      choices: ["GrandFather", "GodFather", "Uncle", "Cousin"],
      answer: "GodFather",
      },

  ]
  