/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var content_container = document.createElement("div");
content_container.style.width = "1440px";
content_container.id = "content_container";
content_container.style.position = "relative";
content_container.style.display = "block";
content_container.style.margin = "0 auto";
document.body.appendChild(content_container);


var page_main_page_ek1 = document.createElement("div");
page_main_page_ek1.id = "page_main_page_ek1";
page_main_page_ek1.style.width = "window.innerWidth";
page_main_page_ek1.style.height = "(window.innerHeight)";
page_main_page_ek1.style.left = "0px";
page_main_page_ek1.style.top = "0px";
page_main_page_ek1.style.position = "absolute";
content_container.appendChild(page_main_page_ek1);

var _bg__main_page_ek2 = document.createElement("div");
_bg__main_page_ek2.id = "_bg__main_page_ek2";
_bg__main_page_ek2.style.left = "0px";
_bg__main_page_ek2.style.top = "0px";
_bg__main_page_ek2.style.width = "1280px";
_bg__main_page_ek2.style.height = "960px";
_bg__main_page_ek2.style.background = 'rgba(247.56,234.57,234.57,0.7)';

page_main_page_ek1.appendChild(_bg__main_page_ek2);

var group_3 = document.createElement("div");
group_3.id = "group_3";
group_3.style.width = "2299px";
group_3.style.height = "1200px";
group_3.style.left = "-503px";
group_3.style.top = "-65px";
group_3.style.position = "absolute";
page_main_page_ek1.appendChild(group_3);

var group_2 = document.createElement("div");
group_2.id = "group_2";
group_2.style.width = "window.innerWidth";
group_2.style.height = "(window.innerHeight)";
group_2.style.left = "0px";
group_2.style.top = "0px";
group_2.style.position = "absolute";
group_3.appendChild(group_2);

var rectangle_72 = document.createElement("div");
rectangle_72.id = "rectangle_72";
rectangle_72.style.left = "503px";
rectangle_72.style.top = "65px";
rectangle_72.style.width = "1280px";
rectangle_72.style.height = "960px";
rectangle_72.style.background = 'rgba(196,170,170,1)';

group_2.appendChild(rectangle_72);

var ellipse_1 = document.createElement("div");
ellipse_1.id = "ellipse_1";
ellipse_1.style.left = "0px";
ellipse_1.style.top = "0px";
ellipse_1.style.width = "1200px";
ellipse_1.style.height = "1200px";
ellipse_1.style.borderRadius = "600px / 600px";
ellipse_1.style.background = 'rgba(6.38,6.28,6.28,1)';

group_2.appendChild(ellipse_1);

var subtract = document.createElement("img");
subtract.id = "subtract";
subtract.style.left = "1649px";
subtract.style.top = "65px";
subtract.style.width = "650px";
subtract.style.height = "650px";
subtract.src = "skins/subtract.png";

group_3.appendChild(subtract);

var group_1 = document.createElement("img");
group_1.id = "group_1";
group_1.style.left = "619px";
group_1.style.top = "133px";
group_1.style.width = "1049px";
group_1.style.height = "828px";
group_1.src = "skins/group_1.png";

group_3.appendChild(group_1);

var __mother_teresa = document.createElement("div");
__mother_teresa.innerHTML = "-Mother Teresa";
__mother_teresa.style.fontWeight = "bold";
__mother_teresa.style.textAlign = "left";
__mother_teresa.id = "__mother_teresa";
__mother_teresa.style.left = "456px";
__mother_teresa.style.top = "575px";
__mother_teresa.style.width = "228px";
__mother_teresa.style.height = "56px";
__mother_teresa.style.fontFamily = "Roboto";
__mother_teresa.style.fontSize = "30px";
__mother_teresa.style.textShadow = "5px 6px 4px rgba(0,0,0,0.25)";
__mother_teresa.style.overflow = "hidden";
__mother_teresa.style.color = "#000000";

page_main_page_ek1.appendChild(__mother_teresa);

var _home = document.createElement("div");
_home.innerHTML = "Home";
_home.style.fontWeight = "bold";
_home.style.textAlign = "left";
_home.id = "_home";
_home.style.left = "577px";
_home.style.top = "120px";
_home.style.width = "82px";
_home.style.height = "45px";
_home.style.fontFamily = "Roboto";
_home.style.fontSize = "24px";
_home.style.textShadow = "2px 2px 1px rgba(0,0,0,0.25)";
_home.style.overflow = "hidden";
_home.style.color = "#5E3D3D";

page_main_page_ek1.appendChild(_home);

_home.style.cursor = "pointer";
_home.onclick = (e) => {
	@page_view("home");
}

var _about = document.createElement("div");
_about.innerHTML = "About";
_about.style.fontWeight = "bold";
_about.style.textAlign = "left";
_about.id = "_about";
_about.style.left = "672px";
_about.style.top = "120px";
_about.style.width = "82px";
_about.style.height = "45px";
_about.style.fontFamily = "Roboto";
_about.style.fontSize = "24px";
_about.style.textShadow = "2px 2px 1px rgba(0,0,0,0.25)";
_about.style.overflow = "hidden";
_about.style.color = "#5E3D3D";

page_main_page_ek1.appendChild(_about);

_about.style.cursor = "pointer";
_about.onclick = (e) => {
	@page_view("about_us");
}

