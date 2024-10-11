var season = prompt("What's your favorite season? (winter, spring, summer, autumn, monsoon)");

// Use if-else statements to display different messages based on user input
if (season === "winter") {
  alert("It's cold and snowy!");
  document.write(` 
    <div class="container-main" style="background-image: url(./cold1.jpg);">
    <h2 class="heading" style="color: black;">Weather Information</h2>
   <br> 
   <div class="main">
 <img src="./cold.jpg" alt="" >
       <div class="container">
         <h3 class="heading2">It's  COLD Today! </h3>
         <p>"May the crisp air and gentle snowflakes of the cold season bring you cozy moments, warm memories, and a heart full of wonder!"</p>
       </div>
     </div>
     </div>`)
} else if (season === "spring") {
  alert("It's mild and sunny!");
  document.write(` 
    <div class="container-main" style="background-image: url(./spring1.jpg);">
    <h2 class="heading" style="color: white;">Weather Information</h2>
   <br> 
   <div class="main">
 <img src="./spring.jpg" alt="" >
       <div class="container" style="background-color: rgba(128, 128, 128, 0.904);">
         <h3 class="heading2">It's mild sunny.</h3>
         <p>"As the warmth of the sun shines brighter, may your heart bloom with joy and your spirit flourish like the vibrant flowers of spring!".</p>
       </div>
     </div>
     </div>`)
} else if (season === "summer") {
  alert("It's hot and humid!");
  document.write(` 
    <div class="container-main" style="background-image: url(./summer1.jpg);">
    <h2 class="heading" style="color: white;">Weather Information</h2>
   <br> 
   <div class="main">
 <img src="./summer.jpg" alt="" >
       <div class="container" style="background-color: rgba(128, 128, 128, 0.904);">
         <h3 class="heading2">It's hot and humid!</h3>
         <p>"May the long, sunny days and starry nights of summer bring you endless adventure, warm smiles, and a heart full of joy and freedom!".</p>
       </div>
     </div>
     </div>`)
} else if (season === "autumn") {
  alert("It's cool and breezy!");
  document.write(` 
    <div class="container-main" style="background-image: url(./autumn.webp);">
    <h2 class="heading" style="color: white;">Weather Information</h2>
   <br> 
   <div class="main">
 <img src="./autumn1.jpg" alt="" >
       <div class="container" style="background-color: rgba(128, 128, 128, 0.904);">
         <h3 class="heading2">It's cool and breezy!</h3>
         <p>"May the long, sunny days and starry nights of summer bring you endless adventure, warm smiles, and a heart full of joy and freedom!".</p>
       </div>
     </div>
     </div>`)
} else if (season === "monsoon") {
  alert("It's rainy and stormy!");
  document.write(` 
    <div class="container-main" style="background-image: url(./autumn.webp);">
    <h2 class="heading" style="color: white;">Weather Information</h2>
   <br> 
   <div class="main">
 <img src="./autumn1.jpg" alt="" >
       <div class="container" style="background-color: rgba(128, 128, 128, 0.904);">
         <h3 class="heading2">It's rainy and stormy!</h3>
         <p>"May the gentle rains and soothing breeze of the monsoon season bring you renewal, refreshment, and a sense of calm, washing away worries and filling your heart with serenity!".</p>
       </div>
     </div>
     </div>`)
} else {
  alert("Invalid season!");
}
