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

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link href='style-vsep2.css?2' rel='stylesheet'>

    <title>ВСЕПЕРЕГОВОРЫ.РФ </title>
  </head>
  <body>

<!-- modal 1 -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Как всегда добиваться целей в переговорах</h5>
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
<!-- modal 1 end -->

<!-- modal 2 -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel2">Эффективные переговоры без подготовки</h5>
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
<div class="modal fade" id="ModalReview" tabindex="-1" aria-labelledby="ModalLabelReview" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabelReview">Отзыв</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
Текст отзыва
      </div>
    </div>
  </div>
</div>
<!-- modal review end -->
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

<header class='head text-white'>

<div class='videobg'>
<iframe src="https://www.youtube.com/embed/7k2zUIi8dYg?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&fs=0&iv_load_policy=3&loop=1&showinfo=0&playlist=7k2zUIi8dYg" frameborder="0" allowfullscreen></iframe>

<div class='container'>

<div class='d-xl-inline-block m-auto logotype py-5 py-xl-0 mt-lg-4 mt-xl-5'></div>

<div class='float-xl-end pt-5 tel text-center text-xl-end fs-5'>
<a class='text-white text-decoration-none' href="tel:+7(495)414-25-18">+7 (495) 414-25-18</a><br><a class='text-white' href='mailto:info@vseperegovory.ru'>info@vseperegovory.ru</a>
</div>

<div class='d-xl-inline-block ms-3 mt-4 text-center'>

<div class='px-4 py-2 btn-wind d-inline-block border border-2 border-secondary'>
<a href='#corpclient' class='fs-5 text-decoration-none text-black m-link'>Корпоративное обучение</a>
</div>
<div class='px-4 py-2 btn-wind d-inline-block border border-2 border-secondary'>
<a href='#indiclient' class='fs-5 text-decoration-none text-black m-link'>Индивидуальное обучение</a>
</div>
<div class='px-4 py-2 d-inline-block btn-wind border border-2 border-secondary'><a href='#accprog' class='fs-5 text-decoration-none text-black m-link'>Аккредитованные программы</a></div>
<div class='px-4 pt-1 align-top d-inline-block btn-wind border border-2 border-secondary'><a href='/inforg' class='fs-5 text-decoration-none text-black m-link lh-1'>Сведения об образовательной организации</a></div>
<a class='fs-5 align-top text-decoration-none text-danger' href="https://isbusiness.ru/"><div class='py-3 lh-lg d-inline-block btn-red-wind2 border border-2 border-danger'>Войти</div></a>

</div>

<div class='d-lg-flex'>

<div class='social pt-4 pt-sm-5 d-xl-inline-block text-center mt-4 mt-xl-0 text-xl-start float-xl-start'>
<a href='https://vk.com/vseperegovoryrf'><div class='vk-w mx-3 mx-xl-0 py-4 d-inline-block d-xl-block'></div></a>
<a href='https://t.me/'><div class='tg-w mx-3 mx-xl-0 py-4 d-none'></div></a>
</div>

<div class='fw-bold stanusp2 ps-xl-4 text-center text-xl-start d-lg-inline-block text-secondary-emphasis'>
PRO
</div>

<div class='fw-bold fs-3 ps-1 pt-3 mt-4 text-center text-xl-start d-lg-inline-block text-uppercase'>
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
<div class='float-lg-end mt-2 text-center fs-5'>
<a href="tel:+74954142518" class='text-black d-inline-block pe-5 align-middle'>
+7 (495) 414-25-18
</a>
<a href='https://isbusiness.ru/' class='text-decoration-none text-danger align-middle fs-6 me-5 me-xxl-0 pe-5 pe-xxl-0'>Войти в кабинет</a>
</div>
</div>
</div>
<!-- end navbar -->


<main>

<div class='container'>


<section id='events' class='mb-4 position-relative'>

<div class='py-5 ps-lg-5 fs-1 fw-bold px-3 text-center'>Мероприятия</div>

