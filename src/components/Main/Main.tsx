import './Main.css'

import myPhoto from '../../images/my_photo.png'


function Main() {

    return (
          <section className='main'>
                <div className="main__container">
                    <div className="main__text-container">

                        <h1 className='main__name'>
                            Елена
                        </h1>
                        <h2 className='main__profession'>
                            Фронтенд-разработчик
                        </h2>
                        <p className='main__descrition'>
                            Опыт разработки пользовательских интерфейсов, создания адаптивных и удобных веб-
                            приложений. Участвовала в командных проектах, применяя современные подходы и
                            инструменты. Стремлюсь к профессиональному росту и углублению знаний в области
                            фронтенд-разработки.
                        </p>
                        <ul className='link'>
                            <li >
                                <a className='link__item' href='' target="_blank" rel="noreferrer">
                                    Telegram
                                </a>
                            </li>

                            {/* Придумать как отпралять на почту при нажатии  */}
                            <li>
                                <a className='link__item' href='' target="_blank" rel="noreferrer">
                                    Email
                                </a>
                            </li>
                            <li>
                                <a className='link__item' href='https://github.com/Milenium666' target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </li>
                        </ul>


                    </div>
                    <img className='main__photo' alt='фото разработчика' src={myPhoto} />
                </div>
            </section>
    )
       
 

   


}

export default Main;
