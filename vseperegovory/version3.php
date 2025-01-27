<?

$url = 'https://inficomp.ru/anketa/api/project/getprojectsagent.php';

$headers = []; // создаем заголовки

$post_data = [ 
    'id_agent' => 2
];
$post_data = json_encode($post_data);

$curl = curl_init();
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl, CURLOPT_VERBOSE, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true); // true - означает, что отправляется POST запрос

$result = curl_exec($curl);

$events = json_decode($result,true);

?>


<!doctype html>
<html lang="ru">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/itc-slider/itc-slider.css">
    <script src="/itc-slider/itc-slider.min.js" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	  <link href='style-vsep3.css?2' rel='stylesheet'>

    <title>ВСЕПЕРЕГОВОРЫ.РФ </title>
  </head>
  <body>


<!-- modal 1 -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Эффективные переговоры без подготовки</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp1_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Задачи семинара/мастер-класса/тренинга:</p>

<p>
+	 Эффективные переговоры без подготовки<br>
+	 Передать технологию эффективного ведения переговоров без подготовки<br>
+	 Поделиться эффективным инструментом формирования навыка ведения переговоров<br>
+	Формирование навыка эффективного ведения переговоров без подготовки<br>
</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>1.	Как не провалить переговоры без подготовки? <br>
2.	Переговорные позиции восприятия<br>
3.	Технология позиционных переходов<br>
4.	Инструмент по формированию навыка ведения переговоров без подготовки<br>
5.	Ответы на вопросы участников<br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Эффективные переговоры без подготовки',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 1 end -->

<!-- modal 2 -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Как всегда добиваться целей в переговорах</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp2_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Задачи семинара/мастер-класса/тренинга:</p>

<p>
+	 Разобрать основные ошибки в переговорах<br>
+	 Передать систему подготовки к важным переговорам<br>
+	 Познакомить с технологией противодействия манипуляциям<br>
+	Формирование навыка противодействия манипуляциям, сложным переговорам<br>
</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>1.	Фатальные ошибки в переговорах <br>
2.	Подготовка к переговорам по системе «R-21»<br>
3.	Жёсткие переговоры и их последствия<br>
4.	Манипуляции в переговорах и противодействие им<br>
5.	Ответы на вопросы участников<br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Как всегда добиваться целей в переговорах',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 2 end -->

<!-- modal 3 -->
<div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel3">Переговоры в продажах: как продавать больше?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp3_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Задачи семинара/мастер-класса/тренинга:</p>

<p>
+	 Показать уровни продаж и объяснить, как на них работать?<br>
+	 Передать техники и технологии консультативных и экспертных продаж<br>
+	 Расширить границы мышления участников, показать тенденции и перспективы развития продаж на различных уровнях<br>
+	Формирование навыка использования технологий и техник консультативных и экспертных продаж<br>
</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>1.	Уровни продаж и переговоры в продажах <br>
2.	Техники консультационных продаж<br>
3.	Технологии экспертных продаж<br>
4.	Эволюция продаж: как продавать в современных условиях?<br>
5.	Формирование навыка переговоров в продажах уровень PRO<br>
6.	Ответы на вопросы участников<br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры в продажах: как продавать больше?',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 3 end -->

 <!-- modal 4 -->
<div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel4">Переговоры для руководителей</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp4_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+ ТОП менеджеры<br>
+ Линейные руководители<br>

</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>
1. Личный стиль ведения переговоров руководителя<br>
2. Тактика «обоснователя» в коммуникации с сотрудниками<br>
3. Ошибки руководителя, которые ослабляют переговорную позицию<br>
4. Эффективные инструменты и техники в переговорах<br>
5. Тренировка по навыковым картам «Эффективный руководитель»<br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры для руководителей',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 4 end -->

 <!-- modal 5 -->
<div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel5">Управление конфликтами</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp5_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+ Владельцы бизнеса<br>
+ ТОП менеджеры<br>
+ Линейные руководители<br>
+ Сотрудники, взаимодействующие с клиентами и партнёрами<br>
</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>
1. Природа конфликтов и их профилактика<br>
2. Позиции восприятия в переговорах: как остановить развитие конфликта?<br>
3. Концепция переговорного поля: как восстановить взаимоотношения после конфликта?<br>
4. Разрешение конфликтов: плюсы управляемых конфликтов<br>
5. Разбор конфликтных ситуаций (тематика в соответствии с ТЗ) <br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Управление конфликтами',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 5 end -->

 <!-- modal 6 -->
<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel6" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel6">Сложные деловые переговоры</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center carddp3_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+ Владельцы бизнеса<br>
+ ТОП менеджеры<br>
+ Линейные руководители<br>
+ Сотрудники, взаимодействующие с клиентами и партнёрами<br>
</p>
<p class='fw-bold'>Программа семинара/мастер-класса/тренинга:</p>

<p>
1. Ведение переговоров из слабой переговорной позиции<br>
2. Противодействие манипуляциям<br>
3. Как достичь цели в жёстких переговорах?<br>
4. Фатальные ошибки коммуникации, которые приведут к сложным переговорам<br>
5. Тренировка по навыковым картам «Сложные переговоры***»<br>
</p>
<p>Продолжительность: 3-16 академических часов</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Сложные деловые переговоры',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal 6 end -->

<!-- modal p01 -->
<div class="modal fade" id="ModalP1" tabindex="-1" aria-labelledby="ModalLabelP1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP1">Переговоры PRO</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp01_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Описание:</p>

<p>
Курс обучения «Переговоры PRO» состоит из 5 модулей, включающих в себя 33 видео, общей продолжительностью 5 академических часов.

Каждый модуль обучения содержит домашнее задание направленное на закрепление полученной информации и развитие переговорных компетенций. Курс обучения завершается итоговым тестированием. После успешного прохождения тестирования, выдаётся Сертификат установленного образца ВСЕПЕРЕГОВОРЫ.РФ о прохождении курса «Личные переговоры». Для выпускников курса проводится специальный закрытый вебинар с основателем проекта ВСЕПЕРЕГОВОРЫ.РФ , на котором участники могут задать все интересующие их вопросы лично
</p>
<p class='fw-bold'>Программа обучения:</p>