<div class='arrows mx-5 my-4 d-none d-md-block position-absolute end-0'>
<div onclick="document.getElementById('events_sel').scrollTo(
{  
left: document.getElementById('events_sel').scrollLeft-Number(document.getElementById('events_sel').scrollWidth/2),  
behavior: 'smooth'}
);" class='d-inline-block arrowl me-3'></div>
<div onclick="document.getElementById('events_sel').scrollTo(
{  left: Number(document.getElementById('events_sel').scrollWidth/2),  behavior: 'smooth',}
);" class='d-inline-block arrowr'></div>
</div>

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

</div>

</section>


<section class='pt-lg-4 position-relative'>

<div class='fs-1 fw-bold text-center'>Отзывы</div>
<div class='py-5'>

<div class='arrows mx-5 my-4 d-none d-md-block position-absolute end-0'>
<div onclick="document.getElementById('review_sel').scrollTo(
{  
left: document.getElementById('review_sel').scrollLeft-Number(document.getElementById('review_sel').scrollWidth/2),  
behavior: 'smooth'}
);" class='d-inline-block arrowl me-3'></div>
<div onclick="document.getElementById('review_sel').scrollTo(
{  left: Number(document.getElementById('review_sel').scrollWidth/2),  behavior: 'smooth',}
);" class='d-inline-block arrowr'></div>
</div>

<div id='review_sel' class='px-lg-5 overflow-auto text-nowrap scroll-hide'>

<?
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
?>

<div class='reviewblock d-md-inline-block ms-3 ms-lg-0 me-3 my-4 my-md-0'>
<div class='event1' data-bs-toggle="modal" data-bs-target="#ModalReview"></div>
</div>

<div class='reviewblock d-md-inline-block mx-3 my-4 my-md-0'>
<div class='event2' data-bs-toggle="modal" data-bs-target="#ModalReview"></div>
</div>

<div class='reviewblock d-md-inline-block mx-3 my-4 my-md-0'>
<div class='event3' data-bs-toggle="modal" data-bs-target="#ModalReview"></div>
</div>

<div class='reviewblock d-md-inline-block mx-3 my-4 my-md-0'>
<div class='event4' data-bs-toggle="modal" data-bs-target="#ModalReview"></div>
</div>

</div>

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
<iframe class='vimvid' data-original="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<div class='col-lg-6'>
<div class='startteach p-5 text-white'>
<p>Наше положение в обществе и успешность, зависит от способности выстраивать коммуникации с людьми и умения вести переговоры.</p>
<p>Каждый из нас получает то, о чем смог договориться. Обучаясь вести переговоры — ты учишься добиваться того, чего хочешь!</p>
<div class='d-lg-inline-block mt-4'>
<a href="https://isbusiness.ru/" class='btn btn-lg btn-red-wind me-4 px-5 align-top text-white rounded-0'>Начать обучение</a>
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
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
<button class='btn btn-red-wind text-white rounded-0 px-4 fs-5 d-block my-4 mx-auto' data-bs-toggle="collapse" data-bs-target="#corptech" aria-expanded="false" aria-controls="corptech">Посмотреть перечень программ</button>
</div>
<div class='col-lg-6 order-first order-lg-last'>
<iframe class='vimvid' data-original="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
</div>

<div class='row row-cols-lg-3 g-4 pt-5 text-center collapse' id='corptech'>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal2"><div class='col'><div class='p-4 bg-light carddp1 card carddp1_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal1"><div class='col'><div class='p-4 bg-light carddp2 card carddp2_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal3"><div class='col'><div class='p-4 bg-light carddp3 card carddp3_bg rounded-0 fs-4'></div></div></a>

<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal2"><div class='col'><div class='p-4 bg-light carddp1 card carddp1_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal1"><div class='col'><div class='p-4 bg-light carddp2 card carddp2_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#exampleModal3"><div class='col'><div class='p-4 bg-light carddp3 card carddp3_bg rounded-0 fs-4'></div></div></a>
</div>
</section>


