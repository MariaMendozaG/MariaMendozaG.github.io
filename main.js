let app = document.getElementById('typewriter');
 app.style.color="#BF2A2A"
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Física y entusiasta del desarrollo frontend.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