<p>1.	Уровни продаж и переговоры в продажах <br>
2.	Техники консультационных продаж<br>
3.	Технологии экспертных продаж<br>
4.	Эволюция продаж: как продавать в современных условиях?<br>
5.	Формирование навыка переговоров в продажах уровень PRO<br>
6.	Ответы на вопросы участников<br>
</p>
<p>Продолжительность: 5 недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: 24 000 рублей</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры PRO',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p01 end -->

<!-- modal p02 -->
<div class="modal fade" id="ModalP2" tabindex="-1" aria-labelledby="ModalLabelP2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP2">Переговоры для руководителя</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp02_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+	 Руководители всех уровней<br>
+	 Бизнесмены и предприниматели<br>
+	 Потенциальные руководители<br>
</p>
<p class='fw-bold'>Участники научатся:</p>

<p>1.	Выстраивать взаимоотношения с сотрудниками <br>
2.	Управлять работой команды<br>
3.	Делегировать и контролировать задачи<br>
4.	Правильно увольнять сотрудников<br>
5.	Вести переговоры из сильных и слабых переговорных позиций<br>
6.	Выступать публично и презентовать идеи<br>
7.	Проводить эффективные совещания и планёрки<br>
</p>
<p>Продолжительность: 6 недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: 35 000 рублей</p>

<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры для руководителя',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p02 end -->
<!-- modal p03 -->
<div class="modal fade" id="ModalP3" tabindex="-1" aria-labelledby="ModalLabelP3" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP3">Переговоры в продажах</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp03_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+	 Руководители отделов продаж<br>
+	 Менеджеры по продажам<br>
+	 Предприниматели и самозанятые<br>
</p>
<p class='fw-bold'>Участники научатся:</p>

<p>1.	Применять техники консультационных и экспертных продаж <br>
2.	Выстраивать взаимоотношения с клиентами и контрагентами<br>
3.	Психологически настраиваться на сложные переговоры<br>
4.	Отказываться от невыгодных сделок<br>
5.	Разрешать конфликтные ситуации<br>
6.	Продавать и зарабатывать больше<br>
</p>
<p>Продолжительность: 6 недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: 28 000 рублей</p>


<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры в продажах',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p03 end -->
<!-- modal p04 -->
<div class="modal fade" id="ModalP4" tabindex="-1" aria-labelledby="ModalLabelP4" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP4">Я-Медиатор</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp04_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
Слушатели, имеющие высшее профессиональное образование, заинтересованные в получении новых компетенций, приобретении современных методик для решения профессиональных задач. Медиация станет незаменимым дополнением к основному виду деятельности руководителей всех уровней, предпринимателей и бизнесменов. Им подойдут уровни «базовый», «профессионал». Владение медиативными технологиями (технологиями примирения) позволит повысить стрессоустойчивость, укрепит взаимоотношения в коллективе. Для желающих освоить новую профессию необходим уровень «эксперт».

</p>
<p class='fw-bold'>Участники получат знания:</p>

<p>1.	Нормативно-правовой базы в области медиации <br>
2.	Основных задач и принципов медиации<br>
3.	Алгоритм действий при работе со сложными случаями<br>
4.	О системе восстановительных практик: восстановление человеческих взаимоотношений, восстановление способности к взаимопониманию<br>
5.	О методиках проведения переговорного процесса<br>
6.	О методиках разрешения конфликтов и споров<br>
7.	Научатся проводить медиацию<br>
8.	Овладеют терминологией дисциплины<br>
9.	Овладеют техниками (активного (эмпатического) слушания, понимания механизма работы эмоций человека, управления эмоциональным состоянием) и организационными схемами деятельности, способами конструктивной коммуникации<br>
10.	Получат ответы на вопросы: Как научиться слушать и слышать? Как научиться управлять своими эмоциями? Как разобраться в конфликтной ситуации? Как эффективно провести переговоры? Как провести беседу с участниками конфликта?<br>
</p>
<p>Продолжительность: 4 -6*-8** недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: «базовый»-14000 Р/ «мастер» *-28000 Р / «эксперт»**- 56000Р</p>


<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Я-Медиатор',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p04 end -->
<!-- modal p05 -->
<div class="modal fade" id="ModalP5" tabindex="-1" aria-labelledby="ModalLabelP5" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP5">Эффективные переговоры онлайн</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp05_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+	 Бизнесмены и предприниматели<br>
+	 Руководители и менеджеры по продажам<br>
+	 Работодатели и соискатели<br>
+	 Фрилансеры и самозанятые<br>
</p>
<p class='fw-bold'>Участники научатся:</p>

<p>1.	Готовиться к онлайн переговорам <br>
2.	Достигать целей в сложных переговорах<br>
3.	Отказываться от невыгодных сделок<br>
4.	Психологически настраиваться на сложные переговоры<br>
5.	Грамотно фиксировать договорённости<br>
6.	Узнают лайфхаки, техники ведения переговоров<br>
7.	Формировать навык удалённого общения<br>
</p>
<p>Продолжительность: 6 недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: 24 000 рублей</p>


<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Эффективные переговоры онлайн',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p05 end -->
<!-- modal p06 -->
<div class="modal fade" id="ModalP6" tabindex="-1" aria-labelledby="ModalLabelP6" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelP6">Переговоры без подготовки</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <div class='row'>
		<div class='col-lg-6 align-self-center cardp06_bg'></div>
		<div class='col-lg-6'><p class='fw-bold'>Для кого:</p>

<p>
+	 Бизнесмены и предприниматели<br>
+	 Руководители и менеджеры по продажам<br>
+	 Работодатели и соискатели<br>
+	 Фрилансеры и самозанятые<br>
</p>
<p class='fw-bold'>Участники научатся:</p>

