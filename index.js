const posts = [
	{
		name: 'Vincent van Gogh',
		username: 'vincey1853',
		location: 'Zundert, Netherlands',
		avatar: 'images/avatar-vangogh.jpg',
		post: 'images/post-vangogh.jpg',
		comment: 'just took a few mushrooms lol',
		likes: 21,
	},
	{
		name: 'Gustave Courbet',
		username: 'gus1819',
		location: 'Ornans, France',
		avatar: 'images/avatar-courbet.jpg',
		post: 'images/post-courbet.jpg',
		comment: "i'm feelin a bit stressed tbh",
		likes: 4,
	},
	{
		name: 'Joseph Ducreux',
		username: 'jd1735',
		location: 'Paris, France',
		avatar: 'images/avatar-ducreux.jpg',
		post: 'images/post-ducreux.jpg',
		comment: 'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
		likes: 152,
	},
]

// RENDER POST
function renderPost(postData) {
	const mainContainer = document.querySelector('main')
	const userPost = document.createElement('article')
	userPost.classList.add('post', 'container', 'flex', 'flex-column')
	const userPostContent = `
        <header class="post__user-info flex">
            <img class="post__user-avatar" src="${postData.avatar}"
                alt="Avatar of ${postData.name}">
            <div class="flex flex-column">
                <p class="bold-text">${postData.name}</p>
                <p class="post__user-location">${postData.location}</p>
            </div>
        </header>
        <img class="post__user-img" src="${postData.post}"
            alt="Image shared by ${postData.name}">
        <div class="flex flex-column container-2">
            <ul class="post__icons flex fz-0 list-style-none">
                <li><i id="heart-${postData.username}" class="post__icon ti ti-heart"></i></li>
                <li><i class="post__icon ti ti-message-circle"></i></li>
                <li><i class="post__icon ti ti-send"></i></li>
            </ul>
            <p id="likes-${postData.username}" class="bold-text">${postData.likes} likes</p>
            <footer>
                <p><span class="bold-text">${postData.username}</span> ${postData.comment}</p>
            </footer>
        </div>
    `
	userPost.innerHTML += userPostContent
	mainContainer.append(userPost)

	manageLikes(postData.likes, postData.username)
}

for (const post of posts) {
	renderPost(post)
}

// MANAGE LIKES
function manageLikes(numberOfLikes, username) {
	const heartIcon = document.querySelector(`#heart-${username}`)
	const likesEl = document.querySelector(`#likes-${username}`)

	heartIcon.addEventListener('click', () => {
		if (heartIcon.classList.contains('ti-heart-filled')) {
			numberOfLikes -= 1
			likesEl.textContent = `${numberOfLikes} likes`
			heartIcon.classList.remove('ti-heart-filled')
			heartIcon.classList.add('ti-heart')
		} else {
			numberOfLikes += 1
			likesEl.textContent = `${numberOfLikes} likes`
			heartIcon.classList.add('ti-heart-filled')
			heartIcon.classList.remove('ti-heart')
		}
	})
}

// SET CURRENT YEAR IN FOOTER
const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
