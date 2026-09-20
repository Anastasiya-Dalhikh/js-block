// Блок 2. Домашнее задание
// У нас есть список постов на сервере. И наша задача отрисовать текст этих постов на странице.
// Но по каким то необъяснимым причинам, нам требуются посты номер 3, 7, 15, 23. Выглядит просто. Но есть нюанс —
// посты должны загружаться в определенном порядке. Сначала 15, потом 23, потом 7 и только потом 3. А если какой-то
// из постов не загрузиться, нам тогда необходимо вывести в консоль ошибку.
// Наша задача должна иметь универсальное решение. В любой момент может потребоваться загрузить другие посты,
// или больше постов, или меньше.
// Реализуйте задачу двумя способами:
// Promise chaining
// Async / await

function loadPost(id){
    return fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        if(!res.ok){
            throw new Error(`Пост ${id} не загружен`);
        }
         return res.json();;   
    })      
}

function renderPost(post) {
    const container = document.querySelector('#posts');

    const article = document.createElement('article');
    const title = document.createElement('h2');
    const body = document.createElement('p');

    title.textContent = post.title;
    body.textContent = post.body;

    article.append(title, body);
    container.append(article);
  }

function loadPostsPromise(ids) {
    let chain = Promise.resolve();

    for(const id of ids){
        chain = chain
        .then(() => loadPost(id))
        .then((post) => renderPost(post));
    }

    return chain;
}

loadPostsPromise([15, 23, 7, 3])
  .catch((error) => {
    console.error(error);
  });


async function loadPostsAsync(ids){

        for(const id of ids){
        const post = await loadPost(id);
        renderPost(post);
        }
}
loadPostsAsync([15, 23, 7, 3])
    .catch(err=>{
        console.error(err);
    });  