<p>1.	Эффективно вести переговоры без подготовки <br>
2.	Выбирать оптимальные позиции восприятия в переговорах без подготовки<br>
3.	Вести переговоры из сильных, слабых и неопределённых переговорных позиций<br>
4.	Распознавать манипуляции и работать с ними<br>
5.	Создавать сильные аргументы и отрабатывать аргументы оппонента<br>
6.	Использовать инструменты по формированию навыка ведения переговоров<br>
</p>
<p>Продолжительность: 6 недель (онлайн)</p>
<p>Доступ к обучающим материалам и навыковым картам: 12 месяцев</p>
<p>При успешном прохождении обучения, 
выдаётся диплом о повышении квалификации государственного образца</p>
<p>Стоимость: 28 000 рублей</p>


<form onsubmit="return false;">
<input class="form-control form-control-lg mb-3 rounded-0" type="text" placeholder="Ваше имя" aria-label="Ваше имя">
<input class="form-control form-control-lg mb-3 rounded-0" type="tel" placeholder="Ваш номер телефона" aria-label="Ваш номер телефона">
<button onclick="sendRequest('Переговоры без подготовки',this)" class='btn btn-lg bg-darkred px-4 py-2 text-uppercase text-white rounded-0 w-100'>Отправить заявку</button>
</form>

</div>
		</div>
      </div>
    </div>
  </div>
</div>
<!-- modal p06 end -->

<!-- modal review -->
<div class="modal fade" id="ModalMail" tabindex="-1" aria-labelledby="ModalLabelMail" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelMail">Письмо</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
Текст письма
      </div>
    </div>
  </div>
</div>
<!-- modal review end --> 
<!-- modal blagmail -->
<div class="modal fade" id="ModalBlagMail" tabindex="-1" aria-labelledby="ModalLabelBlagMail" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelBlagMail">Благодарственные письма</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        
      <div class="itc-slider" data-slider="itc-slider">
        <div class="itc-slider-wrapper">
          <div class="itc-slider-items">
            <div class="itc-slider-item">
              <div class='blagmail1 h-100vh'></div>
            </div>
            <div class="itc-slider-item">
              <div class='blagmail2 h-100vh'></div>
            </div>
            <div class="itc-slider-item">
              <div class='blagmail3 h-100vh'></div>
            </div>
            <div class="itc-slider-item">
              <div class='blagmail4 h-100vh'></div>
            </div>
            <div class="itc-slider-item">
              <div class='blagmail5 h-100vh'></div>
            </div>
          </div>
        </div>
        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
        <button class="itc-slider-btn itc-slider-btn-prev"></button>
        <button class="itc-slider-btn itc-slider-btn-next"></button>
      </div>

      </div>
    </div>
  </div>
</div>
<!-- modal blagmail end -->



<header class='head text-white'>

<div class='videobg'>
<iframe src="https://www.youtube.com/embed/7k2zUIi8dYg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&fs=0&iv_load_policy=3&loop=1&showinfo=0&playlist=7k2zUIi8dYg" frameborder="0" allowfullscreen></iframe>

<div class='container-fluid container-xxl'>

<div class='d-xl-inline-block m-auto logotype mt-0 mt-lg-4 mt-xl-0 py-5 py-xl-0 align-middle'></div>

<div class='d-xl-inline-block mb-1 text-center mt-5'>
<div class='px-3 mb-4 mb-xl-1  d-inline-block menu-head align-middle'>
<a href='#corpclient' class='text-decoration-none text-white m-link'>Корпоративное обучение</a>
</div>
<div class='px-3 mb-4 mb-xl-1  d-inline-block menu-head align-middle'>
<a href='#indiclient' class='text-decoration-none text-white m-link'>Индивидуальное обучение</a>
</div>
<div class='px-3 mb-4 mb-xl-1 d-inline-block menu-head align-middle'><a href='#accprog' class='text-decoration-none text-white m-link'>
Аккредитованные программы</a>
</div>
<div class='px-3 mb-4 mb-xl-1 d-inline-block menu-head align-middle'><a href='/inforg' class='text-decoration-none text-white m-link'>
Сведения об образовательной организации</a>
</div>
</div>

<div class='float-xl-end pt-5 tel text-center text-xl-end fs-5'>
<a class='btn btn-red-wind text-white rounded-0 d-none d-xl-block ms-xl-5 px-5 mb-4' target="_blank" href="https://isbusiness.ru/">Войти</a>
<a class='text-white text-decoration-none fw-bold' href="tel:+7(495)414-25-18">+7 (495) 414-25-18</a><br><a class='text-white' href='mailto:info@vseperegovory.ru'>info@vseperegovory.ru</a>
</div>

<div class='d-lg-flex block-downed'>

<div class='social pt-4 pt-sm-5 d-xl-inline-block text-center mt-4 text-xl-start float-xl-start'>
<a href='https://vk.com/vseperegovoryrf' target="_blank"><div class='vk-w mx-3 mx-xl-0 py-4 d-inline-block d-xl-block'></div></a>
<a href='https://t.me/VseperegovoryBot' target="_blank"><div class='tg-w mx-3 mx-xl-0 py-4 d-inline-block d-xl-block'></div></a>
<a href='https://rutube.ru/channel/47637273' target="_blank"><div class='r-w mx-3 mx-xl-0 py-4 d-inline-block d-xl-block'></div></a>
</div>

<div class='fw-bold stanusp2 ps-xl-4 text-center text-xl-start d-lg-inline-block text-secondary-emphasis'>
PRO
</div>

<div class='fw-bold pereprod ps-1 pt-4 pt-xl-5 mt-lg-3 mt-xl-5 text-center text-xl-start d-lg-inline-block text-uppercase'>
Переговоры<br>Продажи
</div>

</div>


</div>
</div>

</header>


