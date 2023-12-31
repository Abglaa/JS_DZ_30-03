const menu = {
    coffee: {
        express: 'Эспрессо — это небольшое количество концентрированного кофе (30-40мл), приготовленного в кофемашине путём прохождения через фильтр с молотым кофе горячей воды под давлением. Вкус правильно приготовленного эспрессо поистине великолепен! Эспрессо раскрывает все уникальные оттенки и нотки вкуса различных кофейных зерен.',
        americano: 'Кофе американо — идеальный горячий напиток для тех, кто хотел бы насладиться вкусным эспрессо, но для них он слишком крепкий. Ведь американо — это не что иное, как эспрессо с добавлением горячей воды, точнее, кофе, состоящий из равных частей эспрессо и воды.',
        cappuccino: 'Капучино – итальянский напиток, состоящий из Эспрессо, слоя взбитого молока и слоя молочной пенки. Чашка Капучино быстро придает заряд бодрости, благодаря содержанию кофеина, который не слишком сильно влияет на вкусовые качества напитка.'
    },
    tea: {
        greentea: 'Зеленый чай — это напиток из листьев чайной камелии. Собственно, как и черный чай. Основное их различие в том, что для зеленого чая процесс ферментации минимален, отчего он становится ближе к живому чайному листу. И чем сильнее чай ферментирован, тем темнее его настой и ярче вкус.',
        blacktea: 'Вкус черного чая богатый и гармоничный, объединяющий и терпкость, и сладость.',
    }
}
const question = prompt('coffee or tea')
const question2 = prompt('какой вид напитка')

if (question === 'tea' && question2 === 'greentea' && menu.tea.greentea){
    alert('Всё правильно,мы приняли ваш заказ')
    console.log(menu.tea.greentea)
} else if (question === 'tea' && question2 === 'blacktea' && menu.tea.blacktea){
    alert('Всё правильно,мы приняли ваш заказ')
    console.log(menu.tea.blacktea)
}else if (question === 'coffee' && question2 === 'express' && menu.coffee.express){
    alert('Всё правильно,мы приняли ваш заказ')
    console.log(menu.coffee.express)
}else if (question === 'coffee' && question2 === 'americano' && menu.coffee.americano){
    alert('Всё правильно,мы приняли ваш заказ')
    console.log(menu.coffee.americano)
}else if (question === 'coffee' && question2 === 'cappuccino' && menu.coffee.cappuccino){
    alert('Всё правильно,мы приняли ваш заказ')
    console.log(menu.coffee.cappuccino)
} else if (question !== 'tea' && question !== 'coffee'){
    console.log('Выберите coffee или tea')
} else {
    console.error('Ввыдите правильно нап:coffee-->cappuccino')
}