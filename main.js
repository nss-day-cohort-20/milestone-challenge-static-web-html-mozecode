/*Create an array to hold your posts
 (at least 2 posts). Each item in the
 array must be an object that contains 
 at a minimum the following information: 
 Title, Copy, Date. Use JavaScript to
  add each post to the DOM.*/

  let blogPosts = [

  {title:"Exhilarated", copy:"Lorem Ipsum.....", date:"5/22/17"},
  
  {title:"Success!", copy:"Lorem Ipsum.....", date:"6/2/2017"}
  
  ];

 var html = "";
  function printToDiv(message){

  	let blogDiv = document.getElementById("blog");
  	blogDiv.innerHTML = message;
  }

function iterateThroughArray(arr){
for (let i= 0; i<blogPosts.length; i++){
	message= `<article class="blogpost">
					<header class="blogheader">
						<h2>${blogPosts[i].title}</h2>
					</header>
					<section class="blogcopy">
						
						<p>	${blogPosts[i].copy}
						</p>
					</section>
				<footer class="blogfooter">Greta Moseley
					<date>${blogPosts[i].date}</date>
				</footer>

				
			</article>`

	html+= message;
}
printToDiv(html);
}



iterateThroughArray(blogPosts);