<!-- right menu start -->
<button id="burger" style="transition:0.5s; transform: translate(0, -60px)" class='btn btn-lg btn-red-wind btn-red-wind-menu text-white rounded-0 mx-2 px-3 py-3' type="button" onclick="canvasRigth.show()"></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
  </div>
  <div class="offcanvas-body px-5">
    <div class='logotype-foot'></div>
  <p class='pt-4'><a  onclick="openUrlCanvasRight('corpclient')" class='text-decoration-none text-black m-link'>Корпоративное обучение</a></p>
	<p class='pt-4'><a  onclick="openUrlCanvasRight('indiclient')" class='text-decoration-none text-black m-link'>Индивидуальное обучение</a></p>
	<p class='pt-4'><a  onclick="openUrlCanvasRight('accprog')" class='text-decoration-none text-black m-link'>Аккредитованные программы</a></p>
	<p class='pt-4'><a  onclick="openUrlCanvasRight('/inforg')" class='text-decoration-none text-black m-link'>Сведения об образовательной организации</a></p>
  </div>
</div>
<!-- right menu end -->

<!-- navbar -->
<div id="navbar" style="transition:0.5s; transform: skew(-12deg, 0deg) translate(0, -60px)" class='d-none d-xl-block topmenu bg-white'>
<div class='container-xxl'>
<div class='d-lg-inline-block m-auto mt-3 logotype-foot'></div>
<!--<div class='d-lg-inline-block text-center align-top'>
<div class='px-4 ms-4 mt-3 d-inline-block'>
<a href='#progrOb' class='text-decoration-none text-black'>Программы обучения</a>
</div>
<div class='px-4 ms-4 mt-3 d-inline-block'>
<a href='#corpclient' class='text-decoration-none text-black'>Деловые переговоры</a>
</div>
<div class='px-4 mt-3 d-inline-block'><a href='#events' class='text-black text-decoration-none'>
Мероприятия</a>
</div>
</div>-->
<div class='float-lg-end mt-2 me-4 text-center fs-5 head-right-padding'>
<a href="tel:+74954142518" class='text-black d-inline-block pe-5 align-middle'>
+7 (495) 414-25-18
</a>
<a href='https://isbusiness.ru/' target="_blank" class='text-decoration-none text-danger align-middle fs-6 me-5 me-xxl-0 pe-5 pe-xxl-0'>Войти в кабинет</a>
</div>
</div>
</div>
<!-- end navbar -->


<main>

<div class='container'>


<section id='events' class='mb-4 position-relative'>

<div class='py-5 ps-lg-5 fs-1 fw-bold px-3 text-center'>Мероприятия</div>

<div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class='event1 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://isbusiness.ru/project/59' target='_blank' class='text-decoration-none'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
    <div class="carousel-item">
      <div class='event2 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://isbusiness.ru/project/22' target='_blank' class='text-decoration-none'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
    <div class="carousel-item">
      <div class='event3 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://isbusiness.ru/project/60' target='_blank' class='text-decoration-none'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
	<div class="carousel-item">
      <div class='event4 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://isbusiness.ru/project/51' target='_blank' class='text-decoration-none'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
    <div class="carousel-item">
      <div class='event5 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://isbusiness.ru/project/51' target='_blank' class='text-decoration-none'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
    <div class="carousel-item">
      <div class='event6 event-carousel'>
      <div class="carousel-caption d-none d-md-block">
        <a href='https://businessforesight.ru/' target='_blank' class='text-decoration-none event-carousel d-md-block'><p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 event-text-shadow eventtitle text-white text-wrap'></p>
        <p class='text-wrap event-text-shadow eventdesc text-white ps-sm-2 ps-md-0'></p></a>
      </div>
	  </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!--
<div id='events_sel' class='px-lg-5 overflow-auto text-nowrap scroll-hide'>

<?
for ($i=0; $i < count($events); $i++) { 
  ?>
    <div class='eventblock d-md-inline-block ms-3 ms-lg-0 me-3'>
      <a href='https://isbusiness.ru/project/<? echo $events[$i]["id"]; ?>' target='_blank'>
      <div style="background: url(<? echo $events[$i]["images"]; ?>) no-repeat center;height: 295px;
background-size: contain !important;" class=''>
      </div>
      <p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 eventtitle text-wrap'><? echo $events[$i]["name"]; ?></p>
      <p class='eventdesc ps-sm-2 ps-md-0'>Конференция состоится <? echo $events[$i]["date_time_start"]; ?> (MSK)</p></a>
      </div>
  <?
}
?>

<div class='eventblock d-md-inline-block ms-3 ms-lg-0 me-3'>
<a href='https://isbusiness.ru/project/59' target='_blank'><div class='event1'>
</div>
<p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 eventtitle text-wrap'>Zoom-конференция «Манипуляции в переговорах»</p>
<p class='eventdesc text-wrap ps-sm-2 ps-md-0'>Конференция состоится 21.10.2024 в 12:00 (MSK)</p></a>
</div>

<div class='eventblock d-md-inline-block mx-3'>
<a href='https://isbusiness.ru/project/22' target='_blank'><div class='event2'>
</div>
<p class='pt-3 pb-2 pb-sm-0 mb-0 ps-sm-2 ps-md-0 eventtitle text-wrap'>ZOOM-конференция «Техники ведения переговоров»</p>
<p class='eventdesc text-wrap ps-sm-2 ps-md-0'>Конференция состоится 02.11.2024 в 12:00 (MSK)</p></a>
</div>

<div class='eventblock d-md-inline-block mx-3'>
<a href='https://isbusiness.ru/project/60' target='_blank'><div class='event3'>
</div>
<p class='pt-3 pb-2 pb-sm-0 mb-0 ps-sm-2 ps-md-0 eventtitle text-wrap'>ZOOM-конференция «Техники ведения переговоров»</p>
<p class='eventdesc text-wrap ps-sm-2 ps-md-0'>Конференция состоится 07.12.2024 в 12:00 (MSK)</p></a>
</div>

