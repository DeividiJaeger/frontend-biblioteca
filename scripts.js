        // Adicionar um evento para quando o botão "Adicionar Livro" for clicado
document.getElementById('add-book').addEventListener('click', function() {
    const bookTitle = document.getElementById('book-title').value;
    const authorName = document.getElementById('author-name').value;
    const bookReview = document.getElementById('book-review').value;

    // Criar um novo item de livro na lista
    const bookItem = document.createElement('li');
    bookItem.innerHTML = `
    <h3>${bookTitle}</h3>
    <p>Autor: ${authorName}</p>
    <p>Resenha: ${bookReview}</p>
    `;

    // Adicionar o item de livro à lista de livros
    document.getElementById('book-list-ul').appendChild(bookItem);

    // Limpar os campos do formulário
    document.getElementById('book-title').value = '';
    document.getElementById('author-name').value = '';
    document.getElementById('book-review').value = '';
            
});