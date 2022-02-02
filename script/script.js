document.addEventListener('DOMContentLoaded', () => {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question')
    const formAnswers = document.querySelector('#formAnswers')
    const nextButton =document.querySelector('#next')
    const prevButton =document.querySelector('#prev')

const questions = [
    {
        question: "Какого цвета бургер?",
        answer: [
            {
                title: 'Стандарт',
                url: './image/burger.png'
            },
            {
                title: 'Черный',
                url: './image/burgerBlack.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Из какого мяса котлета?",
        answer: [
            {
                title: 'Курица',
                url: './image/chickenMeat.png'
            },
            {
                title: 'Говядина',
                url: './image/beefMeat.png'
            },
            {
                title: 'Свинина',
                url: './image/porkMeat.png'
            }
        ],
        type: 'radio'
    },
    {
        question: "Дополнительные ингредиенты?",
        answer: [
            {
                title: 'Помидор',
                url: './image/tomato.png'
            },
            {
                title: 'Огурец',
                url: './image/cucumber.png'
            },
            {
                title: 'Салат',
                url: './image/salad.png'
            },
            {
                title: 'Лук',
                url: './image/onion.png'
            }
        ],
        type: 'checkbox'
    },
    {
        question: "Добавить соус?",
        answer: [
            {
                title: 'Чесночный',
                url: './image/sauce1.png'
            },
            {
                title: 'Томатный',
                url: './image/sauce2.png'
            },
            {
                title: 'Горчичный',
                url: './image/sauce3.png'
            }
        ],
        type: 'radio'
    },

    
]
    


    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block')
        playTest(questions);
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block')
    })

    const playTest = (objectQuestions) => {
        let numberQuestion = 0;
        

        const renderAnswers = (index) => {
            questions[index].answer.forEach((answer) =>{
                const answerItem=document.createElement('div');
                answerItem.classList.add('answers-item', 'd-flex', 'flex-column');
                answerItem.innerHTML= `
                
            <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
            <label for="${answer.title}" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src="${answer.url}" alt="burger">
              <span>${answer.title}</span>
            </label>
            
                `
                formAnswers.appendChild(answerItem);
               
            })
        }

        const renderQuestions = (indexQuestion) => {
            formAnswers.innerHTML=``;
            if(numberQuestion>=0 && numberQuestion <= questions.length -1){
                questionTitle.textContent = `${questions[indexQuestion].question}`;
                renderAnswers(indexQuestion);
                nextButton.classList.remove('d-none')
                prevButton.classList.remove('d-none')
            }
            if(numberQuestion ===0){
                prevButton.classList.add('d-none');
            }
            if(numberQuestion === questions.length -1){
                nextButton.classList.add('d-none');
            }
        
        
    }
    renderQuestions(numberQuestion);

    nextButton.onclick =() =>{ 
        numberQuestion++;  
        renderQuestions(numberQuestion)

    }
    prevButton.onclick =() =>{
        numberQuestion--;
        renderQuestions(numberQuestion)

        
    }
   

 
    
}
}) 