<div class='eventblock d-md-inline-block mx-3'>
<a href='https://isbusiness.ru/project/51' target='_blank'><div class='event4'>
</div>
<p class='pt-3 pb-2 pb-sm-0 mb-0 ps-sm-2 ps-md-0 eventtitle text-wrap'>ZOOM-конференция «Техники ведения переговоров»</p>
<p class='eventdesc text-wrap ps-sm-2 ps-md-0'>Конференция состоится 28.12.2024 в 12:00 (MSK)</p></a>
</div>

</div>-->

</section>


<section class='pt-lg-5 position-relative'>

<div class='fs-1 fw-bold text-center pb-md-4'>Отзывы</div>
<div class='pb-4 text-center line-scroll'>



<!--<div class='arrows mx-5 my-4 d-none d-md-block pb-1'>
<div onclick="document.getElementById('review_sel').scrollTo(
{  
left: document.getElementById('review_sel').scrollLeft-Number(document.getElementById('review_sel').scrollWidth/2),  
behavior: 'smooth'}
);" class='d-inline-block arrowl position-absolute start-0'></div>
<div onclick="document.getElementById('review_sel').scrollTo(
{  left: Number(document.getElementById('review_sel').scrollWidth/2),  behavior: 'smooth',}
);" class='d-inline-block arrowr position-absolute end-0'></div>
</div>-->

<!--<div id='review_sel' class='px-lg-5 overflow-auto text-nowrap scroll-hide'>-->

<!--<?
for ($i=0; $i < count($review); $i++) { 
  ?>
    <div class='eventblock d-md-inline-block ms-3 ms-lg-0 me-3'>
      <a href='https://isbusiness.ru/project/<? echo $review[$i]["id"]; ?>' target='_blank'>
      <div style="background: url(<? echo $review[$i]["images"]; ?>) no-repeat center;height: 295px;
background-size: contain !important;" class=''>
      </div>
      <p class='pt-3 pb-2 mb-0 pb-sm-0 ps-sm-2 ps-md-0 eventtitle text-wrap text-white'><? echo $review[$i]["name"]; ?></p>
      <p class='eventdesc ps-sm-2 ps-md-0 text-white'>Конференция состоится <? echo $review[$i]["date_time_start"]; ?> (MSK)</p></a>
      </div>
  <?
}
?> -->

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/957cb4051d86aaa0d8b989ecd97ff0cb/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/f2747df9aa3e861c50bcc4684d62873a/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/9c1b503d528b4d72eedf2f59b21d14f3/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/98696bfb93924f0aabb5ee9aedc5d3b7/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/ab307c07e8f326062cb66161df7ece44/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/0f11971e984c4a67c4a57efaab0edab8/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/86ebcb19d4ae54d8c6c327d2c92c0963/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/19cdcb7db09ef945d5cddae6e4800c19/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/6d581b329997dbff497a1f479c579f2e/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/987ebf59fb02ef61b2484b881e56a897/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/8c57ab47d905f26999d19d788a9c5970/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/6df204d227b1f0635bacc2a6c7a8b60f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/3f651545704f2db027e1633ade6c5c6c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/3598113a5f7726219231b5a42fc223e2/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/72ce1de01bf072ac8ec759049393c1b2/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/88d6902a5f3edbc01fdceee5e676be8c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/206211e80bb8e8938fe51b71f48f12bf/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/b9cba98192f16498fb750a881eac5285/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/e838785b8661d11743cdafc94f4012ff/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/1aa232730314f46725af9e65fdc7aa32/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/a44670784910eaed44e54dc5cfd9ccc3/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/d442b9a44e68b41c96084121ce87bc88/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/f2747df9aa3e861c50bcc4684d62873a/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/69fb7a3b57c4a3fba7b378d27888a301/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/1d7b19ddc33a8aec8d3913fd087da075/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/f882e8defa49507be619517e91e4fe87/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/3d5023b1c1c0b4ffe7f13fd6df6fad56/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/d8d934d90b1d11e12511131bd93e6538/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/5aee4d84bc1393826e020e8cd223c1eb/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/304333e5874ffb96646b8a5bf877eb80/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/c9845b09a5e4c81227ec616e09ee68ad/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/584a7358b2b760fdcad9d3fd4d5c065f/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/81a8dd687583051d4ebf9c5e593715e2/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/7a4eb5c5d3125f08840eaeaa65b30d12/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/5811a3f2c584cfc0be873b8a6164d313/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
  <iframe width="210" height="120" src="https://rutube.ru/play/embed/128452aea4adb30ff9d01d469d36951b/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='reviewblock d-md-inline-block my-4 my-md-1 mx-0 mx-md-1'>
<div class='review' data-bs-toggle="modal" data-bs-target="#ModalReview">
<iframe width="210" height="120" src="https://rutube.ru/play/embed/e72e7c5283011c8561fb962028dfb594/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>


<!--</div>-->

<!--<div class='collapse reviewinfo mx-5' id='review1'>
text images 1<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>
</div>
<div class='collapse reviewinfo mx-5' id='review2'>
text images 2<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>
</div>
<div class='collapse reviewinfo mx-5' id='review3'>
text images 3<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>
</div>
<div class='collapse reviewinfo mx-5' id='review4'>
text images 4<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>text images<br>
</div>-->

</div>

</section>

<section class='p-lg-5' id='impereg'>

<div class='fs-1 fw-bold'>Жизнь — это постоянные переговоры</div>
<div class='py-5'>
<div class='row'>
<div class='col-lg-8'>
Вся наша жизнь состоит из переговоров: построение отношений с друзьями, создание семьи, взаимоотношения в коллективе, общение с клиентами, ведение бизнеса.
</div>
<div class='col-lg-4'>
<button class='btn bg-darkred mt-4 mt-lg-0 px-4 py-2 text-uppercase text-white rounded-0 float-lg-end'>
О переговорах
</button>
</div>
</div>
</div>

