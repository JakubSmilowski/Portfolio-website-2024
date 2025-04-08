var imageSources = [
  ["/assets/project1photo1.png","/assets/Project1photo2.png","/assets/project1photo3.png"],
  ["/assets/project2photo1.png","/assets/Project2photo2.png","/assets/Project2photo3.png"],
  ["/assets/project3photo1.png","/assets/Project3photo2.png"],
  ["/assets/project4photo1.png","/assets/project4photo2.png","/assets/project4photo3.png"],
];
  function changeImage(id, flag) {
    console.log(id,flag);
    currentImangeSources = getImageSrc(id);
    // // get the current image src
    // var currentSrc = document.getElementById("project0-image").src;
    // console.log(currentSrc);

    var fullPath = document.getElementById("projectImage"+id).src;
    var currentSrc = new URL(fullPath).pathname;

    // find the index of the current image src in the array
    var currentIndex = currentImangeSources.indexOf(currentSrc);
    console.log(currentIndex);
    // increment the index to get the next image src
    if (flag == "right"){
      if (currentIndex == 0 ){
        var nextIndex = currentImangeSources.length -1 ;
      }else{
        var nextIndex = (currentIndex - 1) % currentImangeSources.length;
        console.log(nextIndex);

      }
    }else if (flag == "left"){
      var nextIndex = (currentIndex + 1) % currentImangeSources.length;
      console.log(nextIndex);
    }
    // update the image src
    document.getElementById("projectImage"+id).src = currentImangeSources[nextIndex];
    console.log(currentImangeSources[nextIndex]);
  }

function getImageSrc(id) {
  return imageSources[id];
}

