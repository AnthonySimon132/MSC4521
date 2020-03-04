<!DOCTYPE html>

<html>
<body>

<h2> What Can javascript do? </h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) Attribute of an image. </p>

<button onclivk="document.getElementById('pic_bulbon').src="file:///C:/Users/16104025/Desktop/pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:200px">

<button onclick="document.getElementById('pic_bulboff').src='file:///C:/Users/16104025/Desktop/pic_bulboff.gif'">Turn off the light</button>

</body>
</html>