<section class='px-lg-5 py-5' id='indiclient'>
<div class='fs-1 fw-bold pb-5'>Индивидуальное обучение</div>

<div class='row'>
<div class='col-lg-6'>
<iframe class='vimvid' data-original="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<div class='col-lg-6 text-center'>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
Небольшой текст<br>
<button class='btn btn-red-wind text-white rounded-0 px-4 fs-5 d-block my-4 mx-auto' data-bs-toggle="collapse" data-bs-target="#inditech" aria-expanded="false" aria-controls="inditech">Посмотреть перечень программ</button>
</div>
</div>

<div class='row row-cols-lg-3 g-4 pt-5 text-center collapse' id='inditech'>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP1"><div class='col'><div class='p-4 bg-light cardp1 card cardp01_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP2"><div class='col'><div class='p-4 bg-light cardp2 card cardp02_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP3"><div class='col'><div class='p-4 bg-light cardp3 card cardp03_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP4"><div class='col'><div class='p-4 bg-light cardp4 card cardp04_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP5"><div class='col'><div class='p-4 bg-light cardp5 card cardp05_bg rounded-0 fs-4'></div></div></a>
<a href='javascript:;' class='text-decoration-none text-black' data-bs-toggle="modal" data-bs-target="#ModalP6"><div class='col'><div class='p-4 bg-light cardp6 card cardp06_bg rounded-0 fs-4'></div></div></a>
</div>
</section>


<section class='px-lg-5 pb-5' id='accprog'>
<div class='fs-1 fw-bold pb-2'>Акредитованные программы</div>
<div class='fs-5 fw-bold pb-5'>Программы, акредитованные Министерством Экономического развития РФ</div>
<div class='row'>
<div class='col-lg-5 text-center'>
<iframe class='vimvid' data-original="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="//player.vimeo.com/video/317215992?color=ffffff&amp;badge=0&amp;title=0&amp;byline=0&amp;portrait=0"></iframe></div>
<div class='col-lg-7 text-center'>
<a href='Delovye_peregovory.pdf' class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Деловые переговоры</div></div></a>
<a href='Biznes-perezagruzka.pdf' class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Бизнес-перезагрузка</div></div></a>
<a href='Bystryi_774_start_v_biznese.pdf' class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Быстрый старт в бизнесе</div></div></a>
<a href='delovaya_igra_INVESTOR.pdf' class='text-decoration-none text-black'><div class='col'><div class='p-4 mb-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Деловая игра «Инвестор»</div></div></a>
<a href='Turnir_po_delovym_peregovoram.pdf' class='text-decoration-none text-black'><div class='col'><div class='p-4 bg-light carddp_pdf card rounded-0 h-100 fs-4 border'>Турнир по деловым переговорам</div></div></a>
</div></div>
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
<p><a target='_blank' href='https://ruslanbalikov.com/' class='text-white'>Руслан Баликов</a></p>
<p><a target='_blank' href='https://t.me/VseperegovoryBot' class='text-white'>Задать вопрос в телеграмм</a></p>
<p><a target='_blank' href='https://isbusiness.ru/' class='text-white'>Бизнес.РФ</a></p>
<p><a target='_blank' href='https://vk.com/vseperegovoryrf' class='text-white'>Вк</a></p>
</div>
<div class='col-lg-3 pt-4 pt-lg-0'>
<p class='fw-bold'>ONLINE-ШКОЛА</p>
<p><a href='https://isbusiness.ru/' class='text-white'>Войти в личный кабинет</a></p>
</div>
<div class='col-lg-3 pt-4 pt-lg-0'>
<p class='fw-bold'>ПОМОЩЬ</p>
<p><a href='#' class='text-white'>Политика конфиденциальности и обработки персональных данных</a></p>
<p><a href='sogl.docx' class='text-white'>Соглашение об использовании переговорных навыковых карт</a></p>
<p><a href='#' class='text-white'>Лицензия</a></p>
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

  </body>
</html>