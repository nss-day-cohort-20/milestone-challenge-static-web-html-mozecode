/*Create an array to hold your posts
 (at least 2 posts). Each item in the
 array must be an object that contains 
 at a minimum the following information: 
 Title, Copy, Date. Use JavaScript to
  add each post to the DOM.*/

//declare variables to hold copy content for each object
 var article1= "I've found my peoples at last!  This whole experience from interview to acceptance to starting has been one of the most intimidating experiences of my life, but I walked into a class of such generous, brilliant, creative peers that I knew I had chosen my new path well.  I will work my hardest every day to be worthy of this opportunity."
 var article2="So glad for the prework right now.  Our first group project was nerve-wracking, but so heady.  Our website was a sales site for Temporal Tours, a time-travel tour company concerned less with client safety than with financial gain.  We reached for a highly ridiculous version of our real-life experiences.  One of my partners is a former Latin teacher, too! We parlayed our travel disasters into website gold. One of the main challenges in this project is that we're a person down, since one of our team members dropped from the program, but we've stepped up to create a great site, and I've created my first JavaScript magic!  Seeing those cards appear on the page literally made me laugh out loud with joy!  Hard work pays off....I'm also getting a great teaching workout, since we're all in different places with our understanding.  If I can help out my teammates, I'm there with bells on."
 var article3="We presented our second group project today, and the experience crystallized exactly what I need to work on and what I do well.  I get along with everyone, communicate clearly, work my posterior off, but I don't advocate for myself or my ideas well enough yet.  I think we came to a good solution eventually, but it felt like talking to a brick wall at times, and it cost us time we didn't have to waste.  I know my partner probably felt exactly the same, so it'll be something to work on in group projects for me. Our second attempt at a similar format of project also awakened the realization that I was too focused on just getting done and didn't spend enough time being creative with code. The day and a half we had to come up with our idea and execute a 5 or 6 page site complete with js, css, and content just wasn't enough for me to produce the quality of work I'm capable of.  Time crunch and creativity together are another point to work on.  I have to remind myself, 'Don't just do what works, take some chances!' Different work ethics also were a point of difficulty this time around.  Not everyone is willing or able to put in the time necessary, and it almost meant presenting an unfinished product version.  I know I have to focus on gentle prodding, encouragement, and otherwise to help light fires where necessary.  Simmering discontent due to different work styles does not make for the most productive work groups, so I will work on that aspect of my communication in groups."

  let blogPosts = [

  {title:"Terrifying but Exhilarating", copy: article1, date:"5/25/17"},
  
  {title:"First Group Project", copy: article2, date:"5/30/2017"},

  {title:"Project Redux at Breakneck Speed", copy:article3, date:"6/2/2017"}
  
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
					<time>${blogPosts[i].date}</time>
				</footer>

				
			</article>`

	html+= message;
}
printToDiv(html);
}



iterateThroughArray(blogPosts);