<div class='row g-0'>
<div class='col-lg-6 bg-black'>
<iframe width="100%" height="100%" src="https://rutube.ru/play/embed/012c7d205d8c55e636fbc326f7becd7e/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
<div class='col-lg-6'>
<div class='startteach p-5 text-white'>
<p>Наше положение в обществе и успешность, зависит от способности выстраивать коммуникации с людьми и умения вести переговоры.</p>
<p>Каждый из нас получает то, о чем смог договориться. Обучаясь вести переговоры — ты учишься добиваться того, чего хочешь!</p>
<div class='d-lg-inline-block mt-4'>
<a href="https://isbusiness.ru/" target="_blank" class='btn btn-lg btn-red-wind me-4 px-5 align-top text-white rounded-0'>Начать обучение</a>
</div>
<div class='d-lg-inline-block mt-4 align-top'>
<i>Зарегистрируйся и открой<br class='d-none d-lg-block'> доступ к информации</i>
</div>

</div>
</div>
</div>

</section>


<section class='px-lg-5 py-5' id='corpclient'>
<div class='fs-1 fw-bold pb-5'>Корпоративное обучение</div>

<div class='row'>
<div class='col-lg-6 text-center order-last order-lg-first'>
Почему корпоративное обучение неэффективно? Ошибок может быть несколько, о них рассказывается в этом видео. <br>
<br>
Если вы заинтересованы в эффективном корпоративном обучении в направлении: построение межличностных коммуникаций, эффективных переговоров и активных продажах, запишитесь на бесплатную консультацию. Мы поможем вам ответить на сложные и важные вопросы и грамотно составить техническое задание!
<a href='#corptech' class='text-decoration-none'><button class='btn btn-red-wind text-white rounded-0 px-4 fs-5 d-block my-4 mx-auto'>Посмотреть перечень программ</button></a>
</div>
<div class='col-lg-6 order-first order-lg-last'>
<iframe width="100%" height="100%" src="https://rutube.ru/play/embed/141fb1d7b8fcdf7ec665fe01ce711ce5/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
</div>

<div class='row row-cols-lg-3 g-4 pt-5 mt-lg-4 text-center' id='corptech'>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal1"><div class='col'><div class='p-4 bg-light carddp1 card carddp1_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal2"><div class='col'><div class='p-4 bg-light carddp2 card carddp2_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal3"><div class='col'><div class='p-4 bg-light carddp3 card carddp3_bg rounded-0 fs-4'></div></div></a>

<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal4"><div class='col'><div class='p-4 bg-light carddp4 card carddp4_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal5"><div class='col'><div class='p-4 bg-light carddp5 card carddp5_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal6"><div class='col'><div class='p-4 bg-light carddp6 card carddp6_bg rounded-0 fs-4'></div></div></a>
</div>
</section>


<section class='px-lg-5 py-5' id='indiclient'>
<div class='fs-1 fw-bold pb-sm-5'>Индивидуальное обучение</div>

<div class='row'>
<div class='col-lg-6'>
<iframe width="100%" height="100%" src="https://rutube.ru/play/embed/1c2d15f8b5796cbadaf3c3335aa7764c/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
<div class='col-lg-6 text-center'>
В XXI веке безграмотным будет считаться не тот, кто не умеет читать и писать, а тот кто не умеет учиться и переучиваться. Вкладывайтесь в своё развитие, именно это поднимет вашу ценность на рынке труда. Если вы готовы инвестировать в своё образование, рекомендуем заполнить заявку на обучение. С вами свяжется наш специалист, который поможет определиться с выбором обучающей программы. <br>
<br>
Для всех кто заполнит заявку, мы подарим электронную версию книги "Переговоры PRO. Просто о сложном", это поможет пройти вопросы синхронизации и понять, действительно ли вы хотите обучаться в нашем центре. В книге вы найдете ответы на множество вопросов о коммуникации и переговорах.
<a href='#inditech' class='text-decoration-none'><button class='btn btn-red-wind text-white rounded-0 px-4 fs-5 d-block my-4 mx-auto'>Посмотреть перечень программ</button></a>
</div>
</div>

<div class='row row-cols-lg-3 g-4 pt-5 mt-lg-4 text-center' id='inditech'>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP1"><div class='col'><div class='p-4 bg-light cardp1 card cardp01_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP2"><div class='col'><div class='p-4 bg-light cardp2 card cardp02_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP3"><div class='col'><div class='p-4 bg-light cardp3 card cardp03_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP4"><div class='col'><div class='p-4 bg-light cardp4 card cardp04_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP5"><div class='col'><div class='p-4 bg-light cardp5 card cardp05_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP6"><div class='col'><div class='p-4 bg-light cardp6 card cardp06_bg rounded-0 fs-4'></div></div></a>
</div>
</section>


<section class='px-lg-5 py-5' id='accprog'>
<div class='fs-1 fw-bold pb-2'>Аккредитованные программы</div>
<div class='fs-5 fw-bold pb-5'>Программы, акредитованные Министерством Экономического развития РФ</div>
<div class='row'>
<div class='col-lg-6 text-center position-relative'>
  <iframe width="100%" height="275" src="https://rutube.ru/play/embed/3127573b3c7b8fcfc2e0bf4c0098ecaa/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
<a href="https://youtu.be/H6ZUdUmJ9xg" class='btn btn-lg btn-red-wind me-4 px-5 align-top text-white rounded-0' target="_blank">Информационная система Isbusiness</a>
<h5 class='my-4'>Благодарственные письма</h5>

<div class='blag_arrows mx-5 my-2 d-md-block'>
<div onclick="document.getElementById('blagmail_sel').scrollTo(
{  
left: document.getElementById('blagmail_sel').scrollLeft-Number(document.getElementById('blagmail_sel').scrollWidth/2),  
behavior: 'smooth'}
);" class='d-inline-block arrowl me-3 position-absolute start-0 ms-5'></div>
<div onclick="document.getElementById('blagmail_sel').scrollTo(
{  left: Number(document.getElementById('blagmail_sel').scrollWidth/2),  behavior: 'smooth',}
);" class='d-inline-block arrowr position-absolute end-0 me-5'></div>
</div>


<div id='blagmail_sel' class='px-lg-5 overflow-auto text-nowrap scroll-hide my-4 position-relative display-flex'>

