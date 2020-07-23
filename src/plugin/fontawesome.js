import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGuitar,faGamepad,faImage,faFilm,faUsers,faAddressBook,faLaptopCode,faEllipsisH,
  faUser, faPowerOff, faCog, faFileAlt, faBook, faPen, faEdit, faYenSign, faBolt, faLightbulb, faThLarge, faEnvelopeOpenText,
  faStar, faUserPlus, faCommentDots, faHeadset, faQuestionCircle, faQuestion, faCoins, faCommentDollar, faComment, faHeart,
  faShareAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(faGuitar,faGamepad,faImage,faFilm,faUsers,faAddressBook,faLaptopCode,faEllipsisH,
  faUser,faPowerOff,faCog, faFileAlt,faBook,faPen,faEdit,faYenSign,faBolt,faLightbulb,faThLarge,faEnvelopeOpenText,
  faStar,faUserPlus,faCommentDots,faHeadset,faQuestionCircle,faQuestion,faCoins,faCommentDollar,faComment,faHeart,
  faEllipsisH,faShareAlt,faCaretDown,faCaretUp);

Vue.component('font-awesome-icon', FontAwesomeIcon)

