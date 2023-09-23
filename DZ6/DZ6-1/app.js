function booksFilter(...books) {
    const uBooks = []
    const otherBooks = []

    for (const book of books){
        if (book.includes('у')){
            uBooks.push(book)
        }else {
            otherBooks.push(book)
        }
    }

    console.log('книги с буквой у',uBooks)
    console.log('остальные книги', otherBooks)

}

booksFilter('Война и мир', 'богатый папа', 'думай и богатей', 'Спеши любить', 'Оно', 'песнь льда и пламени','Внучка','Настройщик','Любовь, смерть и клубника ','Гордость и предубеждение','Мастер и Маргарита','Маленький принц','Портрет Дориана Грея','Hello world','У'.toLowerCase())