<?
for ($i=0; $i < count((array)$blagmail); $i++) { 
  ?>
    <div class='blagmail d-md-inline-block ms-3 ms-lg-0 me-3'>
      <a href='https://isbusiness.ru/project/<? echo $blagmail[$i]["id"]; ?>' target='_blank'>
      <div style="background: url(<? echo $blagmail[$i]["images"]; ?>) no-repeat center;height: 295px;
background-size: contain !important;" class=''>
      </div>
      </div>
  <?
}
?>

<div class='blagmail d-md-inline-block ms-3 flex00'>
<div class='blagmail1' data-bs-toggle="modal" data-bs-target="#ModalBlagMail">
</div>
</div>

<div class='blagmail d-md-inline-block mx-3 flex00'>
<div class='blagmail2' data-bs-toggle="modal" data-bs-target="#ModalBlagMail">
</div>
</div>

<div class='blagmail d-md-inline-block mx-3 flex00'>
<div class='blagmail3' data-bs-toggle="modal" data-bs-target="#ModalBlagMail">
</div>
</div>

<div class='blagmail d-md-inline-block mx-3 flex00'>
<div class='blagmail4' data-bs-toggle="modal" data-bs-target="#ModalBlagMail">
</div>
</div>

<div class='blagmail d-md-inline-block mx-3 flex00'>
<div class='blagmail5' data-bs-toggle="modal" data-bs-target="#ModalBlagMail">
</div>
</div>

</div>

</div>

<div class='col-lg-6 text-center'>
<a href='Delovye_peregovory.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Деловые переговоры</div></div></a>
<a href='Biznes-perezagruzka.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Бизнес-перезагрузка</div></div></a>
<a href='Bystryi_774_start_v_biznese.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Быстрый старт в бизнесе</div></div></a>
<a href='delovaya_igra_INVESTOR.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Деловая игра «Инвестор»</div></div></a>
<a href='Turnir_po_delovym_peregovoram.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Турнир по деловым переговорам</div></div></a>
</div>
</div>
</section>


<section class='px-lg-5 py-5' id='indiclient'>
  <div class='fs-1 fw-bold pb-sm-5'>Сведения об образовательной лицензии</div>
  <div class='row'>
    <div class='col-lg-6 mb-4'>
      <h3 class="mb-4">Основные сведения</h3>
      <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ЦЕНТР ОБУЧЕНИЯ ПЕРЕГОВОРАМ "ВСЕПЕРЕГОВОРЫ" (ЦОП “ВСЕПЕРЕГОВОРЫ”)</p>
      <p>Дата создания - 20.02.2023</p>
      <p>Учредитель: БАЛИКОВ РУСЛАН РАФИКОВИЧ</p>
      <p>Адрес: 105066, Г.МОСКВА, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ БАСМАННЫЙ, УЛ. НИЖНЯЯ КРАСНОСЕЛЬСКАЯ, Д. 35 СТР. 9, КОМ. 23</p>
      <p>Контактный телефон: 
        <a href="tel:+7 (495) 414-25-18">+7 (495) 414-25-18</a>  
      </p>
      <p>Электронная почта:
        <a href="mailto:info@vseperegovory.ru">info@vseperegovory.ru</a>
      </p>
      <p>Соц сети: 
        <a href="https://vk.com/vseperegovoryrf?offset=10&own=1" target="_blank">ВК</a>
        <a href="https://t.me/VseperegovoryBot" target="_blank">Telegram</a>
        <a href="https://rutube.ru/channel/47637273/" target="_blank">Rutube</a>
      </p>
    </div>
    <div class='col-lg-6 mb-4'>
      <div class='mb-4'>
        <h3 class="mb-4">Руководство. Педагогический (научно-педагогический) состав</h3>
        <p>Генеральный директор: Баликов Руслан Рафикович</p>
        <p>Контактный телефон:
          <a href="tel:+7(495)414-25-18">+7 (495) 414-25-18</a>
        </p>
        <p>Электронная почта: 
          <a href="mailto:info@vseperegovory.ru">info@vseperegovory.ru</a>
        </p>
      </div>
      <div>
        <h3 class="mb-4">Материально-техническое обеспечение и оснащенность образовательного процесса</h3>
        <p>Онлайн обучение проходит на платформе: 
          <a href="https://isbusiness.ru">https://isbusiness.ru</a>
        </p>
      </div>
    </div>
  </div>

  <div class='row'>
    <div class='col-lg-12 mb-4'>
      <h3 class="mb-4">Документы</h3>
      <div class='text-center'>
      <a href='doc/Положение о порядке перевода_отчисления и восстановления обучающихся.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Положение о порядке перевода_отчисления и восстановления обучающихся</div></div></a>
      <a href='doc/Положение о порядке предоставления платных образовательных услуг.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Положение о порядке предоставления платных образовательных услуг</div></div></a>
      <a href='doc/Положение о режиме занятий обучающихся.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Положение о режиме занятий обучающихся</div></div></a>
      <a href='doc/Положение об аттестационной комиссии.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Положение об аттестационной комиссии</div></div></a>
      <a href='doc/Правила внутреннего распорядка.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Правила внутреннего распорядка</div></div></a>
      <a href='doc/Реестровая выписка о наличии образовательной лицензии ЦОП ВСЕПЕРЕГОВОРЫ.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Реестровая выписка о наличии образовательной лицензии ЦОП ВСЕПЕРЕГОВОРЫ</div></div></a>
      <a href='doc/Свидетельство о постановке на учет ЦОП ВСЕПЕРЕГОВОРЫ.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Свидетельство о постановке на учет ЦОП ВСЕПЕРЕГОВОРЫ</div></div></a>
      <a href='doc/Устав ЦОП ВСЕПЕРЕГОВОРЫ.pdf' target="_blank" class='text-decoration-none text-black'><div class='col'><div class='p-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Устав ЦОП ВСЕПЕРЕГОВОРЫ</div></div></a>
      </div>
    </div>
  </div>
  <div class='row'>
    <div class='col-lg-6 mb-4'>
      <h3 class="mb-4">Платные образовательные услуги</h3>
    </div>
    <div class='col-lg-6 mb-4'>
      <h3 class="mb-4">Финансово-хозяйственная деятельность</h3>
    </div>
  </div>
  <div class='row'>
    <div class='col-lg-6 mb-4'>
      <h3 class="mb-4">Доступная среда</h3>
    </div>
  </div>
