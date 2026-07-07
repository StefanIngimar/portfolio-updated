// var dev = "https://dev.to/cosmicwanderer7";
// var twitter = "https://twitter.com/PrithviYewale";
var linkedin = "https://www.linkedin.com/in/stefan-ingimarsson-679331261/";
// var instagram = "https://www.instagram.com/prithvi_yewale/";
var github = "https://github.com/StefanIngimar";
// var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:stefan.ingimarsson@outlook.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hey, I'm Stefan! 👋</span>`,
  "<br>",
  `<li>🔧 I'm a Software Engineer passionate about fullstack development and UI/UX design.</li>`,
  `<li>💡 Always eager to learn new technologies and build meaningful digital products.</li>`,
  `<li>🧠 Experienced in building responsive websites using Next.js and Tailwind CSS.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out what I’ve built!</li>`,
  `<li>👥 Looking to collaborate on exciting frontend/backend projects.</li>`,
  `<li>📫 Contact: <a href="mailto:stefan.ingimarsson@outlook.com">stefan.ingimarsson@outlook.com</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  // 'dev        <a href="' + dev + '" target="_blank">dev.to/cosmicwanderer7</a>',
  // 'twitter        <a href="' +
  //   twitter +
  //   '" target="_blank">twitter.com/PrithviYewale</a>',
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/stefan-ingimarsson</a>',
  // 'instagram      <a href="' +
  //   instagram +
  //   '" target="_blank">instagram/prithvi_yewale</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/StefanIngimar</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
<span class="command">exit</span>
↳ Close the terminal tab.
</pre></div><br>`,
];
let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<a href="https://github.com/Qrutz/Space-Invading-Unicorns" target="_blank"><span class='underline'>NASA Hackathon</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
Project that was submitted to the NASA Hackathon.
Built With:
- FastAPI
- Tailwind CSS
- Python
</pre>`,

  `<a href="https://github.com/StefanIngimar/fix-my-road" target="_blank"><span class='underline'>Fix My Road</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
University project where we identified road damage using a YOLOv5 model. Model training was done locally and on Kubernetes.
Built With:
- Django
- Vue
- YOLOv5
- Kubernetes
</pre>`,

  `<a href="https://github.com/StefanIngimar/DIT356-Mini-Project-Distributed-Systems-Development" target="_blank"><span class='underline'>Microservice Project</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
A university project where we created a microservice-driven project. The project is an application where patients can book dental appointments, and dentists can handle the bookings.
Built With:
- Vue
- Go
- JavaScript
- Rust
- Tailwind
</pre>`,

  `<a href="https://github.com/StefanIngimar/Steering-Algorithm-DIT639" target="_blank"><span class='underline'>Steering Algorithm</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
University project where we created a steering algorithm for a car.
Built With:
- C++
- Python
- CMake
- Shell Scripting
</pre>`,
  "</div>",
  "<br>",
];