var _contact_us = document.createElement("div");
_contact_us.innerHTML = "Contact us";
_contact_us.style.fontWeight = "bold";
_contact_us.style.textAlign = "left";
_contact_us.id = "_contact_us";
_contact_us.style.left = "767px";
_contact_us.style.top = "120px";
_contact_us.style.width = "134px";
_contact_us.style.height = "45px";
_contact_us.style.fontFamily = "Roboto";
_contact_us.style.fontSize = "24px";
_contact_us.style.textShadow = "2px 2px 1px rgba(0,0,0,0.25)";
_contact_us.style.overflow = "hidden";
_contact_us.style.color = "#5E3D3D";

page_main_page_ek1.appendChild(_contact_us);

_contact_us.style.cursor = "pointer";
_contact_us.onclick = (e) => {
	@page_view("contact");
}

var signup = document.createElement("div");
signup.id = "signup";
signup.style.width = "101px";
signup.style.height = "34px";
signup.style.left = "914px";
signup.style.top = "117px";
signup.style.position = "absolute";
page_main_page_ek1.appendChild(signup);

var rectangle_51 = document.createElement("img");
rectangle_51.id = "rectangle_51";
rectangle_51.style.left = "0px";
rectangle_51.style.top = "0px";
rectangle_51.style.width = "101px";
rectangle_51.style.height = "34px";
rectangle_51.src = "skins/rectangle_51.png";

signup.appendChild(rectangle_51);

var sign_up = document.createElement("div");
sign_up.innerHTML = "Sign Up";
sign_up.style.fontWeight = "bold";
sign_up.style.textAlign = "left";
sign_up.id = "sign_up";
sign_up.style.left = "8px";
sign_up.style.top = "3px";
sign_up.style.width = "101px";
sign_up.style.height = "45px";
sign_up.style.fontFamily = "Roboto";
sign_up.style.fontSize = "24px";
sign_up.style.overflow = "hidden";
sign_up.style.color = "#FAF9F9";

signup.appendChild(sign_up);

var signin = document.createElement("div");
signin.id = "signin";
signin.style.width = "101px";
signin.style.height = "34px";
signin.style.left = "1045px";
signin.style.top = "117px";
signin.style.position = "absolute";
page_main_page_ek1.appendChild(signin);

var rectangle_51_ek1 = document.createElement("img");
rectangle_51_ek1.id = "rectangle_51_ek1";
rectangle_51_ek1.style.left = "0px";
rectangle_51_ek1.style.top = "0px";
rectangle_51_ek1.style.width = "101px";
rectangle_51_ek1.style.height = "34px";
rectangle_51_ek1.src = "skins/rectangle_51_ek1.png";

signin.appendChild(rectangle_51_ek1);

var sign_in = document.createElement("div");
sign_in.innerHTML = "Sign In";
sign_in.style.fontWeight = "bold";
sign_in.style.textAlign = "left";
sign_in.id = "sign_in";
sign_in.style.left = "13px";
sign_in.style.top = "3px";
sign_in.style.width = "92px";
sign_in.style.height = "45px";
sign_in.style.fontFamily = "Roboto";
sign_in.style.fontSize = "24px";
sign_in.style.overflow = "hidden";
sign_in.style.color = "#FAF9F9";

signin.appendChild(sign_in);

var rectangle_53 = document.createElement("img");
rectangle_53.id = "rectangle_53";
rectangle_53.style.left = "615px";
rectangle_53.style.top = "415px";
rectangle_53.style.width = "603px";
rectangle_53.style.height = "470px";
rectangle_53.src = "skins/rectangle_53.png";

page_main_page_ek1.appendChild(rectangle_53);

var __if_you_can_t_feed_100_people__feed_just_one__ = document.createElement("div");
__if_you_can_t_feed_100_people__feed_just_one__.innerHTML = "\"If you can\'t feed 100 people, <br/>feed just one.\" ";
__if_you_can_t_feed_100_people__feed_just_one__.style.fontWeight = "bold";
__if_you_can_t_feed_100_people__feed_just_one__.style.textAlign = "left";
__if_you_can_t_feed_100_people__feed_just_one__.id = "__if_you_can_t_feed_100_people__feed_just_one__";
__if_you_can_t_feed_100_people__feed_just_one__.style.left = "165px";
__if_you_can_t_feed_100_people__feed_just_one__.style.top = "346px";
__if_you_can_t_feed_100_people__feed_just_one__.style.width = "493px";
__if_you_can_t_feed_100_people__feed_just_one__.style.height = "261px";
__if_you_can_t_feed_100_people__feed_just_one__.style.fontFamily = "Roboto";
__if_you_can_t_feed_100_people__feed_just_one__.style.fontSize = "60px";
__if_you_can_t_feed_100_people__feed_just_one__.style.lineHeight = "73.012497425079px";
__if_you_can_t_feed_100_people__feed_just_one__.style.textShadow = "5px 6px 4px rgba(0,0,0,0.25)";
__if_you_can_t_feed_100_people__feed_just_one__.style.overflow = "hidden";
__if_you_can_t_feed_100_people__feed_just_one__.style.color = "#000000";

page_main_page_ek1.appendChild(__if_you_can_t_feed_100_people__feed_just_one__);

var mask_group = document.createElement("img");
mask_group.id = "mask_group";
mask_group.style.left = "182px";
mask_group.style.top = "123px";
mask_group.style.width = "220px";
mask_group.style.height = "189px";
mask_group.src = "skins/mask_group.png";

page_main_page_ek1.appendChild(mask_group);