</section>


</div>

</main>

<footer class='pt-5 bg-black text-white'>

<div class='container'>

<div class='row'><div class='col-lg-3 order-last order-lg-first pt-4 pt-lg-0'>
<div class='logotype-foot'></div>
<div class='social py-3 mt-3'>
<p>105066, Россия, г. Москва, ул. Нижняя Красносельская 35, стр. 9</p>
<p><a class='text-white text-decoration-none' href='tel:+74954142518'>+7 (495) 414-25-18</a><br>
<a class='text-white' href='mailto:info@vseperegovory.ru'>info@vseperegovory.ru</a></p>
</div>
<div class='copyr text-muted pb-4'><i>© ВСЕПЕРЕГОВОРЫ.РФ</i></div>
</div>
<div class='col-lg-3'>
<p class='fw-bold'>ПАРТНЕРСКИЕ САЙТЫ</p>
<p><a target='_blank' href='https://ruslanbalikov.com/' class='text-white' target="_blank">Руслан Баликов</a></p>
<p><a target='_blank' href='https://t.me/VseperegovoryBot' class='text-white' target="_blank">Задать вопрос в телеграмм</a></p>
<p><a target='_blank' href='https://isbusiness.ru/' class='text-white' target="_blank">Бизнес.РФ</a></p>
<p><a target='_blank' href='https://vk.com/vseperegovoryrf' class='text-white' target="_blank">VK</a></p>
<p><a target='_blank' href='https://xn--b1aaebddslflqceo7b4ksc.xn--p1ai/' class='text-white' target="_blank">Дневник для сыновей</a></p>
<p><a target='_blank' href='businessforesight.ru' class='text-white' target="_blank">Всероссийская Конференция для бизнеса</a></p>
</div>
<div class='col-lg-3 pt-4 pt-lg-0'>
<p class='fw-bold'>ONLINE-ШКОЛА</p>
<p><a href='https://isbusiness.ru/' target="_blank" class='text-white'>Войти в личный кабинет</a></p>
</div>
<div class='col-lg-3 pt-4 pt-lg-0'>
<p class='fw-bold'>ПОМОЩЬ</p>
<p><a href='confidentiality.docx' class='text-white' target="_blank">Политика конфиденциальности и обработки персональных данных</a></p>
<p><a href='sogl.docx' class='text-white' target="_blank">Соглашение об использовании переговорных навыковых карт</a></p>
<p><a href='license.pdf' class='text-white' target="_blank">Лицензия</a></p>
</div>
</div>

</div>

</footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    <script src="ajaxLib.js"></script>
<script>
    var scroll = 0;
    window.onscroll = onScroll;
    function onScroll() {  
        var top = window.pageYOffset;
        if(top>=300){
          console.log("block");
          // document.getElementById("navbar").classList.add("d-lg-block");
          // document.getElementById("burger").classList.remove("d-lg-none");

          document.getElementById("burger").style.transform = "skew(-12deg, 0deg) translate(0, 0)";
          document.getElementById("navbar").style.transform = "translate(0, 0)";
          document.getElementById("burger").style.opacity = "1";
          document.getElementById("navbar").style.opacity = "1";
        }else{
          console.log("none");
          // document.getElementById("navbar").classList.remove("d-lg-block");
          // document.getElementById("burger").classList.add("d-lg-none");
          document.getElementById("burger").style.transform = "skew(-12deg, 0deg) translate(0, -60px)";
          document.getElementById("navbar").style.transform = "translate(0, -60px)";
		  document.getElementById("burger").style.opacity = "0";
		  document.getElementById("navbar").style.opacity = "0";
        }
        console.log(top);
    }

    var canvasRigth = new bootstrap.Offcanvas(document.getElementById("offcanvasRight"));

    function openUrlCanvasRight(href){
        canvasRigth.hide();
        location.href = "#"+href;
    }
    onScroll();
    
    function sendRequest(type, elem){
        
        let inputs = elem.parentNode.getElementsByTagName("input");
        let name = inputs[0].value.trim();
        let phone = inputs[1].value.trim();
        if(name=="" || phone==""){
            alert("Заполните поля");
            return false;
        }
        let arrayOption = [];
        arrayOption["contentType"] = "application/x-www-form-urlencoded;charset=UTF-8";
        sendAjax("/request.php","type="+type+"&name="+name+"&phone="+phone,"hideModalRequest()","hideModalRequest()",arrayOption);
        
    }
    function hideModalRequest(){
        bootstrap.Modal.getInstance(document.getElementsByClassName("modal fade show")[0]).hide();
    }
    
</script>
    <!-- modal review -->
<div class="modal fade" id="ModalReview" tabindex="-1" aria-labelledby="ModalLabelReview" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
    <div class="itc-slider" data-slider="itc-slider">
        <div class="itc-slider-wrapper">
          <div class="itc-slider-items">
            <div class="itc-slider-item">
            
            </div>
            <div class="itc-slider-item">
              
            </div>
            <div class="itc-slider-item">
            
            </div>
            <div class="itc-slider-item">
            
            </div>
            <div class="itc-slider-item">
              
            </div>
            <div class="itc-slider-item">
              
            </div>
            <div class="itc-slider-item">
              
            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
            <div class="itc-slider-item">

            </div>
          </div>
        </div>
        <!-- Кнопки для перехода к предыдущему и следующему слайду -->
        <button class="itc-slider-btn itc-slider-btn-prev"></button>
        <button class="itc-slider-btn itc-slider-btn-next"></button>
      </div>
    </div>
  </div>
</div>
<!-- modal review end -->
  </body>
</html>