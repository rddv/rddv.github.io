// $( document ).ready(function() {
//     // help functions
//     function buildChildsAge(count) {
//         // const ageChildMax = 17;
//         // const selectEl = $('<select name="age-child-'+ count + '"/>');
//         // const inputField = $('<div class="input-field age__field"><div/>');
//         // const ageRow = $('<div class="age__row"><div/>');
        
//         // $('.age__wrap--dropdown').text('');
//         // for (var i = 1; i <= ageChildMax; i++) {
//         //     selectEl.append($('<option/>').html(i));
//         // }
//         // inputField.append(selectEl);
//         // inputField.append('<i class="fas fa-chevron-down"></i>');
//         // ageRow.append($('<span class="age__label">Возраст</span>'));
//         // ageRow.append(inputField);

//         // for (var j = 0; j < count; j++) {
//         //     $('.age__wrap--dropdown').after($(ageRow));
//         // }
//         // $('.age__row select').formSelect();

//         var html = '';
//         for (var i = 0; i < count; i++) {
//             html += 
//             '<div class="age__row">' +
//                 '<span class="age__label">Возраст</span>' +
//                 '<div class="input-field age__field">' +
//                     '<select name="kids-age-' + i +'">';
//                         for (var j = 1; j < 18; j++ ) {
//                             html += '<option value="' + j + '">' + j + '<option/>';
//                         }
//                     html += '</select>' +
//                     '<i class="fas fa-chevron-down"></i>' +
//                 '</div>' +
//             '</div>';
//         };
//         $('.age__wrap--dropdown').html(html);
//         $('.age__row select').formSelect();
//     }

//     const interRu = {
//         firstDay: 1,
//         cancel: 'Отмена',
//         done: 'Ок',
//         months: [
//             'Январь',
//             'Февраль',
//             'Март',
//             'Апрель',
//             'Май',
//             'Июнь',
//             'Июль',
//             'Август',
//             'Сентябрь',
//             'Октябрь',
//             'Ноябрь',
//             'Декабрь',
//         ],
//         monthsShort: [
//             'Янв',
//             'Фев',
//             'Март',
//             'Апр',
//             'Май',
//             'Июнь',
//             'Июль',
//             'Авг',
//             'Сен',
//             'Окт',
//             'Ноя',
//             'Дек',
//         ],
//         weekdays: [
//             'Воскресенье',
//             'Понедельник',
//             'Вторник',
//             'Среда',
//             'Четверг',
//             'Пятница',
//             'Суббота',
//         ],
//         weekdaysShort: [
//             'Пн',
//             'Вт',
//             'Ср',
//             'Чт',
//             'Пт',
//             'Сб',
//             'Вс',
//         ],
//         weekdaysAbbrev: [
//             'Пн',
//             'Вт',
//             'Ср',
//             'Чт',
//             'Пт',
//             'Сб',
//             'Вс',
//         ],
//     };

//     const datapickerOption = {
//         i18n: interRu,
//     };

//     // dropdown
//     $('.dropdown-close').each(function () {
//         $(this).on('click', function (e) {
//             e.preventDefault();
//             $(this).closest('.dropdown-content')[0].classList.remove('open');
//         });
//     });
//     $('.dropdown-trigger').each(function () {
//         $(this).on('click', function (e) {
//             console.log('e:', this);
//             e.preventDefault();
//             $(this).next().addClass('open');
//         });
//     });

//     // age dropdown
//     $('.tourists').on('click', function () {
//         $(this).find('#age-dropdown').show();
//     });
//     $('#age-dropdown').on('click', function(e) {
//         if ($(e.target).closest('.age__counter-minus').length) {
//             const resEl = $(e.target).closest('.age__counter-minus').next('.age__result');
//             const res = +resEl.text() - 1;
//             if (res >= 0) {
//                 resEl.text(res);
//             }
//         }

//         if ($(e.target).closest('.age__counter-plus').length) {
//             const resEl = $(e.target).closest('.age__counter-plus').prev('.age__result');
//             const res = +resEl.text() + 1;
//             resEl.text(res);
//         }

//         if ($(e.target).closest('.age__counter--kids').length) {
//             const resEl = $(e.target).closest('.age__counter--kids').find('.age__result');
//             $('.tourists__item-label--kids').text(resEl.text());
//             const resCount = +resEl.text();

//             buildChildsAge(resCount);
//         }

//         if ($(e.target).closest('.age__counter--adult').length) {
//             const resEl = $(e.target).closest('.age__counter--adult').find('.age__result');
//             $('.tourists__item-label--adult').text(resEl.text());
//         }
//     });

//     // Form tab
//     $('.tab__link').each(function () {
//         $(this).on('click', function (e) {
//             $('.tab__link').each(function () {
//                 $(this).removeClass('active');
//             });
//             e.preventDefault();
//             $(this).addClass('active');
//         });
//     });

//     // Show all
//     $('.promotion-all').each(function () {
//         $(this).on('click', function (e) {
//             $(this).closest('.publish').addClass('show--all');
//         });
//     });

//     // datapicker input onchange

//     $('#data-tour-start').change(function () {
//         $(this).val() ? $(this).next().text('') : $(this).next().text('От');
//     });

//     $('#data-tour-end').change(function () {
//         $(this).val() ? $(this).next().text('') : $(this).next().text('До');
//     });

//     $('select').formSelect();
//     $('#data-tour-start').datepicker(datapickerOption);
//     $('#data-tour-end').datepicker(datapickerOption);
//     //$('.materialboxed').materialbox();

//     $('.slick-slider').slick({
//         infinite: true,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1200,
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                     infinite: true,
//                 },
//             },
//             {
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 650,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     });

//     // click on document
//     $(document).on('click', function (e) {
//         const dropdownContent = $('.dropdown-content');

//         if ($(e.target).closest('.icon-nav').length) {
//             $('.header-menu').addClass('show');
//         } 

//         if ($(e.target).closest('.dropdown').length) {
//             $(e.target).closest('.dropdown').find('.dropdown-content').addClass('open');
//         } 

//         if (!$(e.target).closest('#age-dropdown').length || $(e.target).closest('.dropdown-trigger').length) {
//             // $('#age-dropdown').toggle();
//         }

//         if (!$(e.target).closest('.tourists').length) {
//             $(this).find('#age-dropdown').hide();
//         }
//     });
// });
