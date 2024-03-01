const home_menu_btn = document.querySelector('.home-menu-btn');
const home_menu_drop_downs = document.querySelector('.home-menu-drop-downs');

document.addEventListener('click', (e)=>{
    if(e.target === home_menu_btn && e.target === home_menu_drop_downs){
        home_menu_drop_downs.style.display = 'block';
    }else{
        home_menu_drop_downs.style.display = 'none';
    }
   console.log(e.target);
})

// hero section animation functionality
const hero_Btns = document.querySelector('.hero-content-buttons');
const boxes = document.querySelector('.boxes-1');
const boxes_2 = document.querySelector('.boxes-2');
const content_Para = document.querySelector('.what-we-do-content p');
const What_we_do_donate_btn = document.querySelector('.What-we-do-donate-btn');
const line_board = document.querySelector('.line-board');
const help_section_h2 = document.querySelector('.help-section-h2');
const helping_boxes = document.querySelector('.helping-boxes');
const support_section_h2 = document.querySelector('.support-section-h2');
const support_section_p = document.querySelector('.support-section-p');
const support_boxes = document.querySelector('.support-boxes');
const join_mission_section_img = document.querySelector('.join-mission-section-img');
const inner_join_mission = document.querySelector('.inner-join-mission');
const inner_join_mission_h2 = document.querySelector('.inner-join-mission-h2');
const inner_join_mission_p = document.querySelector('.inner-join-mission-p');
const volunteers_container_h2 = document.querySelector('.volunteers-container-h2');
const box_color_1 = document.querySelector('.box-color-1');
const box_color_2 = document.querySelector('.box-color-2');
const box_color_3 = document.querySelector('.box-color-3');
const box_color_4 = document.querySelector('.box-color-4');
const mission_left_img = document.querySelector('.mission-left-img');
const mission_left_h2 = document.querySelector('.mission-left-h2');
const mission_left_p = document.querySelector('.mission-left-p');
const mission_right_img = document.querySelector('.mission-right-img');
const mission_left_content = document.querySelector('.mission-left-content');
const subscribe_img_img = document.querySelector('.subscribe-img-img');
const subscribe_content_img = document.querySelector('.subscribe-content-img');
const subscribe_content_h2 = document.querySelector('.subscribe-content-h2');
const form = document.querySelector('form');
const footer = document.querySelector('footer');


window.addEventListener('scroll', ()=>{
    if(window.scrollY>96){
        hero_Btns.classList.add('hero-content-buttons-visible');
    }
    if(window.scrollY>400){
       boxes.classList.add('boxes-visible');
    }
    if(window.scrollY>750){
        boxes_2.classList.add('boxes-2-visible');
    }
    if(window.scrollY>740){
        content_Para.classList.add('what-we-do-content-visible');
    }
    if(window.scrollY>870){
        What_we_do_donate_btn.classList.add('What-we-do-donate-btn-visible');
    }
    if(window.scrollY>1200){
        line_board.classList.add('line-board-visible');
    }
    if(window.scrollY>1420){
        help_section_h2.classList.add('help-section-visible');
    }
    if(window.scrollY>1700){
        helping_boxes.classList.add('helping-boxes-visible')
    }
    if(window.scrollY>2300){
        support_section_h2.classList.add('support-section-visible');
    }
    if(window.scrollY>2500){
        support_section_p.classList.add('support-section-p-visible')
    }
    if(window.scrollY>2700){
        support_boxes.classList.add('support-boxes-visible')
    }
    if(window.scrollY>3000){
        join_mission_section_img.classList.add('join-mission-section-img-visible');
    }
    if(window.scrollY>3000){
        inner_join_mission.classList.add('inner-join-mission-visible');
    }
    if(window.scrollY>3184){
        inner_join_mission_h2.classList.add('inner-join-mission-h2-visible');
        inner_join_mission_p.classList.add('inner-join-mission-p-visible');
    }
    if(window.scrollY>3680){
        volunteers_container_h2.classList.add('volunteers-container-h2-visible');
    }
    if(window.scrollY>3813){
        box_color_1.classList.add('box-color-1-visible');
    }
    if(window.scrollY>3753){
        box_color_3.classList.add('box-color-3-visible');
    }
    if(window.scrollY>4080){
        box_color_4.classList.add('box-color-4-visible')
    }
    if(window.scrollY>4200){
        box_color_2.classList.add('box-color-2-visible');
    }
    if(window.scrollY>4632){
        mission_left_img.classList.add('mission-left-img-visible')
    }
    if(window.scrollY>4715){
        mission_left_h2.classList.add('mission-left-h2-visible')
    }
    if(window.scrollY>4848){
        mission_left_p.classList.add('mission-left-p-visible')
    }
    if(window.scrollY>4931){
        mission_right_img.classList.add('mission-right-img-visible')
    }
    if(window.scrollY>5060){
        mission_left_content.classList.add('mission-left-content-visible');
    }
    if(window.scrollY>5495){
        subscribe_img_img.classList.add('subscribe-img-img-visible')
    }
    if(window.scrollY>5444){
        subscribe_content_img.classList.add('subscribe-content-img-visible');
    }
    if(window.scrollY>5554){
        subscribe_content_h2.classList.add('subscribe-content-h2-visible');
    }
    if(window.scrollY>5746){
        form.classList.add('form-visible')
    }
    if(window.scrollY>6042){
        footer.classList.add('footer-visible')
    }
})


const hero_content_h2 = document.querySelector('.hero-content-h2');
const hero_content_p = document.querySelector('.hero-content-p');

if(window.outerWidth<321){
    hero_content_h2.classList.remove('hero-content-h2');
    hero_content_p.classList.remove('hero-content-p');

}